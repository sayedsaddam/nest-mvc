import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {message: 'Hello from Nest MVC. The dynamic views loading is not working.'};
  }
}
