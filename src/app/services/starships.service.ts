import { Injectable } from '@angular/core';
import { switchMap, expand, map, toArray} from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StarshipsService {
  endpoint = "https://swapi.dev/api/starships/"

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  //fetch to api with given endpoint
  apiFetch(endpoints: string): Observable<any> {
    let result = this.httpClient.get(endpoints)
    return result
  }

  //fill the pilots inside our array
  remplirPilotes(pilotArray: string[]){
    let result: string[] = []
    pilotArray.forEach(element => {
      this.apiFetch(element).subscribe((res) => {
        result.push(res)
      })
    });
    return result
  }

  //fetch starships using pipes to manipulate the data
  getStarships(): Observable<any>  {
      return this.apiFetch(this.endpoint).pipe(expand((response) => response.next ? this.apiFetch(response.next): EMPTY ),
      switchMap(response => response.results),
      map((res: any) => ({ res, "pilots" : res.pilots.length > 0 ? this.remplirPilotes(res.pilots) : null })),
      toArray())
  }
}
