/* Shared project data for index.html.
   Add a new project here once and it appears on the site automatically. */
var PROJECTS = [

	{
		id: "llm-training-studio",
		section: "Windows Apps",
		title: "LLM Training Studio",
		tags: ["Python", "Flask", "LoRA · QLoRA", "GGUF"],
		image: "llm-training-studio.jpg",
		description: "A local LLM fine-tuning studio built with Python and Flask. Train a custom AI model on your own Q&amp;A data using LoRA / QLoRA — entirely on your machine, no cloud, no account required. Runs in your browser at <strong>http://localhost:5001</strong>.",
		features: [
			{ label: "Core", items: [
				"Web-based Training Studio UI",
				"LoRA and 4-bit QLoRA fine-tuning",
				"Multi-model support",
				"GGUF export (q4_k_m, q8_0, f16, q4_0)",
				"Auto-registers with Ollama"
			]},
			{ label: "Tools", items: [
				"Built-in chat server at localhost:5000",
				"Live CPU, RAM, GPU &amp; VRAM monitor",
				"Package Manager tab",
				"No HuggingFace account required"
			]}
		],
		link: "https://github.com/NeHeGL/llm-training-studio"
	},

	{
		id: "camera-effects",
		section: "Windows Apps",
		title: "Camera Effects Playground",
		tags: ["Python", "PyQt6", "OpenCV", "MediaPipe"],
		image: "camera-effects.jpg",
		description: "A real-time webcam effects application. All processing runs locally — no browser, no cloud, no external services. Built alongside my kids, who contributed ideas and tested effects live.",
		features: [
			{ label: "Effects", items: [
				"22 real-time special effects",
				"Background replacement via MediaPipe",
				"Blur, Solid Color, Custom Image modes"
			]},
			{ label: "Output", items: [
				"Snapshot output to PNG",
				"Video recording to AVI",
				"Multi-camera device support"
			]}
		],
		link: "https://github.com/NeHeGL/camera-effects"
	},

	{
		id: "dmg-converter",
		section: "Windows Apps",
		title: "Dmg Converter",
		tags: ["C++", "Portable", "Zero deps"],
		image: "dmg-converter.jpg",
		description: "Convert Apple Disk Images (.dmg) to ISO / IMG on Windows — with zero dependencies and no installer required. Dual-mode: drag &amp; drop GUI or CLI.",
		features: [
			{ label: "Formats", items: [
				"Outputs .iso (HFS+) or .img (GPT/EFI)",
				"Optional .vmdk for VirtualBox",
				"ZLIB, RAW, ADC, BZ2 block types"
			]},
			{ label: "Distribution", items: [
				"No VC++ Redistributable needed",
				"Written in C++ — no external libraries",
				"Single portable .exe"
			]}
		],
		link: "https://github.com/NeHeGL/Dmg-Converter"
	},

	{
		id: "mame-ao",
		section: "Windows Apps",
		title: "mame-ao",
		tags: ["C#", "Web UI", "MAME"],
		image: "mame-ao.jpg",
		description: "A fork of the original mame-ao project, revamped with a completely redesigned web-based UI. Run MAME easily — automatic download and setup of all required files on the fly.",
		features: [
			{ label: "Features", items: [
				"Completely redesigned web-based UI",
				"Auto-downloads MAME &amp; support files",
				"Fetches ROMs from archive.org &amp; BitTorrent",
				"Simple launcher — just run and play"
			]}
		],
		link: "https://github.com/NeHeGL/mame-ao"
	},

	{
		id: "frogs-and-flies",
		section: "Windows Apps",
		title: "Frogs and Flies",
		tags: ["Python", "Pygame", "Atari 2600", "2-Player"],
		image: "frogs-and-flies.jpg",
		description: "A faithful Python/pygame reimplementation of the classic Frogs and Flies (Activision, 1982) for the Atari 2600. Two frogs compete to catch the most flies using their tongues. Jump between lily pads, avoid the pond, and out-eat your opponent!",
		features: [
			{ label: "Gameplay", items: [
				"2-player local versus",
				"Pixel-art Atari 2600 aesthetic",
				"Tongue mechanic to catch flies",
				"Lily pad platforming",
				"First to 10 flies wins"
			]},
			{ label: "Controls", items: [
				"P1: Arrow Keys + Space",
				"P2: WASD + F"
			]}
		],
		link: "https://github.com/NeHeGL/Frogs-and-Flies"
	},

	{
		id: "pfx-unpack",
		section: "Windows Apps",
		title: "PFX Unpacker",
		tags: ["Python", "Portable", "Atari ST"],
		image: "pfx-unpack.jpg",
		description: "Decompress Atari ST executables packed with PFX / PFXPAK — on Windows, with no dependencies and no installer required. Browse for a packed .prg, set the output path, and unpack in one click.",
		features: [
			{ label: "Supported", items: [
				"PFX / PFXPAK packed .prg files",
				"Detects packer version automatically",
				"Reports packed &amp; unpacked sizes"
			]},
			{ label: "Distribution", items: [
				"Single portable .exe",
				"No installer required",
				"Runs on Windows out of the box"
			]}
		],
		link: "https://github.com/NeHeGL/pfx-unpacker"
	},

	{
		id: "retro-movies",
		section: "Windows Apps",
		title: "Retro Movies",
		tags: ["C++", "Win32", "Family"],
		image: "retro-movies.jpg",
		description: "A Windows desktop app for families who love classic films and want a simple way to keep track of what they have watched, what they want to revisit, and what they want to recommend next.",
		features: [
			{ label: "Features", items: [
				"Curated collection of classic movies",
				"Mark titles watched, rate &amp; comment",
				"Poster previews and metadata"
			]},
			{ label: "Sorting", items: [
				"By genre, title, year, box office revenue",
				"Lightweight — built with C++ and Win32"
			]}
		],
		link: "https://github.com/NeHeGL/Retro-Movies"
	},

	{
		id: "txt2img",
		section: "Windows Apps",
		title: "TXT2IMG",
		tags: ["C#", "WinUI 3", "Stable Diffusion XL", "100% Local"],
		image: "txt2img.jpg",
		description: "Generate images from text entirely on your own PC, then copy the result straight to your clipboard. No account, no API keys, no cloud — everything runs locally on your GPU, with img2img reference photo support.",
		features: [
			{ label: "Features", items: [
				"9 style presets — Cartoon, Watercolor, Photorealistic &amp; more",
				"Aspect ratio picker, correctly scaled per model",
				"Reference photo (img2img) with Creativity slider",
				"5 variations generated per prompt"
			]},
			{ label: "Models", items: [
				"Stable Diffusion XL via OnnxStack &amp; DirectML",
				"DreamShaper XL (fast) and SDXL Base",
				"Models auto-download on first use",
				"Copy to clipboard or save as PNG"
			]}
		],
		link: "https://github.com/NeHeGL/TXT2IMG"
	},

	{
		id: "neon-tetris",
		section: "Windows Apps",
		title: "Neon Tetris",
		tags: ["Python", "Pygame", "AI-Generated"],
		image: "neon-tetris.jpg",
		description: "A single-file Python/pygame Tetris clone with a neon cyberpunk visual theme. This one is an example of what can be created with good AI prompting rather than hand-written code — it's not presented as original human-authored work.",
		features: [
			{ label: "Gameplay", items: [
				"Standard 7-piece set with SRS-style rotation",
				"Soft drop and hard drop",
				"Hold piece",
				"High score tracking"
			]},
			{ label: "Controls", items: [
				"Move / Soft Drop: Arrow Keys or WASD",
				"Rotate: Up/W or Z",
				"Hard Drop: Space — Hold: C / Left Shift"
			]}
		],
		link: "https://github.com/NeHeGL/Neon-Tetris"
	},

	{
		id: "install-macos",
		section: "Windows Apps",
		title: "Install macOS",
		tags: ["PowerShell", "WSL2", "QEMU/KVM"],
		image: "install-macos.jpg",
		description: "Downloads, builds, and boots a working macOS install on Windows in a couple of clicks — straight from Apple's own servers, running under WSL2 + KVM for real hardware-accelerated virtualization instead of slow software emulation.",
		features: [
			{ label: "Automation", items: [
				"Downloads Apple's install media itself",
				"Creates a pre-formatted macOS disk per version",
				"Applies per-version OpenCore/SMBIOS settings"
			]},
			{ label: "Supported", items: [
				"High Sierra through Tahoe (10.13 – 26)",
				"No sudo prompts past first-time setup",
				"Boots straight to desktop — no OpenCore picker"
			]}
		],
		link: "https://github.com/NeHeGL/Install-macOS"
	},

	{
		id: "atari-2600-disassembler",
		section: "Windows Apps",
		title: "Atari 2600 Smart Disassembler",
		tags: ["Python", "6502", "Atari 2600", "Reverse Engineering"],
		image: "atari-2600-disassembler.jpg",
		description: "An intelligent 6502 disassembler for Atari 2600 ROMs. Uses code flow analysis, CPU simulation, and pattern recognition to produce clean, reassemblable assembly — built to pair with the companion Assembler for a full disassemble &rarr; tweak &rarr; reassemble round trip.",
		features: [
			{ label: "Analysis", items: [
				"Code flow analysis from the RESET vector",
				"CPU simulation for near-100% code coverage",
				"Code/data separation &amp; variable tracking",
				"Pattern recognition — VBLANK, sprite kernels, timers"
			]},
			{ label: "Output", items: [
				"Full 6502/6507 opcode support, incl. illegal opcodes",
				"Bank switching support (F8, F6, F4, FA, FE, 3F)",
				"Reassemblable output with symbol resolution",
				"ASCII art visualization of graphics data"
			]}
		],
		link: "https://github.com/NeHeGL/Atari-2600-Disassembler"
	},

	{
		id: "atari-2600-assembler",
		section: "Windows Apps",
		title: "Atari 2600 Assembler",
		tags: ["Python", "6502", "Atari 2600", "Assembler"],
		image: "atari-2600-assembler.jpg",
		description: "A complete two-pass 6502 assembler for Atari 2600 ROMs, built to reassemble output from the companion Smart Disassembler — but fully capable of assembling any standard 6502/6507 source file.",
		features: [
			{ label: "Core", items: [
				"Full 6502/6507 instruction set, incl. illegal opcodes",
				"Two-pass assembly with automatic label resolution",
				"Multiple addressing modes — zeropage, absolute, indexed, indirect",
				"Smart zeropage vs. absolute mode detection"
			]},
			{ label: "Tooling", items: [
				"Bank switching support (F8, F6, F4, FA, FE, 3F)",
				"Hardware register symbol definitions",
				"ORG / .byte / .word directives",
				"Clear error reporting with line numbers"
			]}
		],
		link: "https://github.com/NeHeGL/Atari-2600-Assembler"
	},

	{
		id: "lord-of-the-skies",
		section: "iOS Apps",
		title: "Lord of the Skies",
		tags: ["iOS", "OpenGL", "GameCenter"],
		image: "lord-of-the-skies.jpg",
		description: "Experience pixel graphics at their finest in this never-ending battle against the birds. Travel from grasslands to barren volcanic wastelands. Mount your Pegasus, grab your lance — fulfill your destiny!",
		features: [
			{ label: "Gameplay", items: [
				"Birds have 31 different skills",
				"7 unique areas, 5 levels per area",
				"Hidden holiday themes",
				"No hidden fees / No Ads"
			]},
			{ label: "Platform", items: [
				"Leaderboards for points &amp; kills",
				"Saves personal best on device",
				"Touch screen &amp; MFi Gamepad"
			]}
		],
		pressQuotes: [
			{ source: "iOSAppSpy", html: '<a href="http://iosappspy.com/lord-skies-game-app-iphone-ipad-review/">4.5 out of 5 Stars</a>' },
			{ source: "AppAdvice", html: '<a href="http://appadvice.com/appnn/2014/10/appadvice-daily-tetris-like-action-and-80s-racing-with-our-best-new-games">A Glowing Podcast Review by Robin Rhys</a>' },
			{ source: "TouchArcade", html: '<a href="http://toucharcade.com/2014/10/08/lord-of-the-skies/"><i>"I\'m really surprised with just how much I am enjoying playing Lord of the Skies"</i></a>' }
		]
	},

	{
		id: "timeless",
		section: "iOS Apps",
		title: "Timeless Demo",
		tags: ["iOS", "OpenGL", "1994 Demo"],
		image: "timeless.jpg",
		description: "Re-live the past — watch Tran's legendary 1994 Timeless Demo on your iPhone, iPad or iPod Touch. A constantly warping background, original soundtrack, and animated sprites.",
		features: [
			{ label: "Features", items: [
				"Pause and fast-forward support",
				"Behind-the-scenes breakdown",
				"Interactive tint control",
				"OpenGL — smooth on all devices"
			]}
		]
	}

];
