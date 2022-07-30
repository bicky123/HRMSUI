import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddUpdateHouseRequestModel } from '../models/requestModels/addUpdateHouseRequestModel';
import { IResponseModel } from '../models/responsesModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  addHouse(payload: IAddUpdateHouseRequestModel): Observable<IResponseModel<string>> {
    return this.http.post<IResponseModel<string>>(`Owner/AddHouse`, payload);
  }

  updateHouse(payload: IAddUpdateHouseRequestModel): Observable<IResponseModel<string>> {
    return this.http.post<IResponseModel<string>>(`Owner/UpdateHouse/${payload.id}`, payload);
  }

}
