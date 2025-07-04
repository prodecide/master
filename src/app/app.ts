import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like ngIf, ngFor etc.

@Component({
  selector: 'app-root', // The HTML tag used to embed this component
  standalone: true, // Marks this component as standalone, meaning it manages its own imports
  imports: [RouterOutlet, CommonModule], // Import RouterOutlet to enable routing, CommonModule for common directives
  template: `
    <div class="min-h-screen bg-white text-gray-800 font-inter">
      <!-- RouterOutlet is where the content of the currently active route component will be rendered -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [] // No component-specific styles defined here, relying on Tailwind CSS
})
export class AppComponent {
  title = 'ProDecide'; // A simple property for the app title
}