const arrayTreeFilter = <T>(
  data: T[],
  filterFn: (item: T, level: number) => boolean,
  options?: {
    childrenKeyName?: string;
  }
): T[] => {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || "children";
  let children = data || [];
  const result: T[] = [];
  let level = 0;
  do {
    const foundItem: T = children.filter((item) => filterFn(item, level))[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = (foundItem as any)[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);
  return result;
};

export default arrayTreeFilter;
