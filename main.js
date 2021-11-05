
// Create canvas variable

var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_img(get_img){

	// to upload images

	fabric.Image.fromURL(get_img, function(Img){
		block_object=Img;
	   
	   block_object.scaleToWidth(block_image_width);
	   block_object.scaleToHeight(block_image_height);
	   block_object.set({
		   top:block_y,
		   left:block_x
	   });
	   canvas.add(block_object);
	});
}




window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_img('rr1.png');
		console.log("r");
		// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 200;

		new_img('gr.png');
		console.log("g");

		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;

		new_img('yr.png');

		console.log("y");

		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;

		new_img('pr.png');

		console.log("p");
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;

		new_img('br.png');
		console.log("b");
	// upload blue ranger
	}
	
}

