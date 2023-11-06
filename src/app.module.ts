import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { LoggerModule } from './modules/logger/logger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './modules/country/country.module';
import { ActivityModule } from './modules/activity/activity.module';
import { CityModule } from './modules/city/city.module';
import { AddressModule } from './modules/address/address.module';
import typeorm from './config/typeorm';
import { ThematicModule } from './modules/thematic/thematic.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env.local', '.env'],
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('typeorm'),
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/**/migrations/*-migration.js'],
      }),
    }),
    HealthModule,
    LoggerModule,
    CountryModule,
    ActivityModule,
    CityModule,
    AddressModule,
    ThematicModule,
  ],
})
export class AppModule {}
