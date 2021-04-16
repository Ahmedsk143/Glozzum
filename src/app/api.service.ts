import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';

interface unsplashRes {
  urls: {
    regular: string;
    small?: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRandmPic() {
    return this.http
      .get<unsplashRes>('https://api.unsplash.com/photos/random', {
        params: {
          client_id: '8TC_p-bD2kWwgrIeFF2Qs5Wf6ilXwlx_DDOMDDuaBYw',
        },
        headers: {
          Authorization: '8TC_p-bD2kWwgrIeFF2Qs5Wf6ilXwlx_DDOMDDuaBYw',
        },
      })
      .pipe(
        map((response) => {
          return response.urls.regular;
        })
      );
  }
}
