import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/sha256')
  generateSha256(@Body() body): string {
    console.log(body);
    return this.appService.generateSha256FromString();
  }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);

    this.appService.generateSHA256FromFiles(files);
  }
}
