/**
 * Returns dynamic Tailwind grid column classes based on the number of items
 * @param length - Number of items to display in the grid
 * @returns Tailwind CSS grid column classes
 * 
 * @example
 * // For 1 item: displays as single column on all screen sizes
 * getGridCols(1) // "grid-cols-1"
 * 
 * @example
 * // For 2 items: 1 column on mobile, 2 columns on md screens and up
 * getGridCols(2) // "grid-cols-1 md:grid-cols-2"
 * 
 * @example
 * // For 3+ items: 1 column on mobile, 2 on md, 3 on lg screens
 * getGridCols(3) // "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
 */
export const getGridCols = (length: number): string => {
  if (length === 1) return "grid-cols-1";
  if (length === 2) return "grid-cols-1 md:grid-cols-2";
  return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
};
