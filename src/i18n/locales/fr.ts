import type { Messages } from './en'

export const fr: Messages = {
  meta: {
    title: 'ABNOX — Linux, Rust, robots et autres expériences',
    description:
      'ABNOX — un bricoleur marocain qui construit des outils Linux, des expériences Rust, des jouets pour le terminal et de petits robots. Monochrome, open source et parfois drôle.',
  },
  common: {
    skipToContent: 'Aller au contenu',
    copy: 'Copier',
    copied: 'Copié !',
    copyError: 'Impossible de copier — sélectionne le texte à la main',
    copyAria: 'Copier {label}',
    opensInNewTab: 's’ouvre dans un nouvel onglet',
    close: 'Fermer',
    closeDialog: 'Fermer la fenêtre',
    menu: 'Menu',
    language: 'Langue',
    loading: 'Chargement…',
    viewSource: 'Voir la source',
    externalLink: 'Lien externe',
    shortcut: 'Ctrl K',
    shortcutMac: '⌘ K',
    optional: 'facultatif',
    required: 'requis',
  },
  nav: {
    label: 'Navigation principale',
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    moments: 'Moments',
    journey: 'Parcours',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    search: 'Rechercher',
    themeToDark: 'Passer au thème sombre',
    themeToLight: 'Passer au thème clair',
    languageHint: 'Choisir une langue',
  },
  hero: {
    eyebrow: 'Maroc · autodidacte · souvent dans un terminal',
    titleLead: 'Je fais faire aux ordinateurs des choses',
    titleEmphasis: 'un peu bizarres',
    titleTail: '.',
    intro:
      'ABNOX, c’est mon coin d’internet : des expériences Linux, des terriers Rust, des petits robots et quelques mauvaises idées qui ont fini par marcher.',
    primaryCta: 'Explorer les projets',
    secondaryCta: 'Prendre le chemin long',
    scrollHint: 'Descends — ça devient plus geek.',
    badge: 'open source · linux · robots',
    availability:
      'En ce moment : je casse ma propre installation Linux, j’apprends à ATOM à cligner des yeux de façon moins inquiétante et je prends des notes.',
    terminal: {
      title: 'abnox@terminal: ~',
      windowLabel: 'Présentation en terminal',
      lines: [
        {
          command: 'whoami',
          output:
            'ABNOX — bricoleur marocain, développeur autodidacte, professionnel de la surréflexion.',
        },
        {
          command: 'ls interests/',
          output: 'linux/   rust/   security/   robotics/   open-source/',
        },
        {
          command: './currently',
          output:
            'je casse mon Linux · j’apprends à ATOM à cligner · je collectionne les onglets',
        },
        {
          command: 'uptime',
          output: 'allumé depuis le dernier redémarrage, il y a environ trois cafés',
        },
      ],
      prompt: '~',
      cursorLabel: 'Curseur du terminal',
    },
    specs: {
      label: 'Repères rapides',
      base: 'Base',
      baseValue: 'Maroc',
      mode: 'Mode',
      modeValue: 'bricolage',
      status: 'Statut',
      statusValue: 'compilation',
    },
    barcodeLabel: 'Code-barres d’identification ABNOX',
  },
  about: {
    kicker: '01 / à propos',
    title: 'L’humain derrière le terminal.',
    lead: 'Moi, c’est ABNOX — étudiant marocain, développeur autodidacte et curieux à plein temps.',
    p1: 'Je suis entré dans Linux parce que je voulais changer un seul réglage. Après plusieurs réinstallations, c’est devenu l’endroit où je construis des choses. L’essentiel de ce que je sais vient d’avoir cassé un truc, lu les logs, puis recommencé avec moins de certitudes.',
    p2: 'Aujourd’hui, je fabrique des outils que j’utilise vraiment : un lecteur de livres, un lecteur de musique pour le terminal, une messagerie sans serveur et un stream deck à quatre boutons très sérieux. J’aime le code qui fait quelque chose de réel, qui s’explique et qui ne téléphone pas à la maison.',
    factsTitle: 'Notes de terrain',
    facts: [
      { label: 'Basé au', value: 'Maroc' },
      { label: 'Rôle', value: 'Étudiant et développeur autodidacte' },
      { label: 'Focus', value: 'Linux · Rust · sécurité · robotique' },
      { label: 'Quotidien', value: 'Un terminal, surtout' },
      { label: 'Café', value: 'Environ trois tasses de retard' },
      { label: 'Statut', value: 'En compilation' },
    ],
    valuesTitle: 'Ma façon de travailler',
    values: [
      {
        title: 'Regarder sous le capot',
        text: '« Ça marche » est le début de la question, pas la fin. Je veux savoir pourquoi, et ce qui se passe quand ça s’arrête.',
      },
      {
        title: 'Local d’abord',
        text: 'Je préfère les outils qui gardent mes fichiers, mes messages et mes préférences sur ma machine. Le confort ne vaut pas qu’on me confie les clés.',
      },
      {
        title: 'Casser, puis réparer',
        text: 'Le moyen le plus rapide de comprendre un système, c’est de le faire râler. Les snapshots, les logs et une sauvegarde font partie de la méthode.',
      },
      {
        title: 'Documenter le chaos',
        text: 'Un README écrit pour le moi du futur est un cadeau. Un README écrit pour personne est un conte d’avertissement.',
      },
    ],
  },
  skills: {
    kicker: '02 / compétences & intérêts',
    title: 'Des outils, des terriers et des choses que j’apprends encore.',
    intro:
      'Pas de barres de pourcentage, pas de badge « développeur 10x ». Juste ce que j’utilise, ce que je pratique et les sujets qui me tiennent éveillé.',
    groups: {
      linux: {
        name: 'Linux & systèmes',
        summary: 'L’environnement où la plupart des choses se passent.',
        note: 'À l’aise',
      },
      code: {
        name: 'Programmation',
        summary: 'Python pour avancer, Rust pour la douleur intéressante.',
        note: 'En construction',
      },
      security: {
        name: 'Cybersécurité',
        summary:
          'Curieux, prudent, et je ne prétends pas être certifié en quoi que ce soit.',
        note: 'J’apprends',
      },
      robotics: {
        name: 'Robotique & mécatronique',
        summary: 'Assez de matériel pour faire cligner un ESP32 avec intention.',
        note: 'Je bricole',
      },
      tools: {
        name: 'Outils & artisanat',
        summary: 'De petits instruments qui savent se faire oublier.',
        note: 'Usage quotidien',
      },
    },
    interestsTitle: 'Intérêts du moment',
    interests: {
      foss: {
        title: 'Open source',
        text: 'Si je peux le lire, le corriger et l’héberger moi-même, je vais probablement le faire.',
      },
      security: {
        title: 'Cybersécurité',
        text: 'Pas le genre à capuche. Le genre « pourquoi ce port est-il ouvert ? ».',
      },
      robotics: {
        title: 'Robotique & mécatronique',
        text: 'Du code qui bouge, qui capte et qui tombe parfois.',
      },
      terminals: {
        title: 'Interfaces en terminal',
        text: 'Une bonne TUI est un mini-système d’exploitation pour une seule tâche.',
      },
      retro: {
        title: 'Informatique rétro',
        text: 'Des gros pixels, des polices impossibles et le bruit d’un disque qui tourne.',
      },
      hardware: {
        title: 'Matériel libre',
        text: 'Des ESP32, des câbles dupont et un peu de fumée magique de temps en temps.',
      },
    },
    learningTitle: 'En cours d’apprentissage',
    learning: [
      'La propriété en Rust sans me battre avec le compilateur',
      'Les bases de la mécatronique',
      'Les labs de sécurité et le réseau',
      'Livrer avant que l’idée ne devienne ennuyeuse',
    ],
    disclaimer:
      'Cette liste est honnête, pas exhaustive. Tout ce qui est ici, je l’ai utilisé, cassé ou je l’apprends activement.',
  },
  projects: {
    kicker: '03 / expériences choisies',
    title: 'Des choses que j’ai construites, cassées, ou que je compte construire.',
    intro:
      'Cinq projets, trois états : publié, expérimental et prévu. Cherche par nom ou technologie, ou filtre par la partie de la stack qui fait le plus mal.',
    searchLabel: 'Rechercher un projet',
    searchPlaceholder: 'Cherche un projet, une techno, une mauvaise idée…',
    clearSearch: 'Effacer la recherche de projets',
    filtersLabel: 'Filtrer les projets par catégorie',
    all: 'Tous',
    categories: {
      linux: 'Linux',
      rust: 'Rust',
      robotics: 'Robotique',
      hardware: 'Matériel',
      tools: 'Outils',
    },
    statusLabel: 'Statut',
    statuses: {
      released: 'Publié',
      active: 'En cours',
      experimental: 'Expérimental',
      planned: 'Prévu',
    },
    statusNotes: {
      released: 'Le code est public.',
      active: 'En construction active. Pas encore de dépôt public.',
      experimental: 'Une expérience. Pas encore de dépôt public.',
      planned: 'Prévu. Rien n’est encore sorti.',
    },
    count: '{shown} projets sur {total}',
    noResultsTitle: 'Aucun projet ne correspond.',
    noResultsText:
      'Essaie un autre mot, un nom de techno, ou efface les filtres pour tout voir.',
    reset: 'Réinitialiser les filtres',
    emptyTitle: 'Rien ici pour l’instant.',
    details: 'Détails',
    source: 'Code',
    noSource: 'Pas encore de dépôt public',
    techLabel: 'Stack',
    repoLabel: 'Dépôt',
    copyRepo: 'Copier l’URL du dépôt',
    openRepo: 'Ouvrir le dépôt',
    closeDetails: 'Fermer les détails du projet',
    overview: 'Aperçu',
    notes: 'Notes de statut',
    links: 'Liens',
    noSourceTitle: 'Pas encore de code public',
    noSourceText:
      'Ce projet n’est pas prêt pour le public. Pas de lien de téléchargement, pas de compte à rebours « bientôt disponible » — juste un placeholder honnête.',
    imageAlt: 'Aperçu du projet',
    items: {
      tuxmp: {
        description:
          'Un lecteur multimédia en terminal construit avec yt-dlp, VLC et Rich. Pas de grosse interface, pas de fanfare — juste une façon propre de jouer de la musique en ligne de commande.',
        details:
          'tuxmp est un lecteur multimédia en terminal qui s’appuie sur yt-dlp, VLC et Rich. L’interface reste dans le terminal et les dépendances restent familières. Le code, les notes d’utilisation et les limites actuelles sont dans le dépôt GitHub.',
        statusNote: 'Publié sur GitHub.',
        imageAlt: 'Illustration du lecteur terminal tuxmp',
      },
      atom: {
        description:
          'Un projet de robotique et d’expression visuelle sur ESP32, avec un visage OLED et une connexion IA expérimentale. Il cligne, il réagit, il a parfois des pensées.',
        details:
          'ATOM est un projet de robotique et d’expression visuelle sur ESP32. Un écran OLED lui donne un visage, tandis que la connexion IA expérimentale explore comment un petit objet physique peut réagir de façon un peu moins prévisible. C’est un projet de labo, pas un produit.',
        statusNote: 'Expérimental. Le lien IA reste une expérience de labo.',
        imageAlt: 'Logo du visage robot d’ATOM',
      },
      'abno-deck': {
        description:
          'Un stream deck DIY à quatre touches pour Linux et ESP32. La carte envoie des ID de boutons ; l’application de bureau possède les actions — lancer des apps, ouvrir des URL, envoyer des raccourcis, contrôler les médias.',
        details:
          'ABNO DECK associe un ESP32 à quatre boutons physiques et une application Python/PySide6. Le microcontrôleur n’envoie que des ID de boutons par port série USB ; le bureau possède toute la table d’actions, une frontière de sécurité volontaire. Les actions peuvent lancer des applications, ouvrir des URL, envoyer des raccourcis, contrôler les médias ou exécuter des commandes validées. Conçu pour Debian et le bureau MATE.',
        statusNote: 'Publié sur GitHub. Linux uniquement, par choix.',
        imageAlt: 'Logo du pavé à quatre touches Abno Deck',
      },
      abnora: {
        description:
          'Un lecteur PDF local avec une mise en page classique à deux pages, douze thèmes et une vraie allergie à la télémétrie. Ouvre un livre, choisis un monde.',
        details:
          'ABNORA est un lecteur de livres de bureau local, construit autour d’une mise en page classique à deux pages. Il ouvre les PDF, propose douze thèmes visuels, un mode nuit et une bibliothèque en grille de couvertures. Pas de compte, pas de cloud, pas de télémétrie — la lecture reste sur ta machine. Un livre ouvert. Douze mondes.',
        statusNote: 'Publié sur GitHub.',
        imageAlt:
          'Capture d’ABNORA montrant une double page dans un thème sépia chaleureux',
      },
      abnoly: {
        description:
          'Un projet de paroles en terminal, prévu. L’objectif est simple : garder les mots sous les yeux sans quitter le terminal.',
        details:
          'Abnoly est un projet de paroles en terminal prévu. L’idée est de garder les paroles visibles pendant que la musique joue, sans ouvrir de navigateur ni casser le flux du terminal. Il est actuellement prévu, pas livré ; cette page sera mise à jour si et quand il deviendra réel.',
        statusNote: 'Prévu. Rien n’est encore sorti.',
        imageAlt: 'Illustration du terminal de paroles Abnoly',
      },
    },
  },
  moments: {
    kicker: '04 / moments de développeur',
    title: 'Une petite collection de mécanismes de survie.',
    intro:
      'Des GIF locaux, parce que dépendre d’un service de memes externe, c’est construire sur le terrain de quelqu’un d’autre. Ils bouclent deux fois, puis s’arrêtent gentiment.',
    items: [
      {
        caption: 'Ça compile. Je suis aussi surpris que toi.',
        alt: 'Un terminal en pixel art célèbre un build réussi, puis affiche aussitôt une nouvelle erreur.',
      },
      {
        caption: 'Jour de mise à jour Arch : on vit dangereusement.',
        alt: 'Un pingouin en pixel art sirote un café pendant qu’une barre de mise à jour se remplit lentement.',
      },
      {
        caption: 'ATOM réfléchit. Probablement aux câbles.',
        alt: 'Un visage de robot en pixel art sur un écran OLED cligne des yeux et affiche une bulle de réflexion.',
      },
    ],
    fallback: 'Le GIF a refusé de charger. Imagine quelque chose de drôle ici.',
    reducedNote:
      'L’animation est désactivée parce que ton système demande moins de mouvement. L’image fixe reste.',
    captionLabel: 'Légende du meme',
  },
  journey: {
    kicker: '05 / le chemin des écoliers',
    title: 'Étudiant, autodidacte, collectionneur d’onglets.',
    intro:
      'Pas un CV — une carte approximative du chemin. L’ordre est exact. Les dates manquent volontairement.',
    steps: [
      {
        tag: 'Curiosité',
        title: 'Démonter',
        text: 'Tout ce qui avait des vis était un jeu. J’ai remonté la plupart. La vis en trop est devenue un trait de personnalité.',
      },
      {
        tag: 'Le terminal',
        title: 'Installer Linux pour changer un réglage',
        text: 'Cassé le bootloader. Lu les logs. Réinstallé. C’était le tutoriel. La ligne de commande a arrêté de faire peur et est devenue un atelier.',
      },
      {
        tag: 'Open source',
        title: 'Lire le code des autres',
        text: 'D’abord utilisé les outils, puis lu leur source, puis voulu construire les miens. La meilleure documentation reste un exemple qui fonctionne.',
      },
      {
        tag: 'Des pixels aux pins',
        title: 'Passer du code au matériel',
        text: 'ESP32, OLED, boutons et câbles dupont. Le matériel a rendu la programmation physique — et beaucoup plus facile à blâmer sur un câble mal branché.',
      },
      {
        tag: 'Mode étudiant',
        title: 'Construire et apprendre en public',
        text: 'Étudier, livrer de petites choses et les partager quand elles sont prêtes. La liste des idées inachevées est plus longue que celle des projets finis. C’est normal.',
      },
      {
        tag: 'Ensuite',
        title: 'Mécatronique, sécurité et la prochaine idée bizarre',
        text: 'La direction est claire ; les étapes sont encore en compilation. Je préfère rester curieux que paraître fini.',
      },
    ],
    nowTitle: 'Où ça va',
    nowText:
      'Plus loin en mécatronique, meilleur en sécurité, plus à l’aise avec Rust, et toujours en train de construire des outils qui résolvent un problème que j’ai vraiment.',
    quote:
      'Je n’ai pas besoin d’un diplôme pour être curieux. J’ai besoin d’un terminal, d’une sauvegarde et de l’envie d’avoir tort en public.',
    quoteAuthor: 'ABNOX, probablement à 2 h du matin.',
  },
  contact: {
    kicker: '06 / contact',
    title: 'Ouvre un canal.',
    intro:
      'Pas de formulaire, pas de popup newsletter, pas de « on se recale ». La boîte publique, c’est GitHub ou YouTube. Plus rapide qu’un pigeon voyageur, plus sûr que coller une adresse sur un site.',
    githubTitle: 'Code, tickets et expériences',
    githubText:
      'Des dépôts, des notes de version et quelques commits à une heure déraisonnable.',
    youtubeTitle: 'Des vidéos et des choses avec un visage',
    youtubeText:
      'Des aventures Linux, des démos de projets et tout ce qui a mérité une miniature.',
    copyLabel: 'Copier l’URL {label}',
    open: 'Ouvrir {label}',
    noEmailTitle: 'Pas d’e-mail public',
    noEmailText:
      'C’est volontaire. Je garde une boîte sur GitHub, et les commentaires sous une vidéo sont lus. Parle-moi de Linux, de Rust, d’idées ESP32 bizarres ou d’outils open source.',
    availabilityTitle: 'De bonnes raisons de dire bonjour',
    reasons: [
      'Un problème Linux avec un message d’erreur intéressant',
      'Un projet Rust, Python ou matériel sur lequel comparer nos notes',
      'Un bug dans un des miens — surtout s’il est reproductible',
      'Une idée vraiment étrange qui implique un terminal',
    ],
    footerNote:
      'Je réponds quand je peux. « Quand je peux » fait beaucoup de travail dans cette phrase.',
  },
  footer: {
    tagline: 'Fait de Linux, de câbles qui pendent et de trop d’onglets ouverts.',
    built: 'Construit avec React, Vite et une quantité déraisonnable de box-shadow.',
    privacy: 'Paramètres de confidentialité',
    top: 'Retour en haut',
    rights: '© {year} ABNOX. Libre à lire, pas à scraper.',
    made: 'Maroc · aucun traqueur · aucune pub',
    status: 'Tous les systèmes légèrement branlants',
    elsewhere: 'Ailleurs',
    navigate: 'Navigation',
    version: 'site v1.0 · édition monochrome',
  },
  search: {
    title: 'Rechercher sur le site',
    label: 'Rechercher projets, compétences et sections',
    placeholder: 'Essaie « Rust », « robots », « ABNORA »…',
    hint: 'Tape pour chercher. Flèches pour te déplacer, Entrée pour ouvrir, Échap pour fermer.',
    clear: 'Effacer la recherche',
    close: 'Fermer la recherche',
    emptyTitle: 'Tu cherches quoi ?',
    emptyText:
      'Cherche un nom de projet, une description, une technologie, un intérêt ou une section. Tout reste sur ton appareil.',
    suggestionsTitle: 'Essaie l’un de ces mots',
    suggestions: ['Rust', 'Robotique', 'Linux', 'ABNORA'],
    resultsLabel: 'Résultats de recherche',
    noResultsTitle: 'Aucun résultat.',
    noResultsText:
      'Essaie un mot plus court, un nom de techno ou une des suggestions ci-dessous.',
    countOne: '1 résultat',
    countMany: '{count} résultats',
    typeSection: 'Section',
    typeProject: 'Projet',
    typeInterest: 'Intérêt',
    open: 'Ouvrir {title}',
    shortcutHint: 'Appuie sur {shortcut} n’importe où pour chercher',
    esc: 'Échap',
    dialogLabel: 'Recherche sur le site',
    resultsFor: 'Résultats pour « {query} »',
    quickLinks: 'Liens rapides',
  },
  cookie: {
    title: 'Une note très courte sur la vie privée',
    text: 'Pas de cookies, pas d’analytics, pas de pixels publicitaires. Ce site enregistre seulement trois choses dans ton navigateur : ton thème, ta langue et ce choix. Accepter et Refuser font la même chose — l’un est juste plus honnête à ce sujet.',
    accept: 'Accepter',
    reject: 'Refuser',
    settings: 'Paramètres',
    saved: 'Préférence enregistrée. La bannière ne reviendra pas.',
    privacyLink: 'Lire toute la politique',
    label: 'Avis de confidentialité',
  },
  privacy: {
    title: 'Paramètres de confidentialité',
    intro:
      'Ceci est la politique de confidentialité entière, pas le résumé d’une plus longue. Tout est stocké localement dans ton navigateur. Rien n’est envoyé à un serveur, parce qu’il n’y a pas de serveur d’analytics.',
    essentialTitle: 'Stockage essentiel (toujours actif)',
    essentialText:
      'Ces trois clés vivent dans le localStorage de cet appareil. Elles sont nécessaires pour que le site se souvienne de tes choix.',
    items: [
      { name: 'Thème', text: 'Se souvient du mode clair ou sombre.' },
      { name: 'Langue', text: 'Se souvient de la langue choisie.' },
      {
        name: 'Consentement',
        text: 'Se souvient de ce choix pour que la bannière ne te suive pas.',
      },
    ],
    optionalTitle: 'Stockage optionnel',
    optionalText:
      'Il n’y a pas de catégorie optionnelle. Pas d’analytics, pas de publicité, pas d’intégration tierce à accepter. Le bouton serait décoratif, donc il n’y en a pas.',
    none: 'Aucun. C’est toute la liste.',
    noTrackingTitle: 'Ce qui n’est pas ici',
    noTracking: [
      'Pas de Google Analytics ni équivalent',
      'Pas de pixels publicitaires ni de traqueurs sociaux',
      'Pas de polices ni d’intégrations tierces chargées à l’exécution',
      'Aucune donnée envoyée à un serveur ABNOX',
    ],
    clearTitle: 'Effacer les préférences locales',
    clearText:
      'Supprime le thème, la langue et le consentement enregistrés dans ce navigateur. La page se recharge avec les valeurs par défaut du système.',
    clear: 'Effacer et recharger',
    close: 'Fermer les paramètres',
    currentChoice: 'Choix enregistré',
    accepted: 'Accepté — stockage essentiel uniquement',
    rejected: 'Refusé — stockage essentiel uniquement',
    notChosen: 'Pas encore choisi',
    savedNote: 'Rien à enregistrer — il n’y a rien d’optionnel à activer.',
    policyLink: 'Confidentialité',
  },
}
