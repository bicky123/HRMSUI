import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfileResponseModel } from '../models/responsesModels/profileResponseModel';
import { IResponseModel } from '../models/responsesModels/responseModel';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  public getProfile(userId: string): Observable<IResponseModel<IProfileResponseModel>> {
    return this.http.get<IResponseModel<IProfileResponseModel>>(`Owner/GetProfile/${userId}`);
  }

  public updateProfile(data: IProfileResponseModel): Observable<IResponseModel<string>> {
    return this.http.put<IResponseModel<string>>(`Owner/UpdateProfile/${data.userId}`, data);
  }

}
