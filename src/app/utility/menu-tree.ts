class MenuNode {
  label?: string;
  api?: string;
  route?: string;
  active?: boolean;
  description?: string;
  items?: MenuNode[];
  buildNumber?: string;
}

export { MenuNode };