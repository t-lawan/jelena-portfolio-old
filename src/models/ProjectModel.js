export class ProjectModel {
    id;
    title;
    slug;
    display_description;
    display_images;
    display_video;
    description;
    images;
    video_id;


    constructor(id, title, slug, display_description, display_images, display_video, description, images, video_id) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.display_description = display_description;
        this.display_images = display_images;
        this.display_video = display_video;
        this.description = description;
        this.images = images;
        this.video_id = video_id;
    }
}