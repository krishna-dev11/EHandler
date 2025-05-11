const newEmailTemplate = (newGmail, password) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8">
    <title>New Gmail Created</title>
    <style>
      body {
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.4;
        color: #333333;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
      }

      .logo {
        max-width: 200px;
        margin-bottom: 20px;
      }

      .message {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .body {
        font-size: 16px;
        margin-bottom: 20px;
      }

      .highlight {
        font-weight: bold;
        font-size: 18px;
        color: #000;
      }

      .support {
        font-size: 14px;
        color: #999999;
        margin-top: 20px;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <a href="https://studynotion-edtech-project.vercel.app">
        <img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyNotion Logo">
      </a>
      <div class="message">🎉 New Gmail Account Created</div>
      <div class="body">
        <p>Dear User,</p>
        <p>Your new Gmail account has been successfully created!</p>
        <p><span class="highlight">Email ID:</span> ${newGmail}</p>
        <p><span class="highlight">Password:</span> ${password}</p>
        <p>Please make sure to change your password after logging in for security purposes.</p>
      </div>
      <div class="support">
        If you have any questions or need help, feel free to contact us at 
        <a href="mailto:info@studynotion.com">info@studynotion.com</a>.
      </div>
    </div>
  </body>
  
  </html>`;
};

module.exports = newEmailTemplate;
