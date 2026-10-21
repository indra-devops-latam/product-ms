import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { HealthCheckModule } from './health-check/health-check.module';


@Module({
  imports: [
    ProductsModule,
    HealthCheckModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
