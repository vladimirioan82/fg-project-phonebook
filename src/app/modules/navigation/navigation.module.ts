import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // we need it when we use routeLink directive
// My imports
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';

const LOADING_AND_EXPORTING = {
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationMenuComponent,
    SidebarNavigationComponent
  ],
  imports: []
};

@NgModule({
  declarations: [ ...LOADING_AND_EXPORTING.declarations ],
  imports: [
    RouterModule,
    ...LOADING_AND_EXPORTING.imports
  ],
  exports: [
    ...LOADING_AND_EXPORTING.declarations,
    ...LOADING_AND_EXPORTING.imports
  ]
})
export class NavigationModule { }
