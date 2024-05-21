import { InjectionToken } from "@angular/core";

export interface UrlBase {
  url: string;
}

export const URL_CONFIG = new InjectionToken<UrlBase>('Base url to query the api');

export const MY_URL_API = 'http://localhost:3000/api/v1';
