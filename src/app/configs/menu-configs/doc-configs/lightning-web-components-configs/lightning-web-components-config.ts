import { MenuNode } from "@utility/menu-tree";
import compositionConfig from "./composition-configs/composition-config";
import shareJavascriptConfig from "./sharing-javascript-code-configs/sharing-javascript-code-config";

const lightningWebComponentsConfig: MenuNode = new MenuNode();
lightningWebComponentsConfig.label = 'Lightning Web Components';
lightningWebComponentsConfig.api = 'lightning-web-components';
lightningWebComponentsConfig.route = '/docs/lightning-web-components';
lightningWebComponentsConfig.description = 'Master Lightning Web Components (LWC) with guides on composition and sharing JavaScript code.';
lightningWebComponentsConfig.items = [compositionConfig, shareJavascriptConfig];
export {lightningWebComponentsConfig as default};