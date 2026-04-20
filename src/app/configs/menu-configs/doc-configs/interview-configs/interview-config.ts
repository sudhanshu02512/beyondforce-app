import { MenuNode } from "@utility/menu-tree";
import apexConfig from "./apex-configs/apex-configs";

const interviewConfig: MenuNode = new MenuNode();
interviewConfig.label = 'Interview';
interviewConfig.api = 'interview';
interviewConfig.route = '/docs/interview';
interviewConfig.active = true;
interviewConfig.description = 'Comprehensive Salesforce interview questions, real-world scenarios, and expert tips to help you crack interviews with confidence.';
interviewConfig.items = [apexConfig];

export {interviewConfig as default};