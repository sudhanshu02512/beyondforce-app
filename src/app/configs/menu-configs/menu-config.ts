let menuConfigMap = new Map();

//Lightning Platform Layers
import lightningPlatformLayersConfig from "./doc-configs/lightning-platform-layers-configs/lightning-platform-layers-config";
menuConfigMap.set('/lightning-platform-layers', lightningPlatformLayersConfig);

//Apex
import apexConfig from "./doc-configs/apex-configs/apex-config";
menuConfigMap.set('/apex', apexConfig);

//Lightning Web Components
import lightningWebComponentsConfig from "./doc-configs/lightning-web-components-configs/lightning-web-components-config";
menuConfigMap.set('/lightning-web-components', lightningWebComponentsConfig);

function getMenuConfig() {
    return Array.from(menuConfigMap.values());
}

function getActiveMenuConfig() {
    return Array.from(menuConfigMap.values()).filter((config): config is typeof config => !!config.active);
}

export {menuConfigMap as default,getMenuConfig,getActiveMenuConfig};