export class Places {
  public id: number;
  public type: string;
  public description: string;
  public favorite: boolean

  constructor(id:number, type: string,  description: string, favorite: boolean) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.favorite = favorite;
  }
}
