import { MenuNode } from "@utility/menu-tree";

const qnaConfig: MenuNode = new MenuNode();
qnaConfig.label = 'QnA';
qnaConfig.api = 'interview/apex/qna';
qnaConfig.route = '/docs/interview/apex/qna';
qnaConfig.active = true;

export {qnaConfig as default};