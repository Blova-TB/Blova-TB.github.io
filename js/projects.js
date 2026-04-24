const buildPortfolioData = () => ({
    fallbackImage:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%25' height='100%25' fill='%230f172a'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='Inter,Arial,sans-serif' font-size='40'>Image en cours d'ajout</text></svg>",
    items: [
      {
        titre: "Développeur Web Full Stack",
        categorie: "Expérience",
        tags: ["Java Spring Boot", "Angular", "PostgreSQL"],
        description:
          "Stage chez Axopen (ESN Lyon) : refonte d'une application métier, génération de PDF et gestion de base de données.",
        lien: "projets/stage-esn.html",
        image: "img/Axopen.jpg",
        colorClass: "border-blue-400/40 bg-blue-500/15 text-blue-200",
      },
      {
        titre: "Validation Qualité (The Crew 2)",
        categorie: "Expérience",
        tags: ["QA", "Jeu Vidéo", "Ubisoft Ivory-Tower"],
        description:
          "Découverte du pipeline qualité et tests de validation sur le jeu de course The Crew 2.",
        lien: "projets/ubisoft.html",
        image: "img/Ubisoft_Ivory_Tower.png",
        colorClass: "border-blue-400/40 bg-blue-500/15 text-blue-200",
      },
      {
        titre: "Networking Multiplayer (8DJV926)",
        categorie: "Cours UQAC",
        tags: ["Networking", "C++", "Réplication"],
        description:
          "Conception d'un système multiplayer avec prédiction client, correction serveur et synchronisation d'état.",
        lien: "projets/networking.html",
        image: "img/networking.png",
        colorClass: "border-violet-400/40 bg-violet-500/15 text-violet-200",
      },
      {
        titre: "Optimisation Numérique (8INF926)",
        categorie: "Cours UQAC",
        tags: ["Optimisation", "Matlab", "Solveurs"],
        description:
          "Résolution de problèmes d'optimisation appliqués, modélisation mathématique et analyse des performances.",
        lien: "projets/optimisation.html",
        image: "img/optimisation.png",
        colorClass: "border-amber-400/40 bg-amber-500/15 text-amber-200",
      },
    ],
  });

window.portfolioData = buildPortfolioData;

document.addEventListener("alpine:init", () => {
  window.Alpine.data("portfolioData", buildPortfolioData);
});
