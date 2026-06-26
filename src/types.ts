/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number; // 0 represents "Price on request"
  description: string;
  image?: string; // Optional custom visual illustration or fallback
  originalCategory?: string;
  isPopular?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}
