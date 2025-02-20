import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,
  dialect: "postgres",
  storage: ":memory:",

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Set to true if you have a valid certificate
    },
  },
});
