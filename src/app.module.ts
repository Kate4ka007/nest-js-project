import { Module } from '@nestjs/common';
import { DeleteController } from './items/delete.controller';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [],
  controllers: [ItemsController, DeleteController],
  providers: [ItemsService],
})
export class AppModule {}
