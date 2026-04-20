import { MenuNode } from "@utility/menu-tree";
import compositionConfig from "./composition-configs/composition-config";
import shareJavascriptConfig from "./sharing-javascript-code-configs/sharing-javascript-code-config";

const lightningWebComponentsConfig: MenuNode = new MenuNode();
lightningWebComponentsConfig.label = 'Lightning Web Components';
lightningWebComponentsConfig.api = 'lightning-web-components';
lightningWebComponentsConfig.route = '/docs/lightning-web-components';
lightningWebComponentsConfig.active = true;
lightningWebComponentsConfig.description = 'Learn Lightning Web Components (LWC) to build modern, fast, and reusable UI components using HTML, JavaScript, and Salesforce data.';
// lightningWebComponentsConfig.items = [compositionConfig, shareJavascriptConfig];

export {lightningWebComponentsConfig as default};