import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private showModal = false;

  constructor() { }

  ngOnInit() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }
}
