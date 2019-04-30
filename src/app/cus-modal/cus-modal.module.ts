import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CusModalComponent } from './cus-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  entryComponents: [
    CusModalComponent
  ],
  declarations: [
  ]
})
export class CusModalModule { }