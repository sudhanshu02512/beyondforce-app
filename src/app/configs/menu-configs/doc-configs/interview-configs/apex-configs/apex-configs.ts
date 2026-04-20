import { MenuNode } from "@utility/menu-tree";
import qnaConfig from "./qna-configs/qna-configs";
import triggersScenariosConfig from "./triggers-sceanrios-configs/triggers-sceanrios-configs";

const apexConfig: MenuNode = new MenuNode();
apexConfig.label = 'Apex Interview';
apexConfig.api = 'interview/apex';
apexConfig.route = '/docs/interview/apex';
apexConfig.active = true;
apexConfig.items = [qnaConfig, triggersScenariosConfig];

export {apexConfig as default};