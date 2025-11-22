import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

// Singleton for SQLite connection
let sqlite: Database.Database | null = null;

export function getDb() {
    if (!sqlite) {
        sqlite = new Database(process.env.DB_FILE_NAME || 'sqlite.db');
    }
    return drizzle(sqlite, { schema });
}

export const db = getDb();
