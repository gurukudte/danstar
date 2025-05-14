import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Lead } from "@/types";

export async function POST(request: Request) {
  try {
    const body: Lead = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        message: body.message || "",
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
