import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchEstablishments } from 'src/app/store/icas.actions';
import { selectPhotoGallery } from 'src/app/store/icas.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  downloadPath = '';
  isLoading = true;
  photos: any;

  constructor(private store: Store) {
    this.downloadPath = environment.downloadPath;
    this.store.select(selectPhotoGallery).subscribe((data)=> {
       
      if (data && data.length > 0) {
        this.isLoading = false;
        this.photos = data
      }
      else {
        console.log('PhotoGalleryComponent > fetchEstablishments dispatch');
        this.isLoading = true;
        this.store.dispatch(fetchEstablishments());
      }
    })
  }

  loadPhotoPopup(photo: any) {
    //alert(photo)
  }
}
