import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from 'src/application/services/auth/auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'ApiKeyAuth',
) {
  constructor(private readonly authService: AuthService) {
    super(
      {
        header: 'Authorization',
        prefix: '',
      },
      true,
      async (apiKey, done) => {
        if (this.authService.validateAuthToken(apiKey)) {
          return done(null, true);
        }
        done(new UnauthorizedException(), null);
      },
    );
  }
}
