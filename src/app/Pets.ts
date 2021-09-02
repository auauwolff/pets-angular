export class Pets {
  id?: number;
  type: string;
  price: number;

  constructor(id: number = 0, type: string = '', price: number = 0) {
    this.id = id;
    this.type = type;
    this.price = price;
  }
}
