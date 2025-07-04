import 'zone.js'; // Add this at the top
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig) // Just pass appConfig directly
  .catch((err) => console.error(err));