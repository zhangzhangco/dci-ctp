import { db } from './index';
import { standardAuthorities, normativeClauses, testDefinitions, testDefinitionClauses } from './schema';

async function seed() {
    console.log('Seeding database...');

    // 1. Standard Authorities
    const authorities = await db.insert(standardAuthorities).values([
        { name: 'DCI CTP', description: 'Digital Cinema System Specification Compliance Test Plan' },
        { name: 'SMPTE 431-1', description: 'D-Cinema Quality - Screen Luminance Level, Chromaticity and Uniformity' },
        { name: 'SMPTE RP 431-2', description: 'D-Cinema Quality - Reference Projector and Environment' },
        { name: 'HDR Addendum', description: 'High Dynamic Range D-Cinema Addendum' },
    ]).returning();

    const ctpAuth = authorities.find(a => a.name === 'DCI CTP')!;
    const smpte431_2 = authorities.find(a => a.name === 'SMPTE RP 431-2')!;

    // 2. Normative Clauses (Sample)
    const clauses = await db.insert(normativeClauses).values([
        {
            authorityId: ctpAuth.id,
            refCode: '7.5.11',
            title: 'White Point',
            summary: 'The white point shall be within the specified tolerance of the target coordinates.',
        },
        {
            authorityId: smpte431_2.id,
            refCode: '7.7',
            title: 'Grayscale Tracking',
            summary: 'The transfer function shall follow Gamma 2.6.',
        },
    ]).returning();

    // 3. Test Definitions (Sample from v2)
    const tests = await db.insert(testDefinitions).values([
        {
            code: '27.2.4',
            name: 'Calibration White',
            phase: 2,
            type: 'measurement_linked',
            description: 'Verify white point luminance and chromaticity.',
        },
        {
            code: '27.2.5',
            name: 'Color Accuracy',
            phase: 2,
            type: 'measurement_linked',
            description: 'Verify color accuracy of primaries and secondaries.',
        },
    ]).returning();

    // 4. Link Definitions to Clauses
    await db.insert(testDefinitionClauses).values([
        { testDefinitionId: tests[0].id, normativeClauseId: clauses[0].id }, // Calibration White -> 7.5.11
        { testDefinitionId: tests[0].id, normativeClauseId: clauses[1].id }, // Calibration White -> Gamma 2.6 (Example link)
    ]);

    console.log('Seeding completed.');
}

seed().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});
