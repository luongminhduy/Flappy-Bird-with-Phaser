export class Score {
    x: number;
    y: number;
    score: number;
    img: string[];
    scene: Phaser.Scene;
    constructor(x: number, y: number, score: number, img: string[], scene: Phaser.Scene) {
        this.x = x;
        this.y = y;
        this.score = score;
        this.img = img;
        this.scene = scene;
    }
    create() {
        if (this.score <= 9) {
            this.scene.add.image(this.x, this.y, this.img[this.score]);
        }
        else if (this.score >= 10 && this.score <= 99) {
            var second = this.score % 10;
            var first = Math.floor(this.score / 10);
            this.scene.add.image(this.x - 14, this.y, this.img[first]);
            this.scene.add.image(this.x + 14, this.y, this.img[second]);
        }
    }
}