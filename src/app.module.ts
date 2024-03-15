import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UsersModule, ProductsModule, DatabaseModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
