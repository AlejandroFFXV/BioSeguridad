import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    const result = await conn.query("INSERT INTO support SET ?", {
      name,
      email,
    });

    // Crear un objeto de transporte reutilizable usando SMTP de transporte predeterminado
    let transporter = nodemailer.createTransport({
      service: "gmail", // puedes cambiarlo a tu proveedor de correo electrónico
      auth: {
        user: "bioseguridadcucei@gmail.com", // tu correo electrónico
        pass: "sfym lvyz vxjt flul", // tu contraseña
      },
      secure: true,
    });

    // Configurar opciones de correo electrónico
    let mailOptions = {
      from: "bioseguridadcucei@gmail.com", // dirección de correo electrónico del remitente
      to: email, // dirección de correo electrónico del destinatario
      subject: "Confirmación de formulario soporte", // Línea de asunto
      text: `Hola ${name}, gracias por comunicarte, alguien se comunicara contigo para ayudarte.`, // cuerpo de texto plano
    };

    // Enviar correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return NextResponse.json({
      name,
      email,
      id: result.insertId,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "An error occurred",
    });
  }
}
