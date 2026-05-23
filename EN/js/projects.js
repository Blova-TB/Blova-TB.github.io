const buildPortfolioData = () => ({
  categories: ["Jam", "Project", "Experience", "Lab/Learning"],
  activeCategory: "Project",
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
      tags: ["Unreal Engine", "Blueprints", "Honorable Mention (WonderJam Fall 2025)"],
      description: "Simulation game developed for WonderJam UQAC. Play as a craft miner, gather ore, forge weapons, and paint them to scam your customers.",
      lien: "https://alexandre-h.itch.io/minescam",
      image: "img/MineScam.png",
      colorClass: "border-amber-400/40 bg-amber-500/15 text-amber-200",
      color: "from-amber-500/40 to-yellow-500/40",
    },
    {
      titre: "Star Nectar",
      categorie: "Jam",
      tags: ["Unreal Engine", "Blueprints", "1st Place (WonderJam Winter 2026)"],
      description: "Short narrative game (1st place, WonderJam Winter 2026). Live a day in the shoes of a young worker at a space station producing tropical Oasis.",
      lien: "https://blova.itch.io/nectar-des-etoiles",
      image: "img/LeNectarDesEtoiles.png",
      color: "from-sky-500/40 to-blue-600/40",
    },
    {
      titre: "Full-Stack Web Developer Internship",
      categorie: "Experience",
      tags: ["Internship", "Java Spring Boot", "Angular", "PostgreSQL"],
      description:
        "Internship at Axopen (ESN Lyon): redesign of a business application, PDF generation, and database management.",
      lien: "projets/stage-esn.html",
      image: "img/Axopen.jpg",
      colorClass: "border-blue-400/40 bg-blue-500/15 text-blue-200",
      color: "from-blue-500/40 to-indigo-500/40",
    },
    {
      titre: "Ubisoft Ivory Tower Internship (The Crew 2)",
      categorie: "Experience",
      tags: ["Internship", "Video Game", "Introduction"],
      description: "An introduction to game development around The Crew 2.",
      lien: "projets/ubisoft.html",
      image: "img/Ubisoft_Ivory_Tower.png",
      colorClass: "border-cyan-400/40 bg-cyan-500/15 text-cyan-200",
      color: "from-cyan-500/40 to-blue-500/40",
    },
    {
      titre: "Teapot (Crayonneur)",
      categorie: "Project",
      tags: ["Unreal Engine", "C++", "Co-op Multiplayer Online", "Split Screen", "Technical challenges"],
      description: "A two-player adventure in split-screen or online mode inside a futuristic complex. Solve unique puzzles where 2D actions affect the 3D world thanks to the 'Crayonneur' technology.",
      lien: "https://blova.itch.io/teapot-game",
      image: "img/Teapot.png",
      colorClass: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
      color: "from-emerald-500/40 to-teal-500/40",
    },
    {
      titre: "Just the Boat, Actually",
      categorie: "Project",
      tags: ["Godot", "AI", "Reinforcement Learning", "Procedural Generation"],
      description: "Become the pirate king in this conquest game on a procedurally generated map. Includes combat AI trained with Reinforcement Learning using the Godot RL Agents plugin.",
      lien: "https://blova.itch.io/juste-le-boat-en-faite",
      image: "img/JLBEF.png",
      colorClass: "border-cyan-400/40 bg-cyan-500/15 text-cyan-200",
      color: "from-cyan-500/40 to-blue-500/40",
    },
    {
      titre: "Stellar Echoes",
      categorie: "Project",
      tags: ["Unreal Engine", "C++", "Niagara"],
      description: "An exploration and puzzle prototype in first-person view. Play as a human trapped in a time loop on a lifeless planet.",
      lien: "https://oridoshi.itch.io/stellar-echoes",
      image: "img/StellarEchoes.png",
      colorClass: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
      color: "from-emerald-500/40 to-teal-500/40",
    },
    {
      titre: "Bomberman UQAC",
      categorie: "Project",
      tags: ["Unreal Engine", "C++", "Local Multiplayer"],
      description: "A recreation of the famous Bomberman game in local multiplayer.",
      lien: "https://blova.itch.io/bomberman-uqac",
      image: "img/BomberManUQAC.png",
      colorClass: "border-orange-400/40 bg-orange-500/15 text-orange-200",
      color: "from-orange-500/40 to-red-500/40",
    },
    {
      titre: "Breakout",
      categorie: "Project",
      tags: ["Unreal Engine", "C++", "First Unreal Engine Game"],
      description: "My very first game developed in Unreal Engine! A classic 2D breakout game to discover the engine's basics.",
      lien: "https://blova.itch.io/cassebrique",
      image: "img/CasseBrique.png",
      colorClass: "border-rose-400/40 bg-rose-500/15 text-rose-200",
      color: "from-rose-500/40 to-pink-500/40",
    },
    {
      titre: "Portfolio",
      categorie: "Project",
      tags: ["Web", "Generative AI", "Alpine.js", "Tailwind CSS"],
      description: "This portfolio, built with Alpine.js and Tailwind CSS, uses generative AI as an extremely powerful tool.",
      lien: "projets/portfolio.html",
      image: "img/Portfolio.png",
      colorClass: "border-gray-400/40 bg-gray-500/15 text-gray-200",
      color: "from-gray-500/40 to-gray-600/40",
    },
    {
      titre: "Cellular Automaton",
      categorie: "Project",
      tags: ["Java", "JavaFX", "Modularity", "Customizable", "Simulation"],
      description:
        "Simulation of cellular automata (1D/2D) with a modular architecture that makes it easy to add new automaton types.",
      lien: "https://github.com/antonin-slv/AutomateCellulaire",
      image: "img/AutomateCell1.png",
      colorClass: "border-blue-400/40 bg-blue-500/15 text-blue-200",
      color: "from-blue-500/40 to-indigo-500/40",
    },
    {
      titre: "Kohonen Map",
      categorie: "Project",
      tags: ["Python", "AI", "Unsupervised Learning"],
      description:
        "Implementation of a Self-Organizing Map for dimensionality reduction and data clustering.",
      lien: "https://github.com/Blova-TB/IA_Reseaux_de_neurones",
      image: "img/Kohonen.png",
      colorClass: "border-purple-400/40 bg-purple-500/15 text-purple-200",
      color: "from-purple-600/40 to-pink-500/40",
    },
    {
      titre: "Logisim",
      categorie: "Project",
      tags: ["Architecture", "Digital Logic", "Logisim"],
      description:
        "Complete processor architecture designed in Logisim, including the ALU, registers, and control unit.",
      lien: "https://github.com/Blova-TB/Processeur-Logisim",
      image: "img/Logisim.png",
      colorClass: "border-amber-400/40 bg-amber-500/15 text-amber-200",
      color: "from-amber-500/40 to-orange-600/40",
    },
    {
      titre: "Networking Multiplayer (8DJV926)",
      categorie: "Lab/Learning",
      tags: ["Networking", "C++", "Replication"],
      description:
        "Design of a multiplayer system with client prediction, server correction, and state synchronization.",
      lien: "projets/networking.html",
      image: "img/networking.png",
      colorClass: "border-violet-400/40 bg-violet-500/15 text-violet-200",
      color: "from-violet-500/40 to-fuchsia-500/40",
    },
    {
      titre: "Numerical Optimization (8INF926)",
      categorie: "Lab/Learning",
      tags: ["Optimization", "Matlab", "Solvers"],
      description:
        "Solving applied optimization problems, mathematical modeling, and performance analysis.",
      lien: "projets/optimisation.html",
      image: "img/optimisation.png",
      colorClass: "border-amber-400/40 bg-amber-500/15 text-amber-200",
      color: "from-amber-500/40 to-orange-600/40",
    },
    {
      titre: "Computer Security (8INF857)",
      categorie: "Lab/Learning",
      tags: ["Cybersecurity", "Access Control", "Hardening"],
      description:
        "Studies of application and network security mechanisms, access control, and best practices for securing data flows.",
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
