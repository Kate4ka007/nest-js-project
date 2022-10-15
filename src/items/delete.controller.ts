import { Controller, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('delete')
export class DeleteController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  // eslint-disable-next-line @typescript-eslint/ban-types
  delete(@Body() data: { name: string }): Object {
    return this.itemsService.delete(data);
  }
}
