import type { Messages } from './en'

export const darija: Messages = {
  meta: {
    title: 'ABNOX — Linux, Rust, robotat w tajribat khrin',
    description:
      'ABNOX — maghribi kaybni tools Linux, tajribat Rust, hwayej dyal terminal w robotat sghar. Monochrome, open source, w mrah mrah kayd7ek.',
  },
  common: {
    skipToContent: 'Duz l content',
    copy: 'Nqel',
    copied: 'Tcopiat!',
    copyError: 'Ma 9dertch ncopy — 3zel l text b yeddik',
    copyAria: 'Nqel {label}',
    opensInNewTab: 'kayt7el f tab jdid',
    close: 'Sedd',
    closeDialog: 'Sedd l dialog',
    menu: 'Menu',
    language: 'Lougha',
    loading: 'Kaytchargi…',
    viewSource: 'Chouf l code',
    externalLink: 'Lien kharji',
    shortcut: 'Ctrl K',
    shortcutMac: '⌘ K',
    optional: 'ikhtiyari',
    required: 'darouri',
  },
  nav: {
    label: 'Navigation ra2issiya',
    home: 'Sfha lowla',
    about: '3la liya',
    skills: 'L’maharat',
    projects: 'L’machari3',
    moments: 'L7dat',
    journey: 'L’massar',
    contact: 'Twasel',
    openMenu: '7el l menu',
    closeMenu: 'Sedd l menu',
    search: 'Qelleb',
    themeToDark: 'Beddel l dark mode',
    themeToLight: 'Beddel l light mode',
    languageHint: 'Khtar lougha',
  },
  hero: {
    eyebrow: 'Lmaghrib · 3assami · ghaliban f terminal',
    titleLead: 'Kan khelli l’ordinateur ydir 7wayej',
    titleEmphasis: 'shwiya gharibin',
    titleTail: '.',
    intro:
      'ABNOX hia l’angle dyal internet fin kanjme3 tajribat Linux, l7far f Rust, robotat sghar, w chi afkar mzowla li naj7at 3la 9bal.',
    primaryCta: 'Chouf l’machari3',
    secondaryCta: 'Khd triq twila',
    scrollHint: 'Nzel — l’hwayej kaywliw ktar geek.',
    badge: 'open source · linux · robotat',
    availability:
      'Daba: kanse7er Linux dyal rasi, kan3lem ATOM yremchech bla ma ykhewwen, w kanekteb notes.',
    terminal: {
      title: 'abnox@terminal: ~',
      windowLabel: 'M9addima b terminal',
      lines: [
        {
          command: 'whoami',
          output:
            'ABNOX — maghribi kaybni hwayej, dev 3assami, w professionnel f overthinking.',
        },
        {
          command: 'ls interests/',
          output: 'linux/   rust/   security/   robotics/   open-source/',
        },
        {
          command: './currently',
          output: 'kanse7er Linux · kan3lem ATOM yremchech · kanjme3 tabs',
        },
        {
          command: 'uptime',
          output: 'khdam mn mora l reboot l’akhira, ta9riban 3 finajen qahwa',
        },
      ],
      prompt: '~',
      cursorLabel: 'Curseur dyal terminal',
    },
    specs: {
      label: 'Specs sri3a',
      base: 'Blasa',
      baseValue: 'Lmaghrib',
      mode: 'Mode',
      modeValue: 'tajriba',
      status: 'Status',
      statusValue: 'compiling',
    },
    barcodeLabel: 'Barcode dyal ABNOX',
  },
  about: {
    kicker: '01 / 3la liya',
    title: 'L’insan li mora terminal.',
    lead: 'Ana ABNOX — talib maghribi, dev 3assami, w fadouli b douam kamel.',
    p1: 'Dkhelt l Linux 7it bghit nbedel setting wa7ed. Mn be3d 3 reboots, wla l blasa fin kanbni hwayej. L’aghlab dyal li n3ref ja mn kasser chi 7aja, qrit logs, w 3awdt b afkar 9lal.',
    p2: 'Daba kanbni tools li kansta3melhom bsa7: qari2 ktab, player music f terminal, chat bla server, w stream deck b 4 bouton jiddiyin bezzaf. Kanbghi l code li kaydir chi 7aja 7a9i9iya, kaychra7 rasso, w ma kaytelefonich l dar.',
    factsTitle: 'Notes dyal terrain',
    facts: [
      { label: 'Blasa', value: 'Lmaghrib' },
      { label: 'Dour', value: 'Talib w dev 3assami' },
      { label: 'Focus', value: 'Linux · Rust · security · robotics' },
      { label: 'Kol nhar', value: 'Terminal, ghaliban' },
      { label: 'Qahwa', value: 'Ta9riban 3 finajen m3etlin' },
      { label: 'Status', value: 'Compiling' },
    ],
    valuesTitle: 'Kifach kanbni',
    values: [
      {
        title: 'Chouf ta7t l hood',
        text: '«Khdam» hia bidaya dyal sual, machi nihaya. Bghit n3ref 3lach, w ach kayt7el mnin y7bes.',
      },
      {
        title: 'Local b lougha loula',
        text: 'Kanfaddel tools li kaykhelliw l files, messages w preferences f l machine dyali. Ra7a ma test7a9ch tslem l mfat.',
      },
      {
        title: 'Kasser, mn be3d sla7',
        text: 'Asra3 tariqa bach tfhem system hia tkhllih ychki. Snapshots, logs w backup kolhom mn l method.',
      },
      {
        title: 'Documenti l chaos',
        text: 'README mktoub l rasi dyal l mosta9bal hdia. README mktoub l 7ta wa7ed hia 7kaya dyal ta7dir.',
      },
    ],
  },
  skills: {
    kicker: '02 / maharat w ihtimamat',
    title: 'Tools, 7far, w 7wayej li baqi kant3ellmhom.',
    intro:
      'Ma kaynch des barres dyal % wala badges dyal «10x developer». Ghir li kansta3mel, li kantmarren, w l mawadi3 li kaykhelliwni sahr.',
    groups: {
      linux: {
        name: 'Linux & systems',
        summary: 'L’environnement fin kayt7el l’aghlab dyal l khdma.',
        note: 'Mrtah',
      },
      code: {
        name: 'Programming',
        summary: 'Python bach tzreb, Rust bach t3ani b tariqa mzyana.',
        note: 'Kanbni',
      },
      security: {
        name: 'Cybersecurity',
        summary: 'Fadouli, 7dari, w ma kand3ich b chi certif.',
        note: 'Kant3ellem',
      },
      robotics: {
        name: 'Robotics & mechatronics',
        summary: 'Hardware kafi bach ESP32 yremchech b niya.',
        note: 'Kanjarrb',
      },
      tools: {
        name: 'Tools & craft',
        summary: 'Tools sghar kay3erfo yb3do 3la triq.',
        note: 'Kol nhar',
      },
    },
    interestsTitle: 'Ihtimamat daba',
    interests: {
      foss: {
        title: 'Open source',
        text: 'Ila 9dert nqra, n3del w nhostih b rasi, ghaliban ghadi ndirha.',
      },
      security: {
        title: 'Cybersecurity',
        text: 'Machi dyal kapuche. Dyal «3lach had port m7lol?».',
      },
      robotics: {
        title: 'Robotics & mechatronics',
        text: 'Code kayt7arek, kay7ess, w mrah mrah kayt7.',
      },
      terminals: {
        title: 'Terminal interfaces',
        text: 'TUI mzyana hia system dyal 3amal sghir l khedma wa7da.',
      },
      retro: {
        title: 'Retro computing',
        text: 'Pixels kbar, fonts mostahila, w sawt dyal disque kaydour.',
      },
      hardware: {
        title: 'Open hardware',
        text: 'ESP32, jumper wires, w chi dukhan sa7ri mrah mrah.',
      },
    },
    learningTitle: 'Kant3ellem daba',
    learning: [
      'Rust ownership bla ma n3arek l compilateur',
      'Asasiyat mechatronics',
      'Labs dyal security w networking',
      'Nchrer 9bel ma l fikra t9adi',
    ],
    disclaimer:
      'Had lista sadiqa, machi kamla. Kol chi fiha sta3meltou, ksertou, wla kant3ellmou daba.',
  },
  projects: {
    kicker: '03 / tajribat mkhtara',
    title: '7wayej bnit, ksert, wla bghit nbni.',
    intro:
      'Khamsa machari3 f tlata 7alat: mnchour, tajribi, w mokhatat. Qelleb b smiya wla technologie, wla filter b l partie li kaywja3 ktar.',
    searchLabel: 'Qelleb f machari3',
    searchPlaceholder: 'Qelleb 3la machrou3, techno, wla fikra mzowla…',
    clearSearch: 'Mse7 l recherche dyal machari3',
    filtersLabel: 'Filter l machari3 b category',
    all: 'Kolchi',
    categories: {
      linux: 'Linux',
      rust: 'Rust',
      robotics: 'Robotat',
      hardware: 'Hardware',
      tools: 'Adawat',
    },
    statusLabel: 'Status',
    statuses: {
      released: 'Mnchour',
      active: 'Khdam 3lih',
      experimental: 'Tajribi',
      planned: 'Mokhatat',
    },
    statusNotes: {
      released: 'L code 3am.',
      active: 'Khdam 3lih daba. Ma kaynch repo 3am.',
      experimental: 'Tajriba. Ma kaynch repo 3am.',
      planned: 'Mokhatat. Ma khrej walou.',
    },
    count: '{shown} mn {total} machari3',
    noResultsTitle: 'Ma kaynch machrou3 kaytabe9.',
    noResultsText:
      'Jarreb kliwa khra, smiya dyal techno, wla mse7 filters bach tchouf kolchi.',
    reset: '3awd reset filters',
    emptyTitle: 'Ma kaynch walou hna daba.',
    details: 'Tfasil',
    source: 'Code',
    noSource: 'Ma kaynch repo 3am',
    techLabel: 'Stack',
    repoLabel: 'Repo',
    copyRepo: 'Copy URL dyal repo',
    openRepo: '7el repo',
    closeDetails: 'Sedd tfasil dyal machrou3',
    overview: 'Nadra 3amma',
    notes: 'Notes dyal status',
    links: 'Liens',
    noSourceTitle: 'Ma kaynch code 3am (daba)',
    noSourceText:
      'Had wa7ed machi wajed l public. Ma kaynch lien dyal download, wala countdown «coming soon» mzowar — ghir blasa sadiqa.',
    imageAlt: 'Preview dyal machrou3',
    items: {
      tuxmp: {
        description:
          'Player media f terminal mabni b yt-dlp, VLC w Rich. Bla GUI tqiil, bla dajja — ghir tariqa nqiya bach tch3el music mn command line.',
        details:
          'tuxmp player media f terminal kayt3emed 3la yt-dlp, VLC w Rich. Kaykhelli l interface f terminal w dependencies m3rofin. L code, notes dyal usage w l limites l 7aliya f repo GitHub.',
        statusNote: 'Mnchour 3la GitHub.',
        imageAlt: 'Rasm dyal player tuxmp f terminal',
      },
      atom: {
        description:
          'Mashrou3 robotics w visual expression 3la ESP32, b wjeh OLED w connexion AI tajribiya. Kayremchech, kaytf3al, w mrah mrah kaykhemmem.',
        details:
          'ATOM mashrou3 robotics w visual expression 3la ESP32. Chacha OLED kat3tih wjeh, w l connexion AI tajribiya katstakchef kifach chi objet physique sghir y9der ytf3al b tariqa 9lila m9ada. Machrou3 dyal labo, machi produit.',
        statusNote: 'Tajribi. Lien dyal AI baqi tajriba dyal labo.',
        imageAlt: 'Logo dyal wjeh robot ATOM',
      },
      'abno-deck': {
        description:
          'Stream deck DIY b 4 bouton l Linux w ESP32. L carte katsift IDs dyal bouton; l app dyal desktop 3ndha kol l actions — t7el apps, URL, shortcuts, w control media.',
        details:
          'ABNO DECK kayjme3 ESP32 m3a 4 bouton physiques w app desktop b Python/PySide6. Microcontroller kaysift ghir IDs dyal boutons 3la USB serial; desktop 3ndha kol khrita dyal actions, w hia frontiere dyal securite mqsouda. Actions t9dro y7ello applications, URLs, yssifto shortcuts, ycontrolo media, wla ych3lo commands mverifiés. Msna3 l Debian w bureau MATE.',
        statusNote: 'Mnchour 3la GitHub. Linux ghir b l 3ani.',
        imageAlt: 'Logo dyal Abno Deck b 4 boutons',
      },
      abnora: {
        description:
          'Qari2 PDF local b layout dyal ktab klassiki 3la 2 pages, 12 theme, w krah sadiq l telemetry. 7el ktab, khtar 3alam.',
        details:
          'ABNORA qari2 ktoub desktop local mabni 3la layout klassiki 3la 2 pages. Kay7el PDFs, kay3ti 12 theme, night mode, w library b grid dyal covers. Bla comptes, bla cloud, bla telemetry — l qraya katb9a f machine dyalek. Ktab mfto7. 12 3alam.',
        statusNote: 'Mnchour 3la GitHub.',
        imageAlt: 'Screenshot dyal ABNORA kaywerri 2 pages f theme benni dafi',
      },
      abnoly: {
        description:
          'Mashrou3 lyrics f terminal, mokhatat. L hadaf basit: khelli l kelmat f l 3in bla ma tkhrej mn terminal.',
        details:
          'Abnoly mashrou3 lyrics f terminal mokhatat. L fikra hia tkhelli l lyrics bayna mnin l music katdour, bla ma t7el browser wla tkasser l workflow dyal terminal. Daba mokhatat, machi mnchour; had page ghadi tbedel ila w mnin ywli 7a9iqi.',
        statusNote: 'Mokhatat. Ma khrej walou.',
        imageAlt: 'Rasm dyal terminal lyrics Abnoly',
      },
    },
  },
  moments: {
    kicker: '04 / 7dat dyal dev',
    title: 'Collection sghira dyal coping mechanisms.',
    intro:
      'GIFs local, 7it t3emed 3la service dyal memes kharji b7al li bnit f ard dyal chi wa7ed akhor. Kaydoro merrat w mn be3d kay7bso b l’adab.',
    items: [
      {
        caption: 'Compila. Ana mfajje3 b7alk.',
        alt: 'Terminal pixel kay7tafel b build najah, mn be3d kaywerri error jdid direct.',
      },
      {
        caption: 'Nhar dyal update Arch: kan3icho b khatar.',
        alt: 'Penguin pixel kaychreb qahwa w barre dyal update kat3mer b chwiya.',
      },
      {
        caption: 'ATOM kaykhemmem. Ghaliban f les fils.',
        alt: 'Wjeh robot pixel 3la chacha OLED kayremchech w kaywerri bulle dyal tafkir.',
      },
    ],
    fallback: 'GIF ma bghach ytchargi. Tkhayel chi 7aja mrah hna.',
    reducedNote:
      'Animation m7bousa 7it system dyalek kaytleb 9lil dyal 7araka. L image tabita baqia.',
    captionLabel: 'Caption dyal meme',
  },
  journey: {
    kicker: '05 / triq twila',
    title: 'Talib, 3assami, w baqi kanjme3 tabs.',
    intro:
      'Machi CV — khrita ta9ribiya dyal triq. Tartib s7i7. Tawarikh ghaibin b l 3ani.',
    steps: [
      {
        tag: 'Fadoul',
        title: 'Fkekto',
        text: 'Kol chi fih vis kan l3ba. 3awdt rkkebt l’aghlab. L vis li zed 3ndo daba shakhsiya.',
      },
      {
        tag: 'Terminal',
        title: 'Setupit Linux bach nbedel setting wa7ed',
        text: 'Ksert bootloader. Qrit logs. 3awdt setupit. Kan hada howa tutoriel. Command line b9at ma tkhewwench w wlat atelier.',
      },
      {
        tag: 'Open source',
        title: 'Bdit nqra code dyal nas',
        text: 'Sta3melt tools lwel, mn be3d qrit source, mn be3d bghit nbni dyali. A7san documentation baqi exemple khdam.',
      },
      {
        tag: 'Mn pixels l pins',
        title: 'Duzt mn code l hardware',
        text: 'ESP32, OLED, boutons w jumper wires. Hardware khelli programming physique — w ashal b bezzaf bach tlom chi fil m7lol.',
      },
      {
        tag: 'Mode talib',
        title: 'Kanbni w kant3ellem 3la l 3am',
        text: 'Kanqra, kanshi hwayej sghar, w kansharehom mnin ykono wajdin. Lista dyal afkar li ma tkemmloch toul mn li kemmlo. Hadi hia l 7aja l 3adiya.',
      },
      {
        tag: 'Li jay',
        title: 'Mechatronics, security, w l fikra l ghariba jaya',
        text: 'L itijah wadeh; l khatwat baqi compiling. Kanfaddel nb9a fadouli 3la ma nban mkemmel.',
      },
    ],
    nowTitle: 'Fin ghadi had chi',
    nowText:
      'Ktar f mechatronics, 7san f security, mrtah ktar m3a Rust, w baqi kanbni tools li kay7ello mochkil 3ndi bsa7.',
    quote:
      'Ma 7tajtch diplome bach nkon fadouli. 7tajt terminal, backup, w l isti3dad bach nkon ghalt 9dam nas.',
    quoteAuthor: 'ABNOX, ghaliban f 2 dyal lil.',
  },
  contact: {
    kicker: '06 / twasel',
    title: '7el canal.',
    intro:
      'Bla formulaire, bla popup dyal newsletter, bla «ghadi n3awdo ntwasslo». L boîte 3amma hia GitHub wla YouTube. Asra3 mn 7amama, w aslam mn ma tlss9 adresse f site.',
    githubTitle: 'Code, issues w tajribat',
    githubText: 'Repos, release notes, w chi commit f sa3a ma m3qoulach.',
    youtubeTitle: 'Vidéos w 7wayej fihom wjeh',
    youtubeText: 'Moghamarat Linux, demos dyal machari3, w kol chi li stahel thumbnail.',
    copyLabel: 'Copy URL dyal {label}',
    open: '7el {label}',
    noEmailTitle: 'Ma kaynch email 3am',
    noEmailText:
      'B l 3ani. 3ndi boîte 3la GitHub, w kanqra comments ta7t videos. Sowel 3la Linux, Rust, afkar ESP32 ghariba, wla tools open source.',
    availabilityTitle: 'Asbab mzyana bach tslem',
    reasons: [
      'Mochkil Linux m3a error message mchou9',
      'Mashrou3 Rust, Python wla hardware li ystahel tabadol notes',
      'Bug f wa7ed mn dyali — khususann ila kan reproductible',
      'Fikra ghariba bsa7 kat7et terminal',
    ],
    footerNote:
      'Kanjaweb mnin n9der. «Mnin n9der» kat3mel khedma kbira f had jomla.',
  },
  footer: {
    tagline: 'Msna3 mn Linux, fils m7lolin, w tabs bezzaf mftohin.',
    built: 'Mbni b React, Vite, w quantité ghyr m3qoula dyal box-shadow.',
    privacy: 'Settings dyal privacy',
    top: 'Rje3 l fo9',
    rights: '© {year} ABNOX. 7or l qraya, machi l scraping.',
    made: 'Lmaghrib · bla trackers · bla pubs',
    status: 'Kol systems shwiya mkharbqin',
    elsewhere: 'Bla blasa khra',
    navigate: 'Navigation',
    version: 'site v1.0 · édition monochrome',
  },
  search: {
    title: 'Qelleb f site',
    label: 'Qelleb f machari3, maharat w sections',
    placeholder: 'Jarreb «Rust», «robotat», «ABNORA»…',
    hint: 'Kteb bach tqelleb. Sta3mel arrows bach tt7arek, Enter bach t7el, Escape bach tsedd.',
    clear: 'Mse7 recherche',
    close: 'Sedd recherche',
    emptyTitle: '3la ach katqelleb?',
    emptyText:
      'Qelleb f smiyat machari3, descriptions, technologies, ihtimamat wla sections. Kolchi kayb9a f appareil dyalek.',
    suggestionsTitle: 'Jarreb wa7ed mn hadou',
    suggestions: ['Rust', 'Robotat', 'Linux', 'ABNORA'],
    resultsLabel: 'Résultats dyal recherche',
    noResultsTitle: 'Ma kaynch résultats.',
    noResultsText:
      'Jarreb kliwa 9sir, smiya dyal techno, wla wa7ed mn suggestions te7t.',
    countOne: 'Résultat wa7ed',
    countMany: '{count} résultats',
    typeSection: 'Section',
    typeProject: 'Mashrou3',
    typeInterest: 'Ihtimam',
    open: '7el {title}',
    shortcutHint: 'Dghet {shortcut} f ay blasa bach t7el recherche',
    esc: 'Esc',
    dialogLabel: 'Recherche f site',
    resultsFor: 'Résultats l «{query}»',
    quickLinks: 'Liens sri3a',
  },
  cookie: {
    title: 'Note 9sira bezzaf 3la privacy',
    text: 'Bla cookies, bla analytics, bla pixels dyal ads. Had site kay7fed ghir 3 7wayej f browser dyalek: theme, lougha, w had l ikhtiyar. Accept w Reject kaydiro nafs l 7aja — wa7ed ghir sadiq ktar 3liha.',
    accept: 'Accept',
    reject: 'Reject',
    settings: 'Settings',
    saved: 'L préférence tsavet. L bandeau ma ghadi y3awd yban.',
    privacyLink: 'Qra l policy kamla',
    label: 'Notice dyal privacy',
  },
  privacy: {
    title: 'Settings dyal privacy',
    intro:
      'Hadika hia l policy kamla, machi résumé dyal wa7ed toul. Kolchi mkhezen local f browser dyalek. Ma kaynch chi 7aja katsift l server, 7it ma kaynch server dyal analytics.',
    essentialTitle: 'Stockage essentiel (dima khdam)',
    essentialText:
      'Had 3 clés kay3icho f localStorage f had l appareil. Darouriyin bach site ytfekker ach khtarit.',
    items: [
      { name: 'Theme', text: 'Kaytfekker light wla dark.' },
      { name: 'Lougha', text: 'Kaytfekker lougha li khtarit.' },
      {
        name: 'Consentement',
        text: 'Kaytfekker had l ikhtiyar bach l bandeau ma ytab3ekch.',
      },
    ],
    optionalTitle: 'Stockage ikhtiyari',
    optionalText:
      'Ma kaynch catégorie ikhtiyariya. Bla analytics, bla pub, bla embeds kharjiyin. L bouton ghadi ykon décoratif, 3lach ma kaynch.',
    none: 'Walou. Hadi hia lista kamla.',
    noTrackingTitle: 'Ach ma kaynch hna',
    noTracking: [
      'Bla Google Analytics wla chi 7aja b7alha',
      'Bla pixels dyal pub wla trackers sociaux',
      'Bla fonts wla embeds kharjiyin kaytchargaw f runtime',
      'Bla data katsift l server ABNOX',
    ],
    clearTitle: 'Mse7 preferences local',
    clearText:
      'Kay7yed theme, lougha w consentement li mkhzenin f had browser. Page kat3awd tchargi b defaults dyal system.',
    clear: 'Mse7 w 3awd chargi',
    close: 'Sedd settings',
    currentChoice: 'Lkhiyar li msjjel',
    accepted: 'Mqbol — ghir stockage essentiel',
    rejected: 'Mrefoud — ghir stockage essentiel',
    notChosen: 'Mazal ma khtaritich',
    savedNote: 'Ma kaynch chi 7aja l tsejjel — ma kaynch ikhtiyari bach tf3lo.',
    policyLink: 'Privacy',
  },
}
