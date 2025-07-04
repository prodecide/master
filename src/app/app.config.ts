import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes, withViewTransitions } from '@angular/router';

import { HomeComponent } from './home/home';
import { DecideComponent } from './decide/decide';
import { MentorsComponent } from './mentors/mentors';
import { JoinMentorComponent } from './join-mentor/join-mentor';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'decide', component: DecideComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: 'join-mentor', component: JoinMentorComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideZoneChangeDetection({ eventCoalescing: true }) // Add this
  ]
};
