import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPublications } from 'src/app/store/icas.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  downloadPath = '';
  isLoading = true;
  publications: any;

  constructor(private store: Store) {
    this.downloadPath = environment.downloadPath;
    this.store.select(selectPublications).subscribe((data)=> {
      if (data && data.length>0) {
        this.isLoading = false;
        this.publications = data
      }
    })
  }
}
