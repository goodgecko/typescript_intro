
import * as PIXI from 'pixi.js';

window.onload = function () {
    //let canvas = document.getElementById('demoCanvas');
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    let app:PIXI.Application = new PIXI.Application({
        width: 400, height: 400, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1
    })
    // The application will create a canvas element for you that you
    // can then insert into the DOM
    //canvas.appendChild(app.view);
    const displayDiv:Element = document.querySelector('#display')
    displayDiv.appendChild(app.view);

    //const stage = new PIXI.Container();

    // load the texture we need
    app.loader.add('gecko', 'assets/gecko.png').load((loader, resources) => {
        // This creates a texture from a 'gecko.png' image
        const gecko:PIXI.Sprite = new PIXI.Sprite(resources.gecko.texture);

        // Setup the position of the gecko
        gecko.x = app.renderer.width / 2;
        gecko.y = app.renderer.height / 2;

        // Rotate around the center
        gecko.anchor.x = 0.5;
        gecko.anchor.y = 0.5;

        // Add the gecko to the scene we are building
        app.stage.addChild(gecko);

        // Listen for frame updates
        app.ticker.add(() => {
            // each frame we spin the gecko around a bit
            gecko.rotation += 0.01;
        });
    });
}