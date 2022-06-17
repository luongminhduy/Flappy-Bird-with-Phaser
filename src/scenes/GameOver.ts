import Phaser from 'phaser'
import GamePlaying from './GamePlaying';
export default class GameOver extends Phaser.Scene {
    cursors: any;
	constructor()
	{
        super('GameOver')
	}
    init() {
        
    }
    create () {
        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(136, 256, 'background');
        this.add.image(136, 206, 'gameOver');
        this.sound.add('gameOver').play();   
    }
    update(time: number, delta: number): void {
        if (this.cursors.up.isDown) {
            this.scene.start('GamePlaying');
        }
    }
}    