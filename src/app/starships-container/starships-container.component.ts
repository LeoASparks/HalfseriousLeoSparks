import { Component, OnInit, Input   } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-starships-container',
  templateUrl: './starships-container.component.html',
  styleUrls: ['./starships-container.component.scss']
})

export class StarshipsContainerComponent implements OnInit {
  @Input() ship: any;

  constructor(private router: Router) { }

  //Function to change page while giving information using navigationExtras
  goToDetail(): void {
    const navigationExtras: NavigationExtras = {state: {ship: this.ship}};
    localStorage["dataShip"] = JSON.stringify(navigationExtras);
    this.router.navigate(['/detail'], navigationExtras);
  }

  ngOnInit(): void {
  }

}
