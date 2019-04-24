export class Device {
  public id: number;
  public type: string;
  public name: string
  public description: string;
  public  status: string;


  constructor(id:number,type: string, name: string,  description: string, status: string) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.description = description;
    this.status = status;

  }
}
