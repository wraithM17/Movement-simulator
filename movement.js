var entity_x = 200;
var entity_y = 150;
var ENTITY = document.getElementById("entity");
var moving = false;

var enemy_x = 100;
var enemy_y = 100;
var ENEMY = document.getElementById("enemy");



var short_move;
var move_x;
var move_y;
var allowed_blobs_num = 10;
var blob_coords = [];
var points = 0;

var client_height = $(window).height();
var client_width = $(window).width();
var tick;
var blob_loading;

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




// random movement
function enemy_movement(rnum=false){

	if (rnum == "clear"){
		console.log("cls");
		if (enemy_move_up){
			clearInterval(enemy_move_up)
		}
		else if (enemy_move_down){
			clearInterval(enemy_move_down)
		}
		else if (enemy_move_left){
			clearInterval(enemy_move_left)
		}
		else if (enemy_move_right){
			clearInterval(enemy_move_left)
		}
		else if (enemy_move_up_right){
			clearInterval(enemy_move_up_right)
		}
		else if (enemy_move_up_left){
			clearInterval(enemy_move_up_left)
		}
		else if (enemy_move_down_right){
			clearInterval(enemy_move_down_right)
		}
		else if (enemy_move_down_left){
			clearInterval(enemy_move_down_left)
		}

	}



	if (rnum == false){
		var rnum = randint(1,8);
	}





	if (rnum == 1){

		var times = randint(50,500);
		var counter = 0;
		var enemy_move_up = setInterval(function(){
			counter += 2;
			if (counter > times){
				clearInterval(enemy_move_up);
				enemy_movement();
			}
			else if (enemy_y > 25){
				enemy_y -= 2;	
			}
			else {
				enemy_y = client_height - 35;

			}
			
			ENEMY.style.top = enemy_y;
		},3)

	}

	if (rnum == 2){

		var times = randint(50,500);
		var counter = 0;

		
		var enemy_move_down = setInterval(function(){
			counter += 2;
			if (counter > times){
				clearInterval(enemy_move_down);
				enemy_movement();
			}

			else if (enemy_y < (client_height-35)){
				enemy_y += 2;
			}
			else {
				enemy_y = 25;
			}


			ENEMY.style.top = enemy_y;
		},3)

	}

	if (rnum == 3){

		var times = randint(50,500);
		var counter = 0;
		var enemy_move_left = setInterval(function(){
			counter += 2;
			if (counter > times){
				clearInterval(enemy_move_left);
				enemy_movement();
			}
			else if (enemy_x > 25){
				enemy_x -= 2;	
			}

			else {
				enemy_x = client_width-35;
			}

			
			ENEMY.style.left = enemy_x;
		},3)



	}


	if (rnum == 4){

		var times = randint(50,500);
		var counter = 0;
		var enemy_move_right = setInterval(function(){
			counter += 2;
			if (counter > times){
				clearInterval(enemy_move_right);
				enemy_movement();
			}
			else if (enemy_x < (client_width-35)){
				enemy_x += 2;	
			}

			else {
				enemy_x = 25;
			}

			
			ENEMY.style.left = enemy_x;
		},3)



	}

	if (rnum == 5){
		var times = randint(50,500);
		var counter = 0;

		var enemy_move_up_right = setInterval(function(){
			counter += 2;
			if (counter > times){
				clearInterval(enemy_move_up_right);
				enemy_movement();
			}
			else if (enemy_y > 25 && enemy_x < (client_width-35)){

				enemy_y -= 2;
				enemy_x += 2;

			}
			else {
				clearInterval(enemy_move_up_right);
				enemy_movement();
			}
			ENEMY.style.left = enemy_x;
			ENEMY.style.top = enemy_y;

		},3)

	}


	if (rnum == 6){
		var times = randint(50,500);
		var counter = 0;

		var enemy_move_up_left = setInterval(function(){
			counter += 2;
			if (counter > times){
				clearInterval(enemy_move_up_left);
				enemy_movement();
			}
			else if (enemy_y > 25 && enemy_x > 25){

				enemy_y -= 2;
				enemy_x -= 2;

			}
			else {
				clearInterval(enemy_move_up_left);
				enemy_movement();
			}
			ENEMY.style.left = enemy_x;
			ENEMY.style.top = enemy_y;

		},3)

	}



	if (rnum == 7){
		var times = randint(50,500);
		var counter = 0;

		var enemy_move_down_right = setInterval(function(){
			counter += 2;
			if (counter > times){
				clearInterval(enemy_move_down_right);
				enemy_movement();
			}
			else if (enemy_y < (client_height-35) && enemy_x < (client_width-35)){

				enemy_y += 2;
				enemy_x += 2;

			}
			else {
				clearInterval(enemy_move_down_right);
				enemy_movement();
			}
			ENEMY.style.left = enemy_x;
			ENEMY.style.top = enemy_y;

		},3)

	}



	if (rnum == 8){
		var times = randint(50,500);
		var counter = 0;

		var enemy_move_down_left = setInterval(function(){
			counter += 2;
			if (counter > times){
				clearInterval(enemy_move_down_left);
				enemy_movement();
			}
			else if (enemy_y < (client_height-35) && enemy_x > 25){

				enemy_y += 2;
				enemy_x -= 2;

			}
			else {
				clearInterval(enemy_move_down_left);
				enemy_movement();
			}
			ENEMY.style.left = enemy_x;
			ENEMY.style.top = enemy_y;

		},3)

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

	let rand_x = randint(5,95);
	let rand_y = randint(5,95);
	let dim = randint(15,20);
	let blob_id = `${randint(0,10000)}${randint(0,10000)}`;


	let blob = `<span class="blob" 
	id="blob-${blob_id}"></span>`;
	
	

	$("#main").append(blob);
	$(`#blob-${blob_id}`).css("left",`${rand_x}vw`);
	$(`#blob-${blob_id}`).css("top",`${rand_y}vh`);
	$(`#blob-${blob_id}`).css("width",`${dim}px`);
	$(`#blob-${blob_id}`).css("height",`${dim}px`);

	let blob_obj = document.getElementById(`blob-${blob_id}`);
	let blob_dim = blob_obj.offsetHeight; // same is width
	let blob_x = blob_obj.offsetLeft-(blob_dim/2);
	let blob_y = blob_obj.offsetTop-(blob_dim/2);
	


	blob_coords.push(`${blob_x}-${blob_y}-${blob_id}`);

}




function game_tick(){

	tick = setInterval(function(){
		enemy_blob_check();

		for (var x=0;x!=blob_coords.length;x++){
			let blob_data = blob_coords[x].split("-");
			var blob_x_coord  = blob_data[0];
			var blob_y_coord  = blob_data[1];
			var select_blob_id = blob_data[2];


			var x_estimate = Math.abs(blob_x_coord - entity_x);
			var y_estimate = Math.abs(blob_y_coord - entity_y);
			if (x_estimate < 25 && y_estimate < 25){
				blob_collision(select_blob_id,x);
			
					
				}
			}
		}


	,200);


}






function blob_collision(blob_id,index){

	var current_blob = document.getElementById(`blob-${blob_id}`);
	current_blob.remove();
	blob_coords.splice(index, 1);
	entity_eat();
	point();


}


function point(){
	points += 1;
	$("#points").text(points);

}


function enemy_blob_check(){

	var pos_x_diff = Math.abs(enemy_x-entity_x);
	var pos_y_diff = Math.abs(enemy_y-entity_y);

	if (pos_x_diff < 25 && pos_y_diff < 25){

		
		clearInterval(tick);
		clearInterval(blob_loading);
		enemy_movement("clear");
		lose();


	}




}




function entity_eat(){

	//will work on it

}

function lose(){
	document.write("The enemy blob ate you.")

}



function main(){
	blob_loading = setInterval(load_blobs,500);
	game_tick();
	enemy_movement();
}



$("document").ready(main())