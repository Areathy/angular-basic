import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientLocation } from './client-location';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService
{
  urlPrefix: string = "http://localhost:9090";

  constructor(private httpClient: HttpClient)
  {
  }

  getClientLocations(): Observable<ClientLocation[]>
  {
    return this.httpClient.get<ClientLocation[]>(this.urlPrefix + "/api/clientlocations", { responseType: "json" });
  }
}