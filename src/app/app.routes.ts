import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component'; // ← importe o componente de conteúdo

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content/:id', component: ContentComponent }, // ← adicione essa rota
  // { path: '**', component: NotFoundComponent },
];
