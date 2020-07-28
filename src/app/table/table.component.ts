import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  items:Array<any> = [];
  totalItems:number = 0;

  async getItems() {
    const ITEMS_URI = 'https://homework1-backend.herokuapp.com/api/items';

    try {
      const resItems = await axios.get(ITEMS_URI);
      resItems.data.map((item) => {
        this.items.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        });
      });

    } catch (error) {
      alert('Error getting items');
    }
  }

  async getTotal() {
    const TOTAL_URI = 'https://homework1-backend.herokuapp.com/api/items/total';

    try {
      const resTotal = await axios.get(TOTAL_URI);
      this.totalItems = resTotal.data;
    } catch (error) {
      alert('Error getting average');
    }
  }

  constructor() { 
    this.getItems();
    this.getTotal();
   }

}
