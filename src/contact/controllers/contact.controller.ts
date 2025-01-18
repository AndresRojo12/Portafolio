import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from '../services/contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async handleContact(@Body() body: { name: string; email: string; message: string }) {
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return { error: 'Todos los campos son obligatorios' };
    }

    try {
      await this.contactService.sendMail(name, email, message);
      return { success: 'Mensaje enviado correctamente' };
    } catch (error) {
      return { error: 'Error al enviar el mensaje. Inténtalo más tarde.' };
    }
  }
}
