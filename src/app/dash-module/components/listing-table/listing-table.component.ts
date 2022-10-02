import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Input() styledClass :string;
  @Input() isRowClickable: boolean;
  @Input() menuActions :any[];
  @Input() toShowAddBtn :boolean;
  @Input() addBtnLabel :string;
  @Input() toAddSelect :boolean;
  @Output() emitRowData = new EventEmitter<any>();
  @Output() createNewItem = new EventEmitter<any>();
  @Output() actionEmit = new EventEmitter<any>();

  dataSource = new MatTableDataSource([]);

  displayedColumns: any[] =[];

  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<any>(true, []);

  constructor(private _liveAnnouncer: LiveAnnouncer) {

  }

  ngOnInit(): void {
   this.displayedColumns = this.options.cols.map((col: any )=> col.header.toLowerCase());
    this.options.cols =this.options.cols.map((col: any) => col.header);

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.dataSource.data = this.data;
      this.dataSource.sort = this.sort;

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

  emitData(event: any) {
    this.emitRowData.emit(event);
  }

  openDialog(event: any) {
    this.createNewItem.emit({toCreateItem: true});
    // console.log({event})
  }


  actionClicked(action: any, item: any): void{

    const emittedValue ={
      actionName: action.name,
      ...item
    };
    this.actionEmit.emit(emittedValue);
    console.log({emittedValue});
  }

}
