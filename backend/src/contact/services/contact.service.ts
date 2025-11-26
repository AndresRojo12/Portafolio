/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer, { Transporter } from 'nodemailer';

@Injectable()
export class ContactService {
  private readonly transporter: Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: Number(this.configService.get('MAIL_PORT')),
      secure: true,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    }) as Transporter;
  }

  async sendContactEmail(
    name: string,
    email: string,
    message: string,
  ): Promise<void> {
    await this.transporter.sendMail({
      from: `"Contacto" <${this.configService.get<string>('MAIL_USER')}>`,
      to: this.configService.get<string>('MAIL_USER'),
      subject: 'Nuevo mensaje',
      html: `
    <h2>Nuevo mensaje desde el formulario de contacto</h2>

    <p><strong>Nombre:</strong> ${name} 
    <p><strong>Email:</strong> ${email}</p
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `,
    });
  }
}
