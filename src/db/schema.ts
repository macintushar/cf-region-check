import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const loggingTable = sqliteTable("logging_table", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    headers: text().notNull(),
    timestamp: int({ mode: "timestamp" })
});
