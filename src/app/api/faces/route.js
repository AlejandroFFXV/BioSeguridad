import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
  try {
    const { name, promediox, promedioy, promedioz, coords, url_img } =
      await request.json();

    // const result = await conn.query('INSERT INTO products SET ? ', {
    //   name: name,
    //   description: description,
    //   price: price
    // });

    const result = await conn.query("INSERT INTO faces SET ?", {
      name,
      promediox,
      promedioy,
      promedioz,
      coords,
      url_img,
    });

    return NextResponse.json({
      name,
      promediox,
      promedioy,
      promedioz,
      coords,
      url_img,
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
