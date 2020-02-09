export class HeaderLink {
    id;
    order;
    externalLink;
    title;
    url;
    jumbotron_content;
    showInMobile;

    constructor(id, order, externalLink, title, url, jumbotron_content, showInMobile) {
        this.id = id;
        this.order = order;
        this.externalLink = externalLink;
        this.title = title;
        this.url = url;
        this.jumbotron_content = jumbotron_content;
        this.showInMobile = showInMobile;
    }
}