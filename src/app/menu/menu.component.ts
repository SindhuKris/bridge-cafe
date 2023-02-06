import { Component } from '@angular/core';

 type menu={
  name:string
 };

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

public menus=[
  {
    name:"dishes"
  },
  {
    name:"desserts"
  },
  {
    name:"maincourse"
  }
];


}
