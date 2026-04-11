import { MenuNode } from "@utility/menu-tree";

const compositionConfig: MenuNode = new MenuNode();
compositionConfig.label = 'Composition';
compositionConfig.api = 'composition';
compositionConfig.route = '/docs/lightning-web-components/composition';
compositionConfig.active = true;

export {compositionConfig as default};