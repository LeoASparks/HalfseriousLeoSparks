import { Component } from '@angular/core';
import { StarshipsService } from "./services/starships.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public StarshipsService: StarshipsService) { }
  
  ngOnInit(): void {

  }
}
