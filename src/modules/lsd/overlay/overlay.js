import { LightningElement, api, track } from 'lwc';
import { projects } from 'lsd/data';

export default class Overlay extends LightningElement {
    @api overlayClassName;
    @api selectedProjectId;
    @track selectedProjectData;
    @track showScrolledHeaderClass = 'lsd-overlay_wrapper_header';
    @track showScrolledImageClass = 'lsd-overlay_wrapper_image';

    renderedCallback() {
        let newProject = projects.filter(
            item => item.id === this.selectedProjectId
        );
        this.selectedProjectData = newProject[0] ? newProject[0] : null;

        // lsd-overlay_wrapper_image_src

        let projectBg = this.template.querySelector('[data-header-image]');

        let projectLogo = this.template.querySelector('[data-logo]');
        projectBg && projectLogo
            ? (projectBg.style.backgroundColor = projectLogo.dataset.brandColor)
            : null;
        projectLogo
            ? (projectLogo.style.backgroundImage = `url("${projectLogo.dataset.logo}")`)
            : null;

        let wrapperContent = this.template.querySelector(
            '.lsd-overlay_wrapper_content'
        );
        wrapperContent
            ? wrapperContent.addEventListener(
                  'scroll',
                  this.handleScroll.bind(this)
              )
            : null;
    }

    @api
    handleScroll(e) {
        e.target.scrollTop <= 50
            ? (this.showScrolledHeaderClass = 'lsd-overlay_wrapper_header') &&
              (this.showScrolledImageClass = 'lsd-overlay_wrapper_image')
            : (this.showScrolledHeaderClass =
                  'lsd-overlay_wrapper_header active') &&
              (this.showScrolledImageClass =
                  'lsd-overlay_wrapper_image active');
    }

    toggleOverlayParent(e) {
        e.explicitOriginalTarget.classList.contains('visible') ||
        e.explicitOriginalTarget.classList.contains('visible')
            ? this.dispatchEvent(new CustomEvent('overlaytoggle')) &&
              (this.showScrolledImageClass = 'lsd-overlay_wrapper_image') &&
              (this.showScrolledHeaderClass = 'lsd-overlay_wrapper_header')
            : null;
    }
}
