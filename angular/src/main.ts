import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure your component file is named app.component.ts

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
