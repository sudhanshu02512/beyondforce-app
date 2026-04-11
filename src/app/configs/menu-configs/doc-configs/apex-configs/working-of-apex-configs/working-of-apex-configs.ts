import { MenuNode } from "@utility/menu-tree";

const workingOfApexConfig: MenuNode = new MenuNode();
workingOfApexConfig.label = "Working of Apex";
workingOfApexConfig.api = "working-of-apex";
workingOfApexConfig.route = "/docs/apex/working-of-apex";
workingOfApexConfig.active = false;
workingOfApexConfig.description = "Understand the inner workings of Apex, including its execution context, governor limits, and best practices for efficient coding.";

export { workingOfApexConfig as default };