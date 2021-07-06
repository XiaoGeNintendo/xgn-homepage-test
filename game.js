var template={
    name:"Game Title",
    rating:[1,2,3,4,5], //Music Gameplay Graphics Storyline Impression
    status:[["code","msg"],["code","msg"]],
    comment:"Leave your comment here",
    platform:"code of platform",
    lang:"code of lang",
    timestamp:"2020/4/18 some timestamp and description text",
    img:"https://",
    calcType:"Normal"
}

var calcTypes={
    "STG":{
        name:"Touhou-style STG",
        value:[0.35,0.15,0.1,0.1,0.35]
    },
    "Normal":{
        name:"Normal",
        value:[0.15,0.3,0.15,0.15,0.25]
    },
    "Story":{
        name:"Story-based Game",
        value:[0.1,0.1,0.1,0.35,0.35]
    },
    "Test":{
        name:"Random-play game",
        value:[0.25,0.25,0.25,0,0.25]
    },
}

let STG=[0.35,0.15,0.1,0.1,0.35]
let NORMAL=[0.15,0.3,0.15,0.15,0.25]
let STORY=[0.1,0.1,0.1,0.35,0.35]
let TEST=[0.25,0.25,0.25,0,0.25]

var sbb={
    "clear":{
        icon:"check",
        color:"#00ff00"
    },
    "giveup":{
        icon:"calendar-times-o",
        color:"#ff0000"
    },
    "working":{
        icon:"hourglass-2",
        color:"#F4D03F"
    },
    "perfect":{
        icon:"heart",
        color:"#7D3C98"
    },
    "tried":{
        icon:"bookmark",
        color:"#124816"
    },
    "star":{
        icon:"star",
        color:"#adff2f"
    }
}

var bbb={
    "switch":{
        icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEuUlEQVR4Xu1bTWwbVRD+Zt0ALhKhUu+tBBeowGtCKcGbkmy4gYSAVghRBD2BRKsCAgoI1AgQlB8BglaCC+KnqEJFhQuc8DrI60YNBG9AhQtI7R1EW4kaSL2DnnedeO113mbtlb1e+2Rn3puZ9715M/MmbwgJ/1DC149AAIyNjY0srR+9jhibFKJUR6DZ1dPl0uwPfjyyuckboaQ2d8LfZq4y4czIhXM/LywsLMl4rQqAOjm5mS7SMwy6D8AVMmYB6Qybtlkn8t83jheLZ1LmgWCbEkDWeQIf5XV80JqdPd1ufDsAKJPTHwXhDQIuCyBsjUP4dcss7PcAMDG9g5mPrZGRdDgD/4Dx1GLJOAyAmyf4AUBZbepNBj3RMHieiL5mG7+Tgn+lUn0H2DuY6V5BIqKd5WL+i3YAEPHngOKhB5XJNi4lBVcx+A4wttbnEfitsll4shmEFgAyOX0PEd5zJ54F02NWKf+JH3pBlRLjsg07LAegFaC1yHLHkjqhPwjG2wCuFH9jxt7FknGokZcHAHHm+aLyq2v2Z8mGWj5hnAkhvGVKDwCo6ZC9Rd/EhEUQRsVxoHX2NY0+wQNAVpt6n0EP12YSdltF46NuLL5HFrCsekbTdxPwobMs/qBsFh5ZORruNxHqqunRP1xvP2+Zxs2dmn37My7zAV05Ah5LVyf0k65POJ+qnNtYD5HLFnD9hH6DwlhwndSBcjH/Yrd2v9cWIOSrmn4AwIz4bhPGfioaPzoW4X4ymn4XAcdrP5l2WaX8ZwMFQG76fhAfqS0PuHvRNL70ACBzUp2CIeMvo0clf9kC1qKAiBZYEtkhXesoxr9ghI+ulnHJ+MvofQLAjKJqxb0MPticIYoQo4D3l81bDwEzdrPCsgXK6H0AwIyi5orHQXynRJmvLHP7Pc0gyBYoo/ccAFWb3gfwO67Jm0DqhXT175PidyV1+Tag+hJAmhtr95XNwrt9FAbbZqKBfIA3Q2Rz6a+N06dOHfuvcYFbtuy8ZGTDnwaAnF/GJdthGb2nFqDmpp4F0SuOEsqUZX4766eQqt02CdgFxy/yc1ap8Gp9nGyBMnqPAdA/BWGXUCJdrayfm5ur+Ck0Pj6erqTSFxwAcMQqGQ8MAXARkO2wjN5jC0j6EfBckxPoBIX5ecMgSoDyvDcM2i+LCDCQYdA5fwlPhOogZLXv9tig13xTYcLT5eL2wwOaCq/44QRfhsIHI1mYk9HDS3ZmtuMfKBXuVPhqCgRNlDrVYaAA6OYRjJkFdL8eESMAognDsQEgqnpELACIsh4RDwAirEfEBIDo6hFDAHqdiASRH2VJLh4WEGE9IhYARFmPiA0AUdUjYgSAU5Tpdj0iZgA4LjPBl6Hwl+KBug6HgWEIQJtnerH0AUMLCIHA8AgMj8DKY+zGp7pDHxDkNhbiyLVMkdX9ZfROdZD6gMQ/lEz8U9nEP5au/fsqyc/l67esRDdMCBBaWmYIj1tF4+NOewdkXl5GDxEFKKPpD5FomSGMivnSlhlXiG/TFIBvwPRbHJqmQHw1CLeHapqqgxBl25ysaSrEbredEqZtbplZVI2TxPZNzd2j/dY46UE0sa2z3TTFfuUVqHm6X5Xvhl7/A6Zai7mfk4scAAAAAElFTkSuQmCC",
        text:"Nintendo Switch"
    },
    "pc":{
        icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAYFBMVEX///8AAAC4uLghISG/v7+vr6/z8/MtLS0qKirY2NjHx8fu7u7Ozs6ysrJoaGhFRUXi4uKioqJeXl6JiYn5+flLS0t9fX1WVlYKCgo5OTmZmZmDg4OTk5MaGhozMzNwcHDGPR85AAAB8UlEQVRoge3a3bKCIBgFUMik8CfJyrJS3/8tT000Y0c+RMWaqb2vtMQloaQCYwiCIAiCTIjozX4+/Bw45JDMpBfcLXIWXTrqvJiFX7jy68/yAfi5+GCxJBJd3sCv6I4lfQcvyC1C8F/Of/bUW0cJlev3dzvgwf8mv1IxEbF9B093uv96PZVE1K2BSxL10r8O7POT3LWxyBzC0bzrQ0HPAYhR/P7oRef8FI/hL550zvMRvPKmc74czp898vlw/uCRX8WDeV1y2rOm3tvzgXk4H03ixWf5GDx48ODBgwcPHjx48ODBgwcPHjz4H+Orx0Iup2TXz8fSyG+4v9TkS1Vxf2sfGvjUI98win+MGSy7fFz54yXF62lMeZdnW2/6s/JdXv/EtejybGfe2eBkjOQttfdV/9YreartIyPPVJEZzoDT68Kp83lr07JpX1ddfr8JeJkaznz9tepezEq3SqZX9WBfbthUxoxZ+VsVZXvNZeqIbpRMj1DqHmJjK0LzrxnCC/A/y4899erRs5ZkGIZpoyuxDe9J9YBjtrit2G8PNF89Chry3DXB9/fDR9sc44lzN1yKX+fjXcZ1A0v1J/KlS9H5eJe/4COtu88JuJiL1/0lrbO7HW8hKkUcfhGsrcl75paHpb38PUFD6AiCIAiC+M0fbCAwosdL0LgAAAAASUVORK5CYII=",
        text:"Personal Computer"
    },
    "3ds":{
        icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTQ5MC42NjcsMjI1Ljk2NVY0Mi42NjdDNDkwLjY2NywxOS4xNDYsNDcxLjUzMSwwLDQ0OCwwSDY0QzQwLjQ2OSwwLDIxLjMzMywxOS4xNDYsMjEuMzMzLDQyLjY2N3YxODMuMjk4DQoJCQkJQzguOTQ0LDIzMC4zODMsMCwyNDIuMTEyLDAsMjU2czguOTQ0LDI1LjYxNywyMS4zMzMsMzAuMDM1djE4My4yOThDMjEuMzMzLDQ5Mi44NTQsNDAuNDY5LDUxMiw2NCw1MTJoMzg0DQoJCQkJYzIzLjUzMSwwLDQyLjY2Ny0xOS4xNDYsNDIuNjY3LTQyLjY2N1YyODYuMDM1QzUwMy4wNTYsMjgxLjYxNyw1MTIsMjY5Ljg4OCw1MTIsMjU2UzUwMy4wNTYsMjMwLjM4Myw0OTAuNjY3LDIyNS45NjV6DQoJCQkJIE00Mi42NjcsNDIuNjY3YzAtMTEuNzcxLDkuNTczLTIxLjMzMywyMS4zMzMtMjEuMzMzaDM4NGMxMS43NiwwLDIxLjMzMyw5LjU2MywyMS4zMzMsMjEuMzMzVjIyNEg0Mi42NjdWNDIuNjY3eg0KCQkJCSBNNDI2LjY2NywyNDUuMzMzdjIxLjMzM0g4NS4zMzN2LTIxLjMzM0g0MjYuNjY3eiBNMzIsMjY2LjY2N2MtNS44ODUsMC0xMC42NjctNC43OTItMTAuNjY3LTEwLjY2N1MyNi4xMTUsMjQ1LjMzMywzMiwyNDUuMzMzDQoJCQkJaDMydjIxLjMzM0gzMnogTTQ2OS4zMzMsNDY5LjMzM2MwLDExLjc3MS05LjU3MywyMS4zMzMtMjEuMzMzLDIxLjMzM0g2NGMtMTEuNzYsMC0yMS4zMzMtOS41NjMtMjEuMzMzLTIxLjMzM1YyODhoNDI2LjY2Nw0KCQkJCVY0NjkuMzMzeiBNNDgwLDI2Ni42NjdoLTMydi0yMS4zMzNoMzJjNS44ODUsMCwxMC42NjcsNC43OTIsMTAuNjY3LDEwLjY2N1M0ODUuODg1LDI2Ni42NjcsNDgwLDI2Ni42Njd6Ii8+DQoJCQk8cGF0aCBkPSJNNDE2LDY0SDk2Yy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djEwNi42NjdDODUuMzMzLDE4Ny4yMjksOTAuMTA0LDE5Miw5NiwxOTJoMzIwDQoJCQkJYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42NjdWNzQuNjY3QzQyNi42NjcsNjguNzcxLDQyMS44OTYsNjQsNDE2LDY0eiBNNDA1LjMzMywxNzAuNjY3SDEwNi42NjdWODUuMzMzaDI5OC42NjdWMTcwLjY2Nw0KCQkJCXoiLz4NCgkJCTxwYXRoIGQ9Ik0xNjAsNDY5LjMzM2gxOTJjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N3YtMTI4YzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42NjdIMTYwDQoJCQkJYy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3djEyOEMxNDkuMzMzLDQ2NC41NjMsMTU0LjEwNCw0NjkuMzMzLDE2MCw0NjkuMzMzeiBNMTcwLjY2NywzNDEuMzMzaDE3MC42NjdWNDQ4SDE3MC42NjcNCgkJCQlWMzQxLjMzM3oiLz4NCgkJCTxwYXRoIGQ9Ik05NiwzODRjMTcuNjQ2LDAsMzItMTQuMzU0LDMyLTMyYzAtMTcuNjQ2LTE0LjM1NC0zMi0zMi0zMnMtMzIsMTQuMzU0LTMyLDMyQzY0LDM2OS42NDYsNzguMzU0LDM4NCw5NiwzODR6IE05NiwzNDEuMzMzDQoJCQkJYzUuODg1LDAsMTAuNjY3LDQuNzkyLDEwLjY2NywxMC42NjdTMTAxLjg4NSwzNjIuNjY3LDk2LDM2Mi42NjdTODUuMzMzLDM1Ny44NzUsODUuMzMzLDM1MlM5MC4xMTUsMzQxLjMzMyw5NiwzNDEuMzMzeiIvPg0KCQkJPHBhdGggZD0iTTc0LjY2Nyw0NDhoMTAuNjY3djEwLjY2N2MwLDUuODk2LDQuNzcxLDEwLjY2NywxMC42NjcsMTAuNjY3czEwLjY2Ny00Ljc3MSwxMC42NjctMTAuNjY3VjQ0OGgxMC42NjcNCgkJCQljNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N2MwLTUuODk2LTQuNzcxLTEwLjY2Ny0xMC42NjctMTAuNjY3aC0xMC42NjdWNDE2YzAtNS44OTYtNC43NzEtMTAuNjY3LTEwLjY2Ny0xMC42NjcNCgkJCQlTODUuMzMzLDQxMC4xMDQsODUuMzMzLDQxNnYxMC42NjdINzQuNjY3Yy01Ljg5NiwwLTEwLjY2Nyw0Ljc3MS0xMC42NjcsMTAuNjY3QzY0LDQ0My4yMjksNjguNzcxLDQ0OCw3NC42NjcsNDQ4eiIvPg0KCQkJPGNpcmNsZSBjeD0iNDE2IiBjeT0iMzMwLjY2NyIgcj0iMTAuNjY3Ii8+DQoJCQk8Y2lyY2xlIGN4PSIyNTYiIGN5PSI0Mi42NjciIHI9IjEwLjY2NyIvPg0KCQkJPGNpcmNsZSBjeD0iNDE2IiBjeT0iMzczLjMzMyIgcj0iMTAuNjY3Ii8+DQoJCQk8Y2lyY2xlIGN4PSIzOTQuNjY3IiBjeT0iNDM3LjMzMyIgcj0iMTAuNjY3Ii8+DQoJCQk8Y2lyY2xlIGN4PSI0MzcuMzMzIiBjeT0iMzUyIiByPSIxMC42NjciLz4NCgkJCTxjaXJjbGUgY3g9IjM5NC42NjciIGN5PSIzNTIiIHI9IjEwLjY2NyIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
        text:"Nintendo 3DS"
    },

    "chn":{
        icon:"https://www.countryflags.io/cn/flat/32.png",
        text:"Chinese"
    },
    "eng":{
        icon:"https://www.countryflags.io/gb/flat/32.png",
        text:"English"
    },
    "jpn":{
        icon:"https://www.countryflags.io/jp/flat/32.png",
        text:"Japanese"
    }
}

var games=[
    {
        name:"Animal Crossing: New Horizon",
        rating:[7,9,10,4,6], //Music Gameplay Graphics Storyline Impression
        status:[["clear","KK Glider visit"]],
        comment:"Movement Precision Sucks!!!",
        platform:"switch",
        lang:"chn",
        timestamp:"2020/4/19 uploaded to db",
        release:"2020-04-19",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/a/animal-crossing-new-horizons-switch/Switch_ACNH_box.png",
        calcType:"Normal"
    },
    {
        name:"Shining Resonance Refrain",
        rating:[7,7,7.5,7.6,7.4],
        status:[["giveup","Currently in Ch3"]],
        comment:"Game too hard. I suck at Action games.",
        platform:"switch",
        lang:"eng",
        timestamp:"2020/4/19 uploaded to db",
        release:"2020-04-19",
        img:"https://cdn01.nintendo-europe.com/media/images/05_packshots/games_13/nintendo_switch_8/PS_NSwitch_ShiningResonanceRefrain_PEGI_image500w.jpg",
        calcType:"Normal"
    },
    {
        name:"Rune Factory 4 Special",
        rating:[7,8.5,7.5,9,10],
        status:[["perfect","Easy High%"],["perfect","Newylwed Mode All Clear"],["perfect","Another Episode All Clear"],["giveup","Sharance Maze Lv.500"]],
        comment:"I love it a lot",
        platform:"switch",
        lang:"eng",
        timestamp:"2020/4/19 uploaded to db",
        release:"2020-04-19",
        img:"https://cdn01.nintendo-europe.com/media/images/05_packshots/games_13/nintendo_switch_8/PS_NSwitch_RuneFactory4Special_PEGI_image500w.jpg",
        calcType:"Normal"
    },
    {
        name:"Clubhouse Game: 51 Worldwide Classic",
        rating:[7,7,10,6,7], //Music Gameplay Graphics Storyline Impression
        status:[["clear","All tried"]],
        comment:"Kind of cool",
        platform:"switch",
        lang:"chn",
        timestamp:"2020/6/6 uploaded to db. 6/13 finish",
        release:"2020-06-13",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/c/clubhouse-games-51-worldwide-classics-switch/clubhouse-games-51-worldwide-classics-switch-hero.jpg",
        calcType:"Normal"
    },
    {
        name:"東方魔宝城 ~ Book of Star Mythology",
        rating:[9.4,7.5,8.5,8.8,9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Hero 12Miss"],["perfect","Easy Legacy NoMiss"],["clear","Normal Legacy 1CC"]],
        comment:"Stage 5 is messy",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/6 uploaded to db",
        release:"2020-06-06",
        img:"https://upload.thwiki.cc/thumb/7/76/%E6%9D%B1%E6%96%B9%E9%AD%94%E5%AE%9D%E5%9F%8E_%EF%BD%9E_Book_of_Star_Mythology.%E5%B0%81%E9%9D%A2.jpg/120px-%E6%9D%B1%E6%96%B9%E9%AD%94%E5%AE%9D%E5%9F%8E_%EF%BD%9E_Book_of_Star_Mythology.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方真珠島 ～ Hollow Song of Birds.",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"value",target:9.2
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:9.9},
                        {name:"System",type:"value",target:9.9},
                        {name:"Flow",type:"value",target:9.6},
                    ]
                },
                {
                    name:"Graphics",type:"value",target:10
                },
                {
                    name:"Storyline(Always 8)",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8.6},
                        {name:"Overall",type:"value",target:9.5}
                    ]
                }
            ]
        },
        status:[["clear","Easy 1CC"],["clear","Normal 1CC"],["clear","Easy Extra 1Miss"]],
        comment:"Cool CG",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/6 uploaded to db",
        release:"2020-06-06",
        img:"https://upload.thwiki.cc/thumb/e/e1/%E6%9D%B1%E6%96%B9%E7%9C%9F%E7%8F%A0%E5%B3%B6_%EF%BD%9E_Hollow_Song_of_Birds.%E5%B0%81%E9%9D%A2.jpg/224px-%E6%9D%B1%E6%96%B9%E7%9C%9F%E7%8F%A0%E5%B3%B6_%EF%BD%9E_Hollow_Song_of_Birds.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"トライフォーカサー ～ Outside the Traditional World.",
        rating:[8.5,6.8,7.5,6.3,5], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Tried"]],
        comment:"I hate StB Style game",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/6 uploaded to db",
        release:"2020-06-06",
        img:"https://upload.thwiki.cc/thumb/7/74/%E3%83%88%E3%83%A9%E3%82%A4%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%B5%E3%83%BC_%EF%BD%9E_Outside_the_Traditional_World.%E5%B0%81%E9%9D%A2.png/224px-%E3%83%88%E3%83%A9%E3%82%A4%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%B5%E3%83%BC_%EF%BD%9E_Outside_the_Traditional_World.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"東方催狐譚 ～ Servants of Harvest Wish",
        rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Title",type:"value",target:8.5},
                        {name:"Stage1",type:"value",target:8},
                        {name:"Boss1",type:"value",target:8.5},
                        {name:"Stage2",type:"value",target:9},
                        {name:"Boss2",type:"value",target:10},
                        {name:"Stage3",type:"value",target:9},
                        {name:"Boss3",type:"value",target:9.5},
                        {name:"Stage4",type:"value",target:8.5},
                        {name:"Boss4",type:"value",target:9},
                        {name:"Stage5(AB)",type:"value",target:9.5},
                        {name:"Boss5",type:"value",target:10},
                        {name:"Stage6",type:"value",target:10},
                        {name:"Boss6(+Final)",type:"value",target:10},
                        {name:"StageEX",type:"value",target:9},
                        {name:"BossEX(+1)",type:"value",target:9.5},
                        {name:"Overdrive",type:"value",target:10},
                        {name:"Ending",type:"value",target:9},
                        {name:"Credit",type:"value",target:9},
                    ]
                },
                {
                    name:"Gameplay",type:"value",target:9
                },
                {
                    name:"Graphics",type:"value",target:8.5
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8},
                        {name:"Overall",type:"value",target:9.8}
                    ]
                }
            ]
        },
        status:[["clear","Easy 1CC"],["clear","Normal 1CC"],["perfect","Hard 1CC"]],
        comment:"First Touhou Fangame",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/6 uploaded to db. 2021/6/2 cleared Hard",
        release:"2021-06-02",
        img:"https://upload.thwiki.cc/thumb/2/26/%E6%9D%B1%E6%96%B9%E5%82%AC%E7%8B%90%E8%AD%9A_%EF%BD%9E_Servants_of_Harvest_Wish.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E5%82%AC%E7%8B%90%E8%AD%9A_%EF%BD%9E_Servants_of_Harvest_Wish.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"東方落流星 ～ The Shattered Sky.",
        rating:[8.8,7,4.6,7.2,7], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"]],
        comment:"Image is weird",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/6 uploaded to db",
        release:"2020-06-06",
        img:"https://upload.thwiki.cc/thumb/d/dd/%E6%9D%B1%E6%96%B9%E8%90%BD%E6%B5%81%E6%98%9F_%EF%BD%9E_The_Shattered_Sky.%E5%B0%81%E9%9D%A2.jpg/224px-%E6%9D%B1%E6%96%B9%E8%90%BD%E6%B5%81%E6%98%9F_%EF%BD%9E_The_Shattered_Sky.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方導命樹 ～ Mystical Power Plant.",
        rating:[8,6.1,7,7,5.9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"]],
        comment:"So hard",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/12 uploaded to db",
        release:"2020-06-12",
        img:"https://upload.thwiki.cc/thumb/5/54/%E6%9D%B1%E6%96%B9%E5%B0%8E%E5%91%BD%E6%A8%B9_%EF%BD%9E_Mystical_Power_Plant.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E5%B0%8E%E5%91%BD%E6%A8%B9_%EF%BD%9E_Mystical_Power_Plant.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"おれのアニミズム～天国篇",
        rating:[6,5.8,7,6,6.5], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"]],
        comment:"Glad to play a STG from furry fandom. Game itself just so so. System is too weird for a STG.",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/6/14 uploaded to db",
        release:"2020-06-14",
        img:"https://upload.thwiki.cc/thumb/7/7f/%E3%81%8A%E3%82%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%9F%E3%82%BA%E3%83%A0%EF%BD%9E%E5%A4%A9%E5%9B%BD%E7%AF%87%EF%BD%9E%E5%B0%81%E9%9D%A2.png/252px-%E3%81%8A%E3%82%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%9F%E3%82%BA%E3%83%A0%EF%BD%9E%E5%A4%A9%E5%9B%BD%E7%AF%87%EF%BD%9E%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"東方桃源宮 ～ Riverbed Soul Saver.",
        rating:[9.4,8.5,7.5,8.5,9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"],["clear","Normal 1CC"],["perfect","Hard 1CC"]],
        comment:"So many resources.. Danmaku actually OK.",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/20 uploaded to db",
        release:"2020-06-20",
        img:"https://upload.thwiki.cc/thumb/1/12/%E6%9D%B1%E6%96%B9%E6%A1%83%E6%BA%90%E5%AE%AE_%EF%BD%9E_Riverbed_Soul_Saver.%E5%B0%81%E9%9D%A2.jpg/224px-%E6%9D%B1%E6%96%B9%E6%A1%83%E6%BA%90%E5%AE%AE_%EF%BD%9E_Riverbed_Soul_Saver.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"おれのアニミズム～黄泉還り篇～ The Marching On Fire",
        rating:[6,4.8,7,6,4], //Music Gameplay Graphics Storyline Impression
        status:[["giveup","Easy Unclear"]],
        comment:"This is kinda dumb. Some spellcards are poorly designed.",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/6/22 uploaded to db",
        release:"2020-06-22",
        img:"https://upload.thwiki.cc/thumb/d/dc/%E3%81%8A%E3%82%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%9F%E3%82%BA%E3%83%A0%EF%BD%9E%E9%BB%84%E6%B3%89%E9%82%84%E3%82%8A%E7%AF%87%EF%BD%9E_The_Marching_On_Fire%E5%B0%81%E9%9D%A2.png/252px-%E3%81%8A%E3%82%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%9F%E3%82%BA%E3%83%A0%EF%BD%9E%E9%BB%84%E6%B3%89%E9%82%84%E3%82%8A%E7%AF%87%EF%BD%9E_The_Marching_On_Fire%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"東方命萃酒 ～ Resurrection of Heaven's Liquor."
        ,rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"value",target:6
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:7.5},
                        {name:"System",type:"value",target:7},
                        {name:"Flow",type:"value",target:8},
                    ],
                    addon:[["Weird Laser Hitbox",-0.5]]
                },
                {
                    name:"Graphics",type:"value",target:6
                },
                {
                    name:"Storyline(Always 8)",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:7.6},
                        {name:"Overall",type:"value",target:6}
                    ]
                }
            ]
        },
        status:[["clear","Easy Clear"]],
        comment:"Found this in CreepyNinja's Hall of Shame. Nice try..",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/6/25 uploaded to db. 2021/6/30 cleared easy",
        release:"2021-06-30",
        img:"http://www.disfact.com/product/thd01/jacket2.jpg",
        calcType:"STG"
    },
    {
        name:"東方邪星章 ～ The Last Comer.",
        rating:[8,6.8,6.5,7,7.3], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"]],
        comment:"Nothing too crazy.",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/25 uploaded to db",
        release:"2020-06-25",
        img:"https://upload.thwiki.cc/thumb/d/d6/%E6%9D%B1%E6%96%B9%E9%82%AA%E6%98%9F%E7%AB%A0_%EF%BD%9E_The_Last_Comer.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E9%82%AA%E6%98%9F%E7%AB%A0_%EF%BD%9E_The_Last_Comer.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"東方白塵記 ～ White Names Spoiled Past.",
        rating:[8.3,8,8,9,7.2], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"],["clear","Normal 1CC"]],
        comment:"I suck at logical stuff.",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/25 uploaded to db",
        release:"2020-06-25",
        img:"https://upload.thwiki.cc/thumb/f/f4/%E6%9D%B1%E6%96%B9%E7%99%BD%E5%A1%B5%E8%A8%98_%EF%BD%9E_White_names_spoiled_past.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E7%99%BD%E5%A1%B5%E8%A8%98_%EF%BD%9E_White_names_spoiled_past.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"Pokemon Sword",rating:{
            name:"Score",type:"weight",weight:NORMAL,
            target:[
                {
                    name:"Music",type:"value",target:8.8
                },
                {
                    name:"Gameplay",type:"value",target:8.8
                },
                {
                    name:"Graphics",type:"value",target:9.9
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:10},
                        {name:"Overall",type:"value",target:9}
                    ]
                }
            ]
        },
        status:[["clear","Champion"],["clear","Isle of Armor Clear"]],
        comment:"Actually pretty nice. I love the music and that's enough.",
        platform:"switch",
        lang:"chn",
        timestamp:"2020/6/25 uploaded to db",
        release:"2020-06-25",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/pokemon-sword-switch/Switch_PokemonSword_box.png",
        calcType:"Normal"
    },
    {
        name:"Protoworld",
        rating:[7.5,8,7,6,7], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Pre Alpha 1.0 Clear"]],
        comment:"Concept is good.",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/26 uploaded to db",
        release:"2020-06-26",
        img:"https://img.itch.zone/aW1hZ2UvNjgwMzQyLzM3Mzk1MjUuZ2lm/347x500/EDZ3el.gif",
        calcType:"Normal"
    },
    {
        name:"東方輝針城　～ Double Dealing Character.",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Title",type:"value",target:9},
                        {name:"Stage1",type:"value",target:8},
                        {name:"Boss1",type:"value",target:8},
                        {name:"Stage2",type:"value",target:10},
                        {name:"Boss2",type:"value",target:10},
                        {name:"Stage3",type:"value",target:10},
                        {name:"Boss3",type:"value",target:10},
                        {name:"Stage4",type:"value",target:8},
                        {name:"Boss4",type:"value",target:10},
                        {name:"Stage5",type:"value",target:9},
                        {name:"Boss5",type:"value",target:10},
                        {name:"Stage6",type:"value",target:9},
                        {name:"Boss6",type:"value",target:10},
                        {name:"StageEX",type:"value",target:9},
                        {name:"BossEX",type:"value",target:10},
                        {name:"Ending",type:"value",target:9},
                        {name:"Credit",type:"value",target:9}
                    ]
                },
                {
                    name:"Gameplay",type:"value",target:8.8
                },
                {
                    name:"Graphics",type:"value",target:8.8
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8},
                        {name:"Overall",type:"value",target:9.2}
                    ]
                }
            ]
        },
        status:[["clear","Easy Clear"]],
        comment:"I hate deathbombing",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/27 uploaded to db",
        release:"2020-06-27",
        img:"https://upload.thwiki.cc/thumb/a/a5/%E4%B8%9C%E6%96%B9%E8%BE%89%E9%92%88%E5%9F%8E%E5%B0%81%E9%9D%A2.jpg/300px-%E4%B8%9C%E6%96%B9%E8%BE%89%E9%92%88%E5%9F%8E%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方夢旧市 ～ Glory of Deep Skies.",
        rating:[8,8,8,8,6.8], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Clear"]],
        comment:"Spell timer as tight as can be",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/27 uploaded to db",
        release:"2020-06-27",
        img:"https://upload.thwiki.cc/thumb/9/96/%E6%9D%B1%E6%96%B9%E5%A4%A2%E6%97%A7%E5%B8%82_%EF%BD%9E_Glory_of_Deep_Skies.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E5%A4%A2%E6%97%A7%E5%B8%82_%EF%BD%9E_Glory_of_Deep_Skies.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"連縁无現里 ～ Evanescent Existence",
        rating:[8,3.8,4.5,8,1], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Light Clear"],["clear","Easy Extra Light Clear"],["clear","Easy Basic Clear"],["clear","Easy Extra Basic Clear"]],
        comment:"1.01 is completely a mess. 1.20 is better but still a mess",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/6/30 uploaded to db. 2020/7/3 updated",
        release:"2020-07-03",
        img:"https://upload.thwiki.cc/thumb/f/fd/%E8%BF%9E%E7%BC%98%E6%97%A0%E7%8E%B0%E9%87%8C%EF%BD%9EEvanescent_Existence%E5%B0%81%E9%9D%A2.jpg/252px-%E8%BF%9E%E7%BC%98%E6%97%A0%E7%8E%B0%E9%87%8C%EF%BD%9EEvanescent_Existence%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"Mario & Luigi: Paper Jam",
        rating:[7,9,7.8,7.5,8], //Music Gameplay Graphics Storyline Impression
        status:[["giveup","Give up"]],
        comment:"I am playing this on Citra as my 3DS won't load.",
        platform:"3ds",
        lang:"eng",
        timestamp:"2020/7/3 uploaded to db. 12/12 give up",
        release:"2020-12-12",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/3ds/m/mario-and-luigi-paper-jam-3ds/3DS_MarioLuigi-PaperJam_box.png",
        calcType:"Normal"
    },
    {
        name:"連縁蛇叢釼 ～ Earthen Miraculous Sword",
        rating:[7.5,3.8,6,8,4], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Light Clear"],["clear","Easy Extra Light Clear"],["clear","Easy Basic Clear"],["clear","Easy Extra Basic Clear"]],
        comment:"The same as last Len'en project.",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/7/3 uploaded to db",
        release:"2020-07-03",
        img:"https://upload.thwiki.cc/thumb/8/88/%E8%BF%9E%E7%BC%98%E8%9B%87%E4%B8%9B%E5%89%91%EF%BD%9EEarthen_Miraculous_Sword%E5%B0%81%E9%9D%A2.jpg/252px-%E8%BF%9E%E7%BC%98%E8%9B%87%E4%B8%9B%E5%89%91%EF%BD%9EEarthen_Miraculous_Sword%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"連縁霊烈傳　～ Reactivate majestical imperial",
        rating:[9.5,8,6,7,8.8], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Basic Clear"],["clear","Easy Extra Basic Clear"],["clear","Normal Basic Clear"]],
        comment:"Much better! I like this better than any other Len'en Project!",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/7/5 uploaded to db",
        release:"2020-07-05",
        img:"https://upload.thwiki.cc/thumb/8/82/%E8%BF%9E%E7%BC%98%E7%81%B5%E7%83%88%E4%BC%A0%EF%BD%9EReactivate_majestical_imperial%E5%B0%81%E9%9D%A2.jpg/252px-%E8%BF%9E%E7%BC%98%E7%81%B5%E7%83%88%E4%BC%A0%EF%BD%9EReactivate_majestical_imperial%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"連縁天影戦記 ～ Brilliant pagoda or haze castle",
        rating:[8,9,7,7,5], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Middle Easy Clear"],["clear","Left Easy Clear"],["clear","Right Easy Clear"]],
        comment:"This game's danmaku pattern is stupid, which is just copying and much harder. System too much but I think it's OK.",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/7/7 uploaded to db",
        release:"2020-07-07",
        img:"https://upload.thwiki.cc/thumb/3/3d/%E8%BF%9E%E7%BC%98%E5%A4%A9%E5%BD%B1%E6%88%98%E8%AE%B0%EF%BD%9EBrilliant_pagoda_or_haze_castle%E5%B0%81%E9%9D%A2.jpg/252px-%E8%BF%9E%E7%BC%98%E5%A4%A9%E5%BD%B1%E6%88%98%E8%AE%B0%EF%BD%9EBrilliant_pagoda_or_haze_castle%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"Escaped Chasm",
        rating:[8,7.5,8,9,9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Clear"]],
        comment:"I played this many months ago, but as it's related to Dweller's Empty Path, I decided to upload this. Anyway, a good game!",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/7/11 uploaded to db",
        release:"2020-07-11",
        img:"https://img.itch.zone/aW1hZ2UvMzc3NzYzLzE4OTIxODcucG5n/347x500/trVrjK.png",
        calcType:"Normal"
    },
    {
        name:"Dweller's Empty Path",
        rating:[8.5,8,8,9,9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Clear"]],
        comment:"Always amazed at Temmie's OC and stories. :P",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/7/11 uploaded to db",
        release:"2020-07-11",
        img:"https://img.itch.zone/aW1hZ2UvNTk0OTQ4LzM4MTg3MzkucG5n/347x500/BaK5j6.png",
        calcType:"Normal"
    },
    {
        name:"Paper Mario: The Origami King",
        rating:[8.5,9.6,10,6.5,9.3], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Cleared"]],
        comment:`The music is actually okay, full of local colour(?). 
        The story itself is as stupid and linear as other Mario games, just save the princess and balabala. 
        The system is clever, it deserves a 10pts! However, the lack of attacking methods and items and the super slow movement speed in map lower the score down by 0.4.
        It would be nice if there're post-game contents.
        Anyway, it's a good game overall. You should definitely try it. Don't ask me why I have cleared the game before it releases. 
        Also, I've written a puzzle solver for it, here it is: https://github.com/XiaoGeNintendo/Origami-King-Puzzle-Solver`,
        platform:"switch",
        lang:"chn",
        timestamp:"2020/7/15 uploaded to db",
        release:"2020-07-15",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/paper-mario-the-origami-king-switch/paper-mario-the-origami-king-switch-box.png",
        calcType:"Normal"
    },
    {
        name:"Torchlight II",
        rating:[6.8,8.8,8,6,7], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Experienced"]],
        comment:`just trying it`,
        platform:"pc",
        lang:"chn",
        timestamp:"2020/7/22 uploaded to db",
        release:"2020-07-22",
        img:"https://pwimages-a.akamaihd.net/arcportal_static/images/torchlight2/boxart-available.png",
        calcType:"Test"
    },
    {
        name:"東方時空書 ~ Touhou Rune Legend",
        rating:[6,7,6,6,6], //Music Gameplay Graphics Storyline Impression
        status:[["perfect","Lunatic Demo Clear"]],
        comment:`(...)`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/7/22 uploaded to db",
        release:"2020-07-22",
        img:"https://img.itch.zone/aW1nLzM4OTU3MDAucG5n/original/SBV0pF.png",
        calcType:"Normal"
    },
    {
        name:"One Step From Eden",
        rating:[7.5,7.6,7.5,0,7], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Experienced"]],
        comment:`Too hard for me (laugh)`,
        platform:"switch",
        lang:"chn",
        timestamp:"2020/7/22 uploaded to db",
        release:"2020-07-22",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/o/one-step-from-eden-switch/Switch-OneStepFromEden-box-eShop.png",
        calcType:"Test"
    },
    {
        name:"Ori and the Will of the Wisps",
        rating:[8.8,8.9,9.8,6,8], //Music Gameplay Graphics Storyline Impression
        status:[["giveup","Gave up"]],
        comment:`I don't usually play action platforming games cuz I suck. But somehow one of my friends like it and he recommended it to me.
        So I decided to have a go. But in my opinion, this game is kind of traditional. 
        The animation and the music are excellent and they bring out the atmosphere of the wonderland (but I don't care). 
        It IS good, but it IS also pretty traditional and trivial, nothing special. 
        However, it matches the game style very much. I can't give a low rating for that.
        The controls are pretty nice. The game itself is actually a bit confusing.
        I've played Ori1 and it both has the problem of the super open and large world map.
        I always don't know where to go and where to explore and waste a lot of time. (laugh)
        Maybe I am the kind of people who prefer linear storyline.
        
        I will update the comment after playing it for a few more hours.
        
        The game is too hard for me and I have to desert it after 5 hours of gameplay.`,
        platform:"pc",
        lang:"chn",
        timestamp:"2020/7/23 uploaded to db. 2020/8/2 terminated",
        release:"2020-08-02",
        img:"https://steamcdn-a.akamaihd.net/steam/apps/1057090/header.jpg?t=1591117157",
        calcType:"Normal"
    },
    {
        name:"Barony",
        rating:[7.6,7.2,7,6,6.6], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Experienced"]],
        comment:`Why ceiling so low?`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/8/2 uploaded to db",
        release:"2020-08-02",
        img:"https://steamcdn-a.akamaihd.net/steam/apps/371970/header.jpg?t=1595048471",
        calcType:"Test"
    },
    {
        name:"The Two Doors",
        rating:[6,5,6,0,4], //Music Gameplay Graphics Storyline Impression
        status:[["clear","All ending cleared"]],
        comment:`This is what we call a game of brute force`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/8/2 uploaded to db",
        release:"2020-08-02",
        img:"",
        calcType:"Normal"
    },
    {
        name:"Impeached!",
        rating:[2,6.3,7,0,6], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Experienced"]],
        comment:`Signing the documents are cool`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/8/2 uploaded to db",
        release:"2020-08-02",
        img:"https://img.itch.zone/aW1hZ2UvMTQ1ODA3LzY3NTI4NC5wbmc=/original/0ytUSK.png",
        calcType:"Test"
    },
    {
        name:"Osu! Tatakae! Ouendan!",
        rating:[8,6.8,6.8,8.5,8], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Cannot pass that old man (laugh)"]],
        comment:`Please reduce HP drain...`,
        platform:"3ds",
        lang:"jpn",
        timestamp:"2020/8/2 uploaded to db",
        release:"2020-08-02",
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Osu%21_Tatakae%21_Ouendan_Coverart.png/220px-Osu%21_Tatakae%21_Ouendan_Coverart.png",
        calcType:"Normal"
    },
    {
        name:"Wilmot's Warehouse",
        rating:[6.6,8,8,6,7], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Tried"]],
        comment:`No comment`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/8/7 uploaded to db",
        release:"2020-08-07",
        img:"http://www.wilmotswarehouse.com/top.png",
        calcType:"Test"
    },
    {
        name:"Carrion",
        rating:[6,8.6,9,6,9], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Tried"]],
        comment:`Why targeting and select is all right-hand...`,
        platform:"switch",
        lang:"chn",
        timestamp:"2020/8/7 uploaded to db",
        release:"2020-08-07",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/c/carrion-switch/carrion-switch-box-eshop.png",
        calcType:"Test"
    },
    {
        name:"妖怪狐狸合戦",
        rating:[8,7,7.5,7,8], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Clear"],["clear","Normal clear"]],
        comment:`No comment`,
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/8/7 uploaded to db",
        release:"2020-08-07",
        img:"https://upload.thwiki.cc/thumb/0/0c/%E5%A6%96%E6%80%AA%E7%8B%90%E7%8B%B8%E5%90%88%E6%88%A6%E5%B0%81%E9%9D%A2.jpg/224px-%E5%A6%96%E6%80%AA%E7%8B%90%E7%8B%B8%E5%90%88%E6%88%A6%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方夏夜祭　～ Shining Shooting Star.",
        rating:[8.5,8,8.6,8.7,8.5], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Clear"],["clear","Normal clear"]],
        comment:`No comment`,
        platform:"pc",
        lang:"chn",
        timestamp:"2020/8/11 uploaded to db",
        release:"2020-08-11",
        img:"https://upload.thwiki.cc/thumb/c/c1/%E4%B8%9C%E6%96%B9%E5%A4%8F%E5%A4%9C%E7%A5%AD_%EF%BD%9E_Shining_Shooting_Star.%E5%B0%81%E9%9D%A2.png/224px-%E4%B8%9C%E6%96%B9%E5%A4%8F%E5%A4%9C%E7%A5%AD_%EF%BD%9E_Shining_Shooting_Star.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"東方魔晶精 ~Fairies of Sorcery~",
        rating:[8.3,8.5,7,6,7], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Clear"]],
        comment:`No comment`,
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/8/11 uploaded to db",
        release:"2020-08-11",
        img:"https://upload.thwiki.cc/thumb/8/86/%E6%9D%B1%E6%96%B9%E9%AD%94%E6%99%B6%E7%B2%BE_~Fairies_of_Sorcery~%E8%8F%9C%E5%8D%95%E7%95%8C%E9%9D%A2.jpg/200px-%E6%9D%B1%E6%96%B9%E9%AD%94%E6%99%B6%E7%B2%BE_~Fairies_of_Sorcery~%E8%8F%9C%E5%8D%95%E7%95%8C%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方海恵堂 ～ Marine Benefit.",
        rating:[8.5,7,6,6,7], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Clear"],["clear","Normal Clear"]],
        comment:`Stage 5 is completely a mess! Low rating for that. And the game has no replay system and can run in background, which is stupid.`,
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/8/11 uploaded to db",
        release:"2020-08-11",
        img:"https://upload.thwiki.cc/thumb/e/e5/%E6%9D%B1%E6%96%B9%E6%B5%B7%E6%81%B5%E5%A0%82_%EF%BD%9E_Marine_Benefit.%E5%B0%81%E9%9D%A2.jpg/196px-%E6%9D%B1%E6%96%B9%E6%B5%B7%E6%81%B5%E5%A0%82_%EF%BD%9E_Marine_Benefit.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"Taisei Project",
        rating:[8.5,4,9,7,3], //Music Gameplay Graphics Storyline Impression
        status:[["giveup","Easy Unclear"]],
        comment:`This game is absolute bulls**t in my opinion. The difficulty is too high. The bullet color and the background color are the same.
        It's hard to distinguish laser and background and their warning lines.
        Most spellcards in Stage 6 is confusing. Boss shoots too early after a spellcard begins.
        I don't usually give a low rating because I can't beat the game. But this game is really not friendly to first-play gamers like me.
        The game needs more time to adopt, but I don't have.`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/8/14 uploaded to db",
        release:"2020-08-14",
        img:"https://upload.thwiki.cc/thumb/1/13/taisei-project%E5%B0%81%E9%9D%A2.jpg/224px-taisei-project%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"SeitenTouji 1 - Adamantine Memory Blade",
        rating:[6,5,6,7,4], //Music Gameplay Graphics Storyline Impression
        status:[["giveup","Easy Unclear"]],
        comment:`The music and graphics are not up to standard. Spellcards are OK, pretty trivial, but it can be confusing and weird for first-time players.
        Most of stage4+'s spellcards are annoying as well. Moreover, the stage is just a combination of several items, it's boring and long.
        It deserves a gameplay score like this as I care this a lot as a (relaxing gamer).`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/8/14 uploaded to db",
        release:"2020-08-14",
        img:"https://s3.amazonaws.com/bulletforge_production/images/4759/normal.png?1531540348",
        calcType:"STG"
    },
    {
        name:"while True: learn()",
        rating:[7,8.6,8.6,8.8,9], //Music Gameplay Graphics Storyline Impression
        status:[["perfect","Gold Clear"]],
        comment:`Actually a very neat game with an interesting story and an education purpose. 
        Definitely worth a try. Some levels are a bit hard, but you can skip them. You can even get true ending after skipping tons of levels like me (laugh)
        Some time limits are pretty tight and some levels are confusing though.`,
        platform:"switch",
        lang:"chn",
        timestamp:"2020/8/15 uploaded to db",
        release:"2020-08-15",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/w/while-true-learn-switch/while-true-learn-switch-box-eshop.png",
        calcType:"Normal"
    },
    {
        name:"Danganronpa: Trigger Happy Havoc",
        rating:[8.3,9.2,8.6,9.6,9.3], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Game Clear"]],
        comment:`I played this game because it was similar to Phoenix Wright.
        Some music has potential while others are just trivial. 8.3 for that.
        I love the real-time debate thing and I will give a base score of 10. But as it's too hard to aim I will -0.3 for that.
        The rhythm part is also weird and propose-unknown, I will -0.3 for that. It's sometimes hard to understand what the pictures in the climax
        are trying to tell me, -0.2 for that.
        The graphics are overall good, and I will start by 9. Some icons are not polished, -0.2. The UI in the school mode is a bit weird, -0.2.
        The story itself is cool with a good ending and a meaningful theme. The first few cases are making the games too long and a bit boring.`,
        platform:"pc",
        lang:"chn",
        timestamp:"2020/8/22 uploaded to db",
        release:"2020-08-22",
        img:"https://steamcdn-a.akamaihd.net/steam/apps/413410/header.jpg?t=1590632885",
        calcType:"Story"
    },
    {
        name:"東方陰陽葬～Spirits in Memetic Paradise",
        rating:[7,7.8,9,7,7], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Clear"],["clear","Easy Extra Clear"]],
        comment:`Why everyone loves PC-98 era???`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/8/22 uploaded to db",
        release:"2020-08-22",
        img:"https://s3.amazonaws.com/bulletforge_production/images/5740/normal.jpg?1597598702",
        calcType:"STG"
    },
    {
        name:"Kemono Friends Picross",
        rating:[8,7,7.6,6,7], //Music Gameplay Graphics Storyline Impression
        status:[["giveup","Not working"]],
        comment:`No comment`,
        platform:"switch",
        lang:"eng",
        timestamp:"2020/9/5 uploaded to db",
        release:"2020-09-05",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/k/kemono-friends-picross-switch/Switch_KemonoFriendsPicross_box_eShop.png",
        calcType:"Normal"
    },
    {
        name:"Adventures with Anxiety",
        rating:[8.8,6.8,9,9.3,9.6], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Clear"]],
        comment:`!!`,
        platform:"pc",
        lang:"chn",
        timestamp:"2020/9/5 uploaded to db",
        release:"2020-09-05",
        img:"https://ncase.me/img/awa.png",
        calcType:"Story"
    },
    {
        name:"Danganronpa 2: Goodbye Despair",
        rating:[8,9,8.6,8.3,8.6], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Cleared"]],
        comment:`No comment`,
        platform:"pc",
        lang:"chn",
        timestamp:"2020/9/5 uploaded to db, 2020/11/21 finished",
        release:"2020-11-21",
        img:"https://steamcdn-a.akamaihd.net/steam/apps/413420/header.jpg?t=1590632940",
        calcType:"Story"
    },
    {
        name:"東方鬼葬剣 ～ Infinite Blade Pavilion.",
        rating:[8.6,8,7.8,8,8], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Clear"],["clear","Normal Clear"]],
        comment:`Not as good as HSoB`,
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/9/13 uploaded to db",
        release:"2020-09-13",
        img:"https://upload.thwiki.cc/thumb/9/92/%E6%9D%B1%E6%96%B9%E9%AC%BC%E8%91%AC%E5%89%A3_%EF%BD%9E_Infinite_Blade_Pavilion.%E5%B0%81%E9%9D%A2.jpg/224px-%E6%9D%B1%E6%96%B9%E9%AC%BC%E8%91%AC%E5%89%A3_%EF%BD%9E_Infinite_Blade_Pavilion.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"Super Mario 3D All-Stars",
        rating:[7.6,8,9,7,8], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Super Mario Galaxy 68 stars clear"]],
        comment:`Actually I've got a Wii, but the SMG there is broken. It's quite lucky I don't have to reboot my old Wii :P`,
        platform:"switch",
        lang:"eng",
        timestamp:"2020/9/26 uploaded to db. 2021/01/23 finish SMG",
        release:"2021-01-23",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/super-mario-3d-all-stars-switch/Switch_SM3DAS_box.png",
        calcType:"Normal"
    },
    {
        name:"四聖龍神録 Plus",
        rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"value",target:9.5
                },
                {
                    name:"Gameplay",type:"value",target:7.5
                },
                {
                    name:"Graphics",type:"value",target:7.6
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9},
                        {name:"Overall",type:"value",target:8.4}
                    ]
                }
            ]
        },
        status:[["clear","Easy Clear"],["clear","Ph Easy Clear"]],
        comment:`Very good little game! Unfortunately the game is in Japanese and breaks without the locale.`,
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/9/26 uploaded to db. 2021/6/6 cleared Ph Easy",
        release:"2021-06-06",
        img:"",
        calcType:"STG"
    },
    {
        name:"四聖龍神録2",
        rating:[7.8,9.5,8,9.5,9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Chapter 1-5 Clear"],["clear","Easy Chapter 6 Clear"]],
        comment:`The game has many charming details. Nice animation, cool effects and even a manga!
        I appreciate it! Very excellent and nice game!Even LoLK system!! <br/>
        Some weird stuff(coincidence): <br/>
        Stage 1 looks like TH15 Stage 1 <br/>
        Stage 2 looks like TH11 Stage 3 <br/>
        Stage 3 looks like TH13 Stage 3 <br/>
        Stage 4 looks like TH07 Stage 5 <br/>
        Why extra has 23 phases <br/>
        Why last spell in Stage 5 looks like Yukari's spell so much <br/>
        Why the music has Touhou main theme <br/>
        ...<br/>
        
        Again, sadly, the game is in Japanese locale and the authors seems to have deserted it. `,
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/9/26 uploaded to db",
        release:"2020-09-26",
        img:"https://dixq.net/ryujin2/image/title.jpg",
        calcType:"STG"
    },
    {
        name:"Touhou Gensou Mahjong",
        rating:[8.8,9.3,8.9,0,9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","OK"],],
        comment:`Art styles differ so much`,
        platform:"switch",
        lang:"jpn",
        timestamp:"2020/10/8 uploaded to db",
        release:"2020-10-08",
        img:"https://store-jp.nintendo.com/dw/image/v2/BFGJ_PRD/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dwcbae6e25/products/D70010000018402/heroBanner/7dd7b67839f9db0c28b9512d4dfa0393ea5b5f9d18da368eec0004a3e50740da.jpg?sw=1368&strip=false",
        calcType:"Test"
    },
    {
        name:"東方の迷宮 -幻想郷と天貫の大樹-",
        rating:{
            name:"Score",type:"weight",weight:TEST,
            target:[
                {
                    name:"Music",type:"value",target:8.7
                },
                {
                    name:"Gameplay",type:"value",target:8.6
                },
                {
                    name:"Graphics",type:"value",target:9
                },
                {
                    name:"Storyline",type:"value",target:0
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:6},
                        {name:"Overall",type:"value",target:8.4}
                    ]
                }
            ]
        },
        status:[["tried","Tried"]],
        comment:`Just trying`,
        platform:"switch",
        lang:"jpn",
        timestamp:"2020/10/8 uploaded to db",
        release:"2020-10-08",
        img:"https://store-jp.nintendo.com/dw/image/v2/BFGJ_PRD/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dwef8f09d1/products/D70010000029261/heroBanner/cbc017f37858dc4b5e35891485ef585b2eba952d76c6d8564c78861ed37e0f25.jpg?sw=1368&strip=false",
        calcType:"Test"
    },
    {
        name:"Lost Ember",
        rating:{
            name:"Score",type:"weight",weight:STORY,
            target:[
                {
                    name:"Music",type:"value",target:7,
                },
                {
                    name:"Gameplay",type:"value",target:7.9
                },
                {
                    name:"Graphics",type:"value",target:7
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8},
                        {name:"Overall",type:"value",target:6.9}
                    ]
                }
            ]
        },
        status:[["tried","Stuck at Ch5"]],
        comment:`The game is a bad port to NS. Low quality, low volume and low fps.Lots of bugs too. Don't do it.(facepalm)`,
        platform:"switch",
        lang:"chn",
        timestamp:"2020/10/8 uploaded to db",
        release:"2020-10-08",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/l/lost-ember-switch/lost-ember-switch-box-eshop.png",
        calcType:"Story"
    },
    {
        name:"Augusta Iaponicorum",
        rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"#1",type:"value",target:9},
                        {name:"#2",type:"value",target:10},
                        {name:"#3",type:"value",target:10},
                    ]
                },
                {
                    name:"Gameplay",type:"value",target:7.9
                },
                {
                    name:"Graphics",type:"value",target:8.6
                },
                {
                    name:"Storyline",type:"value",target:6
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:6},
                        {name:"Overall",type:"value",target:9}
                    ]
                }
            ]
        },
        status:[["tried","Tried"]],
        comment:`Music good, graphics good, danmaku not sync with music, some bugs with Reimu's shots.`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/11/22 uploaded to db",
        release:"2020-11-22",
        img:"https://s3.amazonaws.com/bulletforge_production/images/5003/normal.png?1565391132",
        calcType:"STG"
    },
    {
        name:"Ace Attorney: Apollo Justice",
        rating:{
            name:"Score",type:"weight",weight:STORY,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Investigation",type:"value",target:7},
                        {name:"Court",type:"value",target:8.5},
                    ]
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Investigation",type:"value",target:6},
                        {name:"Court",type:"value",target:9},
                    ],
                    addon:[["3D Examine",0.1]]
                },
                {
                    name:"Graphics",type:"value",target:7.8
                },
                {
                    name:"Storyline",type:"value",target:7.6
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8},
                        {name:"Overall",type:"value",target:7}
                    ]
                }
            ]
        },
        status:[["clear","Cleared"]],
        comment:`No comment`,
        platform:"3ds",
        lang:"eng",
        timestamp:"2020/11/28 uploaded to db",
        release:"2020-11-28",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/3ds/a/apollo-justice-ace-attorney-3ds/3DS_ApolloJustice-AceAttorney_box_eShop.png",
        calcType:"Story"
    },
    {
        name:"Azure Reflection",
        rating:{
            name:"Score",type:"weight",weight:NORMAL,
            target:[
                {
                    name:"Music",type:"value",target:8
                },
                {
                    name:"Gameplay",type:"value",target:8
                },
                {
                    name:"Graphics",type:"value",target:9
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8},
                        {name:"Overall",type:"value",target:9}
                    ]
                }
            ]
        },
        status:[["tried","Easy 2CC"]],
        comment:`This is so fantasic and so hard! It's one of the STGs which are put the most effort into. Why bullet speed so fast :think:`,
        platform:"switch",
        lang:"chn",
        timestamp:"2020/12/5 uploaded to db",
        release:"2020-12-05",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/a/azure-reflections-switch/azure-reflections-switch-hero.jpg",
        calcType:"Normal"
    },
    {
        name:"Taiko no Tatsujin: Rhythmic Adventure Pack",
        rating:{
            name:"Score",type:"weight",weight:NORMAL,
            target:[
                {
                    name:"Music",type:"value",target:8.6
                },
                {
                    name:"Gameplay",type:"value",target:9
                },
                {
                    name:"Graphics",type:"value",target:7.6
                },
                {
                    name:"Storyline",type:"value",target:7.6
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9.9},
                        {name:"Overall",type:"value",target:9}
                    ]
                }
            ]
        },
        status:[["clear","Adventure 1 Clear"],["working","Adventure 2 Chapter 5"]],
        comment:`Actually I've played the 3ds version. It's nice to see a remake and translated version. Please cut down the length of startup animation`,
        platform:"switch",
        lang:"eng",
        timestamp:"2020/12/5 uploaded to db. 12/12 update",
        release:"2020-12-12",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/taiko-no-tatsujin-rhythmic-adventure-pack-switch/taiko-no-tatsujin-rhythmic-adventure-pack-switch-hero.jpg",
        calcType:"Normal"
    },
    {
        name:"Spice and Wolf VR",
        rating:{
            name:"Score",type:"weight",weight:STORY,
            target:[
                {
                    name:"Music",type:"value",target:6
                },
                {
                    name:"Gameplay",type:"value",target:0
                },
                {
                    name:"Graphics",type:"value",target:7.5
                },
                {
                    name:"Storyline",type:"value",target:6
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:7},
                        {name:"Overall",type:"value",target:8.5}
                    ]
                }
            ]
        },
        status:[["clear","Clear game?"]],
        comment:`Yep, you will be considered as a real fan if you spend 30$ on this 30min game. About the game itself, it's smoothly made.`,
        platform:"switch",
        lang:"chn",
        timestamp:"2020/12/19 uploaded to db",
        release:"2020-12-19",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/spice-and-wolf-vr-switch/spice-and-wolf-vr-switch-hero.jpg",
        calcType:"Story"
    },
    {
        name:"Gensou Skydrift",
        rating:{
            name:"Score",type:"weight",weight:TEST,
            target:[
                {
                    name:"Music",type:"value",target:7
                },
                {
                    name:"Gameplay",type:"value",target:6.6
                },
                {
                    name:"Graphics",type:"value",target:7
                },
                {
                    name:"Storyline",type:"value",target:0
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:6.2},
                        {name:"Overall",type:"value",target:7}
                    ]
                }
            ]
        },
        status:[["tried","Tried"]],
        comment:`The game relies on dashpads so much`,
        platform:"switch",
        lang:"chn",
        timestamp:"2021/1/3 uploaded to db",
        release:"2021-01-03",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/g/gensou-skydrift-switch/gensou-skydrift-switch-hero.jpg",
        calcType:"Test"
    },
    {
        name:"ヨイヤミダンサーズ",
        rating:{
            name:"Score",type:"weight",weight:NORMAL,
            target:[
                {
                    name:"Music",type:"value",target:9.5
                },
                {
                    name:"Gameplay",type:"value",target:8
                },
                {
                    name:"Graphics",type:"value",target:7.5
                },
                {
                    name:"Storyline",type:"value",target:6.6
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:6.4},
                        {name:"Overall",type:"value",target:8}
                    ]
                }
            ]
        },
        status:[["clear","Easy clear"]],
        comment:`No comment`,
        platform:"switch",
        lang:"jpn",
        timestamp:"2021/1/3 uploaded to db",
        release:"2021-01-03",
        img:"https://img-eshop.cdn.nintendo.net/i/ffb6e08207061beab6ff59fd502a0b96c1d3cccb798e29c05ab2dc2a976a0427.jpg?w=280&h=158",
        calcType:"Normal"
    },
    {
        name:"Touhou Luna Night",
        rating:{
            name:"Score",type:"weight",weight:TEST,
            target:[
                {
                    name:"Music",type:"value",target:7.4
                },
                {
                    name:"Gameplay",type:"value",target:8.5
                },
                {
                    name:"Graphics",type:"value",target:7.8
                },
                {
                    name:"Storyline",type:"value",target:0
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:7},
                        {name:"Overall",type:"value",target:7}
                    ]
                }
            ]
        },
        status:[["tried","Tried"]],
        comment:`No comment`,
        platform:"switch",
        lang:"chn",
        timestamp:"2021/1/3 uploaded to db",
        release:"2021-01-03",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/touhou-luna-nights-switch/touhou-luna-nights-switch-hero.jpg",
        calcType:"Test"
    },
    {
        name:"Ace Attorney 5",
        rating:{
            name:"Score",type:"weight",weight:STORY, //Story-based
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Stage",type:"value",target:7},
                        {name:"Court",type:"value",target:9}
                    ]
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Investigation",type:"value",target:9.3},
                        {name:"Court",type:"value",target:9.5}
                    ],
                    addon:[["Improvement Since AA4",0.1],["Voice reacting",0.1]]
                },
                {
                    name:"Graphics",type:"value",target:9
                },
                {
                    name:"Storyline",type:"value",target:7.4
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8},
                        {name:"Overall",type:"value",target:7.7}
                    ]
                }
            ]
        },
        status:[["clear","Clear Main Game"],["clear","Quiz Clear"]],
        comment:`Lucky me. I found Chinese version!!
        The system and graphics are much better than the previous game. Finally investigation is not some sh*t anymore.
        However the first trial is really weird and stupid.
        Second trial is boring.
        Third trial is OK.
        Fourth trial is OK.`,
        platform:"3ds",
        lang:"chn",
        timestamp:"2021/2/8 uploaded to db. 2021/3/6 finished ep3. 2021/3/13 all cleared. 2021/3/20 quiz clear",
        release:"2021-03-20",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/3ds/p/phoenix-wright-ace-attorney-dual-destinies-3ds/3DS_PhoneixWright-DualDestinies_box_eShop.png",
        calcType:"Story"
    },
    {
        name:"Spice and Wolf VR 2", 
        rating:{
            name:"Score",type:"weight",weight:[0.1,0.1,0.1,0.35,0.35], //Story-based
            target:[
                {
                    name:"Music",type:"value",target:7
                },
                {
                    name:"Gameplay",type:"value",target:0
                },
                {
                    name:"Graphics",type:"value",target:7.3
                },
                {
                    name:"Storyline",type:"value",target:7.9
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:7},
                        {name:"Overall",type:"value",target:7}
                    ]
                }
            ]
        },
        status:[["clear","Clear"]],
        comment:`No comment`,
        platform:"switch",
        lang:"chn",
        timestamp:"2021/2/8 uploaded to db",
        release:"2021-02-08",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/spice-and-wolf-vr2-switch/spice-and-wolf-vr2-switch-hero.jpg",
        calcType:"Story"
    },
    {
        name:"Super Mario 3D World + Bowser's Fury",
        rating:{
            name:"Score",
            type:"weight",
            weight:[0.15,0.3,0.15,0.15,0.25], //Normal
            target:[
                {
                    name:"Music",
                    type:"value",
                    target:8.5
                },
                {
                    name:"Gameplay",
                    type:"value",
                    target:9
                },
                {
                    name:"Graphics",
                    type:"value",
                    target: 9.6
                },
                {
                    name:"Storyline",
                    type:"value",
                    target: 6
                },
                {
                    name:"Impression",
                    type:"weight",
                    weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8.9},
                        {name:"Overall",type:"value",target:9.3}
                    ]
                }
            ]
        },
        status:[["perfect","Main Game 300 stars"],["star","Bowser's Fury 100%"]],
        comment:`No comment`,
        platform:"switch",
        lang:"chn",
        timestamp:"2021/2/12 uploaded to db",
        release:"2021-02-12",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/super-mario-3d-world-plus-bowsers-fury-switch-hero.jpg",
        calcType:"Normal"
    },
    {
        name:"Ookami to Koushinryou - Boku to Holo no Ichinen",
        rating:{
            name:"Score",
            type:"weight",
            weight:[0.1,0.1,0.1,0.35,0.35], //Story-based
            target:[
                {
                    name:"Music",
                    type:"avg",
                    target:[
                        {name:"OP",type:"value",target:8.4},
                        {name:"Game",type:"value",target:7.8},
                    ],
                    addon:[["OP",0.2],["Dubbing",0.2]]
                },
                {
                    name:"Gameplay",
                    type:"avg",
                    target:[
                        {name:"Merchant",type:"value",target:9.3},
                        {name:"Dating",type:"value",target:9},
                    ],
                },
                {
                    name:"Graphics",
                    type:"value",
                    target: 9.6
                },
                {
                    name:"Storyline",
                    type:"value",
                    target: 10
                },
                {
                    name:"Impression",
                    type:"weight",
                    weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9},
                        {name:"Overall",type:"value",target:10}
                    ]
                }
            ]
        },
        status:[["perfect","Ending 1 Relationship S"]],
        comment:`This is the game what I am waiting for! Huge thanks to the AGT team for translating this game! <br/>
        The story and the relationship between Me and Holo are just what I was expecting! <br/>
        And the music fits well. I also love the game system <br/>
        The graphics are perfect for a NDS game and I love NDS textures and fonts! <br/>
        `,
        platform:"3ds",
        lang:"eng",
        timestamp:"2021/2/22 uploaded to db",
        release:"2021-02-22",
        img:"https://www.romhacking.net/translations/ds/images/5967titlescreen.png",
        calcType:"Story"
    },
    {
        name:"Märchen Forest",
        rating:{
            name:"Score",
            type:"weight",
            weight:[0.15,0.3,0.15,0.15,0.25], //Normal
            target:[
                {
                    name:"Music",
                    type:"avg",
                    target:[
                        {name:"UI Theme",type:"value",target:7.9},
                        {name:"Stage Theme",type:"value",target:8.5},
                        {name:"Boss Theme",type:"value",target:8.6}
                    ],
                    addon:[["Full dubbing",0.3]]
                },
                {
                    name:"Gameplay",
                    type:"avg",
                    target:[
                        {name:"Battle System",type:"value",target:9.7},
                        {name:"Dungeon System",type:"value",target:9.6},
                        {name:"Other System",type:"value",target:9}
                    ],
                    addon:[["Reversed Control",-0.5],["Long loading",-0.2]]
                },
                {
                    name:"Graphics",
                    type:"avg",
                    target:[
                        {name:"3D",type:"value",target:6.6},
                        {name:"2D",type:"value",target:9.9},
                        {name:"UI",type:"value",target:8.5}
                    ]
                },
                {
                    name:"Storyline",
                    type:"avg",
                    target:[
                        {name:"Episode 1",type:"value",target:6.9},
                        {name:"Episode 2",type:"value",target:7},
                        {name:"Episode 3",type:"value",target:8}
                    ]
                },
                {
                    name:"Impression",
                    type:"weight",
                    weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9.9},
                        {name:"Overall",type:"value",target:9.3}
                    ]
                }
            ]
        },
        status:[["clear","Episode 2 Clear"],["perfect","Episode 3 Clear"],["star","Both Extra Clear"]],
        comment:`I've never played a Dungeon game before. <br/>
        This game has nice ideas and game system, nice otachi, nice music <br/>
        However it has stupid slowness(ps. improved in 1.0.4 update), stupid 3D graphics, stupid bugs(ps. mostly fixed in 1.0.4 update) and stupid lag(ps. improved in 1.0.4), and above all STUPID REVERSED CONTROL(B=confirm, A=cancel). <br/>
        <del>Yet another example of how not to port your game to console</del> <br/>
        A good example on how to keep updating and improving your game to make it easier to play! <br/>
        <b>After playthrough:</b> <br/>
        I really love the game system! It's simple and elegant. Easy to play, hard to master. <br/>
        The game really focuses on different dungeon types, puzzles and gameplay. I appreciate that! <br/>
        A longer review and thought is on the way, please stay tuned on my blog & HHS's blog! <br/>
        BTW this ranks #4 of switch play time!
        `,
        platform:"switch",
        lang:"chn",
        timestamp:"2021/3/27 uploaded to db. 2021/3/28 clear episode 2. 2021/4/5 all clear!!",
        release:"2021-04-05",
        img:"https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/en_US/games/switch/m/marchen-forest-switch/hero",
        calcType:"Normal"
    },
    {
        name:"東方虹龍洞　～ Unconnected Marketeers",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Title",type:"value",target:8},
                        {name:"Stage1",type:"value",target:9},
                        {name:"Boss1",type:"value",target:10},
                        {name:"Stage2",type:"value",target:9},
                        {name:"Boss2",type:"value",target:9},
                        {name:"Stage3",type:"value",target:9},
                        {name:"Boss3",type:"value",target:10},
                        {name:"Stage4",type:"value",target:9},
                        {name:"Boss4",type:"value",target:10},
                        {name:"Stage5",type:"value",target:9},
                        {name:"Boss5",type:"value",target:9},
                        {name:"Stage6",type:"value",target:10},
                        {name:"Boss6",type:"value",target:8},
                        {name:"StageEX",type:"value",target:9},
                        {name:"BossEX",type:"value",target:10},
                        {name:"Ending",type:"value",target:8},
                        {name:"Credit",type:"value",target:9}
                    ]
                },
                {
                    name:"Gameplay",type:"value",target:9.7
                },
                {
                    name:"Graphics",type:"value",target:8.8
                },
                {
                    name:"Storyline",type:"value",target:8.3
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9},
                        {name:"Overall",type:"value",target:9.5}
                    ]
                }
            ]
        },
        status:[["perfect","Easy No Miss No Bomb No Active"],["perfect","Normal Clear"],["perfect","Extra Clear"]],
        comment:"",
        platform:"pc",
        lang:"jpn",
        timestamp:"2021/5/21 cleared extra. 2021/5/4 uploaded to db",
        release:"2021-05-21",
        img:"https://upload.thwiki.cc/thumb/4/48/%E4%B8%9C%E6%96%B9%E8%99%B9%E9%BE%99%E6%B4%9E%E5%B0%81%E9%9D%A2.jpg/300px-%E4%B8%9C%E6%96%B9%E8%99%B9%E9%BE%99%E6%B4%9E%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"Monster Hunter Rise",
        rating:{
            name:"Score",
            type:"weight",
            weight:NORMAL,
            target:[
                {
                    name:"Music",
                    type:"avg",
                    target:[
                        {name:"Boss Theme",type:"value",target:9.6},
                        {name:"Village Theme",type:"value",target:9.5},
                    ],
                },
                {
                    name:"Gameplay",
                    type:"value",
                    target: 9.8
                },
                {
                    name:"Graphics",
                    type:"value",
                    target: 10
                },
                {
                    name:"Storyline",
                    type:"value",
                    target: 8
                },
                {
                    name:"Impression",
                    type:"weight",
                    weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:10},
                        {name:"Overall",type:"value",target:10}
                    ]
                }
            ]
        },
        status:[["perfect","1-4 Star Village Quest All Clear"],["clear","Hub quest 1 star"],["clear","Village 5 stars"],["working","Village 6 stars"]],
        comment:`Second installment for the series. My first MH game was MHXX and I sucked at it. <br/>
        Now I am surprised that I can play up to 4 star. <br/>
        The game system is a bit too complicated. Otherwise, it's a good game. <br/>
        BTW, loading time very short. Amazing!
        `,
        platform:"switch",
        lang:"eng",
        timestamp:"2021/5/4 uploaded to db",
        release:"2021-05-04",
        img:"https://assets.nintendo.com/image/upload/ncom/en_US/games/switch/m/monster-hunter-rise-switch/hero",
        calcType:"Normal"
    },
    {
        name:"東方光条閣 ～ Over Developed Eden",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Title",type:"value",target:9.5},
                        {name:"Stage1",type:"value",target:8},
                        {name:"Boss1",type:"value",target:7.5},
                        {name:"Stage2",type:"value",target:8},
                        {name:"Boss2",type:"value",target:8.5},
                        {name:"Stage3",type:"value",target:8},
                        {name:"Boss3",type:"value",target:7},
                        {name:"Stage4",type:"value",target:8},
                        {name:"Boss4",type:"value",target:8.5},
                        {name:"Stage5",type:"value",target:7.5},
                        {name:"Boss5",type:"value",target:8},
                        {name:"Stage6",type:"value",target:8},
                        {name:"Boss6",type:"value",target:8},
                        {name:"StageEX",type:"value",target:9},
                        {name:"BossEX",type:"value",target:8.5},
                        {name:"Ending",type:"value",target:8},
                        {name:"Credit",type:"value",target:9},
                    ]
                },
                {
                    name:"Gameplay",type:"value",target:8
                },
                {
                    name:"Graphics",type:"value",target:7
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:7},
                        {name:"Overall",type:"value",target:7}
                    ]
                }
            ]
        },
        status:[["clear","Easy Clear"]],
        comment:"From that furry game-maker",
        platform:"pc",
        lang:"jpn",
        timestamp:"2021/5/31 cleared easy",
        release:"2021-05-31",
        img:"https://upload.thwiki.cc/thumb/a/a0/%E6%9D%B1%E6%96%B9%E5%85%89%E6%9D%A1%E9%96%A3_%EF%BD%9E_Over_the_Developed_Eden.%E5%B0%81%E9%9D%A2.jpg/224px-%E6%9D%B1%E6%96%B9%E5%85%89%E6%9D%A1%E9%96%A3_%EF%BD%9E_Over_the_Developed_Eden.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方潮聖書 ～ Sapphire Panlogism",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"value",target:8.6
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:9.8},
                        {name:"System",type:"value",target:7.4},
                        {name:"Flow",type:"value",target:8.4},
                    ]
                },
                {
                    name:"Graphics",type:"value",target:9.9
                },
                {
                    name:"Storyline(Always 8)",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:7.5},
                        {name:"Overall",type:"value",target:9}
                    ]
                }
            ]
        },
        status:[["clear","Easy Clear"],["giveup","Normal Unclear"]],
        comment:`Stage 5 boss is weird, system is quite weird too. Graphics is perfect! Stage6 boss theme is so damn coooooooool!`,
        platform:"pc",
        lang:"eng",
        timestamp:"2021/6/9 cleared easy",
        release:"2021-06-09",
        img:"https://upload.thwiki.cc/thumb/a/a6/%E6%9D%B1%E6%96%B9%E6%BD%AE%E8%81%96%E6%9B%B8_%EF%BD%9E_Sapphire_Panlogism.%E5%B0%81%E9%9D%A2.jpg/224px-%E6%9D%B1%E6%96%B9%E6%BD%AE%E8%81%96%E6%9B%B8_%EF%BD%9E_Sapphire_Panlogism.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方妖々夢　～ Perfect Cherry Blossom",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Title",type:"value",target:7},
                        {name:"Stage1",type:"value",target:8},
                        {name:"Boss1",type:"value",target:9.5},
                        {name:"Stage2",type:"value",target:9},
                        {name:"Boss2",type:"value",target:10},
                        {name:"Stage3",type:"value",target:8},
                        {name:"Boss3",type:"value",target:10},
                        {name:"Stage4",type:"value",target:8.5},
                        {name:"Boss4",type:"value",target:10},
                        {name:"Stage5",type:"value",target:10},
                        {name:"Boss5",type:"value",target:9.5},
                        {name:"Stage6",type:"value",target:10},
                        {name:"Boss6",type:"value",target:10},
                        {name:"StageEX",type:"value",target:10},
                        {name:"BossEX",type:"value",target:10},
                        {name:"Ending",type:"value",target:7},
                        {name:"Credit",type:"value",target:9}
                    ]
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:9.5},
                        {name:"System",type:"value",target:7},
                        {name:"Flow",type:"value",target:10},
                    ]
                },
                {
                    name:"Graphics",type:"value",target:7.6
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9},
                        {name:"Overall",type:"value",target:8.5}
                    ]
                }
            ]
        },
        status:[["clear","Easy 1CC"],["perfect","Normal Clear"]],
        comment:"",
        platform:"pc",
        lang:"jpn",
        timestamp:"2021/6/14 cleared Normal",
        release:"2021-06-14",
        img:"https://upload.thwiki.cc/thumb/a/a7/%E4%B8%9C%E6%96%B9%E5%A6%96%E5%A6%96%E6%A2%A6%E5%B0%81%E9%9D%A2.jpg/300px-%E4%B8%9C%E6%96%B9%E5%A6%96%E5%A6%96%E6%A2%A6%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方魔神界 ～ Demon World of Magic",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"value",target:8.2
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:8.6},
                        {name:"System",type:"value",target:7.5},
                        {name:"Flow",type:"value",target:6},
                    ],
                    addon:[["Extremely Boring Midstage",-0.5]]
                },
                {
                    name:"Graphics",type:"value",target:7.5
                },
                {
                    name:"Storyline(Always 8)",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:7},
                        {name:"Overall",type:"value",target:6}
                    ]
                }
            ]
        },
        status:[["clear","Easy Clear"]],
        comment:`Make your stage section shorter and more interesting, thank you`,
        platform:"pc",
        lang:"chn",
        timestamp:"2021/6/17 cleared easy",
        release:"2021-06-17",
        img:"",
        calcType:"STG"
    },
    {
        name:"東方天空璋　～ Hidden Star in Four Seasons.",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Title",type:"value",target:9},
                        {name:"Stage1",type:"value",target:10},
                        {name:"Boss1",type:"value",target:9.5},
                        {name:"Stage2",type:"value",target:8.5},
                        {name:"Boss2",type:"value",target:9},
                        {name:"Stage3",type:"value",target:10},
                        {name:"Boss3",type:"value",target:10},
                        {name:"Stage4",type:"value",target:9.5},
                        {name:"Boss4",type:"value",target:10},
                        {name:"Stage5",type:"value",target:9.5},
                        {name:"Boss5",type:"value",target:9.5},
                        {name:"Stage6",type:"value",target:8.5},
                        {name:"Boss6",type:"value",target:9},
                        {name:"StageEX",type:"value",target:8.5},
                        {name:"BossEX",type:"value",target:9},
                        {name:"Ending",type:"value",target:8},
                        {name:"Credit",type:"value",target:8}
                    ]
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:8.2},
                        {name:"System",type:"value",target:9},
                        {name:"Flow",type:"value",target:10},
                    ],
                    addon:[["Can't See Bullet",-0.1]]
                },
                {
                    name:"Graphics",type:"value",target:9
                },
                {
                    name:"Storyline",type:"value",target:8.5
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9},
                        {name:"Overall",type:"value",target:8.7}
                    ]
                }
            ]
        },
        status:[["clear","Easy 1CC"],["perfect","Normal Clear"]],
        comment:"Nice game! I love planning but failing to carry out the plan! (Seriously, don't do this any more ;()",
        platform:"pc",
        lang:"jpn",
        timestamp:"2021/6/18 cleared Normal",
        release:"2021-06-18",
        img:"https://upload.thwiki.cc/thumb/5/52/%E4%B8%9C%E6%96%B9%E5%A4%A9%E7%A9%BA%E7%92%8B%E5%B0%81%E9%9D%A2.jpg/300px-%E4%B8%9C%E6%96%B9%E5%A4%A9%E7%A9%BA%E7%92%8B%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"Maiden & Spell",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"value",target:8.3
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:8.2},
                        {name:"System",type:"value",target:9},
                        {name:"Flow",type:"value",target:10},
                    ]
                },
                {
                    name:"Graphics",type:"value",target:9.8
                },
                {
                    name:"Storyline(Always 8)",type:"value",target:9
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9.3},
                        {name:"Overall",type:"value",target:9.6}
                    ]
                }
            ]
        },
        status:[["clear","Easy All Clear"],["clear","Normal Magician clear"]],
        comment:`I can see the passion and effort put into this game!
         Actually as I suck at Danmaku especially horizontal STG I won't comment much on the bullet part.
         I really like the game's background and character designs!
         My favourite (story) character is the magician as she deals huge homing output and I can focus on dodging.`,
        platform:"switch",
        lang:"chn",
        timestamp:"2021/6/20 cleared Easy. 2021/6/24 cleared Normal",
        release:"2021-06-24",
        img:"https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/en_US/games/switch/m/maiden-and-spell-switch/hero",
        calcType:"STG"
    },
    {
        name:"東方神霊廟　～ Ten Desires",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Title",type:"value",target:10},
                        {name:"Stage1",type:"value",target:10},
                        {name:"Boss1",type:"value",target:9.5},
                        {name:"Stage2",type:"value",target:8},
                        {name:"Boss2",type:"value",target:10},
                        {name:"Stage3",type:"value",target:8},
                        {name:"Boss3",type:"value",target:9.5},
                        {name:"Stage4",type:"value",target:10},
                        {name:"Boss4",type:"value",target:9.5},
                        {name:"Stage5",type:"value",target:10},
                        {name:"Boss5",type:"value",target:8},
                        {name:"Stage6",type:"value",target:10},
                        {name:"Boss6",type:"value",target:10},
                        {name:"StageEX",type:"value",target:9},
                        {name:"BossEX",type:"value",target:10},
                        {name:"Ending",type:"value",target:7},
                        {name:"Credit",type:"value",target:9.5}
                    ]
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:9.5},
                        {name:"System",type:"value",target:7},
                        {name:"Flow",type:"value",target:10},
                    ]
                },
                {
                    name:"Graphics",type:"value",target:9
                },
                {
                    name:"Storyline",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:8},
                        {name:"Overall",type:"value",target:8}
                    ]
                }
            ]
        },
        status:[["clear","Easy 1CC"],["perfect","Normal Clear"]],
        comment:"",
        platform:"pc",
        lang:"chn",
        timestamp:"2021/6/27 cleared Normal",
        release:"2021-06-27",
        img:"https://upload.thwiki.cc/thumb/7/74/%E4%B8%9C%E6%96%B9%E7%A5%9E%E7%81%B5%E5%BA%99%E5%B0%81%E9%9D%A2.jpg/300px-%E4%B8%9C%E6%96%B9%E7%A5%9E%E7%81%B5%E5%BA%99%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"名山丸 ～ Naming the Netas",rating:{
            name:"Score",type:"weight",weight:STG,
            target:[
                {
                    name:"Music",type:"value",target:7.1
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Danmaku",type:"value",target:7.6},
                        {name:"System",type:"value",target:7},
                        {name:"Flow",type:"value",target:6},
                    ]
                },
                {
                    name:"Graphics",type:"value",target:7
                },
                {
                    name:"Storyline(Always 8)",type:"value",target:8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:7},
                        {name:"Overall",type:"value",target:6}
                    ]
                }
            ]
        },
        status:[["clear","Easy Clear"]],
        comment:`God-damn long. Actually it's korean but I am lazy to add a new tag for it`,
        platform:"pc",
        lang:"jpn",
        timestamp:"2021/6/30 cleared easy",
        release:"2021-06-30",
        img:"",
        calcType:"STG"
    },
    {
        name:"わるい王様とりっぱな勇者",rating:{
            name:"Score",type:"weight",weight:NORMAL,
            target:[
                {
                    name:"Music",type:"avg",target:[
                        {name:"Stage Theme",type:"value",target:7.3},
                        {name:"Battle Theme",type:"value",target:7.5},
                        {name:"Boss Theme",type:"value",target:8.6},
                    ],addon:[["Voicing",0.1],["Vocal song",0.2],["Atmosphere",0.2]]
                },
                {
                    name:"Gameplay",type:"avg",target:[
                        {name:"Battle",type:"value",target:7},
                        {name:"System",type:"value",target:8.6},
                        {name:"Flow",type:"value",target:7.8},
                    ],
                    addon:[["Boring Walking",-0.3],["Uncreative Battle",-0.3],["User-friendly guide",0.2]]
                },
                {
                    name:"Graphics",type:"value",target:9.9
                },
                {
                    name:"Storyline",type:"value",target:9.8
                },
                {
                    name:"Impression",type:"weight",weight:[0.2,0.8],
                    target:[
                        {name:"Playtime",type:"value",target:9.5},
                        {name:"Overall",type:"value",target:8.5}
                    ]
                }
            ]
        },
        status:[["clear","Clear"]],
        comment:`Aha, a good story with a bad game. I can sense the efforts put into it but the RPG part is just too boring.
        Walking and high enemy encounter rate is no fun at all and the game is just repeating itself.
        The battle lacks creativity. It might be fun at first, but it won't last long as there are no new systems.
        The story is actually very attracting and that's the how I found this game.
        Better watch others instead of playing it.
        `,
        platform:"switch",
        lang:"jpn",
        timestamp:"2021/7/5 cleared",
        release:"2021-07-05",
        img:"https://store-jp.nintendo.com/dw/image/v2/BFGJ_PRD/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dwa8412aef/products/D70010000030134/heroBanner/97c92281eab97ac8949a185eca37df03c837d272f9c4eb5404d560dc0f2d7eb5.jpg?sw=1368&strip=false",
        calcType:"Normal"
    },
]