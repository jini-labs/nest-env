import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';


@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}
  get listenPort(): string {
    return this.configService.get<string>('LISTEN_PORT', '3000');
  }

  get dbHost(): string {
    return this.configService.get<string>('DB_HOST', 'localhost');

  }
}