import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-cus-modal-msg',
  templateUrl: './cus-modal-msg.component.html',
  styleUrls: ['./cus-modal-msg.component.css']
})
export class CusModalMsgComponent implements OnInit {

  @Input() title = `Information`;

  @Input() msg = `Information`;

  @Input() isConfirm;

  constructor() { }

  ngOnInit() {
    console.log(this.isConfirm);
  }

}