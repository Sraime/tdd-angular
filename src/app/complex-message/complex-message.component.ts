import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-complex-message',
  templateUrl: './complex-message.component.html',
  styleUrls: ['./complex-message.component.css']
})
export class ComplexMessageComponent implements OnInit {

  message: string = "";

  isChangeModeActive: boolean;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.message = this.messageService.getMessage();
    this.isChangeModeActive = false;
  }

  changeModeAction() {
    this.isChangeModeActive = !this.isChangeModeActive;
  }
}
