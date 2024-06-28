import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  meetings = {
    '2024-06-05': ['Dring Coffee', 'Learn React', 'Sleep'],
    '2024-06-06': ['Dring Coffee', 'Learn Angular', 'Sleep'],
  };
}
