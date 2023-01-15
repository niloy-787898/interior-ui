import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  toggleMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    console.log('Click')
    this.toggleMenu = !this.toggleMenu;
  }

}
