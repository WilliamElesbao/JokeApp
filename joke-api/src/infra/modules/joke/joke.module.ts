import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JokeService } from 'src/application/services/joke/joke.service';
import { JokeResolver } from 'src/presenters/resolvers/joke.resolver';

@Module({
  imports: [HttpModule],
  providers: [JokeResolver, JokeService],
  exports: [JokeService],
})
export class JokeModule {}
