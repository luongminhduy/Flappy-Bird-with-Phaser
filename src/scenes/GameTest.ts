import Phaser from 'phaser'

export default class GameTest extends Phaser.Scene {
    player: any;
    cursors: any;
    pipeUnder: any;
	constructor()
	{
		super('flappy-bird')
	}

	preload()
    {
        this.load.path = "Bird/";
        this.load.image('birdUp', "redbird-upflap.png");
        this.load.image('birdMid', "redbird-midflap.png");
        this.load.image('birdDown', "redbird-downflap.png");
        this.load.path = "BackGround/";
        this.load.image('background', "bg.png");
        this.load.image('base', 'base.png');
        this.load.path = "Pipe/";
        this.load.image('pipeOn', 'pipeOn.png');
        this.load.image('pipeUnder', 'pipeUnder.png');
    }

    create () {   
        this.anims.create({
        key: 'flap',
        frames: [
            { key: 'birdUp' },
            { key: 'birdMid' },
            { key: 'birdDown', duration: 50 }
        ],
        frameRate: 8,
        repeat: -1
    });
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(140, 240, 'background').setScale(1);
        this.player = this.physics.add.sprite(40, 200, 'birdMid');
        this.pipeUnder = this.physics.add.image(80, 500, 'pipeUnder').setImmovable(true);
        var base = this.physics.add.image(120, 460, 'base');
        base.setImmovable(true);
        base.body.allowGravity = false;
        this.physics.add.collider(this.player, this.pipeUnder);
        this.pipeUnder.body.allowGravity = false;
        this.physics.add.collider(this.player, base);
        this.player.anims.play('flap');
    }
    update(time: number, delta: number): void {
        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-200);
        }
        if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(20);
        }
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-20);
        }
        if (this.cursors.down.isDown) {
            this.player.setVelocityY(20);
        }
    }
}
