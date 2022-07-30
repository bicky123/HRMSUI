import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'console';
import { Observable } from 'rxjs';
import { IGetCountriesResponseModel } from '../models/responsesModels/getCountriesResponseModel';
import { IGetStatesResponseModel } from '../models/responsesModels/GetStatesResponseModel';
import { IResponseModel } from '../models/responsesModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<IResponseModel<Array<IGetCountriesResponseModel>>> {
    return this.http.get<IResponseModel<Array<IGetCountriesResponseModel>>>('Location/GetCountries');
  }

  public getStates(countryId: number): Observable<IResponseModel<Array<IGetStatesResponseModel>>> {
    return this.http.get<IResponseModel<Array<IGetStatesResponseModel>>>(`Location/GetStates/${countryId}`);
  }
}
