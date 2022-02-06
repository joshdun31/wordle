import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const key = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

const words=[
  "cigar",
  "rebut",
  "sissy",
  "humph",
  "awake",
  "blush",
  "focal",
  "evade",
  "naval",
  "serve",
  "heath",
  "dwarf",
  "model",
  "karma",
  "stink",
  "grade",
  "quiet",
  "bench",
  "abate",
  "feign",
  "major",
  "death",
  "fresh",
  "crust",
  "stool",
  "colon",
  "abase",
  "marry",
  "react",
  "batty",
  "pride",
  "floss",
  "helix",
  "croak",
  "staff",
  "paper",
  "unfed",
  "whelp",
  "trawl",
  "outdo",
  "adobe",
  "crazy",
  "sower",
  "repay",
  "digit",
  "crate",
  "cluck",
  "spike",
  "mimic",
  "pound",
  "maxim",
  "linen",
  "unmet",
  "flesh",
  "booby",
  "forth",
  "first",
  "stand",
  "belly",
  "ivory",
  "seedy",
  "print",
  "yearn",
  "drain",
  "bribe",
  "stout",
  "panel",
  "crass",
  "flume",
  "offal",
  "agree",
  "error",
  "swirl",
  "argue",
  "bleed",
  "delta",
  "flick",
  "totem",
  "wooer",
  "front",
  "shrub",
  "parry",
  "biome",
  "lapel",
  "start",
  "greet",
  "goner",
  "golem",
  "lusty",
  "loopy",
  "round",
  "audit",
  "lying",
  "gamma",
  "labor",
  "islet",
  "civic",
  "forge",
  "corny",
  "moult",
  "basic",
  "salad",
  "agate",
  "spicy",
  "spray",
  "essay",
  "fjord",
  "spend",
  "kebab",
  "guild",
  "aback",
  "motor",
  "alone",
  "hatch",
  "hyper",
  "thumb",
  "dowry",
  "ought",
  "belch",
  "dutch",
  "pilot",
  "tweed",
  "comet",
  "jaunt",
  "enema",
  "steed",
  "abyss",
  "growl",
  "fling",
  "dozen",
  "boozy",
  "erode",
  "world",
  "gouge",
  "click",
  "briar",
  "great",
  "altar",
  "pulpy",
  "blurt",
  "coast",
  "duchy",
  "groin",
  "fixer",
  "group",
  "rogue",
  "badly",
  "smart",
  "pithy",
  "gaudy",
  "chill",
  "heron",
  "vodka",
  "finer",
  "surer",
  "radio",
  "rouge",
  "perch",
  "retch",
  "wrote",
  "clock",
  "tilde",
  "store",
  "prove",
  "bring",
  "solve",
  "cheat",
  "grime",
  "exult",
  "usher",
  "epoch",
  "triad",
  "break",
  "rhino",
  "viral",
  "conic",
  "masse",
  "sonic",
  "vital",
  "trace",
  "using",
  "peach",
  "champ",
  "baton",
  "brake",
  "pluck",
  "craze",
  "gripe",
  "weary",
  "picky",
  "acute",
  "ferry",
  "aside",
  "tapir",
  "troll",
  "unify",
  "rebus",
  "boost",
  "truss",
  "siege",
  "tiger",
  "banal",
  "slump",
  "crank",
  "gorge",
  "query",
  "drink",
  "favor",
  "abbey",
  "tangy",
  "panic",
  "solar",
  "shire",
  "proxy",
  "point",
  "robot",
  "prick",
  "wince",
  "crimp",
  "knoll",
  "sugar",
  "whack",
  "mount",
  "perky",
  "could",
  "wrung",
  "light",
  "those",
  "moist",
  "shard",
  "pleat",
  "aloft",
  "skill",
  "elder",
  "frame",
  "humor",
  "pause",
  "ulcer",
  "ultra",
  "robin",
  "cynic",
  "agora",
  "aroma",
  "caulk",
  "shake",
  "pupal",
  "dodge",
  "swill",
  "tacit",
  "other",
  "thorn",
  "trove",
  "bloke",
  "vivid",
  "spill",
  "chant",
  "choke",
  "rupee",
  "nasty",
  "mourn",
  "ahead",
  "brine",
  "cloth",
  "hoard",
  "sweet",
  "month",
  "lapse",
  "watch",
  "today",
  "focus",
  "smelt",
  "tease",
  "cater",
  "movie",
  "lynch",
  "saute",
  "allow",
  "renew",
  "their",
  "slosh",
  "purge",
  "chest",
  "depot",
  "epoxy",
  "nymph",
  "found",
  "shall",
  "harry",
  "stove",
  "lowly",
  "snout",
  "trope",
  "fewer",
  "shawl",
  "natal",
  "fibre",
  "comma",
  "foray",
  "scare",
  "stair",
  "black",
  "squad",
  "royal",
  "chunk",
  "mince",
  "slave",
  "shame",
  "cheek",
  "ample",
  "flair",
  "foyer",
  "cargo",
  "oxide",
  "plant",
  "olive",
  "inert",
  "askew",
  "heist",
  "shown",
  "zesty",
  "hasty",
  "trash",
  "fella",
  "larva",
  "forgo",
  "story",
  "hairy",
  "train",
  "homer",
  "badge",
  "midst",
  "canny",
  "fetus",
  "butch",
  "farce",
  "slung",
  "tipsy",
  "metal",
  "yield",
  "delve",
  "being",
  "scour",
  "glass",
  "gamer",
  "scrap",
  "money",
  "hinge",
  "album",
  "vouch",
  "asset",
  "tiara",
  "crept",
  "bayou",
  "atoll",
  "manor",
  "creak",
  "showy",
  "phase",
  "froth",
  "depth",
  "gloom",
  "flood",
  "trait",
  "girth",
  "piety",
  "payer",
  "goose",
  "float",
  "donor",
  "atone",
  "primo",
  "apron",
  "blown",
  "cacao",
  "loser",
  "input",
  "gloat",
  "awful",
  "brink",
  "smite",
  "beady",
  "rusty",
  "retro",
  "droll",
  "gawky",
  "hutch",
  "pinto",
  "gaily",
  "egret",
  "lilac",
  "sever",
  "field",
  "fluff",
  "hydro",
  "flack",
  "agape",
  "wench",
  "voice",
  "stead",
  "stalk",
  "berth",
  "madam",
  "night",
  "bland",
  "liver",
  "wedge",
  "augur",
  "roomy",
  "wacky",
  "flock",
  "angry",
  "bobby",
  "trite",
  "aphid",
  "tryst",
  "midge",
  "power",
  "elope",
  "cinch",
  "motto",
  "stomp",
  "upset",
  "bluff",
  "cramp",
  "quart",
  "coyly",
  "youth",
  "rhyme",
  "buggy",
  "alien",
  "smear",
  "unfit",
  "patty",
  "cling",
  "glean",
  "label",
  "hunky",
  "khaki",
  "poker",
  "gruel",
  "twice",
  "twang",
  "shrug",
  "treat",
  "unlit",
  "waste",
  "merit",
  "woven",
  "octal",
  "needy",
  "clown",
  "widow",
  "irony",
  "ruder",
  "gauze",
  "chief",
  "onset",
  "prize",
  "fungi",
  "charm",
  "gully",
  "inter",
  "whoop",
  "taunt",
  "leery",
  "class",
  "theme",
  "lofty",
  "tibia",
  "booze",
  "alpha",
  "thyme",
  "eclat",
  "doubt",
  "parer",
  "chute",
  "stick",
  "trice",
  "alike",
  "sooth",
  "recap",
  "saint",
  "liege",
  "glory",
  "grate",
  "admit",
  "brisk",
  "soggy",
  "usurp",
  "scald",
  "scorn",
  "leave",
  "twine",
  "sting",
  "bough",
  "marsh",
  "sloth",
  "dandy",
  "vigor",
  "howdy",
  "enjoy",
  "valid",
  "ionic",
  "equal",
  "unset",
  "floor",
  "catch",
  "spade",
  "stein",
  "exist",
  "quirk",
  "denim",
  "grove",
  "spiel",
  "mummy",
  "fault",
  "foggy",
  "flout",
  "carry",
  "sneak",
  "libel",
  "waltz",
  "aptly",
  "piney",
  "inept",
  "aloud",
  "photo",
  "dream",
  "stale",
  "vomit",
  "ombre",
  "fanny",
  "unite",
  "snarl",
  "baker",
  "there",
  "glyph",
  "pooch",
  "hippy",
  "spell",
  "folly",
  "louse",
  "gulch",
  "vault",
  "godly",
  "threw",
  "fleet",
  "grave",
  "inane",
  "shock",
  "crave",
  "spite",
  "valve",
  "skimp",
  "claim",
  "rainy",
  "musty",
  "pique",
  "daddy",
  "quasi",
  "arise",
  "aging",
  "valet",
  "opium",
  "avert",
  "stuck",
  "recut",
  "mulch",
  "genre",
  "plume",
  "rifle",
  "count",
  "incur",
  "total",
  "wrest",
  "mocha",
  "deter",
  "study",
  "lover",
  "safer",
  "rivet",
  "funny",
  "smoke",
  "mound",
  "undue",
  "sedan",
  "pagan",
  "swine",
  "guile",
  "gusty",
  "equip",
  "tough",
  "canoe",
  "chaos",
  "covet",
  "human",
  "udder",
  "lunch",
  "blast",
  "stray",
  "manga",
  "melee",
  "lefty",
  "quick",
  "paste",
  "given",
  "octet",
  "risen",
  "groan",
  "leaky",
  "grind",
  "carve",
  "loose",
  "sadly",
  "spilt",
  "apple",
  "slack",
  "honey",
  "final",
  "sheen",
  "eerie",
  "minty",
  "slick",
  "derby",
  "wharf",
  "spelt",
  "coach",
  "erupt",
  "singe",
  "price",
  "spawn",
  "fairy",
  "jiffy",
  "filmy",
  "stack",
  "chose",
  "sleep",
  "ardor",
  "nanny",
  "niece",
  "woozy",
  "handy",
  "grace",
  "ditto",
  "stank",
  "cream",
  "usual",
  "diode",
  "valor",
  "angle",
  "ninja",
  "muddy",
  "chase",
  "reply",
  "prone",
  "spoil",
  "heart",
  "shade",
  "diner",
  "arson",
  "onion",
  "sleet",
  "dowel",
  "couch",
  "palsy",
  "bowel",
  "smile",
  "evoke",
  "creek",
  "lance",
  "eagle",
  "idiot",
  "siren",
  "built",
  "embed",
  "award",
  "dross",
  "annul",
  "goody",
  "frown",
  "patio",
  "laden",
  "humid",
  "elite",
  "lymph",
  "edify",
  "might",
  "reset",
  "visit",
  "gusto",
  "purse",
  "vapor",
  "crock",
  "write",
  "sunny",
  "loath",
  "chaff",
  "slide",
  "queer",
  "venom",
  "stamp",
  "sorry",
  "still",
  "acorn",
  "aping",
  "pushy",
  "tamer",
  "hater",
  "mania",
  "awoke",
  "brawn",
  "swift",
  "exile",
  "birch",
  "lucky",
  "freer",
  "risky",
  "ghost",
  "plier",
  "lunar",
  "winch",
  "snare",
  "nurse",
  "house",
  "borax",
  "nicer",
  "lurch",
  "exalt",
  "about",
  "savvy",
  "toxin",
  "tunic",
  "pried",
  "inlay",
  "chump",
  "lanky",
  "cress",
  "eater",
  "elude",
  "cycle",
  "kitty",
  "boule",
  "moron",
  "tenet",
  "place",
  "lobby",
  "plush",
  "vigil",
  "index",
  "blink",
  "clung",
  "qualm",
  "croup",
  "clink",
  "juicy",
  "stage",
  "decay",
  "nerve",
  "flier",
  "shaft",
  "crook",
  "clean",
  "china",
  "ridge",
  "vowel",
  "gnome",
  "snuck",
  "icing",
  "spiny",
  "rigor",
  "snail",
  "flown",
  "rabid",
  "prose",
  "thank",
  "poppy",
  "budge",
  "fiber",
  "moldy",
  "dowdy",
  "kneel",
  "track",
  "caddy",
  "quell",
  "dumpy",
  "paler",
  "swore",
  "rebar",
  "scuba",
  "splat",
  "flyer",
  "horny",
  "mason",
  "doing",
  "ozone",
  "amply",
  "molar",
  "ovary",
  "beset",
  "queue",
  "cliff",
  "magic",
  "truce",
  "sport",
  "fritz",
  "edict",
  "twirl",
  "verse",
  "llama",
  "eaten",
  "range",
  "whisk",
  "hovel",
  "rehab",
  "macaw",
  "sigma",
  "spout",
  "verve",
  "sushi",
  "dying",
  "fetid",
  "brain",
  "buddy",
  "thump",
  "scion",
  "candy",
  "chord",
  "basin",
  "march",
  "crowd",
  "arbor",
  "gayly",
  "musky",
  "stain",
  "dally",
  "bless",
  "bravo",
  "stung",
  "title",
  "ruler",
  "kiosk",
  "blond",
  "ennui",
  "layer",
  "fluid",
  "tatty",
  "score",
  "cutie",
  "zebra",
  "barge",
  "matey",
  "bluer",
  "aider",
  "shook",
  "river",
  "privy",
  "betel",
  "frisk",
  "bongo",
  "begun",
  "azure",
  "weave",
  "genie",
  "sound",
  "glove",
  "braid",
  "scope",
  "wryly",
  "rover",
  "assay",
  "ocean",
  "bloom",
  "irate",
  "later",
  "woken",
  "silky",
  "wreck",
  "dwelt",
  "slate",
  "smack",
  "solid",
  "amaze",
  "hazel",
  "wrist",
  "jolly",
  "globe",
  "flint",
  "rouse",
  "civil",
  "vista",
  "relax",
  "cover",
  "alive",
  "beech",
  "jetty",
  "bliss",
  "vocal",
  "often",
  "dolly",
  "eight",
  "joker",
  "since",
  "event",
  "ensue",
  "shunt",
  "diver",
  "poser",
  "worst",
  "sweep",
  "alley",
  "creed",
  "anime",
  "leafy",
  "bosom",
  "dunce",
  "stare",
  "pudgy",
  "waive",
  "choir",
  "stood",
  "spoke",
  "outgo",
  "delay",
  "bilge",
  "ideal",
  "clasp",
  "seize",
  "hotly",
  "laugh",
  "sieve",
  "block",
  "meant",
  "grape",
  "noose",
  "hardy",
  "shied",
  "drawl",
  "daisy",
  "putty",
  "strut",
  "burnt",
  "tulip",
  "crick",
  "idyll",
  "vixen",
  "furor",
  "geeky",
  "cough",
  "naive",
  "shoal",
  "stork",
  "bathe",
  "aunty",
  "check",
  "prime",
  "brass",
  "outer",
  "furry",
  "razor",
  "elect",
  "evict",
  "imply",
  "demur",
  "quota",
  "haven",
  "cavil",
  "swear",
  "crump",
  "dough",
  "gavel",
  "wagon",
  "salon",
  "nudge",
  "harem",
  "pitch",
  "sworn",
  "pupil",
  "excel",
  "stony",
  "cabin",
  "unzip",
  "queen",
  "trout",
  "polyp",
  "earth",
  "storm",
  "until",
  "taper",
  "enter",
  "child",
  "adopt",
  "minor",
  "fatty",
  "husky",
  "brave",
  "filet",
  "slime",
  "glint",
  "tread",
  "steal",
  "regal",
  "guest",
  "every",
  "murky",
  "share",
  "spore",
  "hoist",
  "buxom",
  "inner",
  "otter",
  "dimly",
  "level",
  "sumac",
  "donut",
  "stilt",
  "arena",
  "sheet",
  "scrub",
  "fancy",
  "slimy",
  "pearl",
  "silly",
  "porch",
  "dingo",
  "sepia",
  "amble",
  "shady",
  "bread",
  "friar",
  "reign",
  "dairy",
  "quill",
  "cross",
  "brood",
  "tuber",
  "shear",
  "posit",
  "blank",
  "villa",
  "shank",
  "piggy",
  "freak",
  "which",
  "among",
  "fecal",
  "shell",
  "would",
  "algae",
  "large",
  "rabbi",
  "agony",
  "amuse",
  "bushy",
  "copse",
  "swoon",
  "knife",
  "pouch",
  "ascot",
  "plane",
  "crown",
  "urban",
  "snide",
  "relay",
  "abide",
  "viola",
  "rajah",
  "straw",
  "dilly",
  "crash",
  "amass",
  "third",
  "trick",
  "tutor",
  "woody",
  "blurb",
  "grief",
  "disco",
  "where",
  "sassy",
  "beach",
  "sauna",
  "comic",
  "clued",
  "creep",
  "caste",
  "graze",
  "snuff",
  "frock",
  "gonad",
  "drunk",
  "prong",
  "lurid",
  "steel",
  "halve",
  "buyer",
  "vinyl",
  "utile",
  "smell",
  "adage",
  "worry",
  "tasty",
  "local",
  "trade",
  "finch",
  "ashen",
  "modal",
  "gaunt",
  "clove",
  "enact",
  "adorn",
  "roast",
  "speck",
  "sheik",
  "missy",
  "grunt",
  "snoop",
  "party",
  "touch",
  "mafia",
  "emcee",
  "array",
  "south",
  "vapid",
  "jelly",
  "skulk",
  "angst",
  "tubal",
  "lower",
  "crest",
  "sweat",
  "cyber",
  "adore",
  "tardy",
  "swami",
  "notch",
  "groom",
  "roach",
  "hitch",
  "young",
  "align",
  "ready",
  "frond",
  "strap",
  "puree",
  "realm",
  "venue",
  "swarm",
  "offer",
  "seven",
  "dryer",
  "diary",
  "dryly",
  "drank",
  "acrid",
  "heady",
  "theta",
  "junto",
  "pixie",
  "quoth",
  "bonus",
  "shalt",
  "penne",
  "amend",
  "datum",
  "build",
  "piano",
  "shelf",
  "lodge",
  "suing",
  "rearm",
  "coral",
  "ramen",
  "worth",
  "psalm",
  "infer",
  "overt",
  "mayor",
  "ovoid",
  "glide",
  "usage",
  "poise",
  "randy",
  "chuck",
  "prank",
  "fishy",
  "tooth",
  "ether",
  "drove",
  "idler",
  "swath",
  "stint",
  "while",
  "begat",
  "apply",
  "slang",
  "tarot",
  "radar",
  "credo",
  "aware",
  "canon",
  "shift",
  "timer",
  "bylaw",
  "serum",
  "three",
  "steak",
  "iliac",
  "shirk",
  "blunt",
  "puppy",
  "penal",
  "joist",
  "bunny",
  "shape",
  "beget",
  "wheel",
  "adept",
  "stunt",
  "stole",
  "topaz",
  "chore",
  "fluke",
  "afoot",
  "bloat",
  "bully",
  "dense",
  "caper",
  "sneer",
  "boxer",
  "jumbo",
  "lunge",
  "space",
  "avail",
  "short",
  "slurp",
  "loyal",
  "flirt",
  "pizza",
  "conch",
  "tempo",
  "droop",
  "plate",
  "bible",
  "plunk",
  "afoul",
  "savoy",
  "steep",
  "agile",
  "stake",
  "dwell",
  "knave",
  "beard",
  "arose",
  "motif",
  "smash",
  "broil",
  "glare",
  "shove",
  "baggy",
  "mammy",
  "swamp",
  "along",
  "rugby",
  "wager",
  "quack",
  "squat",
  "snaky",
  "debit",
  "mange",
  "skate",
  "ninth",
  "joust",
  "tramp",
  "spurn",
  "medal",
  "micro",
  "rebel",
  "flank",
  "learn",
  "nadir",
  "maple",
  "comfy",
  "remit",
  "gruff",
  "ester",
  "least",
  "mogul",
  "fetch",
  "cause",
  "oaken",
  "aglow",
  "meaty",
  "gaffe",
  "shyly",
  "racer",
  "prowl",
  "thief",
  "stern",
  "poesy",
  "rocky",
  "tweet",
  "waist",
  "spire",
  "grope",
  "havoc",
  "patsy",
  "truly",
  "forty",
  "deity",
  "uncle",
  "swish",
  "giver",
  "preen",
  "bevel",
  "lemur",
  "draft",
  "slope",
  "annoy",
  "lingo",
  "bleak",
  "ditty",
  "curly",
  "cedar",
  "dirge",
  "grown",
  "horde",
  "drool",
  "shuck",
  "crypt",
  "cumin",
  "stock",
  "gravy",
  "locus",
  "wider",
  "breed",
  "quite",
  "chafe",
  "cache",
  "blimp",
  "deign",
  "fiend",
  "logic",
  "cheap",
  "elide",
  "rigid",
  "false",
  "renal",
  "pence",
  "rowdy",
  "shoot",
  "blaze",
  "envoy",
  "posse",
  "brief",
  "never",
  "abort",
  "mouse",
  "mucky",
  "sulky",
  "fiery",
  "media",
  "trunk",
  "yeast",
  "clear",
  "skunk",
  "scalp",
  "bitty",
  "cider",
  "koala",
  "duvet",
  "segue",
  "creme",
  "super",
  "grill",
  "after",
  "owner",
  "ember",
  "reach",
  "nobly",
  "empty",
  "speed",
  "gipsy",
  "recur",
  "smock",
  "dread",
  "merge",
  "burst",
  "kappa",
  "amity",
  "shaky",
  "hover",
  "carol",
  "snort",
  "synod",
  "faint",
  "haunt",
  "flour",
  "chair",
  "detox",
  "shrew",
  "tense",
  "plied",
  "quark",
  "burly",
  "novel",
  "waxen",
  "stoic",
  "jerky",
  "blitz",
  "beefy",
  "lyric",
  "hussy",
  "towel",
  "quilt",
  "below",
  "bingo",
  "wispy",
  "brash",
  "scone",
  "toast",
  "easel",
  "saucy",
  "value",
  "spice",
  "honor",
  "route",
  "sharp",
  "bawdy",
  "radii",
  "skull",
  "phony",
  "issue",
  "lager",
  "swell",
  "urine",
  "gassy",
  "trial",
  "flora",
  "upper",
  "latch",
  "wight",
  "brick",
  "retry",
  "holly",
  "decal",
  "grass",
  "shack",
  "dogma",
  "mover",
  "defer",
  "sober",
  "optic",
  "crier",
  "vying",
  "nomad",
  "flute",
  "hippo",
  "shark",
  "drier",
  "obese",
  "bugle",
  "tawny",
  "chalk",
  "feast",
  "ruddy",
  "pedal",
  "scarf",
  "cruel",
  "bleat",
  "tidal",
  "slush",
  "semen",
  "windy",
  "dusty",
  "sally",
  "igloo",
  "nerdy",
  "jewel",
  "shone",
  "whale",
  "hymen",
  "abuse",
  "fugue",
  "elbow",
  "crumb",
  "pansy",
  "welsh",
  "syrup",
  "terse",
  "suave",
  "gamut",
  "swung",
  "drake",
  "freed",
  "afire",
  "shirt",
  "grout",
  "oddly",
  "tithe",
  "plaid",
  "dummy",
  "broom",
  "blind",
  "torch",
  "enemy",
  "again",
  "tying",
  "pesky",
  "alter",
  "gazer",
  "noble",
  "ethos",
  "bride"
]

const alphabets = "abcdefghijklmnopqrstuvwxyz";

const initialGameState = {
  boardState: ["", "", "", "", "", ""],
  evaluations: [null, null, null, null, null, null],
  rowIndex: 0,
  solution: words[Math.floor(Math.random()*words.length)],
  gameStatus: "IN_PROGRESS",
  lastPlayedTs: null,
  lastCompletedTs: null,
  restoringFromLocalStorage: null,
};

const initialKeyColors=[
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]
export default function Home() {
  const [gameState, setgameState] = useState(null);
  const [currentRow, setcurrentRow] = useState(null);
  const [currentRowValues, setcurrentRowValues] = useState([]);
  const [gameRulesShow, setgameRulesShow] = useState(true);
  const [keyColors, setkeyColors] = useState(initialKeyColors);

  useEffect(() => {
    // localStorage.clear("gameState")
    let localStateValue = JSON.parse(localStorage.getItem("gameState"));
    if (!localStateValue) {
      localStorage.setItem("gameState", JSON.stringify(initialGameState));
    }
    setgameState(localStateValue ? localStateValue : initialGameState);
    setcurrentRow(localStateValue ? localStateValue.rowIndex : 0);
    return () => { };
  }, []);

  useEffect(() => {
    
    return () => { };
  }, [gameState,currentRow,keyColors]);

  useEffect(() => {
    return () => { };
  }, [currentRow]);

  useEffect(() => {
    function handlePress(e) {
      //Checking if the key pressed is alphabet and there are tries left
      if(gameState.gameStatus==="IN_PROGRESS"){

        if (
          ((e.keyCode >= 65 && e.keyCode <= 90) ||
            (e.keyCode >= 97 && e.keyCode <= 122)) &&
          currentRowValues.length < 5
        ) {
          let val = String(e.key).toLowerCase();
          setcurrentRowValues((prev) => [...prev, val]);
        }
        if (
          e.keyCode == 8 &&
          currentRowValues.length > 0 &&
          currentRowValues.length < 6
        ) {
          let val = currentRowValues.length - 1;
          setcurrentRowValues((prev) => prev.filter((item, i) => i != val));
        }
        if (e.keyCode == 13 && currentRow <= 5 && currentRowValues.length == 5) {
          let tmpGameState = gameState;
          let checkedWord = checkWord();
          tmpGameState.evaluations[currentRow] = checkedWord[0];
          if (checkedWord[1] == 5) {
            tmpGameState.gameStatus = "WIN";
            setcurrentRowValues([])
          } else if (currentRow == 5) {
            tmpGameState.gameStatus = "LOSE";
            setcurrentRowValues([])
          }
          tmpGameState.boardState[currentRow] = currentRowValues.join("");
          tmpGameState.rowIndex = currentRow + 1;
          localStorage.setItem("gameState", JSON.stringify(tmpGameState));
          setgameState(tmpGameState);
          setcurrentRow((prev) => prev + 1);
          setcurrentRowValues([]);
        }
      }
    }
    window.addEventListener("keydown", handlePress);
    checkKeyColors()
    return () => {
      window.removeEventListener("keydown", handlePress);
    };
  }, [currentRowValues, currentRow, gameState]);

  const checkKeyColors=()=>{
    let tmpkeyColors = keyColors;
    for (let i = 0; i < 5; i++) {
      if (gameState?.boardState[i]!="") {
        for (let j = 0; j < 5; j++) {
          if (
            gameState?.evaluations[i][j] == "absent" &&
            (keyColors[alphabets.indexOf(gameState.boardState[i][j])] != "correct" ||
              keyColors[alphabets.indexOf(gameState.boardState[i][j])] != "present")
          ) {
            tmpkeyColors[alphabets.indexOf(gameState.boardState[i][j])] = gameState.evaluations[i][j];
          } else if (
            gameState?.evaluations[i][j] == "present" &&
            keyColors[alphabets.indexOf(gameState.boardState[i][j])] != "correct"
          ) {
            tmpkeyColors[alphabets.indexOf(gameState.boardState[i][j])] = gameState.evaluations[i][j];
          } else if (gameState?.evaluations[i][j] == "correct") {
            tmpkeyColors[alphabets.indexOf(gameState.boardState[i][j])] = gameState.evaluations[i][j];
          }      
        }
      }  
      if (i==4) {
        setkeyColors(prev=>tmpkeyColors.map((item)=>item))          
      }   
    }
  }

  const checkWord = () => {
    let result = [null, null, null, null, null];
    let correctCount = 0;
    for (let i = 4; i >= 0; i--) {
      if (currentRowValues[i] === String(gameState.solution)[i]) {
        result[i] = "correct";
        correctCount += 1;
      } else if (String(gameState.solution).includes(currentRowValues[i]))
        result[i] = "present";
      else result[i] = "absent";
    }
    return [result, correctCount];
  };

  const emptyBoxRow = () => {
    return (
      <div className="box-row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    );
  };

  const handleKeyValues = () => {
    let a = currentRowValues.map((item, i) => (
      <div key={i} className="box">
        {item}
      </div>
    ));
    let b = [];
    for (let i = currentRowValues.length; i < 5; i++) {
      b.push(<div key={i} className="box"></div>);
    }
    return [...a, ...b];
  };

  const handleButtonClick = (key) => {
    if (currentRowValues.length < 5) {
      setcurrentRowValues((prev) => [...prev, key]);
    }
  };

  const handleBackspaceKey = () => {
    if (currentRowValues.length > 0 && currentRowValues.length < 6) {
      let val = currentRowValues.length - 1;
      setcurrentRowValues((prev) => prev.filter((item, i) => i != val));
    }
  };

  const handleEnterKey = () => {
    if (currentRow <= 5 && currentRowValues.length == 5) {
      let tmpGameState = gameState;
      let checkedWord = checkWord();
      if (checkedWord[1] == 5) {
        tmpGameState.gameStatus = "WIN";
      } else if (currentRow == 5) {
        tmpGameState.gameStatus = "LOSE";
      }
      tmpGameState.evaluations[currentRow] = checkedWord[0];
      tmpGameState.boardState[currentRow] = currentRowValues.join("");
      tmpGameState.rowIndex = currentRow + 1;
      localStorage.setItem("gameState", JSON.stringify(tmpGameState));
      setgameState(tmpGameState);
      setcurrentRow((prev) => prev + 1);
      setcurrentRowValues([]);
      checkKeyColors()
    }
  };

  const setKeyColor = (key, color) => {
    let tmpkeyColors = keyColors;
    if (
      color == "absent" &&
      (keyColors[alphabets.indexOf(key)] != "correct" ||
        keyColors[alphabets.indexOf(key)] != "present")
    ) {
      tmpkeyColors[alphabets.indexOf(key)] = color;
    } else if (
      color == "present" &&
      keyColors[alphabets.indexOf(key)] != "correct"
    ) {
      tmpkeyColors[alphabets.indexOf(key)] = color;
    } else if (color == "correct") {
      tmpkeyColors[alphabets.indexOf(key)] = color;
    }
    // setkeyColors(tmpkeyColors)
  };

  const restartGame=()=>{
    localStorage.clear("gameState");
    localStorage.setItem("gameState", JSON.stringify(initialGameState));
    setgameState(initialGameState);
    setcurrentRow(0);
    setcurrentRowValues([])
    setkeyColors(initialKeyColors)
    setgameRulesShow(false)
  }

  return (
    <div>
      <Head>
        <title>Wordle - A daily word game</title>
        <meta
          name="description"
          content="Guess the hidden word in 6 tries. A new puzzle is available each day."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />

        <title>Wordle - A daily word game</title>
        <meta
          name="description"
          content="Guess the hidden word in 6 tries. A new puzzle is available each day."
        />

        <meta
          property="og:url"
          content="https://www.powerlanguage.co.uk/wordle/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wordle - A daily word game" />
        <meta
          property="og:description"
          content="Guess the hidden word in 6 tries. A new puzzle is available each day."
        />
        <meta
          property="og:image"
          content="https://www.dailywordle.com/images/wordle_og_1200x630.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="powerlanguage.co.uk" />

        <meta name="theme-color" content="#6aaa64" />
        <link rel="manifest" href="manifest.json" />
        <link
          href="images/wordle_logo_32x32.png"
          rel="icon shortcut"
          sizes="3232"
        />
        <link href="images/wordle_logo_192x192.png" rel="apple-touch-icon" />
      </Head>
      <main className="main">
        <div className="app-header">
          <h1>WORDLE</h1>
          <div className="app-info" onClick={()=>setgameRulesShow(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </div>
        </div>
        <div className="box-container">
          <div className="box-row br-1">
            {currentRow === 0
              ? handleKeyValues()
              : gameState?.boardState[0].length
                ? [1, 2, 3, 4, 5].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={"box " + gameState.evaluations[0][i]}
                    >
                      {gameState.boardState[0][i]}
                    </div>
                  );
                })
                : emptyBoxRow()}
          </div>

          <div className="box-row br-2">
            {currentRow === 1
              ? handleKeyValues()
              : gameState?.boardState[1].length
                ? [1, 2, 3, 4, 5].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={"box " + gameState.evaluations[1][i]}
                    >
                      {gameState.boardState[1][i]}
                    </div>
                  );
                })
                : emptyBoxRow()}
          </div>

          <div className="box-row br-3">
            {currentRow === 2
              ? handleKeyValues()
              : gameState?.boardState[2].length
                ? [1, 2, 3, 4, 5].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={"box " + gameState.evaluations[2][i]}
                    >
                      {gameState.boardState[2][i]}
                    </div>
                  );
                })
                : emptyBoxRow()}
          </div>

          <div className="box-row br-4">
            {currentRow === 3
              ? handleKeyValues()
              : gameState?.boardState[3].length
                ? [1, 2, 3, 4, 5].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={"box " + gameState.evaluations[3][i]}
                    >
                      {gameState.boardState[3][i]}
                    </div>
                  );
                })
                : emptyBoxRow()}
          </div>

          <div className="box-row br-5">
            {currentRow === 4
              ? handleKeyValues()
              : gameState?.boardState[4].length
                ? [1, 2, 3, 4, 5].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={"box " + gameState.evaluations[4][i]}
                    >
                      {gameState.boardState[4][i]}
                    </div>
                  );
                })
                : emptyBoxRow()}
          </div>
          <div className="box-row br-6">
            {currentRow === 5
              ? handleKeyValues()
              : gameState?.boardState[5].length
                ? [1, 2, 3, 4, 5].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={"box " + gameState.evaluations[5][i]}
                    >
                      {gameState.boardState[5][i]}
                    </div>
                  );
                })
                : emptyBoxRow()}
          </div>
        </div>

        <div className="keyboard-container">
          <div className="keyboard-row">
            {key[0].map((item, i) => {
              return (
                <div
                  key={i}
                  className={"key-box " + keyColors[alphabets.indexOf(item)]}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>

          <div className="keyboard-row">
            {key[1].map((item, i) => {
              return (
                <div
                  key={i}
                  className={"key-box " + keyColors[alphabets.indexOf(item)]}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>

          <div className="keyboard-row">
            <div className="key-box" onClick={handleEnterKey}>
              enter
            </div>
            {key[2].map((item, i) => {
              return (
                <div
                  key={i}
                  className={"key-box " + keyColors[alphabets.indexOf(item)]}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </div>
              );
            })}
            <div className="key-box" onClick={handleBackspaceKey}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                fill="currentColor"
                className="bi bi-backspace"
                viewBox="0 0 16 16"
              >
                <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
              </svg>
            </div>
          </div>
        </div>
        {gameRulesShow && gameState?.gameStatus=="IN_PROGRESS"? (
          <div className="game-status-container">
            <div className="game-status">
              <div className="close-btn" onClick={()=>setgameRulesShow(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </div>
              <p>Guess the WORDLE in 6 tries.</p>
              <p>
                Each guess must be a valid 5 letter word. Hit the enter button
                to submit.
              </p>
              <p>
                After each guess, the color of the tiles will change to show how
                close your guess was to the word.
              </p>
              <div className="example-w-container">
                <p>Examples</p>
                <div className="example-container">
                  <div className="box-row">
                    <div className="box correct">W</div>
                    <div className="box">E</div>
                    <div className="box">A</div>
                    <div className="box">R</div>
                    <div className="box">Y</div>
                  </div>
                  <p> The letter <strong>W</strong> is in the word and in the correct spot.</p>
                </div>
                <div className="example-container">
                  <div className="box-row">
                    <div className="box">P</div>
                    <div className="box present">I</div>
                    <div className="box">L</div>
                    <div className="box">L</div>
                    <div className="box">S</div>
                  </div>
                  <p> The letter <strong>I</strong> is in the word but in the wrong spot.</p>
                </div>
                <div className="example-container">
                  <div className="box-row">
                    <div className="box">V</div>
                    <div className="box">A</div>
                    <div className="box">G</div>
                    <div className="box absent">U</div>
                    <div className="box">E</div>
                  </div>
                  <p> The letter <strong>U</strong> is not in the word in any spot.</p>
                </div>
                <p>A new WORDLE will be available each day!</p>
              </div>
              
            </div>
          </div>
        ) : null}

        {
          gameState?.gameStatus!=="IN_PROGRESS"?
            <div className="game-status-container">
              <div className="game-over">
                {
                    gameState?.gameStatus=="LOSE"?
                    <div>
                      <p>The correct word is <strong>{gameState?.solution}</strong></p>
                      <p>You <strong>lost</strong> the game😔</p>
                    </div>
                    :
                    <div>
                      <p>You have found the correct word <strong>{gameState?.solution}</strong></p>
                      <p>You <strong>won</strong> the game🥳</p>
                    </div>
                  }
                  <button className="restart-btn" onClick={restartGame}>Start Again</button>
              </div>
            </div>
          :null
        }
      </main>
    </div>
  );
}

// Guess the WORDLE in 6 tries.

// Each guess must be a valid 5 letter word. Hit the enter button to submit.

// After each guess, the color of the tiles will change to show how close your guess was to the word.

// Examples

// The letter W is in the word and in the correct spot.

// The letter I is in the word but in the wrong spot.

// The letter U is not in the word in any spot.

// A new WORDLE will be available each day!
