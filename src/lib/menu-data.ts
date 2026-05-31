export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "bowls" | "snacks" | "drinks";
  tags: string[];
  image: string;
  imageStyle?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "oba-jollof-grilled",
    name: "Oba's Jollof & Peppered Grills",
    description: "Party-style smoky jollof with peppered chicken & plantain",
    price: 9.49,
    category: "bowls",
    tags: ["popular", "spicy"],
    image:
      "https://images.unsplash.com/photo-1603496987674-79600a000f55?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "rere-fried-rice",
    name: "Rere's Fried Rice & Prawns",
    description: "Nigerian fried rice, mixed veg, peppered beef & king prawns",
    price: 8.99,
    category: "bowls",
    tags: ["popular"],
    image: "/Rere's Fried Rice with Prawns.jpeg",
  },
  {
    id: "spaghetti-jollof",
    name: "Spaghetti Jollof",
    description: "Naija-spiced spaghetti cooked jollof-style with turkey",
    price: 9.49,
    category: "bowls",
    tags: ["spicy"],
    image:
      "https://images.pexels.com/photos/14079234/pexels-photo-14079234.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  },
  {
    id: "suya-chicken-jollof",
    name: "Suya Chicken Jollof Fire",
    description: "Fiery jollof rice topped with suya-spiced chicken skewers",
    price: 9.99,
    category: "bowls",
    tags: ["spicy", "popular"],
    image:
      "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "rice-ayamase",
    name: "Rice & Ayamase",
    description: "White rice with spicy green pepper designer stew & assorted meat",
    price: 10.99,
    category: "bowls",
    tags: ["premium", "spicy"],
    image: "/Rice and Ayamase.jpeg",
  },
  {
    id: "queen-esther-fish",
    name: "Queen Esther's Fish Royale",
    description: "Whole grilled tilapia, peppered sauce, fried plantain & jollof",
    price: 17.99,
    category: "bowls",
    tags: ["premium"],
    image:
      "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "egusi-iyan",
    name: "Egusi & Pounded Yam",
    description: "Rich melon seed soup with assorted meat & smooth iyan",
    price: 10.99,
    category: "bowls",
    tags: ["premium"],
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "dodo-plantain",
    name: "Dodo (Fried Plantain)",
    description: "Sweet ripe plantain fried golden — the ultimate Naija side dish",
    price: 2.99,
    category: "snacks",
    tags: ["popular"],
    image:
      "https://images.pexels.com/photos/12362298/pexels-photo-12362298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop&crop=center",
    imageStyle: "scale-110 object-center",
  },
  {
    id: "tobi-puff-puff",
    name: "Tobi's Puff Puff Box",
    description: "Golden fried dough balls, lightly sugared & irresistible",
    price: 3.99,
    category: "snacks",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1582461182977-0e61ebb79c87?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "naija-meat-pie",
    name: "Naija Meat Pie",
    description: "Flaky golden pastry with seasoned minced beef filling",
    price: 2.99,
    category: "snacks",
    tags: [],
    image:
      "https://images.unsplash.com/photo-1608039783021-6116a558f0c5?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "chin-chin-cup",
    name: "Chin-Chin Cup",
    description: "Crunchy fried pastry bites — the ultimate Naija snack",
    price: 2.49,
    category: "snacks",
    tags: [],
    image:
      "https://images.unsplash.com/photo-1756652242630-5a90c89a99cd?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "zobo",
    name: "Zobo",
    description: "Chilled hibiscus drink with ginger, cloves & pineapple",
    price: 2.49,
    category: "drinks",
    tags: ["popular"],
    image:
      "https://images.unsplash.com/photo-1593624191635-f1a49f5eca76?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "chapman",
    name: "Chapman",
    description: "Classic Naija cocktail — Fanta, Sprite, bitters & cucumber",
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
