import { MenuNode } from "@utility/menu-tree";

const cloudsConfig: MenuNode = new MenuNode();
cloudsConfig.label = 'Clouds';
cloudsConfig.api = 'clouds';
cloudsConfig.route = '/docs/clouds';
cloudsConfig.active = true;
cloudsConfig.description = 'Explore Salesforce Clouds including Sales, Service, and more to understand their features, use cases, and real-world applications.';

export {cloudsConfig as default};