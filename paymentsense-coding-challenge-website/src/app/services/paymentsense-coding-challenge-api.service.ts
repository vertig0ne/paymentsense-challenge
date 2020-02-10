import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsenseCodingChallengeApiService {
  constructor(private httpClient: HttpClient) {}

  public getHealth(): Observable<string> {
    return this.httpClient.get('https://95.216.68.42:5001/health', { responseType: 'text' });
  }

  public getCountries(): Observable<object[]> {
    return this.httpClient.get<object[]>('https://95.216.68.42:5001/countries', { responseType: 'json' });
  }
}
