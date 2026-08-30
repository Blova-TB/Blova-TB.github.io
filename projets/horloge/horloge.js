
const SVG_NS = "http://www.w3.org/2000/svg";

class ClockController {
    /**
     * @param {HTMLElement} svgElement 
     * @param {HTMLElement} digitalHoursElement
     * @param {HTMLElement} digitalMinutesElement
     * @param {HTMLElement} digitalAMPMElement
     * @param {HTMLElement} toggleBtn
     * @param {HTMLElement} toggleAMPMBtn
     * @param {HTMLElement} toggleHNumberBtn
     * @param {HTMLElement} toggleMNumberBtn
     */
    constructor(svgElement, digitalHoursElement, digitalMinutesElement, digitalAMPMElement, toggleBtn, toggleAMPMBtn, toggleHNumberBtn, toggleMNumberBtn) {
        this.svg = svgElement;
        this.digitalHours = digitalHoursElement;
        this.digitalMinutes = digitalMinutesElement;
        this.digitalAMPM = digitalAMPMElement;
        this.toggleBtn = toggleBtn;
        this.toggleAMPMBtn = toggleAMPMBtn;
        this.toggleHNumberBtn = toggleHNumberBtn;
        this.toggleMNumberBtn = toggleMNumberBtn;
        
        // État : temps absolu en minutes (0 - 1439 pour 24h)
        this.state = {
            totalMinutes: 720, // Init à 12:00
            isDragging: false,
            activeHand: null,
            lockedAMPM: true, // si false affichage des heures cassé
        };

        this.drawClockMarks();
        this.drawNumbers();
        this.initEvents();
        this.render();
    }

    initEvents() {
        // Toggle affichage digital
        this.toggleBtn.addEventListener('click', () => {
            this.digitalHours.classList.toggle('hidden');
            this.digitalMinutes.classList.toggle('hidden');
        });

        // Toggle AM/PM
        this.toggleAMPMBtn.addEventListener('click', () => {

            if (this.state.totalMinutes < 720) {
                this.state.totalMinutes += 720; // Passer à l'après-midi
                this.digitalAMPM.textContent = `De l'après-midi`;
            } else {
                this.state.totalMinutes -= 720; // Passer au matin
                this.digitalAMPM.textContent = `De la matinée`;
            }
            this.render();

            if (!this.hourGroupAM.classList.contains('hidden') || !this.hourGroupPM.classList.contains('hidden')) {
                this.hourGroupAM.classList.toggle('hidden');
                this.hourGroupPM.classList.toggle('hidden');
            }
        });

        // Toggle Heures
        this.toggleHNumberBtn.addEventListener('click', () => {

            if (this.hourGroupAM.classList.contains('hidden') && this.hourGroupPM.classList.contains('hidden')) {
                if (this.state.totalMinutes < 720) {
                    this.hourGroupAM.classList.remove('hidden');
                } else {
                    this.hourGroupPM.classList.remove('hidden');
                }
            } else {
                if (!this.hourGroupAM.classList.contains('hidden')){
                    this.hourGroupAM.classList.toggle('hidden');
                }
                if (!this.hourGroupPM.classList.contains('hidden')){
                    this.hourGroupPM.classList.toggle('hidden');
                }
            }
        });

        // Toggle Minutes
        this.toggleMNumberBtn.addEventListener('click', () => {
            this.minuteGroup.classList.toggle('hidden');
        });

        // Pointer Events pour unification Souris / Touch
        this.svg.addEventListener('pointerdown', this.onPointerDown.bind(this));
        document.addEventListener('pointermove', this.onPointerMove.bind(this));
        document.addEventListener('pointerup', this.onPointerUp.bind(this));
    }

    /**
     * Génère dynamiquement les 60 repères du cadran.
     * Utilise un DocumentFragment pour optimiser l'insertion DOM.
     */
    drawClockMarks() {
        const marksGroup = this.svg.querySelector('#clock-marks');
        if (!marksGroup) throw new Error("L'élément #clock-marks est introuvable dans le SVG.");

        const fragment = document.createDocumentFragment();
        const centerX = 100;
        const centerY = 100;
        const radiusEdge = 5; // cx (100) - r (95)

        for (let i = 0; i < 60; i++) {
            const isQuarter = i % 15 === 0;
            const isFiveMinute = i % 5 === 0;

            const line = document.createElementNS(SVG_NS, 'line');
            
            // Origine alignée sur l'axe Y (Midi)
            line.setAttribute('x1', centerX);
            line.setAttribute('y1', radiusEdge);
            line.setAttribute('x2', centerX);
            
            // Définition de la longueur et du style selon le type de repère
            if (isQuarter) {
                line.setAttribute('y2', radiusEdge + 15);
                line.setAttribute('class', 'mark-quarter');
            } else if (isFiveMinute) {
                line.setAttribute('y2', radiusEdge + 10);
                line.setAttribute('class', 'mark-five');
            } else {
                line.setAttribute('y2', radiusEdge + 5);
                line.setAttribute('class', 'mark-minute');
            }

            // Rotation autour du centre du SVG (i * 6 degrés = 360 / 60)
            line.setAttribute('transform', `rotate(${i * 6} ${centerX} ${centerY})`);
            
            fragment.appendChild(line);
        }

        marksGroup.appendChild(fragment);
    }

    drawNumbers() {
        const centerX = 100;
        const centerY = 100;
        const radiusHour = 70;   // Intérieur du cadran
        const radiusMinute = 115; // Extérieur du cadran (nécessite viewBox="-30 -30 260 260")

        this.hourGroupAM = document.createElementNS(SVG_NS, 'g');
        this.hourGroupPM = document.createElementNS(SVG_NS, 'g');
        this.minuteGroup = document.createElementNS(SVG_NS, 'g');

        this.hourGroupAM.classList.toggle('hidden');
        this.hourGroupPM.classList.toggle('hidden');
        this.minuteGroup.classList.toggle('hidden');

        const fragmentHAM = document.createDocumentFragment();
        const fragmentHPM = document.createDocumentFragment();
        const fragmentM = document.createDocumentFragment();

        for (let i = 1; i <= 12; i++) {
            // L'angle 0 en trigo est à 3h. -90° (Math.PI/2) recalibre à 12h.
            const angleRad = (i * 30 - 90) * (Math.PI / 180);
            
            const cos = Math.cos(angleRad);
            const sin = Math.sin(angleRad);

            // Génération des Heures (1 à 12)
            const hText = document.createElementNS(SVG_NS, 'text');
            hText.setAttribute('x', centerX + radiusHour * cos);
            hText.setAttribute('y', centerY + radiusHour * sin);
            hText.setAttribute('class', 'hour-text');
            hText.textContent = i.toString();
            fragmentHAM.appendChild(hText);

            // Génération des Heures (13 à 00)
            const hText2 = document.createElementNS(SVG_NS, 'text');
            hText2.setAttribute('x', centerX + radiusHour * cos);
            hText2.setAttribute('y', centerY + radiusHour * sin);
            hText2.setAttribute('class', 'hour-text');
            hText2.textContent = (i + 12).toString();
            fragmentHPM.appendChild(hText2);

            // Génération des Minutes (0, 5, 10... 55)
            const mText = document.createElementNS(SVG_NS, 'text');
            mText.setAttribute('x', centerX + radiusMinute * cos);
            mText.setAttribute('y', centerY + radiusMinute * sin);
            mText.setAttribute('class', 'minute-text');
            mText.textContent = i === 12 ? '0' : (i * 5).toString();
            fragmentM.appendChild(mText);
        }

        this.hourGroupAM.appendChild(fragmentHAM);
        this.hourGroupPM.appendChild(fragmentHPM);
        this.minuteGroup.appendChild(fragmentM);
        
        // Insertion dans le DOM avant les aiguilles pour prévenir l'occlusion des événements pointer
        const marksGroup = this.svg.querySelector('#clock-marks');
        marksGroup.after(this.hourGroupAM, this.hourGroupPM, this.minuteGroup);
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


            if (this.state.lockedAMPM) {
                if (newHours >= 12 && currentHours < 12) {
                    newHours -= 12; // Reste en AM
                } else if (newHours < 12 && currentHours >= 12) {
                    newHours += 12; // Reste en PM
                }
            }


            this.state.totalMinutes = (newHours * 60) + newMinutes;
        } else if (this.state.activeHand === 'hour') {

            const isPM = currentHours >= 12;
            const pmOffset = isPM ? 720 : 0;


            if (this.state.lockedAMPM) {

                // L'aiguille des heures parcourt 12h (720 minutes) sur 360 degrés (1 degré = 2 minutes)
                let timeIn12h = Math.round(angle * 2); 
                if (timeIn12h === 720) timeIn12h = 0;
                this.state.totalMinutes = timeIn12h + pmOffset;

            } else {

                const MINUTES_IN_12H = 720;
                const MINUTES_IN_24H = 1440;
                const HALF_CYCLE = 360;

                const currentMinutesIn12h = this.state.totalMinutes % MINUTES_IN_12H;
                const newMinutesIn12h = Math.round(angle * 2); // 1 degré = 2 minutes

                let deltaMinutes = newMinutesIn12h - currentMinutesIn12h;

                // Détection du franchissement de minuit/midi (seuil de 180° / 360 minutes)
                if (deltaMinutes > HALF_CYCLE) {
                    // Mouvement anti-horaire (ex: 1h -> 11h)
                    deltaMinutes -= MINUTES_IN_12H;
                } else if (deltaMinutes < -HALF_CYCLE) {
                    // Mouvement horaire (ex: 11h -> 1h)
                    deltaMinutes += MINUTES_IN_12H;
                }

                // Application du delta modulo 24h pour éviter les valeurs négatives ou supérieures à 1439
                this.state.totalMinutes = (this.state.totalMinutes + deltaMinutes + MINUTES_IN_24H) % MINUTES_IN_24H;
            }
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
        this.digitalHours.textContent = `${formatH}`;
        this.digitalMinutes.textContent = `${formatM}`;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('analog-clock');
    const digitalHours = document.getElementById('digital-time-hours');
    const digitalMinutes = document.getElementById('digital-time-minutes');
    const digitalAMPM = document.getElementById('digital-time-ampm');
    const toggle = document.getElementById('toggle-display');
    const toggleAMPM = document.getElementById('toggle-ampm');
    const toggleHNumber = document.getElementById('toggle-h-number');
    const toggleMNumber = document.getElementById('toggle-m-number');
    new ClockController(svg, digitalHours, digitalMinutes, digitalAMPM, toggle, toggleAMPM, toggleHNumber, toggleMNumber);
});