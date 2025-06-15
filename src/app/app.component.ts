import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuUpComponent } from "./components/menu-up/menu-up.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
