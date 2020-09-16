import { AutoriService } from './../autori.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.css']
})
export class AutoriComponent implements OnInit {
  autori;

  constructor(service: AutoriService) { 
    this.autori = service.getAutori();
  }

  ngOnInit(): void {
  }

}
