import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
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
    const flaskResponse = await axios.post(
      "https://obscure-taiga-29510-b894311fe9ca.herokuapp.com/obtener_datos",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const { promedio_x, promedio_y, promedio_z, coordenadas } =
      flaskResponse.data;

    const resImage = await cloudinary.uploader.upload(filePath);
    console.log(resImage);
    const coordenadasSting = JSON.stringify(coordenadas);
    const result = await conn.query("INSERT INTO faces SET ?", {
      name: data.get("name"),
      promediox: promedio_x,
      promedioy: promedio_y,
      promedioz: promedio_z,
      coords: coordenadasSting,

      url_img: resImage.secure_url,
    });

    return NextResponse.json({
      name: data.get("name"),
      promediox: promedio_x,
      promedioy: promedio_y,
      promedioz: promedio_z,
      coords: coordenadas,
      // url_img: data.get("image"),
      url_img: filePath,
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
