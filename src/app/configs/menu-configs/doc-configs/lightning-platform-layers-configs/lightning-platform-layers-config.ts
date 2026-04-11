import { MenuNode } from "@utility/menu-tree";
import introductionConfig from "./introduction-configs/introduction-config";

const lightningPlatformLayersConfig: MenuNode = new MenuNode();
lightningPlatformLayersConfig.label = "Lightning Platform Layers";
lightningPlatformLayersConfig.api = "lightning-platform-layers";
lightningPlatformLayersConfig.route = "/docs/lightning-platform-layers";
lightningPlatformLayersConfig.active = false;
lightningPlatformLayersConfig.description = "Explore the layers of the Lightning Platform, including data, logic, and presentation layers.";
lightningPlatformLayersConfig.items = [introductionConfig];

export { lightningPlatformLayersConfig as default };