/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, CustomerReview } from "./types";

// Appetizer images imported
import appetizers_peppered_gizzard_img from "./assets/images/appetizers-pepered_gizzard.webp";
import appetizers_isiewu_img from "./assets/images/appetizers-isiewu.webp";
import appetizers_nkwobi_img from "./assets/images/appetizers-nkwobi.webp";
import appetizers_peppered_chicken_img from "./assets/images/appetizers-peppered_chicken.webp";
import appetizers_platter_img from "./assets/images/appetizers-platter.webp";
import appetizers_spicy_assorted_meat_img from "./assets/images/appetizers-spicy_assorted_meat.webp";
import appetizers_spicy_beef_img from "./assets/images/appetizers-spicy_beef.webp";
import appetizers_spicy_cowleg_img from "./assets/images/appetizers-spicy_cowleg.webp";
import appetizers_spicy_goatmeat_img from "./assets/images/appetizers-spicy_goatmeat.webp";
import appetizers_spicy_grilled_turkey_img from "./assets/images/appetizers-spicy_grilled_turkey.webp";
import appetizers_spicy_snail_img from "./assets/images/appetizers-spicy_snail.webp";

// Regular combo images imported
import regular_combo_afang_soup_with_choice_of_swallow_img from "./assets/images/regular-combo-afang_soup_with_choice_of_swallow.webp";
import regular_combo_bitter_leaf_soup_with_choice_of_swallow_img from "./assets/images/regular-combo-bitter_leaf_soup_with_choice_of_swallow.webp";
import regular_combo_edikiankong_soup_with_choice_of_swallow_img from "./assets/images/regular-combo-edikiankong_soup_with_choice_of_swallow.webp";
import regular_combo_egusi_soup_with_choice_of_swallow_img from "./assets/images/regular-combo-egusi_soup_with_choice_of_swallow.webp";
import regular_combo_nsalasoup_with_choice_of_swallow_img from "./assets/images/regular-combo-nsalasoup_with_choice_of_swallow.webp";
import regular_combo_ogbono_soup_with_choice_of_swallow_img from "./assets/images/regular-combo-ogbono_soup_with_choice_of_swallow.webp";
import regular_combo_okro_soup_with_choice_of_swallow_img from "./assets/images/regular-combo-okro_soup_with_choice_of_swallow.webp";

// House Special Soups images imported
import soup_specials_okro_peppersoup_img from "./assets/images/soup-specials-okro_peppersoup.webp";
import soup_specials_egusi_peppersoup_img from "./assets/images/soup-specials-egusi_peppersoup.webp";
import soup_specials_banga_soup_img from "./assets/images/soup-specials-banga_soup.webp";
import soup_specials_owho_soup_img from "./assets/images/soup-specials-owho_soup.webp";
import soup_specials_seafood_banga_soup_img from "./assets/images/soup-specials-seafood_banga_soup.webp";
import soup_specials_seafood_okra_img from "./assets/images/soup-specials-seafood_okra.webp";
import soup_specials_fisherman_soup_img from "./assets/images/soup-specials-fisherman_soup.webp";
import soup_specials_catfish_peppersoup_img from "./assets/images/soup-specials-catfish_peppersoup.webp";

// Extras images imported
import extras_cowleg_cowtail_img from "./assets/images/extras-cowleg_cowtail.webp";
import extras_croaker_fish_img from "./assets/images/extras-croaker_fish.webp";
import extras_catfish_img from "./assets/images/extras-catfish.webp";
import extras_banga_rice_img from "./assets/images/extras-banga_rice.webp";
import extras_coconut_rice_img from "./assets/images/extras-coconut_rice.webp";
import extras_beans_img from "./assets/images/extras-beans.webp";
import extras_jollof_fried_rice_img from "./assets/images/extras-jollof_fried_rice.webp";
import extras_fried_boiled_yam_img from "./assets/images/extras-fried_boiled_yam.webp";
import extras_dry_catfish_img from "./assets/images/extras-dry_catfish.webp";
import extras_prawns_img from "./assets/images/extras-prawns.webp";
import extras_crab_img from "./assets/images/extras-crab.webp";
import extras_white_rice_img from "./assets/images/extras-white_rice.webp";
import extras_boiled_fried_plantain_img from "./assets/images/extras-boiled_fried_plantain.webp";
import extras_extra_soups_img from "./assets/images/extras-extra_soups.webp";
import extras_peppered_stew_img from "./assets/images/extras-peppered_stew.webp";
import extras_boiled_eggs_img from "./assets/images/extras-boiled_eggs.webp";

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
    gold: "#e59115", // Gold/amber
    dark: "#211913", // Charcoal dark
    offWhite: "#fdfaf2", // Creamy off-white
  },
};

// Map each menu item to high-quality Unsplash image URLs of Nigerian foods, rich soups, peppers, meats, or premium cocktails/spirits
const APPETIZER_IMAGES = [
  appetizers_peppered_gizzard_img,
  appetizers_peppered_chicken_img,
  appetizers_spicy_beef_img,
  appetizers_spicy_goatmeat_img,
  appetizers_spicy_grilled_turkey_img,
  appetizers_nkwobi_img,
  appetizers_spicy_assorted_meat_img,
  appetizers_spicy_cowleg_img,
  appetizers_spicy_snail_img,
  appetizers_isiewu_img,
  appetizers_platter_img,
];

const REGULAR_COMBO_IMAGES = [
  regular_combo_afang_soup_with_choice_of_swallow_img,
  regular_combo_egusi_soup_with_choice_of_swallow_img,
  regular_combo_okro_soup_with_choice_of_swallow_img,
  regular_combo_ogbono_soup_with_choice_of_swallow_img,
  regular_combo_bitter_leaf_soup_with_choice_of_swallow_img,
  regular_combo_edikiankong_soup_with_choice_of_swallow_img,
  regular_combo_nsalasoup_with_choice_of_swallow_img,
];

const HOUSE_SPECIAL_SOUP_IMAGES = [
  soup_specials_okro_peppersoup_img,
  soup_specials_egusi_peppersoup_img,
  soup_specials_banga_soup_img,
  soup_specials_owho_soup_img,
  soup_specials_seafood_banga_soup_img,
  soup_specials_seafood_okra_img,
  soup_specials_fisherman_soup_img,
  soup_specials_catfish_peppersoup_img,
];

const EXTRAS_IMAGES = [
  extras_cowleg_cowtail_img,
  extras_croaker_fish_img,
  extras_catfish_img,
  extras_banga_rice_img,
  extras_coconut_rice_img,
  extras_beans_img,
  extras_jollof_fried_rice_img,
  extras_fried_boiled_yam_img,
  extras_dry_catfish_img,
  extras_prawns_img,
  extras_crab_img,
  extras_white_rice_img,
  extras_boiled_fried_plantain_img,
  extras_extra_soups_img,
  extras_peppered_stew_img,
  extras_boiled_eggs_img,
];

// const RICE_IMAGES = [
//   "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80", // Village rice / Red rice
//   "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80", // Fried rice / Village rice mixes
// ];

// const COCKTAIL_IMAGES = [
//   "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80", // Long island / Cocktails
//   "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80", // Premium cocktail/sunset
// ];

// const SPIRIT_IMAGES = [
//   "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80", // Glasses and bottles
//   "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=800&q=80", // Luxury spirits
// ];

export const MENU_CATEGORIES = [
  "Appetizers",
  "Regular Combo",
  "House Special Soups",
  "Extras",

  // "Rice & Variety",
  // "DeltaPot Soups",
  // "Bowls Offer",
  // "Cocktails",
  // "Mocktails",
  // "Soft Drinks",
  // "Beer",
  // "Spirits",
  // "Wine",
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
    isPopular: true,
  },
  {
    id: "app-2",
    name: "Peppered Chicken",
    category: "Appetizers",
    price: 9000,
    description: "Tender chunks of chicken fried and glazed in rich, fiery Nigerian chili pepper sauce.",
    image: APPETIZER_IMAGES[1],
  },
  {
    id: "app-3",
    name: "Spicy Beef",
    category: "Appetizers",
    price: 9500,
    description: "Classic marinated local beef cubes seasoned with signature native spices and stir-fried in pepper blend.",
    image: APPETIZER_IMAGES[2],
  },
  {
    id: "app-4",
    name: "Spicy Goat Meat",
    category: "Appetizers",
    price: 9500,
    description: "Slow-cooked chevon (goat meat) infused with local southern red peppers and fresh scent leaves.",
    image: APPETIZER_IMAGES[3],
    isPopular: true,
  },
  {
    id: "app-5",
    name: "Spicy Grilled Turkey",
    category: "Appetizers",
    price: 9500,
    description: "Flavourful grilled turkey wings heavily seasoned in aromatic herbs and rich bell pepper base.",
    image: APPETIZER_IMAGES[4],
  },
  {
    id: "app-6",
    name: "Nkwobi",
    category: "Appetizers",
    price: 9500,
    description: "Premium cow foot cuts simmered in a rich, spiced palm oil paste (utazi) with fresh ugba and peppers.",
    image: APPETIZER_IMAGES[5],
    isPopular: true,
  },
  {
    id: "app-7",
    name: "Spicy Assorted Meats",
    category: "Appetizers",
    price: 9500,
    description: "A combination of seasoned shaki, abodi, liver, and beef sautéed in sizzling pepper paste.",
    image: APPETIZER_IMAGES[6],
  },
  {
    id: "app-8",
    name: "Spicy Oxtail / Cowleg",
    category: "Appetizers",
    price: 10500,
    description: "Slow-braised ultra-tender oxtail or rich cowleg cooked in a heavy spicy habanero glaze.",
    image: APPETIZER_IMAGES[7],
  },
  {
    id: "app-13",
    name: "Spicy Stewed Snail",
    category: "Appetizers",
    price: 12000,
    description: "2PCS of Large Sized Snails, garnished in Pepepper Sauce and Onions",
    image: APPETIZER_IMAGES[8],
  },
  {
    id: "app-14",
    name: "Isiewu",
    category: "Appetizers",
    price: 18000,
    description: "Goat Head made with Ground Uziza seeds, Scotch Bonnet, Utazi, Potash( kaun ), Palm oil, Onions, served per portion.",
    image: APPETIZER_IMAGES[9],
    isPopular: true,
  },
  {
    id: "app-16",
    name: "Deltapot Special Platter",
    category: "Appetizers",
    price: 45000,
    description: "Chicken Wings (5Pcs), Gizzard (2Pcs), Goatmeat (2Pcs), Tilapia Fish (1 Large sized), Yam Fries (Large) & Fried Plantain",
    image: APPETIZER_IMAGES[10],
    isPopular: true,
  },

  // Regular Combo
  {
    id: "regular_combo-1",
    name: "Afang Soup with Choice of Swallow",
    category: "Regular Combo",
    price: 16000,
    description: "Native Afang Soup is Enriched with fresh pounded vegetables, crayfish, tender stock fish and simmered in a savory assorted meat",
    image: REGULAR_COMBO_IMAGES[0],
    isPopular: true,
  },
  {
    id: "regular_combo-3",
    name: "Egusi Soup with Choice of Swallow",
    category: "Regular Combo",
    price: 16000,
    description: "Egusi Soup made with grounded melon seeds contains Bitter leaf, crayfish, and stock fish.",
    image: REGULAR_COMBO_IMAGES[1],
    isPopular: true,
  },
  {
    id: "regular_combo-4",
    name: "Okro Soup with Choice of Swallow",
    category: "Regular Combo",
    price: 16000,
    description: "Local okro soup made with Fresh Okro, palm oil, Pepper, Onions, Crayfish, Stock Fish and assorted meat",
    image: REGULAR_COMBO_IMAGES[2],
  },
  {
    id: "regular_combo-5",
    name: "Ogbono Soup with Choice of Swallow",
    category: "Regular Combo",
    price: 16000,
    description: "Ogbono soup made with blended ogbono seed, fresh vegetables, palm oil, flavored stockfish and assorted meat",
    image: REGULAR_COMBO_IMAGES[3],
  },
  {
    id: "regular_combo-7",
    name: "Bitter leaf Soup with Choice of Swallow",
    category: "Regular Combo",
    price: 16000,
    description: "Bitter leaf soup made with Cocoyam paste, Washed bitter leaf, Pepper, Ogiri, Palmoil, Crayfish & Stockfish",
    image: REGULAR_COMBO_IMAGES[4],
  },
  {
    id: "regular_combo-2",
    name: "Edikang ikong Soup with Choice of Swallow",
    category: "Regular Combo",
    price: 16000,
    description: "Native Edikang ikong Soup made with a combination of fresh vegetables, flavorful stock fish, Crayfish, Pepper mix and assorted meatt",
    image: REGULAR_COMBO_IMAGES[5],
  },
  {
    id: "regular_combo-6",
    name: "Nsala Soup with Choice of Swallow",
    category: "Regular Combo",
    price: 16000,
    description: "Made with Calabash nutmeg, Uda, Cameroon Pepper, Uziza seeds, Uziza leaves, Aidan fruit, Cayenne pepper (NO EXTRA PROTEIN ADDED)",
    image: REGULAR_COMBO_IMAGES[6],
  },

  // HOUSE SPECIAL SOUPS
  {
    id: "house-special-soup-1",
    name: "Okro Peppersoup",
    category: "House Special Soups",
    price: 16000,
    description: "Okro cooked in a delicious mixture of Palm Oil, Shrimps, Goat meat, Fish & African spices (NO EXTRA PROTEIN ADDED)",
    image: HOUSE_SPECIAL_SOUP_IMAGES[0],
  },
  {
    id: "house-special-soup-2",
    name: "Egusi Peppersoup",
    category: "House Special Soups",
    price: 16000,
    description: "Okro cooked in a delicious mixture of Palm Oil, Shrimps, Goat meat, Fish & African spices (NO EXTRA PROTEIN ADDED)",
    image: HOUSE_SPECIAL_SOUP_IMAGES[1],
  },
  {
    id: "house-special-soup-3",
    name: "Banga Soup",
    category: "House Special Soups",
    price: 15000,
    description:
      "Tasty native soup made with palm nut fruit, an assortment of native spices, Onion & Scotch bonnet pepper and pieces of shredded smoked fish, served per portion (NO EXTRA PROTEIN ADDED)",
    image: HOUSE_SPECIAL_SOUP_IMAGES[2],
    isPopular: true,
  },
  {
    id: "house-special-soup-4",
    name: "Owho Soup",
    category: "House Special Soups",
    price: 15000,
    description: "Owo Soup made with palm oil, scotch bonnet, black pepper and stock fish with any protein of choice.",
    image: HOUSE_SPECIAL_SOUP_IMAGES[3],
  },
  {
    id: "house-special-soup-5",
    name: "Ultimate Seafood Banga Soup",
    category: "House Special Soups",
    price: 19500,
    description: "1 Litre of delicious soup made from palm nut fruit,variety of fishes and assortment of other seafoods.",
    image: HOUSE_SPECIAL_SOUP_IMAGES[4],
  },
  {
    id: "house-special-soup-6",
    name: "Seafood Okro",
    category: "House Special Soups",
    price: 18000,
    description: "Fresh and spicy okra soup garnished with Ground Crayfish, Prawns (deveined), Stock Fish, Hake Fish, Crab, Squids, Shrimps, Mussels (cleaned) & Vegetable (NO EXTRA PROTEIN ADDED).",
    image: HOUSE_SPECIAL_SOUP_IMAGES[5],
  },
  {
    id: "house-special-soup-7",
    name: "Fisherman Soup",
    category: "House Special Soups",
    price: 18000,
    description:
      "Classic soup made with fresh pepper, uziza Leaves, local spices, fresh fish, smoked fish, an assortment of seafood (Chopped Jumbo Shrimps, Periwinkles, Crab, & Chopped Fresh Crayfish ), and thickened with cocoyam paste.",
    image: HOUSE_SPECIAL_SOUP_IMAGES[6],
  },
  {
    id: "house-special-soup-8",
    name: "Catfish Pepper Soup",
    category: "House Special Soups",
    price: 18000,
    description: "A Large bowl of marinated catfish cooked in a well flavored hot local spices soup served with irish potatoes.",
    image: HOUSE_SPECIAL_SOUP_IMAGES[7],
  },

  // EXTRAS
  {
    id: "extra-1",
    name: "Cowleg / Cowtail",
    category: "Extras",
    price: 10500,
    description: "Delicious well seasoned cowleg meat cooked till tender served per portion",
    image: EXTRAS_IMAGES[0],
  },
  {
    id: "extra-2",
    name: "Croaker Fish",
    category: "Extras",
    price: 18000,
    description: "grilled croaker (1 whole). seasoned with a blend of onion powder, groundnut oil, scotch bonnet and parsely.",
    image: EXTRAS_IMAGES[1],
  },
  {
    id: "extra-3",
    name: "Catfish",
    category: "Extras",
    price: 18000,
    description: "Grilled Freshwater fish (1 fillet) seasoned with a scent leaf, paprika, garlic powder and chili flaxes.",
    image: EXTRAS_IMAGES[2],
  },
  {
    id: "extra-4",
    name: "Banga Rice",
    category: "Extras",
    price: 15000,
    description: "A portion of Long grain rice made from fresh palm fruit extract, Dried Shrimps, Smoked Catfish, Fresh Prawns, Onions, Cray Fish & Scent Leaf. Served with assorted mean and Plantain",
    image: EXTRAS_IMAGES[3],
  },
  {
    id: "extra-5",
    name: "Coconut Rice",
    category: "Extras",
    price: 15000,
    description: "A portion of Steamed rice cooked with coconut milk extract served with chicken and fried Plantain",
    image: EXTRAS_IMAGES[4],
  },
  {
    id: "extra-6",
    name: "Beans",
    category: "Extras",
    price: 15000,
    description: "Spicy fried beans (1 serving) simmered with tomatoes, peppers, onions & palm oil. Served with fried Croaker fish and Plantain",
    image: EXTRAS_IMAGES[5],
  },
  {
    id: "extra-7",
    name: "Jollof / Fried Rice",
    category: "Extras",
    price: 5000,
    description: "A choice of Long grain rice stewed with seasoned tomato sauce / Long grain rice garnished with diced fresh crunchy vegetables, served per portion",
    image: EXTRAS_IMAGES[6],
  },
  {
    id: "extra-8",
    name: "Fried / Boiled Yam",
    category: "Extras",
    price: 5000,
    description: "A choice of Deep-fried / boiled yam served with sauce served per portion",
    image: EXTRAS_IMAGES[7],
  },
  {
    id: "extra-9",
    name: "Delta Dry Fish",
    category: "Extras",
    price: 10000,
    description: "1 Large Native fish seasoned and smoked dry",
    image: EXTRAS_IMAGES[8],
  },
  {
    id: "extra-10",
    name: "Prawns",
    category: "Extras",
    price: 9500,
    description: "1 serving of peppered prawns",
    image: EXTRAS_IMAGES[9],
  },
  {
    id: "extra-11",
    name: "Periwinkle / Crab",
    category: "Extras",
    price: 4500,
    description: "1 large crab garnished with onions & pepper and a portion of spicy periwinkles",
    image: EXTRAS_IMAGES[10],
  },
  {
    id: "extra-12",
    name: "White Rice",
    category: "Extras",
    price: 5000,
    description: "Steamed White Rice, served per portion with Tomato Stew (NO PROTEIN)",
    image: EXTRAS_IMAGES[11],
  },
  {
    id: "extra-13",
    name: "Boiled / Fried Plantain",
    category: "Extras",
    price: 5000,
    description: "A choice of Boiled or Fried Plantain, served per portion",
    image: EXTRAS_IMAGES[12],
  },
  {
    id: "extra-14",
    name: "Extra Soups",
    category: "Extras",
    price: 5000,
    description: "Additional Serving of Your Preferred Soup",
    image: EXTRAS_IMAGES[13],
  },
  {
    id: "extra-15",
    name: "Pepper Stew",
    category: "Extras",
    price: 5000,
    description: "A portion of Pepper mixed stew paired with your choice of protein",
    image: EXTRAS_IMAGES[14],
  },
  {
    id: "extra-16",
    name: "Boiled Eggs",
    category: "Extras",
    price: 1500,
    description: "1 Pcs, stewed boiled Egg",
    image: EXTRAS_IMAGES[15],
  },
];

export const GOOGLE_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    name: "Lollipops",
    role: "Local Guide (106 reviews)",
    rating: 5,
    text: "The food was awesome. I felt like I was eating homemade banga soup! I'm glad they stayed true to tradition to serve it in the native clay pot. It tasted delicious. The servers were calm and polite, with a general restful ambience.",
    date: "11 months ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "rev-2",
    name: "Femi Adebayo",
    role: "Lekki Resident",
    rating: 5,
    text: "If you want real delta native soup, search no further. Their seafood okro is loaded with fresh giant crabs and prawns that are extremely fresh. Scent is absolutely heavenly, worth every naira!",
    date: "3 months ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "rev-3",
    name: "Bo-Katan Kryze",
    role: "Local Guide",
    rating: 4,
    text: "Truly premium atmosphere in Lekki Phase 1 for Southern delicacies. The village rice with oxtail is outstanding. Snail was seasoned expertly. Excellent service although preparing traditional food from scratch can take slightly longer but completely worth the wait.",
    date: "6 months ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "rev-4",
    name: "Chidi Nwachukwu",
    role: "Frequent Diner",
    rating: 5,
    text: "The Banga Rice Fiesta is absolute gold! Cooked with authentic palm fruit taste, no shortcuts. Took my family here and they couldn't stop praising the authenticity. Highly recommended!",
    date: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
];

export const RESTAURANT_FEATURES = [
  {
    title: "Authentic Southern Flavours",
    description: "Poundo, Starch, Banga, Owho, or Seafood Okro served in authentic clay pots to preserve centuries-old culinary traditions.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Dine-In, Pickup & Fast Delivery",
    description: "Visit our peaceful restaurant in Lekki Phase 1 or get steaming delicacies delivered straight to your doorstep across Lagos.",
    icon: "Truck",
  },
  {
    title: "Open Mon - Sat: 10am - 10pm",
    description: "Ready to satisfy your cravings from morning till night. Fast, customized catering orders available for events too.",
    icon: "Clock",
  },
];
