export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "bowls" | "snacks" | "drinks";
  tags: string[];
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "oba-jollof-grilled",
    name: "Oba Jollof & Grilled Bowl",
    description: "Smoky jollof rice with grilled meats",
    price: 9.49,
    category: "bowls",
    tags: ["popular", "spicy"],
    image:
      "https://images.unsplash.com/photo-1603496987674-79600a000f55?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "rere-fried-rice",
    name: "Rere Fried Rice Supreme",
    description: "Colourful veg, peppered beef, prawns on top",
    price: 8.99,
    category: "bowls",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "spaghetti-jollof",
    name: "Spaghetti Jollof Fusion",
    description: "Turkey wings, smoky flavour",
    price: 9.49,
    category: "bowls",
    tags: ["spicy"],
    image:
      "https://images.unsplash.com/photo-1673442635965-34f1b36d8944?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "suya-chicken-jollof",
    name: "Suya Chicken & Jollof Fire Bowl",
    description: "Spicy jollof rice with suya-seasoned chicken kebab",
    price: 9.99,
    category: "bowls",
    tags: ["spicy", "popular"],
    image:
      "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "ofada-ayamase",
    name: "Ofada & Ayamase Heat Bowl",
    description: "Premium Sunday special",
    price: 10.99,
    category: "bowls",
    tags: ["premium", "spicy"],
    image:
      "https://images.unsplash.com/photo-1665332561290-cc6757172890?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "queen-esther-fish",
    name: "Queen Esther's Fish Royale",
    description: "Whole grilled fish, peppered sauce, plantain & jollof — the ultimate treat",
    price: 17.99,
    category: "bowls",
    tags: ["premium"],
    image:
      "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "egusi-kings-combo",
    name: "Egusi King's Combo",
    description: "Pounded yam + rich egusi",
    price: 10.99,
    category: "bowls",
    tags: ["premium"],
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "tobis-puff-puff",
    name: "Tobis Puff Puff Box",
    description: "Golden fried dough balls, lightly dusted",
    price: 3.99,
    category: "snacks",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1582461182977-0e61ebb79c87?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "meat-pie",
    name: "Meat Pie",
    description: "Flaky pastry, seasoned beef filling",
    price: 2.99,
    category: "snacks",
    tags: [],
    image:
      "https://images.unsplash.com/photo-1608039783021-6116a558f0c5?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "chin-chin-cup",
    name: "Chin-Chin Cup",
    description: "Crunchy fried pastry bites",
    price: 2.49,
    category: "snacks",
    tags: [],
    image:
      "https://images.unsplash.com/photo-1756652242630-5a90c89a99cd?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "zobo",
    name: "Zobo",
    description: "Chilled hibiscus drink with ginger",
    price: 2.49,
    category: "drinks",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1593624191635-f1a49f5eca76?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "chapman",
    name: "Chapman",
    description: "Nigerian classic fruity cocktail",
    price: 2.99,
    category: "drinks",
    tags: [],
    image:
      "https://images.unsplash.com/photo-1557935260-03ada3026d41?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    description: "500ml still water",
    price: 0.99,
    category: "drinks",
    tags: [],
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop&q=80",
  },
];

export const categories = [
  { id: "bowls" as const, label: "Bowls", emoji: "🍛" },
  { id: "snacks" as const, label: "Snacks", emoji: "🥟" },
  { id: "drinks" as const, label: "Drinks", emoji: "🥤" },
];
