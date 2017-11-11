import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MockComponent } from './components/mock/mock.component';

const APP_ROUTES: Routes = [
  {path: '', component : MockComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
