import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CusModalComponent } from './cus-modal/cus-modal.component';
import { CusModalMsgComponent } from './cus-modal-msg/cus-modal-msg.component';
import { CusModalService } from './cus-modal.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, CusModalComponent, CusModalMsgComponent ],
  entryComponents: [
    CusModalMsgComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [CusModalService]
})
export class AppModule { }
