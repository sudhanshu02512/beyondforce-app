import { MenuNode } from "@utility/menu-tree";

const apexClassesConfig: MenuNode = new MenuNode();
apexClassesConfig.label = "Apex Classes";
apexClassesConfig.api = "apex-classes";
apexClassesConfig.route = "/docs/apex/apex-classes";
apexClassesConfig.active = false;
apexClassesConfig.description = "Dive into Apex classes, their structure, and how to create and use them effectively in your Salesforce applications.";

export { apexClassesConfig as default };