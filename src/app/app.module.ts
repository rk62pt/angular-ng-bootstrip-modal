import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CusModalComponent } from './cus-modal/cus-modal.component';
import { CusModalService } from './cus-modal.service';
import { CusModalModule } from './cus-modal/cus-modal.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, CusModalModule ],
  declarations: [ AppComponent, HelloComponent, CusModalComponent, ],
  entryComponents: [],
  bootstrap:    [ AppComponent ],
  providers: [ CusModalService ]
})
export class AppModule { }
