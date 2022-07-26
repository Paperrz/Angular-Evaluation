import { Component, OnInit } from '@angular/core';
import { LISTEAPPART } from 'src/db/listApp';
import { Appart } from '../model/appart';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listApp = LISTEAPPART
  appart:Appart = new Appart();
  constructor(private activeRoute: ActivatedRoute, private route: Router,) { }
  nombreURL:number=0;
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
  }
  remove(){
    const index =this.listApp.indexOf(this.appart,0);
    if(index > -1){
      this.listApp.splice(index,1);
    }
    this.route.navigate(['']);
  }
}
