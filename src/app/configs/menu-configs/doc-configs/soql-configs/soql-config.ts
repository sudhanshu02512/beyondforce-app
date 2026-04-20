import { MenuNode } from "@utility/menu-tree";

const soqlConfig: MenuNode = new MenuNode();
soqlConfig.label = 'SOQL';
soqlConfig.api = 'soql';
soqlConfig.route = '/docs/soql';
soqlConfig.active = true;
soqlConfig.description = 'Learn Salesforce Object Query Language (SOQL) to retrieve and filter data efficiently from your org.';


export {soqlConfig as default};