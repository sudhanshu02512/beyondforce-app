import { MenuNode } from "@utility/menu-tree";

const schemaConfig: MenuNode = new MenuNode();
schemaConfig.label = "Schema";
schemaConfig.api = "apex/schema";
schemaConfig.route = "/docs/apex/schema";

export { schemaConfig as default };