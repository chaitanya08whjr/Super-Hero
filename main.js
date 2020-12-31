var canv = new fabric.Canvas('myCanvas');

var biw = 30;

var bih = 30;

player_x = 10;
player_y = 10;

var pobj = "";

function player_update() {
    fabric.Image.fromURL("groot.png", function (Img) {
        pobj = Img;
        pobj.scaleToWidth(150);
        pobj.scaleToHeight(150);
        pobj.set({
            top: player_y,
            left: player_x
        });
        canv.add(pobj);
    });
}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(biw);
        block_image_object.scaleToHeight(bih);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canv.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        biw = biw + 10;
        bih = bih + 10;
        document.getElementById("current_width").innerHTML = biw;
        document.getElementById("current_height").innerHTML = bih;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        biw = biw - 10;
        bih = bih - 10;
        document.getElementById("current_width").innerHTML = biw;
        document.getElementById("current_height").innerHTML = bih;
    }

    if (keyPressed == '73') {
        new_img("ironman.png");
        console.log("i")
    }

    if (keyPressed == '83') {
        new_img("spiderman.png");
        console.log("s")
    }

    if (keyPressed == '84') {
        new_img("thor.png");
        console.log("t")
    }

    if (keyPressed == '67') {
        new_img("captain.png");
        console.log("c")
    }

    if (keyPressed == '72') {
        new_img("hulk.png");
        console.log("h")
    }

    if (keyPressed == '80') {
        new_img("ironman_body.png");
        console.log("b")
    }
    
    if (keyPressed == '70') {
        new_img("spiderman_face.png");
        console.log("f")
    }
    
    if (keyPressed == '71') {
        new_img("groot.png");
        console.log("g")
    }
}





