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
    type: text('type').notNull().default('projector'), // 'projector' | 'direct_view'
    serialNumber: text('serial_number'),
    description: text('description'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const testSessions = sqliteTable('test_sessions', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    deviceId: integer('device_id').references(() => devices.id).notNull(),
    phase: integer('phase').notNull(), // 1, 2, or 3
    standard: text('standard').notNull().default('sdr'), // 'sdr' | 'hdr'
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
    standard: text('standard').default('sdr').notNull(), // 'sdr' or 'hdr'
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
    standard: text('standard').default('sdr').notNull(), // 'sdr' or 'hdr'
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
    standard: text('standard').default('sdr').notNull(), // 'sdr' or 'hdr'
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
    standard: text('standard').default('sdr').notNull(), // 'sdr' or 'hdr'

    measuredL: real('measured_l'), // cd/m2
    measuredX: real('measured_x'), // Optional for Black Level
    measuredY: real('measured_y'), // Optional for Black Level

    notes: text('notes'),
});

// Pixel Structure (Phase 1: Checklist)
export const measurementsPixelStructure = sqliteTable('measurements_pixel_structure', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),

    fillFactorCheck: integer('fill_factor_check', { mode: 'boolean' }),
    pixelPitchCheck: integer('pixel_pitch_check', { mode: 'boolean' }),
    subPixelStructureCheck: integer('sub_pixel_structure_check', { mode: 'boolean' }),
    visualArtifactsCheck: integer('visual_artifacts_check', { mode: 'boolean' }),

    notes: text('notes'),
    images: text('images'), // JSON array of image URLs
});

// 1. Intra-Frame Contrast
export const measurementsIntraContrast = sqliteTable('measurements_intra_contrast', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),
    standard: text('standard').notNull(), // 'sdr' or 'hdr'

    // White Patches (cd/m2)
    whiteL: real('white_l'), whiteR: real('white_r'),
    whiteT: real('white_t'), whiteB: real('white_b'),

    // Black Patches (cd/m2)
    blackL: real('black_l'), blackR: real('black_r'),
    blackT: real('black_t'), blackB: real('black_b'),

    contrastRatio: real('contrast_ratio'),
    pass: integer('pass', { mode: 'boolean' }),
    notes: text('notes')
});

// 2. Inactive Area Black
export const measurementsInactiveArea = sqliteTable('measurements_inactive_area', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),

    topBorderCheck: integer('top_border_check', { mode: 'boolean' }),
    bottomBorderCheck: integer('bottom_border_check', { mode: 'boolean' }),
    leftBorderCheck: integer('left_border_check', { mode: 'boolean' }),
    rightBorderCheck: integer('right_border_check', { mode: 'boolean' }),

    measuredLuminance: real('measured_luminance'), // Max luminance found
    pass: integer('pass', { mode: 'boolean' }),
    notes: text('notes')
});

// 3. Pixel Count
export const measurementsPixelCount = sqliteTable('measurements_pixel_count', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),

    patternType: text('pattern_type'), // 'north', 'south', 'east', 'west'
    pixelBlockComplete: integer('pixel_block_complete', { mode: 'boolean' }),
    noCropping: integer('no_cropping', { mode: 'boolean' }),
    noScaling: integer('no_scaling', { mode: 'boolean' }),

    horizontalPixels: integer('horizontal_pixels'),
    verticalPixels: integer('vertical_pixels'),

    pass: integer('pass', { mode: 'boolean' }),
    notes: text('notes')
});

// 4. Contouring
export const measurementsContouring = sqliteTable('measurements_contouring', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),
    standard: text('standard').notNull(), // 'sdr' or 'hdr'

    monotonicityPass: integer('monotonicity_pass', { mode: 'boolean' }),
    visualCheckPass: integer('visual_check_pass', { mode: 'boolean' }),

    pass: integer('pass', { mode: 'boolean' }),
    notes: text('notes')
});

// 5. Sub-Pixel Alignment
export const measurementsSubPixel = sqliteTable('measurements_sub_pixel', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),

    horizontalLinesPass: integer('horizontal_lines_pass', { mode: 'boolean' }),
    verticalLinesPass: integer('vertical_lines_pass', { mode: 'boolean' }),
    noColorFringing: integer('no_color_fringing', { mode: 'boolean' }),

    pass: integer('pass', { mode: 'boolean' }),
    notes: text('notes')
});

// 6. Upscaling Artifacts
export const measurementsUpscaling = sqliteTable('measurements_upscaling', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),

    noJaggies: integer('no_jaggies', { mode: 'boolean' }),
    noRinging: integer('no_ringing', { mode: 'boolean' }),
    noAliasing: integer('no_aliasing', { mode: 'boolean' }),

    pass: integer('pass', { mode: 'boolean' }),
    notes: text('notes')
});

// 7. Exhibition Environment
export const measurementsExhibition = sqliteTable('measurements_exhibition', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    sessionId: integer('session_id').references(() => testSessions.id).notNull(),

    ambientLightPass: integer('ambient_light_pass', { mode: 'boolean' }),
    maskingPass: integer('masking_pass', { mode: 'boolean' }),
    portWindowPass: integer('port_window_pass', { mode: 'boolean' }),
    hvacNoisePass: integer('hvac_noise_pass', { mode: 'boolean' }),

    ambientLightLevel: real('ambient_light_level'),
    temperature: real('temperature'),
    humidity: real('humidity'),

    pass: integer('pass', { mode: 'boolean' }),
    notes: text('notes')
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

// Relations
import { relations } from 'drizzle-orm';

export const devicesRelations = relations(devices, ({ many }) => ({
    sessions: many(testSessions),
}));

export const testSessionsRelations = relations(testSessions, ({ one, many }) => ({
    device: one(devices, {
        fields: [testSessions.deviceId],
        references: [devices.id],
    }),
    measurementsGrayscale: many(measurementsGrayscale),
    measurementsColor: many(measurementsColor),
    measurementsUniformity: many(measurementsUniformity),
    measurementsBasic: many(measurementsBasic),
    measurementsPixelStructure: many(measurementsPixelStructure),
    measurementsIntraContrast: many(measurementsIntraContrast),
    measurementsInactiveArea: many(measurementsInactiveArea),
    measurementsPixelCount: many(measurementsPixelCount),
    measurementsContouring: many(measurementsContouring),
    measurementsSubPixel: many(measurementsSubPixel),
    measurementsUpscaling: many(measurementsUpscaling),
    measurementsExhibition: many(measurementsExhibition),
}));

export const measurementsGrayscaleRelations = relations(measurementsGrayscale, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsGrayscale.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsColorRelations = relations(measurementsColor, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsColor.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsUniformityRelations = relations(measurementsUniformity, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsUniformity.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsBasicRelations = relations(measurementsBasic, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsBasic.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsPixelStructureRelations = relations(measurementsPixelStructure, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsPixelStructure.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsIntraContrastRelations = relations(measurementsIntraContrast, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsIntraContrast.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsInactiveAreaRelations = relations(measurementsInactiveArea, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsInactiveArea.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsPixelCountRelations = relations(measurementsPixelCount, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsPixelCount.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsContouringRelations = relations(measurementsContouring, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsContouring.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsSubPixelRelations = relations(measurementsSubPixel, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsSubPixel.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsUpscalingRelations = relations(measurementsUpscaling, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsUpscaling.sessionId],
        references: [testSessions.id],
    }),
}));

export const measurementsExhibitionRelations = relations(measurementsExhibition, ({ one }) => ({
    session: one(testSessions, {
        fields: [measurementsExhibition.sessionId],
        references: [testSessions.id],
    }),
}));
