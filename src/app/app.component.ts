import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CusModalComponent } from './cus-modal/cus-modal.component';
import { CusModalMsgComponent } from './cus-modal-msg/cus-modal-msg.component';
import { CusModalService } from './cus-modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  closeResult: string;
  constructor(private modalService: NgbModal, private cusModalService: CusModalService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }

  cusOpen() {
    this.cusModalService.showMsg("標題", "登入成功!!!!");
  }

  cusSmOpen() {
    this.cusModalService.showMsgSm("系統訊息", "登入成功!!!!");
  }

  confirmOpen() {
     this.cusModalService.showConfirm("系統訊息", "是否確認刪除!!!!").then((result) => {
          console.log(`Closed with: ${result}`);
          this.cusModalService.showMsgSm("系統訊息", "資料已刪除!!!!");
      }, (reason) => {
          console.log(`Dismissed ${this.getDismissReason(reason)}`);
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
