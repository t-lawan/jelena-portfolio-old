export class JumbotronContent {
    id;
    title;
    type;
    text;
    image;

    constructor(id, title, type, text, image) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.text = text;
        this.image = image;
    }
}