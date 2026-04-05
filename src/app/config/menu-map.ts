let menuMap = new Map();

//Lightning Platform Layers
import lightningPlatformLayers from './doc-config/lightning-platform-layers';
menuMap.set('lightning-platform-layers', lightningPlatformLayers);

//Apex
import apex from './doc-config/apex';
menuMap.set('apex', apex);

//Lightning Web Components
import lightningWebComponents from './doc-config/lightning-web-components';
menuMap.set('lightning-web-component', lightningWebComponents);

export {menuMap as default};