import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListAwesomeComponent} from './list-awesome/list-awesome.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditAwesomeComponent} from './edit-awesome/edit-awesome.component';
import {CreateAwesomeComponent} from './create-awesome/create-awesome.component';


const routes: Routes = [
  {path: '', component: ListAwesomeComponent},
  {path: 'create', component: CreateAwesomeComponent},
  {path: ':id/edit', component: EditAwesomeComponent},
  {path: ':id/update', component: EditAwesomeComponent},
];

@NgModule({
  declarations: [ListAwesomeComponent, EditAwesomeComponent, CreateAwesomeComponent],
  exports: [
    ListAwesomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AwesomesModule {
}
