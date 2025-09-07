import { NextResponse } from "next/server";
import { checkPostmarkHealth } from "@/lib/postmark";

export async function GET() {
  try {
    const isHealthy = await checkPostmarkHealth();

    if (isHealthy) {
      return NextResponse.json({
        status: "healthy",
        service: "postmark",
        timestamp: new Date().toISOString(),
      });
    } else {
      return NextResponse.json(
        {
          status: "unhealthy",
          service: "postmark",
          timestamp: new Date().toISOString(),
          error: "Postmark connection failed",
        },
        { status: 503 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        service: "postmark",
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
