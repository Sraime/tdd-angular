import { Component, OnInit } from "@angular/core";

@Component({
  selector: "edit-text",
  templateUrl: "./edit-text.component.html",
  styleUrls: ["./edit-text.component.scss"],
})
export class EditTextComponent implements OnInit {
  message: string = "default message";
  isEditMode: boolean;
  constructor() {}

  ngOnInit(): void {}

  switchToEditMode() {
    this.isEditMode = true;
  }
}
