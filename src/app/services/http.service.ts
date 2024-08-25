import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly httpClient: HttpClient) {}

  public get<T>(url: string): Promise<T> {
    return new Promise((res, rej) => {
      this.httpClient.get<T>(url).subscribe({
        next(value) {
          res(value);
        },
        error(err) {
          rej(err);
        },
      });
    });
  }
}
