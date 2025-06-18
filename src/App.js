import React, { useState } from 'react';

const items = [
  { id: '#22', name: 'Custom', price: 0 },
  { id: '#1', name: '#1', price: 16, category: 'Regular Heroes' },
  { id: '#2', name: '#2', price: 19, category: 'Regular Heroes' },
  { id: '#3', name: '#3', price: 20, category: 'Regular Heroes' },
  { id: '#4', name: '#4', price: 13, category: 'Regular Heroes' },
  { id: '#5', name: '#5', price: 22, category: 'Regular Heroes' },
  { id: '#6', name: '#6', price: 19, category: 'Regular Heroes' },
  { id: '#7', name: '#7', price: 23, category: 'Regular Heroes' },
  { id: '#8', name: '#8', price: 18, category: 'Regular Heroes' },
  { id: '#9', name: '#9', price: 19, category: 'Regular Heroes' },
  { id: '#10', name: '#10', price: 17, category: 'Regular Heroes' },
  { id: '#11', name: '#11', price: 14, category: 'Regular Heroes' },
  { id: '#12', name: '#12', price: 22, category: 'Regular Heroes' },
  { id: '#13', name: '#13', price: 19, category: 'Regular Heroes' },
  { id: '#14', name: '#14', price: 18, category: 'Regular Heroes' },
  { id: '#15', name: '#15', price: 17, category: 'Regular Heroes' },
  { id: '#16', name: '#16', price: 17, category: 'Regular Heroes' },
  { id: '#17', name: '#17', price: 19, category: 'Regular Heroes' },
  { id: '#18', name: '#18', price: 15, category: 'Regular Heroes' },
  { id: '#19', name: '#19', price: 16, category: 'Regular Heroes' },
  { id: '#20', name: '#20', price: 16, category: 'Regular Heroes' },
  { id: '#21', name: '#21', price: 22, category: 'Regular Heroes' },
  { id: '#23', name: '#23', price: 19, category: 'Regular Heroes' },
  { id: '#24', name: '#24', price: 18, category: 'Regular Heroes' },
  { id: '#25', name: '#25', price: 25, category: 'Regular Heroes' },
  { id: '#26', name: '#26', price: 21, category: 'Regular Heroes' },
  { id: '#27', name: '#27', price: 14, category: 'Regular Heroes' },
  { id: '#28', name: '#28', price: 19, category: 'Regular Heroes' },
  { id: '#29', name: '#29', price: 16, category: 'Regular Heroes' },
  { id: '#30', name: '#30', price: 20, category: 'Regular Heroes' },
  { id: '#31', name: '#31', price: 16, category: 'Regular Heroes' },
  { id: '#32', name: '#32', price: 20, category: 'Regular Heroes' },
  { id: '#33', name: '#33', price: 16, category: 'Regular Heroes' },
  { id: '#34', name: '#34', price: 18, category: 'Regular Heroes' },
  { id: '#35', name: '#35', price: 16, category: 'Regular Heroes' },
  { id: '#36', name: '#36', price: 12, category: 'Regular Heroes' },
  { id: '#37', name: '#37', price: 16, category: 'Regular Heroes' },
  { id: '#38', name: '#38', price: 16, category: 'Regular Heroes' },
  { id: '#39', name: '#39', price: 14, category: 'Regular Heroes' },
  { id: '#40', name: '#40', price: 14, category: 'Regular Heroes' },
  { id: '#41', name: '#41', price: 21, category: 'Regular Heroes' },
  { id: '#42', name: '#42', price: 19, category: 'Regular Heroes' },
  { id: '#43', name: '#43', price: 19, category: 'Regular Heroes' },
  { id: '#44', name: '#44', price: 18, category: 'Regular Heroes' },
  { id: '#45', name: '#45', price: 15, category: 'Regular Heroes' },
  { id: '#46', name: '#46', price: 20, category: 'Regular Heroes' },
  { id: '#47', name: '#47', price: 27, category: 'Regular Heroes' },
  { id: '#48', name: '#48', price: 19, category: 'Regular Heroes' },
  { id: '#49', name: '#49', price: 16, category: 'Regular Heroes' },
  { id: '#50', name: '#50', price: 18, category: 'Regular Heroes' },
  { id: '#51', name: '#51', price: 14, category: 'Regular Heroes' },
  { id: '#52', name: '#52', price: 18, category: 'Regular Heroes' },
  { id: '#53', name: '#53', price: 16, category: 'Regular Heroes' },
  { id: '#54', name: '#54', price: 20, category: 'Regular Heroes' },
  { id: '#55', name: '#55', price: 21, category: 'Regular Heroes' },
  { id: '#56', name: '#56', price: 16, category: 'Regular Heroes' },
  { id: '#57', name: '#57', price: 20, category: 'Regular Heroes' },
  { id: '#58', name: '#58', price: 16, category: 'Regular Heroes' },
  { id: '#59', name: '#59', price: 23, category: 'Regular Heroes' },
  { id: '#60', name: '#60', price: 18, category: 'Regular Heroes' },
  { id: '#61', name: '#61', price: 20, category: 'Regular Heroes' },
  { id: '#62', name: '#62', price: 22, category: 'Regular Heroes' },
  { id: '#63', name: '#63', price: 21, category: 'Regular Heroes' },
  { id: '#64', name: '#64', price: 19, category: 'Regular Heroes' },
  { id: '#65', name: '#65', price: 20, category: 'Regular Heroes' },
  { id: '#66', name: '#66', price: 20, category: 'Regular Heroes' },
  { id: '#67', name: '#67', price: 16, category: 'Regular Heroes' },
  { id: '#68', name: '#68', price: 19, category: 'Regular Heroes' },
  { id: '#69', name: '#69', price: 25, category: 'Regular Heroes' },
  { id: '#70', name: '#70', price: 18, category: 'Regular Heroes' },
  { id: '#71', name: '#71', price: 20, category: 'Regular Heroes' },
  { id: '#72', name: '#72', price: 16, category: 'Regular Heroes' },
  { id: '#73', name: '#73', price: 18, category: 'Regular Heroes' },
  { id: '#74', name: '#74', price: 16, category: 'Regular Heroes' },
  { id: '#75', name: '#75', price: 18, category: 'Regular Heroes' },
  { id: '#76', name: '#76', price: 21, category: 'Regular Heroes' },
  { id: '#77', name: '#77', price: 16, category: 'Regular Heroes' },
  { id: '#78', name: '#78', price: 20, category: 'Regular Heroes' },
  { id: '#79', name: '#79', price: 15, category: 'Regular Heroes' },
  { id: '#80', name: '#80', price: 22, category: 'Regular Heroes' },
  { id: '#81', name: '#81', price: 25, category: 'Regular Heroes' },
  { id: '#82', name: '#82', price: 18, category: 'Regular Heroes' },
  { id: '#83', name: '#83', price: 15, category: 'Regular Heroes' },
  { id: '#84', name: '#84', price: 16, category: 'Regular Heroes' },
 { id: '#85', name: '#85', price: 20, category: 'Regular Heroes' },
  { id: '#86', name: '#86', price: 16, category: 'Regular Heroes' },
  { id: '#87', name: '#87', price: 20, category: 'Regular Heroes' },
  { id: '#88', name: '#88', price: 18, category: 'Regular Heroes' },
  { id: '#89', name: '#89', price: 18, category: 'Regular Heroes' },
  { id: '#90', name: '#90', price: 20, category: 'Regular Heroes' },
  { id: '#91', name: '#91', price: 18, category: 'Regular Heroes' },
  { id: '#92', name: '#92', price: 18, category: 'Regular Heroes' },
  { id: '#93', name: '#93', price: 18, category: 'Regular Heroes' },
  { id: '#94', name: '#94', price: 25, category: 'Regular Heroes' },
  { id: '#95', name: '#95', price: 23, category: 'Regular Heroes' },
  { id: '#96', name: '#96', price: 20, category: 'Regular Heroes' },
  { id: '#97', name: '#97', price: 19, category: 'Regular Heroes' },
  { id: '#98', name: '#98', price: 25, category: 'Regular Heroes' },
  { id: '#99', name: '#99', price: 21, category: 'Regular Heroes' },
  { id: '#100', name: '#100', price: 18, category: 'Regular Heroes' },
  { id: '#101', name: '#101', price: 20, category: 'Regular Heroes' },
  { id: '#102', name: '#102', price: 25, category: 'Regular Heroes' },
  { id: '#103', name: '#103', price: 23, category: 'Regular Heroes' },
  { id: '#375', name: '#375', price: 19, category: 'Regular Heroes' },
  { id: '#105', name: '#105', price: 18, category: 'Regular Heroes' },
  { id: '#106', name: '#106', price: 27, category: 'Regular Heroes' },
  { id: '#107', name: '#107', price: 25, category: 'Regular Heroes' },
  { id: '#108', name: '#108', price: 28, category: 'Regular Heroes' },
  { id: '#109', name: '#109', price: 21, category: 'Regular Heroes' },
  { id: '#110', name: '#110', price: 23, category: 'Regular Heroes' },
  { id: '#111', name: '#111', price: 25, category: 'Regular Heroes' },
  { id: '#112', name: '#112', price: 20, category: 'Regular Heroes' },
  { id: '#113', name: '#113', price: 24, category: 'Regular Heroes' },
  { id: '#114', name: '#114', price: 22, category: 'Regular Heroes' },
  { id: '#115', name: '#115', price: 29, category: 'Regular Heroes' },
  { id: '#116', name: '#116', price: 25, category: 'Regular Heroes' },
  { id: '#117', name: '#117', price: 22, category: 'Regular Heroes' },
  { id: '#118', name: '#118', price: 25, category: 'Regular Heroes' },
  { id: '#119', name: '#119', price: 29, category: 'Regular Heroes' },
  { id: '#120', name: '#120', price: 20, category: 'Regular Heroes' },
  { id: '#121', name: '#121', price: 22, category: 'Regular Heroes' },
  { id: '#122', name: '#122', price: 24, category: 'Regular Heroes' },
  { id: '#123', name: '#123', price: 21, category: 'Regular Heroes' },
  { id: '#124', name: '#124', price: 23, category: 'Regular Heroes' },
  { id: '#125', name: '#125', price: 28, category: 'Regular Heroes' },
  { id: '#126', name: '#126', price: 19, category: 'Regular Heroes' },
  { id: '#127', name: '#127', price: 21, category: 'Regular Heroes' },
  { id: '#128', name: '#128', price: 25, category: 'Regular Heroes' },
  { id: '#129', name: '#129', price: 25, category: 'Regular Heroes' },
  { id: '#130', name: '#130', price: 20, category: 'Regular Heroes' },
  { id: '#131', name: '#131', price: 21, category: 'Regular Heroes' },
  { id: '#132', name: '#132', price: 27, category: 'Regular Heroes' },
  { id: '#133', name: '#133', price: 26, category: 'Regular Heroes' },
  { id: '#134', name: '#134', price: 18, category: 'Regular Heroes' },
  { id: '#135', name: '#135', price: 21, category: 'Regular Heroes' },
  { id: '#136', name: '#136', price: 23, category: 'Regular Heroes' },
  { id: '#137', name: '#137', price: 25, category: 'Regular Heroes' },
  { id: '#138', name: '#138', price: 26, category: 'Regular Heroes' },
  { id: '#139', name: '#139', price: 25, category: 'Regular Heroes' },
  { id: '#1A', name: '#1A', price: 19, category: 'Smoked Mozzarella Heroes' },
  { id: '#2A', name: '#2A', price: 19, category: 'Smoked Mozzarella Heroes' },
  { id: '#3A', name: '#3A', price: 22, category: 'Smoked Mozzarella Heroes' },
  { id: '#4A', name: '#4A', price: 16, category: 'Smoked Mozzarella Heroes' },
  { id: '#5A', name: '#5A', price: 20, category: 'Smoked Mozzarella Heroes' },
  { id: '#6A', name: '#6A', price: 19, category: 'Smoked Mozzarella Heroes' },
  { id: '#7A', name: '#7A', price: 20, category: 'Smoked Mozzarella Heroes' },
  { id: '#8A', name: '#8A', price: 22, category: 'Smoked Mozzarella Heroes' },
  { id: '#9A', name: '#9A', price: 21, category: 'Smoked Mozzarella Heroes' },
  { id: '#10A', name: '#10A', price: 16, category: 'Smoked Mozzarella Heroes' },
  { id: '#11A', name: '#11A', price: 18, category: 'Smoked Mozzarella Heroes' },
  { id: 'P1', name: 'P1', price: 24, category: '"P" Heroes' },
  { id: 'P2', name: 'P2', price: 24, category: '"P" Heroes' },
  { id: 'P3', name: 'P3', price: 19, category: '"P" Heroes' },
  { id: 'P4', name: 'P4', price: 20, category: '"P" Heroes' },
  { id: 'P5', name: 'P5', price: 24, category: '"P" Heroes' },
  { id: 'P6', name: 'P6', price: 24, category: '"P" Heroes' },

  // Appetizers
  { id: 'A1', name: '5 for $6', price: 6, category: 'Appetizers' },
  { id: 'A2', name: 'Side of Sauce', price: 2, category: 'Appetizers' },
  { id: 'A3', name: 'Rice Balls', price: 1.5, category: 'Appetizers' },
  { id: 'A4', name: 'Potato Croquettes', price: 1.5, category: 'Appetizers' },
  { id: 'A5', name: 'Prosciutto Balls', price: 1.5, category: 'Appetizers' },
  { id: 'A6', name: 'Pepp and Ched Rice Balls', price: 1.5, category: 'Appetizers' },
  { id: 'A7', name: 'Breaded Ravioli', price: 1.5, category: 'Appetizers' },
  { id: 'A8', name: 'Large Rice Balls', price: 6.5, category: 'Appetizers' },
  { id: 'A9', name: 'Rice Ball Special', price: 9.5, category: 'Appetizers' },
  { id: 'A10', name: 'Mozzarella Carozza', price: 4.95, category: 'Appetizers' },
  { id: 'A11', name: '1 LB. Stuffed Mushrooms', price: 11.99, category: 'Appetizers' },
  { id: 'A12', name: '1/2 LB. Potato Salad', price: 3, category: 'Appetizers' },
  { id: 'A13', name: '1 LB. Potato Salad', price: 6, category: 'Appetizers' },
  { id: 'A14', name: '1/2 LB. Macaroni Salad', price: 3, category: 'Appetizers' },
  { id: 'A15', name: '1 LB. Macaroni Salad', price: 6, category: 'Appetizers' },
  { id: 'A16', name: '1/2 LB. Coleslaw', price: 3, category: 'Appetizers' },
  { id: 'A17', name: '1 LB. Coleslaw', price: 6, category: 'Appetizers' },

  { id: "B1", name: "20oz Soda", price: 3.0, category: "Beverages" },
  { id: "B2", name: "2 Liter Soda", price: 5.0, category: "Beverages" },
  { id: "B3", name: "12oz. Boylan", price: 3.0, category: "Beverages" },
  { id: "B4", name: "12oz. Manhattan Special", price: 4.0, category: "Beverages" },
  { id: "B5", name: "8oz Red Bull", price: 3.5, category: "Beverages" },
  { id: "B6", name: "11oz Pellegrino", price: 3.0, category: "Beverages" },
  { id: "B7", name: "Snapple", price: 3.0, category: "Beverages" },
  { id: "B8", name: "Gatorade", price: 3.0, category: "Beverages" },
  { id: "B9", name: "Vitamin Water", price: 3.0, category: "Beverages" },

  { id: "C1", name: "Hals", price: 2.0, category: "Chips" },
  { id: "C2", name: "Small Wise", price: 2.5, category: "Chips" },
  { id: "C3", name: "Large Wise", price: 4.79, category: "Chips" },

  { id: "K1", name: "Chicken Fingers", price: 5.0, category: "Kid's Menu" },
  { id: "K2", name: "Pasta", price: 5.0, category: "Kid's Menu" },
  { id: "K3", name: "Sandwich", price: 5.0, category: "Kid's Menu" },,

  { id: 'bread1', name: 'Italian Bread', price: 1.5, category: 'Bread Items' },
  { id: 'bread2', name: 'Hero Bread', price: 1.5, category: 'Bread Items' },
  { id: 'bread3', name: 'Seeded Semolina Bread Loaf', price: 4.0, category: 'Bread Items' },
  { id: 'bread4', name: 'Ciabatta Bread', price: 4.0, category: 'Bread Items' },
  { id: 'bread5', name: 'Seeded Twist', price: 3.0, category: 'Bread Items' },
  { id: 'bread6', name: 'Olive Bread', price: 6.0, category: 'Bread Items' },
  { id: 'bread7', name: 'Prosciutto Bread', price: 10.0, category: 'Bread Items' },
  { id: 'bread8', name: 'Focaccia - Small', price: 3.75, category: 'Bread Items' },
  { id: 'bread9', name: 'Focaccia - Large', price: 5.75, category: 'Bread Items' },,

  { id: 'dessert1', name: 'Sorbets', price: 7.5, category: 'Desserts' },
  { id: 'dessert2', name: 'Dessert Cups', price: 4.79, category: 'Desserts' },
  { id: 'dessert3', name: 'Tartufo', price: 4.5, category: 'Desserts' },
  { id: 'dessert4', name: 'Tortoni', price: 2.5, category: 'Desserts' },
  { id: 'dessert5', name: 'Spumoni Pieces', price: 2.5, category: 'Desserts' },
  { id: 'dessert6', name: '7 Layer Cookies', price: 7.5, category: 'Desserts' },
  { id: 'dessert7', name: 'Rainbow Crumb', price: 6.0, category: 'Desserts' },
  { id: 'dessert8', name: 'Brownie with Vanilla Frosting', price: 2.0, category: 'Desserts' },
  { id: 'dessert9', name: 'Cannoli Cookies', price: 8.0, category: 'Desserts' },
  { id: 'dessert10', name: 'Lemon Twist Cookies', price: 8.0, category: 'Desserts' },
  { id: 'dessert11', name: 'Black & White Cookies', price: 9.0, category: 'Desserts' },
  { id: 'dessert12', name: 'Linzer Tart Cookies', price: 8.0, category: 'Desserts' },
  { id: 'dessert13', name: "Grandmas Cookies", price: 5.25, category: 'Desserts' },
  { id: 'dessert14', name: 'Cannoli Bar', price: 2.0, category: 'Desserts' },
  { id: 'dessert15', name: 'Large Black & White Cookie', price: 3.0, category: 'Desserts' },,

  { id: 'grocery1', name: 'Fresh Mozzarella', price: 6.5, category: 'Grocery Items' },
  { id: 'grocery2', name: '3 for $17 Mozzarella', price: 17.0, category: 'Grocery Items' },
  { id: 'grocery3', name: '8oz Smoked Mozzarella', price: 3.75, category: 'Grocery Items' },
  { id: 'grocery4', name: 'Smoked Mozzarella', price: 7.0, category: 'Grocery Items' },
  { id: 'grocery5', name: '8oz Regular Ciliegine', price: 4.39, category: 'Grocery Items' },
  { id: 'grocery6', name: '8oz Marinated Ciliegine', price: 5.0, category: 'Grocery Items' },
  { id: 'grocery7', name: '8oz Burrata Mozzarella', price: 6.0, category: 'Grocery Items' },
  { id: 'grocery8', name: '8oz Bufala Mozzarella', price: 6.0, category: 'Grocery Items' },
  { id: 'grocery9', name: '8oz Locatelli', price: 9.39, category: 'Grocery Items' },
  { id: 'grocery10', name: '16oz Locatelli', price: 18.0, category: 'Grocery Items' },
  { id: 'grocery11', name: 'Pizza Dough', price: 2.0, category: 'Grocery Items' },
  { id: 'grocery12', name: 'Small Marinara Sauce', price: 4.5, category: 'Grocery Items' },
  { id: 'grocery13', name: 'Large Marinara Sauce', price: 7.5, category: 'Grocery Items' },
  { id: 'grocery14', name: 'Small Vodka Sauce', price: 5.0, category: 'Grocery Items' },
  { id: 'grocery15', name: 'Large Vodka Sauce', price: 8.5, category: 'Grocery Items' },

  { id: 'milk1', name: '1/4 Milk', price: 2.19, category: 'Milk' },
  { id: 'milk2', name: '1/2 Gallon Milk', price: 3.69, category: 'Milk' },
  { id: 'milk3', name: 'Gallon Milk', price: 5.49, category: 'Milk' },
];

const addonCategories = [
  { title: 'Extra Meat Options', options: [
      { name: 'Extra Chicken Cutlet', price: 6 },
      { name: 'Extra Grilled Chicken', price: 6 },
      { name: 'Extra Eggplant', price: 3 },
      { name: 'Extra Prosciutto Di Parma', price: 6 },
      { name: 'Extra Veal', price: 6 },
      { name: 'Extra Bacon', price: 4 },
      { name: 'Extra Meat', price: 4 },
  ]},
  { title: 'Extra Cheese Options', options: [
      { name: 'Extra Mozzarella Cheese', price: 3 },
      { name: 'Extra Smoked Mozzarella Cheese', price: 3 },
      { name: 'Extra Fresh Ricotta', price: 3 },
      { name: 'Extra Shaved Reggiano Cheese', price: 4 },
      { name: 'Extra Cheese', price: 2 },
  ]},
  { title: 'Extra Sauce/Gravy Options', options: [
      { name: 'Extra Tomato Sauce', price: 1 },
      { name: 'Extra Vodka Sauce', price: 2 },
      { name: 'Vodka Sauce Substitute', price: 1 },
      { name: 'Extra Pesto Sauce', price: 3 },
      { name: 'Extra Brown Gravy', price: 2 },
  ]},
  { title: 'Extra Toppings Options', options: [
      { name: 'Extra 10 Cheese Garlic Mix', price: 3 },
      { name: 'Extra Arugula', price: 1 },
      { name: 'Extra Basil Mix', price: 3 },
      { name: 'Extra Broccoli Rabe', price: 3 },
      { name: 'Extra Bruschetta', price: 3 },
      { name: 'Extra Fresh Basil', price: 1 },
      { name: 'Extra Giardiniera Salad', price: 2 },
      { name: 'Extra Lettuce', price: 0.5 },
      { name: 'Extra Muffuletta', price: 3 },
      { name: 'Extra Mushroom Mix', price: 3 },
      { name: 'Extra Pickles', price: 1 },
      { name: 'Extra Stuffed Mushrooms', price: 3 },
      { name: 'Extra Sun-Dried Tomatoes', price: 3 },
      { name: 'Extra Tomatoes', price: 0.5 },
  ]},
  { title: 'Extra Peppers Options', options: [
      { name: 'Extra Banana Peppers', price: 3 },
      { name: 'Extra Roasted Peppers', price: 3 },
      { name: 'Extra Hot Cherry Peppers', price: 2 },
      { name: 'Extra Hot Stuffed Peppers', price: 3 },
      { name: 'Extra Jalapeños', price: 1 },
      { name: 'Extra Sweet Stuffed Peppers', price: 3 },
      { name: 'Extra Peppers & Onions', price: 2 },
  ]},
  { title: 'Extra Condiments Options', options: [
      { name: 'Extra Balsamic Glaze', price: 2 },
      { name: 'Extra Balsamic Vinegar', price: 1 },
      { name: 'Extra BBQ Sauce', price: 1 },
      { name: 'Extra Caesar Dressing', price: 1 },
      { name: 'Extra Hot Sauce', price: 1 },
      { name: 'Extra Ranch', price: 1 },
      { name: 'Extra Spicy Ranch', price: 1 },
  ]}
];

const specialCustomAddons = [
  { name: 'Any Meat & Cheese', price: 15 },
  { name: 'Any Meat & Mozzarella', price: 16 },
  { name: 'Cutlet & Cheese', price: 15 },
  { name: 'Cutlet & Mozzarella', price: 16 },
  { name: 'Grilled Chicken & Cheese', price: 15 },
  { name: 'Grilled Chicken & Mozzarella', price: 16 },
  { name: 'Eggplant & Cheese', price: 14 },
  { name: 'Eggplant & Mozzarella', price: 15 },
  { name: 'Prosciutto or Veal & Cheese', price: 18 },
  { name: 'Prosciutto or Veal & Mozzarella', price: 19 },
  { name: 'Just Tuna (No Cheese)', price: 12 },
  { name: 'Just Grilled Veggies (No Cheese)', price: 12 },
  { name: 'Just Meat (No Cheese)', price: 13 },
  { name: 'Just Proscuitto or Veal (No Cheese)', price: 16 },
];

const categories = ['All', 'Regular Heroes', 'Smoked Mozzarella Heroes', '"P" Heroes', 'Chips', 'Bread Items', 'Appetizers', "Kid's Menu", 'Beverages', 'Desserts', 'Grocery Items', 'Milk'];

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [addonQuantities, setAddonQuantities] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [customTip, setCustomTip] = useState(0);
  const [manualSubtotal, setManualSubtotal] = useState('');
  const [expandedAddonCategories, setExpandedAddonCategories] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addonSearch, setAddonSearch] = useState("");

  const heroCategories = ['Regular Heroes', 'Smoked Mozzarella Heroes', '"P" Heroes'];
  const isHeroItem = (item) => heroCategories.includes(item.category) || item.name === 'Custom';

  const getAvailableAddons = (item) => {
    if (!isHeroItem(item)) return [];
    const customOptions = item.name === 'Custom'
      ? [{
          title: 'Special Custom Addons',
          options: [
            { name: 'Any Meat & Cheese', price: 15 },
            { name: 'Any Meat & Mozzarella', price: 16 },
            { name: 'Cutlet & Cheese', price: 15 },
            { name: 'Cutlet & Mozzarella', price: 16 },
            { name: 'Grilled Chicken & Cheese', price: 15 },
            { name: 'Grilled Chicken & Mozzarella', price: 16 },
            { name: 'Eggplant & Cheese', price: 14 },
            { name: 'Eggplant & Mozzarella', price: 15 },
            { name: 'Prosciutto or Veal & Cheese', price: 18 },
            { name: 'Prosciutto or Veal & Mozzarella', price: 19 },
            { name: 'Just Tuna (No Cheese)', price: 12 },
            { name: 'Just Grilled Veggies (No Cheese)', price: 12 },
            { name: 'Just Meat (No Cheese)', price: 13 },
            { name: 'Just Proscuitto or Veal (No Cheese)', price: 16 },
          ]
        }]
      : [];
    return [...customOptions, ...addonCategories];
  };

  const filteredItems = items.filter(
    (item) => (activeCategory === 'All' || item.category === activeCategory) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getItemCountInCategory = (cat) => {
    if (cat === 'All') return items.length;
    return items.filter(item => item.category === cat).length;
  };

  const toggleAddonCategory = (title) => {
    setExpandedAddonCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  
  function openCustomization(item, index = null) {
    if (!isHeroItem(item)) {
      const itemWithAddons = { ...item, addons: [], total: item.price };
      setCart((prev) => [...prev, itemWithAddons]);
      return;
    }
    setSelectedItem(item);
    setEditIndex(index);
    const initialQuantities = index !== null ? Object.fromEntries(item.addons?.map(a => [a.name, a.qty]) || []) : {};
    setAddonQuantities(initialQuantities);
  }


  function saveToCart() {
    const addons = Object.entries(addonQuantities).map(([name, qty]) => {
      const price = addonCategories.flatMap(c => c.options).find(opt => opt.name === name)?.price ??
                  specialCustomAddons.find(opt => opt.name === name)?.price ?? 0;
      return { name, qty, price };
    });
    const itemWithAddons = {
      ...selectedItem,
      addons,
      total: selectedItem.price + addons.reduce((sum, a) => sum + a.price * a.qty, 0),
    };
    setCart((prev) => {
      const updated = [...prev];
      if (editIndex !== null) updated[editIndex] = itemWithAddons;
      else updated.push(itemWithAddons);
      return updated;
    });
    setSelectedItem(null);
    setAddonSearch('');
    setExpandedAddonCategories([]);
    setAddonQuantities({});
    setEditIndex(null);
  }

  function removeFromCart(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function removeAddonFromItem(itemIndex, addonIndex) {
    setCart((prev) => {
      const updated = [...prev];
      const item = updated[itemIndex];
      item.addons = item.addons.filter((_, i) => i !== addonIndex);
      item.total = item.price + item.addons.reduce((sum, a) => sum + a.price * a.qty, 0);
      return updated;
    });
  }

  const rawSubtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const subtotal = manualSubtotal ? parseFloat(manualSubtotal) || 0 : rawSubtotal;
  const tip = Number(customTip);
  const subtotalWithTip = subtotal + tip;
  const tax = subtotalWithTip * 0.08875;
  const subtotalWithTax = subtotalWithTip + tax;
  const serviceFee = subtotalWithTax * 0.0395;
  
  function clearCart() {
    setManualSubtotal('');
    setCart([]);
    setCustomTip(0);
  }


  function groupCartItems(cart) {
    const grouped = [];
    cart.forEach(item => {
      const matchIndex = grouped.findIndex(g =>
        g.name === item.name &&
        JSON.stringify(g.addons) === JSON.stringify(item.addons)
      );
      if (matchIndex >= 0) {
        grouped[matchIndex].quantity += 1;
        grouped[matchIndex].total += item.total;
      } else {
        grouped.push({ ...item, quantity: 1 });
      }
    });
    return grouped;
  }

  const groupedCart = groupCartItems(cart);

const finalTotal = subtotalWithTax + serviceFee;

return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', background: '#f9f9f9', padding: 20, minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1 style={{ fontSize: '1.8rem' }}>Heroes POS</h1>
        <button onClick={() => setShowCart(true)} style={{ position: 'relative', background: '#007AFF', color: '#fff', border: 'none', borderRadius: 20, padding: '6px 12px', fontSize: 14 }}>
          🛒 {cart.length} • ${subtotal.toFixed(2)}
        </button>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..." style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #ccc', marginBottom: 16, fontSize: '16px' }}
        style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #ccc', marginBottom: 16 }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{ padding: '6px 12px', borderRadius: 8, border: 'none', background: activeCategory === cat ? '#007AFF' : '#eee' }}
          >
            {cat} ({getItemCountInCategory(cat)})
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 12 }}>
        {filteredItems.map(item => (
          <div
            key={item.id}
            style={{ padding: 10, borderRadius: 8, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer' }}
            onClick={() => openCustomization(item)}
          >
            <strong>{item.name}</strong>
            <div>${item.price.toFixed(2)}</div>
          </div>
        ))}
      </div>

      {selectedItem && isHeroItem(selectedItem) && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={(e) => {
      if (e.target === e.currentTarget) {
        setSelectedItem(null);
        setAddonSearch('');
        setExpandedAddonCategories([]);
      }
    }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', padding: 20, borderRadius: 18, width: '90%', maxWidth: 500, maxHeight: '90%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>Customize {selectedItem.name}</h2>
              <div>
                <button onClick={() => { setSelectedItem(null);
    setAddonSearch('');
    setExpandedAddonCategories([]); setAddonSearch(''); setExpandedAddonCategories([]); }} style={{ marginRight: 12, padding: '8px 12px', borderRadius: 8, border: '1px solid #ccc', background: '#f2f2f2' }}>Cancel</button>
                <button onClick={saveToCart} style={{ padding: '8px 12px', borderRadius: 8, background: '#007AFF', color: '#fff', border: 'none' }}>Add to Cart</button>
              </div>
            </div>
              <div>
              </div>
            </div>
            
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
            </div>


            <input
              type="text"
              value={addonSearch}
              onChange={(e) => setAddonSearch(e.target.value)}
              placeholder="Search addons..." style={{ width: '96%', padding: 6, fontSize: '16px', marginBottom: 10, borderRadius: 6, border: '1px solid #ccc' }}
              style={{ width: '96%', padding: 6, fontSize: 14, marginBottom: 10, borderRadius: 6, border: '1px solid #ccc' }}
            />

            {getAvailableAddons(selectedItem).map((cat, idx) => (
              <div key={idx} style={{ marginBottom: 14 }}>
                <div
                  onClick={() => toggleAddonCategory(cat.title)}
                  style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', background: '#f2f2f7', padding: 10, borderRadius: 10 }}
                >
                  <strong>{cat.title}</strong>
                  <span style={{ fontSize: 18 }}>{(addonSearch || expandedAddonCategories.includes(cat.title)) ? '▾' : '▸'}</span>
                </div>
                {(addonSearch || expandedAddonCategories.includes(cat.title)) && (
                  <div style={{ padding: '8px 0' }}>
                    {(addonSearch ? cat.options.filter(opt => opt.name.toLowerCase().includes(addonSearch.toLowerCase())) : cat.options).map((opt, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '6px 0' }}>
                        <span>{opt.name}</span>
                        <div>
                          <button onClick={() => setAddonQuantities(q => ({ ...q, [opt.name]: Math.max((q[opt.name] || 0) - 1, 0) }))} style={{ padding: '2px 6px', borderRadius: 6 }}>-</button>
                          <span style={{ margin: '0 8px' }}>{addonQuantities[opt.name] || 0}</span>
                          <button onClick={() => setAddonQuantities(q => ({ ...q, [opt.name]: (q[opt.name] || 0) + 1 }))} style={{ padding: '2px 6px', borderRadius: 6 }}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={(e) => { if (e.target === e.currentTarget) { setShowCart(false); setManualSubtotal(''); } }}>
          <div style={{ background: '#fff', padding: 20, borderRadius: 18, width: '90%', maxWidth: 500, maxHeight: '90%', overflowY: 'auto' }}>
            {groupedCart.map((item, idx) => (
              <div key={idx} style={{ background: '#f2f2f2', padding: 12, borderRadius: 10, marginBottom: 10 }}>
                <div>
                  <strong>{item.name}</strong>{item.quantity > 1 ? ` × ${item.quantity}` : ''} - ${(item.price * item.quantity).toFixed(2)}
{
  item.category?.includes('Hero') && (() => {
    const matchingCartItem = cart.find(
      cartItem => cartItem.name === item.name && JSON.stringify(cartItem.addons) === JSON.stringify(item.addons)
    );
    return matchingCartItem ? (
      <div style={{ marginTop: 8 }}>
        <label style={{ fontSize: 14 }}>
          Manual Price: $
          <input
            type="number"
            value={matchingCartItem.manualPrice ?? ''}
            onChange={(e) => {
              const updatedCart = cart.map(cartItem => {
                if (
                  cartItem.name === item.name &&
                  JSON.stringify(cartItem.addons) === JSON.stringify(item.addons)
                ) {
                  const manualPrice = parseFloat(e.target.value) || 0;
                  return {
                    ...cartItem,
                    manualPrice,
                    total:
                      manualPrice +
                      cartItem.addons.reduce(
                        (sum, a) => sum + a.price * a.qty,
                        0
                      )
                  };
                }
                return cartItem;
              });
              setCart(updatedCart);
            }}
            style={{
              marginLeft: 8,
              width: 80,
              padding: 4,
              borderRadius: 6,
              border: '1px solid #ccc',
              fontSize: '14px',
            }}
          />
        </label>
      </div>
    ) : null;
  })()
}

                {item.category?.includes('Hero') && (
                  <div style={{ marginTop: 8 }}>
                    <label style={{ fontSize: 14 }}>
                      Manual Price: $
                      <input
                        type="number"
                        value={item.manualPrice ?? ''}
                        onChange={(e) => {
                          const updatedCart = [...cart];
                          updatedCart[item.indexes[0]] = {
                            ...updatedCart[item.indexes[0]],
                            manualPrice: parseFloat(e.target.value) || 0,
                            total:
                              (parseFloat(e.target.value) || 0) +
                              updatedCart[item.indexes[0]].addons.reduce(
                                (sum, a) => sum + a.price * a.qty,
                                0
                              ),
                          };
                          setCart(updatedCart);
                        }}
                        style={{
                          marginLeft: 8,
                          width: 80,
                          padding: 4,
                          borderRadius: 6,
                          border: '1px solid #ccc',
                          fontSize: '14px',
                        }}
                      />
                    </label>
                  </div>
                )}

                  <button onClick={() => openCustomization(item, idx)} style={{ marginLeft: 10 }}>Edit</button>
                  <button onClick={() => removeFromCart(idx)} style={{ marginLeft: 10, color: 'red' }}>Remove</button>
                </div>
                <ul>
                  {item.addons && item.addons.map((addon, i) => (
                    <li key={i}>
                      {addon.qty}× {addon.name} (${(addon.price * addon.qty).toFixed(2)})
                      <button onClick={() => removeAddonFromItem(idx, i)} style={{ marginLeft: 6, color: 'red' }}>✕</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{ marginTop: 20 }}>
              
              
              
              <label style={{ display: 'block', marginBottom: 8 }}>
                Manual Subtotal: $
                <input
                  type="number"
                  value={manualSubtotal}
                  onChange={(e) => setManualSubtotal(e.target.value)}
                  placeholder={rawSubtotal.toFixed(2)}
                  style={{ marginLeft: 8, width: 100, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: '16px' }}
                />
                <button onClick={() => {
                  const base = parseFloat(manualSubtotal || rawSubtotal.toFixed(2));
                  setManualSubtotal((base - 0.50).toFixed(2));
                }} style={{ marginLeft: 8, padding: '2px 8px' }}>−</button>
                <button onClick={() => {
                  const base = parseFloat(manualSubtotal || rawSubtotal.toFixed(2));
                  setManualSubtotal((base + 0.50).toFixed(2));
                }} style={{ marginLeft: 4, padding: '2px 8px' }}>+</button>
              </label>



              <label style={{ display: 'block', marginBottom: 8 }}>
                Tip: $
                <input
                  type="number"
                  value={customTip}
                  onChange={(e) => setCustomTip(e.target.value)}
                  style={{ marginLeft: 8, width: 80, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: '16px' }}
                />
              </label>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tip: ${tip.toFixed(2)}</p>
              <p>Subtotal with Tip: ${subtotalWithTip.toFixed(2)}</p>
              <p>Sales Tax (8.875%): ${tax.toFixed(2)}</p>
              <p>Subtotal with Tax: ${subtotalWithTax.toFixed(2)}</p>
              <p>Service Fee (3.95%): ${serviceFee.toFixed(2)}</p>
              <p><strong>Final Total: ${finalTotal.toFixed(2)}</strong></p>
            </div>

            <div style={{ marginTop: 16, textAlign: 'right' }}>
              
              <button onClick={clearCart} style={{ padding: '8px 16px', marginRight: 10, borderRadius: 8, background: '#FF3B30', color: '#fff', border: 'none' }}>
                Clear Cart
              </button>

<button onClick={() => { setShowCart(false); setManualSubtotal(''); }} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #ccc', background: '#f2f2f2' }}>Close Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;