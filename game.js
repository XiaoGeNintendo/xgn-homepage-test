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
    }
}

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
        img:"https://upload.thwiki.cc/thumb/7/76/%E6%9D%B1%E6%96%B9%E9%AD%94%E5%AE%9D%E5%9F%8E_%EF%BD%9E_Book_of_Star_Mythology.%E5%B0%81%E9%9D%A2.jpg/120px-%E6%9D%B1%E6%96%B9%E9%AD%94%E5%AE%9D%E5%9F%8E_%EF%BD%9E_Book_of_Star_Mythology.%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"東方真珠島 ～ Hollow Song of Birds.",
        rating:[9.7,7.7,9,8,9.4], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"],["clear","Normal 1CC"],["clear","Easy Extra 1Miss"]],
        comment:"Cool CG",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/6 uploaded to db",
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
        img:"https://upload.thwiki.cc/thumb/7/74/%E3%83%88%E3%83%A9%E3%82%A4%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%B5%E3%83%BC_%EF%BD%9E_Outside_the_Traditional_World.%E5%B0%81%E9%9D%A2.png/224px-%E3%83%88%E3%83%A9%E3%82%A4%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%B5%E3%83%BC_%EF%BD%9E_Outside_the_Traditional_World.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"東方催狐譚 ～ Servants of Harvest Wish",
        rating:[9.7,8,8.2,8,10], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"],["clear","Normal 1CC"]],
        comment:"First Touhou Fangame",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/6 uploaded to db",
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
        img:"https://upload.thwiki.cc/thumb/d/dc/%E3%81%8A%E3%82%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%9F%E3%82%BA%E3%83%A0%EF%BD%9E%E9%BB%84%E6%B3%89%E9%82%84%E3%82%8A%E7%AF%87%EF%BD%9E_The_Marching_On_Fire%E5%B0%81%E9%9D%A2.png/252px-%E3%81%8A%E3%82%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%9F%E3%82%BA%E3%83%A0%EF%BD%9E%E9%BB%84%E6%B3%89%E9%82%84%E3%82%8A%E7%AF%87%EF%BD%9E_The_Marching_On_Fire%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"東方命萃酒 ～ Resurrection of Heaven's Liquor.",
        rating:[4,6,4,6,4], //Music Gameplay Graphics Storyline Impression
        status:[["giveup","Easy Unclear"]],
        comment:"Found this in CreepyNinja's Hall of Shame. Nice try..",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/6/25 uploaded to db",
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
        img:"https://upload.thwiki.cc/thumb/f/f4/%E6%9D%B1%E6%96%B9%E7%99%BD%E5%A1%B5%E8%A8%98_%EF%BD%9E_White_names_spoiled_past.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E7%99%BD%E5%A1%B5%E8%A8%98_%EF%BD%9E_White_names_spoiled_past.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"Pokemon Sword",
        rating:[8.8,8.8,9.8,8.9,9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Champion"],["clear","Isle of Armor Clear"]],
        comment:"Actually pretty nice. I love the music and that's enough.",
        platform:"switch",
        lang:"chn",
        timestamp:"2020/6/25 uploaded to db",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/pokemon-sword-switch/Switch_PokemonSword_box.png",
        calcType:"Normal"
    },
    {
        name:"Protoworld",
        rating:[7.5,8,7,7,7], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Pre Alpha 1.0 Clear"]],
        comment:"Concept is good.",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/26 uploaded to db",
        img:"https://img.itch.zone/aW1hZ2UvNjgwMzQyLzM3Mzk1MjUuZ2lm/347x500/EDZ3el.gif",
        calcType:"Normal"
    },
    {
        name:"東方輝針城　～ Double Dealing Character.",
        rating:[9.6,8.8,8.8,8.8,9.2], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Clear"],["working","Normal Unclear"]],
        comment:"I hate deathbombing",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/27 uploaded to db",
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
        img:"https://upload.thwiki.cc/thumb/9/96/%E6%9D%B1%E6%96%B9%E5%A4%A2%E6%97%A7%E5%B8%82_%EF%BD%9E_Glory_of_Deep_Skies.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E5%A4%A2%E6%97%A7%E5%B8%82_%EF%BD%9E_Glory_of_Deep_Skies.%E5%B0%81%E9%9D%A2.png",
        calcType:"STG"
    },
    {
        name:"連縁无現里 ～ Evanescent Existence",
        rating:[8,3.8,4.5,8,1], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Light Clear"],["clear","Easy Extra Light Clear"]],
        comment:"1.01 is completely a mess. 1.20 is better but still a mess",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/6/30 uploaded to db. 2020/7/3 updated",
        img:"https://upload.thwiki.cc/thumb/f/fd/%E8%BF%9E%E7%BC%98%E6%97%A0%E7%8E%B0%E9%87%8C%EF%BD%9EEvanescent_Existence%E5%B0%81%E9%9D%A2.jpg/252px-%E8%BF%9E%E7%BC%98%E6%97%A0%E7%8E%B0%E9%87%8C%EF%BD%9EEvanescent_Existence%E5%B0%81%E9%9D%A2.jpg",
        calcType:"STG"
    },
    {
        name:"Mario & Luigi: Paper Jam",
        rating:[7,9,7.8,7.5,8], //Music Gameplay Graphics Storyline Impression
        status:[["working","Playing"]],
        comment:"I am playing this on Citra as my 3DS won't load.",
        platform:"3ds",
        lang:"eng",
        timestamp:"2020/7/3 uploaded to db",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/3ds/m/mario-and-luigi-paper-jam-3ds/3DS_MarioLuigi-PaperJam_box.png",
        calcType:"Normal"
    },
    {
        name:"連縁蛇叢釼 ～ Earthen Miraculous Sword",
        rating:[7.5,3.8,6,8,4], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Light Clear"],["clear","Easy Extra Light Clear"]],
        comment:"The same as last Len'en project.",
        platform:"pc",
        lang:"jpn",
        timestamp:"2020/7/3 uploaded to db",
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
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/paper-mario-the-origami-king-switch/paper-mario-the-origami-king-switch-box.png",
        calcType:"Normal"
    },
    {
        name:"Torchlight II",
        rating:[6.8,8.8,8,7.8,7], //Music Gameplay Graphics Storyline Impression
        status:[["tried","Experienced"]],
        comment:`just trying it`,
        platform:"pc",
        lang:"chn",
        timestamp:"2020/7/22 uploaded to db",
        img:"https://pwimages-a.akamaihd.net/arcportal_static/images/torchlight2/boxart-available.png",
        calcType:"Normal"
    },
    {
        name:"東方時空書 ~ Touhou Rune Legend",
        rating:[6,7,6,6,6], //Music Gameplay Graphics Storyline Impression
        status:[["perfect","Lunatic Demo Clear"]],
        comment:`(...)`,
        platform:"pc",
        lang:"eng",
        timestamp:"2020/7/22 uploaded to db",
        img:"https://img.itch.zone/aW1nLzM4OTU3MDAucG5n/original/SBV0pF.png",
        calcType:"Normal"
    },
]