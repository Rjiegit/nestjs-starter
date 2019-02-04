import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
    ],
})
export class CoreModule { }
