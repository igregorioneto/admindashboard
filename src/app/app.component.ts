import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Input() titulo: string = "Dashboard"
  @Input() icone: string = "dashboard"

  constructor(private route: ActivatedRoute){}

  eventTitulo($event: any) {
    if($event == 'dashboard') {
      this.titulo = 'Dashboard'
      this.icone = 'dashboard'
    } else {
      this.titulo = 'Desafios'
      this.icone = 'book'
    }
  }
}
