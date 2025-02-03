const mineflayer = require('mineflayer');
const { Vec3 } = require('vec3');
const { autototem } = require('mineflayer-auto-totem');
const { pathfinder, goals } = require('mineflayer-pathfinder');

const password = "your_pass"; // ooffline bot

const bot = mineflayer.createBot({
  host: 'server_ip',
  port: 25565,
  username: 'Username'
});

bot.loadPlugin(autototem);
bot.loadPlugin(pathfinder);

let waitTime = 20;

bot.on('spawn', () => {
  console.log('[Lavacast-BOT] Connected to the server!');
  bot.chat(`/register ${password} ${password}`);
  setTimeout(() => {
    bot.chat(`/login ${password}`);
  }, 5000);
});

bot.on('chat', async (username, message) => {
  if (username === bot.username) return;

  if (message === '!build') {
    let iterationCount = 0;
    while (true) {
      console.log('[Lavacast-BOT] Starting construction...');
      await buildUp(2);
      await placeLava();
      await bot.waitForTicks(waitTime * 20);
      await placeWater();
      await bot.waitForTicks(40);
      waitTime += 10;
      await buildUp(2);
      await placeLava();
      await bot.waitForTicks(waitTime * 20);
      await placeWater();
      await bot.waitForTicks(40);
      await buildUp(3);
      await placeLava();
      await bot.waitForTicks(waitTime * 20);
      await placeWater();
      await bot.waitForTicks(20);
      console.log('[Lavacast-BOT] ---------------------');
      console.log('[Lavacast-BOT] Continuing construction...');
      iterationCount++;
    }
  }
});

bot.on('chat', async (username, message) => {
  if (username === bot.username) return;

  if (message === '!stop') {
    console.log('[Lavacast-BOT] Stopping construction process.');
    process.exit();
  }
});

async function buildUp(height) {
  await moveToCenter();
  const block = bot.inventory.items().find(item => item.name.includes("stone") || item.name.includes("dirt"));
  if (!block) {
    console.log("[Lavacast-BOT] No blocks in inventory!");
    return;
  }

  for (let i = 0; i < height; i++) {
    const blockBelow = bot.blockAt(bot.entity.position.floored().offset(0, -1, 0));
    if (!blockBelow || blockBelow.name === "air") {
      console.log("[Lavacast-BOT] No block below to place on!");
      return;
    }

    try {
      await bot.equip(block, "hand");
      bot.setControlState('jump', true);
      await bot.waitForTicks(5);
      bot.setControlState('jump', false);
      await bot.placeBlock(blockBelow, new Vec3(0, 1, 0));
      console.log(`[Lavacast-BOT] Placed block ${i + 1} high!`);
      await bot.waitForTicks(5);
    } catch (err) {
      console.log("[Lavacast-BOT] Error placing block: " + err.message);
    }
  }
}

async function placeLava() {
  const middleBlockPos = bot.entity.position.floored().offset(0, -2, 0);
  const x = middleBlockPos.x;
  const y = middleBlockPos.y;
  const z = middleBlockPos.z;

  try {
    console.log(`[Lavacast-BOT] Placing lava at ${x} ${y} ${z}`);
    await bot.chat(`/setblock ${x} ${y} ${z} lava`);
  } catch (err) {
    console.log("[Lavacast-BOT] Error placing lava: " + err.message);
  }
}

async function placeWater() {
  const middleBlockPos = bot.entity.position.floored().offset(0, -2, 0);
  const x = middleBlockPos.x;
  const y = middleBlockPos.y;
  const z = middleBlockPos.z;

  try {
    console.log(`[Lavacast-BOT] Placing water at ${x} ${y + 1} ${z}`);
    await bot.chat(`/setblock ${x} ${y + 1} ${z} water`);
    await bot.waitForTicks(20);
    console.log(`[Lavacast-BOT] Removing water at ${x} ${y + 1} ${z}`);
    await bot.chat(`/setblock ${x} ${y + 1} ${z} air`);
    console.log("[Lavacast-BOT] Water removed.");
  } catch (err) {
    console.log("[Lavacast-BOT] Error placing or removing water: " + err.message);
  }
}

async function moveToCenter() {
  const pos = bot.entity.position;
  const center = pos.floored().offset(0.5, 0, 0.5);

  if (pos.distanceTo(center) > 0.1) {
    console.log("[Lavacast-BOT] Not at center, moving...");
    await bot.pathfinder.goto(new goals.GoalBlock(center.x, center.y, center.z));
    console.log("[Lavacast-BOT] Reached center block.");
  }
}

bot.on('death', () => {
  console.log('[Lavacast-BOT] I died! Respawning...');

  setTimeout(() => {
    bot.chat('/k1');
  }, 2000);

  setTimeout(() => {
    bot.chat('/back');
  }, 4000);
});
