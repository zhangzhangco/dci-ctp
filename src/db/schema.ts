import { sqliteTable, text, integer, real, primaryKey } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// ==========================================
// 1. Normative Layer (v2 - Standards & Rules)
// ==========================================

export const standardAuthorities = sqliteTable('standard_authorities', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(), // e.g., "CTP", "SMPTE 431-2"
    description: text('description'),
});

export const normativeClauses = sqliteTable('normative_clauses', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    authorityId: integer('authority_id').references(() => standardAuthorities.id).notNull(),
    refCode: text('ref_code').notNull(), // e.g., "7.5.11"
    title: text('title'), // e.g., "White Point"
    summary: text('summary'), // Human readable summary of the requirement
    notes: text('notes'), // Additional context
});

export const testDefinitions = sqliteTable('test_definitions', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    code: text('code').notNull(), // e.g., "27.2.4"
    name: text('name').notNull(), // e.g., "Calibration White"
    phase: integer('phase').notNull(), // 1 = Device, 2 = System, 3 = Exhibition
    type: text('type').notNull(), // 'pass_fail', 'checklist', 'measurement_linked'
    description: text('description'),
});

// Many-to-Many link between Test Definitions and Normative Clauses
export const testDefinitionClauses = sqliteTable('test_definition_clauses', {
    testDefinitionId: integer('test_definition_id').references(() => testDefinitions.id).notNull(),
    normativeClauseId: integer('normative_clause_id').references(() => normativeClauses.id).notNull(),
}, (t) => ({
    pk: primaryKey({ columns: [t.testDefinitionId, t.normativeClauseId] }),
}));

// ==========================================
// 2. Operational Layer (v5 - Measurements)
// ==========================================

export const devices = sqliteTable('devices', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    manufacturer: text('manufacturer').notNull(),
    model: text('model').notNull(),
    serialNumber: text('serial_number'),
    description: text('description'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const testSessions = sqliteTable('test_sessions', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    deviceId: integer('device_id').references(() => devices.id).notNull(),
    phase: integer('phase').notNull(), // 1, 2, or 3
    date: text('date').notNull(),
    operator: text('operator'),
    location: text('location'),
    notes: text('notes'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// --- Specific Measurement Tables ---

// Grayscale & Gamma (SDR & HDR)
export const measurementsGrayscale = sqliteTable('measurements_grayscale', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),
    stepIndex: integer('step_index').notNull(), // 0-255 or 0-1023
    bitDepth: integer('bit_depth').default(12),

    // Measured values
    measuredL: real('measured_l'), // cd/m2
    measuredX: real('measured_x'),
    measuredY: real('measured_y'),

    // Target values (calculated by domain logic, stored for record)
    targetL: real('target_l'),
    targetX: real('target_x'),
    targetY: real('target_y'),

    errorE: real('error_e'), // Delta E or similar metric
});

// Color Accuracy (SDR & HDR)
export const measurementsColor = sqliteTable('measurements_color', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),
    colorName: text('color_name').notNull(), // 'Red', 'Green', 'Blue', 'White', 'Cyan'...
    type: text('type').notNull(), // 'primary', 'secondary', 'macbeth'

    measuredL: real('measured_l'),
    measuredX: real('measured_x'),
    measuredY: real('measured_y'),

    targetL: real('target_l'),
    targetX: real('target_x'),
    targetY: real('target_y'),

    deltaE: real('delta_e'),
});

// Uniformity (SDR)
export const measurementsUniformity = sqliteTable('measurements_uniformity', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),
    position: text('position').notNull(), // 'Center', 'TopLeft', 'TopRight'...

    measuredL: real('measured_l'),
    measuredX: real('measured_x'),
    measuredY: real('measured_y'),
});

// Basic Device Capabilities (Phase 1: Peak White, Black Level)
export const measurementsBasic = sqliteTable('measurements_basic', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),
    type: text('type').notNull(), // 'peak_white', 'black_level'

    measuredL: real('measured_l'), // cd/m2
    measuredX: real('measured_x'), // Optional for Black Level
    measuredY: real('measured_y'), // Optional for Black Level

    notes: text('notes'),
});

// ==========================================
// 3. Results Linkage
// ==========================================

export const testResults = sqliteTable('test_results', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),
    testDefinitionId: integer('test_definition_id').references(() => testDefinitions.id).notNull(),

    status: text('status').notNull(), // 'pass', 'fail', 'na', 'pending'
    summary: text('summary'), // Auto-generated or manual summary

    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});
