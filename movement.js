var entity_x = 200;
var entity_y = 150;
var ENTITY = document.getElementById("entity");
var moving = false;
var short_move;
var move_x;
var move_y;





function mouse_coords(event){
	if (moving){


	}


	if (!moving){
		console.log("Moving now.");
	var x = event.clientX;
	var y = event.clientY;

	let coords = `X : ${x}    Y : ${y}`;


	track(x,y)

	}

}


function track(x,y){
	x -= 15;
	y -= 15;
	shortest_path(x,y);
}


// LONG PATH FUNCTION OBSOLETE NOW RIP ----!----
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
		$("#display_coords").html(`X : ${entity_x} &nbsp;&nbsp;&nbsp;Y : ${entity_y}`);
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
				$("#display_coords").html(`X : ${entity_x} &nbsp;&nbsp;&nbsp;Y : ${entity_y}`);
				ENTITY.style.top = entity_y;
			},5);
		}
		ENTITY.style.left = entity_x;
	},5);


}

// I would like to thank my friends, my family , my braincells ,
// my maths , my country , my planet for making this function
// possible
function shortest_path(x,y){
	console.log(`X : ${x}   Y : ${y}`);
	moving = true;
	x_diff = Math.abs(entity_x-x);
	y_diff = Math.abs(entity_y-y);

	
	if (x_diff > y_diff){
		let short_move = setInterval(function(){
			$("#display_coords").html(`X : ${entity_x} &nbsp;&nbsp;&nbsp;Y : ${entity_y}`);
			if (entity_y != y){
				if (entity_y > y){
					entity_y -= 1;
					if (entity_x > x){
						entity_x -= 1;
					}
					else if (entity_x < x){
						entity_x += 1;
					}
				}
				else if (entity_y < y){
					entity_y += 1;
					if (entity_x > x){
						entity_x -= 1;
					}
					else if (entity_x < x){
						entity_x += 1;
					}
				}


			}
			else if (entity_y == y){

				clearInterval(short_move);
				
				let move_x = setInterval(function(){
					$("#display_coords").html(`X : ${entity_x} &nbsp;&nbsp;&nbsp;Y : ${entity_y}`);
					if (entity_x != x){
						if (entity_x > x){
							entity_x -= 1;
						}
						else if (entity_x < x){
							entity_x += 1;
						}
					}
					else if (entity_x == x){
						clearInterval(move_x);
						moving = false;
	

					}
					ENTITY.style.left = entity_x;
					ENTITY.style.top = entity_y;

				},5);
			}
			ENTITY.style.left = entity_x;
			ENTITY.style.top = entity_y;


		},5);

	}
	else {

		let short_move = setInterval(function(){
			$("#display_coords").html(`X : ${entity_x} &nbsp;&nbsp;&nbsp;Y : ${entity_y}`);
			if (entity_x != x){
				if (entity_x > x){
					entity_x -= 1;
					if (entity_y > y){
						entity_y -= 1;
					}
					else if (entity_y < y){
						entity_y += 1;
					}
				}
				else if (entity_x < x){
					entity_x += 1;
					if (entity_y > y){
						entity_y -= 1;
					}
					else if (entity_y < y){
						entity_y += 1;
					}
				}


			}
			else if (entity_x == x){

				clearInterval(short_move);
				
				let move_y = setInterval(function(){
					$("#display_coords").html(`X : ${entity_x} &nbsp;&nbsp;&nbsp;Y : ${entity_y}`);

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


					}
					ENTITY.style.left = entity_x;
					ENTITY.style.top = entity_y;

				},5);
			}
			ENTITY.style.left = entity_x;
			ENTITY.style.top = entity_y;


		},5);


	}




}






function main(){

}



$("document").ready(main())