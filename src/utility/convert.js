import { HeaderLink } from "../models/HeaderLink";
import { SidebarLink } from "../models/SidebarLink";
import { JumbotronContent } from "../models/JumbotronContent";
import { ProjectModel } from "../models/ProjectModel";
import { NavbarLink } from "../models/NavbarLink";
import { PageModel } from "../models/PageModel";

export class Convert {
    static toHeaderLinkModel = contentfulModel => {
        return new HeaderLink(
            contentfulModel.contentful_id,
            contentfulModel.order,
            contentfulModel.externalLink,
            contentfulModel.title,
            contentfulModel.url,
            contentfulModel.activatedItem.contentful_id,
            contentfulModel.showInMobile
        );
    }

    static toNavbarLinkModel = contentfulModel => {
        
        return new NavbarLink(
            contentfulModel.contentful_id,
            contentfulModel.order,
            contentfulModel.externalLink,
            contentfulModel.title,
            contentfulModel.externalLink ? contentfulModel.url : contentfulModel.project.slug,
            contentfulModel.showInMobile
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
            contentfulModel.isExternalLink ? contentfulModel.url : '/about',
            contentfulModel.isEmail,
            contentfulModel.email,
            contentfulModel.isExternalLink
        );
    }

    static toProjectModel = contentfulModel => {
        return new ProjectModel (
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.slug,
            contentfulModel.displayDescriptions,
            contentfulModel.displayImages,
            contentfulModel.displayVideo,
            contentfulModel.description,
            contentfulModel.images,
            contentfulModel.vimeoId,
        )
    }

    static toPageModel = contentfulModel => {
        return new PageModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.slug,
            contentfulModel.content
        )
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