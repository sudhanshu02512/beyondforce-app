import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DocsHome } from './docs-home/docs-home';
import { DocsPage } from './docs-page/docs-page';

export const routes: Routes = [

{
  path: '',
  component: Home
},
{
  path: 'docs/:category',
  component: DocsHome
},
{
  path: 'docs/:category/:page',
  component: DocsPage
}

];