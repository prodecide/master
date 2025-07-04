import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Mentor {
  name: string;
  expertise: string;
  bio: string;
  imageUrl: string;
}

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mentors.html',
  styleUrl: './mentors.css',
})
export class MentorsComponent {
  mentors: Mentor[] = [
    {
      name: 'Dr. Anya Sharma',
      expertise: 'Software Engineering & AI',
      bio: '20+ years experience in software architecture and machine learning. Passionate about guiding aspiring tech professionals.',
      imageUrl: 'https://placehold.co/112x112/D1E7DD/000000?text=Anya'
    },
    {
      name: 'Mr. David Lee',
      expertise: 'Product Management & Startups',
      bio: 'Former Head of Product at a successful tech startup. Specializes in product strategy and entrepreneurial ventures.',
      imageUrl: 'https://placehold.co/112x112/FFE5B4/000000?text=David'
    },
    {
      name: 'Ms. Emily Chen',
      expertise: 'UX/UI Design & Digital Arts',
      bio: 'Award-winning UX designer with a focus on user-centered design principles and creative problem-solving.',
      imageUrl: 'https://placehold.co/112x112/C6E2FF/000000?text=Emily'
    },
    {
      name: 'Dr. Omar Khan',
      expertise: 'Data Science & Analytics',
      bio: 'Lead Data Scientist with expertise in big data, statistical modeling, and business intelligence.',
      imageUrl: 'https://placehold.co/112x112/FFDAB9/000000?text=Omar'
    },
    {
      name: 'Ms. Sarah Jones',
      expertise: 'Marketing & Brand Strategy',
      bio: 'Experienced marketing executive, helping individuals build strong personal brands and navigate the marketing industry.',
      imageUrl: 'https://placehold.co/112x112/E6E6FA/000000?text=Sarah'
    },
    {
      name: 'Mr. Alex Rodriguez',
      expertise: 'Finance & Investment Banking',
      bio: 'Financial analyst with a deep understanding of market trends, investment strategies, and corporate finance.',
      imageUrl: 'https://placehold.co/112x112/FFC0CB/000000?text=Alex'
    }
  ];
}
