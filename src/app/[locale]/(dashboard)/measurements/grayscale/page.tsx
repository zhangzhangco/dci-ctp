
import { GrayscaleForm } from "@/components/measurements/GrayscaleForm";
import { getSession } from "@/app/actions/session-actions";
import { redirect } from "next/navigation";

export default async function GrayscaleMeasurementPage({
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
                <h2 className="text-2xl font-bold tracking-tight">Grayscale Tracking</h2>
                <p className="text-muted-foreground">
                    Measure and verify the grayscale transfer function (Gamma 2.6).
                </p>
            </div>
            <GrayscaleForm sessionId={sessionId} />
        </div>
    );
}
