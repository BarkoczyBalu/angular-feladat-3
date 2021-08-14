import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  data: number[] = [];

  constructor() {}

  insertData() {
    if (this.data.length == 0) {
      this.data.push(0);
      return;
    }
    let lastIndex = this.data.length - 1;
    let last = this.data[lastIndex];
    this.data.push(last + 1);
  }
  getLast() {
    if (this.data.length == 0) {
      throw 'out of range';
    }
    let lastIndex = this.data.length - 1;
    return this.data[lastIndex];
  }
}
