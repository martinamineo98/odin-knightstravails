
class Square {
	constructor (data) {
		this.x = data[0]
		this.y = data[1]
		this.moves = []
	}	
	
	connect (square) {
		if (!this.moves.includes(square)) this.moves.push(square)
		if (!square.moves.includes(this)) square.moves.push(this)
	}
}

class GameBoard {
	constructor () {
		this.squares = []
		this.populate()
		this.connect()
	}
	
	findSquare(x, y) {
		for (let i = 0; i < this.squares.length; i++) {
			const square = this.squares[i]
			
			if (square.x === x && square.y === y) return square
		}
	}
	
	populate () {
		for (let i = 0; i < 8; i++) {
			for (let j = 0; j < 8; j++) {
				this.squares.push(new Square([i, j]))
			}
		}
	}
	
	connect () {
		for (let square of this.squares) {
			const x = square.x
			const y = square.y
			
			const moves = [
				[x + 2, y + 1],
				[x + 2, y - 1],
				[x + 1, y + 2],
				[x + 1, y - 2],
				[x - 2, y - 1],
				[x - 2, y + 1],
				[x - 1, y + 2],
				[x - 1, y - 2]
			]
			
			for (let move of moves) {
				const endSquare = this.findSquare(move[0], move[1])
				if (endSquare) square.moves.push(endSquare)
			}
			
		}
	}
	
	bfs(start, end, visited = new Set()) {
		
		const queue = [start]
		visited.add(start)
		
		while (queue.length != 0) {
			const square = queue.shift()
			
			if (square === end) {
				console.log(`[${square.x}, ${square.y}]`)
				return
			}
			
			for (const move of square.moves) {
				if (!visited.has(move)) {
					queue.push(move)
					visited.add(move)
				}
			}
			
			console.log(`[${square.x}, ${square.y}]`)
		}
	}
}

function knightMoves(start, end) {
	gameboard.bfs(gameboard.findSquare(start[0], start[1]), gameboard.findSquare(end[0], end[1]))
}

const gameboard = new GameBoard()
knightMoves([0, 0], [3, 3])
