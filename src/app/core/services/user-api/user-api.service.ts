import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { ApiSuccess, UserInfo } from '@app/shared';

const USER_API_PATH = `${environment.apiEndpointTemplate}/user`.replace(
  '{{gateway}}',
  environment.userApiGateway
);

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  getUserApiPath(): string {
    return USER_API_PATH;
  }

  getUser(userId: string, refreshCache?: boolean): Observable<UserInfo> {
    // TODO: Overriding now for dev purpose. Remove it later once user flow is completed.
    userId = 'linjith.kunnon@gmail.com';
    return this.httpClient.post<UserInfo>(
      `${USER_API_PATH}/get`,
      { userId },
      {
        params: {
          cache: 'yes',
          expiry: '12',
          refresh: refreshCache ? 'yes' : 'no',
        },
      }
    );
  }

  setUserBookmarks(userId: string, capsuleId: string): Observable<any> {
    // TODO: Overriding now for dev purpose. Remove it later once user flow is completed.
    userId = 'linjith.kunnon@gmail.com';
    return this.httpClient.post(`${USER_API_PATH}/bookmark`, { userId, capsuleId });
  }

  removeUserBookmarks(userId: string, capsuleId: string): Observable<any> {
    // TODO: Overriding now for dev purpose. Remove it later once user flow is completed.
    userId = 'linjith.kunnon@gmail.com';
    return this.httpClient.post(`${USER_API_PATH}/removeBookmark`, { userId, capsuleId });
  }

  followTopic(userId: string, topicCode: string): Observable<ApiSuccess> {
    // TODO: Overriding now for dev purpose. Remove it later once user flow is completed.
    userId = 'linjith.kunnon@gmail.com';
    return this.httpClient.post<ApiSuccess>(`${USER_API_PATH}/follow`, { userId, topicCode });
  }

  createUser(): void {
    throw new Error('Not yet implemented.');
  }
}
