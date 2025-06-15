import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
  imports: [CommonModule, RouterModule], // 
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = '';
  
  @Input()
  cardTitle: string = '';
  
  @Input()
  cardDescription: string = '';

  @Input()
  id: string = '0';
  
  constructor() {}

  ngOnInit(): void {
    
  }

}
