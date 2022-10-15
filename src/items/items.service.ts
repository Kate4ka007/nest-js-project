import { Injectable } from '@nestjs/common';
import { Item } from './items.interface';

@Injectable()
export class ItemsService {
  private items: Array<Item> = [
    { name: 'Sam', description: 'hunter', age: 30, country: 'USA' },
    { name: 'Din', description: 'hunter', age: 25, country: 'USA' },
    { name: 'Bobby', description: 'old man', age: 52, country: 'USA' },
  ];

  // eslint-disable-next-line @typescript-eslint/ban-types
  create(item: Item): Object {
    this.items.push(item);
    return { id: this.items.length.toString() };
  }

  findAll(): Array<Item> {
    return this.items;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  delete(obj: { name: string }): Object {
    const data = this.items.filter((el) => el.name !== obj.name);
    this.items = data;
    return { id: this.items.length.toString() };
  }
}
