var entity_x = 200;
var entity_y = 150;
var ENTITY = document.getElementById("entity");
var moving = false;


function mouse_coords(event){
	if (!moving){
		console.log("Moving now.");
	var x = event.clientX;
	var y = event.clientY;

	let coords = `X : ${x}    Y : ${y}`;


	track(x,y)

	}

}


function track(x,y){
	//ENTITY.style.left = x;
	//ENTITY.style.top = y;
	//ENTITY.style.backgroundColor = random_color();
	$("#display_coords").html(`X : ${x} &nbsp;&nbsp;&nbsp;Y : ${y}`);
	path(x,y);
}

function path(x,y){
	moving = true;
	let move_x = setInterval(function(){
		if (entity_x != x){
			if (entity_x > x){
				entity_x -= 1;
			}
			else if (entity_x < x){
				entity_x += 1;

			}
		}
		if (entity_x == x){
			clearInterval(move_x);
			let move_y = setInterval(function(){
				if (entity_y != y){
					if (entity_y > y){
						entity_y -= 1;

					}
					else if (entity_y < y){
						entity_y += 1;
					}
				}
				else if (entity_y == y){
					clearInterval(move_y);
					moving = false;
					console.log("Static now.");
				}
				ENTITY.style.top = entity_y;
			},5);
		}
		ENTITY.style.left = entity_x;
	},5);

}





function main(){

}



$("document").ready(main())