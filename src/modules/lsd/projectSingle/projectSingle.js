import { LightningElement, api, track } from 'lwc';
import { projects } from 'lsd/data';

export default class ProjectSingle extends LightningElement {
    @api project;
}
