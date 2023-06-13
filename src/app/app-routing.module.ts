import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { StaffsComponent } from './pages/staffs/staffs.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LibraryComponent } from './pages/library/library.component';
import { CellsComponent } from './pages/cells/cells.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AuthGuard } from './services/auth.guard';
import { LogoutComponent } from './pages/user/logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:what', component: AboutComponent },
  { path: 'academic/:what', component: AcademicsComponent },
  { path: 'admin/:what', component: AdminComponent,},
  { path: 'staffs/:what', component: StaffsComponent },
  { path: 'library/:what', component: LibraryComponent },
  { path: 'cells/:what', component: CellsComponent },
  { path: 'gallery/:what', component: GalleryComponent },
  { 
    path: 'administration',
    loadChildren: ()=> import('./administration/admin-routing.module').then(m=> m.AdminRoutingModule),
    canActivate: [AuthGuard]
  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
