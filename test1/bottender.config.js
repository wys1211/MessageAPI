module.exports = {
  session: {
    driver: 'memory',
    stores: {
      memory: {
        maxSize: 500,
      },
      file: {
        dirname: '.sessions',
      },
      redis: {
        port: 6379,
        host: '127.0.0.1',
        password: 'auth',
        db: 0,
      },
      mongo: {
        url: 'mongodb://localhost:27017',
        collectionName: 'sessions',
      },
    },
  },
  initialState: {},
  channels: {
    messenger: {
      enabled: true,
      path: '/webhooks/messenger',
      pageId: '105010868350018',//process.env.MESSENGER_PAGE_ID,
      accessToken: 'EAAD2lm1qZAaIBAGg1ZC6wJiy0roleZCmIjZBQRUTAbzYkLuQpkcypNW9WTzi2YcflixC2ZCOzzfKuuUcPlZCaWdblUBGWn2XdoCOequyO28Qfi9bML46ZA3BM3iogpVgZAqLsSuQd7W8N2d3JU4QfZAhhnghLZAsqfMVzoGWLHtJP0ogZDZD',//process.env.MESSENGER_ACCESS_TOKEN,
      appId: '271125941216674',//process.env.MESSENGER_APP_ID,
      appSecret: 'c435721b01df87acd032fb99562638aa',//process.env.MESSENGER_APP_SECRET,
      verifyToken: '21Y04MD06T0735',//process.env.MESSENGER_VERIFY_TOKEN,
    },
    whatsapp: {
      enabled: false,
      path: '/webhooks/whatsapp',
      accountSid: process.env.WHATSAPP_ACCOUNT_SID,
      authToken: process.env.WHATSAPP_AUTH_TOKEN,
      phoneNumber: process.env.WHATSAPP_PHONE_NUMBER,
    },
    line: {
      enabled: true,
      path: '/webhooks/line',
      accessToken: '2Qm56Zl2CFjMqC7MKA+rYEbdhGh3252PdzpyvqTKKqOKg/jehKOv9o4QoyUD9JeJ2ZtinWjigNcxhoCAyPmvEkXH0P8uZHeBdSbEFjmAvQ5ysXyxF6wPRf3sF6h8kXlHsPdVnTHEs1v8fzORRA92RQdB04t89/1O/w1cDnyilFU=',//process.env.LINE_ACCESS_TOKEN,
      channelSecret: '74582dfcae022a2f86265623cd486924',//process.env.LINE_CHANNEL_SECRET,
    },
    telegram: {
      enabled: false,
      path: '/webhooks/telegram',
      accessToken: process.env.TELEGRAM_ACCESS_TOKEN,
    },
    slack: {
      enabled: false,
      path: '/webhooks/slack',
      accessToken: process.env.SLACK_ACCESS_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET,
    },
    viber: {
      enabled: false,
      path: '/webhooks/viber',
      accessToken: process.env.VIBER_ACCESS_TOKEN,
      sender: {
        name: 'xxxx',
      },
    },
  },
};