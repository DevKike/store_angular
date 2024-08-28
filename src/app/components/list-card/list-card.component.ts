import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent {
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() price!: number;

  @Output() doClick = new EventEmitter();

  constructor() { }

  onClick() {
    this.doClick.emit(this.id);
  }
  
}
