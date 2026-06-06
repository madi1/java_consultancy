import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { ContactForm } from './contact-form/contact-form';
import { Imports } from './imports/imports';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'book-consultation', component: ContactForm },
  { path: 'imports', component: Imports },
];