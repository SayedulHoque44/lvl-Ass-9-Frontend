export const generateMenuItems = (items: string[]) => {
  const menuItems = items.map((item) => ({
    value: item,
    label: item,
  }));

  return menuItems;
};
