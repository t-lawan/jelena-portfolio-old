export class SidebarLink {
    id;
    order;
    externalLink;
    title;
    url;

    constructor(id, order, title, url) {
        this.id = id;
        this.order = order;
        this.title = title;
        this.url = url;
    }
}