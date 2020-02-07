import { HeaderLink } from "../models/HeaderLink";
import { SidebarLink } from "../models/SidebarLink";

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

    static toSidebarLinkModel = contentfulModel => {
        return new SidebarLink(
            contentfulModel.contentful_id,
            contentfulModel.order,
            contentfulModel.title,
            contentfulModel.url
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