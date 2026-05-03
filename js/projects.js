const buildPortfolioData = () => ({
  categories: ["Jam", "Projet", "Expérience", "TP/Apprentissage"],
  activeCategory: "Projet",
  touchStartX: 0,
  touchStartY: 0,
  currentX: 0,
  dragOffset: 0,
  isDragging: false,
  isScrolling: null,
  items: [
    {
      titre: "MineScam",
      categorie: "Jam",
      tags: ["Unreal Engine", "BluePrint", "Mention honorable (WonderJam Automne 2025)"],
      description: "Jeu de simulation développé pour la WonderJam UQAC. Incarnez un mineur artisan, récoltez des minerais, forgez des armes et peignez-les pour arnaquer vos clients.",
      lien: "https://alexandre-h.itch.io/minescam",
      image: "img/MineScam.png",
      colorClass: "border-amber-400/40 bg-amber-500/15 text-amber-200",
      color: "from-amber-500/40 to-yellow-500/40",
    },
    {
      titre: "Le Nectar des Étoiles",
      categorie: "Jam",
      tags: ["Unreal Engine", "BluePrint", "1ère Place (WonderJam Hiver 2026)"],
      description: "Court jeu narratif (1ère place WonderJam Hiver 2026). Vivez une journée dans la peau d'un jeune ouvrier d'une station spatiale de production d'Oasis tropical.",
      lien: "https://blova.itch.io/nectar-des-etoiles",
      image: "img/LeNectarDesEtoiles.png",
      color: "from-sky-500/40 to-blue-600/40",
    },
    {
      titre: "Stage Développeur Web Full Stack",
      categorie: "Expérience",
      tags: ["Stage", "Java Spring Boot", "Angular", "PostgreSQL"],
      description:
        "Stage chez Axopen (ESN Lyon) : refonte d'une application métier, génération de PDF et gestion de base de données.",
      lien: "projets/stage-esn.html",
      image: "img/Axopen.jpg",
      colorClass: "border-blue-400/40 bg-blue-500/15 text-blue-200",
      color: "from-blue-500/40 to-indigo-500/40",
    },
    {
      titre: "Stage Ubisoft Ivory-Tower (The Crew 2)",
      categorie: "Expérience",
      tags: ["Stage", "Jeu Vidéo", "Decouverte"],
      description:
        "Découverte du monde du jeu vidéo autour du jeu The Crew 2.",
      lien: "projets/ubisoft.html",
      image: "img/Ubisoft_Ivory_Tower.png",
      colorClass: "border-cyan-400/40 bg-cyan-500/15 text-cyan-200",
      color: "from-cyan-500/40 to-blue-500/40",
    },
    {
      titre: "Teapot (Crayonneur)",
      categorie: "Projet",
      tags: ["Unreal Engine", "C++", "Coop Multiplayer Online", "Split Screen", "Defis techniques"],
      description: "Une aventure a deux joueurs en split-screen ou en ligne dans un complexe futuriste. Résolvez des énigmes uniques où les actions en 2D impactent le monde 3D grâce à la technologie du 'Crayonneur'.",
      lien: "https://blova.itch.io/teapot-game",
      image: "img/Teapot.png",
      colorClass: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
      color: "from-emerald-500/40 to-teal-500/40",
    },
    {
      titre: "Juste le Boat en faite",
      categorie: "Projet",
      tags: ["Godot", "AI", "Reinforcement Learning", "Generation Procédurale"],
      description: "Devenez le roi des pirates dans ce jeu de conquête sur une map procédurale. Inclut des IA de combat entraînées par Reinforcement Learning avec le plugin Godot RL Agents.",
      lien: "https://blova.itch.io/juste-le-boat-en-faite",
      image: "img/JLBEF.png",
      colorClass: "border-cyan-400/40 bg-cyan-500/15 text-cyan-200",
      color: "from-cyan-500/40 to-blue-500/40",
    },
    {
      titre: "Stellar Echoes",
      categorie: "Projet",
      tags: ["Unreal Engine","C++", "Niagara"],
      description: "Prototype d'exploration et d'énigmes en vue FPS. Incarnez un humain dans une boucle temporelle sur une planète sans vie.",
      lien: "https://oridoshi.itch.io/stellar-echoes",
      image: "img/StellarEchoes.png",
      colorClass: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
      color: "from-emerald-500/40 to-teal-500/40",
    },
    {
      titre: "Bomberman UQAC",
      categorie: "Projet",
      tags: ["Unreal Engine", "C++", "Multijoueur Local"],
      description: "Reproduction du célèbre jeu Bomberman en multijoueur local.",
      lien: "https://blova.itch.io/bomberman-uqac",
      image: "img/BomberManUQAC.png",
      colorClass: "border-orange-400/40 bg-orange-500/15 text-orange-200",
      color: "from-orange-500/40 to-red-500/40",
    },
    {
      titre: "Casse Brique",
      categorie: "Projet",
      tags: ["Unreal Engine", "C++", "Premier Jeu Unreal Engine"],
      description: "Mon tout premier jeu développé sur Unreal Engine ! Un casse-brique classique en 2D pour découvrir les bases du moteur.",
      lien: "https://blova.itch.io/cassebrique",
      image: "img/CasseBrique.png",
      colorClass: "border-rose-400/40 bg-rose-500/15 text-rose-200",
      color: "from-rose-500/40 to-pink-500/40",
    },
    {
      titre: "Portfolio",
      categorie: "Projet",
      tags: ["Web", "AI gen", "Alpine.js", "Tailwind CSS"],
      description: "Ce portfolio, développé avec Alpine.js et Tailwind CSS, en utilisant l'IA générative comme un outil extrêmement puissant",
      lien: "projets/portfolio.html",
      image: "img/Portfolio.png",
      colorClass: "border-gray-400/40 bg-gray-500/15 text-gray-200",
      color: "from-gray-500/40 to-gray-600/40",
    },
    {
      titre: "Automate Cellulaire",
      categorie: "Projet",
      tags: ["Java", "JavaFx", "Modularité","Personnalisable", "Simulation"],
      description:
        "Simulation d'automates cellulaires (1D/2D) avec une architecture modulaire pour permettre l'ajout facile de nouveaux types d'automates.",
      lien: "https://github.com/antonin-slv/AutomateCellulaire",
      image: "img/AutomateCell1.png",
      colorClass: "border-blue-400/40 bg-blue-500/15 text-blue-200",
      color: "from-blue-500/40 to-indigo-500/40",
    },
    {
      titre: "Carte de Kohonen",
      categorie: "Projet",
      tags: ["Python", "IA", "Apprentissage non supervisé"],
      description:
        "Implémentation d'une carte auto-organisatrice (Self-Organizing Map) pour la réduction de dimensionnalité et le clustering de données.",
      lien: "https://github.com/Blova-TB/IA_Reseaux_de_neurones",
      image: "img/Kohonen.png",
      colorClass: "border-purple-400/40 bg-purple-500/15 text-purple-200",
      color: "from-purple-600/40 to-pink-500/40",
    },
    {
      titre: "Logisim",
      categorie: "Projet",
      tags: ["Architecture", "Logique Numérique", "Logisim"],
      description:
        "Architecture complète d'un processeur conçue sous Logisim, incluant l'ALU, les registres et l'unité de contrôle.",
      lien: "https://github.com/Blova-TB/Processeur-Logisim",
      image: "img/Logisim.png",
      colorClass: "border-amber-400/40 bg-amber-500/15 text-amber-200",
      color: "from-amber-500/40 to-orange-600/40",
    },
    {
      titre: "Networking Multiplayer (8DJV926)",
      categorie: "TP/Apprentissage",
      tags: ["Networking", "C++", "Réplication"],
      description:
        "Conception d'un système multiplayer avec prédiction client, correction serveur et synchronisation d'état.",
      lien: "projets/networking.html",
      image: "img/networking.png",
      colorClass: "border-violet-400/40 bg-violet-500/15 text-violet-200",
      color: "from-violet-500/40 to-fuchsia-500/40",
    },
    {
      titre: "Optimisation Numérique (8INF926)",
      categorie: "TP/Apprentissage",
      tags: ["Optimisation", "Matlab", "Solveurs"],
      description:
        "Résolution de problèmes d'optimisation appliqués, modélisation mathématique et analyse des performances.",
      lien: "projets/optimisation.html",
      image: "img/optimisation.png",
      colorClass: "border-amber-400/40 bg-amber-500/15 text-amber-200",
      color: "from-amber-500/40 to-orange-600/40",
    },
    {
      titre: "Sécurité Informatique (8INF857)",
      categorie: "TP/Apprentissage",
      tags: ["Cybersécurité", "Contrôle d'accès", "Sécurisation"],
      description:
        "Études de mécanismes de sécurité applicative et réseau, contrôle d'accès et bonnes pratiques de sécurisation des flux.",
      lien: "#",
      image: "img/security.png",
      colorClass: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
      color: "from-emerald-500/40 to-cyan-500/40",
    },
  ],
  itemsByCategory(category) {
    return this.items.filter((item) => item.categorie === category);
  },
  setCategory(category) {
    this.activeCategory = category;
  },
  previousCategory() {
    const current = this.categories.indexOf(this.activeCategory);
    const previous = (current - 1 + this.categories.length) % this.categories.length;
    this.activeCategory = this.categories[previous];
  },
  nextCategory() {
    const current = this.categories.indexOf(this.activeCategory);
    const next = (current + 1) % this.categories.length;
    this.activeCategory = this.categories[next];
  },
  scrollToCarouselTop() {
    const categoryTabs = document.getElementById("project-category-tabs");
    const projectsSection = document.getElementById("projets");
    const scrollTarget = categoryTabs || projectsSection;
    if (!scrollTarget) return;

    const stickyHeaderOffset = 88;
    const targetTop = Math.max(0, window.scrollY + scrollTarget.getBoundingClientRect().top - stickyHeaderOffset);
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  },
  startDrag(e) {
    this.isDragging = true;
    const pointerX = e.touches ? e.touches[0].clientX : e.clientX;
    const pointerY = e.touches ? e.touches[0].clientY : e.clientY;
    this.touchStartX = pointerX;
    this.touchStartY = pointerY;
    this.currentX = pointerX;
    this.dragOffset = 0;
    this.isScrolling = null;
  },
  onDrag(e) {
    if (!this.isDragging) return;
    const pointerX = e.touches ? e.touches[0].clientX : e.clientX;
    const pointerY = e.touches ? e.touches[0].clientY : e.clientY;

    if (this.isScrolling === null) {
      const deltaX = Math.abs(pointerX - this.touchStartX);
      const deltaY = Math.abs(pointerY - this.touchStartY);
      if (deltaY > deltaX && deltaY > 3) {
        this.isScrolling = true;
      } else if (deltaX > deltaY && deltaX > 3) {
        this.isScrolling = false;
      }
    }

    if (this.isScrolling === true) return;

    if (e.cancelable) {
      e.preventDefault();
    }
    this.currentX = pointerX;
    this.dragOffset = this.currentX - this.touchStartX;
  },
  endDrag() {
    if (!this.isDragging) return;

    if (this.isScrolling === true) {
      this.isScrolling = null;
      this.isDragging = false;
      this.dragOffset = 0;
      return;
    }

    this.isDragging = false;
    if (this.dragOffset < -50) {
      this.nextCategory();
      this.scrollToCarouselTop();
    } else if (this.dragOffset > 50) {
      this.previousCategory();
      this.scrollToCarouselTop();
    }
    this.dragOffset = 0;
    this.isScrolling = null;
  },
});

window.portfolioData = buildPortfolioData;

document.addEventListener("alpine:init", () => {
  window.Alpine.data("portfolioData", buildPortfolioData);
});
