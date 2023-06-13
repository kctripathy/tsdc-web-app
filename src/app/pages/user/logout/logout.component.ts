import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminHelperService } from 'src/app/services/admin-helper.service';
import { setUserLoggedOnFlag } from 'src/app/store/icas.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(
    private store: Store,
    private adminHelper: AdminHelperService,
    private router: Router) {

      this.store.dispatch(setUserLoggedOnFlag({flag: false}));
      adminHelper.clearData();
      router.navigate(['']);
  }
}
