export class SidebarLink {
    id;
    order;
    externalLink;
    title;
    url;
    isEmail;
    email;

    constructor(id, order, title, url, isEmail, email) {
        this.id = id;
        this.order = order;
        this.title = title;
        this.url = url;
        this.isEmail = isEmail;
        this.email = email;
    }
}