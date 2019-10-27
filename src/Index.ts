
import * as PIXI from 'pixi.js';

export class GameManager{

    private app:PIXI.Application;


    /**
     * code entry point, it is triggered by the window.onload event found at the bottom of this class
     */
    public constructor(){
        this.createPIXI();
        this.loadAssets();
    }


    /**
     * simply creates the PIXI
     */
    private createPIXI():void{
        this.app = new PIXI.Application({ width: 400, height: 400, backgroundColor: 0xFFFFFF });

        document.body.appendChild(this.app.view);
    }


    /**
     * loading the gecko.png
     */
    private loadAssets():void{
        this.app.loader.add('gecko', 'assets/gecko.png');
        this.app.loader.on("complete", this.onLoadComplete.bind(this) );
        this.app.loader.load();
    }


    /**
     * 
     * @param loader loader provided by the PIXI load event, useful for cleaning up any events attached to loader
     * @param resources resources provided by the PIXI load event, we use this to extract loaded items
     */
    private onLoadComplete( loader:PIXI.loaders.Loader, resources:PIXI.loaders.ResourceDictionary ):void{
        //create a sprite from a 'gecko.png' image
        let gecko:PIXI.Sprite = new PIXI.Sprite(resources.gecko.texture);

        //position the gecko in the centre of the screen
        gecko.x = this.app.renderer.width / 2;
        gecko.y = this.app.renderer.height / 2;

        //add an anchor so the rotate pivots the centre of the image
        gecko.anchor.x = 0.5;
        gecko.anchor.y = 0.5;

        //add the gecko to the screen
        this.app.stage.addChild(gecko);

        //listen for frame updates
        this.app.ticker.add(() => {
            //each frame spin the gecko around a tiny bit
            gecko.rotation -= 0.01;
        });
    }
}


/**
 * on the window event create the GameManager class
 * some people like to add this into a seperate .js file
 */
window.onload = function () {
    new GameManager();
}