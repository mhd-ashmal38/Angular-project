import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  @Output() close = new EventEmitter;
  detailsVisible = false;

  onToggleDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
