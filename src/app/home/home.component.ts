import { Component, OnInit } from '@angular/core';
import { LISTEAPPART } from 'src/db/listApp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

listApp = LISTEAPPART;
  constructor() { }

  ngOnInit(): void {
  }
  filtreAppart(value:string){
    this.listApp = LISTEAPPART;
    for(let i = this.listApp.length-1; i >= 0; i--){
      if (this.listApp[i].name.toLowerCase().includes(value.toLowerCase())){

      }else{
        this.listApp.splice(i,1)
      }
    }
  }
}
