import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-join-mentor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './join-mentor.html',
  styleUrl: './join-mentor.css',
})
export class JoinMentorComponent {
  mentorForm = {
    name: '',
    email: '',
    expertise: '',
    bio: ''
  };
  formSubmitted: boolean = false;

  onSubmit() {
    // In a real application, you would send this data to a backend service.
    console.log('Mentor Application Submitted:', this.mentorForm);
    this.formSubmitted = true;
    // Optionally, reset the form after submission
    // this.mentorForm = { name: '', email: '', expertise: '', bio: '' };
  }
}