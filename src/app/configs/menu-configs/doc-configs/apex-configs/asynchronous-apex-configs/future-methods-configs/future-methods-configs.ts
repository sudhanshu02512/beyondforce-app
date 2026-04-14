import { MenuNode } from "@utility/menu-tree";

const futureMethodConfig: MenuNode = new MenuNode();
futureMethodConfig.label = "Future Methods";
futureMethodConfig.api = "future-methods";
futureMethodConfig.route = "/docs/apex/asynchronous-apex/future-methods";
futureMethodConfig.active = false;
futureMethodConfig.description = "Learn about Future Methods in Asynchronous Apex, their use cases, and how to implement them effectively in your Salesforce applications.";
futureMethodConfig.buildNumber = "KRS1404202601V1";
export { futureMethodConfig as default };