import { MenuNode } from "@utility/menu-tree";

import schemaConfig from "./schema-configs/schema-config";

const apexConfig: MenuNode = new MenuNode();
apexConfig.label = "Apex";
apexConfig.api = "apex";
apexConfig.route = "/docs/apex";
apexConfig.active = true;
apexConfig.description = "Learn Apex fundamentals, triggers, SOQL, and best practices.";
apexConfig.items = [schemaConfig];

export { apexConfig as default };