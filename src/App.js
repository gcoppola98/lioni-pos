import React, { useState, useEffect } from 'react';

const items = [
  // Party Heroes: per-foot pricing plus a single $3 cutting board fee.
  { id: '#22', name: 'Custom', price: 0 },
  { id: '#1', name: '#1', price: 16, category: 'Regular Heroes' , description: "Salami, Fresh Mozzarella, Olive Oil, Salt, Black Pepper And Oregano" },
  { id: '#2', name: '#2', price: 19, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Olive Oil And Black Pepper" },
  { id: '#3', name: '#3', price: 20, category: 'Regular Heroes' , description: "Ham, Lioni Fresh Mozzarella, Basil, Sun-Dried Tomatoes, Olive Oil, Salt And Black Pepper" },
  { id: '#4', name: '#4', price: 13, category: 'Regular Heroes' , description: "Lioni Fresh Mozzarella, Tomato, Basil, Olive Oil, Salt And Pepper" },
  { id: '#5', name: '#5', price: 22, category: 'Regular Heroes' , description: "Ham, Salami, Swiss Cheese, Olive Oil, And Basil Mix" },
  { id: '#6', name: '#6', price: 19, category: 'Regular Heroes' , description: "Turkey, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil, Oregano, Black Pepper" },
  { id: '#7', name: '#7', price: 23, category: 'Regular Heroes' , description: "Sweet Capicola, Ham, Lioni Fresh Mozzarella, Sun-Dried Tomatoes, Vinegar, Olive Oil, Oregano, Salt And Black Pepper" },
  { id: '#8', name: '#8', price: 18, category: 'Regular Heroes' , description: "Hot Capicola, Yellow American Cheese Or Jalapeño Cheese And A Hot Stuffed Pepper" },
  { id: '#9', name: '#9', price: 19, category: 'Regular Heroes' , description: "Salami, Lioni Fresh Mozzarella , Roasted Peppers, Olive Oil, Salt And Black Pepper" },
  { id: '#10', name: '#10', price: 17, category: 'Regular Heroes' , description: "Mortadella, Lioni Fresh Mozzarella, Lettuce And Black Pepper" },
  { id: '#11', name: '#11', price: 14, category: 'Regular Heroes' , description: "Roasted Peppers, Lioni Fresh Mozzarella, Green Pesto Sauce , A Drizzle Of Olive Oil And Black Pepper" },
  { id: '#12', name: '#12', price: 22, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Sweet Stuffed Peppers, Lettuce, Olive Oil, Salt And Black Pepper" },
  { id: '#13', name: '#13', price: 19, category: 'Regular Heroes' , description: "Ham, Bologna, White American Cheese, Lettuce, Mayo And Tomatoes" },
  { id: '#14', name: '#14', price: 18, category: 'Regular Heroes' , description: "Hot Or Sweet Capicola, Lioni Fresh Mozzarella, Tomatoes, Fresh Basil, Oregano, Olive Oil, Salt And Black Pepper" },
  { id: '#15', name: '#15', price: 17, category: 'Regular Heroes' , description: "Honey Roasted Turkey, Lioni Fresh Mozzarella, Lettuce, Tomato, Vinegar, Olive Oil, Salt And Black Pepper" },
  { id: '#16', name: '#16', price: 17, category: 'Regular Heroes' , description: "Roast Beef, Lioni Fresh Mozzarella, Lettuce, Mayo, Salt And Black Pepper" },
  { id: '#17', name: '#17', price: 19, category: 'Regular Heroes' , description: "Olive Loaf, Sopressata, White American, Lettuce And Mayo" },
  { id: '#18', name: '#18', price: 15, category: 'Regular Heroes' , description: "Grilled Italian Sausage, Olive Oil, Vinegar, Lettuce, Salt, Black Pepper, And A Pinch Of Oregano" },
  { id: '#19', name: '#19', price: 16, category: 'Regular Heroes' , description: "Roast Pork, Lioni Smoked Mozzarella, Olive Oil And Black Pepper" },
  { id: '#20', name: '#20', price: 16, category: 'Regular Heroes' , description: "Pepper Ham, Swiss Cheese, Tomato And Mayo" },
  { id: '#21', name: '#21', price: 22, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Pesto Sauce, Olive Oil, And Black Pepper" },
  { id: '#23', name: '#23', price: 19, category: 'Regular Heroes' , description: "Pepperoni, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil And Lettuce" },
  { id: '#24', name: '#24', price: 18, category: 'Regular Heroes' , description: "Bologna, White American Cheese, Ham And Mustard" },
  { id: '#25', name: '#25', price: 25, category: 'Regular Heroes' , description: "Hot Capicola, Salami, Pepperoni, Swiss, Provolone, Stuffed Peppers And Deli Mustard" },
  { id: '#26', name: '#26', price: 21, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Arugula And Balsamic Vinegar" },
  { id: '#27', name: '#27', price: 14, category: 'Regular Heroes' , description: "Lioni Fresh Mozzarella , Tomatoes, Arugula, Basil, Olive Oil, Oregano, Salt And Pepper" },
  { id: '#28', name: '#28', price: 19, category: 'Regular Heroes' , description: "Salami, Provolone, Arugula, Sun-Dried Tomatoes, Olive Oil, Oregano, And Pepper" },
  { id: '#29', name: '#29', price: 16, category: 'Regular Heroes' , description: "Meatball Parmigiana" },
  { id: '#30', name: '#30', price: 20, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Tomatoes, Olive Oil, Oregano, Salt And Fresh Basil" },
  { id: '#31', name: '#31', price: 16, category: 'Regular Heroes' , description: "Sweet Capicola, Provolone, Lettuce, Tomatoes, Mustard And Mayo" },
  { id: '#32', name: '#32', price: 20, category: 'Regular Heroes' , description: "Grilled Chicken, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil, Vinegar, Salt And Pepper" },
  { id: '#33', name: '#33', price: 16, category: 'Regular Heroes' , description: "Sweet Or Hot Grilled Italian Sausage, And Bruschetta" },
  { id: '#34', name: '#34', price: 18, category: 'Regular Heroes' , description: "Hot Italian Sausage, Bruschetta, And Lioni Fresh Mozzarella" },
  { id: '#35', name: '#35', price: 16, category: 'Regular Heroes' , description: "Chicken Cutlet Parmigiana" },
  { id: '#36', name: '#36', price: 12, category: 'Regular Heroes' , description: "Potatoes And Eggs" },
  { id: '#37', name: '#37', price: 16, category: 'Regular Heroes' , description: "Turkey, American Cheese, Tomatoes And Mustard" },
  { id: '#38', name: '#38', price: 16, category: 'Regular Heroes' , description: "Bologna, Lioni Fresh Mozzarella, Lettuce, Mayo, Salt And Pepper" },
  { id: '#39', name: '#39', price: 14, category: 'Regular Heroes' , description: "Tuna Fish, Lioni Fresh Mozzarella, Lettuce And Tomato" },
  { id: '#40', name: '#40', price: 14, category: 'Regular Heroes' , description: "Italian Tuna Fish, Lettuce , Tomato, And Onions" },
  { id: '#41', name: '#41', price: 21, category: 'Regular Heroes' , description: "Milk-Fed Veal Parmigiana With Grated Cheese" },
  { id: '#42', name: '#42', price: 19, category: 'Regular Heroes' , description: "Hot Sopressata, Bruschetta And Lioni Fresh Mozzarella" },
  { id: '#43', name: '#43', price: 19, category: 'Regular Heroes' , description: "Sopressata, Lioni Fresh Mozzarella And Red Pesto" },
  { id: '#44', name: '#44', price: 18, category: 'Regular Heroes' , description: "Broccoli Rabe And Italian Sausage" },
  { id: '#45', name: '#45', price: 15, category: 'Regular Heroes' , description: "Sicilian Salami, Swiss Cheese And Deli Mustard" },
  { id: '#46', name: '#46', price: 20, category: 'Regular Heroes' , description: "Sopressata (Hot Or Sweet) Ham, Provolone, Lettuce, Tomatoes, Oil And Vinegar" },
  { id: '#47', name: '#47', price: 27, category: 'Regular Heroes' , description: "Bresaola, Arugula, Olive Oil, Shaved Reggiano, Pepper And Oregano" },
  { id: '#48', name: '#48', price: 19, category: 'Regular Heroes' , description: "Sicilian Salami, Genoa Salami, And Lioni Fresh Mozzarella" },
  { id: '#49', name: '#49', price: 16, category: 'Regular Heroes' , description: "Italian Sausage And Peppers" },
  { id: '#50', name: '#50', price: 18, category: 'Regular Heroes' , description: "Hot Turkey, Lioni Fresh Mozzarella, And Gravy" },
  { id: '#51', name: '#51', price: 14, category: 'Regular Heroes' , description: "Lioni Fresh Mozzarella, Arugula, And Roasted Peppers" },
  { id: '#52', name: '#52', price: 18, category: 'Regular Heroes' , description: "Roast Beef, Lioni Fresh Mozzarella, And Brown Gravy" },
  { id: '#53', name: '#53', price: 16, category: 'Regular Heroes' , description: "Eggplant Parmigiana" },
  { id: '#54', name: '#54', price: 20, category: 'Regular Heroes' , description: "Chicken Cutlet, Melted Lioni Fresh Mozzarella, Crispy Bacon, Bbq Sauce" },
  { id: '#55', name: '#55', price: 21, category: 'Regular Heroes' , description: "Ham, Salami, Provolone, Shaved Reggiano, Olive Oil Salt & Pepper" },
  { id: '#56', name: '#56', price: 16, category: 'Regular Heroes' , description: "Salami, Provolone, Olive Oil, Lettuce & Tomato" },
  { id: '#57', name: '#57', price: 20, category: 'Regular Heroes' , description: "Honey Turkey, Ham Cappy, Lioni Fresh Mozzarella, Tomato, Olive Oil, Salt, Pepper & Oregano" },
  { id: '#58', name: '#58', price: 16, category: 'Regular Heroes' , description: "(You’Ll Go Out Of Your Head For This One) Mortadella With Pistachio, Fresh Ricotta, Salt & Pepper" },
  { id: '#59', name: '#59', price: 23, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Mortadella, Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, Olive Oil, Salt, Pepper, Oregano" },
  { id: '#60', name: '#60', price: 18, category: 'Regular Heroes' , description: "Fried Eggplant, Lioni Fresh Mozzarella, & Mushroom Stuffing" },
  { id: '#61', name: '#61', price: 20, category: 'Regular Heroes' , description: "Sicilian Salami, Ham Cappy, Lioni Fresh Mozzarella, Olive Oil, Salt, Pepper, & Oregano" },
  { id: '#62', name: '#62', price: 22, category: 'Regular Heroes' , description: "Chicken Cutlet, Prosciutto Di Parma, Lioni Fresh Mozzarella, And Basil Mix" },
  { id: '#63', name: '#63', price: 21, category: 'Regular Heroes' , description: "Ham, Sopressata ,White American, Honey Mustard, Lettuce, Tomato, Gardenia Salad" },
  { id: '#64', name: '#64', price: 19, category: 'Regular Heroes' , description: "Sopressata, Roast Beef, White American & Balsamic Vinegar" },
  { id: '#65', name: '#65', price: 20, category: 'Regular Heroes' , description: "Grilled Chicken, Broccoli Rabe, Lioni Fresh Mozzarella, Olive Oil, Salt & Pepper" },
  { id: '#66', name: '#66', price: 20, category: 'Regular Heroes' , description: "Chicken Cutlet, Broccoli Rabe, Lioni Fresh Mozzarella, Olive Oil, Salt & Pepper" },
  { id: '#67', name: '#67', price: 16, category: 'Regular Heroes' , description: "Roast Beef, White American Cheese, Lettuce, Tomato & Mayo" },
  { id: '#68', name: '#68', price: 19, category: 'Regular Heroes' , description: "Turkey, Roast Beef, Jalapeño Cheese And Hot Sauce" },
  { id: '#69', name: '#69', price: 25, category: 'Regular Heroes' , description: "Roast Beef, Sopressata, Lioni Fresh Mozzarella, Italian Sausage, & Stuffed Mushroom" },
  { id: '#70', name: '#70', price: 18, category: 'Regular Heroes' , description: "Chicken Cutlet, Provolone, Balsamic Vinegar, Roasted Peppers, Salt & Pepper" },
  { id: '#71', name: '#71', price: 20, category: 'Regular Heroes' , description: "Chicken Cutlet, Lioni Fresh Mozzarella, Roasted Peppers, Balsamic Vinegar" },
  { id: '#72', name: '#72', price: 16, category: 'Regular Heroes' , description: "Ham Cappy, Lioni Fresh Mozzarella, Lettuce , Tomato, Olive Oil, Salt & Pepper" },
  { id: '#73', name: '#73', price: 18, category: 'Regular Heroes' , description: "Hot Sopressata, Jalapeno Cheese, Hot Stuffed Pepper, And A Dash Of Hot Sauce" },
  { id: '#74', name: '#74', price: 16, category: 'Regular Heroes' , description: "Italian Sausage- Sweet Or Hot And Melted White American Cheese" },
  { id: '#75', name: '#75', price: 18, category: 'Regular Heroes' , description: "Oven Gold Turkey, Fried Eggplant And Yellow American Cheese" },
  { id: '#76', name: '#76', price: 21, category: 'Regular Heroes' , description: "Roast Beef, Sopressata, White American Cheese And Gardenia Salad" },
  { id: '#77', name: '#77', price: 16, category: 'Regular Heroes' , description: "Honey Turkey, Munster Cheese And Bbq Sauce" },
  { id: '#78', name: '#78', price: 20, category: 'Regular Heroes' , description: "Grilled Chicken, Lioni Fresh Mozzarella, Fried Eggplant & Honey Mustard" },
  { id: '#79', name: '#79', price: 15, category: 'Regular Heroes' , description: "Fried Meat Balls, Lettuce, Vinegar, Salt & Pepper" },
  { id: '#80', name: '#80', price: 22, category: 'Regular Heroes' , description: "Steak (Thursdays Only ) With Leoni Fresh Mozzarella, Peppers & Onions" },
  { id: '#81', name: '#81', price: 25, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Pepper Ham, Salami, Swiss Cheese, Olive Oil & Oregano" },
  { id: '#82', name: '#82', price: 18, category: 'Regular Heroes' , description: "Pepperoni, Provolone Cheese, Mustard And Hot Or Sweet Stuffed Peppers" },
  { id: '#83', name: '#83', price: 15, category: 'Regular Heroes' , description: "Turkey, Shredded Lettuce, Tomato, Red Onion, Olive Oil, Vinegar, Salt & Pepper" },
  { id: '#84', name: '#84', price: 16, category: 'Regular Heroes' , description: "Roastpork, Muenster Cheese, Lettuce, Tomato, Salt & Pepper" },
 { id: '#85', name: '#85', price: 20, category: 'Regular Heroes' , description: "Meatballs, Fresh Ricotta, Grated Cheese, & Basil Mix" },
  { id: '#86', name: '#86', price: 16, category: 'Regular Heroes' , description: "Mortadella, Provolone, Lettuce, Tomato, Olive Oil, Vinegar, Salt & Pepper" },
  { id: '#87', name: '#87', price: 20, category: 'Regular Heroes' , description: "Shrimp Parmigiana (Fridays Only )" },
  { id: '#88', name: '#88', price: 18, category: 'Regular Heroes' , description: "Fried Eggplant, Fresh Ricotta, Salt, Pepper, Basil & Sun-Dried Tomatoes" },
  { id: '#89', name: '#89', price: 18, category: 'Regular Heroes' , description: "Salami, Provolone, And Roasted Peppers" },
  { id: '#90', name: '#90', price: 20, category: 'Regular Heroes' , description: "Roast Beef, Stuffed Mushrooms, Lioni Fresh Mozzarella, Gravy, Salt & Pepper" },
  { id: '#91', name: '#91', price: 18, category: 'Regular Heroes' , description: "Sweet Italian Sausage, Fresh Ricotta, Tomato Sauce & Romano Cheese" },
  { id: '#92', name: '#92', price: 18, category: 'Regular Heroes' , description: "Sopressata, White American Cheese And Mushroom Stuffing" },
  { id: '#93', name: '#93', price: 18, category: 'Regular Heroes' , description: "Bologna, Pepperoni, Yellow American Cheese & Mustard" },
  { id: '#94', name: '#94', price: 25, category: 'Regular Heroes' , description: "Ham, Eggplant, Sopressata, White American, Lioni Fresh Mozzarella" },
  { id: '#95', name: '#95', price: 23, category: 'Regular Heroes' , description: "Chicken Cutlet, Hot Sopressata, Provolone, Hot Stuffed Peppers" },
  { id: '#96', name: '#96', price: 20, category: 'Regular Heroes' , description: "Chicken Cutlet, Sausage, Melted White American, With Brown Gravy" },
  { id: '#97', name: '#97', price: 19, category: 'Regular Heroes' , description: "Roast Beef, Ham, White American, Deli Mustard, And Honey Mustard" },
  { id: '#98', name: '#98', price: 25, category: 'Regular Heroes' , description: "Ham, Mortadella, Bologna, Lioni Fresh Mozzarella And Lioni’S Basil Mix" },
  { id: '#99', name: '#99', price: 21, category: 'Regular Heroes' , description: "Milk Fed Veal Cutlet, Lioni Fresh Mozzarella, Topped With Bruschetta" },
  { id: '#100', name: '#100', price: 18, category: 'Regular Heroes' , description: "Grilled Chicken, Melted White American, Topped With Mushroom Mix" },
  { id: '#101', name: '#101', price: 20, category: 'Regular Heroes' , description: "Sausage, Roast Pork, Lioni Fresh Mozzarella, And Basil Mix" },
  { id: '#102', name: '#102', price: 25, category: 'Regular Heroes' , description: "Sicilian Salami, Genoa Salami, Ham, Lioni Fresh Mozzarella, & Hot Or Sweet Stuffed Peppers" },
  { id: '#103', name: '#103', price: 23, category: 'Regular Heroes' , description: "Salami, Provolone, Mortadella, Sweet Capicola, Lettuce, Tomato, Oil And Vinegar" },
  { id: '#375', name: '#375', price: 19, category: 'Regular Heroes' , description: "Chicken Cutlet, Roast Beef, White American, Honey Mustard" },
  { id: '#105', name: '#105', price: 18, category: 'Regular Heroes' , description: "Sopressata, Provolone, Balsamic Vinegar & Basil Mix" },
  { id: '#106', name: '#106', price: 27, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Stuffed Peppers And Reggiano Cheese" },
  { id: '#107', name: '#107', price: 25, category: 'Regular Heroes' , description: "Roast Beef, Sopressata, Lioni Fresh Mozzarella, Muenster Cheese, And Bruschetta" },
  { id: '#108', name: '#108', price: 28, category: 'Regular Heroes' , description: "Chicken Cutlet, Ham, Balsamic Vinegar, Stuffed Peppers, Basil Mix, Lioni Fresh Mozzarella And White American" },
  { id: '#109', name: '#109', price: 21, category: 'Regular Heroes' , description: "Mortadella, Chicken Cutlet, Ham, Horseradish And Mayo" },
  { id: '#110', name: '#110', price: 23, category: 'Regular Heroes' , description: "Capicola, Prosciutto Di Parma, Olive Loaf, Lioni Fresh Mozzarella, Bruschetta, And A Drizzle Of Balsamic Vinegar" },
  { id: '#111', name: '#111', price: 25, category: 'Regular Heroes' , description: "Eggplant, Roast Beef, Mozzarella, White American, Bruschetta, Sun-Dried Tomato, Stuffed Peppers, Balsamic Vinegar" },
  { id: '#112', name: '#112', price: 20, category: 'Regular Heroes' , description: "Ham, Roast Beef, Lioni Fresh Mozzarella And Honey Mustard" },
  { id: '#113', name: '#113', price: 24, category: 'Regular Heroes' , description: "Ham, Roast Beef, White American Lioni Fresh Mozzarella, Bread Butter Pickles , Mayo And Horseradish Mix" },
  { id: '#114', name: '#114', price: 22, category: 'Regular Heroes' , description: "Chicken Cutlet, Fried Peppers, Stuffed Peppers, Basil Mix And A Drizzle Of Balsamic Vinegar" },
  { id: '#115', name: '#115', price: 29, category: 'Regular Heroes' , description: "Prosciutto, Sweet Capicola, Ceasar Dressing, Stuffed Peppers, Marinated Sun-Dried Tomatoes, Romano Cheese, Mozzarella" },
  { id: '#116', name: '#116', price: 25, category: 'Regular Heroes' , description: "Grilled Chicken, Prosciutto Di Parma, Sun-Dried Tomatoes, Lioni Fresh Mozzarella And Bruschetta" },
  { id: '#117', name: '#117', price: 22, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, And Lioni’S Basil Mix" },
  { id: '#118', name: '#118', price: 25, category: 'Regular Heroes' , description: "Chicken Cutlet, Roast Beef, Mortadella, Lioni Fresh Mozzarella And Basil Mix" },
  { id: '#119', name: '#119', price: 29, category: 'Regular Heroes' , description: "Chicken Cutlet, Salami, Ham, Olive Oil, Basil Mix, Lioni Fresh Mozzarella, Sun-Dried Tomatoes, Balsamic Vinegar" },
  { id: '#120', name: '#120', price: 20, category: 'Regular Heroes' , description: "Fried Eggplant, Ham Capicola, Basil Mix, And Melted White American" },
  { id: '#121', name: '#121', price: 22, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella And Bruschetta" },
  { id: '#122', name: '#122', price: 24, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Fresh Ricotta, Lioni Fresh Mozzarella, And Sautéed Peppers" },
  { id: '#123', name: '#123', price: 21, category: 'Regular Heroes' , description: "Chicken Cutlet, White American, Muffaletta And Sweet Stuffed Peppers" },
  { id: '#124', name: '#124', price: 23, category: 'Regular Heroes' , description: "Fried Eggplant, Prosciutto Di Parma, Basil Mix, Lioni Fresh Mozzarella, Romano And Balsamic Vinegar" },
  { id: '#125', name: '#125', price: 28, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Cappicola, Lioni Fresh Mozzarella, Basil Mix, Balsamic Vinegar" },
  { id: '#126', name: '#126', price: 19, category: 'Regular Heroes' , description: "Fried Eggplant, Salami, Olive Oil And Lioni Fresh Mozzarella" },
  { id: '#127', name: '#127', price: 21, category: 'Regular Heroes' , description: "Fried Eggplant, Mortadella, Lioni Smoked Mozzarella, American White, Olive Oil, Salt, Pepper, And Oregano" },
  { id: '#128', name: '#128', price: 25, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Balsamic Vinegar And Extra Virgin Olive Oil And Roasted Peppers" },
  { id: '#129', name: '#129', price: 25, category: 'Regular Heroes' , description: "Veal, Meatball, And Eggplant Parmesan Hero (All Three) (Melted Mozzarella With Sauce)" },
  { id: '#130', name: '#130', price: 20, category: 'Regular Heroes' , description: "Home Made Roastbeef, Onions, Prosciutto Di Parma, And White American Cheese Melted To Perfection" },
  { id: '#131', name: '#131', price: 21, category: 'Regular Heroes' , description: "Chicken Cutlet, Fried Eggplant, 10 Cheese Garlic Mix, And Basil Mix" },
  { id: '#132', name: '#132', price: 27, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Sopressata, Banana Peppers, Drizzle Of Balsamic Vinegar, Lioni Fresh Mozzarella And Basil Mix" },
  { id: '#133', name: '#133', price: 26, category: 'Regular Heroes' , description: "Cappy Ham, Capicola, Salami, Lioni Fresh Mozzarella, Lettuce, Tomato, Mayo, Olive Oil, Salt, Pepper & Onion And Stuffed Peppers" },
  { id: '#134', name: '#134', price: 18, category: 'Regular Heroes' , description: "Chicken Cutlet, Lioni Fresh Mozzarella, Tomatoes, Red Onions, Garlic, Oregano, Salt & Pepper" },
  { id: '#135', name: '#135', price: 21, category: 'Regular Heroes' , description: "Veal Cutlet, Hot Or Sweet Stuffed Peppers, Lioni Fresh Mozzarella" },
  { id: '#136', name: '#136', price: 23, category: 'Regular Heroes' , description: "Ham, Grilled Chicken, Ceasar Dressing, Lioni Fresh Mozzarella, Melted American Cheese" },
  { id: '#137', name: '#137', price: 25, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Roast Beef, Lioni Fresh Mozzarella, Sun-Dried Tomatoes And Balsamic Vinegar" },
  { id: '#138', name: '#138', price: 26, category: 'Regular Heroes' , description: "Veal Cutlet, Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Sweet Or Hot Peppers, Oil" },
  { id: '#139', name: '#139', price: 25, category: 'Regular Heroes' , description: "Prosciutto Di Parma, Capicola, Sopressata, Lioni Fresh Mozzarella, Provlone, Brushcetta, And Balsamic Vinegar" },
  { id: '#1A', name: '#1A', price: 19, category: 'Smoked Mozzarella Heroes' , description: "Mortadella, Lioni Smoked Mozzarella And Basil Mix" },
  { id: '#2A', name: '#2A', price: 19, category: 'Smoked Mozzarella Heroes' , description: "Hot Capitol, Lioni Smoked Mozzarella, Basil Mix, And Olive Oil" },
  { id: '#3A', name: '#3A', price: 22, category: 'Smoked Mozzarella Heroes' , description: "Prosciutto Di Parma, Lioni Smoked Mozzarella, Roasted Pepper And Oregano" },
  { id: '#4A', name: '#4A', price: 16, category: 'Smoked Mozzarella Heroes' , description: "Roasted Turkey, Lioni Smoked Mozzarella, Olive Oil, Salt, Pepper And Oregano" },
  { id: '#5A', name: '#5A', price: 20, category: 'Smoked Mozzarella Heroes' , description: "Ham, Salami, Lioni Smoked Mozzarella, Olive Oil, Oregano, And Pepper" },
  { id: '#6A', name: '#6A', price: 19, category: 'Smoked Mozzarella Heroes' , description: "Pepper Turkey, Lioni Smoked Mozzarella, Bruschetta, And Olive Oil" },
  { id: '#7A', name: '#7A', price: 20, category: 'Smoked Mozzarella Heroes' , description: "Chicken Cutlet, Lioni Smoked Mozzarella, Pesto Sauce, Oregano, Salt And Pepper" },
  { id: '#8A', name: '#8A', price: 22, category: 'Smoked Mozzarella Heroes' , description: "Grilled Chicken, Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, With American Cheese ( Served Warm)" },
  { id: '#9A', name: '#9A', price: 21, category: 'Smoked Mozzarella Heroes' , description: "Cappy Ham, Sweet Sopressata, Lioni Smoked Mozzarella, Lettuce, Tomato, Olive Oil, Salt, Pepper And Oregano" },
  { id: '#10A', name: '#10A', price: 16, category: 'Smoked Mozzarella Heroes' , description: "Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, Arugula, Olive Oil, Lettuce, Salt Pepper And Oregano" },
  { id: '#11A', name: '#11A', price: 18, category: 'Smoked Mozzarella Heroes' , description: "Lioni Smoked Mozaarella, Fried Eggplant, Roasted Peppers, Olive Oil, Balsamic Vinegar, Oregano, Salt And Pepper" },
  { id: 'P1', name: 'P1', price: 24, category: '"P" Heroes', description: "Ham, Salami, Pepperoni, Soppressata, Fresh Mozzarella, Roasted Peppers" },
  { id: 'P2', name: 'P2', price: 24, category: '"P" Heroes', description: "Ham, Turkey, Roast Beef, Virginia Ham, Yellow American Cheese, Swiss Cheese, Lettuce, Tomato" },
  { id: 'P3', name: 'P3', price: 19, category: '"P" Heroes', description: "Sausage & Peppers Topped With Melted White American Cheese & Tomato Sauce" },
  { id: 'P4', name: 'P4', price: 20, category: '"P" Heroes', description: "Mortadella, Fresh Ricotta, Homemade Basil Mix, Grated Romano Cheese, Salt & Pepper, Olive Oil, All Toasted" },
  { id: 'P5', name: 'P5', price: 24, category: '"P" Heroes', description: "Roast Pork, Genoa Salami, Virginia Ham, Swiss Cheese, Lioni Smoked Mozzarella, Basil Mix, Deli Mustard, Sliced Pickles" },
  { id: 'P6', name: 'P6', price: 24, category: '"P" Heroes', description: "Prosciutto Parma, Lioni Fresh Mozzarella, Roasted Peppers, Extra Virgin Olive Oil, Balsamic Glaze" },

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
  { id: 'A12', name: 'Potato Salad', price: 3, smallPrice: 3, largePrice: 6, appetizerSize: true, category: 'Appetizers' },
  { id: 'A14', name: 'Macaroni Salad', price: 3, smallPrice: 3, largePrice: 6, appetizerSize: true, category: 'Appetizers' },
  { id: 'A16', name: 'Coleslaw', price: 3, smallPrice: 3, largePrice: 6, appetizerSize: true, category: 'Appetizers' },

  { id: "B_WATER", name: "Water", price: 1.50, category: "Beverages", waterSizes: [{ label: "16oz", price: 1.50 }, { label: "Sport Cap", price: 2.00 }, { label: "1 Liter", price: 2.50 }, { label: "1.5 Liter", price: 3.00 }, { label: "Gallon", price: 3.50 }] },
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
  { id: "C2", name: "Small Wise", price: 3.0, category: "Chips" },
  { id: "C3", name: "Large Wise", price: 6.0, category: "Chips" },

  { id: "K1", name: "Kid's Chicken Fingers", price: 5.0, category: "Kid's Menu" },
  { id: "K2", name: "Kid's Pasta", price: 5.0, category: "Kid's Menu" },
  { id: "K3", name: "Kid's Sandwich", price: 5.0, category: "Kid's Menu" },

  { id: 'bread1', name: 'Italian Bread', price: 1.75, category: 'Bread Items' },
  { id: 'bread2', name: 'Hero Bread', price: 2.0, category: 'Bread Items' },
  { id: 'bread3', name: 'Seeded Semolina Bread Loaf', price: 4.0, category: 'Bread Items' },
  { id: 'bread4', name: 'Ciabatta Bread', price: 4.0, category: 'Bread Items' },
  { id: 'bread5', name: 'Seeded Twist', price: 4.0, category: 'Bread Items' },
  { id: 'bread6', name: 'Olive Bread', price: 7.0, category: 'Bread Items' },
  { id: 'bread7', name: 'Prosciutto Bread', price: 12.0, category: 'Bread Items' },
  { id: 'bread8', name: 'Focaccia', price: 3.75, smallPrice: 4.00, largePrice: 6.00, category: 'Bread Items' },

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
  { id: 'dessert15', name: 'Large Black & White Cookie', price: 3.0, category: 'Desserts' },

  { id: 'grocery1', name: 'Fresh Mozzarella', price: 6.5, category: 'Grocery Items' },
  { id: 'grocery2', name: '3 for $17 Mozzarella', price: 17.0, category: 'Grocery Items' },
  { id: 'grocery3', name: '8oz Smoked Mozzarella', price: 3.75, category: 'Grocery Items' },
  { id: 'grocery4', name: 'Smoked Mozzarella', price: 7.0, category: 'Grocery Items' },
  { id: 'grocery5', name: '8oz Regular Ciliegine', price: 5.0, category: 'Grocery Items' },
  { id: 'grocery6', name: '8oz Marinated Ciliegine', price: 6.0, category: 'Grocery Items' },
  { id: 'grocery7', name: '8oz Burrata Mozzarella', price: 7.0, category: 'Grocery Items' },
  { id: 'grocery8', name: '8oz Bufala Mozzarella', price: 7.0, category: 'Grocery Items' },
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

  { id: "PH_1", wheelPrices: { 3: 99, 4: 129 }, name: "American", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Boars Head Ham, Roasted Turkey Breast, Home Cooked Roast Beef, Everroast Chicken Breast, Virginia Ham, American & Swiss Cheese. Topped With Shredded Iceberg Lettuce & Tomato." },
  { id: "PH_2", wheelPrices: { 3: 99, 4: 129 }, name: "Italian", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Citterio Ham, Citterio Genoa Salami, Cappy Ham, Citterio Pepperoni, Mortadella, Soppressatta, Lioni Fresh Mozzarella, Roasted Peppers & Extra Virgin Olive Oil" },
  { id: "PH_3", wheelPrices: { 3: 109, 4: 139 }, name: "Classic", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Breaded Chicken Cutlets, Lioni Fresh Mozzarella, Roasted Peppers, Extra Virgin Olive Oil, Salt & Pepper" },
  { id: "PH_4", wheelPrices: { 3: 99, 4: 129 }, name: "Basic", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Boars Ham, Turkey, Roast Beef, American Cheese, Shredded Iceberg Lettuce & Tomato" },
  { id: "PH_5", wheelPrices: { 3: 109, 4: 139 }, name: "Grilled Classic", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Grilled Chicken Cutlets, Lioni Fresh Mozzarella, Roasted Peppers, Extra Virgin Olive Oil, Salt & Pepper" },
  { id: "PH_6", wheelPrices: { 3: 99, 4: 129 }, name: "Eggplant Classic", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Breaded Eggplant, Lioni Fresh Mozzarella, Roasted Peppers & Extra Virgin Olive Oil" },
  { id: "PH_7", wheelPrices: { 3: 99, 4: 129 }, name: "Grilled Veggie Deluxe", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Grilled Marinated Vegetables (Yellow Squash, Green Squash, Carrots, Red Onions, Green Pepper, Mushrooms) w/ Lioni Fresh Mozzarella & Balsamic Vinegar" },
  { id: "PH_8", wheelPrices: { 3: 99, 4: 129 }, name: "Charlie Tuna", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Tuna Salad, Shredded Iceberg Lettuce, Tomato, Sliced Onion, Salt & Pepper" },
  { id: "PH_9", name: "15th Ave Special", pricePerFoot: 50, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Capicola, Genoa Salami, Pepper Ham, Lioni Fresh Mozzarella, Roasted Peppers & Extra Virgin Olive Oil" },
  { id: "PH_10", name: "Extravaganza", pricePerFoot: 75, category: "Party Heroes – Catering", description: "Veal Cutlets, Prosciutto Di Parma, Provolone, Sliced Banana Peppers, Shaved Reggiano, Lioni Fresh Mozzarella, Basil Mix, Sun-Dried Tomatoes, Olive Oil, Oregano, Salt & Pepper" },
  { id: "PH_11", name: "#1", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Salami, Fresh Mozzarella, Olive Oil, Salt, Black Pepper And Oregano" },
  { id: "PH_12", name: "#2", pricePerFoot: 39, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Olive Oil And Black Pepper" },
  { id: "PH_13", name: "#3", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Ham, Lioni Fresh Mozzarella, Basil, Sun-Dried Tomatoes, Olive Oil, Salt And Black Pepper" },
  { id: "PH_14", name: "#4", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Lioni Fresh Mozzarella, Tomato, Basil, Olive Oil, Salt And Pepper" },
  { id: "PH_15", name: "#5", pricePerFoot: 28, category: "Party Heroes – Catering", description: "Ham, Salami, Swiss Cheese, Olive Oil, And Basil Mix" },
  { id: "PH_16", name: "#6", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Turkey, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil, Oregano, Black Pepper" },
  { id: "PH_17", name: "#7", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Sweet Capicola, Ham, Lioni Fresh Mozzarella, Sun-Dried Tomatoes, Vinegar, Olive Oil, Oregano, Salt And Black Pepper" },
  { id: "PH_18", name: "#8", pricePerFoot: 28, category: "Party Heroes – Catering", description: "Hot Capicola, Yellow American Cheese Or Jalapeño Cheese And A Hot Stuffed Pepper" },
  { id: "PH_19", name: "#9", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Salami, Lioni Fresh Mozzarella , Roasted Peppers, Olive Oil, Salt And Black Pepper" },
  { id: "PH_20", name: "#10", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Mortadella, Lioni Fresh Mozzarella, Lettuce And Black Pepper" },
  { id: "PH_21", name: "#11", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Roasted Peppers, Lioni Fresh Mozzarella, Green Pesto Sauce, A Drizzle Of Olive Oil And Black Pepper" },
  { id: "PH_22", name: "#12", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Sweet Stuffed Peppers, Lettuce, Olive Oil, Salt And Black Pepper" },
  { id: "PH_23", name: "#13", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Ham, Bologna, White American Cheese, Lettuce, Mayo and Tomatoes" },
  { id: "PH_24", name: "#14", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Hot Or Sweet Capicola, Lioni Fresh Mozzarella, Tomatoes, Fresh Basil, Oregano, Olive Oil, Salt And Black Pepper" },
  { id: "PH_25", name: "#15", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Honey Roasted Turkey, Lioni Fresh Mozzarella, Lettuce, Tomato, Vinegar, Olive Oil, Salt and Black Pepper" },
  { id: "PH_26", name: "#16", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Roast Beef, Lioni Fresh Mozzarella, Lettuce, Mayo, Salt and Black Pepper" },
  { id: "PH_27", name: "#17", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Olive Loaf, Sopressata, White American, Lettuce And Mayo" },
  { id: "PH_28", name: "#18", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Grilled Italian Sausage, Olive Oil, Vinegar, Lettuce, Salt, Black Pepper, And A Pinch Of Oregano" },
  { id: "PH_29", name: "#19", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Roast Pork, Lioni Smoked Mozzarella, Olive Oil And Black Pepper" },
  { id: "PH_30", name: "#20", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Pepper Ham, Swiss Cheese, Tomato And Mayo" },
  { id: "PH_31", name: "#21", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Pesto Sauce, Olive Oil, And Black Pepper" },
  { id: "PH_32", name: "#23", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Pepperoni, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil And Lettuce" },
  { id: "PH_33", name: "#24", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Bologna, White American Cheese, Ham And Mustard" },
  { id: "PH_34", name: "#25", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Hot Capicola, Salami, Pepperoni, Swiss, Provolone, Stuffed Peppers And Deli Mustard" },
  { id: "PH_35", name: "#26", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Arugula And Balsamic Vinegar" },
  { id: "PH_36", name: "#27", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Lioni Fresh Mozzarella, Tomatoes, Arugula, Basil, Olive Oil, Oregano, Salt and Pepper" },
  { id: "PH_37", name: "#28", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Salami, Provolone, Arugula, Sun-Dried Tomatoes, Olive Oil, Oregano, And Pepper" },
  { id: "PH_38", name: "#29 (Pan)", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Meatball Parm" },
  { id: "PH_39", name: "#30", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Tomatoes, Olive Oil, Oregano, Salt And Fresh Basil" },
  { id: "PH_40", name: "#31", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Sweet Capicola, Provolone, Lettuce, Tomatoes, Mustard And Mayo" },
  { id: "PH_41", name: "#32", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Grilled Chicken, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil, Vinegar, Salt And Pepper" },
  { id: "PH_42", name: "#33", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Sweet Or Hot Grilled Italian Sausage, And Bruschetta" },
  { id: "PH_43", name: "#34", pricePerFoot: 28, category: "Party Heroes – Catering", description: "Hot Italian Sausage, Bruschetta, And Lioni Fresh Mozzarella" },
  { id: "PH_44", name: "#35 (Pan)", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Chicken Parm" },
  { id: "PH_45", name: "#37", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Turkey, American Cheese, Tomatoes And Mustard" },
  { id: "PH_46", name: "#38", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Bologna, Lioni Fresh Mozzarella, Lettuce, Mayo, Salt And Pepper" },
  { id: "PH_47", name: "#39", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Tuna Fish, Lioni Fresh Mozzarella, Lettuce And Tomato" },
  { id: "PH_48", name: "#40", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Italian Tuna Fish, Lettuce , Tomato, and Onions" },
  { id: "PH_49", name: "#41 (Pan)", pricePerFoot: 50, category: "Party Heroes – Catering", description: "Veal Parm" },
  { id: "PH_50", name: "#42", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Hot Sopressata, Bruschetta And Lioni Fresh Mozzarella" },
  { id: "PH_51", name: "#43", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Sopressata, Lioni Fresh Mozzarella And Red Pesto" },
  { id: "PH_52", name: "#44", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Broccoli Rabe And Italian Sausage" },
  { id: "PH_53", name: "#45", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Sicilian Salami, Swiss Cheese And Deli Mustard" },
  { id: "PH_54", name: "#46", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Sopressata (Hot Or Sweet) Ham, Provolone, Lettuce, Tomatoes, Oil And Vinegar" },
  { id: "PH_55", name: "#47", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Bresaola, Arugula, Olive Oil, Shaved Reggiano, Pepper And Oregano" },
  { id: "PH_56", name: "#48", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Sicilian Salami, Genoa Salami, And Lioni Fresh Mozzarella" },
  { id: "PH_57", name: "#49 (Pan)", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Sausage & Peppers" },
  { id: "PH_58", name: "#50 (Pan)", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Hot Turkey, Lioni Fresh Mozzarella, And Gravy" },
  { id: "PH_59", name: "#51", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Lioni Fresh Mozzarella, Arugula, And Roasted Peppers" },
  { id: "PH_60", name: "#52 (Pan)", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Roast Beef, Lioni Fresh Mozzarella, and Brown Gravy" },
  { id: "PH_61", name: "#53 (Pan)", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Eggplant Parm" },
  { id: "PH_62", name: "#54 (Maestro)", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Breaded Chicken Cutlets, Melted Lioni Fresh Mozzarella, Bacon & Our Secret BBQ Sauce" },
  { id: "PH_63", name: "#55", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Ham, Salami, Provolone, Shaved reggiano, Olive Oil, Salt & Pepper" },
  { id: "PH_64", name: "#56", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Salami, Provolone, Olive Oil, Lettuce & Tomato" },
  { id: "PH_65", name: "#57", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Honey Turkey, Ham Cappy, Lioni Fresh Mozzarella, Tomato, Olive Oil, Salt, Pepper & Oregano" },
  { id: "PH_66", name: "#58", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Mortadella With Pistachio, Fresh Ricotta, Salt & Pepper" },
  { id: "PH_67", name: "#59", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Mortadella, Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, Olive Oil, Salt, Pepper, Oregano" },
  { id: "PH_68", name: "#60", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Fried Eggplant, Lioni Fresh Mozzarella, & Mushroom Stuffing" },
  { id: "PH_69", name: "#61", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Sicilian Salami, Ham Cappy, Lioni Fresh Mozzarella, Olive Oil, Salt, Pepper, & Oregano" },
  { id: "PH_70", name: "#62", pricePerFoot: 45, category: "Party Heroes – Catering", description: "1/2 and 1/2 is $40 Per Foot Chicken Cutlet, Prosciutto Di Parma, Lioni Fresh Mozzarella, and Basil Mix" },
  { id: "PH_71", name: "#63", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Ham, Sopressata ,White American, Honey Mustard, Lettuce, Tomato, Gardenia Salad" },
  { id: "PH_72", name: "#64", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Sopressata, Roast Beef, White American & Balsamic Vinegar" },
  { id: "PH_73", name: "#65", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Grilled Chicken, Broccoli Rabe, Lioni Fresh Mozzarella, Olive Oil, Salt & Pepper" },
  { id: "PH_74", name: "#66", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Chicken Cutlet, Broccoli Rabe, Lioni Fresh Mozzarella, Olive Oil, Salt & Pepper" },
  { id: "PH_75", name: "#67", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Roast Beef, White American Cheese, Lettuce, Tomato & Mayo" },
  { id: "PH_76", name: "#68", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Turkey, Roast Beef, Jalapeño Cheese And Hot Sauce" },
  { id: "PH_77", name: "#69", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Roast Beef, Sopressata, Lioni Fresh Mozzarella, Italian Sausage, & Stuffed Mushroom" },
  { id: "PH_78", name: "#70", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Chicken Cutlet, Provolone, Balsamic Vinegar, Roasted Peppers, Salt & Pepper" },
  { id: "PH_79", name: "#71", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Chicken Cutlet, Lioni Fresh Mozzarella, Roasted Peppers, Balsamic Vinegar" },
  { id: "PH_80", name: "#72", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Ham Cappy, Lioni Fresh Mozzarella, Lettuce , Tomato, Olive Oil, Salt & Pepper" },
  { id: "PH_81", name: "#73", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Hot Sopressata, Jalapeno Cheese, Hot Stuffed Pepper, And A Dash Of Hot Sauce" },
  { id: "PH_82", name: "#74", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Italian Sausage- Sweet Or Hot And Melted White American Cheese" },
  { id: "PH_83", name: "#75", pricePerFoot: 28, category: "Party Heroes – Catering", description: "Oven Gold Turkey, Fried Eggplant And Yellow American Cheese" },
  { id: "PH_84", name: "#76", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Roast Beef, Sopressata, White American Cheese And Gardenia Salad" },
  { id: "PH_85", name: "#77", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Honey Turkey, Munster Cheese And Bbq Sauce" },
  { id: "PH_86", name: "#78", pricePerFoot: 38, category: "Party Heroes – Catering", description: "Grilled Chicken, Lioni Fresh Mozzarella, Fried Eggplant & Honey Mustard" },
  { id: "PH_87", name: "#79", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Fried Meat Balls, Lettuce, Vinegar, Salt & Pepper" },
  { id: "PH_88", name: "#80 (Pan)", pricePerFoot: 50, category: "Party Heroes – Catering", description: "Steak, Lioni Fresh Mozzarella, Peppers & Onions" },
  { id: "PH_89", name: "#81", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Pepper Ham, Salami, Swiss Cheese, Olive Oil & Oregano" },
  { id: "PH_90", name: "#82", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Pepperoni, Provolone Cheese, Mustard And Hot Or Sweet Stuffed Peppers" },
  { id: "PH_91", name: "#83", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Turkey, Shredded Lettuce, Tomato, Red Onion, Olive Oil, Vinegar, Salt & Pepper" },
  { id: "PH_92", name: "#84", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Roastpork, Muenster Cheese, Lettuce, Tomato, Salt & Pepper" },
  { id: "PH_93", name: "#85", pricePerFoot: 32, category: "Party Heroes – Catering", description: "Meatballs, Fresh Ricotta, Grated Cheese, & Basil Mix" },
  { id: "PH_94", name: "#86", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Mortadella, Provolone, Lettuce, Tomato, Olive Oil, Vinegar, Salt & Pepper" },
  { id: "PH_95", name: "#87 (Pan)", pricePerFoot: 50, category: "Party Heroes – Catering", description: "Shrimp Parm" },
  { id: "PH_96", name: "#88", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Fried Eggplant, Fresh Ricotta, Salt, Pepper, Basil & Sun-Dried Tomatoes" },
  { id: "PH_97", name: "#89", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Salami, Provolone, And Roasted Peppers" },
  { id: "PH_98", name: "#90 (Pan)", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Roast Beef, Stuffed Mushrooms, Lioni Fresh Mozzarella, Gravy, Salt & Pepper" },
  { id: "PH_99", name: "#91", pricePerFoot: 28, category: "Party Heroes – Catering", description: "Sweet Italian Sausage, Fresh Ricotta, Tomato Sauce & Romano Cheese" },
  { id: "PH_100", name: "#92", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Sopressata, White American Cheese And Mushroom Stuffing" },
  { id: "PH_101", name: "#93", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Bologna, Pepperoni, Yellow American Cheese & Mustard" },
  { id: "PH_102", name: "#94", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Ham, Eggplant, Sopressata, White American, Lioni Fresh Mozzarella" },
  { id: "PH_103", name: "#95", pricePerFoot: 39, category: "Party Heroes – Catering", description: "Chicken Cutlet, Hot Sopressata, Provolone, Hot Stuffed Peppers" },
  { id: "PH_104", name: "#96", pricePerFoot: 39, category: "Party Heroes – Catering", description: "Chicken Cutlet, Sausage, Melted White American, With Brown Gravy" },
  { id: "PH_105", name: "#97", pricePerFoot: 25, category: "Party Heroes – Catering", description: "Roast Beef, Ham, White American, Deli Mustard, And Honey Mustard" },
  { id: "PH_106", name: "#98", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Ham, Mortadella, Bologna, Lioni Fresh Mozzarella And Lioni’S Basil Mix" },
  { id: "PH_107", name: "#99", pricePerFoot: 50, category: "Party Heroes – Catering", description: "Milk Fed Veal Cutlet, Lioni Fresh Mozzarella, Topped With Bruschetta" },
  { id: "PH_108", name: "#100", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Grilled Chicken, Melted White American, Topped With Mushroom Mix" },
  { id: "PH_109", name: "#101", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Sausage, Roast Pork, Lioni Fresh Mozzarella, And Basil Mix" },
  { id: "PH_110", name: "#102", pricePerFoot: 33, category: "Party Heroes – Catering", description: "Sicilian Salami, Genoa Salami, Ham, Lioni Fresh Mozzarella, & Hot Or Sweet Stuffed Peppers" },
  { id: "PH_111", name: "#103", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Sicilian Salami, Genoa Salami, Ham, Lioni Fresh Mozzarella, & Hot Or Sweet Stuffed Peppers" },
  { id: "PH_112", name: "#104 (375)", pricePerFoot: 38, category: "Party Heroes – Catering", description: "Chicken Cutlet, Roast Beef, White American, Honey Mustard" },
  { id: "PH_113", name: "#105", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Sopressata, Provolone, Balsamic Vinegar & Basil Mix" },
  { id: "PH_114", name: "#106", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Stuffed Peppers And Reggiano Cheese" },
  { id: "PH_115", name: "#107", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Roast Beef, Sopressata, Lioni Fresh Mozzarella, Muenster Cheese, And Bruschetta" },
  { id: "PH_116", name: "#108", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Chicken Cutlet, Ham, Balsamic Vinegar, Stuffed Peppers, Basil Mix, Lioni Fresh Mozzarella And White American" },
  { id: "PH_117", name: "#109", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Mortadella, Chicken Cutlet, Ham, Horseradish And Mayo" },
  { id: "PH_118", name: "#110", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Capicola, Prosciutto Di Parma, Olive Loaf, Lioni Fresh Mozzarella, Bruschetta, And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_119", name: "#111", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Fried Eggplant, Roast Beef, Lioni Fresh Mozzarella, White American, Bruschetta, Sun-Dried Tomato, Stuffed Peppers And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_120", name: "#112", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Ham, Roast Beef, Lioni Fresh Mozzarella And Honey Mustard" },
  { id: "PH_121", name: "#113", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Ham, Roast Beef, White American Lioni Fresh Mozzarella, Pickles, Mayo And Horseradish Mix" },
  { id: "PH_122", name: "#114", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Chicken Cutlet, Fried Peppers, Stuffed Peppers, Basil Mix And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_123", name: "#115", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Sweet Capicola, Ceasar Dressing, Stuffed Peppers, Marinated Sun-Dried Tomatoes, Romano Cheese And Lioni Fresh Mozzarella" },
  { id: "PH_124", name: "#116", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Grilled Chicken, Prosciutto Di Parma, Sun-Dried Tomatoes, Lioni Fresh Mozzarella And Bruschetta" },
  { id: "PH_125", name: "#117", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, And Lioni’S Basil Mix" },
  { id: "PH_126", name: "#118", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Chicken Cutlet, Roast Beef, Mortadella, Lioni Fresh Mozzarella And Basil Mix" },
  { id: "PH_127", name: "#119", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Chicken Cutlet, Salami, Ham, Olive Oil, Basil Mix, Lioni Fresh Mozzarella, Sun-Dried Tomatoes, And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_128", name: "#120", pricePerFoot: 33, category: "Party Heroes – Catering", description: "Fried Eggplant, Ham Capicola, Basil Mix, And Melted White American" },
  { id: "PH_129", name: "#121", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella And Bruschetta" },
  { id: "PH_130", name: "#122", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Fresh Ricotta, Lioni Fresh Mozzarella, And Sautéed Peppers" },
  { id: "PH_131", name: "#123", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Chicken Cutlet, White American, Muffaletta And Sweet Stuffed Peppers" },
  { id: "PH_132", name: "#124", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Fried Eggplant, Prosciutto Di Parma, Basil Mix, Lioni Fresh Mozzarella, Romano And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_133", name: "#125", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Cappicola, Lioni Fresh Mozzarella, Basil Mix, Balsamic Vinegar" },
  { id: "PH_134", name: "#126", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Fried Eggplant, Salami, Olive Oil And Lioni Fresh Mozzarella" },
  { id: "PH_135", name: "#127", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Fried Eggplant, Mortadella, Lioni Smoked Mozzarella, American White, Olive Oil, Salt, Pepper, And Oregano" },
  { id: "PH_136", name: "#128", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Balsamic Vinegar And Extra Virgin Olive Oil And Roasted Peppers" },
  { id: "PH_137", name: "#129 (Pan)", pricePerFoot: 60, category: "Party Heroes – Catering", description: "Veal, Meatball, And Eggplant Parmesan Hero (All Three) (Melted Mozzarella With Sauce)" },
  { id: "PH_138", name: "#130", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Home Made Roastbeef, Onions, Prosciutto Di Parma, And White American Cheese Melted To Perfection" },
  { id: "PH_139", name: "#131", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Chicken Cutlet, Fried Eggplant, 10 Cheese Garlic Mix, And Basil Mix" },
  { id: "PH_140", name: "#132", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Sopressata, Banana Peppers, Drizzle Of Balsamic Vinegar, Lioni Fresh Mozzarella And Basil Mix" },
  { id: "PH_141", name: "#133", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Cappy Ham, Capicola, Salami, Lioni Fresh Mozzarella, Lettuce, Tomato, Mayo, Olive Oil, Salt, Pepper & Onion And Stuffed Peppers" },
  { id: "PH_142", name: "#134", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Chicken Cutlet, Lioni Fresh Mozzarella, Tomatoes, Red Onions, Garlic, Oregano, Salt & Pepper" },
  { id: "PH_143", name: "#135", pricePerFoot: 50, category: "Party Heroes – Catering", description: "Veal Cutlet, Hot Or Sweet Stuffed Peppers, Lioni Fresh Mozzarella" },
  { id: "PH_144", name: "#136", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Ham, Grilled Chicken, Ceasar Dressing, Lioni Fresh Mozzarella, Melted American Cheese" },
  { id: "PH_145", name: "#137", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Roast Beef, Lioni Fresh Mozzarella, Sun-Dried Tomatoes And Balsamic Vinegar" },
  { id: "PH_146", name: "#138", pricePerFoot: 50, category: "Party Heroes – Catering", description: "Veal Cutlet, Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Sweet Or Hot Peppers, Oil" },
  { id: "PH_147", name: "#139", pricePerFoot: 45, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Capicola, Sopressata, Lioni Fresh Mozzarella, Provlone, Brushcetta, And Balsamic Vinegar" },
  { id: "PH_148", name: "#1A", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Mortadella, Lioni Smoked Mozzarella And Basil Mix" },
  { id: "PH_149", name: "#2A", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Hot Capitol, Lioni Smoked Mozzarella, Basil Mix, And Olive Oil" },
  { id: "PH_150", name: "#3A", pricePerFoot: 40, category: "Party Heroes – Catering", description: "Prosciutto Di Parma, Lioni Smoked Mozzarella, Roasted Pepper And Oregano" },
  { id: "PH_151", name: "#4A", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Roasted Turkey, Lioni Smoked Mozzarella, Olive Oil, Salt, Pepper And Oregano" },
  { id: "PH_152", name: "#5A", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Ham, Salami, Lioni Smoked Mozzarella, Olive Oil, Oregano, And Pepper" },
  { id: "PH_153", name: "#6A", pricePerFoot: 29, category: "Party Heroes – Catering", description: "Pepper Turkey, Lioni Smoked Mozzarella, Bruschetta, And Olive Oil" },
  { id: "PH_154", name: "#7A", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Chicken Cutlet, Lioni Smoked Mozzarella, Pesto Sauce, Oregano, Salt And Pepper" },
  { id: "PH_155", name: "#8A", pricePerFoot: 35, category: "Party Heroes – Catering", description: "Grilled Chicken, Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, With American Cheese" },
  { id: "PH_156", name: "#9A", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Cappy Ham, Sweet Sopressata, Lioni Smoked Mozzarella, Lettuce, Tomato, Olive Oil, Salt, Pepper And Oregano" },
  { id: "PH_157", name: "#10A", pricePerFoot: 26, category: "Party Heroes – Catering", description: "Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, Arugula, Olive Oil, Lettuce, Salt Pepper And Oregano" },
  { id: "PH_158", name: "#11A", pricePerFoot: 30, category: "Party Heroes – Catering", description: "Lioni Smoked Mozaarella, Fried Eggplant, Roasted Peppers, Olive Oil, Balsamic Vinegar, Oregano, Salt And Pepper" },


  { id: "ML_1", name: "American", category: "Melody Lanes – Catering", smallPrice: 40, largePrice: 57, price: 40 },
  { id: "ML_2", name: "Italian", category: "Melody Lanes – Catering", smallPrice: 40, largePrice: 57, price: 40 },
  { id: "ML_3", name: "Basic", category: "Melody Lanes – Catering", smallPrice: 40, largePrice: 57, price: 40 },
  { id: "ML_4", name: "Grilled Veggies", category: "Melody Lanes – Catering", smallPrice: 40, largePrice: 57, price: 40 },
  { id: "ML_5", name: "Classic", category: "Melody Lanes – Catering", smallPrice: 43, largePrice: 63, price: 43 },
  { id: "ML_6", name: "Grilled Classic", category: "Melody Lanes – Catering", smallPrice: 43, largePrice: 63, price: 43 },
  { id: "ML_7", name: "Eggplant Classic", category: "Melody Lanes – Catering", smallPrice: 43, largePrice: 63, price: 43 },
  { id: "ML_8", name: "GVD", category: "Melody Lanes – Catering", smallPrice: 43, largePrice: 63, price: 43 },

  {"id": "UA_15", "name": "6 Heroes/Cut in 4/Tray", "category": "Urban Air – Catering", "price": 105, "heroPackage": true},
  {"id": "UA_1", "name": "1/2 Tray Baked Ziti", "category": "Urban Air – Catering", "price": 50, "fixedPrice": 50},
  {"id": "UA_2", "name": "1/2 Tray Caesar Salad", "category": "Urban Air – Catering", "price": 50, "fixedPrice": 50},
  {"id": "UA_3", "name": "1/2 Tray Cavatelli & Broccoli", "category": "Urban Air – Catering", "price": 65, "fixedPrice": 65},
  {"id": "UA_4", "name": "1/2 Tray Chicken Francese", "category": "Urban Air – Catering", "price": 65, "fixedPrice": 65},
  {"id": "UA_5", "name": "1/2 Tray Chicken Marsala", "category": "Urban Air – Catering", "price": 65, "fixedPrice": 65},
  {"id": "UA_6", "name": "1/2 Tray Chicken Parm", "category": "Urban Air – Catering", "price": 65, "fixedPrice": 65},
  {"id": "UA_7", "name": "1/2 Tray Eggplant Parm", "category": "Urban Air – Catering", "price": 50, "fixedPrice": 50},
  {"id": "UA_8", "name": "1/2 Tray Eggplant Rollatini", "category": "Urban Air – Catering", "price": 65, "fixedPrice": 65},
  {"id": "UA_9", "name": "1/2 Tray Meatballs (Sauce)", "category": "Urban Air – Catering", "price": 65, "fixedPrice": 65},
  {"id": "UA_10", "name": "1/2 Tray Penne Vodka", "category": "Urban Air – Catering", "price": 50, "fixedPrice": 50},
  {"id": "UA_11", "name": "1/2 Tray Sausage & Peppers", "category": "Urban Air – Catering", "price": 65, "fixedPrice": 65},
  {"id": "UA_12", "name": "1/2 Tray Stuffed Shells", "category": "Urban Air – Catering", "price": 50, "fixedPrice": 50},
  {"id": "UA_13", "name": "1/2 Tray Tossed Salad", "category": "Urban Air – Catering", "price": 25, "fixedPrice": 25},
  {"id": "UA_14", "name": "Bruschetta Platter", "category": "Urban Air – Catering", "price": 50, "fixedPrice": 50},
  {"id": "SAL_1", "name": "Tossed Salad", "category": "Salads – Catering", "price": 25, "halfPrice": 25, "fullPrice": 40, "deepPrice": 65},
  {"id": "SAL_2", "name": "Caesar Salad", "category": "Salads – Catering", "price": 50, "halfPrice": 50, "fullPrice": 75, "deepPrice": 125},
  {"id": "SAL_3", "name": "Tri Color Pasta Salad", "category": "Salads – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95, "deepPrice": 140},
  {"id": "SAL_4", "name": "Cillingine Salad", "category": "Salads – Catering", "price": 50, "halfPrice": 50, "fullPrice": 75, "deepPrice": 125},
  {"id": "BR_1", "name": "Cold Express Breakfast", "category": "Breakfast – Catering", "price": 5.99, "personPrice": 5.99},
  {"id": "BR_2", "name": "Hot Breakfast Buffet", "category": "Breakfast – Catering", "price": 10.99, "personPrice": 10.99},
  {"id": "BR_3", "name": "Coffee Setup", "category": "Breakfast – Catering", "price": 2, "coffeePrices": {"15": 30, "25": 50, "person": 2}},
  {"id": "BR_4", "name": "1/2 Gallon Juice", "category": "Breakfast – Catering", "price": 8, "fixedPrice": 8},
  {"id": "BR_5", "name": "Case Of Poland Spring Water", "category": "Breakfast – Catering", "price": 30, "fixedPrice": 30},
  {"id": "BR_6", "name": "Mini Bagels", "category": "Breakfast – Catering", "price": 1.25, "fixedPrice": 1.25},
  {"id": "BR_7", "name": "Large Bagels", "category": "Breakfast – Catering", "price": 1.75, "fixedPrice": 1.75},
  {"id": "BR_8", "name": "Mini Muffins", "category": "Breakfast – Catering", "price": 1.25, "fixedPrice": 1.25},
  {"id": "BR_9", "name": "Jumbo Muffins", "category": "Breakfast – Catering", "price": 2.5, "fixedPrice": 2.5},
  {"id": "BR_10", "name": "Mini Danishes Or Croissants", "category": "Breakfast – Catering", "price": 1.25, "fixedPrice": 1.25},
  {"id": "BR_11", "name": "Brownies", "category": "Breakfast – Catering", "price": 1.5, "fixedPrice": 1.5},
  {"id": "BR_12", "name": "Italian Cookies", "category": "Breakfast – Catering", "price": 9.5, "poundPrice": 9.5},
  {"id": "BR_13", "name": "Butter", "category": "Breakfast – Catering", "price": 7.5, "poundPrice": 7.5},
  {"id": "BR_14", "name": "Cream Cheese", "category": "Breakfast – Catering", "price": 7.5, "poundPrice": 7.5},
  {"id": "BR_15", "name": "Scallion Cream Cheese", "category": "Breakfast – Catering", "price": 13, "poundPrice": 13},
  {"id": "BR_16", "name": "Vegetable Cream Cheese", "category": "Breakfast – Catering", "price": 13, "poundPrice": 13},
  {"id": "BR_17", "name": "Grape Jelly", "category": "Breakfast – Catering", "price": 7.5, "poundPrice": 7.5},
  {"id": "BR_18", "name": "Egg Salad", "category": "Breakfast – Catering", "price": 9, "poundPrice": 9},
  {"id": "BR_19", "name": "Tuna Fish/Chicken Salad", "category": "Breakfast – Catering", "price": 12, "poundPrice": 12},
  {"id": "PL_1", "name": "Wrap Platter", "category": "Platters – Catering", "price": 65, "smallPrice": 65, "largePrice": 125},
  {"id": "PL_2", "name": "Antipasto Platter", "category": "Platters – Catering", "price": 99, "smallPrice": 99, "largePrice": 175},
  {"id": "PL_3", "name": "Mozzarella & Tomato Platter", "category": "Platters – Catering", "price": 65, "smallPrice": 65, "largePrice": 125},
  {"id": "PL_4", "name": "Vegetable Dip Platter", "category": "Platters – Catering", "price": 65, "smallPrice": 65, "largePrice": 100},
  {"id": "PL_5", "name": "Cold Cut Platter", "category": "Platters – Catering", "price": 9.99, "personPrice": 9.99},
  {"id": "PL_6", "name": "Fruit Platter", "category": "Platters – Catering", "price": 65, "smallPrice": 65, "largePrice": 125},
  {"id": "PL_7", "name": "Salad Platter", "category": "Platters – Catering", "price": 65, "smallPrice": 65, "largePrice": 100},
  {"id": "PL_8", "name": "Spread Platter", "category": "Platters – Catering", "price": 65, "smallPrice": 65, "largePrice": 100},
  {"id": "PL_9", "name": "Twist Bread Platter", "category": "Platters – Catering", "price": 89, "fixedPrice": 89},
  {"id": "HF_65", "name": "Inflation Buster", "category": "Hot Food – Catering", "price": 189, "fixedPrice": 189},
  {"id": "HF_66", "name": "Thanksgiving Dinner", "category": "Hot Food – Catering", "price": 199, "fixedPrice": 199},
  {"id": "HF_1", "name": "Baked Clams", "category": "Hot Food – Catering", "price": 20, "dozenPrice": 20},
  {"id": "HF_2", "name": "Baked Ziti", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_3", "name": "Broccoli Rabe", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125, "poundPrice": 10},
  {"id": "HF_4", "name": "Broccoli with Garlic & Oil (Sauteed Broccoli)", "category": "Hot Food – Catering", "price": 45, "halfPrice": 45, "fullPrice": 90},
  {"id": "HF_5", "name": "Chicken Fingers", "category": "Hot Food – Catering", "price": 45, "halfPrice": 45, "fullPrice": 90},
  {"id": "HF_6", "name": "Chicken Francese", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_7", "name": "Chicken Marsala", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_8", "name": "Chicken Parm", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_9", "name": "Chicken Rollatini", "category": "Hot Food – Catering", "price": 75, "halfPrice": 75, "fullPrice": 150},
  {"id": "HF_10", "name": "Chicken Sorrentino", "category": "Hot Food – Catering", "price": 95, "halfPrice": 95, "fullPrice": 190},
  {"id": "HF_11", "name": "Chicken Wings", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_12", "name": "Eggplant Parm", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_13", "name": "Eggplant Rollatini", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_14", "name": "Filet Of Sole Oreganata", "category": "Hot Food – Catering", "price": 100, "halfPrice": 100, "fullPrice": 175},
  {"id": "HF_15", "name": "French Fries", "category": "Hot Food – Catering", "price": 30, "halfPrice": 30, "fullPrice": 60},
  {"id": "HF_16", "name": "Fried Calamari", "category": "Hot Food – Catering", "price": 75, "halfPrice": 75, "fullPrice": 145},
  {"id": "HF_17", "name": "Fried Ravioli", "category": "Hot Food – Catering", "price": 30, "halfPrice": 30, "fullPrice": 60},
  {"id": "HF_18", "name": "Fried Shrimp", "category": "Hot Food – Catering", "price": 90, "halfPrice": 90, "fullPrice": 160, "poundPrice": 20},
  {"id": "HF_19", "name": "Fried Zucchini", "category": "Hot Food – Catering", "price": 45, "halfPrice": 45, "fullPrice": 90},
  {"id": "HF_20", "name": "Greek Pasta", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_21", "name": "Grilled Chicken", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125, "poundPrice": 11},
  {"id": "HF_22", "name": "Grilled Vegetables", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95, "poundPrice": 9},
  {"id": "HF_23", "name": "Lasagna", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_24", "name": "Linguini with Clams", "category": "Hot Food – Catering", "price": 95, "halfPrice": 95, "fullPrice": 190},
  {"id": "HF_25", "name": "Linguini with Oil", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_26", "name": "Mac N Cheese", "category": "Hot Food – Catering", "price": 25, "halfPrice": 25, "fullPrice": 50},
  {"id": "HF_27", "name": "Manicotti", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_28", "name": "Mashed Potatoes", "category": "Hot Food – Catering", "price": 35, "halfPrice": 35, "fullPrice": 70},
  {"id": "HF_29", "name": "Meatballs (Sauce)", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_30", "name": "Mozzarella Sticks", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_31", "name": "Orecchiette with Broccoli Rabe & Sausage", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_32", "name": "Penne Broccoli", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_33", "name": "Penne Marinara", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_34", "name": "Penne Vodka", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_35", "name": "Penne with Sundried Tomatoes & Broccoli", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_36", "name": "Pernil", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_37", "name": "Pigs In A Blanket", "category": "Hot Food – Catering", "price": 75, "halfPrice": 75, "fullPrice": 145},
  {"id": "HF_38", "name": "Potato Croquettes", "category": "Hot Food – Catering", "price": 30, "halfPrice": 30, "fullPrice": 60},
  {"id": "HF_39", "name": "Prosciutto Balls", "category": "Hot Food – Catering", "price": 30, "halfPrice": 30, "fullPrice": 60},
  {"id": "HF_40", "name": "Ravioli (Sauce)", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_41", "name": "Red Roasted Potatoes", "category": "Hot Food – Catering", "price": 45, "halfPrice": 45, "fullPrice": 90},
  {"id": "HF_42", "name": "Rice Balls", "category": "Hot Food – Catering", "price": 30, "halfPrice": 30, "fullPrice": 60},
  {"id": "HF_43", "name": "Roast Pork", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_44", "name": "Roasted Potatoes", "category": "Hot Food – Catering", "price": 45, "halfPrice": 45, "fullPrice": 90},
  {"id": "HF_45", "name": "Sausage (Hot/Sweet)", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_46", "name": "Sausage & Broccoli Rabe", "category": "Hot Food – Catering", "price": 95, "halfPrice": 95, "fullPrice": 190},
  {"id": "HF_47", "name": "Sausage & Potatoes", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_48", "name": "Sausage & Peppers", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_49", "name": "Shrimp Oreganata", "category": "Hot Food – Catering", "price": 90, "halfPrice": 90, "fullPrice": 145},
  {"id": "HF_50", "name": "Shrimp Parm", "category": "Hot Food – Catering", "price": 90, "halfPrice": 90, "fullPrice": 145},
  {"id": "HF_51", "name": "Sliced Sweet Ham", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_52", "name": "Sliced Turkey With Gravy", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_53", "name": "Stuffed Mushrooms", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 100, "poundPrice": 12},
  {"id": "HF_54", "name": "Stuffed Shells", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_55", "name": "Swedish Meatballs", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  {"id": "HF_56", "name": "Tortellini Pesto", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_57", "name": "Tortellini", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_58", "name": "Tri Color Pasta", "category": "Hot Food – Catering", "price": 50, "halfPrice": 50, "fullPrice": 95},
  {"id": "HF_59", "name": "Veal Francese", "category": "Hot Food – Catering", "price": 100, "halfPrice": 100, "fullPrice": 180},
  {"id": "HF_60", "name": "Veal Marsala", "category": "Hot Food – Catering", "price": 100, "halfPrice": 100, "fullPrice": 180},
  {"id": "HF_61", "name": "Veal Parm", "category": "Hot Food – Catering", "price": 100, "halfPrice": 100, "fullPrice": 180},
  {"id": "HF_62", "name": "Veal Rollatini", "category": "Hot Food – Catering", "price": 125, "halfPrice": 125, "fullPrice": 200},
  {"id": "HF_63", "name": "White Rice", "category": "Hot Food – Catering", "price": 30, "halfPrice": 30, "fullPrice": 45},
  {"id": "HF_64", "name": "Whole Wheat Penne/Ziti", "category": "Hot Food – Catering", "price": 65, "halfPrice": 65, "fullPrice": 125},
  
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
  { name: 'Prosciutto or Veal & Cheese', price: 20 },
  { name: 'Prosciutto or Veal & Mozzarella', price: 24 },
  { name: 'Just Tuna (No Cheese)', price: 13 },
  { name: 'Just Grilled Veggies (No Cheese)', price: 13 },
  { name: 'Just Meat (No Cheese)', price: 14 },
  { name: 'Just Proscuitto or Veal (No Cheese)', price: 16 },
];

const categories = ['All', 'Regular Heroes', 'Smoked Mozzarella Heroes', '"P" Heroes', 'Chips', 'Bread Items', 'Appetizers', "Kid's Menu", 'Beverages', 'Desserts', 'Grocery Items', 'Milk', 'Party Heroes – Catering', 'Hot Food – Catering', 'Platters – Catering', 'Salads – Catering', 'Breakfast – Catering', 'Urban Air – Catering', 'Melody Lanes – Catering'];

function App() {
  const [cart, setCart] = useState([]);
  const [melodySize, setMelodySize] = useState('2');
  const [urbanHeroOption, setUrbanHeroOption] = useState('Regular / No Tuna');
  const [partyHeroFeet, setPartyHeroFeet] = useState(2);
  const [partyHeroWheel, setPartyHeroWheel] = useState(false);
  const [partyHeroTray, setPartyHeroTray] = useState(false);
  const [partyHeroPan, setPartyHeroPan] = useState(false);
  const [hotFoodOption, setHotFoodOption] = useState('half');
  const [platterOption, setPlatterOption] = useState('small');
  const [waterSize, setWaterSize] = useState('16oz');
  const [cateringOption, setCateringOption] = useState('half');
  const [heroQuantity, setHeroQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [addonQuantities, setAddonQuantities] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [customTip, setCustomTip] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [manualSubtotal, setManualSubtotal] = useState('');
  const [taxExempt, setTaxExempt] = useState(false);
  const [expandedAddonCategories, setExpandedAddonCategories] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [addonSearch, setAddonSearch] = useState("");
  const [customItemText, setCustomItemText] = useState('');
  const [customItemPrice, setCustomItemPrice] = useState('');

  // Keep the menu stationary while the cart is open (including iPhone Safari).
  useEffect(() => {
    if (!showCart) return undefined;

    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    return () => {
      Object.assign(body.style, previous);
      window.scrollTo(0, scrollY);
    };
  }, [showCart]);


  const heroCategories = ['Regular Heroes', 'Smoked Mozzarella Heroes', '"P" Heroes'];
  const isHeroItem = (item) => heroCategories.includes(item.category) || item.id === '#22';

  const getAvailableAddons = (item) => {
    if (!isHeroItem(item)) return [];
    const customOptions = item.id === '#22'
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
            { name: 'Prosciutto or Veal & Cheese', price: 20 },
            { name: 'Prosciutto or Veal & Mozzarella', price: 24 },
            { name: 'Just Tuna (No Cheese)', price: 13 },
            { name: 'Just Grilled Veggies (No Cheese)', price: 13 },
            { name: 'Just Meat (No Cheese)', price: 14 },
            { name: 'Just Proscuitto or Veal (No Cheese)', price: 16 },
          ]
        }]
      : [];
    return [...customOptions, ...addonCategories];
  };

  // Search by displayed number, item name, or ingredient description.
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = items.filter(
    (item) => (activeCategory === 'All' || item.category === activeCategory) &&
      (!normalizedSearch || [item.name, item.id, item.description]
        .some(value => String(value ?? '').toLowerCase().includes(normalizedSearch)))
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
    setHeroQuantity(1);
    if (item.category === 'Melody Lanes – Catering') {
      setSelectedItem(item);
      setEditIndex(index);
      setMelodySize(item.melodySize || '2');
      return;
    }
    if (item.category === 'Urban Air – Catering') {
      if (!item.heroPackage && index === null) {
        setCart(prev => [...prev, { ...item, total: item.price, addons: [] }]);
        return;
      }
      setSelectedItem(item);
      setEditIndex(index);
      setUrbanHeroOption(item.urbanHeroOption || 'Regular / No Tuna');
      return;
    }
    if (item.category === 'Salads – Catering' || item.category === 'Breakfast – Catering') {
      if (item.fixedPrice != null && index === null) {
        setCart(prev => [...prev, { ...item, price: item.fixedPrice, total: item.fixedPrice, addons: [] }]);
        return;
      }
      setSelectedItem(item);
      setEditIndex(index);
      setCateringOption(item.cateringOption || (item.coffeePrices ? '15' : item.personPrice != null ? 'person' : item.poundPrice != null ? 'pound' : 'half'));
      return;
    }
    if (item.waterSizes) {
      setSelectedItem(item);
      setEditIndex(index);
      setWaterSize(item.waterSize || '16oz');
      return;
    }
    if (item.id === 'bread8' || item.appetizerSize) {
      setSelectedItem(item);
      setEditIndex(index);
      setPlatterOption(item.platterOption || 'small');
      return;
    }
    if (item.category === "Platters – Catering") {
      // Fixed-price platter adds immediately, like other fixed-price specials.
      if (item.fixedPrice != null && index === null) {
        setCart(prev => [...prev, { ...item, price: item.fixedPrice, total: item.fixedPrice, addons: [] }]);
        return;
      }
      setSelectedItem(item);
      setEditIndex(index);
      setPlatterOption(item.platterOption || (item.personPrice != null ? 'person' : item.fixedPrice != null ? 'fixed' : 'small'));
      return;
    }
    if (item.category === "Hot Food – Catering") {
      // Fixed-price Hot Food specials behave like Chips and Bread: one tap adds them.
      if (item.fixedPrice != null && index === null) {
        const cartItem = { ...item, hotFoodOption: 'fixed', price: item.fixedPrice, total: item.fixedPrice, addons: [] };
        setCart(prev => [...prev, cartItem]);
        return;
      }
      setSelectedItem(item);
      setEditIndex(index);
      setHotFoodOption(item.hotFoodOption || (item.fixedPrice != null ? 'fixed' : item.dozenPrice ? 'dozen' : 'half'));
      setHeroQuantity(index !== null ? 1 : 1);
      return;
    }
    if (item.category === "Party Heroes – Catering") {
      setSelectedItem(item);
      setEditIndex(index);
      setPartyHeroFeet(item.feet || 2);
      setPartyHeroWheel(Boolean(item.partyHeroWheel));
      setPartyHeroTray(Boolean(item.partyTray) && !item.partyPan);
      setPartyHeroPan(Boolean(item.partyPan) || (item.name.includes('(Pan)') && !item.partyTray));
      setHeroQuantity(1);
      return;
    }
    if (!isHeroItem(item)) {
      const itemWithAddons = { ...item, addons: [], total: item.price };
      setCart((prev) => [...prev, itemWithAddons]);
      return;
    }
    setSelectedItem(item);
    setEditIndex(index);
    setCustomItemText(item.id === '#22' ? (item.customItemText || '') : '');
    setCustomItemPrice(item.id === '#22' ? (item.price ? String(item.price) : '') : '');
    const initialQuantities = index !== null ? Object.fromEntries(item.addons?.map(a => [a.name, a.qty]) || []) : {};
    setAddonQuantities(initialQuantities);
  }


  function saveToCart() {
    if (selectedItem.category === 'Melody Lanes – Catering') {
      const price = melodySize === '3' ? selectedItem.largePrice : selectedItem.smallPrice;
      const item = { ...selectedItem, melodySize, price, total: price, addons: [], name: `${selectedItem.name} (${melodySize}FT)` };
      setCart(prev => {
        const copies = Array.from({ length: heroQuantity }, () => ({ ...item }));
        if (editIndex === null) return [...prev, ...copies];
        const updated = [...prev];
        updated.splice(editIndex, 1, ...copies);
        return updated;
      });
      setSelectedItem(null);
      setEditIndex(null);
      setHeroQuantity(1);
      return;
    }

    if (selectedItem.category === 'Urban Air – Catering') {
      const urbanItem = { ...selectedItem, urbanHeroOption, price: 105, total: 105, addons: [], name: `6 Heroes/Cut in 4/Tray (${urbanHeroOption})` };
      setCart(prev => {
        const copies = Array.from({ length: heroQuantity }, () => ({ ...urbanItem }));
        if (editIndex === null) return [...prev, ...copies];
        const updated = [...prev];
        updated.splice(editIndex, 1, ...copies);
        return updated;
      });
      setSelectedItem(null);
      setEditIndex(null);
      setHeroQuantity(1);
      return;
    }
    if (selectedItem.category === 'Salads – Catering' || selectedItem.category === 'Breakfast – Catering') {
      const price = selectedItem.coffeePrices ? selectedItem.coffeePrices[cateringOption] :
        cateringOption === 'deep' ? selectedItem.deepPrice : cateringOption === 'full' ? selectedItem.fullPrice :
        cateringOption === 'pound' ? selectedItem.poundPrice : cateringOption === 'person' ? selectedItem.personPrice :
        selectedItem.fixedPrice != null ? selectedItem.fixedPrice : selectedItem.halfPrice;
      const labels = { half: 'Half', full: 'Full', deep: 'Deep', pound: '1 lb', person: 'Per Person', '15': '15 People', '25': '25 People' };
      const suffix = labels[cateringOption];
      const cartItem = { ...selectedItem, cateringOption, price, total: price, addons: [], name: suffix ? `${selectedItem.name} (${suffix})` : selectedItem.name };
      setCart(prev => {
        const copies = Array.from({ length: heroQuantity }, () => ({ ...cartItem }));
        if (editIndex === null) return [...prev, ...copies];
        const updated = [...prev];
        updated.splice(editIndex, 1, ...copies);
        return updated;
      });
      setSelectedItem(null);
      setEditIndex(null);
      setHeroQuantity(1);
      return;
    }
    if (selectedItem.waterSizes) {
      const chosen = selectedItem.waterSizes.find(option => option.label === waterSize) || selectedItem.waterSizes[0];
      const waterItem = { ...selectedItem, waterSize: chosen.label, name: `Water (${chosen.label})`, price: chosen.price, total: chosen.price, addons: [] };
      setCart(prev => {
        const copies = Array.from({ length: heroQuantity }, () => ({ ...waterItem }));
        if (editIndex === null) return [...prev, ...copies];
        const updated = [...prev];
        updated.splice(editIndex, 1, ...copies);
        return updated;
      });
      setSelectedItem(null);
      setEditIndex(null);
      setHeroQuantity(1);
      return;
    }
    if (selectedItem.category === "Platters – Catering" || selectedItem.id === "bread8" || selectedItem.appetizerSize) {
      const price = platterOption === 'large' ? selectedItem.largePrice : platterOption === 'person' ? selectedItem.personPrice : platterOption === 'fixed' ? selectedItem.fixedPrice : selectedItem.smallPrice;
      const sizeLabel = selectedItem.appetizerSize ? (platterOption === 'large' ? '1 LB.' : '1/2 LB.') : platterOption === 'large' ? 'Large' : platterOption === 'small' ? 'Small' : platterOption === 'person' ? 'Per Person' : null;
      const platterItem = { ...selectedItem, platterOption, price, total: price, addons: [], name: sizeLabel ? `${selectedItem.name} (${sizeLabel})` : selectedItem.name };
      setCart(prev => {
        const copies = Array.from({ length: heroQuantity }, () => ({ ...platterItem }));
        if (editIndex === null) return [...prev, ...copies];
        const updated = [...prev];
        updated.splice(editIndex, 1, ...copies);
        return updated;
      });
      setSelectedItem(null);
      setEditIndex(null);
      setHeroQuantity(1);
      return;
    }
    if (selectedItem.category === "Hot Food – Catering") {
      const option = hotFoodOption;
      const price = option === 'fixed' ? selectedItem.fixedPrice : option === 'full' ? selectedItem.fullPrice : option === 'pound' ? selectedItem.poundPrice : option === 'dozen' ? selectedItem.dozenPrice : selectedItem.halfPrice;
      const sizeLabel = option === 'fixed' ? null : option === 'full' ? 'Full Tray' : option === 'pound' ? '1 lb' : option === 'dozen' ? '1 Dozen' : 'Half Tray';
      const hotItem = { ...selectedItem, hotFoodOption: option, price, total: price, addons: [], name: sizeLabel ? `${selectedItem.name} (${sizeLabel})` : selectedItem.name };
      setCart(prev => {
        const copies = Array.from({ length: heroQuantity }, () => ({ ...hotItem }));
        if (editIndex === null) return [...prev, ...copies];
        const updated = [...prev];
        updated.splice(editIndex, 1, ...copies);
        return updated;
      });
      setSelectedItem(null);
      setEditIndex(null);
      setHeroQuantity(1);
      return;
    }
    if (selectedItem.category === "Party Heroes – Catering") {
      const feet = partyHeroFeet;
      const isWheel = partyHeroWheel && Boolean(selectedItem.wheelPrices);
      const tray = partyHeroTray || partyHeroPan || isWheel;
      const price = isWheel
        ? selectedItem.wheelPrices[feet]
        : (selectedItem.pricePerFoot + (feet === 4 ? 2 : 0)) * feet + (tray ? 0 : 3);
      const baseName = selectedItem.name.replace(/ \(\d ft(?:, Pan|, Tray|, Cutting Board)\)$/, '').replace(/ \(\dFT Wheel\)$/, '');
      const partyItem = { ...selectedItem, feet, partyTray: partyHeroTray, partyPan: partyHeroPan, partyHeroWheel: isWheel, price, total: price, addons: [], name: isWheel ? `${baseName} (${feet}FT Wheel)` : `${baseName} (${feet} ft${partyHeroPan ? ', Pan' : partyHeroTray ? ', Tray' : ', Cutting Board'})` };
      setCart(prev => {
        const copies = Array.from({ length: heroQuantity }, () => ({ ...partyItem }));
        if (editIndex === null) return [...prev, ...copies];
        const updated = [...prev];
        updated.splice(editIndex, 1, ...copies);
        return updated;
      });
      setSelectedItem(null);
      setEditIndex(null);
      setHeroQuantity(1);
      return;
    }
    const addons = Object.entries(addonQuantities).map(([name, qty]) => {
      const price = addonCategories.flatMap(c => c.options).find(opt => opt.name === name)?.price ??
                  specialCustomAddons.find(opt => opt.name === name)?.price ?? 0;
      return { name, qty, price };
    });
    const itemWithAddons = {
      ...selectedItem,
      ...(selectedItem.id === '#22' ? {
        customItemText: customItemText.trim(),
        name: customItemText.trim() || 'Custom',
        price: Math.max(0, Number(customItemPrice) || 0),
      } : {}),
      addons,
      total: (selectedItem.id === '#22' ? Math.max(0, Number(customItemPrice) || 0) : selectedItem.price) + addons.reduce((sum, a) => sum + a.price * a.qty, 0),
    };
    setCart((prev) => {
      const updated = [...prev];
      const copies = Array.from({ length: heroQuantity }, () => ({ ...itemWithAddons, addons: itemWithAddons.addons.map(a => ({ ...a })) }));
      if (editIndex !== null) updated.splice(editIndex, 1, ...copies);
      else updated.push(...copies);
      return updated;
    });
    setSelectedItem(null);
    setAddonSearch('');
    setExpandedAddonCategories([]);
    setAddonQuantities({});
    setHeroQuantity(1);
    setEditIndex(null);
  }

  function removeAddonFromItem(itemIndexes, addonIndex) {
    // Cart rows can represent multiple identical heroes. Update their real cart
    // indexes, not the index of the displayed group.
    setCart((prev) => prev.map((entry, index) => {
      if (!itemIndexes.includes(index)) return entry;
      const addons = (entry.addons || []).filter((_, i) => i !== addonIndex);
      const basePrice = entry.manualPrice ?? entry.price;
      return {
        ...entry,
        addons,
        total: basePrice + addons.reduce((sum, addon) => sum + addon.price * addon.qty, 0),
      };
    }));
  }

  const rawSubtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const subtotal = manualSubtotal ? parseFloat(manualSubtotal) || 0 : rawSubtotal;
  const tip = Number(customTip);
  const delivery = Math.max(0, Number(deliveryFee) || 0);
  // Urban Air contract: always 10% off its items, including manually adjusted prices.
  const urbanAirSubtotal = cart.reduce((sum, item) => sum + (item.category === 'Urban Air – Catering' ? item.total : 0), 0);
  const urbanAirDiscount = Math.round(urbanAirSubtotal * 0.10 * 100) / 100;
  const subtotalAfterDiscount = subtotal - urbanAirDiscount;
  const subtotalWithTipAndDelivery = subtotalAfterDiscount + tip + delivery;
  // Urban Air is always tax-exempt, even when the global tax-exempt switch is off.
  // For mixed carts, only non-Urban Air items are taxable. Delivery/tip on
  // Urban Air-only orders also remain tax-exempt.
  const melodySubtotal = cart.reduce((sum, item) => sum + (item.category === 'Melody Lanes – Catering' ? item.total : 0), 0);
  const nonUrbanSubtotal = Math.max(0, subtotal - urbanAirSubtotal - melodySubtotal);
  const exemptOnly = cart.length > 0 && cart.every(item => ['Urban Air – Catering', 'Melody Lanes – Catering'].includes(item.category));
  const taxableSubtotal = nonUrbanSubtotal > 0 ? nonUrbanSubtotal + tip + delivery : 0;
  const tax = taxExempt ? 0 : taxableSubtotal * 0.08875;
  const subtotalWithTax = subtotalWithTipAndDelivery + tax;
  // Urban Air items are exempt from the 3.95% service fee as well.
  // In mixed carts, charge the fee only on non-Urban Air items (and
  // applicable tax, tip and delivery), never on the Urban Air portion.
  const serviceFeeBase = nonUrbanSubtotal > 0 ? nonUrbanSubtotal + tip + delivery + tax : 0;
  const serviceFee = serviceFeeBase * 0.0395;
  
  function clearCart() {
    setTaxExempt(false);
    setManualSubtotal('');
    setCart([]);
    setCustomTip(0);
    setDeliveryFee(0);
  }


  function groupCartItems(cart) {
    const grouped = [];
    cart.forEach((item, cartIndex) => {
      const matchIndex = grouped.findIndex(g =>
        g.name === item.name &&
        g.price === item.price &&
        g.manualPrice === item.manualPrice &&
        JSON.stringify(g.addons) === JSON.stringify(item.addons)
      );
      if (matchIndex >= 0) {
        grouped[matchIndex].quantity += 1;
        grouped[matchIndex].indexes.push(cartIndex);
        grouped[matchIndex].total += item.total;
      } else {
        grouped.push({ ...item, quantity: 1, indexes: [cartIndex] });
      }
    });
    return grouped;
  }

  // Match the Manual Subtotal controls: type an override or adjust by $0.50.
  // Clearing the field restores the item's original price.
  function updateCartManualPrice(itemIndexes, value) {
    const override = value === '' ? null : Number(value);
    if (override !== null && (!Number.isFinite(override) || override < 0)) return;
    setCart(prev => prev.map((entry, index) => {
      if (!itemIndexes.includes(index)) return entry;
      const addonsTotal = (entry.addons || []).reduce((sum, addon) => sum + addon.price * addon.qty, 0);
      const { manualPrice: _oldManualPrice, ...rest } = entry;
      return {
        ...rest,
        ...(override === null ? {} : { manualPrice: override }),
        total: (override === null ? entry.price : override) + addonsTotal,
      };
    }));
  }

  // Restore the original base price for one grouped cart row, retaining add-ons.
  function resetCartItemPrice(itemIndexes) {
    updateCartManualPrice(itemIndexes, '');
  }

  // Restore all manual item prices and remove any manual subtotal override.
  function resetAllCartPrices() {
    setCart(prev => prev.map(entry => {
      const { manualPrice: _oldManualPrice, ...rest } = entry;
      const addonsTotal = (entry.addons || []).reduce((sum, addon) => sum + addon.price * addon.qty, 0);
      return { ...rest, total: entry.price + addonsTotal };
    }));
    setManualSubtotal('');
  }

  // Adjust a grouped cart row without losing its selected size, price, or add-ons.
  function changeCartQuantity(itemIndexes, adjustment) {
    setCart(prev => {
      if (adjustment > 0) {
        const template = prev[itemIndexes[0]];
        if (!template || itemIndexes.length >= 99) return prev;
        return [...prev, { ...template, addons: (template.addons || []).map(a => ({ ...a })) }];
      }
      if (adjustment < 0 && itemIndexes.length > 1) {
        const removeIndex = itemIndexes[itemIndexes.length - 1];
        return prev.filter((_, i) => i !== removeIndex);
      }
      return prev;
    });
  }

  // Set the quantity of a grouped cart item directly from its dropdown.
  function setCartQuantity(itemIndexes, desiredQuantity) {
    const target = Math.max(1, Math.min(99, Number(desiredQuantity) || 1));
    setCart(prev => {
      const currentIndexes = itemIndexes.filter(i => i >= 0 && i < prev.length);
      if (!currentIndexes.length || currentIndexes.length === target) return prev;
      if (target < currentIndexes.length) {
        const remove = new Set(currentIndexes.slice(target));
        return prev.filter((_, i) => !remove.has(i));
      }
      const template = prev[currentIndexes[0]];
      const copies = Array.from({ length: target - currentIndexes.length }, () => ({
        ...template,
        addons: (template.addons || []).map(a => ({ ...a }))
      }));
      return [...prev, ...copies];
    });
  }

  const groupedCart = groupCartItems(cart);

const finalTotal = subtotalWithTax + serviceFee;

return (
    <div className="lioni-pos-root" style={{ fontFamily: '"Montserrat", Arial, sans-serif', background: '#F4F5F0', padding: 20, minHeight: '100vh', width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflowX: 'clip' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .lioni-pos-root, .lioni-pos-root button, .lioni-pos-root input, .lioni-pos-root select, .lioni-pos-root textarea { font-family: "Montserrat", Arial, sans-serif; }
        html, body, #root { max-width: 100%; margin: 0; overflow-x: clip; }
        .lioni-pos-root, .lioni-pos-root * { box-sizing: border-box; }
        .lioni-pos-root { min-width: 0; color: #242424; }
        .lioni-pos-root button { cursor: pointer; }
        .lioni-pos-root input:focus-visible, .lioni-pos-root select:focus-visible, .lioni-pos-root button:focus-visible { outline: 2px solid #008C45; outline-offset: 2px; }
        .lioni-pos-root input, .lioni-pos-root select, .lioni-pos-root textarea { max-width: 100%; min-width: 0; }
        .lioni-pos-root .lioni-overlay { padding: 12px; overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain; }
        .lioni-pos-root .lioni-dialog { min-width: 0; max-width: 100%; overflow-wrap: anywhere; }
        @media (max-width: 600px) {
          .lioni-pos-root { padding: 12px !important; }
          .lioni-pos-root .lioni-overlay { align-items: center; height: 100dvh; }
          .lioni-pos-root .lioni-dialog { width: 100% !important; max-height: calc(100dvh - 24px) !important; padding: 16px !important; overflow-y: auto; -webkit-overflow-scrolling: touch; }
          .lioni-pos-root button { touch-action: manipulation; }
        }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, minWidth: 0, marginBottom: 20 }}>
        <button type="button" aria-label="Return to Lioni POS home" title="Back to home" onClick={() => { setActiveCategory('All'); setSearchTerm(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', flexShrink: 1, minWidth: 0 }}>
          <img src={`${process.env.PUBLIC_URL}/lioni-pos-logo.png`} alt="Lioni POS — Home" style={{ display: 'block', width: 'clamp(150px, 35vw, 250px)', height: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
        </button>
        <button onClick={() => setShowCart(true)} style={{ position: 'relative', flexShrink: 0, background: '#008C45', color: '#fff', border: 'none', borderRadius: 20, padding: '6px 12px', fontSize: 14 }}>
          🛒 {cart.length} • ${subtotal.toFixed(2)}
        </button>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..." style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #ccc', marginBottom: 16, fontSize: '16px' }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{ padding: '6px 12px', borderRadius: 8, border: 'none', background: activeCategory === cat ? '#008C45' : '#ffffff', color: activeCategory === cat ? '#ffffff' : '#222222', fontWeight: activeCategory === cat ? 700 : 500 }}
          >
            {cat} ({getItemCountInCategory(cat)})
          </button>
        ))}
      </div>

      {activeCategory === 'Melody Lanes – Catering' && <p style={{ margin: '0 0 12px', fontWeight: 600 }}>Always tax exempt · No service fee · Delivery fee when applicable</p>}
      {activeCategory === 'Urban Air – Catering' && <p style={{ margin: '0 0 12px', fontWeight: 600 }}>Always 10% off Urban Air items · Always tax exempt · No service fee · $15 delivery fee when delivery applies</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 100px), 1fr))', gap: 12 }}>
        {filteredItems.map(item => (
          <div
            key={item.id}
            style={{ padding: 10, borderRadius: 8, background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer' }}
            onClick={() => openCustomization(item)}
          >
            <strong>{item.name}</strong>
            {((!["Hot Food – Catering", "Platters – Catering", "Salads – Catering", "Breakfast – Catering", "Melody Lanes – Catering"].includes(item.category) && item.id !== "bread8" && !item.appetizerSize && !item.waterSizes) || item.fixedPrice != null) && <div>{item.category === "Party Heroes – Catering" ? `$${item.pricePerFoot.toFixed(2)}/ft` : `$${item.price.toFixed(2)}`}</div>}
          </div>
        ))}
      </div>

      {selectedItem?.category === 'Melody Lanes – Catering' && (
        <div className="lioni-overlay" onClick={(e) => { if (e.target === e.currentTarget) { setSelectedItem(null); setEditIndex(null); } }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="lioni-dialog" style={{ background: '#fff', borderRadius: 16, padding: 20, width: '90%', maxWidth: 390, boxSizing: 'border-box' }}>
            <h2 style={{ marginTop: 0 }}>Customize {selectedItem.name}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '16px 0', flexWrap: 'wrap' }}>
              <strong>Quantity</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong style={{ minWidth: 24, textAlign: 'center' }}>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
              </div>
            </div>
            <div role="radiogroup" aria-label="Select hero size" style={{ marginTop: 14 }}>
              <strong style={{ display: 'block', marginBottom: 8 }}>Select Hero Size</strong>
              {[{ feet: 2, price: selectedItem.smallPrice }, { feet: 3, price: selectedItem.largePrice }].map(option => (
                <label key={option.feet} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px', marginBottom: 8, border: `2px solid ${melodySize === String(option.feet) ? '#008C45' : '#ddd'}`, borderRadius: 10, cursor: 'pointer', background: melodySize === String(option.feet) ? '#f0faf4' : '#fff' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input type="radio" name="melodySize" value={option.feet} checked={melodySize === String(option.feet)} onChange={() => setMelodySize(String(option.feet))} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                    <strong>{option.feet} Foot Hero</strong>
                  </span>
                  <strong>${option.price.toFixed(2)}</strong>
                </label>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveToCart} style={{ background: '#008C45', color: 'white', border: 0, borderRadius: 7, padding: '9px 14px' }}>{editIndex === null ? `Add ${heroQuantity} to Cart` : `Save ${heroQuantity} to Cart`}</button>
              <button onClick={() => { setSelectedItem(null); setEditIndex(null); }} style={{ border: '1px solid #ccc', borderRadius: 7, padding: '9px 14px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {selectedItem?.category === 'Urban Air – Catering' && (
        <div className="lioni-overlay" onClick={(e) => { if (e.target === e.currentTarget) { setSelectedItem(null); setEditIndex(null); } }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="lioni-dialog" style={{ background: '#fff', borderRadius: 16, padding: 20, width: '90%', maxWidth: 390, maxHeight: '85vh', overflowY: 'auto' }}>
            <h2 style={{ marginTop: 0 }}>6 Heroes/Cut in 4/Tray</h2>
            <p>Package price: $105.00 before Urban Air 10% discount</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <strong>Quantity</strong>
              <button onClick={() => setHeroQuantity(q => Math.max(1, q - 1))}>−</button>
              <strong>{heroQuantity}</strong>
              <button onClick={() => setHeroQuantity(q => Math.min(99, q + 1))}>+</button>
            </div>
            <label htmlFor="urban-hero-option" style={{ display: 'block', fontWeight: 700, marginBottom: 6 }}>Hero Assortment</label>
            <select id="urban-hero-option" value={urbanHeroOption} onChange={e => setUrbanHeroOption(e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: 10, fontSize: 16, borderRadius: 8, marginBottom: 10 }}>
              {['Regular / No Tuna', 'Italian', 'Turkey', 'Italian / Tuna / Turkey', 'Italian / Turkey, Ham & Cheese', 'Italian & Turkey'].map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            <p style={{ fontSize: 13, color: '#555' }}>{({ 'Regular / No Tuna': 'Heroes 6 / 15 / 16 / 32 / 60 / 71', 'Italian': '2-9 / 2-30 / 2-46', 'Turkey': '2-6 / 2-15 / 2-37', 'Italian / Tuna / Turkey': '2-6 / 2-4 / 2-46', 'Italian / Turkey, Ham & Cheese': '6 / 15 / 46 / 55 / 2-Ham & American', 'Italian & Turkey': '3 / 9 / 15 / 30 / 37 / 46' })[urbanHeroOption]}</p>
            <p><strong>Total before discount: ${(105 * heroQuantity).toFixed(2)}</strong></p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveToCart} style={{ padding: 12, flex: 1, background: '#008C45', color: '#fff', border: 'none', borderRadius: 8 }}>Add to Cart</button>
              <button onClick={() => { setSelectedItem(null); setEditIndex(null); }} style={{ padding: 12, borderRadius: 8 }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {['Salads – Catering', 'Breakfast – Catering'].includes(selectedItem?.category) && (
        <div className="lioni-overlay" onClick={(e) => { if (e.target === e.currentTarget) { setSelectedItem(null); setEditIndex(null); } }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="lioni-dialog" style={{ background: '#fff', borderRadius: 16, padding: 20, width: '90%', maxWidth: 390, boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
            <h2 style={{ marginTop: 0 }}>Customize {selectedItem.name}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '16px 0' }}>
              <strong>{cateringOption === 'person' ? 'People' : cateringOption === 'pound' ? 'Pounds' : 'Quantity'}</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
              </div>
            </div>
            <div role="radiogroup" aria-label="Select option">
              <strong style={{ display: 'block', marginBottom: 8 }}>{selectedItem.category === 'Salads – Catering' ? 'Select Size' : 'Select Option'}</strong>
              {[
                ...(selectedItem.halfPrice != null ? [{ key: 'half', label: 'Half', price: selectedItem.halfPrice }] : []),
                ...(selectedItem.fullPrice != null ? [{ key: 'full', label: 'Full', price: selectedItem.fullPrice }] : []),
                ...(selectedItem.deepPrice != null ? [{ key: 'deep', label: 'Deep', price: selectedItem.deepPrice }] : []),
                ...(selectedItem.personPrice != null ? [{ key: 'person', label: 'Per Person', price: selectedItem.personPrice }] : []),
                ...(selectedItem.poundPrice != null ? [{ key: 'pound', label: 'Per Pound (1 lb)', price: selectedItem.poundPrice }] : []),
                ...(selectedItem.coffeePrices ? [{ key: '15', label: 'Setup for 15 People', price: 30 }, { key: '25', label: 'Setup for 25 People', price: 50 }, { key: 'person', label: 'Per Person', price: 2 }] : []),
              ].map(opt => (
                <label key={opt.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: 12, marginBottom: 8, border: `2px solid ${cateringOption === opt.key ? '#008C45' : '#ddd'}`, borderRadius: 10, cursor: 'pointer', background: cateringOption === opt.key ? '#f0faf4' : '#fff' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input type="radio" name="cateringOption" checked={cateringOption === opt.key} onChange={() => setCateringOption(opt.key)} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                    <strong>{opt.label}</strong>
                  </span>
                  <strong>${opt.price.toFixed(2)}</strong>
                </label>
              ))}
            </div>
            <p><strong>Total: ${((selectedItem.coffeePrices ? selectedItem.coffeePrices[cateringOption] : cateringOption === 'deep' ? selectedItem.deepPrice : cateringOption === 'full' ? selectedItem.fullPrice : cateringOption === 'pound' ? selectedItem.poundPrice : cateringOption === 'person' ? selectedItem.personPrice : selectedItem.halfPrice) * heroQuantity).toFixed(2)}</strong></p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveToCart} style={{ background: '#008C45', color: '#fff', border: 0, borderRadius: 7, padding: '10px 14px' }}>{editIndex === null ? 'Add' : 'Save'} {heroQuantity} to Cart</button>
              <button onClick={() => { setSelectedItem(null); setEditIndex(null); }} style={{ border: '1px solid #ccc', borderRadius: 7, padding: '10px 14px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {selectedItem?.waterSizes && (
        <div className="lioni-overlay" onClick={e => { if (e.target === e.currentTarget) { setSelectedItem(null); setEditIndex(null); } }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="lioni-dialog" style={{ background: '#fff', borderRadius: 16, padding: 20, width: '90%', maxWidth: 390, boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
            <h2 style={{ marginTop: 0 }}>Customize Water</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0' }}>
              <strong>Quantity</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
              </div>
            </div>
            <div role="radiogroup" aria-label="Select water size">
              <strong style={{ display: 'block', marginBottom: 8 }}>Select Water Size</strong>
              {selectedItem.waterSizes.map(option => (
                <label key={option.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: 12, marginBottom: 8, border: `2px solid ${waterSize === option.label ? '#008C45' : '#ddd'}`, borderRadius: 10, cursor: 'pointer', background: waterSize === option.label ? '#f0faf4' : '#fff' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input type="radio" name="waterSize" checked={waterSize === option.label} onChange={() => setWaterSize(option.label)} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                    <strong>{option.label}</strong>
                  </span>
                  <strong>${option.price.toFixed(2)}</strong>
                </label>
              ))}
            </div>
            <p><strong>Total: ${((selectedItem.waterSizes.find(option => option.label === waterSize) || selectedItem.waterSizes[0]).price * heroQuantity).toFixed(2)}</strong></p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveToCart} style={{ background: '#008C45', color: '#fff', border: 0, borderRadius: 7, padding: '10px 14px' }}>{editIndex === null ? 'Add' : 'Save'} {heroQuantity} to Cart</button>
              <button onClick={() => { setSelectedItem(null); setEditIndex(null); }} style={{ border: '1px solid #ccc', borderRadius: 7, padding: '10px 14px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {(selectedItem?.category === 'Platters – Catering' || selectedItem?.id === 'bread8' || selectedItem?.appetizerSize) && (
        <div className="lioni-overlay" onClick={(e) => { if (e.target === e.currentTarget) { setSelectedItem(null); setEditIndex(null); } }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="lioni-dialog" style={{ background: '#fff', borderRadius: 16, padding: 20, width: '90%', maxWidth: 390, boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
            <h2 style={{ marginTop: 0 }}>Customize {selectedItem.name}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '16px 0' }}>
              <strong>{platterOption === 'person' ? 'People' : 'Quantity'}</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
              </div>
            </div>
            {selectedItem.fixedPrice == null && <div role="radiogroup" aria-label="Select platter size">
              <strong style={{ display: 'block', marginBottom: 8 }}>{selectedItem.personPrice != null ? 'Price Per Person' : 'Select Size'}</strong>
              {[
                ...(selectedItem.smallPrice != null ? [{ key: 'small', label: selectedItem.appetizerSize ? '1/2 LB.' : 'Small', price: selectedItem.smallPrice }] : []),
                ...(selectedItem.largePrice != null ? [{ key: 'large', label: selectedItem.appetizerSize ? '1 LB.' : 'Large', price: selectedItem.largePrice }] : []),
                ...(selectedItem.personPrice != null ? [{ key: 'person', label: 'Per Person', price: selectedItem.personPrice }] : []),
              ].map(opt => (
                <label key={opt.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: 12, marginBottom: 8, border: `2px solid ${platterOption === opt.key ? '#008C45' : '#ddd'}`, borderRadius: 10, cursor: 'pointer', background: platterOption === opt.key ? '#f0faf4' : '#fff' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input type="radio" name="platterOption" checked={platterOption === opt.key} onChange={() => setPlatterOption(opt.key)} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                    <strong>{opt.label}</strong>
                  </span>
                  <strong>${opt.price.toFixed(2)}</strong>
                </label>
              ))}
            </div>}
            <p><strong>Total: ${((platterOption === 'large' ? selectedItem.largePrice : platterOption === 'person' ? selectedItem.personPrice : platterOption === 'fixed' ? selectedItem.fixedPrice : selectedItem.smallPrice) * heroQuantity).toFixed(2)}</strong></p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveToCart} style={{ background: '#008C45', color: '#fff', border: 0, borderRadius: 7, padding: '10px 14px' }}>{editIndex === null ? 'Add' : 'Save'} {heroQuantity} to Cart</button>
              <button onClick={() => { setSelectedItem(null); setEditIndex(null); }} style={{ border: '1px solid #ccc', borderRadius: 7, padding: '10px 14px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {selectedItem?.category === 'Hot Food – Catering' && (
        <div className="lioni-overlay" onClick={(e) => { if (e.target === e.currentTarget) { setSelectedItem(null); setEditIndex(null); } }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="lioni-dialog" style={{ background: '#fff', borderRadius: 16, padding: 20, width: '90%', maxWidth: 390, boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
            <h2 style={{ marginTop: 0 }}>Customize {selectedItem.name}</h2>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '16px 0' }}>
              <strong>{hotFoodOption === 'pound' ? 'Pounds' : hotFoodOption === 'dozen' ? 'Dozens' : 'Quantity'}</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
              </div>
            </div>
                        <div role="radiogroup" aria-label="Select hot food size">
              {selectedItem.fixedPrice == null ? <strong style={{ display: 'block', marginBottom: 8 }}>Select Size</strong> : <strong style={{ display: 'block', marginBottom: 8 }}>Fixed Price: ${selectedItem.fixedPrice.toFixed(2)}</strong>}
              {[
                ...(selectedItem.halfPrice != null ? [{ key: 'half', label: 'Half Tray', price: selectedItem.halfPrice }] : []),
                ...(selectedItem.fullPrice != null ? [{ key: 'full', label: 'Full Tray', price: selectedItem.fullPrice }] : []),
                ...(selectedItem.poundPrice != null ? [{ key: 'pound', label: 'By the Pound (1 lb)', price: selectedItem.poundPrice }] : []),
                ...(selectedItem.dozenPrice != null ? [{ key: 'dozen', label: 'By the Dozen (12 clams)', price: selectedItem.dozenPrice }] : []),
              ].map(opt => (
                <label key={opt.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: 12, marginBottom: 8, border: `2px solid ${hotFoodOption === opt.key ? '#008C45' : '#ddd'}`, borderRadius: 10, cursor: 'pointer', background: hotFoodOption === opt.key ? '#f0faf4' : '#fff' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input type="radio" name="hotFoodOption" checked={hotFoodOption === opt.key} onChange={() => setHotFoodOption(opt.key)} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                    <strong>{opt.label}</strong>
                  </span>
                  <strong>${opt.price.toFixed(2)}</strong>
                </label>
              ))}
            </div>
            
            <p><strong>Total: ${((hotFoodOption === 'fixed' ? selectedItem.fixedPrice : hotFoodOption === 'full' ? selectedItem.fullPrice : hotFoodOption === 'pound' ? selectedItem.poundPrice : hotFoodOption === 'dozen' ? selectedItem.dozenPrice : selectedItem.halfPrice) * heroQuantity).toFixed(2)}</strong></p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveToCart} style={{ background: '#008C45', color: '#fff', border: 0, borderRadius: 7, padding: '10px 14px' }}>{editIndex === null ? 'Add' : 'Save'} {heroQuantity} to Cart</button>
              <button onClick={() => { setSelectedItem(null); setEditIndex(null); }} style={{ border: '1px solid #ccc', borderRadius: 7, padding: '10px 14px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {selectedItem?.category === 'Party Heroes – Catering' && (
        <div className="lioni-overlay" onClick={(e) => { if (e.target === e.currentTarget) setSelectedItem(null); }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="lioni-dialog" style={{ background: '#ffffff', borderRadius: 16, padding: 20, width: '90%', maxWidth: 390, boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
            <h2 style={{ marginTop: 0 }}>Customize {selectedItem.name}</h2>
            {selectedItem.description && (
              <p style={{ fontSize: 12, color: '#666', lineHeight: 1.5, margin: '4px 0 16px' }}>{selectedItem.description}</p>
            )}
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '16px 0', flexWrap: 'wrap' }}>
              <strong>Quantity</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong style={{ minWidth: 24, textAlign: 'center' }}>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
              </div>
            </div>
            <div role="radiogroup" aria-label="Select hero size" style={{ marginTop: 14 }}>
              <strong style={{ display: 'block', marginBottom: 8 }}>Select Hero Size</strong>
              {[
                { feet: 2, label: '2 Foot Hero', wheel: false },
                { feet: 3, label: '3 Foot Hero', wheel: false },
                ...(selectedItem.wheelPrices ? [
                  { feet: 3, label: '3 Foot Wheel', wheel: true },
                  { feet: 4, label: '4 Foot Wheel', wheel: true },
                ] : []),
                { feet: 4, label: '4 Foot Number/Letter Hero', wheel: false },
              ].map(option => {
                const tray = partyHeroPan || partyHeroTray;
                const price = option.wheel
                  ? selectedItem.wheelPrices[option.feet]
                  : (selectedItem.pricePerFoot + (option.feet === 4 ? 2 : 0)) * option.feet + (tray ? 0 : 3);
                const active = partyHeroFeet === option.feet && partyHeroWheel === option.wheel;
                return (
                  <label key={`${option.feet}-${option.wheel}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px', marginBottom: 8, border: `2px solid ${active ? '#008C45' : '#ddd'}`, borderRadius: 10, cursor: 'pointer', background: active ? '#f0faf4' : '#fff' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <input type="radio" name="partyHeroSize" checked={active} onChange={() => { setPartyHeroFeet(option.feet); setPartyHeroWheel(option.wheel); }} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                      <strong>{option.label}</strong>
                    </span>
                    <strong style={{ whiteSpace: 'nowrap' }}>${price.toFixed(2)}</strong>
                  </label>
                );
              })}
            </div>
            <div style={{ margin: '12px 0' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', marginBottom: 10 }}>
                <input type="checkbox" checked={partyHeroTray} onChange={e => { setPartyHeroTray(e.target.checked); if (e.target.checked) setPartyHeroPan(false); }} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                <strong>Tray (remove $3 cutting board fee)</strong>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer' }}>
                <input type="checkbox" checked={partyHeroPan} onChange={e => { setPartyHeroPan(e.target.checked); if (e.target.checked) setPartyHeroTray(false); }} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                <strong>Pan (remove $3 cutting board fee)</strong>
              </label>
              <p style={{ fontSize: 13, color: '#555', marginTop: 6 }}>{partyHeroWheel ? 'Wheel selected — no cutting board fee.' : partyHeroPan ? 'Pan selected — no cutting board fee.' : partyHeroTray ? 'Tray selected — no cutting board fee.' : 'Includes $3 cutting board charge per hero.'}</p>
            </div>
            {partyHeroFeet === 4 && !partyHeroWheel && <p style={{ fontSize: 13, color: '#555' }}>4FT Number/Letter Hero: +$2 per foot included.</p>}
            <p><strong>Total: ${((partyHeroWheel && selectedItem.wheelPrices ? selectedItem.wheelPrices[partyHeroFeet] : (selectedItem.pricePerFoot + (partyHeroFeet === 4 ? 2 : 0)) * partyHeroFeet + ((partyHeroPan || partyHeroTray) ? 0 : 3)) * heroQuantity).toFixed(2)}</strong></p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={saveToCart} style={{ background: '#008C45', color: 'white', border: 0, borderRadius: 7, padding: '9px 14px' }}>{editIndex === null ? `Add ${heroQuantity} to Cart` : `Save ${heroQuantity} to Cart`}</button>
              <button onClick={() => { setSelectedItem(null); setEditIndex(null); }} style={{ border: '1px solid #ccc', borderRadius: 7, padding: '9px 14px' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {selectedItem && isHeroItem(selectedItem) && (
        <div className="lioni-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={(e) => {
      if (e.target === e.currentTarget) {
        setSelectedItem(null);
        setAddonSearch('');
        setExpandedAddonCategories([]);
      }
    }}>
          <div className="lioni-dialog" onClick={(e) => e.stopPropagation()} style={{ background: '#ffffff', padding: 20, borderRadius: 18, width: '90%', maxWidth: 500, maxHeight: '90%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ margin: 0 }}>Customize {selectedItem.name}</h2>
              <div>
                <button onClick={() => { setSelectedItem(null);
    setAddonSearch('');
    setExpandedAddonCategories([]); setAddonSearch(''); setExpandedAddonCategories([]); }} style={{ marginRight: 12, padding: '8px 12px', borderRadius: 8, border: '1px solid #ccc', background: '#F4F5F0' }}>Cancel</button>
                <button onClick={saveToCart} style={{ padding: '8px 12px', borderRadius: 8, background: '#008C45', color: '#fff', border: 'none' }}>{editIndex === null ? `Add ${heroQuantity} to Cart` : `Save ${heroQuantity} to Cart`}</button>
              </div>
            </div>
            {selectedItem.description && (
              <p style={{ fontSize: 12, color: '#666', lineHeight: 1.5, margin: '-6px 0 14px' }}>{selectedItem.description}</p>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '4px 0 12px', flexWrap: 'wrap' }}>
              <strong>Quantity</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong style={{ minWidth: 24, textAlign: 'center' }}>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
              </div>
            </div>
            {selectedItem.id === '#22' && (
              <label style={{ display: 'block', marginBottom: 12, fontSize: 14, fontWeight: 700 }}>
                Custom Item Description
                <input type="text" value={customItemText} onChange={e => setCustomItemText(e.target.value)}
                  placeholder="Enter custom item name or details"
                  style={{ display: 'block', width: '100%', boxSizing: 'border-box', padding: 10, marginTop: 6, border: '1px solid #ccc', borderRadius: 8, fontSize: 16 }} />
                <span style={{ display: 'block', marginTop: 12 }}>Manual Price ($)</span>
                <input type="number" min="0" step="0.01" inputMode="decimal" value={customItemPrice}
                  onChange={e => setCustomItemPrice(e.target.value)} placeholder="0.00"
                  style={{ display: 'block', width: '100%', boxSizing: 'border-box', padding: 10, marginTop: 6, border: '1px solid #ccc', borderRadius: 8, fontSize: 16 }} />
              </label>
            )}
                        <input
              type="text"
              value={addonSearch}
              onChange={(e) => setAddonSearch(e.target.value)}
              placeholder="Search addons..." style={{ width: '96%', padding: 6, fontSize: '16px', marginBottom: 10, borderRadius: 6, border: '1px solid #ccc' }}
            />

            {/* Selected add-ons stay visible as the ingredient categories scroll. */}
            <div style={{ position: 'sticky', top: 0, zIndex: 5, background: '#fff', padding: '8px 0 10px', marginBottom: 8, borderBottom: '1px solid #ddd' }}>
              <div style={{ background: '#F4F5F0', border: '1px solid #d7e9dd', borderRadius: 10, padding: '10px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <strong>Selected Add-Ons</strong>
                  <span style={{ fontSize: 12, color: '#555' }}>{Object.values(addonQuantities).filter(qty => qty > 0).length} selected</span>
                </div>
                {Object.entries(addonQuantities).filter(([, qty]) => qty > 0).length === 0 ? (
                  <span style={{ color: '#666', fontSize: 13 }}>No add-ons selected yet.</span>
                ) : (
                  <div style={{ maxHeight: 160, overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
                    {Object.entries(addonQuantities).filter(([, qty]) => qty > 0).map(([name, qty]) => (
                      <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, padding: '4px 0' }}>
                        <span style={{ fontSize: 13, flex: 1 }}>{qty}× {name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}>
                          <button type="button" aria-label={`Remove one ${name}`} onClick={() => setAddonQuantities(q => ({ ...q, [name]: Math.max(0, (q[name] || 0) - 1) }))} style={{ minWidth: 30, minHeight: 30, borderRadius: 6 }}>−</button>
                          <strong style={{ fontSize: 13, minWidth: 14, textAlign: 'center' }}>{qty}</strong>
                          <button type="button" aria-label={`Add one ${name}`} onClick={() => setAddonQuantities(q => ({ ...q, [name]: Math.min(99, (q[name] || 0) + 1) }))} style={{ minWidth: 30, minHeight: 30, borderRadius: 6 }}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            

            {getAvailableAddons(selectedItem).map((cat, idx) => (
              <div key={idx} style={{ marginBottom: 14 }}>
                <div
                  onClick={() => toggleAddonCategory(cat.title)}
                  style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', background: '#F4F5F0', padding: 10, borderRadius: 10 }}
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
        <div className="lioni-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={(e) => { if (e.target === e.currentTarget) { setShowCart(false); setManualSubtotal(''); } }}>
          <div className="lioni-dialog" style={{ background: '#ffffff', borderRadius: 18, width: '90%', maxWidth: 500, maxHeight: '90dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* Fixed cart header: stays visible while only the cart contents scroll. */}
            <div style={{ flexShrink: 0, padding: '14px 16px', background: '#F4F5F0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <strong style={{ fontSize: 18, color: '#222' }}>🛒 Your Cart</strong>
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" onClick={resetAllCartPrices} style={{ padding: '10px 12px', borderRadius: 8, background: '#fff', color: '#008C45', border: '1px solid #008C45', fontWeight: 600, cursor: 'pointer' }}>Reset Prices</button>
                <button type="button" onClick={clearCart} style={{ padding: '10px 12px', borderRadius: 8, background: '#CD212A', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Clear Cart</button>
                <button type="button" onClick={() => { setShowCart(false); setManualSubtotal(''); }} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ccc', background: '#fff', color: '#222', fontWeight: 600, cursor: 'pointer' }}>Close ✕</button>
              </div>
            </div>
            {/* Tax exemption remains accessible even when the cart is scrolled. */}
            <div style={{ flexShrink: 0, padding: '10px 16px', background: '#F4F5F0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div>
                <strong style={{ fontSize: 15, color: '#222' }}>Tax Exempt</strong>
                <div style={{ fontSize: 12, color: '#555' }}>{taxExempt ? 'Sales tax disabled' : 'Sales tax enabled'}</div>
              </div>
              <button
                type="button"
                onClick={() => setTaxExempt(previous => !previous)}
                aria-pressed={taxExempt}
                aria-label={taxExempt ? 'Remove tax exemption' : 'Apply tax exemption'}
                style={{ padding: '9px 14px', minWidth: 100, borderRadius: 8, border: taxExempt ? '2px solid #008C45' : '1px solid #aaa', background: taxExempt ? '#E0F3E8' : '#fff', color: taxExempt ? '#006B35' : '#222', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}
              >
                {taxExempt ? '✓ Exempt ON' : 'Exempt OFF'}
              </button>
            </div>
            <div style={{ padding: '16px 0', overflowY: 'auto', minHeight: 0, flex: 1, overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
            {groupedCart.map((item, idx) => (
              <div key={idx} style={{ background: '#F4F5F0', padding: 16, width: '100%', boxSizing: 'border-box', borderRadius: 0, marginBottom: 10 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'nowrap', overflowX: 'auto', maxWidth: '100%', WebkitOverflowScrolling: 'touch', paddingBottom: 2 }}>
                    <span style={{ whiteSpace: 'nowrap', flexShrink: 0, fontSize: 14 }}><strong>{item.name}</strong>{item.quantity > 1 ? ` × ${item.quantity}` : ''}{item.quantity === 1 && !(item.category?.includes('Hero') && item.category !== 'Party Heroes – Catering') ? ` - $${item.total.toFixed(2)}` : ''}</span>
                    {(item.category?.includes('Hero') && item.category !== 'Party Heroes – Catering') && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                        <input
                          type="number"
                          aria-label={`Manual price for ${item.name}`}
                          value={item.manualPrice ?? ''}
                          placeholder={item.price.toFixed(2)}
                          min="0"
                          step="0.01"
                          onChange={(e) => updateCartManualPrice(item.indexes, e.target.value)}
                          style={{ width: 64, height: 32, padding: '4px 4px', borderRadius: 6, border: '1px solid #ccc', fontSize: 14, boxSizing: 'border-box' }}
                        />
                        <button type="button" aria-label={`Decrease manual price for ${item.name} by 50 cents`}
                          onClick={() => updateCartManualPrice(item.indexes, Math.max(0, (item.manualPrice ?? item.price) - 0.5).toFixed(2))}
                          style={{ padding: '2px 5px', height: 30, minWidth: 25 }}>−</button>
                        <button type="button" aria-label={`Increase manual price for ${item.name} by 50 cents`}
                          onClick={() => updateCartManualPrice(item.indexes, ((item.manualPrice ?? item.price) + 0.5).toFixed(2))}
                          style={{ padding: '2px 5px', height: 30, minWidth: 25 }}>+</button>
                      </div>
                    )}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, marginLeft: 2, flexShrink: 0 }}>
                      <button type="button" aria-label={`Decrease quantity of ${item.name}`} disabled={item.quantity <= 1} onClick={() => changeCartQuantity(item.indexes, -1)} style={{ width: 30, height: 34, flexShrink: 0, borderRadius: 7, border: '1px solid #ccc', background: '#fff', fontSize: 19, fontWeight: 700, opacity: item.quantity <= 1 ? 0.4 : 1 }}>−</button>
                      <select
                        aria-label={`Quantity of ${item.name}`}
                        value={item.quantity}
                        onChange={e => setCartQuantity(item.indexes, e.target.value)}
                        style={{ width: 54, height: 34, padding: '0 2px', borderRadius: 7, border: '1px solid #bbb', background: '#fff', textAlign: 'center', fontSize: 15, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}
                      >
                        {Array.from({ length: 99 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                      </select>
                      <button type="button" aria-label={`Increase quantity of ${item.name}`} disabled={item.quantity >= 99} onClick={() => changeCartQuantity(item.indexes, 1)} style={{ width: 30, height: 34, flexShrink: 0, borderRadius: 7, border: '1px solid #008C45', background: '#008C45', color: '#fff', fontSize: 19, fontWeight: 700, opacity: item.quantity >= 99 ? 0.4 : 1 }}>+</button>
                    </div>
                  </div>
                  {item.quantity > 1 && (
                    <div style={{ marginTop: 6, fontSize: 14, fontWeight: 700 }}>
                      Total: ${item.total.toFixed(2)}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: 8, marginTop: 7 }}>
                  <button onClick={() => { setShowCart(false); openCustomization(cart[item.indexes[0]], item.indexes[0]); }} style={{ fontSize: 13, padding: '4px 8px' }}>Edit</button>
                  <button onClick={() => setCart(prev => prev.filter((_, i) => !item.indexes.includes(i)))} style={{ fontSize: 13, padding: '4px 8px', color: '#CD212A' }}>Remove</button>
                  {(item.category?.includes('Hero') && item.category !== 'Party Heroes – Catering') && (
                    <button type="button" aria-label={`Reset price for ${item.name}`} onClick={() => resetCartItemPrice(item.indexes)} disabled={item.manualPrice === undefined} style={{ fontSize: 13, padding: '4px 8px', color: '#008C45', opacity: item.manualPrice === undefined ? 0.5 : 1 }}>Reset</button>
                  )}
                  </div>
                </div>
                <ul>
                  {item.addons && item.addons.map((addon, i) => (
                    <li key={i}>
                      {addon.qty}× {addon.name} (${(addon.price * addon.qty).toFixed(2)})
                      <button onClick={() => removeAddonFromItem(item.indexes, i)} style={{ marginLeft: 6, color: '#CD212A' }}>✕</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{ marginTop: 20, padding: 16, width: '100%', boxSizing: 'border-box', background: '#F4F5F0', fontSize: 14, lineHeight: 1.45, overflowWrap: 'anywhere' }}>
              
              
              
              <label style={{ display: 'block', marginBottom: 8 }}>
                Manual Subtotal: $
                <input
                  type="number"
                  value={manualSubtotal}
                  onChange={(e) => setManualSubtotal(e.target.value)}
                  placeholder={rawSubtotal.toFixed(2)}
                  style={{ marginLeft: 8, width: 100, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: '14px' }}
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



              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'nowrap', marginBottom: 8 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 14 }}>
                  Tip: $
                  <input
                    type="number"
                    value={customTip}
                    onChange={(e) => setCustomTip(e.target.value)}
                    style={{ width: 64, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: '14px', minWidth: 0 }}
                  />
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 14 }}>
                  Delivery Fee: $
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={deliveryFee}
                    onChange={(e) => setDeliveryFee(e.target.value)}
                    style={{ width: 64, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: '14px', minWidth: 0 }}
                  />
                </label>
              </div>
              {urbanAirSubtotal > 0 && <p>Urban Air Discount (10%): −${urbanAirDiscount.toFixed(2)}</p>}
              {urbanAirSubtotal > 0 && <p>Subtotal After Discount: ${subtotalAfterDiscount.toFixed(2)}</p>}
              <p>Subtotal with Tip &amp; Delivery Fee: ${subtotalWithTipAndDelivery.toFixed(2)}</p>
              <p>{exemptOnly ? 'Sales Tax (8.875%): Exempt' : `Sales Tax (${taxExempt ? 'Exempt' : urbanAirSubtotal > 0 || melodySubtotal > 0 ? '8.875% on non-exempt items only' : '8.875%'}): $${tax.toFixed(2)}`}</p>
              {!exemptOnly && <p>Subtotal with Tax: ${subtotalWithTax.toFixed(2)}</p>}
              <p>{exemptOnly ? 'Service Fee (3.95%): N/A' : `Service Fee (${urbanAirSubtotal > 0 || melodySubtotal > 0 ? '3.95% on non-exempt items only' : '3.95%'}): $${serviceFee.toFixed(2)}`}</p>
              <p><strong>Final Total: ${finalTotal.toFixed(2)}</strong></p>
            </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;