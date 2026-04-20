import { MenuNode } from "@utility/menu-tree";

const triggersScenariosConfig: MenuNode = new MenuNode();
triggersScenariosConfig.label = 'Triggers Scenarios';
triggersScenariosConfig.api = 'interview/apex/triggers-scenarios';
triggersScenariosConfig.route = '/docs/interview/apex/triggers-scenarios';
triggersScenariosConfig.active = true;


export {triggersScenariosConfig as default};