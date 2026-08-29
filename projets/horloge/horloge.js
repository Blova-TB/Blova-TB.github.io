class ClockController {
    /**
     * @param {HTMLElement} svgElement 
     * @param {HTMLElement} digitalElement 
     * @param {HTMLElement} toggleBtn 
     */
    constructor(svgElement, digitalElement, toggleBtn) {
        this.svg = svgElement;
        this.digital = digitalElement;
        this.toggleBtn = toggleBtn;
        
        // État : temps absolu en minutes (0 - 1439 pour 24h)
        this.state = {
            totalMinutes: 720, // Init à 12:00
            isDragging: false,
            activeHand: null
        };

        this.initEvents();
        this.render();
    }

    initEvents() {
        // Toggle affichage digital
        this.toggleBtn.addEventListener('click', () => {
            this.digital.classList.toggle('hidden');
        });

        // Pointer Events pour unification Souris / Touch
        this.svg.addEventListener('pointerdown', this.onPointerDown.bind(this));
        document.addEventListener('pointermove', this.onPointerMove.bind(this));
        document.addEventListener('pointerup', this.onPointerUp.bind(this));
    }

    /**
     * Récupère l'angle 0-359 depuis un événement pointeur
     */
    getPointerAngle(event) {
        const rect = this.svg.getBoundingClientRect();
        // Calcul du centre relatif à la vue
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const x = event.clientX - centerX;
        const y = event.clientY - centerY;
        
        let angle = (Math.atan2(y, x) * (180 / Math.PI)) + 90;
        if (angle < 0) angle += 360;
        return angle;
    }

    onPointerDown(e) {
        if (!e.target.classList.contains('draggable')) return;
        this.state.isDragging = true;
        this.state.activeHand = e.target.dataset.type; // 'hour' ou 'minute'
        e.target.setPointerCapture(e.pointerId);
    }

    onPointerMove(e) {
        if (!this.state.isDragging) return;
        e.preventDefault(); // Empêche le scroll sur mobile

        const rawAngle = this.getPointerAngle(e);
        this.updateTimeFromAngle(rawAngle);
        this.render();
    }

    onPointerUp(e) {
        if (!this.state.isDragging) return;
        this.state.isDragging = false;
        this.state.activeHand = null;
    }

    /**
     * Mise à jour de l'état temporel selon l'aiguille manipulée
     */
    updateTimeFromAngle(angle) {
        const currentHours = Math.floor(this.state.totalMinutes / 60);
        const currentMinutes = this.state.totalMinutes % 60;
        const isPM = currentHours >= 12;
        const pmOffset = isPM ? 720 : 0;

        if (this.state.activeHand === 'minute') {
            // Snapping de 6 degrés (1 minute)
            const snappedAngle = Math.round(angle / 6) * 6;
            let newMinutes = Math.round(snappedAngle / 6);
            if (newMinutes === 60) newMinutes = 0;

            // Détection du franchissement de l'heure (edge case 59 -> 0 ou 0 -> 59)
            let hourDelta = 0;
            if (currentMinutes > 45 && newMinutes < 15) hourDelta = 1;
            else if (currentMinutes < 15 && newMinutes > 45) hourDelta = -1;

            let newHours = currentHours + hourDelta;
            // Gestion du cycle 24h
            if (newHours < 0) newHours = 23;
            if (newHours > 23) newHours = 0;

            this.state.totalMinutes = (newHours * 60) + newMinutes;
        } 
        else if (this.state.activeHand === 'hour') {
            // L'aiguille des heures parcourt 12h (720 minutes) sur 360 degrés
            // 1 degré = 2 minutes
            let timeIn12h = Math.round(angle * 2); 
            if (timeIn12h === 720) timeIn12h = 0;
            
            // On maintient le cycle AM/PM actuel pendant la manipulation de l'heure
            this.state.totalMinutes = timeIn12h + pmOffset;
        }
    }

    render() {
        const hours = Math.floor(this.state.totalMinutes / 60);
        const minutes = this.state.totalMinutes % 60;

        // Calcul des angles de rendu
        const minuteAngle = minutes * 6; // 360 / 60
        // L'angle des heures dépend des heures ET des minutes écoulées
        const hourAngle = ((hours % 12) * 30) + (minutes * 0.5); 

        // Rendu SVG (via CSS Variables)
        this.svg.style.setProperty('--minute-angle', `${minuteAngle}deg`);
        this.svg.style.setProperty('--hour-angle', `${hourAngle}deg`);

        // Rendu Digital (format 24h avec padding de zéros)
        const formatH = String(hours).padStart(2, '0');
        const formatM = String(minutes).padStart(2, '0');
        this.digital.textContent = `${formatH}:${formatM}`;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('analog-clock');
    const digital = document.getElementById('digital-display');
    const toggle = document.getElementById('toggle-display');
    new ClockController(svg, digital, toggle);
});