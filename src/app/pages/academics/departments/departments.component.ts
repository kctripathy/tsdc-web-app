import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchDepartments } from 'src/app/store/icas.actions';
import { selectDepartments } from 'src/app/store/icas.selectors';

//import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  isLoading: boolean = true;
  departments: any;

  constructor(
    private store: Store
    ) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.store.dispatch(fetchDepartments());

    this.store.select(selectDepartments)
            .subscribe((depts) => {
              console.log('depts > selector:', depts);
              this.isLoading = false;
              this.departments = depts
    });

    //this.loadDepartments();
  }

  // loadDepartments() {
  //   setTimeout(() => {
  //     this.staffService
  //       .getDepartments()
  //       .subscribe((response: any)=> {
  //         console.log(response);
  //         this.departments = response.filter((row: any)=> row.IsActive === true);
  //         this.isLoading = false;
  //       });
  //     }, 100);
  // }
}
