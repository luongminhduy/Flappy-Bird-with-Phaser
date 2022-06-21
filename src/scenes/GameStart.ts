import Phaser from 'phaser'
import { Bird } from '~/Objects/Bird';
import GamePlaying from './GamePlaying';
export default class GameStart extends Phaser.Scene {
    bird !: Bird;
    cursors !: Phaser.Types.Input.Keyboard.CursorKeys;
    img1 !: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
    img2 !: Phaser.Types.Physics.Arcade.ImageWithDynamicBody
	constructor()
	{
        super('GameStart');
	}
    init() {
        this.bird = new Bird(this, 80, 305);
    }
    create () {
        localStorage.setItem('highScore', '0');
        this.sound.add('gameStart').play();
        this.cursors = this.input.keyboard.createCursorKeys();
        this.img1 = this.physics.add.image(136, 256, 'background');
        this.img1.body.allowGravity = false;
        this.img1.setVelocityX(-20);
        this.img2 = this.physics.add.image(336, 256, 'background');
        this.img2.body.allowGravity = false;
        this.img2.setVelocityX(-20);
        this.add.image(136, 256, 'message');
        this.bird.create();
        this.bird.bodyBird.body.allowGravity = false;
    }
    update(time: number, delta: number): void {
        if (this.cursors.up.isDown) {
            this.scene.start('GamePlaying');
        }
        if (this.img1.x < - 60) this.img1.x = 336;
        if (this.img2.x < - 60) this.img2.x = 336;
    }
}    