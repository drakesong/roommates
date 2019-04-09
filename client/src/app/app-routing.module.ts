import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
    {
        path: 'explore',
        loadChildren: './explore/explore.module#ExploreModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
