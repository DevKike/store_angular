import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent {
  @Input() categories: string[] = [];
  @Output() selectedCategory = new EventEmitter<string>();
  
  constructor() {}

  onCategoryChange(event: any) {
    this.selectedCategory.emit(event.detail.value);
  }
}
