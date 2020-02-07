import { HeaderLink } from "../models/HeaderLink";
import { SidebarLink } from "../models/SidebarLink";
import { JumbotronContent } from "../models/JumbotronContent";

export class Convert {
    static toHeaderLinkModel = contentfulModel => {
        return new HeaderLink(
            contentfulModel.contentful_id,
            contentfulModel.order,
            contentfulModel.externalLink,
            contentfulModel.title,
            contentfulModel.url,
        );
    }

    static toJumbotronContentModel = contentfulModel => {
        return new JumbotronContent(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.type,
            contentfulModel.text,
            contentfulModel.image,
        );
    }

    static toSidebarLinkModel = contentfulModel => {
        return new SidebarLink(
            contentfulModel.contentful_id,
            contentfulModel.order,
            contentfulModel.title,
            contentfulModel.url,
            contentfulModel.isEmail,
            contentfulModel.email,
        );
    }
    static toModelArray = (query, modelConverter) => {
        const modelArray = []
        query.edges.forEach((contentfulModel) => {
          let model = modelConverter(contentfulModel.node)
          modelArray.push(model)
        });
        return modelArray;
      }
}