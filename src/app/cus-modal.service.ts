import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CusModalComponent } from './cus-modal/cus-modal.component';
import { CusModalMsgComponent } from './cus-modal-msg/cus-modal-msg.component';

@Injectable()
export class CusModalService {

  constructor(private modalService: NgbModal) { }

  showMsg(title: string, content: string) {
    const modalRef = this.modalService.open(CusModalMsgComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.content = content;
  }

}