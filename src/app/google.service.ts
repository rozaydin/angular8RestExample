import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QODServcie {

  constructor(private httpClient: HttpClient) {
  }

  public fetchData(): Observable<string> {
    return this.httpClient.get<string>('https://quotes.rest/qod');
  }

}
