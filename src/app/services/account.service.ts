import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOwnerRegistrationRequestModel } from '../models/requestModels/ownerRegistrationRequestModel';
import { ILoginResponseModel } from '../models/responsesModels/loginResponseModel';
import { IResponseModel } from '../models/responsesModels/responseModel';
import { IRoleResponseModel } from '../models/responsesModels/roleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public login(body: { email: string, password: string }): Observable<IResponseModel<ILoginResponseModel>> {
    return this.http.post<IResponseModel<ILoginResponseModel>>('account/login', body);
  }

  public getRoles(): Observable<IResponseModel<Array<IRoleResponseModel>>> {
    return this.http.get<IResponseModel<Array<IRoleResponseModel>>>('account/GetRoles');
  }

  public updateRole(body: { userId: string, roleId: string }): Observable<IResponseModel<string>> {
    return this.http.put<IResponseModel<string>>('account/UpdateRole', body);
  }

  public updateToken(userId: string): Observable<IResponseModel<ILoginResponseModel>> {
    return this.http.put<IResponseModel<ILoginResponseModel>>(`account/UpdateToken/${userId}`, null);
  }

  public ownerRegistration(body: IOwnerRegistrationRequestModel): Observable<IResponseModel<ILoginResponseModel>> {
    return this.http.post<IResponseModel<ILoginResponseModel>>(`account/Register/Owner`, body);
  }

}
