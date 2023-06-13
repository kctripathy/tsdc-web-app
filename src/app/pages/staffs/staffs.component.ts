import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { StaffDetailsComponent } from 'src/app/popup/staff-details/staff-details.component';
import { AdminHelperService } from 'src/app/services/admin-helper.service';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
  isLoading: boolean = true;
  aboutWhat: string | null= '';
  currentRoute: string = '';
  staffs: any;
  
  constructor(
    private dialog: MatDialog,
    private adminHelper: AdminHelperService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private staffService: StaffService
    ) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show progress spinner or progress bar
            //console.log('NavigationStart Route change detected');
            //this.aboutWhat = this.activatedRoute.snapshot.paramMap.get('what');
            //this.LoadStaffs();
        }
  
        if (event instanceof NavigationEnd) {
            // Hide progress spinner or progress bar
            this.currentRoute = event.url;          
            //console.log('NavigationEnd', event);
            this.aboutWhat = this.activatedRoute.snapshot.paramMap.get('what');
            this.LoadStaffs();
  
        }
  
        if (event instanceof NavigationError) {
             // Hide progress spinner or progress bar
            // Present error to user
            //console.log(event.error);
        }
    });
  }

  ngOnInit(): void {
      //this.LoadStaffs();
      //console.log('on init this.aboutWhat = ', this.aboutWhat)
  }

  LoadStaffs() {
    setTimeout(() => {
      this.staffService
        .getStaffs()
        .subscribe((response: any)=> {
          this.staffs = response.filter((row: any)=> row.TeachingOrNonTeaching === this.aboutWhat?.substring(0,1).toUpperCase());
          this.isLoading = false;
        });
      }, 100);
  }

  viewDetails(emp: any) {
    //console.log(emp);
    const data = { employee: emp };
    const config = this.adminHelper.configPopup(800, 600, data);
    //this.dialog.open(StaffDetailsComponent, config);
  }
}
