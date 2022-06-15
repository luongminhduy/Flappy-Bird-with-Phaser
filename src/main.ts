import Phaser, { Game } from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import GameTest from './scenes/GamePlaying'
import GamePlaying from './scenes/GamePlaying'
import GameOver from './scenes/GameOver'
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
	scene: [GameOver, GamePlaying]
}

export default new Phaser.Game(config)
