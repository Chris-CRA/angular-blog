import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // 

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
  imports: [RouterModule], // 
})
export class SmallCardComponent implements OnInit {

  @Input() photoCover: string = '';
  @Input() cardDescription: string = '';
  @Input() cardLink: string = ''; 
  @Input() id: string = '0';

  viewCount: number = 0;
  timeSince: string = '';

  dataPublicacao: Date = new Date(new Date().getTime() - 2 * 60 * 60 * 1000);

  constructor() {}

  ngOnInit(): void {
    this.viewCount = this.gerarVisualizacoes();
    this.timeSince = this.calcularTempoDesde(this.dataPublicacao);
  }

  gerarVisualizacoes(): number {
    return Math.floor(Math.random() * 500) + 50;
  }

  calcularTempoDesde(data: Date): string {
    const agora = new Date();
    const diffMs = agora.getTime() - data.getTime();

    const minutos = Math.floor(diffMs / (1000 * 60));
    const horas = Math.floor(diffMs / (1000 * 60 * 60));
    const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (minutos < 60) {
      return `${minutos} min atrás`;
    } else if (horas < 24) {
      return `${horas} horas atrás`;
    } else {
      return `${dias} dias atrás`;
    }
  }
}
