import Phaser from 'phaser'
import GamePlaying from './GamePlaying';
export default class GameOver extends Phaser.Scene {
    cursors: any;
	constructor()
	{
        super('GameOver')
	}

	preload()
    {
        this.load.path = "BackGround/";
        this.load.image('background', "bg.png");
        this.load.image('gameOver', "gameover.png");
    }
    init() {
        
    }
    create () {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(136, 256, 'background');
        this.add.image(136, 206, 'gameOver');   
    }
    update(time: number, delta: number): void {
        if (this.cursors.up.isDown) {
            this.scene.start('GamePlaying');
        }
    }
}    