import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';
import * as schema from './schema';
import path from 'path';
import fs from 'fs';

// Singleton for SQLite connection
let sqlite: Database.Database | null = null;

export function getDb() {
    if (!sqlite) {
        const dbPath = process.env.DB_FILE_NAME || 'sqlite.db';
        // Ensure directory exists
        const dbDir = path.dirname(dbPath);
        if (!fs.existsSync(dbDir)) {
            fs.mkdirSync(dbDir, { recursive: true });
        }

        sqlite = new Database(dbPath);

        const db = drizzle(sqlite, { schema });

        // Run migrations
        try {
            // In production (Electron), process.cwd() is resources/app
            // In dev, it's the project root.
            const migrationsFolder = path.join(process.cwd(), 'drizzle');

            if (fs.existsSync(migrationsFolder)) {
                migrate(db, { migrationsFolder });
                console.log('Database migrations applied successfully.');
            } else {
                console.warn(`Migrations folder not found at: ${migrationsFolder}`);
            }
        } catch (error) {
            console.error('Failed to apply database migrations:', error);
        }

        return db;
    }
    return drizzle(sqlite, { schema });
}

export const db = getDb();
