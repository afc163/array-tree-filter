function arrayTreeFilter<T>(
  data: T[],
  filterFn: (item: T, level: number) => boolean,
  options?: {
    childrenKeyName?: string;
  }
) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || "children";
  let children = data || [];
  const result: T[] = [];
  for (let level = 0; children.length > 0; level++) {
    const foundItem: T = children.filter((item) => filterFn(item, level))[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = (foundItem as any)[options.childrenKeyName] || [];
  }
  return result;
}

export default arrayTreeFilter;
