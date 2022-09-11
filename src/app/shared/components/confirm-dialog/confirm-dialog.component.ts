import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      cancelText: string,
      confirmText: string,
      message: string,
      title: string
    },
    private dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  @HostListener("keydown.esc")
  public onEsc() {
    this.close(false);
  }

  public cancel() {
    this.close(false);
  }

  public close(value: boolean) {
    this.dialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }

}
