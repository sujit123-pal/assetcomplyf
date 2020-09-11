import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import { Subscription } from 'rxjs';
import {
  SidebarService,
  ISidebar,
} from 'src/app/containers/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  subscription: Subscription;
  constructor(
    private sidebarService: SidebarService,
    private shepherdService: ShepherdService
  ) {}

  ngOnInit() {
    this.subscription = this.sidebarService.getSidebar().subscribe(
      (res) => {
        this.sidebar = res;
      },
      (err) => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngAfterViewInit() {
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.defaultStepOptions = {
      classes: 'shepherd-theme-custom',
    };
    this.shepherdService.addSteps([
      {
        id: 'intro',
        attachTo: {
          element: '#first-element',
          on: 'bottom'
        },
        buttons: [
          {
            classes: 'shepherd-button-secondary',
            text: 'Exit',
            type: 'cancel',
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next',
            action: this.shepherdService.next,
          },
        ],
        cancelIcon: {
          enabled: true,
        },
        scrollTo: true,
        title: 'Welcome to Asset Comply',
        text: ['Default Page Headers'],
      },
      {
        text: 'This is a side navigation, duh!',
        attachTo: {
          element: '#second-element',
          on: 'right'
        },
        buttons: [
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next',
            action: this.shepherdService.next,
          },
        ],
      },
      {
        text: 'lets check Settings!',
        attachTo: {
          element: '#third-element',
          on: 'bottom'
        },
        buttons: [
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next',
            action: this.shepherdService.next,
          },
        ],
      },
      {
        text: 'Hey! It is your profile!',
        attachTo: {
          element: '#fourth-element',
          on: 'bottom'
        },
        buttons: [
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next',
            action: this.shepherdService.next,
          },
        ],
      },
      {
        text: 'Lets explore the menu',
        attachTo: {
          element: '#fifth-element',
          on: 'right'
        },
        buttons: [
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next',
            action: this.shepherdService.next,
          },
        ],
      },
      {
        text: 'This is the end of your tour bro',
        attachTo: {
          element: '#sixth-element',
          on: 'top'
        },
        buttons: [
          {
            classes: 'shepherd-button-primary',
            text: 'Done!',
            type: 'next',
          },
        ],
      },
    ]);
    this.shepherdService.start();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
