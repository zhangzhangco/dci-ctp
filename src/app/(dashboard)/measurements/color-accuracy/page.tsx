
import { ColorAccuracyForm } from "@/components/measurements/ColorAccuracyForm";
import { getSession } from "@/app/actions/session-actions";
import { redirect } from "next/navigation";

export default async function ColorAccuracyMeasurementPage({
    searchParams,
}: {
    searchParams: Promise<{ sessionId?: string }>;
}) {
    const { sessionId: sessionIdStr } = await searchParams;
    const sessionId = sessionIdStr ? parseInt(sessionIdStr) : undefined;

    if (!sessionId || isNaN(sessionId)) {
        return <div>Invalid Session ID</div>;
    }

    const session = await getSession(sessionId);
    if (!session) {
        redirect("/");
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Color Accuracy</h2>
                <p className="text-muted-foreground">
                    Measure and verify color accuracy using the Macbeth ColorChecker.
                </p>
            </div>
            <ColorAccuracyForm sessionId={sessionId} />
        </div>
    );
}
