import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetService } from '../../../services/budget.service';
import { BudgetDialogComponent } from '../budget-dialog/budget-dialog.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  inputSearch: any;

  constructor(private budgetService: BudgetService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.data = this.budgetService.getBudgetData();
    this.filteredData = this.data;
  }

  filterProject(event: any): void {
    const name = event.target.value;

    if (this.inputSearch && name.length)
      this.data = this.filteredData.filter(x => x.project_name.toLowerCase().includes(this.inputSearch.toLowerCase()));
    else {
      this.data = this.budgetService.getBudgetData();
    }
  }

  openDialog(item?: any): void {

    const dialogRef = this.dialog.open(BudgetDialogComponent, {
      width: '700px',
      height: '550px',
      data: item ? item : null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.toDeletePj) {
        this.budgetService.deleteBudget(item.id);
        this.data = this.budgetService.getBudgetData();
      }
      else {
        if (result) {
          if (result.isNew)
            this.budgetService.addNewBudget(result);
          else {
            const updateRes = {
              project_name: result.pjName,
              status: result.status,
              progress: result.progress,
              tasks: result.tasks,
            };
            this.budgetService.updateBudget(item.id, updateRes)
          }
        }
      }
      console.log({result});
    });
  }

}
