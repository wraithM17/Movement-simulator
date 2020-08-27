var entity_x = 200;
var entity_y = 150;
var ENTITY = document.getElementById("entity");
var moving = false;
var short_move;
var move_x;
var move_y;
var allowed_blobs_num = 10;





function mouse_coords(event){
	if (moving){
		clearInterval(short_move);
		if (move_x){
			clearInterval(move_x);
		}
		if (move_y){
			clearInterval(move_y);
		}

	}


	
	var x = event.clientX;
	var y = event.clientY;

	let coords = `X : ${x}    Y : ${y}`;


	track(x,y)


}


function track(x,y){
	x -= 15;
	y -= 15;
	shortest_path(x,y);

}


// LONG PATH FUNCTION OBSOLETE NOW RIP ----!----
function path(x,y){
	moving = true;

	move_x = setInterval(function(){
		if (entity_x != x){
			if (entity_x > x){
				entity_x -= 1;
			}
			else if (entity_x < x){
				entity_x += 1;

			}
		}
		$("#display_coords").html(`X : ${entity_x+15} &nbsp;&nbsp;&nbsp;Y : ${entity_y+15}`);
		if (entity_x == x){
			clearInterval(move_x);
			move_y = setInterval(function(){
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
				$("#display_coords").html(`X : ${entity_x+15} &nbsp;&nbsp;&nbsp;Y : ${entity_y+15}`);
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
	moving = true;
	x_diff = Math.abs(entity_x-x);
	y_diff = Math.abs(entity_y-y);

	
	if (x_diff > y_diff){
		short_move = setInterval(function(){
			$("#display_coords").html(`X : ${entity_x+15} &nbsp;&nbsp;&nbsp;Y : ${entity_y+15}`);
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
				
				move_x = setInterval(function(){
					$("#display_coords").html(`X : ${entity_x+15} &nbsp;&nbsp;&nbsp;Y : ${entity_y+15}`);
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

		short_move = setInterval(function(){
			$("#display_coords").html(`X : ${entity_x+15} &nbsp;&nbsp;&nbsp;Y : ${entity_y+15}`);
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
				
				move_y = setInterval(function(){
					$("#display_coords").html(`X : ${entity_x+15} &nbsp;&nbsp;&nbsp;Y : ${entity_y+15}`);

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


function load_blobs(){

	var total_blobs = $(".blob").length;
	for (i=0;total_blobs!=allowed_blobs_num;i++){
		generate_blob();
		total_blobs = $(".blob").length;
	}


}








function generate_blob(){

	let rand_x = randint(0,90);
	let rand_y = randint(0,90);
	let dim = randint(10,20);
	let blob_id = `${randint(0,10000)}${randint(0,10000)}`;


	let blob = `<span onclick = "detect_blob(this)" class="blob" 
	id="blob-${blob_id}"></span>`;
	

	$("#main").append(blob);
	$(`#blob-${blob_id}`).css("left",`${rand_x}vw`);
	$(`#blob-${blob_id}`).css("top",`${rand_y}vh`);
	$(`#blob-${blob_id}`).css("width",`${dim}px`);
	$(`#blob-${blob_id}`).css("height",`${dim}px`);

	

}



function detect_blob(blob){

	console.log("Detecting...");
	console.log(blob.style.left);
	

}




function main(){
	setInterval(load_blobs,2000);
}



$("document").ready(main())