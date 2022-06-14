import Phaser, { Game } from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import GameTest from './scenes/GameTest'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 280,
	height: 512,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 500 }
		}
	},
	scene: [GameTest]
}

export default new Phaser.Game(config)
