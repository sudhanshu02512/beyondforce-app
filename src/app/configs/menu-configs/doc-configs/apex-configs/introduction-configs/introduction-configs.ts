import { MenuNode } from "@utility/menu-tree";

const introductionConfig: MenuNode = new MenuNode();
introductionConfig.label = "Introduction";
introductionConfig.api = "apex/introduction";
introductionConfig.route = "/docs/apex/introduction";
introductionConfig.active = true;

export { introductionConfig as default };