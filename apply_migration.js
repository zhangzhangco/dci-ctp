const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'sqlite.db');
const db = new Database(dbPath);

try {
    console.log('Applying schema changes...');

    // Add type to devices
    try {
        db.prepare("ALTER TABLE devices ADD COLUMN type text DEFAULT 'projector' NOT NULL").run();
        console.log('Added type to devices');
    } catch (e) {
        if (!e.message.includes('duplicate column name')) console.error('Error adding type to devices:', e.message);
        else console.log('Column type already exists in devices');
    }

    // Add standard to test_sessions
    try {
        db.prepare("ALTER TABLE test_sessions ADD COLUMN standard text DEFAULT 'sdr' NOT NULL").run();
        console.log('Added standard to test_sessions');
    } catch (e) {
        if (!e.message.includes('duplicate column name')) console.error('Error adding standard to test_sessions:', e.message);
        else console.log('Column standard already exists in test_sessions');
    }

    // Add standard to measurements_color
    try {
        db.prepare("ALTER TABLE measurements_color ADD COLUMN standard text DEFAULT 'sdr' NOT NULL").run();
        console.log('Added standard to measurements_color');
    } catch (e) {
        if (!e.message.includes('duplicate column name')) console.error('Error adding standard to measurements_color:', e.message);
        else console.log('Column standard already exists in measurements_color');
    }

    // Add standard to measurements_grayscale
    try {
        db.prepare("ALTER TABLE measurements_grayscale ADD COLUMN standard text DEFAULT 'sdr' NOT NULL").run();
        console.log('Added standard to measurements_grayscale');
    } catch (e) {
        if (!e.message.includes('duplicate column name')) console.error('Error adding standard to measurements_grayscale:', e.message);
        else console.log('Column standard already exists in measurements_grayscale');
    }

    // Add standard to measurements_uniformity
    try {
        db.prepare("ALTER TABLE measurements_uniformity ADD COLUMN standard text DEFAULT 'sdr' NOT NULL").run();
        console.log('Added standard to measurements_uniformity');
    } catch (e) {
        if (!e.message.includes('duplicate column name')) console.error('Error adding standard to measurements_uniformity:', e.message);
        else console.log('Column standard already exists in measurements_uniformity');
    }

    // Add standard to measurements_contouring (Wait, schema says it has standard, check if table exists)
    // measurements_contouring might be new? The migration file had CREATE TABLE for it.
    // If the table exists, we might need to add standard. If it doesn't, we need to create it.
    // Let's assume tables exist (as per previous error) and just check for columns.
    // Actually, measurements_contouring was in the CREATE TABLE list of the migration.
    // If the migration failed because "measurements_basic already exists", then maybe measurements_contouring DOES NOT exist yet if it was added recently?
    // But wait, the migration file had ALL tables. Drizzle kit generate creates a snapshot of the WHOLE schema if it thinks it's a new init, or diffs.
    // The error "measurements_basic already exists" suggests it tried to run the CREATE TABLEs.
    // So I should check if `measurements_contouring` exists.

    const tableExists = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='measurements_contouring'").get();
    if (!tableExists) {
        db.prepare(`CREATE TABLE measurements_contouring (
            id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
            session_id integer NOT NULL,
            standard text NOT NULL,
            monotonicity_pass integer,
            visual_check_pass integer,
            pass integer,
            notes text,
            FOREIGN KEY (session_id) REFERENCES test_sessions(id) ON UPDATE no action ON DELETE no action
        )`).run();
        console.log('Created measurements_contouring table');
    } else {
        // Check if standard column exists
        try {
            db.prepare("ALTER TABLE measurements_contouring ADD COLUMN standard text DEFAULT 'sdr' NOT NULL").run();
            console.log('Added standard to measurements_contouring');
        } catch (e) {
            // Ignore if exists
        }
    }

    console.log('Schema changes applied successfully.');
} catch (error) {
    console.error('Migration failed:', error);
}
