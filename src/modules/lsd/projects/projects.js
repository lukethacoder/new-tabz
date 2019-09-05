import { LightningElement, api, track } from 'lwc';
import { projects } from 'lsd/data';

export default class Projects extends LightningElement {
    // @track images = staticImages;
    @track error = false;
    @track loading = false;
    @track overlayIsVisible = false;
    @track overlayClassName = 'lsd-overlay_container';
    @track selectedProjectId = '';
    subscription;
    projects = projects;

    renderedCallback() {
        let projectItems = this.template.querySelectorAll('.lsd-project__item');
        projectItems.forEach(item => {
            item.style.backgroundColor = item.dataset.bgColor;
        });
    }

    @api
    toggleOverlay(e) {
        this.selectedProjectId = e.explicitOriginalTarget.dataset.uuid;
        this.overlayIsVisible = !this.overlayIsVisible;

        this.overlayIsVisible
            ? (this.overlayClassName = 'lsd-overlay_container visible')
            : (this.overlayClassName = 'lsd-overlay_container');
    }
}
