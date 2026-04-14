import { MenuNode } from "@utility/menu-tree";

import futureMethodConfig from "./future-methods-configs/future-methods-configs";

const asynchronousApexConfig: MenuNode = new MenuNode();
asynchronousApexConfig.label = "Asynchronous Apex";
asynchronousApexConfig.api = "asynchronous-apex";
asynchronousApexConfig.route = "/docs/apex/asynchronous-apex";
asynchronousApexConfig.active = false;
asynchronousApexConfig.description = "Explore the world of Asynchronous Apex, including future methods, batch Apex, and queueable Apex, to handle long-running operations and improve performance in your Salesforce applications.";    
asynchronousApexConfig.items = [futureMethodConfig];

export { asynchronousApexConfig as default };