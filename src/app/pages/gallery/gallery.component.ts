import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  aboutWhat: string | null = '';
  currentRoute: string = '';
  fullForm: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {


    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show progress spinner or progress bar
        //console.log('Route change detected');
        this.aboutWhat = this.activatedRoute.snapshot.paramMap.get('what');

      }

      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        //console.log(event);
        this.aboutWhat = this.activatedRoute.snapshot.paramMap.get('what');
         
      }

      if (event instanceof NavigationError) {
        // Hide progress spinner or progress bar
        // Present error to user
        console.log(event.error);
      }
    });
  }
}
