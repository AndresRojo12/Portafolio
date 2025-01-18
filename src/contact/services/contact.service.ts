import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
    async sendMail(name: string, email: string, message: string): Promise<void> {
      console.log('EMAIL_USER:', process.env.EMAIL_USER);
      console.log('EMAIL_USER:', process.env.EMAIL_PASS);

    // Configura el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // O tu servicio SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `Nuevo mensaje de contacto: ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Correo enviado correctamente');
    } catch (error) {
      console.error('Error al enviar correo:', error);
      throw new Error('No se pudo enviar el correo');
    }
  }
}
