import Phaser, { Game } from 'phaser'

import GameTest from './scenes/GamePlaying'
import GamePlaying from './scenes/GamePlaying'
import GameOver from './scenes/GameOver'
import GameStart from './scenes/GameStart'
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
	scene: [GameStart, GameOver, GamePlaying]
}

export default new Phaser.Game(config)
