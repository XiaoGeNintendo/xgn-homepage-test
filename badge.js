/*
 <span class="badge badge-primary">Platform</span>
        <span class="badge badge-warning">Language</span>
        <span class="badge badge-success">Status</span>
        <span class="badge badge-info">Calculate Type</span>
        */

const platform = "badge badge-primary"
const language = "badge badge-warning"
const status = "badge badge-success"
const calcType = "badge badge-info"

var badges = {
    //platform
    "pc": {
        "kind": platform,
        "tooltip": "Personal Computer",
        "display": "PC"
    },
    "switch": {
        "kind": platform,
        "tooltip": "Nintendo Switch",
        "display": "Switch"
    },
    "3ds": {
        "kind": platform,
        "tooltip": "Nintendo 3DS",
        "display": "3DS"
    },

    //language
    "jpn": {
        "kind": language,
        "tooltip": "Japanese",
        "display": "JPN"
    },
    "chn": {
        "kind": language,
        "tooltip": "S.Chinese",
        "display": "CHN"
    },
    "eng": {
        "kind": language,
        "tooltip": "English",
        "display": "ENG"
    },

    //calcType
    "Normal": {
        "kind": calcType,
        "tooltip": "Normal: Music*0.15,Gameplay*0.3,Graphics*0.15,Storyline*0.15,Impression*0.25",
        "display": "Normal"
    },
    "STG": {
        "kind": calcType,
        "tooltip": "Touhou-style STG: Music*0.35,Gameplay*0.15,Graphics*0.1,Storyline*0.1,Impression*0.35",
        "display": "STG"
    },
    "Story": {
        "kind": calcType,
        "tooltip": "Story-based Game: Music*0.1,Gameplay*0.1,Graphics*0.1,Storyline*0.35,Impression*0.35",
        "display": "Story"
    },
    "Test": {
        "kind": calcType,
        "tooltip": "Unfinished/Tried Game: Music*0.25,Gameplay*0.25,Graphics*0.25,Storyline*0,Impression*0.25",
        "display": "Test"
    },
}