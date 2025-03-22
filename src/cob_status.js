import TelegramBot from "node-telegram-bot-api";

const token = "7708671728:AAEKkFYvjkFz2mZaiSU6IgYYFvCeRRLXFQQ";
const bot = new TelegramBot(token, { polling: false });

let batchStarts = ["A000", "S001", "R001", "D000"];
let batchEnds = ["A999", "S999", "R999", "D999"];

async function sendNotification() {
  let messageStart = " Stage started";

  for (let i = 0; i < batchEnds.length; i++) {
    let batchStart = batchStarts[i];
    let batchEnd = batchEnds[i];

    const res = await fetch(
      "http://10.100.11.40:9094/cob-stage-container/api/v1.0.0/party/cob/stage?batchStage=" +
        batchStart
    );
    let data = await res.json();
    // console.log(data)

    data = data.body;

    // console.log(data)

    for (let j = 0; j < data.length; j++) {
      let processStatus = data[j].processStatus;
      let mainStage = data[j].batchBookingPreferred;
      // console.log(mainStage)
      // console.log(processStatus)
      if (processStatus == "1") {
        messageStart = mainStage + messageStart;
        console.log(messageStart);
        break;
      }
    }
  }

  bot.sendMessage("-1002306358942", messageStart);

  // setInterval(async () => {
  //     const res = await fetch('http://10.100.11.40:9094/cob-stage-container/api/v1.0.0/party/cob/stage?batchStage=' + batchStage,)
  //     const data = await res.json()
  //     console.log(data)
  // }, 5000)
}

// sendNotification()

bot.sendMessage(
  "-1002306358942",
  "Hello, this is a message from your Telegram bot."
);
