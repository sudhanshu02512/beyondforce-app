import { MenuNode } from "@utility/menu-tree";

const shareJavascriptConfig : MenuNode = new MenuNode();
shareJavascriptConfig.label = 'Sharing Javascript Code';
shareJavascriptConfig.api = 'sharing-javascript-code';
shareJavascriptConfig.route = '/docs/lightning-web-components/sharing-javascript-code';
shareJavascriptConfig.active = true;

export {shareJavascriptConfig as default};