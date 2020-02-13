import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsenseCodingChallengeApiService {
  constructor(private httpClient: HttpClient) {}

  public getHealth(): Observable<string> {
    return this.httpClient.get('https://127.0.0.1:5001/health', { responseType: 'text' });
  }

  public getCountries(): Observable<object[]> {
    return this.httpClient.get<object[]>('https://127.0.0.1:5001/countries', { responseType: 'json' });
  }
}
