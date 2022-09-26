import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listing-table',
  templateUrl: './listing-table.component.html',
  styleUrls: ['./listing-table.component.scss']
})
export class ListingTableComponent implements OnInit,AfterViewInit {
  @Input() options: any;
  @Input() data :any;
  dataSource = new MatTableDataSource([]);

  displayedColumns: any[] =[];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {

  }

  ngOnInit(): void {
   this.displayedColumns = this.options.cols.map((col: any )=> col.header.toLowerCase());
    this.options.cols =this.options.cols.map((col: any) => col.header);
    // if(this.data?.length) {
    //   this.dataSource = new MatTableDataSource(this.data);
    //   // this.dataSource.data = this.data;
    //   this.dataSource.sort = this.sort;
    // }
    // this.dataSource.sort = null;
    // this.dataSource = new MatTableDataSource(this.data);


  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.dataSource.data = this.data;
      this.dataSource.sort = this.sort;

      console.log('datasource=> ', this.dataSource);
    },0);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
