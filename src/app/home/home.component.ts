import { Component, OnInit } from '@angular/core';
import { StarshipsService } from "../services/starships.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public Starships: any = [];

  //initiate with service
  constructor(public StarshipsService: StarshipsService) { }

  //method to get the starships and remove unused data
  fetchStarships() {
    return this.StarshipsService.getStarships().subscribe((res: {}) => {
      this.Starships = res;
      this.Starships.forEach((element: any) => {
        //remove unused value
        delete element.res.pilots
        delete element.res.films
        if (element.pilots != null) {
          element.pilots.forEach((element: any) => {
            //remove unused value
            delete element.films
            delete element.starships
            delete element.species
            delete element.vehicles
          });
        }
      });
      //store in local storage
      localStorage["datas"] = JSON.stringify(this.Starships);
    })
  }

  //On initialisation, look if localstorage contains our data
  //if not, fetch and then put in local storage in order to call the API only one time.
  ngOnInit(): void {
      //fetch in the local storage if initiated
      if (typeof localStorage["datas"] !== "undefined")
        this.Starships = JSON.parse(localStorage["datas"])
      else
        this.fetchStarships()

  }
}
