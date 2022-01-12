import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'rentAcar';
  user:string='Can Balcı';
  car={carId:1,carName:'Volkswagen',brandId:1,carModel:"Jetta",dailyPrice:200,carYear:2012,description:"DOLU"}
}
