import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SwipeComponent } from './components/swipe/swipe.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ConvoComponent } from './components/convo/convo.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const APP_ROUTES: Routes = [
  // Home
  {path: '', component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'user/:userId', component : SwipeComponent},
  {path: 'user/:userId/schedule', component : ScheduleComponent},
  {path: 'user/:userId/settings', component : SettingsComponent},
  {path: 'user/:userId/matches', component : MatchesComponent},
  {path: 'user/:userId/matches/:matchId', component : ConvoComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
