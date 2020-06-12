var template={
    name:"Game Title",
    rating:[1,2,3,4,5], //Music Gameplay Graphics Storyline Impression
    status:[["code","msg"],["code","msg"]],
    comment:"Leave your comment here",
    platform:"code of platform",
    lang:"code of lang",
    timestamp:"2020/4/18 some timestamp and description text",
    img:"https://"
}

var sbb={
    "clear":{
        icon:"check",
        color:"#00ff00"
    },
    "working":{
        icon:"hourglass-2",
        color:"#F4D03F"
    },
    "perfect":{
        icon:"heart",
        color:"#7D3C98"
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
    "chn":{
        icon:"https://www.countryflags.io/cn/flat/32.png",
        text:"Chinese"
    },
    "eng":{
        icon:"https://www.countryflags.io/gb/flat/32.png",
        text:"English"
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
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/a/animal-crossing-new-horizons-switch/Switch_ACNH_box.png"
    },
    {
        name:"Shining Resonance Refrain",
        rating:[7,7,7.5,7.6,7.4],
        status:[["working","Currently in Ch3"]],
        comment:"Game too hard. I suck at Action games.",
        platform:"switch",
        lang:"eng",
        timestamp:"2020/4/19 uploaded to db",
        img:"https://cdn01.nintendo-europe.com/media/images/05_packshots/games_13/nintendo_switch_8/PS_NSwitch_ShiningResonanceRefrain_PEGI_image500w.jpg"
    },
    {
        name:"Rune Factory 4 Special",
        rating:[7,8.5,7.5,9,10],
        status:[["perfect","Easy High%"],["perfect","Newylwed Mode All Clear"],["perfect","Another Episode All Clear"],["working","Sharance Maze Lv.500"]],
        comment:"I love it a lot",
        platform:"switch",
        lang:"eng",
        timestamp:"2020/4/19 uploaded to db",
        img:"https://cdn01.nintendo-europe.com/media/images/05_packshots/games_13/nintendo_switch_8/PS_NSwitch_RuneFactory4Special_PEGI_image500w.jpg"
    },
    {
        name:"Clubhouse Game: 51 Worldwide Classic",
        rating:[7,7,10,6,7], //Music Gameplay Graphics Storyline Impression
        status:[["working","Playing"]],
        comment:"Kind of cool",
        platform:"switch",
        lang:"chn",
        timestamp:"2020/6/6 uploaded to db",
        img:"https://www.nintendo.com/content/dam/noa/en_US/games/switch/c/clubhouse-games-51-worldwide-classics-switch/clubhouse-games-51-worldwide-classics-switch-hero.jpg"
    },
    {
        name:"東方魔宝城 ~ Book of Star Mythology",
        rating:[9.4,7.5,8.5,8,9], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy Hero 12Miss"],["perfect","Easy Legacy NoMiss"]],
        comment:"Stage 5 is messy",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/6 uploaded to db",
        img:"https://upload.thwiki.cc/thumb/7/76/%E6%9D%B1%E6%96%B9%E9%AD%94%E5%AE%9D%E5%9F%8E_%EF%BD%9E_Book_of_Star_Mythology.%E5%B0%81%E9%9D%A2.jpg/120px-%E6%9D%B1%E6%96%B9%E9%AD%94%E5%AE%9D%E5%9F%8E_%EF%BD%9E_Book_of_Star_Mythology.%E5%B0%81%E9%9D%A2.jpg"
    },
    {
        name:"東方真珠島 ～ Hollow Song of Birds.",
        rating:[9.7,7.7,9,8,9.4], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"],["clear","Normal 1CC"],["clear","Easy Extra 1Miss"]],
        comment:"Cool CG",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/6 uploaded to db",
        img:"https://upload.thwiki.cc/thumb/e/e1/%E6%9D%B1%E6%96%B9%E7%9C%9F%E7%8F%A0%E5%B3%B6_%EF%BD%9E_Hollow_Song_of_Birds.%E5%B0%81%E9%9D%A2.jpg/224px-%E6%9D%B1%E6%96%B9%E7%9C%9F%E7%8F%A0%E5%B3%B6_%EF%BD%9E_Hollow_Song_of_Birds.%E5%B0%81%E9%9D%A2.jpg"
    },
    {
        name:"トライフォーカサー ～ Outside the Traditional World.",
        rating:[8.5,6.8,7.5,6.3,5], //Music Gameplay Graphics Storyline Impression
        status:[["working","Working"]],
        comment:"I hate StB Style game",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/6 uploaded to db",
        img:"https://upload.thwiki.cc/thumb/7/74/%E3%83%88%E3%83%A9%E3%82%A4%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%B5%E3%83%BC_%EF%BD%9E_Outside_the_Traditional_World.%E5%B0%81%E9%9D%A2.png/224px-%E3%83%88%E3%83%A9%E3%82%A4%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%B5%E3%83%BC_%EF%BD%9E_Outside_the_Traditional_World.%E5%B0%81%E9%9D%A2.png"
    },
    {
        name:"東方催狐譚 ～ Servants of Harvest Wish",
        rating:[9.7,8,8.2,8,10], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"],["clear","Normal 1CC"]],
        comment:"First Touhou Fangame",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/6 uploaded to db",
        img:"https://upload.thwiki.cc/thumb/2/26/%E6%9D%B1%E6%96%B9%E5%82%AC%E7%8B%90%E8%AD%9A_%EF%BD%9E_Servants_of_Harvest_Wish.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E5%82%AC%E7%8B%90%E8%AD%9A_%EF%BD%9E_Servants_of_Harvest_Wish.%E5%B0%81%E9%9D%A2.png"
    },
    {
        name:"東方落流星 ～ The Shattered Sky.",
        rating:[8.8,7,4.6,7.2,7], //Music Gameplay Graphics Storyline Impression
        status:[["clear","Easy 1CC"]],
        comment:"Image is weird",
        platform:"pc",
        lang:"eng",
        timestamp:"2020/6/6 uploaded to db",
        img:"https://upload.thwiki.cc/thumb/d/dd/%E6%9D%B1%E6%96%B9%E8%90%BD%E6%B5%81%E6%98%9F_%EF%BD%9E_The_Shattered_Sky.%E5%B0%81%E9%9D%A2.jpg/224px-%E6%9D%B1%E6%96%B9%E8%90%BD%E6%B5%81%E6%98%9F_%EF%BD%9E_The_Shattered_Sky.%E5%B0%81%E9%9D%A2.jpg"
    },
    {
        name:"東方導命樹 ～ Mystical Power Plant.",
        rating:[6.8,6.1,7,7,5.9], //Music Gameplay Graphics Storyline Impression
        status:[["working","Easy 2CC"]],
        comment:"So hard",
        platform:"pc",
        lang:"chn",
        timestamp:"2020/6/12 uploaded to db",
        img:"https://upload.thwiki.cc/thumb/5/54/%E6%9D%B1%E6%96%B9%E5%B0%8E%E5%91%BD%E6%A8%B9_%EF%BD%9E_Mystical_Power_Plant.%E5%B0%81%E9%9D%A2.png/224px-%E6%9D%B1%E6%96%B9%E5%B0%8E%E5%91%BD%E6%A8%B9_%EF%BD%9E_Mystical_Power_Plant.%E5%B0%81%E9%9D%A2.png"
    },
]