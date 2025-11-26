import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from '../services/contact.service';
import { CreateContactDto } from '../dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async send(@Body() body: CreateContactDto) {
    await this.contactService.sendContactEmail(
      body.name,
      body.email,
      body.message,
    );

    return { message: 'Mensaje enviado correctamente' };
  }
}
