import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
  // consulta de la fecha con JS y despliegue
  const result = await conn.query("SELECT NOW()");
  console.log(result);
  return NextResponse.json({ message: result[0]["NOW()"] });
}
