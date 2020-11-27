  
import { Controller, Get, Res, Next, Req } from '@nestjs/common';
import { join } from 'path';
import { Response, NextFunction, Request } from 'express';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  get(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Req() req: Request,
  ) {
    // check if requested path is api endpoint - if yes, return next()
    if (req.path.includes('api')) {
      return next();
    }

    // serve index.html
    res.sendFile('index.html');

  }
}
