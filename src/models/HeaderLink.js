export class HeaderLink {
    id;
    order;
    externalLink;
    title;
    url;

    constructor(id, order, externalLink, title, url) {
        this.id = id;
        this.order = order;
        this.externalLink = externalLink;
        this.title = title;
        this.url = url;
    }
}