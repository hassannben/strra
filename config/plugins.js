module.exports = ({ env }) => ({
    // Example plugin configuration
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'yourDefaultJwtSecret'),
      },
    },
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          sizeLimit: 1000000, // Set file size limit
        },
      },
    },
    email: {
      config: {
        provider: 'sendmail',
        providerOptions: {
          secure: true,
          defaultFrom: env('EMAIL_DEFAULT_FROM', 'fmomen977@gmail.com'),
          defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO', 'fmomen977@gmail.com'),
        },
      },
    },
    // Add more plugins as needed
  });
  