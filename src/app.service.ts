import { Injectable } from '@nestjs/common';

import { SHA256 } from 'crypto-js';
import fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  generateSha256FromString(): string {
    return SHA256('Hello World!').toString();
  }

  async generateSHA256FromFiles(
    files: Array<Express.Multer.File>,
  ): Promise<string> {


    return 'ok';
  }
}
