const mailjet = require('node-mailjet').apiConnect(
  process.env.MAILJET_APIKEY,
  process.env.MAILJET_SECRETKEY
);

const activateAccount = (req, res) => {
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'benoit.puech@yahoo.fr',
          Name: 'Me',
        },
        To: [
          {
            Email: 'benoit.puech@yahoo.fr',
            Name: 'Benoit Puech',
          },
        ],
        Subject: 'My first Mailjet Email!',
        TextPart: 'Greetings from Mailjet!',
        HTMLPart:
          '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
      },
    ],
  });
  request
    .then((result) => {
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};

module.exports = { activateAccount };
