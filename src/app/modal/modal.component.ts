import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private showModal = false;
  private showLoader = false;
  private term = '';
  private limit: number;

  constructor(private router: Router, private _data: DataService) { }

  @Output() close: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  closeModal() { // emitting event from modal component to Home component to close form modal
    this.close.emit(null);
  }

  searchResults(e) { // Calling data service to fetch data from API
    e.preventDefault(); // To stop default page refresh behaviour

    this.showLoader = true;
    setTimeout(() => { // Just to show loading image
      this._data.getResults(this.term, this.limit)
        .subscribe(res => { // Route to details page when data has been loaded
          this.showLoader = false;
          this.router.navigate(['/details']);
        });
    }, 1000);
  }
}
