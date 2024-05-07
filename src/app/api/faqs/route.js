import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
  try {
    const { name, description } = await request.json();

    // const result = await conn.query('INSERT INTO products SET ? ', {
    //   name: name,
    //   description: description,
    //   price: price
    // });

    const result = await conn.query("INSERT INTO faqs SET ?", {
      name,
      description,
    });

    return NextResponse.json({
      name,
      description,
      id: result.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
