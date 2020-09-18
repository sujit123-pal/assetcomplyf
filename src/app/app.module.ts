import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';
import { ItemComponent } from './item/item.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ScanComponent } from './scanner/scan/scan.component'
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {AppUiModule} from 'src/app/scanner/scan/app-ui.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,NgxQRCodeModule,
    LayoutContainersModule,
    BrowserAnimationsModule,NgxDatatableModule,FormsModule,ReactiveFormsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ZXingScannerModule,AppUiModule,
    SimpleNotificationsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    AppComponent,
    ItemComponent,
    ScanComponent,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
