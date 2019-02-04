import { Module, DynamicModule, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(filePath?: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: ConfigService,
          useValue: new ConfigService(filePath || `.env.${process.env.NODE_ENV || 'development'}`),
        },
      ],
      exports: [
        ConfigService,
      ],
    };
  }
}
