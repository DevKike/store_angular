import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category = '';
  @Input() price: number = 0;
  @Input() rate: number = 0;

  @Output() doClick = new EventEmitter();

  constructor() {}

  public onClick(id: number) {
    this.doClick.emit(id);
  }
}
