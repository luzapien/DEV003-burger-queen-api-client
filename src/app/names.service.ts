import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor() { }
// Propiedad de array de strings en un array vacio
  names:string[] = [];

  add(name: string){
    this.names.push(name);
  }
}
