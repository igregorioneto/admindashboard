import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent {
  @Output() eventTitulo: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(private route: Router) { }

  getParam() {
    let rota = this.route.url
    this.eventTitulo.emit(rota.replace('/',''))
  }
}
