export type Messages = typeof en

export const en = {
  meta: {
    title: 'ABNOX — Linux, Rust, robots & other experiments',
    description:
      'ABNOX — a Moroccan tinkerer building Linux tools, Rust experiments, terminal toys and small robots. Monochrome, open source and occasionally funny.',
  },
  common: {
    skipToContent: 'Skip to content',
    copy: 'Copy',
    copied: 'Copied!',
    copyError: 'Couldn’t copy — select it manually',
    copyAria: 'Copy {label}',
    opensInNewTab: 'opens in a new tab',
    close: 'Close',
    closeDialog: 'Close dialog',
    menu: 'Menu',
    language: 'Language',
    loading: 'Loading…',
    viewSource: 'View source',
    externalLink: 'External link',
    shortcut: 'Ctrl K',
    shortcutMac: '⌘ K',
    optional: 'optional',
    required: 'required',
  },
  nav: {
    label: 'Primary navigation',
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    moments: 'Moments',
    journey: 'Journey',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    search: 'Search',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    languageHint: 'Choose a language',
  },
  hero: {
    eyebrow: 'Morocco · self-taught · usually in a terminal',
    titleLead: 'I make computers do',
    titleEmphasis: 'slightly weird',
    titleTail: 'things.',
    intro:
      'ABNOX is the corner of the internet where I keep Linux experiments, Rust rabbit holes, small robots and the occasional bad idea that worked.',
    primaryCta: 'Explore the projects',
    secondaryCta: 'Take the scenic route',
    scrollHint: 'Scroll — it gets nerdier.',
    badge: 'open source · linux · robots',
    availability:
      'Currently: breaking my own Linux setup, teaching ATOM to blink less ominously, and taking notes.',
    terminal: {
      title: 'abnox@terminal: ~',
      windowLabel: 'Terminal introduction',
      lines: [
        {
          command: 'whoami',
          output:
            'ABNOX — Moroccan tinkerer, self-taught developer, professional overthinker.',
        },
        {
          command: 'ls interests/',
          output: 'linux/   rust/   security/   robotics/   open-source/',
        },
        {
          command: './currently',
          output: 'breaking my own Linux setup · teaching ATOM to blink · collecting tabs',
        },
        {
          command: 'uptime',
          output: 'up since the last reboot, roughly three coffees ago',
        },
      ],
      prompt: '~',
      cursorLabel: 'Terminal cursor',
    },
    specs: {
      label: 'Quick specs',
      base: 'Base',
      baseValue: 'Morocco',
      mode: 'Mode',
      modeValue: 'tinker',
      status: 'Status',
      statusValue: 'compiling',
    },
    barcodeLabel: 'ABNOX identification barcode',
  },
  about: {
    kicker: '01 / about',
    title: 'The human behind the terminal.',
    lead: 'I’m ABNOX — a Moroccan student, self-taught developer and full-time curious person.',
    p1: 'I got into Linux because I wanted to change one setting. Several reinstalls later, it became the place where I build things. Most of what I know came from breaking something, reading the logs and trying again with fewer assumptions.',
    p2: 'These days I make tools I actually use: a book reader, a terminal music player, a serverless chat app, and a stream deck with four very serious buttons. I like code that does something real, explains itself, and doesn’t phone home.',
    factsTitle: 'Field notes',
    facts: [
      { label: 'Based in', value: 'Morocco' },
      { label: 'Role', value: 'Student & self-taught developer' },
      { label: 'Focus', value: 'Linux · Rust · security · robotics' },
      { label: 'Daily driver', value: 'A terminal, mostly' },
      { label: 'Coffee', value: 'Roughly three cups behind schedule' },
      { label: 'Status', value: 'Compiling' },
    ],
    valuesTitle: 'How I work',
    values: [
      {
        title: 'Look under the hood',
        text: '“It works” is the beginning of the question, not the end of it. I want to know why, and what happens when it stops.',
      },
      {
        title: 'Local first',
        text: 'I prefer tools that keep my files, messages and preferences on my own machine. Convenience is not worth handing over the keys.',
      },
      {
        title: 'Break it, then fix it',
        text: 'The fastest way to learn a system is to make it complain. Snapshots, logs and a backup are part of the method.',
      },
      {
        title: 'Document the chaos',
        text: 'A README written for future me is a gift. A README written for nobody is a cautionary tale.',
      },
    ],
  },
  skills: {
    kicker: '02 / skills & interests',
    title: 'Tools, rabbit holes, and things I’m still learning.',
    intro:
      'No percentage bars, no “10x developer” badges. Just the things I reach for, the things I’m practising, and the topics that keep me up at night.',
    groups: {
      linux: {
        name: 'Linux & systems',
        summary: 'The environment where most of it happens.',
        note: 'Comfortable',
      },
      code: {
        name: 'Programming',
        summary: 'Python for momentum, Rust for the interesting pain.',
        note: 'Building',
      },
      security: {
        name: 'Cybersecurity',
        summary: 'Curious, careful, and not claiming to be a certified anything.',
        note: 'Learning',
      },
      robotics: {
        name: 'Robotics & mechatronics',
        summary: 'Enough hardware to make an ESP32 blink with intent.',
        note: 'Tinkering',
      },
      tools: {
        name: 'Tools & craft',
        summary: 'Small instruments that get out of the way.',
        note: 'Daily use',
      },
    },
    interestsTitle: 'Current interests',
    interests: {
      foss: {
        title: 'Open source',
        text: 'If I can read it, patch it and self-host it, I probably will.',
      },
      security: {
        title: 'Cybersecurity',
        text: 'Not the hoodie kind. The “why is this port open?” kind.',
      },
      robotics: {
        title: 'Robotics & mechatronics',
        text: 'Code that can move, sense and occasionally fall over.',
      },
      terminals: {
        title: 'Terminal interfaces',
        text: 'A good TUI is a tiny operating system for one job.',
      },
      retro: {
        title: 'Retro computing',
        text: 'Chunky pixels, impossible fonts and the sound of a spinning disk.',
      },
      hardware: {
        title: 'Open hardware',
        text: 'ESP32s, jumper wires and the occasional magic smoke.',
      },
    },
    learningTitle: 'Currently learning',
    learning: [
      'Rust ownership without fighting the compiler',
      'Mechatronics fundamentals',
      'Security labs and networking',
      'Shipping before the idea gets boring',
    ],
    disclaimer:
      'This list is honest, not exhaustive. Everything here is something I have used, broken or am actively learning.',
  },
  projects: {
    kicker: '03 / selected experiments',
    title: 'Things I built, broke, or plan to build.',
    intro:
      'Five projects, three states: released, experimental and planned. Search by name or technology, or filter by the part of the stack that hurts most.',
    searchLabel: 'Search projects',
    searchPlaceholder: 'Search a project, a technology, a bad idea…',
    clearSearch: 'Clear project search',
    filtersLabel: 'Filter projects by category',
    all: 'All',
    categories: {
      linux: 'Linux',
      rust: 'Rust',
      robotics: 'Robotics',
      hardware: 'Hardware',
      tools: 'Tools',
    },
    statusLabel: 'Status',
    statuses: {
      released: 'Released',
      active: 'In progress',
      experimental: 'Experimental',
      planned: 'Planned',
    },
    statusNotes: {
      released: 'Source is public.',
      active: 'Actively being built. No public repository yet.',
      experimental: 'An experiment. No public repository yet.',
      planned: 'Planned. Nothing shipped yet.',
    },
    count: '{shown} of {total} projects',
    noResultsTitle: 'No projects match that.',
    noResultsText:
      'Try a different word, a technology name, or clear the filters to see everything.',
    reset: 'Reset filters',
    emptyTitle: 'Nothing here yet.',
    details: 'Details',
    source: 'Source',
    noSource: 'No public repo yet',
    techLabel: 'Stack',
    repoLabel: 'Repository',
    copyRepo: 'Copy repository URL',
    openRepo: 'Open repository',
    closeDetails: 'Close project details',
    overview: 'Overview',
    notes: 'Status notes',
    links: 'Links',
    noSourceTitle: 'No public source (yet)',
    noSourceText:
      'This one is not ready for an audience. No download link, no fake “coming soon” countdown — just an honest placeholder.',
    imageAlt: 'Project preview',
    items: {
      tuxmp: {
        description:
          'A terminal-based media player built with yt-dlp, VLC and Rich. No heavy GUI, no fanfare — just a clean command-line way to play music.',
        details:
          'tuxmp is a terminal-based media player that leans on yt-dlp, VLC and Rich. It keeps the interface in the terminal and the dependencies familiar. Source, usage notes and current limitations live in the GitHub repository.',
        statusNote: 'Published on GitHub.',
        imageAlt: 'tuxmp terminal player illustration',
      },
      atom: {
        description:
          'An ESP32 robotics and visual-expression project with an OLED face and an experimental AI connection. It blinks, it reacts, it occasionally has thoughts.',
        details:
          'ATOM is an ESP32 robotics and visual-expression project. An OLED display gives it a face, while the experimental AI connection is there to explore how a small physical object can react a little less predictably. It is a lab project, not a product.',
        statusNote: 'Experimental. The AI link is still a lab experiment.',
        imageAlt: 'ATOM robot face logo',
      },
      'abno-deck': {
        description:
          'A DIY four-key stream deck for Linux and ESP32. The board sends button IDs; the desktop app owns the actions — launch apps, open URLs, fire shortcuts, control media.',
        details:
          'ABNO DECK pairs an ESP32 with four physical buttons and a Python/PySide6 desktop app. The microcontroller only sends button IDs over USB serial; the desktop owns the entire action map, which is a deliberate security boundary. Actions can launch applications, open URLs, send shortcuts, control media or run validated commands. Built for Debian and the MATE desktop.',
        statusNote: 'Published on GitHub. Linux-only by design.',
        imageAlt: 'Abno Deck four-key keypad logo',
      },
      abnora: {
        description:
          'A local-first PDF reader with a two-page classic book layout, twelve themes and a genuine dislike of telemetry. Open a book, pick a world.',
        details:
          'ABNORA is a local-first desktop book reader built around a two-page classic book layout. It opens PDFs, offers twelve visual themes, night mode and a cover-grid library. No accounts, no cloud, no telemetry — the reading stays on your machine. An open book. Twelve worlds.',
        statusNote: 'Published on GitHub.',
        imageAlt:
          'ABNORA screenshot showing a two-page book spread in a warm sepia theme',
      },
      abnoly: {
        description:
          'A planned terminal-based lyrics project. The goal is simple: keep the words in view without leaving the terminal.',
        details:
          'Abnoly is a planned terminal-based lyrics project. The idea is to keep lyrics in view while music plays, without opening a browser or breaking the terminal workflow. It is currently planned, not shipped; this page will be updated if and when it becomes real.',
        statusNote: 'Planned. Nothing shipped yet.',
        imageAlt: 'Abnoly lyrics terminal illustration',
      },
    },
  },
  moments: {
    kicker: '04 / developer moments',
    title: 'A small collection of coping mechanisms.',
    intro:
      'Local GIFs, because relying on an external meme service feels like building on someone else’s land. They loop a couple of times, then politely stop.',
    items: [
      {
        caption: 'It compiles. I’m as surprised as you are.',
        alt: 'A pixel-art terminal celebrates a successful build, then immediately shows a new error.',
      },
      {
        caption: 'Arch update day: living dangerously.',
        alt: 'A pixel penguin sips coffee while an update progress bar slowly fills.',
      },
      {
        caption: 'ATOM is thinking. Probably about wires.',
        alt: 'A pixel robot face on an OLED screen blinks and shows a thinking bubble.',
      },
    ],
    fallback: 'The GIF refused to load. Imagine something funny here.',
    reducedNote:
      'Animation is off because your system asks for reduced motion. The still frame remains.',
    captionLabel: 'Meme caption',
  },
  journey: {
    kicker: '05 / the scenic route',
    title: 'Student, self-taught, still collecting tabs.',
    intro:
      'Not a résumé — a rough map of how I got here. The order is accurate. The timestamps are deliberately missing.',
    steps: [
      {
        tag: 'Curiosity',
        title: 'Took it apart',
        text: 'Anything with screws was fair game. I put most of it back together. The leftover screw is a personality trait now.',
      },
      {
        tag: 'The terminal',
        title: 'Installed Linux to change one thing',
        text: 'Broke the bootloader. Read the logs. Reinstalled. That was the tutorial. The command line stopped being scary and became a workshop.',
      },
      {
        tag: 'Open source',
        title: 'Started reading other people’s code',
        text: 'Used the tools first, then read their source, then wanted to build my own. The best documentation is still a working example.',
      },
      {
        tag: 'Pixels to pins',
        title: 'Moved from code to hardware',
        text: 'ESP32s, OLEDs, buttons and jumper wires. Hardware made programming physical — and significantly easier to blame on loose wiring.',
      },
      {
        tag: 'Student mode',
        title: 'Building and learning in public',
        text: 'Studying, shipping small things, and sharing them when they’re ready. The list of unfinished ideas is longer than the finished one. That’s how it should be.',
      },
      {
        tag: 'Next',
        title: 'Mechatronics, security, and the next weird idea',
        text: 'The direction is clear; the steps are still compiling. I’d rather stay curious than look finished.',
      },
    ],
    nowTitle: 'Where this is going',
    nowText:
      'Deeper into mechatronics, better at security, more comfortable with Rust, and still building tools that solve a problem I actually have.',
    quote:
      'I don’t need a degree to be curious. I need a terminal, a backup and the willingness to be wrong in public.',
    quoteAuthor: 'ABNOX, probably at 2 a.m.',
  },
  contact: {
    kicker: '06 / contact',
    title: 'Open a channel.',
    intro:
      'No contact form, no newsletter popup, no “let’s circle back”. The public inbox is GitHub or YouTube. Faster than a carrier pigeon, safer than pasting an address into a website.',
    githubTitle: 'Code, issues and experiments',
    githubText:
      'Repositories, release notes and the occasional commit at an unreasonable hour.',
    youtubeTitle: 'Videos and things with a face',
    youtubeText:
      'Linux adventures, project demos and whatever else made it to a thumbnail.',
    copyLabel: 'Copy {label} URL',
    open: 'Open {label}',
    noEmailTitle: 'No public email',
    noEmailText:
      'On purpose. I keep an inbox on GitHub, and the comments under a video get read. Ask about Linux, Rust, weird ESP32 ideas or open-source tools.',
    availabilityTitle: 'Good reasons to say hi',
    reasons: [
      'A Linux problem with an interesting error message',
      'A Rust, Python or hardware project worth comparing notes on',
      'A bug in one of mine — especially the reproducible kind',
      'A genuinely strange idea that involves a terminal',
    ],
    footerNote: 'I reply when I can. “When I can” is doing a lot of work in that sentence.',
  },
  footer: {
    tagline: 'Made of Linux, loose wires and too many open tabs.',
    built: 'Built with React, Vite and an unreasonable amount of box-shadow.',
    privacy: 'Privacy settings',
    top: 'Back to top',
    rights: '© {year} ABNOX. Free to read, not to scrape.',
    made: 'Morocco · no trackers · no ads',
    status: 'All systems slightly wobbly',
    elsewhere: 'Elsewhere',
    navigate: 'Navigate',
    version: 'site v1.0 · monochrome edition',
  },
  search: {
    title: 'Search the site',
    label: 'Search projects, skills and sections',
    placeholder: 'Try “Rust”, “robots”, “ABNORA”…',
    hint: 'Type to search. Use the arrow keys to move, Enter to open, Escape to close.',
    clear: 'Clear search',
    close: 'Close search',
    emptyTitle: 'What are you looking for?',
    emptyText:
      'Search project names, descriptions, technologies, interests or page sections. It all stays on your device.',
    suggestionsTitle: 'Try one of these',
    suggestions: ['Rust', 'Robotics', 'Linux', 'ABNORA'],
    resultsLabel: 'Search results',
    noResultsTitle: 'No matches.',
    noResultsText:
      'Try a shorter word, a technology name, or one of the suggestions below.',
    countOne: '1 result',
    countMany: '{count} results',
    typeSection: 'Section',
    typeProject: 'Project',
    typeInterest: 'Interest',
    open: 'Open {title}',
    shortcutHint: 'Press {shortcut} anywhere to open search',
    esc: 'Esc',
    dialogLabel: 'Site search',
    resultsFor: 'Results for “{query}”',
    quickLinks: 'Quick links',
  },
  cookie: {
    title: 'A very short privacy note',
    text: 'No cookies, no analytics, no ad pixels. This site saves only three things in your browser: your theme, your language and this choice. Accept and Reject do the same thing — one is just more honest about it.',
    accept: 'Accept',
    reject: 'Reject',
    settings: 'Settings',
    saved: 'Preference saved. The banner will stay away.',
    privacyLink: 'Read the whole policy',
    label: 'Privacy notice',
  },
  privacy: {
    title: 'Privacy settings',
    intro:
      'This is the entire privacy policy, not a summary of a longer one. Everything here is stored locally in your browser. Nothing is sent to a server, because there is no analytics server.',
    essentialTitle: 'Essential storage (always on)',
    essentialText:
      'These three keys live in localStorage on this device. They are required for the site to remember what you chose.',
    items: [
      { name: 'Theme', text: 'Remembers light or dark.' },
      { name: 'Language', text: 'Remembers your chosen language.' },
      {
        name: 'Consent',
        text: 'Remembers this choice so the banner does not follow you around.',
      },
    ],
    optionalTitle: 'Optional storage',
    optionalText:
      'There is no optional category. No analytics, no advertising, no third-party embeds to opt into. The toggle would be decorative, so there isn’t one.',
    none: 'None. That’s the whole list.',
    noTrackingTitle: 'What is not here',
    noTracking: [
      'No Google Analytics or equivalent',
      'No advertising pixels or social trackers',
      'No third-party fonts or embeds loaded at runtime',
      'No data sent to an ABNOX server',
    ],
    clearTitle: 'Clear local preferences',
    clearText:
      'Removes the saved theme, language and consent from this browser. The page reloads with system defaults.',
    clear: 'Clear and reload',
    close: 'Close settings',
    currentChoice: 'Saved choice',
    accepted: 'Accepted — essential storage only',
    rejected: 'Rejected — essential storage only',
    notChosen: 'Not chosen yet',
    savedNote: 'Nothing to save — there is nothing optional to turn on.',
    policyLink: 'Privacy',
  },
}
