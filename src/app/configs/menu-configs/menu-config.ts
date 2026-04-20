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

//Interview
import interviewConfig from "./doc-configs/interview-configs/interview-config";
menuConfigMap.set('/interview', interviewConfig);

//Beyonds
import beyondsConfig from "./doc-configs/beyonds-configs/beyonds-config";
menuConfigMap.set('/beyonds', beyondsConfig);

//SOQL
import soqlConfig from "./doc-configs/soql-configs/soql-config";
menuConfigMap.set('/soql', soqlConfig);

//SOSL
import soslConfig from "./doc-configs/sosl-configs/sosl-config";
menuConfigMap.set('/sosl', soslConfig);


//Clouds
import cloudsConfig from "./doc-configs/clouds-configs/clouds-config";
menuConfigMap.set('/clouds', cloudsConfig);

function getMenuConfig() {
    return Array.from(menuConfigMap.values());
}

function getActiveMenuConfig() {
    return Array.from(menuConfigMap.values()).filter((config): config is typeof config => !!config.active);
}

export {menuConfigMap as default,getMenuConfig,getActiveMenuConfig};