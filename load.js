function stringFormat() {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

var html="";

var statScore={}

var statStatus={}

function parseBadge(name){
    return stringFormat('<img src="{0}" width=32px height=32px>{1}',bbb[name].icon,bbb[name].text);
}

function formatStatus(st){
    return stringFormat('<font color={0}><i class="fa fa-{1}"></i>{2}</font>',sbb[st[0]].color,sbb[st[0]].icon,st[1]);
}

function fUp(arr,ele){
    if(arr==undefined){
        arr=[ele];
    }else{
        arr.push(ele);
    }

    return arr;
}

function Avg(arr){
    var sm=0;
    for(var i=0;i<arr.length;i++){
        sm+=arr[i];
    }
    return sm/arr.length;
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

function addBlock(game){
    var template=`
    <div class="card" id="{8}">
    <a name="{8}"></a>
    <div class="card-header">{0}</div>
    <div class="card-body">
		<table>
			<tr>
				<td>
					<img src="{1}" width=300px height=400px/>
				</td>
				<td>
					<b>Status:</b>{3}<br/>
                    <b>Platform:</b>{4}<br/>
                    <b>Language:</b>{5}<br/>
                    <b>Short Comment:</b>{6}<br/>
                    <b>Timestamp:</b>{7}<br/>
				</td>
        </table>
        
        
        <center><b>Game Rating:</b>{2}/10</b></center>
                    
        <div id="chart_{8}"></div>
    </div> 
    `

    

    var status_str='<table border="1">';

    for(var i=0;i<game.status.length;i++){
        status_str+="<tr><td>"+formatStatus(game.status[i])+"</td></tr>";

        statStatus[game.status[i][0]]=fUp(statStatus[game.status[i][0]],game);
    }
    status_str+='</table>';

    template=stringFormat(template,game.name,game.img,Avg(game.rating),status_str,parseBadge(game.platform),parseBadge(game.lang),game.comment,game.timestamp,getID(game.name));

    html+=template;

    statScore[Math.floor(Avg(game.rating))]=fUp(statScore[Math.floor(Avg(game.rating))],game);
}

function updateChart(){
    for(var i=0;i<games.length;i++){
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
    }
}
function loadScript(){

    
    for(var i=0;i<games.length;i++){
        addBlock(games[i]);
    }

    document.getElementById("titles").innerHTML=html;

    updateChart();

    d1();

    d2();
}

function d1(){
    var st='<table border="1">';
    
    for(var key in statStatus){
        st+=stringFormat('<tr><td>{0}</td><td><a href="#" onclick="loadData(statStatus[\'{2}\'])" data-toggle="modal" data-target="#myModal">{1}</a></td></tr>',formatStatus([key,""]),statStatus[key].length,key);
    }

    st+="</table>";

    document.getElementById("status").innerHTML=st;
}

function d2(){
    var st='<table border="1">';
    
    for(var key in statScore){
        st+=stringFormat('<tr><td>{0}</td><td><a href="#" onclick="loadData(statScore[{2}])" data-toggle="modal" data-target="#myModal">{1}</a></td></tr>',key+".x",statScore[key].length,key);
    }

    st+="</table>";

    document.getElementById("scoring").innerHTML=st;
}

function loadData(arr){

    var html="";
    for(var i in arr){
        html+=stringFormat('<a href="#{0}">{1}</a><br/>',getID(arr[i].name),arr[i].name);
    }

    document.getElementById("modal-data").innerHTML=html;
}