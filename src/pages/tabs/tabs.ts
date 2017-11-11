import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactListPage } from '../contact-list/contact-list';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactListPage;
  tab3Root = AboutPage;

  constructor() {}

}
