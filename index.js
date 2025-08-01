const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`🤖 Bot đã đăng nhập với tên ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("🏓 pong!");
  }

  if (message.content === "!anime") {
    const list = [
      "https://i.imgur.com/abc123.png",
      "https://i.imgur.com/def456.png",
      "https://i.imgur.com/ghi789.png"
    ];
    const random = list[Math.floor(Math.random() * list.length)];
    message.reply({ embeds: [{ title: "Ảnh Anime 🎌", image: { url: random } }] });
  }
});

client.login(process.env.TOKEN);
