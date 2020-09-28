export class NavbarLink {
    id;
    order;
    externalLink;
    title;
    url;
    showInMobile;

    constructor(id, order, externalLink, title, url, showInMobile) {
        this.id = id;
        this.order = order;
        this.externalLink = externalLink;
        this.title = title;
        this.url = url;
        this.showInMobile = showInMobile;
    }
}