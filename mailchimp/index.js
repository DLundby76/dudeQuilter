const MailChimp = require('mailchimp-api-v3');
const mailChimp = new MailChimp(process.env.MAIL_CHIMP)


module.exports = (function() {

  function quiltsByADudeMessage(formData) {
    const { name, email, message } = formData;
    const subscriber = {
      email_address: email,
      merge_fields: {
        NAME: name,
        MESSAGE: message
      },
      status: 'subscribed'

    }

    return mailChimp.post('/lists/6df4482787/members', subscriber);
  }
  return {
    quiltsByADudeMessage: quiltsByADudeMessage
  }
}())
