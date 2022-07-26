export class Appart {
  id:number;
  name:string;
  price:any;
  humain:number;
  arriver:Date;
  depart:Date;
  picture:string;
  booked:boolean;

constructor(
  id:number=0,
  name:string='',
  price:any = 0,
  humain:number = 0,
  arriver:Date = new Date(),
  depart:Date = new Date(),
  picture:string = '',
  booked:boolean= false,
){
  this.id = id;
  this.name = name;
  this.price = price;
  this.humain = humain;
  this.arriver =  arriver;
  this.depart = depart;
  this.picture = picture;
  this.booked = booked;
}

}
