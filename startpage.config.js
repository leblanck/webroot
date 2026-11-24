// FIND ICONS HERE: https://icon-sets.iconify.design

const defaultConfig = {
  username: "leblanc.sh",
  theme: {
    backgroundColor: "#282828",
    windowColor: "#3C3836",
    glowColor: "#928374",
    white: "#FBF1C7",
    gray: "#928374",
    black: "#282828",
    red: "#FB4934",
    green: "#B8BB26",
    yellow: "#FABD2F",
    blue: "#83A598",
    cyan: "#8EC07C",
    magenta: "#8EC07C",
    violet: "#D3869B",
    orange: "#FE8019",
  },
  terminal: {
    fixedHeight: true,
    windowGlow: true,
    textGlow: false,
  },
  prompt: {
    ctrlC: true,
    placeholder: "command...",
    placeholderColor: "gray",
    userColor: "green",
    atColor: "gray",
    hostColor: "magenta",
    promptColor: "magenta",
    promptSymbol: "❯",
    caretColor: "green",
    selectionBg: "yellow",
    selectionFg: "black",
  },
  fetch: {
    timeFormat: "HH:mm",
    dateFormat: "DD/MM/YYYY",
    titleColor: "yellow",
    image: "icon.svg",
    data: [
      "Time: {time}",
      "Date: {date}",
      "{seperator}",
      "OS: {osName} {osVersion}",
      "Browser: {browser} {browserVersion}",
      "Engine: {engineName}",
      "{seperator}",
      "{colors}",
    ],
  },
  urlLaunch: {
    target: "_self",
    defaultColor: "white",
    hoverColor: "violet",
  },
  search: {
    default: "https://google.com/search?q=",
    target: "_self",
    shortcutRegex: "([A-Za-z0-9]+) (.*)",
    shortcuts: [
      {
        alias: "g",
        name: "Google Search",
        url: "https://google.com/search?q={}",
      },
      {
        alias: "d",
        name: "DuckDuckGo Search",
        url: "https://duckduckgo.com/?q={}",
      },
      {
        alias: "b",
        name: "Brave Search",
        url: "https://search.brave.com/search?q={}",
      },
      {
        alias: "gh",
        name: "Github Search",
        url: "https://github.com/search?q={}",
      },
      {
        alias: "s",
        name: "Stack Overflow Search",
        url: "https://stackoverflow.com/search?q={}",
      },
      {
        alias: "r",
        name: "Subreddit Search",
        url: "https://reddit.com/r/{}",
      },
      {
        alias: "w",
        name: "Wikipedia Search",
        url: "https://en.wikipedia.org/wiki/{}",
      },
    ],
  },
  sections: [
    {
      title: "General",
      color: "green",
      align: "left",
      links: [
        {
          name: "Portfolio",
          url: "https://leblanc.sh",
          icon: "mdi:web",
        },
        {
          name: "Calendar",
          url: "https://calendar.google.com/",
          icon: "ion:calendar-outline",
        },
        {
          name: "Raindrop",
          url: "https://app.raindrop.io/my/0/",
          icon: "arcticons:raindrop",
        },
        {
          name: "Mail",
          url: "https://mail.google.com",
          icon: "tabler:brand-gmail",
        },
      ],
    },
    {
      title: "Dev",
      color: "magenta",
      align: "left",
      links: [
        {
          name: "GitHub",
          url: "https://github.com",
          icon: "mdi:github",
        },
        {
          name: "Excalidraw",
          url: "https://excalidraw.com",
          icon: "simple-icons:excalidraw",
        },
        {
          name: "Netlify",
          url: "https://www.netlify.com",
          icon: "teenyicons:netlify-solid",
        },
        {
          name: "Claude",
          url: "https://claude.ai/new",
          icon: "simple-icons:claude",
        },
      ],
    },
    {
      title: "Outdoors",
      color: "yellow",
      align: "left",
      links: [
        {
          name: "Field Mag",
          url: "https://www.fieldmag.com",
          icon: "ph:tent",
        },
        {
          name: "Better Trail",
          url: "https://bettertrail.com",
          icon: "game-icons:path-distance",
        },
        {
          name: "onX Backcountry",
          url: "https://webmap.onxmaps.com/backcountry/",
          icon: "fa-solid:window-close",
        },
        {
          name: "AllTrails",
          url: "https://www.alltrails.com",
          icon: "simple-icons:alltrails",
        },
      ],
    },
    {
      title: "Gaming",
      color: "orange",
      align: "left",
      links: [
        {
          name: "MtG",
          url: "https://magic.wizards.com/en",
          icon: "arcticons:magic",
        },
        {
          name: "Moxfield",
          url: "https://moxfield.com",
          icon: "streamline:cards",
        },
        {
          name: "Xbox",
          url: "https://www.xbox.com/en-US/play",
          icon: "bi:xbox",
        },
        {
          name: "DnD Beyond",
          url: "https://www.dndbeyond.com",
          icon: "simple-icons:dungeonsanddragons",
        },
      ],
    },
    {
      title: "Infra",
      color: "blue",
      align: "left",
      links: [
        {
          name: "Hub",
          url: "https://hub.leblanc.sh/",
          icon: "ic:twotone-hub",
        },
        {
          name: "DigitalOcean",
          url: "https://www.digitalocean.com",
          icon: "mdi:digital-ocean",
        },
        {
          name: "...",
          url: "",
          icon: "iconoir:mac-os-window",
        },
        {
          name: "Tailscale",
          url: "https://jelly.leblanc.wtf/",
          icon: "thesvg:tailscale",
        },
      ],
    },
    {
      title: "Social",
      color: "violet",
      align: "left",
      links: [
        {
          name: "Twitter",
          url: "https://twitter.com",
          icon: "mdi:twitter",
        },
        {
          name: "Reddit",
          url: "https://reddit.com",
          icon: "mdi:reddit",
        },
        {
          name: "Youtube",
          url: "https://www.youtube.com",
          icon: "mdi:youtube",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com",
          icon: "mdi:facebook",
        },
      ],
    },
  ],
};

export default defaultConfig;
