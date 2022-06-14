import Phaser, { Game } from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import GameTest from './scenes/GamePlaying'
import GamePlaying from './scenes/GamePlaying'

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
	scene: [GamePlaying]
}

export default new Phaser.Game(config)
