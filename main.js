var canvas=new fabric.Canvas('My_Canvas');

bg_img="";

function new_images()
{
    fabric.Image.fromURL('cake.jpg', function(Img) {
    bg_img=Img;

    bg_img.scaleToWidth(700);
    bg_img.scaleToHeight(510);
    bg_img.set({top:0,left:0});
    canvas.add(bg_img);
    })
}

function StartMusic()
{
    x.play();
}
 