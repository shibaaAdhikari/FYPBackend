import { Controller, Post, UseGuards,Request} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    // authentication
    // authorize
    return req.user;
  }
}
