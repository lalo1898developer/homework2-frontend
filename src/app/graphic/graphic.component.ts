import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent {

  averageItems:number = 0;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    { data: [], label: 'Price' }
  ];

  async getItems() {
    const ITEMS_URI = 'https://homework1-backend.herokuapp.com/api/items';

    try {
      const resItems = await axios.get(ITEMS_URI);
      resItems.data.map((item) => {
        this.barChartLabels.push(item.name);
        this.barChartData[0].data.push(item.price);
      });

    } catch (error) {
      alert('Error getting items');
    }
  }

  async getAverage() {
    const AVERAGE_URI = 'https://homework1-backend.herokuapp.com/api/items/average';

    try {
      const resAverage = await axios.get(AVERAGE_URI);
      this.averageItems = resAverage.data;
    } catch (error) {
      alert('Error getting average');
    }
  }

  constructor() { 
    this.getItems();
    this.getAverage();
   }

   // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
