import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoproprietaireListComponent} from './pages/coproprietaire/coproprietaire-list/coproprietaire-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {
  CoproprietaireCreateComponent
} from './pages/coproprietaire/coproprietaire-create/coproprietaire-create.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CessionsCreateComponent } from './pages/cessions/cessions-create/cessions-create.component';
import { CessionsListComponent } from './pages/cessions/cessions-list/cessions-list.component';
import {authInterceptorProviders} from "./_helpers/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    CoproprietaireListComponent,
    CoproprietaireCreateComponent,
    CessionsCreateComponent,
    CessionsListComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,



  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpClientModule, authInterceptorProviders],

  bootstrap: [AppComponent],
  entryComponents: [CoproprietaireCreateComponent,CessionsCreateComponent]
})
export class AppModule { }
