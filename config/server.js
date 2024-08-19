module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Sets the host, defaulting to '0.0.0.0' which binds to all network interfaces
  port: env.int('PORT', 1337), // Sets the port, defaulting to 1337
  app: {
    keys: env.array('APP_KEYS'), // Secret keys used by the application, loaded from environment variables
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false), // Configures whether webhook payloads should populate relations
  },
});
