import { Component, Input } from '@angular/core';
import { DataStoreService } from './data-store.service';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ getLast() }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  constructor(private dataStoreService: DataStoreService) {}

  getLast() {
    return this.dataStoreService.getLast();
  }
}
