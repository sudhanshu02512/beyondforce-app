import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageViewer } from './page-viewer/page-viewer';

export const routes: Routes = [

{
  path: '',
  component: Home
},

{
  path: 'docs/:category/:page',
  component: PageViewer
}

];