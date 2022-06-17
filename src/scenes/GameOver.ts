import Phaser from 'phaser'
import { Score } from '~/Objects/Score';
import GamePlaying from './GamePlaying';
export default class GameOver extends Phaser.Scene {
    cursors: any;
    score: Score;
	constructor()
	{
        super('GameOver')
        this.score = new Score(0, 0, 0, [], this);
	}
    init() {
        this.score = new Score(145, 300, 1, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], this);
    }
    create () {
        var temp = parseInt(localStorage.getItem('highscore')!);
        this.score.score = temp;
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(136, 256, 'background');
        this.score.create();
        this.add.image(100, 300, 'highScore').setScale(0.1);
        this.add.image(136, 206, 'gameOver');
        this.sound.add('gameOver').play();   
    }
    update(time: number, delta: number): void {
        if (this.cursors.up.isDown) {
            this.scene.start('GamePlaying');
        }
    }
}    