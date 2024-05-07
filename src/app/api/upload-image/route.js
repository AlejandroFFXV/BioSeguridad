import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import axios from "axios";

cloudinary.config({
  cloud_name: "dpraaof2f",
  api_key: "885155165686768",
  api_secret: "fKrYGvZ3ijGA38GyfyyxJ66Ctzc",
});

export async function POST(request) {
  try {
    const data = await request.formData();
    const image = data.get("image");
    if (!image) {
      return NextResponse.json(
        {
          message: "Image is required",
        },
        {
          status: 400,
        }
      );
    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const formData = new FormData();
    const blob = new Blob([buffer], { type: image.type });
    formData.append("image", blob, image.name);

    const filePath = path.join(process.cwd(), "public", image.name);
    await writeFile(filePath, buffer);
    console.log(formData);

    const flaskResponse = await axios.post(
      "http://localhost:5000/procesar-imagen",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(flaskResponse);

    const respuesta = flaskResponse.data;
    return NextResponse.json({
      respuesta,
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
