import { Component } from '@angular/core';
import { faBurger, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root', //llama al templateUrl
  templateUrl: './app.component.html', //Esto muestra el contenido
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  faBurger = faBurger;
  faCoffee = faCoffee;
}
