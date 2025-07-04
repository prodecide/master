import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Question {
  id: number;
  text: string;
  options: string[];
  selectedOption: string | null;
}

@Component({
  selector: 'app-decide',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
 templateUrl: './decide.html',
  styleUrls: ['./decide.css']
})
export class DecideComponent implements OnInit {
  questions: Question[] = [];
  allQuestionsAnswered: boolean = false;

  ngOnInit(): void {
    this.questions = [
      {
        id: 1,
        text: 'Which type of tasks do you enjoy the most?',
        options: [
          'Solving complex technical problems',
          'Working with people and helping them',
          'Creating visual designs and art',
          'Analyzing data and making predictions'
        ],
        selectedOption: null
      },
      {
        id: 2,
        text: 'What kind of work environment do you prefer?',
        options: [
          'Fast-paced and innovative',
          'Collaborative and team-oriented',
          'Structured and detail-focused',
          'Flexible and creative'
        ],
        selectedOption: null
      },
      {
        id: 3,
        text: 'Which skill are you most interested in developing further?',
        options: [
          'Programming and coding',
          'Communication and negotiation',
          'Graphic design and multimedia',
          'Statistical analysis'
        ],
        selectedOption: null
      },
      {
        id: 4,
        text: 'What motivates you in a career?',
        options: [
          'Continuous learning and new challenges',
          'Making a positive impact on society',
          'Expressing creativity',
          'Achieving measurable results'
        ],
        selectedOption: null
      }
    ];
  }

  // This method will be called whenever a radio button is selected
  // We can use a getter to check if all questions are answered dynamically
  get areAllQuestionsAnswered(): boolean {
    this.allQuestionsAnswered = this.questions.every(q => q.selectedOption !== null);
    return this.allQuestionsAnswered;
  }
}
