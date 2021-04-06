/*
Calculate Game Rating in a More Specific Way
*/

var ratingCache={

}

/**
{
	name:"asjkld",
	type:"avg/weight/value"
	target:[
		...
	],
	weight:[1,2,3],
	addon:[["asd",1],...]
}
*/
function calcRating(obj){

	if(ratingCache[JSON.stringify(obj)]!=undefined){
		return ratingCache[JSON.stringify(obj)]
	}

	if(Array.isArray(obj)){
		var sum=0
		for(const i of obj){
			sum+=i
		}

		return ratingCache[JSON.stringify(obj)]=sum/obj.length
	}else if(typeof obj == "number"){
			return obj
	}else{
		if(obj.type=="value"){
			return obj.target;
		}else if(obj.type=="avg"){
			var sum=0
			for(const i of obj.target){
				sum+=calcRating(i)
			}

			sum/=obj.target.length

			if(obj.addon != undefined){
				for(const i of obj.addon){
					sum+=i[1]
				}
			}
			return ratingCache[JSON.stringify(obj)]=sum
		}else if(obj.type=="weight"){
			var sum=0
			for(var i in obj.target){
				sum+=calcRating(obj.target[i])*obj.weight[i]
			}

			if(obj.addon != undefined){
				for(const i of obj.addon){
					sum+=i[1]
				}
			}

			return ratingCache[JSON.stringify(obj)]=sum
		}else{
			console.error("No such type:"+obj.type)
			return 0
		}

	}
}

//https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function getBGColor(num){
	if(num>=9){
		return "bg-success"
	}else if(num>=8){
		return "bg-primary"
	}else if(num>=7){
		return "bg-warning"
	}else if(num>=6){
		return "bg-danger"
	}else{
		return "bg-secondary"
	}
}

function displayRating(obj){

	console.log(obj)

	if(Array.isArray(obj)){
		return `<div class="card text-white">
			      <div class="card-header ${getBGColor(calcRating(obj))}">
			          Score: ${obj}
			      </div>
			    </div>`
	}else if(typeof obj == "number"){
		return `<div class="card text-white">
			      <div class="card-header ${getBGColor(calcRating(obj))}">
			          Score: ${obj}
			      </div>
			    </div>`
	}else{
		if(obj.type=="value"){
			return `<div class="card text-white">
			      <div class="card-header ${getBGColor(calcRating(obj))}">
			          <b>${obj.name}</b> Score:${calcRating(obj)}
			      </div>
			    </div> <br/>`
			return obj.target;
		}else if(obj.type=="avg"){

			var id=uuidv4()

			var sum=""
			for(const i of obj.target){
				sum+=displayRating(i)
			}

			var p2="";
			if(obj.addon!=undefined){
				p2=`
				<div class="card-footer bg-secondary">
					<b>Extra Score Delta</b> <br/>
					${obj.addon.join("<br/>")}
				</div>
			   `
			}
			return tmp=`
				<div class="card text-white">
			      <div class="card-header ${getBGColor(calcRating(obj))}">
			        <a class="card-link text-white" data-toggle="collapse" href="#collapse_${id}">
			          <b>${obj.name}</b> Score:${calcRating(obj)} Type: <i>Average</i> 
			        </a>
			      </div>
			      <div id="collapse_${id}" class="collapse">
			        <div class="card-body">
			        	${sum}
			        </div>
			      </div>
				  ${p2}
			    </div>
			    <br/>
		    	`

		}else if(obj.type=="weight"){
			var id=uuidv4()

			var sum=""
			for(const i of obj.target){
				sum+=displayRating(i)
			}

			var p2="";
			if(obj.addon!=undefined){
				p2=`
				<div class="card-footer bg-secondary">
					<b>Extra Score Delta</b> <br/>
					${obj.addon.join("<br/>")}
				</div>
			   `
			}

			return tmp=`
				<div class="card text-white">
			      <div class="card-header ${getBGColor(calcRating(obj))}">
			        <a class="card-link text-white" data-toggle="collapse" href="#collapse_${id}">
			          <b>${obj.name}</b> Score:${calcRating(obj)} Type: <i>Weighted</i> Weight: ${obj.weight}
			        </a>
			      </div>
			      <div id="collapse_${id}" class="collapse">
			        <div class="card-body">
			        	${sum}
			        </div>
			      </div>
				  ${p2}
			    </div>
			    <br/>
		    	`
		}else{
			console.error("No such type:"+obj.type)
			return "??"
		}

	}
}