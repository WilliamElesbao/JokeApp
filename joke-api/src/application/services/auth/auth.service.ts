import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  validateAuthToken(apiKey: string): boolean {
    const authToken = this.configService.get<string>('AUTH_TOKEN');
    return apiKey === authToken;
  }
}
