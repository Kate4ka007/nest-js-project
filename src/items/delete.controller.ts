import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@Controller('delete')
export class DeleteController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  // eslint-disable-next-line @typescript-eslint/ban-types
  delete(@Body() data: CreateItemDto): Object {
    return this.itemsService.delete(data);
  }
}
