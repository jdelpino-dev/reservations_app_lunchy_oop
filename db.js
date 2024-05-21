/** Database for lunchly */

import pg from "pg";

const db = new pg.Client("postgresql:///lunchly");

db.connect();

export default db;
