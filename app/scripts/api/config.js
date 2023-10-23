// api/config.js
import {
  SERVER_PROTOCOL,
  SERVER_HOST,
  SERVER_PORT,
} from "../../../config/development.config.js";

export const BASE_URL = `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`;
