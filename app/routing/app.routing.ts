
import { Routes, RouterModule } from '@angular/router';

import { TeamPlanComponent } from '../components/teamplan/teamplan.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TeamPlanComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
