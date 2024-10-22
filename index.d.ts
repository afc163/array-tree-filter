declare const arrayTreeFilter: <T>(data: T[], filterFn: (item: T, level: number) => boolean, options?: {
    childrenKeyName?: string | undefined;
} | undefined) => T[];
export default arrayTreeFilter;
