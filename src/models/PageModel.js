export class PageModel {
    id;
    title;
    slug;
    content;

    constructor(id,title, slug, content) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.content = content;
    }
}