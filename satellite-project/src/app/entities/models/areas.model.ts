export class Areas {
  public id: number;
  public type: string;
  public description: string;
  public shape: string;

  constructor(id:number, type: string,  description: string, shape: string) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.shape = shape;
  }
}
