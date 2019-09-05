import { LightningElement, api, track } from 'lwc';
import { projects } from 'lsd/data';

export default class Overlay extends LightningElement {
    @api overlayClassName;
    @api selectedProjectId;
    @track selectedProjectData;

    renderedCallback() {
        console.log('Overlay renderedCallback() projects', projects);
        console.log('Overlay this.selectedProjectId ', this.selectedProjectId);

        let newProject = projects.filter(
            item => item.id === this.selectedProjectId
        );
        this.selectedProjectData = newProject[0] ? newProject[0] : null;
        console.log('Overlay selectedProjectData', this.selectedProjectData);
    }

    toggleOverlayParent(e) {
        e.explicitOriginalTarget.classList.contains('visible') ||
        e.explicitOriginalTarget.classList.contains('visible')
            ? this.dispatchEvent(new CustomEvent('overlaytoggle'))
            : null;
    }
}
