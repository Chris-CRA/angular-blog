import { Component, OnInit } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuUpComponent } from "../../components/menu-up/menu-up.component";

@Component({
  selector: 'app-home',
  imports: [TitleComponent, BigCardComponent, SmallCardComponent, MenuUpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }

  // Additional methods and properties can be added here

}
