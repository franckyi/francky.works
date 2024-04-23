type Category = {
  id: number;
  label: string;
  wp_cat: number;
};

export const categories: Category[] = [
  {
    id: 0,
    label: "All",
    wp_cat: 0,
  },
  { id: 1, label: "Web Development", wp_cat: 8 },

  { id: 2, label: "UI/UX", wp_cat: 7 },
  { id: 3, label: "Graphics", wp_cat: 39 },
  { id: 4, label: "Mini Projects", wp_cat: 38 },
];
