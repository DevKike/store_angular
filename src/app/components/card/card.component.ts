import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() images: string[] = [];
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
  @Input() price: number = 0;

  constructor() {}
}
