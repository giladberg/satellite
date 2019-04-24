export class Target {
  public id: number;
  public type: string;
  public description: string;
  public status: string;
  public serial: string;
  public hidden: boolean;
  public color: string;

  constructor(id:number, type: string,  description: string, status: string, serial: string, hidden: boolean, color: string) {
    this.id = id;
    this.type = type;
    this.description = description;
    this.status = status;
    this.serial = serial;
    this.hidden = hidden;
    this.color = color;
  }
}
