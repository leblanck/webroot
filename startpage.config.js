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
		orange: "#FE8019"
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
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
		selectionFg: "black"
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
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
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
					icon: "mdi:web"
				},
				{
					name: "Keybase",
					url: "https://keybase.io/",
					icon: "fa-brands:keybase"
				},
				{
					name: "GPT",
					url: "https://chat.openai.com/",
					icon: "simple-icons:openai"
				},
				{
					name: "Mail",
					url: "https://mail.google.com",
					icon: "tabler:brand-gmail"
				}
			]
		},
		{
			title: "Dev",
			color: "magenta",
			align: "left",
			links: [
				{
					name: "GitHub",
					url: "https://github.com",
					icon: "mdi:github"
				},
				{
					name: "DigitalOcean",
					url: "https://www.digitalocean.com",
					icon: "mdi:digital-ocean"
				},
				{
					name: "Portainer",
					url: "",
					icon: "simple-icons:portainer"
				},
				{
					name: "Stack Overflow",
					url: "https://stackoverflow.com/",
					icon: "mdi:stack-overflow"
				}
			]
		},
		{
			title: "Social",
			color: "violet",
			align: "left",
			links: [
				{
					name: "Twitter",
					url: "https://twitter.com",
					icon: "mdi:twitter"
				},
				{
					name: "Mastodon",
					url: "https://mastodon.social/",
					icon: "ri:mastodon-fill"
				},
				{
					name: "Reddit",
					url: "https://reddit.com",
					icon: "mdi:reddit"
				},
				{
					name: "Polywork",
					url: "https://polywork.com",
					icon: "simple-icons:polywork"
				}
			]
		},
		{
			title: "Gaming",
			color: "cyan",
			align: "left",
			links: [
				{
					name: "Polygon",
					url: "https://polygon.com",
					icon: "uil:polygon"
				},
				{
					name: "IGN",
					url: "https://ign.com",
					icon: "mdi:currency-sign"
				},
				{
					name: "RPS",
					url: "https://rockpapershotgun.com/",
					icon: "ph:toilet-paper-bold"
				},
				{
					name: "80lv",
					url: "https://80.lv/",
					icon: "tabler:hand-rock"
				}
			]
		},
		{
			title: "Science",
			color: "blue",
			align: "left",
			links: [
				{
					name: "PopSci",
					url: "https://popsci.com/",
					icon: "material-symbols:science"
				},
				{
					name: "Space",
					url: "fa6-solid:user-astronaut",
					icon: "mdi:reddit"
				},
				{
					name: "NASA",
					url: "https://blogs.nasa.gov/",
					icon: "simple-icons:nasa"
				},
				{
					name: "ESA",
					url: "https://blogs.esa.int/",
					icon: "mdi:black-mesa"
				}
			]
		},
		{
			title: "Tech",
			color: "yellow",
			align: "left",
			links: [
				{
					name: "TechCrunch",
					url: "https://techcrunch.com/",
					icon: "game-icons:techno-heart"
				},
				{
					name: "NewStack",
					url: "https://thenewstack.io",
					icon: "bi:stack"
				},
				{
					name: "It's Foss",
					url: "https://itsfoss.com/",
					icon: "ri:mastodon-fill"
				},
				{
					name: "9To5 Linux",
					url: "https://9to5linux.com/",
					icon: "uil:linux"
				}
			]
		}
	]
}

export default defaultConfig
