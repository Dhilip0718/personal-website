import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../app/components/header/header.component';

export const routes: Routes = [
    { path: 'home', component: HeaderComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // Add additional routes as necessary
  ];
  

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
