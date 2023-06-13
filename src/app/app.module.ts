import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionReducer, ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { FooterComponent } from './footer/footer.component';
import { EstablishmentListHomeComponent } from './establishment/list-home/list-home.component';
import { TableComponent } from './establishment/table/table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupModule } from './popup/popup.module';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CrestComponent } from './pages/about/crest/crest.component';
import { HistoryComponent } from './pages/about/history/history.component';
import { PrincipalMessageComponent } from './pages/principal-message/principal-message.component';
import { VisionMissionComponent } from './pages/about/vision-mission/vision-mission.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { DepartmentsComponent } from './pages/academics/departments/departments.component';
import { PublicationsComponent } from './pages/academics/publications/publications.component';
import { CalendarComponent } from './pages/academics/calendar/calendar.component';
import { StaffsComponent } from './pages/staffs/staffs.component';
import { icasReducer } from './store/icas.reducers';
import { ICASEffects } from './store/icas.effects';
import { SubjectsComponent } from './pages/academics/subjects/subjects.component';
import { SyllabusComponent } from './pages/academics/syllabus/syllabus.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NaacComponent } from './pages/admin/naac/naac.component';
import { IqacComponent } from './pages/admin/iqac/iqac.component';
import { AqarComponent } from './pages/admin/aqar/aqar.component';
import { GoverningBodyComponent } from './pages/admin/governing-body/governing-body.component';
import { OhepeeComponent } from './pages/admin/ohepee/ohepee.component';
import { LibraryComponent } from './pages/library/library.component';
import { RulesComponent } from './pages/library/rules/rules.component';
import { BooksComponent } from './pages/library/books/books.component';
import { CellsComponent } from './pages/cells/cells.component';
import { CareerDevelopmentComponent } from './pages/cells/career-development/career-development.component';
import { NccComponent } from './pages/cells/ncc/ncc.component';
import { YrcComponent } from './pages/cells/yrc/yrc.component';
import { GrievanceRedressalComponent } from './pages/cells/grievance-redressal/grievance-redressal.component';
import { UgcComponent } from './pages/cells/ugc/ugc.component';
import { NssComponent } from './pages/cells/nss/nss.component';
import { PshcComponent } from './pages/cells/pshc/pshc.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PhotoGalleryComponent } from './pages/gallery/photo-gallery/photo-gallery.component';
import { LinksGalleryComponent } from './pages/gallery/links-gallery/links-gallery.component';
import { AdministrationModule } from './administration/admin.module';
import { LogoutComponent } from './pages/user/logout/logout.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { RegistrationComponent } from './pages/alumni/registration/registration.component';
import { AssociationComponent } from './pages/alumni/association/association.component';
import { AgGridModule } from 'ag-grid-angular';

const reducers: ActionReducerMap<any> = {
  icas: icasReducer
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    AboutComponent,
    ErrorComponent,
    FooterComponent,
    EstablishmentListHomeComponent,
    TableComponent,
    CarouselComponent,
    CrestComponent,
    HistoryComponent,
    PrincipalMessageComponent,
    VisionMissionComponent,
    AcademicsComponent,
    DepartmentsComponent,
    PublicationsComponent,
    CalendarComponent,
    StaffsComponent,
    SubjectsComponent,
    SyllabusComponent,
    AdminComponent,
    NaacComponent,
    IqacComponent,
    AqarComponent,
    GoverningBodyComponent,
    OhepeeComponent,
    LibraryComponent,
    RulesComponent,
    BooksComponent,
    CellsComponent,
    CareerDevelopmentComponent,
    NccComponent,
    YrcComponent,
    GrievanceRedressalComponent,
    UgcComponent,
    NssComponent,
    PshcComponent,
    GalleryComponent,
    PhotoGalleryComponent,
    LinksGalleryComponent,
    LogoutComponent,
    AlumniComponent,
    RegistrationComponent,
    AssociationComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ICASEffects]),
    BrowserAnimationsModule,
    HttpClientModule,
    PopupModule,
    AdministrationModule,
    ReactiveFormsModule,
     AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
