module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT', 'postgres'),
	host: env('DATABASE_HOST', 'db'),
	port: env('DATABASE_PORT', 5432),
	database: env('DATABASE_NAME', 'strapi'),
	username: env('DATABASE_USERNAME', 'postgres'),
	password: env('DATABASE_PASSWORD', 'postgres'),
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
	ssl: env('DATABASE_SSL', false),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
