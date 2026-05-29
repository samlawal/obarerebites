export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "bowls" | "snacks" | "drinks";
  tags: string[];
  image?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "oba-jollof-bowl",
    name: "Oba Jollof Bowl",
    description: "Grilled chicken, plantain, signature spice",
    price: 8.99,
    category: "bowls",
    tags: ["popular", "spicy"],
  },
  {
    id: "rere-fried-rice",
    name: "Rere Fried Rice Supreme",
    description: "Colourful veg, peppered beef",
    price: 8.99,
    category: "bowls",
    tags: ["popular"],
  },
  {
    id: "spaghetti-jollof",
    name: "Spaghetti Jollof Fusion",
    description: "Turkey wings, smoky flavour",
    price: 9.49,
    category: "bowls",
    tags: ["spicy"],
  },
  {
    id: "ofada-ayamase",
    name: "Ofada & Ayamase Heat Bowl",
    description: "Premium Sunday special",
    price: 10.99,
    category: "bowls",
    tags: ["premium", "spicy"],
  },
  {
    id: "egusi-kings-combo",
    name: "Egusi King's Combo",
    description: "Pounded yam + rich egusi",
    price: 10.99,
    category: "bowls",
    tags: ["premium"],
  },
  {
    id: "puff-puff-box",
    name: "Puff-Puff Box",
    description: "Golden fried dough balls, lightly dusted",
    price: 3.99,
    category: "snacks",
    tags: ["popular"],
  },
  {
    id: "meat-pie",
    name: "Meat Pie",
    description: "Flaky pastry, seasoned beef filling",
    price: 2.99,
    category: "snacks",
    tags: [],
  },
  {
    id: "chin-chin-cup",
    name: "Chin-Chin Cup",
    description: "Crunchy fried pastry bites",
    price: 2.49,
    category: "snacks",
    tags: [],
  },
  {
    id: "zobo",
    name: "Zobo",
    description: "Chilled hibiscus drink with ginger",
    price: 2.49,
    category: "drinks",
    tags: ["popular"],
  },
  {
    id: "chapman",
    name: "Chapman",
    description: "Nigerian classic fruity cocktail",
    price: 2.99,
    category: "drinks",
    tags: [],
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    description: "500ml still water",
    price: 0.99,
    category: "drinks",
    tags: [],
  },
];

export const categories = [
  { id: "bowls" as const, label: "Bowls", emoji: "🍛" },
  { id: "snacks" as const, label: "Snacks", emoji: "🥟" },
  { id: "drinks" as const, label: "Drinks", emoji: "🥤" },
];
