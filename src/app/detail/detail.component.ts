import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { bindCallback } from 'rxjs';
import { LISTEAPPART } from 'src/db/listApp';
import { Appart } from '../model/appart';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
listApp = LISTEAPPART
appart:Appart = new Appart();
  constructor(private activeRoute:ActivatedRoute,private route: Router) { }
  nombreURL = 0;
  ngOnInit(): void {

    this.nombreURL = this.activeRoute.snapshot.params['id'];

  for(let i =0; i < this.listApp.length; i++){
    if(this.listApp[i].id == this.nombreURL){
      this.appart = this.listApp[i];
    }
  }

}
validate(){
  this.route.navigate([''])
  this.appart.booked=true;
}
annuler(){
  this.route.navigate([''])
  this.appart.booked=false;
}
back(){
  this.route.navigate([''])
}
}

