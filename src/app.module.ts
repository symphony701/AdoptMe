import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { UbicationsModule } from './modules/ubications/ubications.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { PublicationsModule } from './modules/publications/publications.module';
import { PetsModule } from './modules/pets/pets.module';
import { MembershipsModule } from './modules/memberships/memberships.module';
import { DistrictsModule } from './modules/districts/districts.module';
import { DetailsModule } from './modules/details/details.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { CountriesModule } from './modules/countries/countries.module';
import { AdvertisementsModule } from './modules/advertisements/advertisements.module';
import { AdoptionRequestModule } from './modules/adoption-request/adoption-request.module';
import { Users } from './modules/users/entities/users_entity';
import { Countries } from './modules/countries/entities/countries_entity';
import { Departments } from './modules/departments/entities/departments_entity';
import { Pets } from './modules/pets/entities/PetEntity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'GdQkKixXdN',
      password: 'PMvRTkeupb',
      database: 'GdQkKixXdN',
      entities: [Users, Departments, Countries, Pets],
      synchronize: true,
    }),
    UbicationsModule,
    TransactionsModule,
    PublicationsModule,
    PetsModule,
    MembershipsModule,
    DistrictsModule,
    DetailsModule,
    DepartmentsModule,
    CountriesModule,
    AdvertisementsModule,
    AdoptionRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
