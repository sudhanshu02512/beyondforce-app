import { MenuNode } from "@utility/menu-tree";

const introductionConfig: MenuNode = new MenuNode();
introductionConfig.label = 'Introduction';
introductionConfig.api = '/lightning-platform-layers/introduction';
introductionConfig.route = '/docs/lightning-platform-layers/introduction';

export { introductionConfig as default };