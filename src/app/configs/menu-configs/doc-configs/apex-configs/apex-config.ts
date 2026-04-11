import { MenuNode } from "@utility/menu-tree";

// import schemaConfig from "./schema-configs/schema-config";
import introductionConfig from "./introduction-configs/introduction-configs";
import workingOfApexConfig from "./working-of-apex-configs/working-of-apex-configs";
import apexClassesConfig from "./apex-classes-configs/apex-classes-configs";

const apexConfig: MenuNode = new MenuNode();
apexConfig.label = "Apex";
apexConfig.api = "apex";
apexConfig.route = "/docs/apex";
apexConfig.active = true;
apexConfig.description = "Learn Apex fundamentals, triggers, SOQL, and best practices.";
apexConfig.items = [introductionConfig, workingOfApexConfig, apexClassesConfig];

export { apexConfig as default };