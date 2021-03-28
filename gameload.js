var data;
var tablehead;
var mode;

const MODE_SONG = 1;
const MODE_INDEX = 0;

function initTable() {
    for (var i = 0; i < data.length; i++) {
        if (data[i]["rating"] == undefined) {
            data[i]["rating"] = 0;
        }
    }
}

/*
Rating System
0=no one uses
1=You are using
2=some people in HHS are using
3=some people out of HHS are using
4=everyone should know this project
*/
var __tablehead = [
    ["Index", "id", true],
    ["Name", "name", true],
    ["Update Date", "release", true, 'min-width:95px;'],
    ["Tag", "tag", true],
    ["Rating", "rating", true]
]

function sort(by, dir) {
    function cmp(a, b) {
        if(by=="rating"){
            var va=Calc(a["rating"],a["calcType"]);
            var vb=Calc(b["rating"],b["calcType"]);

            if(va<vb){
                return -1;
            }else if(va>vb){
                return 1;
            }else{
                return 0;
            }
        }

        if (a[by] < b[by]) {
            return -1;
        }
        if (a[by] > b[by]) {
            return 1;
        }
        var aa = "" + JSON.stringify(a);
        var bb = "" + JSON.stringify(b);
        //console.log(aa);
        //console.log(bb);
        //console.log(aa<bb);
        if (aa < bb) {
            return -1;
        }
        if (aa > bb) {
            return 1;
        }
        return 0;
    }
    data.sort(function (a, b) {
        return cmp(a, b) * (dir ? 1 : -1);
    });
}

var curSort = "";
var curDir = true;

var importantOnly = true;

function toggleImportant() {
    importantOnly = !importantOnly;
    refreshTable();
}

function Msort(by, dir) {
    sort(by, dir);
    curSort = by;
    curDir = dir;
    refreshTable();
}

function toBadgeString(name) {
    var str = ""

    if (name.trim() == "") {
        return "";
    }

    if (badges[name] == undefined) {
        console.log("Error:" + name);
        return name;
    }

    str += '<span data-toggle="tooltip" style="margin-top:2px;" title="' + badges[name]["tooltip"] + '" class="badge ' + badges[name]["kind"] + '">' + badges[name]["display"] + '</span>';

    return str;
}

function toBadgeString2(name,strs) {
    var str = ""

    if (name.trim() == "") {
        return "";
    }

    str += '<span data-toggle="tooltip" style="margin-top:2px;" title="' + strs + '" class="badge badge-success">' + name + '</span>';

    // console.log(str)
    return str;
}

function FilterSearch(item, id, filter) {

    var tag = item[id];

    for (var j = 0; j < tag.length; j++) {
        if (tag[j] == '') {
            continue;
        }
        if (badges[tag[j]] == undefined || badges[tag[j]]["display"].toLowerCase().includes(filter)) {
            return true;
        }
    }

    return false;
}

function smallCheck(item,id,filter){
    return (item[id]+"").toLowerCase().includes(filter);
}

function FilterCheck(item, filter) {

    if(smallCheck(item,"name",filter)){
        return true;
    }

    if(smallCheck(item,"release",filter)){
        return true;
    }

    if(smallCheck(item,"platform",filter)){
        return true;
    }

    if(smallCheck(item,"lang",filter)){
        return true;
    }

    if(smallCheck(item,"calcType",filter)){
        return true;
    }

    if(smallCheck(item,"status",filter)){
        return true;
    }

    // console.log("coauthor ")
    return false;

}

function filterCheck(item) {

    var filter = document.getElementById("filter").value;
    var incList = filter.split(",")
    // console.log(tag+" by "+incList);
    for (var i = 0; i < incList.length; i++) {
        var trimmed = incList[i].toLowerCase().trim();
        if (!FilterCheck(item, trimmed)) {
            return false;
        }

    }
    return true;
}

String.prototype.replaceAll = function (FindText, RepText) {
    regExp = new RegExp(FindText, "g");
    return this.replace(regExp, RepText);
}

function renderLink(link) {
    var rules = [
        ["github.com", "Link to Github", "fa fa-github", false],
        ["blog.hellholestudios.top", "Link to HHS Blog", "fa fa-wordpress", true],
        ["drive.google.com", "Link to Google Drive", "fa fa-google", false],
        ["drive.xizcm.site", "Link to XIZCM's Drive", "fa fa-database", true],
        ["xiaogenintendo.github.io", "Link to XGN's Blog", "fa fa-envelope", false],
        ["itch.io", "Link to Itch.io", "fa fa-gamepad", false]
    ]

    var tmp = ""
    if (link == "") {
        tmp += "<i data-toggle=\"tooltip\" title=\"No Link Available\" class=\"fa fa-close\"></i>";
    } else {
        var found = false;
        for (var item = 0; item < rules.length; item++) {
            if (link.includes(rules[item][0])) {
                tmp += "<a data-toggle=\"tooltip\" target=\"_blank\"  title=\"" + rules[item][1] + "\" href=\"" + link + "\"><i class=\"" + rules[item][2] + "\"></i></a>";
                if (rules[item][3]) {
                    tmp += "<sup><i data-toggle=\"tooltip\" class=\"fa fa-exclamation\" title=\"WARNING: Link probably dead/unupdated\"></sup>"
                }
                tmp += "</td>";
                found = true;
                break;
            }
        }
        if (!found) {
            tmp += "<a data-toggle=\"tooltip\" target=\"_blank\"  title=\"Link to the Resources\" href=\"" + link + "\"><i class=\"fa fa-external-link\"></i></a>";
        }
    }

    return tmp;
}

function addAudio(i) {
    document.getElementById("audio-" + i).outerHTML = `<audio src="${data[i]["audio"]}" controls="controls">Audio Not Supported :(</audio> <br/>`
}

function Calc(arr,calcType){
    var sm=0;
    var ca=calcTypes[calcType].value;
    for(var i=0;i<arr.length;i++){
        sm+=arr[i]*ca[i];
    }
    return sm;
}

function refreshTable() {
    var node = document.getElementById("table");

    var tmp = "";
    var supc = 1;

    tmp += "<table class=\"table table-sm table-hover table-striped table-bordered\">";
    //start rendering th
    tmp += "<thead><tr>";
    for (var i = 0; i < tablehead.length; i++) {
        if (importantOnly && !tablehead[i][2]) {
            continue;
        }
        tmp += "<th ";
        if (tablehead[i][3]) {
            tmp += 'style="' + tablehead[i][3] + '" ';
        }
        if (tablehead[i][1] == curSort) {
            if (curDir) {
                tmp += "onclick=\"Msort('" + tablehead[i][1] + "',false)\">" + tablehead[i][0] + "<i class=\"fa fa-sort-up\"></i></th>";
            } else {
                tmp += "onclick=\"Msort('" + tablehead[i][1] + "',true)\">" + tablehead[i][0] + "<i class=\"fa fa-sort-down\"></i></th>";
            }
        } else {
            tmp += "onclick=\"Msort('" + tablehead[i][1] + "',true)\">" + tablehead[i][0] + "<i class=\"fa fa-sort\"></i></th>";
        }

    }
    tmp += "</tr></thead><tbody>";

    var itemCount = 0;

    var nowTime = new Date().getTime()

    //start rendering data
    for (var i = 0; i < data.length; i++) {

        if (!filterCheck(data[i])) {
            continue;
        }

        itemCount++;
        
        tmp += '<tr id="'+getID(data[i]["name"])+'"data-toggle="collapse" data-target="#supplement' + i + '">';
        
        for (var j = 0; j < tablehead.length; j++) {
            if (tablehead[j][1] == "id"){
                tmp += "<td>" + (itemCount);
                tmp += "</td>";
            } else if (tablehead[j][1] == "name") {
                tmp += "<td>" + data[i][tablehead[j][1]];
                tmp += "</td>";
            } else if (tablehead[j][1] == "rating") {
                var dat = Calc(data[i][tablehead[j][1]],data[i]["calcType"]);
                tmp += "<td class=\"text-center\">" + dat + "</td>"
            } else if (tablehead[j][1].match("release|length|source") != null) {
                //release date just normal
                tmp += "<td>" + data[i]["release"] + "</td>";
            } else {
                //it's time for badge displaying!!

                tmp += "<td>"
                tmp += toBadgeString(data[i]["platform"]) + " "
                tmp += toBadgeString(data[i]["lang"]) + " "
                tmp += toBadgeString(data[i]["calcType"]) + " "

                for(var sd in data[i]["status"]){
                    var sts=data[i]["status"][sd]
                    var str=`<i class="fa fa-${sbb[sts[0]]["icon"]}">${sts[1]}</i>`;

                    tmp += toBadgeString2(str,sts[1]+"("+sts[0]+")")+" ";
                }
                tmp += "</td>"
            }

        }
        tmp += "</tr>";

        tmp+=`<tr style="background-color:#ffc;"><td colspan=6 style="padding:0px;">
        <div id="supplement${i}" class="collapse"><div style="padding:.3rem;">
        <img src="${data[i]["img"]}" style="max-width: 400px" /> <br/>
        <a href="#chart_${getID(data[i]["name"])}"><b>Detail Scoring</b></a> <br/>
        <b>Timestamp</b><br/>
        ${data[i]["timestamp"]}<br/>
        <b>Comment</b><br/>
        ${data[i]["comment"]}<br/>

        </div></div></td></tr><tr></tr>
        `
        
    }
    tmp += "</tbody></table>";

    

    node.innerHTML = tmp;
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })

    $('#resC').text(itemCount)
    $("#resT").text(new Date().getTime() - nowTime + "ms")

    if(first){
        var tt="";
        for(var i=0;i<data.length;i++){
            tt += `<div id="chart_${getID(data[i]["name"])}"></div> <br/> <a href="#${getID(data[i]["name"])}"><b>Back to the game</b></a><br/>`
        }

        $('#graphZone').html(tt)
    }
    updateChart()
}


function getID(name){
    while(true){
        var x=name.replace(/[^A-Za-z0-9_]/,"_");
        if(x==name){
            return x;
        }
        name=x;
    }
}

var first=true
var cache={}

function updateChart(tmp){
    if(first==false){
        return;
    }


    first=false
    

    for(var i=0;i<games.length;i++){
        if (!filterCheck(games[i])) {
            continue;
        }

        var game=games[i];
        var id=getID(game.name);

        var chart = Highcharts.chart('chart_'+id, {
            chart: {
                    polar: true,
                    type: 'line'
            },
            title: {
                    text: 'Score of '+game.name,
                    x: -80
            },
            xAxis: {
                    categories: ['Music','Gameplay','Graphics','Storyline','Impression'],
                    tickmarkPlacement: 'on',
                    lineWidth: 0
            },
            yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0,
                    max: 10
            },
            legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    y: 70,
                    layout: 'vertical'
            },
            series: [{
                    name: 'Score',
                    data: game.rating,
                    pointPlacement: 'on'
            }],
            credits: false
        });

        cache[id]=$('#chart_'+id)[0].innerHTML
    }
}