import { Module } from '@nestjs/common';
import { DeleteController } from './items/delete.controller';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [ItemsController, DeleteController, ProductsController],
  providers: [ItemsService],
})
export class AppModule {}
