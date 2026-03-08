import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for basic Angular features
import { ConsultancyService } from './consultancy.service';

@Component({
  selector: 'app-root',
  standalone: true, // Standard for Angular 17+
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // This variable holds the data from your Spring Boot Backend
  messageFromJava: string = 'Loading consultancy data...';

  // DEPENDENCY INJECTION: Just like @Autowired in Java
  constructor(private service: ConsultancyService) {}

  ngOnInit() {
    // Calling the "Resource" (Service) to fetch the JSON
    this.service.getConsultancyData().subscribe({
      next: (data) => {
        // data.message comes from your Java DTO 'message' field
        this.messageFromJava = data.message;
      },
      error: (err) => {
        console.error('Banking API Connection failed', err);
        this.messageFromJava = 'Service temporarily unavailable.';
      }
    });
  }
}
