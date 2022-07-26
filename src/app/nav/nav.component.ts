import { Component, OnInit } from '@angular/core';
import { LISTEAPPART } from 'src/db/listApp';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  listApp = LISTEAPPART;
  constructor() { }

  ngOnInit(): void {
  }

}
