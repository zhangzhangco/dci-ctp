const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'sqlite.db');
const db = new Database(dbPath);

try {
    console.log('Applying schema changes to measurements_basic...');

    // Add standard to measurements_basic
    try {
        db.prepare("ALTER TABLE measurements_basic ADD COLUMN standard text DEFAULT 'sdr' NOT NULL").run();
        console.log('Added standard to measurements_basic');
    } catch (e) {
        if (!e.message.includes('duplicate column name')) console.error('Error adding standard to measurements_basic:', e.message);
        else console.log('Column standard already exists in measurements_basic');
    }

    console.log('Schema changes applied successfully.');
} catch (error) {
    console.error('Migration failed:', error);
}
