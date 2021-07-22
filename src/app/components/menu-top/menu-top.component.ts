import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  @Input() title!: string
  @Input() icone!: string
  constructor() { }

  ngOnInit(): void {
  }

}
