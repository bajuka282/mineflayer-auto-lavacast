Here’s a `README.md` file for your Mineflayer lavacast bot, including the simplified English text and the additional features:

```markdown
# Mineflayer Lavacast Bot

This bot builds a lavacast until it can't build anymore at the Y limit. It doesn't have a progress system, so if it loses connection while working, it has to start over.

It is for early anarchy servers that may need lavacasts. If you don’t want to intervene and let it run naturally, that’s fine. This bot is also for people who love lavacasts (which is a bit strange).

## Features

- Automatically returns after dying if the server has `/back` and `kitLoader`.
- Centers itself on the block before starting.

## Requirements

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Mineflayer](https://github.com/PrismarineJS/mineflayer) library

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/lavacast-bot.git
   cd lavacast-bot
   ```

2. Install the dependencies:
   ```bash
   npm install mineflayer patchpinder mineflayer-auto-totem
   ```

## Usage

1. Start the bot:
   ```bash
   node bot.js
   ```

2. Op your bot:
   ```bash
   /op your_bot_name
   ```

3. Give the bot a bucket of lava, a bucket of water, and stone or dirt.

4. Send `!build` for the bot to start the process.

## Customization

Feel free to modify the bot's behavior and construction logic in `bot.js` to suit your requirements.

## Contributing

If you have suggestions or improvements, feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

You can adjust the GitHub link and any other details as needed. If you need further modifications, just let me know!
