export class Pets {
  id?: number;
  type: string;
  price: number;

  constructor(id: any = '', type: any = '', price: any = '') {
    this.id = id;
    this.type = type;
    this.price = price;
  }
}
