import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    return `title: ${createProductDto.title}; price: ${createProductDto.price};`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'remove ' + id;
  }

  @Put(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): string {
    return 'update ' + id;
  }
}
