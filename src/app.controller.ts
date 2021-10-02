import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {message: 'Hello, World!', description: 'Some description about Nest MVC.', multiple: 'Multiple vars can be passed here too.'};
  }
}
