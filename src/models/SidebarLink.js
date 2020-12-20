export class SidebarLink {
    id;
    order;
    title;
    url;
    isEmail;
    email;
    isExternalLink;

    constructor(id, order, title, url, isEmail, email, isExternalLink) {
        this.id = id;
        this.order = order;
        this.title = title;
        this.url = url;
        this.isEmail = isEmail;
        this.email = email;
        this.isExternalLink = isExternalLink;
    }
}