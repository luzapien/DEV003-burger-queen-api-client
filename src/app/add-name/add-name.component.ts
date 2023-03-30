import { Component } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css']
})
export class AddNameComponent {

  // variable namesService is public so we can use it in different components
  constructor(public namesService : NamesService){}

  name: string = '';

  addnames(){
    this.namesService.add(this.name); 
    this.name = ''; // clean the input 
  }

}
