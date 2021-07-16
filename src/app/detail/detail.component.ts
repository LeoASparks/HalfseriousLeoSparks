import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public ship: any;
  
  //if localstorage is empty, fetch from navigation
  constructor(private router: Router) {
    if (typeof localStorage["dataShip"] !== "undefined"){
      this.ship = JSON.parse(localStorage["dataShip"])
      this.ship = this.ship.state.ship
    }
    else {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as { ship: any };
      this.ship = state.ship;
    }
  }

  ngOnInit(): void { }

}
