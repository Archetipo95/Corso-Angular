import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoriService {

  getAutori(){
    return ["Autore1", "Autore2", "Autore3"];
  }
}
