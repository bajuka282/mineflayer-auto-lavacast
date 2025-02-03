# Lavacast Bot

This bot is designed for early anarchy servers that require lavacasts. It will automatically build lavacasts until it reaches the Y limit, making it a great tool for players who enjoy creating lavacasts. If the bot loses connection while working, it will need to start over, as there is no progress tracking system in place.

## Features

- **Automatic Restart:** Returns to the last location after dying if the server has `/back` and `kitLoader`.
- **Centering:** Centers itself on the block before starting the building process.
- **Easy to Use:** Just send a command to initiate the building.

## Installation & Tutorial

Make sure you have Node.js installed. Then, run the following commands to install the required packages:
1. Install library
```bash
npm install mineflayer mineflayer-pathfinder mineflayer-auto-totem```bash
2. Run bot
```bash
node bot.js
3. Start Lavacast
```bash
!build

