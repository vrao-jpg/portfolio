import { Component, HostListener } from '@angular/core';
import { trigger, transition , style, animate, state, group } from '@angular/animations';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showDropDown', [
      state('in', style({
        'height': '140px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
        animate('300ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('500ms ease-in-out', style({
          'height': '0px'
        })),
        animate('600ms ease-in-out', style({
          'visibility': 'hidden'
        })),
      ])
      ]),
      transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('800ms ease-in-out', style({
          'height': '140px'
        })),
        animate('600ms ease-in-out', style({
          'opacity': '1'
        })),
      ])
      ])
    ])
  ]
})
export class HeaderComponent{
  linkList = ['About', 'Career', 'Contact'];
  showMenu : boolean= false;
  animationState = 'out';
  menuOnTop :boolean = false;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const menu = document.getElementById('menubar');
    console.warn(menu.getBoundingClientRect());
    if (menu.getBoundingClientRect().bottom < -20) {
      this.menuOnTop = true;
    } else {
      this.menuOnTop = false;
    }
  }
  toggleDiv() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
    console.warn(this.animationState);
    this.showMenu = !this.showMenu;
  }
}