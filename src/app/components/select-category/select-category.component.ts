import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent {
  @Input() categories: string[] = [];
  
  constructor() {}
}
