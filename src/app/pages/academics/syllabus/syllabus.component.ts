import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchEstablishments } from 'src/app/store/icas.actions';
import { selectSyllabus } from 'src/app/store/icas.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent {
  downloadPath = '';
  isLoading = true;
  syllabuses: any;

  constructor(private store: Store) {
    this.downloadPath = environment.downloadPath;
    this.store.select(selectSyllabus).subscribe((data)=> {
      if (data && data.length>0) {
        this.isLoading = false;
        this.syllabuses = data
      }
      else {
        console.log('SyllabusComponent > fetchEstablishments dispatch');
        this.isLoading = true;
        this.store.dispatch(fetchEstablishments());
      }
    })
  }
}
