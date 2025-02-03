This bot builds a lavacast until it can't build anymore at the Y limit. It doesn't have a progress system, so if it loses connection while working, it has to start over.

It is for early anarchy servers that may need lavacasts. If you don’t want to intervene and let it run naturally, that’s fine. This bot is also for people who love lavacasts (which is a bit strange).

Features:

Automatically returns after dying if the server has /back and kitLoader.
Centers itself on the block before starting.
How to start:

npm install mineflayer, patchpinder, mineflayer-auto-totem
node bot.js
/op your bot
Give the bot a bucket of lava, a bucket of water, and stone or dirt.
Send !build for the bot to start.
