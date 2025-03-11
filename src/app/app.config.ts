import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import * as firebaseConfig from '../../firebase-js-config.json';
import { connectDataConnectEmulator, getDataConnect, provideDataConnect } from '@angular/fire/data-connect';
import { connectorConfig } from '@movie/dataconnect';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => {
      const auth = getAuth();
      connectAuthEmulator(auth, 'http://localhost:9099');
      return auth;
    }),
    provideDataConnect(() => {
      const dc = getDataConnect(connectorConfig);
      connectDataConnectEmulator(dc, 'localhost', 9399);
      return dc;
    })
  ],
};
