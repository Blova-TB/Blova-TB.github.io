const buildPortfolioData = () => ({
  categories: ["Jam", "Expérience", "Projet", "TP/Apprentissage"],
  activeCategory: "Jam",
  items: [
    {
      titre: "WonderJam",
      categorie: "Jam",
      tags: ["Game Jam", "Prototype", "Gameplay"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prototype de jeu conçu en temps contraint avec itérations rapides sur le gameplay.",
      lien: "#",
      image: "img/WonderJam.png",
      colorClass: "border-pink-400/40 bg-pink-500/15 text-pink-200",
      color: "from-pink-500/40 to-fuchsia-500/40",
    },
    {
      titre: "Développeur Web Full Stack",
      categorie: "Expérience",
      tags: ["Java Spring Boot", "Angular", "PostgreSQL"],
      description:
        "Stage chez Axopen (ESN Lyon) : refonte d'une application métier, génération de PDF et gestion de base de données.",
      lien: "projets/stage-esn.html",
      image: "img/Axopen.jpg",
      colorClass: "border-blue-400/40 bg-blue-500/15 text-blue-200",
      color: "from-blue-500/40 to-indigo-500/40",
    },
    {
      titre: "Validation Qualité (The Crew 2)",
      categorie: "Expérience",
      tags: ["QA", "Jeu Vidéo", "Ubisoft Ivory-Tower"],
      description:
        "Découverte du pipeline qualité et tests de validation sur le jeu de course The Crew 2.",
      lien: "projets/ubisoft.html",
      image: "img/Ubisoft_Ivory_Tower.png",
      colorClass: "border-cyan-400/40 bg-cyan-500/15 text-cyan-200",
      color: "from-cyan-500/40 to-blue-500/40",
    },
    {
      titre: "Automate",
      categorie: "Projet",
      tags: ["Java", "Simulation", "Algorithmes"],
      description:
        "Simulation d'automates cellulaires (1D/2D) pour l'étude de systèmes complexes et de comportements émergents.",
      lien: "https://github.com/antonin-slv/AutomateCellulaire",
      image: "img/AutomateCell1.png",
      colorClass: "border-blue-400/40 bg-blue-500/15 text-blue-200",
      color: "from-blue-500/40 to-indigo-500/40",
    },
    {
      titre: "SOM",
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
});

window.portfolioData = buildPortfolioData;

document.addEventListener("alpine:init", () => {
  window.Alpine.data("portfolioData", buildPortfolioData);
});
