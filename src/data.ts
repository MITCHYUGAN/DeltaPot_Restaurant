/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, CustomerReview } from './types';

export const RESTAURANT_SETTINGS = {
  name: "DeltaPot Restaurant and Bar",
  tagline: "Real Taste of D South",
  address: "Block 74, 18b Emmanuel Abimbola Cole Street, Lekki Phase 1, Lagos, Nigeria",
  shortAddress: "18b Emmanuel Abimbola Cole Street, Lekki Phase 1",
  hours: "Mon-Sat, 10am - 10pm",
  whatsapp: "+2348099995146",
  whatsappFormatted: "+234 809 999 5146",
  instagram: "@deltapot_lekki",
  instagramUrl: "https://www.instagram.com/deltapot_lekki",
  colors: {
    primary: "#cb2826", // Primary red
    gold: "#e59115",    // Gold/amber
    dark: "#211913",    // Charcoal dark
    offWhite: "#fdfaf2" // Creamy off-white
  }
};

// Map each menu item to high-quality Unsplash image URLs of Nigerian foods, rich soups, peppers, meats, or premium cocktails/spirits
const APPETIZER_IMAGES = [
  "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80", // Spicy meat/Samosa/Gizzard
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80", // Spicy beef
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80", // Spicy chicken
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"  // Spicy meat platter
];

const RICE_IMAGES = [
  "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80", // Village rice / Red rice
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"  // Fried rice / Village rice mixes
];

const SOUP_IMAGES = [
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80", // Rich hot soup
  "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=800&q=80"  // Seafood broth/hot pot
];

const COCKTAIL_IMAGES = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80", // Long island / Cocktails
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"  // Premium cocktail/sunset
];

const SPIRIT_IMAGES = [
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80", // Glasses and bottles
  "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80"  // Luxury spirits
];

export const MENU_CATEGORIES = [
  "Appetizers",
  "Rice & Variety",
  "House Special Soups",
  "DeltaPot Soups",
  "Extras",
  "Bowls Offer",
  "Cocktails",
  "Mocktails",
  "Soft Drinks",
  "Beer",
  "Spirits",
  "Wine"
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // APPETIZERS
  {
    id: "app-1",
    name: "Peppered Gizzard",
    category: "Appetizers",
    price: 8000,
    description: "Spicy, crunchy turkey or chicken gizzards tossed in deep southern pepper sauce and fresh onions.",
    image: APPETIZER_IMAGES[0],
    isPopular: true
  },
  {
    id: "app-2",
    name: "Peppered Chicken",
    category: "Appetizers",
    price: 9000,
    description: "Tender chunks of chicken fried and glazed in rich, fiery Nigerian chili pepper sauce.",
    image: APPETIZER_IMAGES[2]
  },
  {
    id: "app-3",
    name: "Spicy Beef",
    category: "Appetizers",
    price: 9500,
    description: "Classic marinated local beef cubes seasoned with signature native spices and stir-fried in pepper blend.",
    image: APPETIZER_IMAGES[1]
  },
  {
    id: "app-4",
    name: "Spicy Goat Meat",
    category: "Appetizers",
    price: 9500,
    description: "Slow-cooked chevon (goat meat) infused with local southern red peppers and fresh scent leaves.",
    image: APPETIZER_IMAGES[0],
    isPopular: true
  },
  {
    id: "app-5",
    name: "Spicy Grilled Turkey",
    category: "Appetizers",
    price: 9500,
    description: "Flavourful grilled turkey wings heavily seasoned in aromatic herbs and rich bell pepper base.",
    image: APPETIZER_IMAGES[2]
  },
  {
    id: "app-6",
    name: "Nkwobi",
    category: "Appetizers",
    price: 9500,
    description: "Premium cow foot cuts simmered in a rich, spiced palm oil paste (utazi) with fresh ugba and peppers.",
    image: APPETIZER_IMAGES[3],
    isPopular: true
  },
  {
    id: "app-7",
    name: "Spicy Assorted Meats",
    category: "Appetizers",
    price: 9500,
    description: "A combination of seasoned shaki, abodi, liver, and beef sautéed in sizzling pepper paste.",
    image: APPETIZER_IMAGES[1]
  },
  {
    id: "app-8",
    name: "Spicy Oxtail / Cowleg",
    category: "Appetizers",
    price: 10500,
    description: "Slow-braised ultra-tender oxtail or rich cowleg cooked in a heavy spicy habanero glaze.",
    image: APPETIZER_IMAGES[3]
  },
  {
    id: "app-9",
    name: "Goat Meat Pepper Soup",
    category: "Appetizers",
    price: 10500,
    description: "Extremely aromatic, lightweight broth made with tender goat cuts and traditional southern peppersoup spices.",
    image: SOUP_IMAGES[0],
    isPopular: true
  },
  {
    id: "app-10",
    name: "Chicken Pepper Soup",
    category: "Appetizers",
    price: 10500,
    description: "Nourishing, spicy local soup cooked with chicken parts, ginger, garlic, and fresh utazi leaves.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "app-11",
    name: "Assorted Pepper Soup",
    category: "Appetizers",
    price: 10500,
    description: "Comforting native peppersoup filled with diverse beef organ meats in a spicy, piping hot bouillon.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "app-12",
    name: "Oxtail Pepper Soup",
    category: "Appetizers",
    price: 10500,
    description: "Signature Southern broth with gelatinous, fall-off-the-bone oxtail joints and authentic seed pods.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "app-13",
    name: "Spicy Stewed Snail",
    category: "Appetizers",
    price: 12000,
    description: "Giant African land snails thoroughly cleaned, slow-cooked and stir-fried in a rich, fiery stew.",
    image: APPETIZER_IMAGES[3]
  },
  {
    id: "app-14",
    name: "Isiewu",
    category: "Appetizers",
    price: 18000,
    description: "Authentic Eastern/Southern goat head delicacy prepared with spicy oil emulsion, utazi, and raw onions, served in a traditional wooden mortar.",
    image: APPETIZER_IMAGES[0],
    isPopular: true
  },
  {
    id: "app-15",
    name: "Whole Fish",
    category: "Appetizers",
    price: 18000,
    description: "Freshly caught Tilapia or Croaker grilled whole and smothered in DeltaPot savory spicy sauce with yam/plantain fries.",
    image: APPETIZER_IMAGES[2]
  },
  {
    id: "app-16",
    name: "Deltapot Special Platter",
    category: "Appetizers",
    price: 45000,
    description: "The ultimate sharing board! Chicken wings, crispy gizzards, goatmeat, sizzling Tilapia fish, yam fries, and sweet fried plantains.",
    image: APPETIZER_IMAGES[3],
    isPopular: true
  },

  // RICE & VARIETY
  {
    id: "rice-1",
    name: "Deltapot Special South Village Rice",
    category: "Rice & Variety",
    price: 18000,
    description: "Native-spiced unpolished ofada / village rice prepared with palm oil, iru (locust beans), dried prawns, served with tender Oxtail and fried plantain.",
    image: RICE_IMAGES[0],
    isPopular: true
  },
  {
    id: "rice-2",
    name: "Delta Style Banga Rice Fiesta",
    category: "Rice & Variety",
    price: 15000,
    description: "Rich, aromatic rice slow-cooked inside authentic palm fruit extract (Banga). Offered with assorted meats, boiled egg, and sweet fried plantain.",
    image: RICE_IMAGES[0],
    isPopular: true
  },
  {
    id: "rice-3",
    name: "Delta Style Coconut Rice Fiesta",
    category: "Rice & Variety",
    price: 15000,
    description: "Fragrant rice enriched with fresh hand-squeezed coconut milk, served with succulent chicken, gizzard, boiled egg, and plantain.",
    image: RICE_IMAGES[1]
  },
  {
    id: "rice-4",
    name: "Special Pepper Sauce Rice with Assorted Meat & Boiled Eggs",
    category: "Rice & Variety",
    price: 15000,
    description: "A fiery red pepper sauce containing diced offals and meat cuts, served with white rice and boiled eggs.",
    image: RICE_IMAGES[0]
  },
  {
    id: "rice-5",
    name: "Special Beans Porridge",
    category: "Rice & Variety",
    price: 15000,
    description: "Honey beans slow-stewed to creamy perfection with red oil and crayfish. Served with sweet dodo and choice of chicken, fish, or beef.",
    image: RICE_IMAGES[1]
  },
  {
    id: "rice-6",
    name: "Choice of Yam Porridge",
    category: "Rice & Variety",
    price: 15000,
    description: "Soft white yam cubes simmered in a rich vegetable-crayfish palm oil sauce, accompanied by fried fish, chicken, or beef.",
    image: RICE_IMAGES[0]
  },
  {
    id: "rice-7",
    name: "Choice of Plantain Porridge",
    category: "Rice & Variety",
    price: 15000,
    description: "Nutritious green/semi-ripe plantain simmered with pumpkin leaves, smoked fish, and your choice of beef, chicken, or fried fish.",
    image: RICE_IMAGES[1]
  },
  {
    id: "rice-8",
    name: "Mixed Rice and Beans",
    category: "Rice & Variety",
    price: 15000,
    description: "Flavor-rich combination of fluffy rice and home-cooked beans, doused in DeltaPot signature tomato-pepper sauce with a choice protein.",
    image: RICE_IMAGES[0]
  },

  // HOUSE SPECIAL SOUPS
  {
    id: "hs-1",
    name: "Rivers Native Soup",
    category: "House Special Soups",
    price: 18000,
    description: "A prestigious Niger Delta thick soup cooked with fresh sea catfish, crab claws, periwinkles, clams, and authentic uziza leaves.",
    image: SOUP_IMAGES[1],
    isPopular: true
  },
  {
    id: "hs-2",
    name: "Seafood Okro",
    category: "House Special Soups",
    price: 18000,
    description: "Grated crunchy okro loaded with a luxurious heap of fresh prawns, crabs, snails, fish, and rich local spices. Best paired with starch or poundo.",
    image: SOUP_IMAGES[1],
    isPopular: true
  },
  {
    id: "hs-3",
    name: "Fisherman Soup",
    category: "House Special Soups",
    price: 18000,
    description: "Simple yet extraordinarily rich Riverine recipe featuring fresh seafood, cocoa-yam thickener, visual periwinkles, and native scent leaves.",
    image: SOUP_IMAGES[0],
    isPopular: true
  },
  {
    id: "hs-4",
    name: "Ultimate Seafood Fish Banga Soup",
    category: "House Special Soups",
    price: 19500,
    description: "Premium palm fruit pulp extract soup cooked with dried bonga fish, periwinkle, crab claws, and giant catfish steak. Absolute traditional royalty.",
    image: SOUP_IMAGES[1],
    isPopular: true
  },
  {
    id: "hs-5",
    name: "Banga Soup",
    category: "House Special Soups",
    price: 0,
    description: "The core Delta specialty! Pure palm fruit concentrate boiled with Beletete leaves, oburunbebe stick, and authentic Delta condiments. Price on request.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "hs-6",
    name: "Owho Soup",
    category: "House Special Soups",
    price: 0,
    description: "Classic Urhobo specialty soup prepared with native potash (kanwa) and red palm oil, resulting in a thick emulsified broth. Served with starch.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "hs-7",
    name: "Okro Pepper Soup",
    category: "House Special Soups",
    price: 0,
    description: "Lighter, spicy version of native okro utilizing dry peppers and peppersoup spices. Perfect for light swallowing. Price on request.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "hs-8",
    name: "Egusi Pepper Soup",
    category: "House Special Soups",
    price: 0,
    description: "Ground melon seeds cooked directly inside an aromatic spicy pepper soup broth — unique Southern style. Price on request.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "hs-9",
    name: "Peppersoup (House Classic)",
    category: "House Special Soups",
    price: 0,
    description: "Our basic house recipe with fresh native fish, beef, or poultry options cooked in steaming herbal spices. Price on request.",
    image: SOUP_IMAGES[0]
  },

  // DELTAPOT SOUPS (Standard Soups)
  {
    id: "ds-1",
    name: "Okro Soup",
    category: "DeltaPot Soups",
    price: 0,
    description: "Traditional plain or vegetable okro soup loaded with dried fish, stockfish, and palm oil. Price on request.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "ds-2",
    name: "Egusi Soup",
    category: "DeltaPot Soups",
    price: 0,
    description: "Melon seed soup cooked with spinach, palm oil, locust beans, seasoned with crayfish. Price on request.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "ds-3",
    name: "Afang Soup",
    category: "DeltaPot Soups",
    price: 0,
    description: "A rich Calabar delicacy made with shredded Afang leaves, water leaves, palm oil, and high-quality local stock. Price on request.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "ds-4",
    name: "Edikang Ikong Soup",
    category: "DeltaPot Soups",
    price: 0,
    description: "Prestigious dry vegetable soup cooked with a generous ratio of pumpkin leaves (Ugu) and waterleaves. Price on request.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "ds-5",
    name: "Ogbono Soup",
    category: "DeltaPot Soups",
    price: 0,
    description: "Thick, slippery soup made from ground wild mango seeds blended with red oil, fish, and shredded greens. Price on request.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "ds-6",
    name: "Nsala Soup (White Soup)",
    category: "DeltaPot Soups",
    price: 0,
    description: "Igbo specialty soup cooked without palm oil, thickened with yam paste, flavored with uziza and uda. Price on request.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "ds-7",
    name: "Bitter Leaf Soup (Ofe Onugbu)",
    category: "DeltaPot Soups",
    price: 0,
    description: "Thoroughly washed bitter leaf cooked with cocoyam paste and native spices for an earthy, deep taste. Price on request.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "ds-8",
    name: "Oha Soup",
    category: "DeltaPot Soups",
    price: 0,
    description: "Delicate Oha leaves torn by hand and boiled in a smooth cocoyam and palm oil broth. Price on request.",
    image: SOUP_IMAGES[1]
  },

  // EXTRAS
  {
    id: "ext-1",
    name: "Yam (Fried or boiled)",
    category: "Extras",
    price: 5000,
    description: "A generous side of sweet local yams, either boiled to soft texture or crispy deep-fried."
  },
  {
    id: "ext-2",
    name: "Plantain (Fried or boiled) (Dodo)",
    category: "Extras",
    price: 5000,
    description: "Sweet, ripe plantain sliced and fried to golden or boiled plain."
  },
  {
    id: "ext-3",
    name: "Rice (Jollof / Fried / White)",
    category: "Extras",
    price: 5000,
    description: "A side portion of our smoky Jollof, classic fried, or steamed basmati white rice."
  },
  {
    id: "ext-4",
    name: "Banga Rice (Side)",
    category: "Extras",
    price: 6000,
    description: "Side cooked in authentic seasoned Banga soup base."
  },
  {
    id: "ext-5",
    name: "Coconut Rice (Side)",
    category: "Extras",
    price: 6000,
    description: "Fragrant cooked portion containing fresh coconut cream extracts."
  },
  {
    id: "ext-6",
    name: "Pepper Sauce (Side)",
    category: "Extras",
    price: 5000,
    description: "DeltaPot's signature red pepper-tomato blend cooked with onions."
  },
  {
    id: "ext-7",
    name: "Periwinkle or Crabs (Extra)",
    category: "Extras",
    price: 4500,
    description: "Extra cup of shelled/unshelled periwinkles or whole crabs to garnish your soups."
  },
  {
    id: "ext-8",
    name: "Jumbo Prawns (Extra)",
    category: "Extras",
    price: 9500,
    description: "Two jumbo-sized local tiger prawns grilled or stewed."
  },
  {
    id: "ext-9",
    name: "Dry Stock Fish",
    category: "Extras",
    price: 9000,
    description: "Flavourful, premium imported stockfish boiled till soft."
  },
  {
    id: "ext-10",
    name: "Delta Dry Fish",
    category: "Extras",
    price: 10000,
    description: "Premium sun-dried river fish, authentic to Southern kitchens."
  },
  {
    id: "ext-11",
    name: "Beans (Side)",
    category: "Extras",
    price: 6000,
    description: "Side of slow-stewed Nigerian honey beans."
  },
  {
    id: "ext-12",
    name: "Extra Boiled/Fried Eggs",
    category: "Extras",
    price: 1000,
    description: "One freshly cooked egg, boiled or fried."
  },
  {
    id: "ext-13",
    name: "Porridge (Side)",
    category: "Extras",
    price: 6000,
    description: "Extra cup of pottage sauce."
  },
  {
    id: "ext-14",
    name: "Extra Oxtail / Cowtail",
    category: "Extras",
    price: 10500,
    description: "Extra premium cut of oxtail added to your order."
  },
  {
    id: "ext-15",
    name: "Extra Cowleg",
    category: "Extras",
    price: 10000,
    description: "Extra rich gelatinous chunk of cowleg."
  },
  {
    id: "ext-16",
    name: "Extra Croaker Fish",
    category: "Extras",
    price: 9000,
    description: "Additional steak of pan-seared or stewed Croaker fish."
  },
  {
    id: "ext-17",
    name: "Extra Beef",
    category: "Extras",
    price: 9500,
    description: "Additional portions of our stewed, peppered, or grilled beef."
  },
  {
    id: "ext-18",
    name: "Extra Goatmeat",
    category: "Extras",
    price: 9500,
    description: "Additional chunk of tender native cooked goat meat."
  },
  {
    id: "ext-19",
    name: "Extra Turkey",
    category: "Extras",
    price: 9500,
    description: "Additional crispy grilled turkey piece."
  },
  {
    id: "ext-20",
    name: "Extra Chicken",
    category: "Extras",
    price: 9000,
    description: "Additional piece of stewed or fried chicken."
  },
  {
    id: "ext-21",
    name: "Extra Fresh Catfish",
    category: "Extras",
    price: 9000,
    description: "One rich steak of fresh river catfish steamed in soup spices."
  },
  {
    id: "ext-22",
    name: "Extra Snail",
    category: "Extras",
    price: 12000,
    description: "One large stewed land snail."
  },

  // BOWLS OFFER
  {
    id: "bowl-1",
    name: "3 Litre Bowl Rivers Native Soup",
    category: "Bowls Offer",
    price: 75000,
    description: "A 3-litre banquet container filled with luxury seafood, catfish, and periwinkles.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "bowl-2",
    name: "5 Litre Bowl Rivers Native Soup",
    category: "Bowls Offer",
    price: 90000,
    description: "Massive 5-litre family feast container loaded with premium seafood.",
    image: SOUP_IMAGES[1],
    isPopular: true
  },
  {
    id: "bowl-3",
    name: "3 Litre Bowl Seafood Okro",
    category: "Bowls Offer",
    price: 75000,
    description: "A 3-litre pot featuring premium draw okro, giant snail, crab claws, and tiger prawns.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "bowl-4",
    name: "5 Litre Bowl Seafood Okro",
    category: "Bowls Offer",
    price: 90000,
    description: "Ultimate 5-litre corporate or home size. Fully loaded with premium seafood.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "bowl-5",
    name: "3 Litre Bowl Fisherman Soup",
    category: "Bowls Offer",
    price: 75000,
    description: "3-litre batch of the celebrated Riverine fisherman soup with soft seafood broth.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "bowl-6",
    name: "5 Litre Bowl Fisherman Soup",
    category: "Bowls Offer",
    price: 90000,
    description: "5-litre batch of traditional fishermen soup, enough for 10-15 standard servings.",
    image: SOUP_IMAGES[0]
  },
  {
    id: "bowl-7",
    name: "3 Litre Bowl Goatmeat Sauce",
    category: "Bowls Offer",
    price: 70000,
    description: "Thick, spicy native goat meat stew (perfect with white rice, yam, or plantains).",
    image: APPETIZER_IMAGES[0]
  },
  {
    id: "bowl-8",
    name: "5ltr Smokey Jollof Rice",
    category: "Bowls Offer",
    price: 40000,
    description: "Signature woodsmith-style smokey party Jollof Rice bowl (serves 12-15).",
    image: RICE_IMAGES[0],
    isPopular: true
  },
  {
    id: "bowl-9",
    name: "5ltr White Rice",
    category: "Bowls Offer",
    price: 25000,
    description: "Fluffy steamed white long-grain rice bowl.",
    image: RICE_IMAGES[1]
  },
  {
    id: "bowl-10",
    name: "5ltr Special Sauce with Assorted Meat & Boiled Egg",
    category: "Bowls Offer",
    price: 80000,
    description: "5 Litres of rich, savory spicy pepper sauce filled with boiled eggs and selected meat parts.",
    image: RICE_IMAGES[0]
  },
  {
    id: "bowl-11",
    name: "Egusi with Goat Meat (Litre Bowl)",
    category: "Bowls Offer",
    price: 80000,
    description: "Rich, textured melon seed soup filled with hefty chunks of tender goat meat.",
    image: SOUP_IMAGES[1]
  },
  {
    id: "bowl-12",
    name: "5ltr Yam Pottage",
    category: "Bowls Offer",
    price: 40000,
    description: "Traditional spicy yam porridge with leafy greens and dry fish blends.",
    image: RICE_IMAGES[0]
  },

  // COCKTAILS
  {
    id: "cock-1",
    name: "Cosmopolitan",
    category: "Cocktails",
    price: 10000,
    description: "Crisp vodka, triple sec, cranberry juice, and freshly squeezed lime.",
    image: COCKTAIL_IMAGES[0]
  },
  {
    id: "cock-2",
    name: "Sex On The Beach",
    category: "Cocktails",
    price: 10000,
    description: "Vodka, peach schnapps, orange juice, and sweet cranberry nectar.",
    image: COCKTAIL_IMAGES[1]
  },
  {
    id: "cock-3",
    name: "Mojito",
    category: "Cocktails",
    price: 10000,
    description: "White rum, muddled fresh field mint, lime wheels, simple syrup, and sparkling soda.",
    image: COCKTAIL_IMAGES[0],
    isPopular: true
  },
  {
    id: "cock-4",
    name: "Screw Driver",
    category: "Cocktails",
    price: 10000,
    description: "Glacial vodka topped with premium freshly squeezed sweet orange juice.",
    image: COCKTAIL_IMAGES[1]
  },
  {
    id: "cock-5",
    name: "Long Island Iced Tea",
    category: "Cocktails",
    price: 12000,
    description: "Five white spirits combined with lemon, simple syrup, and a splash of cola.",
    image: COCKTAIL_IMAGES[0],
    isPopular: true
  },

  // MOCKTAILS
  {
    id: "mock-1",
    name: "Chapman",
    category: "Mocktails",
    price: 8000,
    description: "Nigeria's ultimate classic! Fanta, Sprite, Angostura bitters, blackcurrant cordial, sweet cucumber, and orange wheels.",
    image: COCKTAIL_IMAGES[1],
    isPopular: true
  },
  {
    id: "mock-2",
    name: "Virgin Sunset",
    category: "Mocktails",
    price: 8000,
    description: "Layered mocktail of orange juice, pineapple purée, and sweet strawberry grenadine.",
    image: COCKTAIL_IMAGES[1]
  },
  {
    id: "mock-3",
    name: "Momo Temple",
    category: "Mocktails",
    price: 8000,
    description: "Shirley Temple variation matching ginger ale, grenadine, and maraschino cherries.",
    image: COCKTAIL_IMAGES[0]
  },
  {
    id: "mock-4",
    name: "Freshly Squeezed Juice (Watermelon)",
    category: "Mocktails",
    price: 7500,
    description: "100% natural, refreshing watermelon pulp extracted fresh on order."
  },
  {
    id: "mock-5",
    name: "Freshly Squeezed Juice (Orange)",
    category: "Mocktails",
    price: 7500,
    description: "100% natural cold-pressed sweet orange juice."
  },
  {
    id: "mock-6",
    name: "Freshly Squeezed Juice (Pineapple)",
    category: "Mocktails",
    price: 7500,
    description: "Golden pineapple juice squeezed fresh daily."
  },

  // SOFT DRINKS
  {
    id: "soft-1",
    name: "Soft Drinks (Coke/Fanta/Sprite)",
    category: "Soft Drinks",
    price: 1500,
    description: "Standard chilled soft drinks canned or bottled."
  },
  {
    id: "soft-2",
    name: "Malt (Maltina/Amstel)",
    category: "Soft Drinks",
    price: 2000,
    description: "Delightful non-alcoholic dark malt beverage."
  },
  {
    id: "soft-3",
    name: "Water (small)",
    category: "Soft Drinks",
    price: 1500,
    description: "75cl purified spring table water."
  },
  {
    id: "soft-4",
    name: "Water (big)",
    category: "Soft Drinks",
    price: 3000,
    description: "150cl purified family-sized spring table water."
  },
  {
    id: "soft-5",
    name: "Pack of Juice (Chivita)",
    category: "Soft Drinks",
    price: 7000,
    description: "Full carton pack of your preferred flavor juice."
  },
  {
    id: "soft-6",
    name: "Chi Exotic",
    category: "Soft Drinks",
    price: 8000,
    description: "Classic nectar-thick premium tropical fruit blend drink."
  },

  // BEER
  {
    id: "beer-1",
    name: "Star",
    category: "Beer",
    price: 3000,
    description: "Classic Nigerian cold lager beer."
  },
  {
    id: "beer-2",
    name: "Star Life",
    category: "Beer",
    price: 3000,
    description: "Refreshing variations of original Star series."
  },
  {
    id: "beer-3",
    name: "Star Radler",
    category: "Beer",
    price: 3000,
    description: "Zesty citrus-infused sweet light beer."
  },
  {
    id: "beer-4",
    name: "Heineken",
    category: "Beer",
    price: 4000,
    description: "Premium global barley-hop lager beer."
  },
  {
    id: "beer-5",
    name: "Guinness Small Stout",
    category: "Beer",
    price: 3500,
    description: "Rich, dark roasted barley extra stout."
  },
  {
    id: "beer-6",
    name: "Guinness Big Stout",
    category: "Beer",
    price: 4000,
    description: "Large bottle of premium dark extra stout."
  },
  {
    id: "beer-7",
    name: "Trophy",
    category: "Beer",
    price: 3000,
    description: "Sovereign taste of premium lager beer."
  },
  {
    id: "beer-8",
    name: "Budweiser",
    category: "Beer",
    price: 3500,
    description: "King of Beers — smooth crisp global favorite."
  },
  {
    id: "beer-9",
    name: "Orijin",
    category: "Beer",
    price: 3000,
    description: "Unique bittersweet alcoholic beverage brewed with African herbs and extracts."
  },
  {
    id: "beer-10",
    name: "Smirnoff Ice",
    category: "Beer",
    price: 3000,
    description: "Sweet lemon flavored premium alcoholic cooler."
  },
  {
    id: "beer-11",
    name: "Energy Drink",
    category: "Beer",
    price: 4000,
    description: "Piping ice-cold premium energy boost can."
  },

  // SPIRITS
  {
    id: "spirit-1",
    name: "Gordons Gin Shot",
    category: "Spirits",
    price: 3000,
    description: "Single shot of fine dry juniper gin.",
    image: SPIRIT_IMAGES[0]
  },
  {
    id: "spirit-2",
    name: "Gordon Gin Bottle",
    category: "Spirits",
    price: 25000,
    description: "Full London Dry gin bottle for tables.",
    image: SPIRIT_IMAGES[1]
  },
  {
    id: "spirit-3",
    name: "Sierra Shot",
    category: "Spirits",
    price: 5000,
    description: "Fiery shot of Mexican Sierra Tequila.",
    image: SPIRIT_IMAGES[0]
  },
  {
    id: "spirit-4",
    name: "Sierra Bottle",
    category: "Spirits",
    price: 50000,
    description: "Full bottle Sierra Reposado / Blanco Tequila with iconic hat lid.",
    image: SPIRIT_IMAGES[1]
  },
  {
    id: "spirit-5",
    name: "Bombay Gin Bottle",
    category: "Spirits",
    price: 70000,
    description: "Aromatic botanical vapour-infused Bombay Sapphire bottle.",
    image: SPIRIT_IMAGES[1]
  },
  {
    id: "spirit-6",
    name: "Olmeca Tequila Bottle",
    category: "Spirits",
    price: 70000,
    description: "Premium Olmeca chocolate or gold tequila bottle.",
    image: SPIRIT_IMAGES[1]
  },
  {
    id: "spirit-7",
    name: "Jameson Shots",
    category: "Spirits",
    price: 5000,
    description: "Single shot of triple-distilled Irish whiskey.",
    image: SPIRIT_IMAGES[0]
  },
  {
    id: "spirit-8",
    name: "Jameson Bottle",
    category: "Spirits",
    price: 50000,
    description: "Full signature green bottle of Jameson Irish whiskey.",
    image: SPIRIT_IMAGES[1]
  },
  {
    id: "spirit-9",
    name: "Jameson Black Barrel",
    category: "Spirits",
    price: 70000,
    description: "Premium double charred barrel Jameson whiskey for connoisseurs.",
    image: SPIRIT_IMAGES[1]
  },
  {
    id: "spirit-10",
    name: "Vodka Shot",
    category: "Spirits",
    price: 5000,
    description: "Single shot of crystal-filtered vodka."
  },
  {
    id: "spirit-11",
    name: "Absolute Vodka",
    category: "Spirits",
    price: 40000,
    description: "Full bottle of pure Swedish Absolut vodka."
  },
  {
    id: "spirit-12",
    name: "CIROC Vodka",
    category: "Spirits",
    price: 100000,
    description: "Ultra-premium French grape craft vodka bottle.",
    image: SPIRIT_IMAGES[1]
  },
  {
    id: "spirit-13",
    name: "Hennessy VS Shot",
    category: "Spirits",
    price: 8000,
    description: "Single shot of luxurious Hennessy Very Special Cognac."
  },
  {
    id: "spirit-14",
    name: "Hennessy VSOP Shot",
    category: "Spirits",
    price: 10000,
    description: "Rich shot of Hennessy Very Superior Old Pale Cognac."
  },
  {
    id: "spirit-15",
    name: "Hennessy VS Bottle",
    category: "Spirits",
    price: 150000,
    description: "Full prestige bottle of Hennessy VS Cognac.",
    image: SPIRIT_IMAGES[1]
  },
  {
    id: "spirit-16",
    name: "Hennessy VSOP Bottle",
    category: "Spirits",
    price: 220000,
    description: "Supreme elite bottle of Hennessy VSOP Cognac.",
    image: SPIRIT_IMAGES[1]
  },

  // WINE
  {
    id: "wine-1",
    name: "Nederburg",
    category: "Wine",
    price: 40000,
    description: "Exquisite South African cabernet sauvignon/merlot red wine bottle."
  },
  {
    id: "wine-2",
    name: "Escudo Rojo",
    category: "Wine",
    price: 30000,
    description: "Elegant, robust Baron Philippe de Rothschild Chilean red wine."
  },
  {
    id: "wine-3",
    name: "Carlo Rossi",
    category: "Wine",
    price: 25000,
    description: "Smooth, sweet, palatable red table wine bottle."
  },
  {
    id: "wine-4",
    name: "Declan",
    category: "Wine",
    price: 25000,
    description: "Very popular sweet fruity, crisp red or white table wine."
  }
];

export const GOOGLE_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Lollipops",
    role: "Local Guide (106 reviews)",
    rating: 5,
    text: "The food was awesome. I felt like I was eating homemade banga soup! I'm glad they stayed true to tradition to serve it in the native clay pot. It tasted delicious. The servers were calm and polite, with a general restful ambience.",
    date: "11 months ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-2",
    name: "Femi Adebayo",
    role: "Lekki Resident",
    rating: 5,
    text: "If you want real delta native soup, search no further. Their seafood okro is loaded with fresh giant crabs and prawns that are extremely fresh. Scent is absolutely heavenly, worth every naira!",
    date: "3 months ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-3",
    name: "Bo-Katan Kryze",
    role: "Local Guide",
    rating: 4,
    text: "Truly premium atmosphere in Lekki Phase 1 for Southern delicacies. The village rice with oxtail is outstanding. Snail was seasoned expertly. Excellent service although preparing traditional food from scratch can take slightly longer but completely worth the wait.",
    date: "6 months ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "rev-4",
    name: "Chidi Nwachukwu",
    role: "Frequent Diner",
    rating: 5,
    text: "The Banga Rice Fiesta is absolute gold! Cooked with authentic palm fruit taste, no shortcuts. Took my family here and they couldn't stop praising the authenticity. Highly recommended!",
    date: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export const RESTAURANT_FEATURES = [
  {
    title: "Authentic Southern Flavours",
    description: "Poundo, Starch, Banga, Owho, or Seafood Okro served in authentic clay pots to preserve centuries-old culinary traditions.",
    icon: "UtensilsCrossed"
  },
  {
    title: "Dine-In, Pickup & Fast Delivery",
    description: "Visit our peaceful restaurant in Lekki Phase 1 or get steaming delicacies delivered straight to your doorstep across Lagos.",
    icon: "Truck"
  },
  {
    title: "Open Mon - Sat: 10am - 10pm",
    description: "Ready to satisfy your cravings from morning till night. Fast, customized catering orders available for events too.",
    icon: "Clock"
  }
];
