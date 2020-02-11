import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { PaymentsenseCodingChallengeApiService } from '../services';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(private paymentsenseCodingChallengeApiService: PaymentsenseCodingChallengeApiService) { }

  public array: any;
  public displayedColumns = ['name', 'flag', 'delete'];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public currentPage = 0;
  public totalSize = 0;
  public pageSize = 10;
  public pageEvent: any;

  ngOnInit(): void {
    this.getData();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private getData() {
    this.paymentsenseCodingChallengeApiService.getCountries().subscribe(response => {
      this.dataSource = new MatTableDataSource<any>(response);
      this.dataSource.paginator = this.paginator;
      this.array = response;
      this.totalSize = this.array.length;
      this.iterator();
    });
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }
}
