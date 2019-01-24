import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let styleDefault, hide, platformReadySpy, platformSpy;

  beforeEach(async(() => {
    styleDefault = jest.fn();
    hide = jest.fn();
    platformReadySpy = jest.fn(() => Promise.resolve());
    platformSpy = { ready: platformReadySpy };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: { styleDefault }},
        { provide: SplashScreen, useValue: { hide }},
        { provide: Platform, useValue: platformSpy },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(styleDefault).toHaveBeenCalled();
    expect(hide).toHaveBeenCalled();
  });

  // TODO: add more tests!

});
