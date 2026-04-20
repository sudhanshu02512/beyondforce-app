import { MenuNode } from "@utility/menu-tree";

const beyondsConfig: MenuNode = new MenuNode();
beyondsConfig.label = "Beyonds";
beyondsConfig.api = "beyonds";
beyondsConfig.route = "/docs/beyonds";
beyondsConfig.active = true;
beyondsConfig.description = 'Explore advanced topics, best practices, and real-world insights that go beyond core Salesforce concepts.';

export { beyondsConfig as default };