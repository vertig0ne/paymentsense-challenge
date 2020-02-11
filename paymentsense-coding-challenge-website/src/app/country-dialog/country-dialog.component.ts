import { Component, OnInit, Inject, EventEmitter, LOCALE_ID } from '@angular/core';
import { formatNumber } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymentsenseCodingChallengeApiService } from '../services';

@Component({
  selector: 'app-country-dialog',
  templateUrl: './country-dialog.component.html',
  styleUrls: ['./country-dialog.component.scss']
})
export class CountryDialogComponent implements OnInit {

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<CountryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(LOCALE_ID) public locale: string,
    public paymentsenseCodingChallengeApiService: PaymentsenseCodingChallengeApiService
  ) { }

  ngOnInit(): void { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public formatPopulation(population: number): string {
    return formatNumber(population, this.locale);
  }

  public formatLanguages(languages: any): string {
    return languages.map((x: { name: string; }) => x.name).join(', ');
  }

  public formatCurrencies(currencies: any): string {
    return currencies.map((x: { code: string; }) => x.code).join(', ');
  }
}
