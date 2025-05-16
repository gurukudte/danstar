import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, serviceType, message } =
      await request.json();

    // Basic validation
    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "Full name and email are required" },
        { status: 400 }
      );
    }

    const existingLead = await db.lead.findUnique({
      where: { phone },
    });
    if (existingLead) {
      return NextResponse.json(
        { error: "A lead with this phone number already exists" },
        { status: 409 }
      );
    }
    const lead = await db.lead.create({
      data: {
        fullName: fullName,
        email: email || "",
        phone: phone,
        serviceType: serviceType || "",
        message: message || "",
      },
    });

    return NextResponse.json(lead, { status: 201 });
    // eslint-disable-next-line
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "A lead with this email already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await db.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { message: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
