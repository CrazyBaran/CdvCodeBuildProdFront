import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
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
    scope: 'offline_access openid profile role email phone cdvJakub',
  },
  apis: {
    default: {
      url: 'https://localhost:44308',
      rootNamespace: 'cdvJakub',
    },
  },
} as Environment;
