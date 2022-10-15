import { Injectable } from '@nestjs/common';
import { Item } from './items.interface';
import * as fs from 'fs';

@Injectable()
export class ItemsService {
  private items: Array<Item> = [
    { name: 'Sam', description: 'hunter', price: 30 },
    { name: 'Din', description: 'hunter', price: 25 },
    { name: 'Bobby', description: 'old man', price: 28 },
  ];

  // eslint-disable-next-line @typescript-eslint/ban-types
  create(item: Item): Object {
    this.items.push(item);
    return { id: this.items.length.toString() };
  }

  findAll(): Array<Item> {
    return this.items;
  }
}
