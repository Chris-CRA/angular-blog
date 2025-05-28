import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCardComponent } from "./components/big-card/big-card.component";
import { MenuDownComponent } from './components/menu-down/menu-down.component';
import { TitleComponent } from "./components/title/title.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
