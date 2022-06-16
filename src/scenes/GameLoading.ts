import Phaser from 'phaser'
import GamePlaying from './GamePlaying';
export default class GameLoading extends Phaser.Scene {
    cursors: any;
	constructor()
	{
        super('GameLoading')
	}

	preload()
    {
        var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(240, 270, 320, 50);
            
            var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                }
            });
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value: number) {
                percentText.setText(parseInt((value * 100).toString()) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(250, 280, 300 * value, 30);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });
            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });
            
            this.load.path = "Bird/";
            this.load.image('birdUp', "redbird-upflap.png");
            this.load.image('birdMid', "redbird-midflap.png");
            this.load.image('birdDown', "redbird-downflap.png");
            this.load.path = "BackGround/";
            this.load.image('background', "bg.png");
            this.load.image('gameOver', "gameover.png");
            this.load.image('message', 'message.png');
            this.load.image('base', 'base.png');
            this.load.path = "Pipe/";
            this.load.image('pipeOn', 'pipeOn.png');
            this.load.image('pipeUnder', 'pipeUnder.png');
            this.load.path = "Number/";
            this.load.image('0', '0.png');
            this.load.image('1', '1.png');
            this.load.image('2', '2.png');
            this.load.image('3', '3.png');
            this.load.image('4', '4.png');
            this.load.image('5', '5.png');
            this.load.image('6', '6.png');
            this.load.image('7', '7.png');
            this.load.image('8', '8.png');
            this.load.image('9', '9.png');
            this.load.path = "Advance/";
            this.load.image('star', 'star.png');
            this.load.image('fire', 'fire.png');
            this.load.path = "Enemy/";
            this.load.image('enemy1', 'up.png');
            this.load.image('enemy2', 'mid.png');
            this.load.image('enemy3', 'down.png');
            this.load.path = "Sounds/";
            this.load.audio('fly', 'fly.mp3');
            this.load.audio('score', 'score.mp3');
            this.load.audio('fire', 'fire.wav');
            this.load.audio('star', 'star.wav');
            this.load.audio('enemy', 'enemy.wav');
            this.load.audio('gameOver', 'gameOver.wav');
            this.load.audio('gameStart', 'gameStart.wav');
            this.load.audio('hit', 'hit.wav');
    }
    init() {
        
    }
    create () {
            this.scene.start('GameStart');
    }
    update(time: number, delta: number): void {
        
    }
}    