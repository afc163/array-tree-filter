const arrayTreeFilter = <T>(
  data: T[],
  filterFn: (item: T, level: number) => boolean,
  { childrenKeyName = "children" } = {}
): T[] => {
  const result: T[] = [];
  let children = data;
  for (let level = 0; children.length > 0; level++) {
    const foundItem = children.find(item => filterFn(item, level));
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = (foundItem as any)[childrenKeyName] || [];
  }

  return result;
};

export default arrayTreeFilter;
