import { Component, Input, OnInit } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cus-modal',
  templateUrl: './cus-modal.component.html',
  styleUrls: ['./cus-modal.component.css']
})
export class CusModalComponent implements OnInit {

  @Input() title = `Information`;

  @Input() isConfirm;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {

  }

}