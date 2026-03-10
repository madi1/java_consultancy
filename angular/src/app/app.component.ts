import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultancyService } from './consultancy.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  providers: [ConsultancyService]
})
export class AppComponent implements OnInit {
  private service = inject(ConsultancyService);
  
  // This defines the variable the HTML is looking for
  messageFromJava: string = '';

  ngOnInit() {
    this.service.getDisplayData().subscribe({
      next: (data) => {
        // This maps the "message" from your Java HashMap to the variable
        this.messageFromJava = data.message;
      },
      error: (err) => {
        console.error('Backend connection failed', err);
        this.messageFromJava = 'Could not connect to Java Backend';
      }
    });
  }
}
