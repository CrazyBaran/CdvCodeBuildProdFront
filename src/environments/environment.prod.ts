import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'cdvJakub',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44308',
    redirectUri: baseUrl,
    clientId: 'cdvJakub_App',
    responseType: 'code',
    scope: 'offline_access cdvJakub',
  },
  apis: {
    default: {
      url: 'https://localhost:44308',
      rootNamespace: 'cdvJakub',
    },
  },
} as Environment;
