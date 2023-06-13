import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminHelperService } from '../services/admin-helper.service';
import { UserLoginComponent } from '../popup/user-login/user-login.component';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { selectLoggedOnUserFlag } from '../store/icas.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  isLoggedOn: boolean = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private adminHelper: AdminHelperService
  ) {
      
  }
  ngOnInit(): void {

    this.isLoggedOn = this.adminHelper.isLoggedIn();
    this.store.select(selectLoggedOnUserFlag).subscribe((flag)=> 
    {
      this.isLoggedOn = flag;
      console.log('ngOnInit this.isLoggedOn', this.isLoggedOn);
    }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('ngOnChanges this.isLoggedOn', this.isLoggedOn);

  }

  openLoginPopup() {
    const data = { title: 'Login'};
    const config = this.adminHelper.configPopup(500, 250, data);
    const dialogRef = this.dialog.open(UserLoginComponent, config);
    dialogRef.afterClosed().subscribe((data)=> {
        console.log('afterClosed > data', data);
    })
  }
   
}
