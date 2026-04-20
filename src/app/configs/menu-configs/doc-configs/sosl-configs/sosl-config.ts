import { MenuNode } from "@utility/menu-tree";

const soslConfig: MenuNode = new MenuNode();
soslConfig.label = 'SOSL';
soslConfig.api = 'sosl';
soslConfig.route = '/docs/sosl';
soslConfig.active = true;
soslConfig.description = 'Learn SOSL (Salesforce Object Search Language) to efficiently search across multiple objects, fields, and records in Salesforce.';

export {soslConfig as default};