import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CusModalComponent } from './cus-modal/cus-modal.component';

@Injectable()
export class CusModalService {

  constructor(private modalService: NgbModal) { }

  showMsg(title: string, msg: string) {
    const modalRef = this.modalService.open(CusModalComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.msg = msg;
  }

  showMsgSm(title: string, msg: string) {
    const modalRef = this.modalService.open(CusModalComponent, {size:'sm'});
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.msg = msg;
    return modalRef.result;
  }

  showConfirm(title: string, msg: string) {
    const modalRef = this.modalService.open(CusModalComponent, {size:'sm', backdrop:'static'});
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.msg = msg;
    modalRef.componentInstance.isConfirm = true;
    return modalRef.result;
  }

  showBackdrop(title: string, msg: string) {
    const modalRef = this.modalService.open(CusModalComponent, {size:'sm', backdrop:'static'});
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.msg = msg;
    return modalRef.result;
  }

}