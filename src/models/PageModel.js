export class PageModel {
    id;
    title;
    slug;
    content;
    show_video;
    video_url;

    constructor(id,title, slug, content, show_video, video_url) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.content = content;
        this.show_video = show_video;
        this.video_url = video_url;
    }
}