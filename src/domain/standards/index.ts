import { db } from '@/db';
import { normativeClauses, standardAuthorities, testDefinitions, testDefinitionClauses } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getAllAuthorities() {
    return await db.select().from(standardAuthorities);
}

export async function getNormativeClauses(authorityId?: number) {
    if (authorityId) {
        return await db.select().from(normativeClauses).where(eq(normativeClauses.authorityId, authorityId));
    }
    return await db.select().from(normativeClauses);
}

export async function getTestDefinitionWithClauses(code: string) {
    const definition = await db.query.testDefinitions.findFirst({
        where: eq(testDefinitions.code, code),
        with: {
            // Note: Drizzle relations need to be defined in schema.ts for 'with' to work seamlessly.
            // For now, we'll do a manual join if relations aren't set up, or update schema.ts.
            // Let's stick to manual queries for simplicity in this step or update schema later.
        }
    });

    // Manual join for now to avoid schema complexity in this step
    if (!definition) return null;

    const clauses = await db.select({
        clause: normativeClauses
    })
        .from(testDefinitionClauses)
        .innerJoin(normativeClauses, eq(testDefinitionClauses.normativeClauseId, normativeClauses.id))
        .where(eq(testDefinitionClauses.testDefinitionId, definition.id));

    return {
        ...definition,
        clauses: clauses.map(c => c.clause)
    };
}
