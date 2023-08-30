// module.exports = ({ env }) => ({
//   connection:{
//        client: 'postgres',
//        connection:{
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'aspinodb'),
//         user: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'Vajintha@1511'),
//         schema: env('DATABASE_SCHEMA', 'public'),
//          ssl: env.bool('DATABASE_SSL',true),
//       },
//     },
// });


// npm install pg --save //command used to run the postgres

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA'),
      ssl: env.bool('DATABASE_SSL'),
    },
  }
})