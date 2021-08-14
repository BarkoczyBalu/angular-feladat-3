import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  constructor(private dataStoreService: DataStoreService) {}

  insert() {
    this.dataStoreService.insertData();
  }

  ngOnInit() {}
}
