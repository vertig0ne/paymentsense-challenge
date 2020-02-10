import { Component, OnInit } from '@angular/core';
import { PaymentsenseCodingChallengeApiService } from '../services/paymentsense-coding-challenge-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  countries: Observable<object[]>;

  constructor(private psService: PaymentsenseCodingChallengeApiService) { }

  ngOnInit(): void {
    this.countries = this.psService.getCountries();
  }

}
