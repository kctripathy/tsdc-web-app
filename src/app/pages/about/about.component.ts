import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError  } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
aboutWhat: string | null= '';
currentRoute: string = '';

constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit> this.aboutWhat',this.aboutWhat);
  }
  
  
  
  ngOnInit(): void {
    // this.aboutWhat = this.activatedRoute.snapshot.paramMap.get('what');
    // console.log('ngOnInit> this.aboutWhat',this.aboutWhat);

    
  }


  ngOnDestroy(): void {
   // this.aboutWhat = this.activatedRoute.snapshot.paramMap.get('what');
   // console.log('ngOnDestroy> this.aboutWhat',this.aboutWhat);
  }


}
