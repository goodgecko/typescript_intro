
import * as PIXI from 'pixi.js';

export class GameManager{

    private app:PIXI.Application;

    private gecko:PIXI.Sprite;

    /**
     * code entry point, it is triggered by the window.onload event found at the bottom of this class
     */
    public constructor(){
        this.app = new PIXI.Application({ width: 400, height: 400, backgroundColor: 0xFFFFFF });
        document.body.appendChild(this.app.view);

        PIXI.Loader.shared.add('gecko', 'assets/gecko.png');
        PIXI.Loader.shared.once('complete', this.onLoadComplete.bind(this) );
        PIXI.Loader.shared.load();

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }


    /**
     * 
     * @param loader loader provided by the PIXI load event, useful for cleaning up any events attached to loader
     * @param resources resources provided by the PIXI load event, we use this to extract loaded items
     */
    private onLoadComplete( loader: PIXI.Loader, resources: PIXI.LoaderResource){
        //create a sprite from a 'gecko.png' image
        this.gecko = new PIXI.Sprite(resources["gecko"].texture);

        //position the gecko in the center of the screen
        this.gecko.x = this.app.renderer.width / 2;
        this.gecko.y = this.app.renderer.height / 2;

        //add an anchor so the rotate pivots the center of the image
        this.gecko.anchor.x = 0.5;
        this.gecko.anchor.y = 0.5;

        //add the gecko to the screen
        this.app.stage.addChild(this.gecko);

        //listen for frame updates
        this.app.ticker.add(() => {
            //each frame spin the gecko around a tiny bit
            this.gecko.rotation -= 0.01;
        });
    }


    // Resize function window
    private resize() {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);

        this.gecko.x = this.app.renderer.width / 2;
        this.gecko.y = this.app.renderer.height / 2;
    }
}


/**
 * on the window event create the GameManager class
 * some people like to add this into a seperate .js file
 */
window.onload = function () {
    new GameManager();
}