import { LightningElement } from 'lwc';
import { getActiveTab, showCookiesForTab } from '../helpers/helpers';

export default class App extends LightningElement {
    // connectedCallback() {
    //     var API = chrome || browser;
    //     console.log('connectedCallback ', API);
    //     let theCookies = getActiveTab(API).then(API, showCookiesForTab);
    //     console.log('theCookies => ', theCookies);
    // }
}
