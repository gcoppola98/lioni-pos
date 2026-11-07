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
  { id: "K3", name: "Sandwich", price: 5.0, category: "Kid's Menu" },

  { id: 'bread1', name: 'Italian Bread', price: 1.5, category: 'Bread Items' },
  { id: 'bread2', name: 'Hero Bread', price: 1.5, category: 'Bread Items' },
  { id: 'bread3', name: 'Seeded Semolina Bread Loaf', price: 4.0, category: 'Bread Items' },
  { id: 'bread4', name: 'Ciabatta Bread', price: 4.0, category: 'Bread Items' },
  { id: 'bread5', name: 'Seeded Twist', price: 3.0, category: 'Bread Items' },
  { id: 'bread6', name: 'Olive Bread', price: 6.0, category: 'Bread Items' },
  { id: 'bread7', name: 'Prosciutto Bread', price: 10.0, category: 'Bread Items' },
  { id: 'bread8', name: 'Focaccia - Small', price: 3.75, category: 'Bread Items' },
  { id: 'bread9', name: 'Focaccia - Large', price: 5.75, category: 'Bread Items' },

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

  { id: "PH_1", name: "American", pricePerFoot: 30, category: "Party Heroes", description: "Boars Head Ham, Roasted Turkey Breast, Home Cooked Roast Beef, Everroast Chicken Breast, Virginia Ham, American & Swiss Cheese. Topped With Shredded Iceberg Lettuce & Tomato." },
  { id: "PH_2", name: "Italian", pricePerFoot: 30, category: "Party Heroes", description: "Citterio Ham, Citterio Genoa Salami, Cappy Ham, Citterio Pepperoni, Mortadella, Soppressatta, Lioni Fresh Mozzarella, Roasted Peppers & Extra Virgin Olive Oil" },
  { id: "PH_3", name: "Classic", pricePerFoot: 35, category: "Party Heroes", description: "Breaded Chicken Cutlets, Lioni Fresh Mozzarella, Roasted Peppers, Extra Virgin Olive Oil, Salt & Pepper" },
  { id: "PH_4", name: "Basic", pricePerFoot: 25, category: "Party Heroes", description: "Boars Ham, Turkey, Roast Beef, American Cheese, Shredded Iceberg Lettuce & Tomato" },
  { id: "PH_5", name: "Grilled Classic", pricePerFoot: 35, category: "Party Heroes", description: "Grilled Chicken Cutlets, Lioni Fresh Mozzarella, Roasted Peppers, Extra Virgin Olive Oil, Salt & Pepper" },
  { id: "PH_6", name: "Eggplant Classic", pricePerFoot: 30, category: "Party Heroes", description: "Breaded Eggplant, Lioni Fresh Mozzarella, Roasted Peppers & Extra Virgin Olive Oil" },
  { id: "PH_7", name: "Grilled Veggie Deluxe", pricePerFoot: 30, category: "Party Heroes", description: "Grilled Marinated Vegetables (Yellow Squash, Green Squash, Carrots, Red Onions, Green Pepper, Mushrooms) w/ Lioni Fresh Mozzarella & Balsamic Vinegar" },
  { id: "PH_8", name: "Charlie Tuna", pricePerFoot: 30, category: "Party Heroes", description: "Tuna Salad, Shredded Iceberg Lettuce, Tomato, Sliced Onion, Salt & Pepper" },
  { id: "PH_9", name: "15th Ave Special", pricePerFoot: 50, category: "Party Heroes", description: "Prosciutto Di Parma, Capicola, Genoa Salami, Pepper Ham, Lioni Fresh Mozzarella, Roasted Peppers & Extra Virgin Olive Oil" },
  { id: "PH_10", name: "Extravaganza", pricePerFoot: 75, category: "Party Heroes", description: "Veal Cutlets, Prosciutto Di Parma, Provolone, Sliced Banana Peppers, Shaved Reggiano, Lioni Fresh Mozzarella, Basil Mix, Sun-Dried Tomatoes, Olive Oil, Oregano, Salt & Pepper" },
  { id: "PH_11", name: "#1", pricePerFoot: 29, category: "Party Heroes", description: "Salami, Fresh Mozzarella, Olive Oil, Salt, Black Pepper And Oregano" },
  { id: "PH_12", name: "#2", pricePerFoot: 39, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Olive Oil And Black Pepper" },
  { id: "PH_13", name: "#3", pricePerFoot: 30, category: "Party Heroes", description: "Ham, Lioni Fresh Mozzarella, Basil, Sun-Dried Tomatoes, Olive Oil, Salt And Black Pepper" },
  { id: "PH_14", name: "#4", pricePerFoot: 25, category: "Party Heroes", description: "Lioni Fresh Mozzarella, Tomato, Basil, Olive Oil, Salt And Pepper" },
  { id: "PH_15", name: "#5", pricePerFoot: 28, category: "Party Heroes", description: "Ham, Salami, Swiss Cheese, Olive Oil, And Basil Mix" },
  { id: "PH_16", name: "#6", pricePerFoot: 29, category: "Party Heroes", description: "Turkey, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil, Oregano, Black Pepper" },
  { id: "PH_17", name: "#7", pricePerFoot: 30, category: "Party Heroes", description: "Sweet Capicola, Ham, Lioni Fresh Mozzarella, Sun-Dried Tomatoes, Vinegar, Olive Oil, Oregano, Salt And Black Pepper" },
  { id: "PH_18", name: "#8", pricePerFoot: 28, category: "Party Heroes", description: "Hot Capicola, Yellow American Cheese Or Jalapeño Cheese And A Hot Stuffed Pepper" },
  { id: "PH_19", name: "#9", pricePerFoot: 30, category: "Party Heroes", description: "Salami, Lioni Fresh Mozzarella , Roasted Peppers, Olive Oil, Salt And Black Pepper" },
  { id: "PH_20", name: "#10", pricePerFoot: 29, category: "Party Heroes", description: "Mortadella, Lioni Fresh Mozzarella, Lettuce And Black Pepper" },
  { id: "PH_21", name: "#11", pricePerFoot: 25, category: "Party Heroes", description: "Roasted Peppers, Lioni Fresh Mozzarella, Green Pesto Sauce, A Drizzle Of Olive Oil And Black Pepper" },
  { id: "PH_22", name: "#12", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Sweet Stuffed Peppers, Lettuce, Olive Oil, Salt And Black Pepper" },
  { id: "PH_23", name: "#13", pricePerFoot: 25, category: "Party Heroes", description: "Ham, Bologna, White American Cheese, Lettuce, Mayo and Tomatoes" },
  { id: "PH_24", name: "#14", pricePerFoot: 30, category: "Party Heroes", description: "Hot Or Sweet Capicola, Lioni Fresh Mozzarella, Tomatoes, Fresh Basil, Oregano, Olive Oil, Salt And Black Pepper" },
  { id: "PH_25", name: "#15", pricePerFoot: 29, category: "Party Heroes", description: "Honey Roasted Turkey, Lioni Fresh Mozzarella, Lettuce, Tomato, Vinegar, Olive Oil, Salt and Black Pepper" },
  { id: "PH_26", name: "#16", pricePerFoot: 29, category: "Party Heroes", description: "Roast Beef, Lioni Fresh Mozzarella, Lettuce, Mayo, Salt and Black Pepper" },
  { id: "PH_27", name: "#17", pricePerFoot: 30, category: "Party Heroes", description: "Olive Loaf, Sopressata, White American, Lettuce And Mayo" },
  { id: "PH_28", name: "#18", pricePerFoot: 25, category: "Party Heroes", description: "Grilled Italian Sausage, Olive Oil, Vinegar, Lettuce, Salt, Black Pepper, And A Pinch Of Oregano" },
  { id: "PH_29", name: "#19", pricePerFoot: 29, category: "Party Heroes", description: "Roast Pork, Lioni Smoked Mozzarella, Olive Oil And Black Pepper" },
  { id: "PH_30", name: "#20", pricePerFoot: 25, category: "Party Heroes", description: "Pepper Ham, Swiss Cheese, Tomato And Mayo" },
  { id: "PH_31", name: "#21", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Pesto Sauce, Olive Oil, And Black Pepper" },
  { id: "PH_32", name: "#23", pricePerFoot: 29, category: "Party Heroes", description: "Pepperoni, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil And Lettuce" },
  { id: "PH_33", name: "#24", pricePerFoot: 25, category: "Party Heroes", description: "Bologna, White American Cheese, Ham And Mustard" },
  { id: "PH_34", name: "#25", pricePerFoot: 30, category: "Party Heroes", description: "Hot Capicola, Salami, Pepperoni, Swiss, Provolone, Stuffed Peppers And Deli Mustard" },
  { id: "PH_35", name: "#26", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Arugula And Balsamic Vinegar" },
  { id: "PH_36", name: "#27", pricePerFoot: 25, category: "Party Heroes", description: "Lioni Fresh Mozzarella, Tomatoes, Arugula, Basil, Olive Oil, Oregano, Salt and Pepper" },
  { id: "PH_37", name: "#28", pricePerFoot: 30, category: "Party Heroes", description: "Salami, Provolone, Arugula, Sun-Dried Tomatoes, Olive Oil, Oregano, And Pepper" },
  { id: "PH_38", name: "#29 (Pan)", pricePerFoot: 30, category: "Party Heroes", description: "Meatball Parm" },
  { id: "PH_39", name: "#30", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Tomatoes, Olive Oil, Oregano, Salt And Fresh Basil" },
  { id: "PH_40", name: "#31", pricePerFoot: 29, category: "Party Heroes", description: "Sweet Capicola, Provolone, Lettuce, Tomatoes, Mustard And Mayo" },
  { id: "PH_41", name: "#32", pricePerFoot: 35, category: "Party Heroes", description: "Grilled Chicken, Lioni Fresh Mozzarella, Roasted Peppers, Olive Oil, Vinegar, Salt And Pepper" },
  { id: "PH_42", name: "#33", pricePerFoot: 25, category: "Party Heroes", description: "Sweet Or Hot Grilled Italian Sausage, And Bruschetta" },
  { id: "PH_43", name: "#34", pricePerFoot: 28, category: "Party Heroes", description: "Hot Italian Sausage, Bruschetta, And Lioni Fresh Mozzarella" },
  { id: "PH_44", name: "#35 (Pan)", pricePerFoot: 35, category: "Party Heroes", description: "Chicken Parm" },
  { id: "PH_45", name: "#37", pricePerFoot: 25, category: "Party Heroes", description: "Turkey, American Cheese, Tomatoes And Mustard" },
  { id: "PH_46", name: "#38", pricePerFoot: 25, category: "Party Heroes", description: "Bologna, Lioni Fresh Mozzarella, Lettuce, Mayo, Salt And Pepper" },
  { id: "PH_47", name: "#39", pricePerFoot: 30, category: "Party Heroes", description: "Tuna Fish, Lioni Fresh Mozzarella, Lettuce And Tomato" },
  { id: "PH_48", name: "#40", pricePerFoot: 30, category: "Party Heroes", description: "Italian Tuna Fish, Lettuce , Tomato, and Onions" },
  { id: "PH_49", name: "#41 (Pan)", pricePerFoot: 50, category: "Party Heroes", description: "Veal Parm" },
  { id: "PH_50", name: "#42", pricePerFoot: 29, category: "Party Heroes", description: "Hot Sopressata, Bruschetta And Lioni Fresh Mozzarella" },
  { id: "PH_51", name: "#43", pricePerFoot: 29, category: "Party Heroes", description: "Sopressata, Lioni Fresh Mozzarella And Red Pesto" },
  { id: "PH_52", name: "#44", pricePerFoot: 30, category: "Party Heroes", description: "Broccoli Rabe And Italian Sausage" },
  { id: "PH_53", name: "#45", pricePerFoot: 25, category: "Party Heroes", description: "Sicilian Salami, Swiss Cheese And Deli Mustard" },
  { id: "PH_54", name: "#46", pricePerFoot: 30, category: "Party Heroes", description: "Sopressata (Hot Or Sweet) Ham, Provolone, Lettuce, Tomatoes, Oil And Vinegar" },
  { id: "PH_55", name: "#47", pricePerFoot: 40, category: "Party Heroes", description: "Bresaola, Arugula, Olive Oil, Shaved Reggiano, Pepper And Oregano" },
  { id: "PH_56", name: "#48", pricePerFoot: 29, category: "Party Heroes", description: "Sicilian Salami, Genoa Salami, And Lioni Fresh Mozzarella" },
  { id: "PH_57", name: "#49 (Pan)", pricePerFoot: 30, category: "Party Heroes", description: "Sausage & Peppers" },
  { id: "PH_58", name: "#50 (Pan)", pricePerFoot: 30, category: "Party Heroes", description: "Hot Turkey, Lioni Fresh Mozzarella, And Gravy" },
  { id: "PH_59", name: "#51", pricePerFoot: 25, category: "Party Heroes", description: "Lioni Fresh Mozzarella, Arugula, And Roasted Peppers" },
  { id: "PH_60", name: "#52 (Pan)", pricePerFoot: 30, category: "Party Heroes", description: "Roast Beef, Lioni Fresh Mozzarella, and Brown Gravy" },
  { id: "PH_61", name: "#53 (Pan)", pricePerFoot: 30, category: "Party Heroes", description: "Eggplant Parm" },
  { id: "PH_62", name: "#54 (Maestro)", pricePerFoot: 40, category: "Party Heroes", description: "Breaded Chicken Cutlets, Melted Lioni Fresh Mozzarella, Bacon & Our Secret BBQ Sauce" },
  { id: "PH_63", name: "#55", pricePerFoot: 30, category: "Party Heroes", description: "Ham, Salami, Provolone, Shaved reggiano, Olive Oil, Salt & Pepper" },
  { id: "PH_64", name: "#56", pricePerFoot: 29, category: "Party Heroes", description: "Salami, Provolone, Olive Oil, Lettuce & Tomato" },
  { id: "PH_65", name: "#57", pricePerFoot: 30, category: "Party Heroes", description: "Honey Turkey, Ham Cappy, Lioni Fresh Mozzarella, Tomato, Olive Oil, Salt, Pepper & Oregano" },
  { id: "PH_66", name: "#58", pricePerFoot: 29, category: "Party Heroes", description: "Mortadella With Pistachio, Fresh Ricotta, Salt & Pepper" },
  { id: "PH_67", name: "#59", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Mortadella, Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, Olive Oil, Salt, Pepper, Oregano" },
  { id: "PH_68", name: "#60", pricePerFoot: 30, category: "Party Heroes", description: "Fried Eggplant, Lioni Fresh Mozzarella, & Mushroom Stuffing" },
  { id: "PH_69", name: "#61", pricePerFoot: 30, category: "Party Heroes", description: "Sicilian Salami, Ham Cappy, Lioni Fresh Mozzarella, Olive Oil, Salt, Pepper, & Oregano" },
  { id: "PH_70", name: "#62", pricePerFoot: 45, category: "Party Heroes", description: "1/2 and 1/2 is $40 Per Foot Chicken Cutlet, Prosciutto Di Parma, Lioni Fresh Mozzarella, and Basil Mix" },
  { id: "PH_71", name: "#63", pricePerFoot: 30, category: "Party Heroes", description: "Ham, Sopressata ,White American, Honey Mustard, Lettuce, Tomato, Gardenia Salad" },
  { id: "PH_72", name: "#64", pricePerFoot: 30, category: "Party Heroes", description: "Sopressata, Roast Beef, White American & Balsamic Vinegar" },
  { id: "PH_73", name: "#65", pricePerFoot: 45, category: "Party Heroes", description: "Grilled Chicken, Broccoli Rabe, Lioni Fresh Mozzarella, Olive Oil, Salt & Pepper" },
  { id: "PH_74", name: "#66", pricePerFoot: 45, category: "Party Heroes", description: "Chicken Cutlet, Broccoli Rabe, Lioni Fresh Mozzarella, Olive Oil, Salt & Pepper" },
  { id: "PH_75", name: "#67", pricePerFoot: 25, category: "Party Heroes", description: "Roast Beef, White American Cheese, Lettuce, Tomato & Mayo" },
  { id: "PH_76", name: "#68", pricePerFoot: 25, category: "Party Heroes", description: "Turkey, Roast Beef, Jalapeño Cheese And Hot Sauce" },
  { id: "PH_77", name: "#69", pricePerFoot: 30, category: "Party Heroes", description: "Roast Beef, Sopressata, Lioni Fresh Mozzarella, Italian Sausage, & Stuffed Mushroom" },
  { id: "PH_78", name: "#70", pricePerFoot: 35, category: "Party Heroes", description: "Chicken Cutlet, Provolone, Balsamic Vinegar, Roasted Peppers, Salt & Pepper" },
  { id: "PH_79", name: "#71", pricePerFoot: 35, category: "Party Heroes", description: "Chicken Cutlet, Lioni Fresh Mozzarella, Roasted Peppers, Balsamic Vinegar" },
  { id: "PH_80", name: "#72", pricePerFoot: 29, category: "Party Heroes", description: "Ham Cappy, Lioni Fresh Mozzarella, Lettuce , Tomato, Olive Oil, Salt & Pepper" },
  { id: "PH_81", name: "#73", pricePerFoot: 29, category: "Party Heroes", description: "Hot Sopressata, Jalapeno Cheese, Hot Stuffed Pepper, And A Dash Of Hot Sauce" },
  { id: "PH_82", name: "#74", pricePerFoot: 25, category: "Party Heroes", description: "Italian Sausage- Sweet Or Hot And Melted White American Cheese" },
  { id: "PH_83", name: "#75", pricePerFoot: 28, category: "Party Heroes", description: "Oven Gold Turkey, Fried Eggplant And Yellow American Cheese" },
  { id: "PH_84", name: "#76", pricePerFoot: 30, category: "Party Heroes", description: "Roast Beef, Sopressata, White American Cheese And Gardenia Salad" },
  { id: "PH_85", name: "#77", pricePerFoot: 25, category: "Party Heroes", description: "Honey Turkey, Munster Cheese And Bbq Sauce" },
  { id: "PH_86", name: "#78", pricePerFoot: 38, category: "Party Heroes", description: "Grilled Chicken, Lioni Fresh Mozzarella, Fried Eggplant & Honey Mustard" },
  { id: "PH_87", name: "#79", pricePerFoot: 30, category: "Party Heroes", description: "Fried Meat Balls, Lettuce, Vinegar, Salt & Pepper" },
  { id: "PH_88", name: "#80 (Pan)", pricePerFoot: 50, category: "Party Heroes", description: "Steak, Lioni Fresh Mozzarella, Peppers & Onions" },
  { id: "PH_89", name: "#81", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Pepper Ham, Salami, Swiss Cheese, Olive Oil & Oregano" },
  { id: "PH_90", name: "#82", pricePerFoot: 30, category: "Party Heroes", description: "Pepperoni, Provolone Cheese, Mustard And Hot Or Sweet Stuffed Peppers" },
  { id: "PH_91", name: "#83", pricePerFoot: 25, category: "Party Heroes", description: "Turkey, Shredded Lettuce, Tomato, Red Onion, Olive Oil, Vinegar, Salt & Pepper" },
  { id: "PH_92", name: "#84", pricePerFoot: 25, category: "Party Heroes", description: "Roastpork, Muenster Cheese, Lettuce, Tomato, Salt & Pepper" },
  { id: "PH_93", name: "#85", pricePerFoot: 32, category: "Party Heroes", description: "Meatballs, Fresh Ricotta, Grated Cheese, & Basil Mix" },
  { id: "PH_94", name: "#86", pricePerFoot: 29, category: "Party Heroes", description: "Mortadella, Provolone, Lettuce, Tomato, Olive Oil, Vinegar, Salt & Pepper" },
  { id: "PH_95", name: "#87 (Pan)", pricePerFoot: 50, category: "Party Heroes", description: "Shrimp Parm" },
  { id: "PH_96", name: "#88", pricePerFoot: 30, category: "Party Heroes", description: "Fried Eggplant, Fresh Ricotta, Salt, Pepper, Basil & Sun-Dried Tomatoes" },
  { id: "PH_97", name: "#89", pricePerFoot: 29, category: "Party Heroes", description: "Salami, Provolone, And Roasted Peppers" },
  { id: "PH_98", name: "#90 (Pan)", pricePerFoot: 30, category: "Party Heroes", description: "Roast Beef, Stuffed Mushrooms, Lioni Fresh Mozzarella, Gravy, Salt & Pepper" },
  { id: "PH_99", name: "#91", pricePerFoot: 28, category: "Party Heroes", description: "Sweet Italian Sausage, Fresh Ricotta, Tomato Sauce & Romano Cheese" },
  { id: "PH_100", name: "#92", pricePerFoot: 29, category: "Party Heroes", description: "Sopressata, White American Cheese And Mushroom Stuffing" },
  { id: "PH_101", name: "#93", pricePerFoot: 25, category: "Party Heroes", description: "Bologna, Pepperoni, Yellow American Cheese & Mustard" },
  { id: "PH_102", name: "#94", pricePerFoot: 30, category: "Party Heroes", description: "Ham, Eggplant, Sopressata, White American, Lioni Fresh Mozzarella" },
  { id: "PH_103", name: "#95", pricePerFoot: 39, category: "Party Heroes", description: "Chicken Cutlet, Hot Sopressata, Provolone, Hot Stuffed Peppers" },
  { id: "PH_104", name: "#96", pricePerFoot: 39, category: "Party Heroes", description: "Chicken Cutlet, Sausage, Melted White American, With Brown Gravy" },
  { id: "PH_105", name: "#97", pricePerFoot: 25, category: "Party Heroes", description: "Roast Beef, Ham, White American, Deli Mustard, And Honey Mustard" },
  { id: "PH_106", name: "#98", pricePerFoot: 30, category: "Party Heroes", description: "Ham, Mortadella, Bologna, Lioni Fresh Mozzarella And Lioni’S Basil Mix" },
  { id: "PH_107", name: "#99", pricePerFoot: 50, category: "Party Heroes", description: "Milk Fed Veal Cutlet, Lioni Fresh Mozzarella, Topped With Bruschetta" },
  { id: "PH_108", name: "#100", pricePerFoot: 35, category: "Party Heroes", description: "Grilled Chicken, Melted White American, Topped With Mushroom Mix" },
  { id: "PH_109", name: "#101", pricePerFoot: 30, category: "Party Heroes", description: "Sausage, Roast Pork, Lioni Fresh Mozzarella, And Basil Mix" },
  { id: "PH_110", name: "#102", pricePerFoot: 33, category: "Party Heroes", description: "Sicilian Salami, Genoa Salami, Ham, Lioni Fresh Mozzarella, & Hot Or Sweet Stuffed Peppers" },
  { id: "PH_111", name: "#103", pricePerFoot: 30, category: "Party Heroes", description: "Sicilian Salami, Genoa Salami, Ham, Lioni Fresh Mozzarella, & Hot Or Sweet Stuffed Peppers" },
  { id: "PH_112", name: "#104 (375)", pricePerFoot: 38, category: "Party Heroes", description: "Chicken Cutlet, Roast Beef, White American, Honey Mustard" },
  { id: "PH_113", name: "#105", pricePerFoot: 30, category: "Party Heroes", description: "Sopressata, Provolone, Balsamic Vinegar & Basil Mix" },
  { id: "PH_114", name: "#106", pricePerFoot: 45, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Stuffed Peppers And Reggiano Cheese" },
  { id: "PH_115", name: "#107", pricePerFoot: 30, category: "Party Heroes", description: "Roast Beef, Sopressata, Lioni Fresh Mozzarella, Muenster Cheese, And Bruschetta" },
  { id: "PH_116", name: "#108", pricePerFoot: 45, category: "Party Heroes", description: "Chicken Cutlet, Ham, Balsamic Vinegar, Stuffed Peppers, Basil Mix, Lioni Fresh Mozzarella And White American" },
  { id: "PH_117", name: "#109", pricePerFoot: 30, category: "Party Heroes", description: "Mortadella, Chicken Cutlet, Ham, Horseradish And Mayo" },
  { id: "PH_118", name: "#110", pricePerFoot: 40, category: "Party Heroes", description: "Capicola, Prosciutto Di Parma, Olive Loaf, Lioni Fresh Mozzarella, Bruschetta, And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_119", name: "#111", pricePerFoot: 35, category: "Party Heroes", description: "Fried Eggplant, Roast Beef, Lioni Fresh Mozzarella, White American, Bruschetta, Sun-Dried Tomato, Stuffed Peppers And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_120", name: "#112", pricePerFoot: 30, category: "Party Heroes", description: "Ham, Roast Beef, Lioni Fresh Mozzarella And Honey Mustard" },
  { id: "PH_121", name: "#113", pricePerFoot: 30, category: "Party Heroes", description: "Ham, Roast Beef, White American Lioni Fresh Mozzarella, Pickles, Mayo And Horseradish Mix" },
  { id: "PH_122", name: "#114", pricePerFoot: 35, category: "Party Heroes", description: "Chicken Cutlet, Fried Peppers, Stuffed Peppers, Basil Mix And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_123", name: "#115", pricePerFoot: 45, category: "Party Heroes", description: "Prosciutto Di Parma, Sweet Capicola, Ceasar Dressing, Stuffed Peppers, Marinated Sun-Dried Tomatoes, Romano Cheese And Lioni Fresh Mozzarella" },
  { id: "PH_124", name: "#116", pricePerFoot: 45, category: "Party Heroes", description: "Grilled Chicken, Prosciutto Di Parma, Sun-Dried Tomatoes, Lioni Fresh Mozzarella And Bruschetta" },
  { id: "PH_125", name: "#117", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, And Lioni’S Basil Mix" },
  { id: "PH_126", name: "#118", pricePerFoot: 40, category: "Party Heroes", description: "Chicken Cutlet, Roast Beef, Mortadella, Lioni Fresh Mozzarella And Basil Mix" },
  { id: "PH_127", name: "#119", pricePerFoot: 45, category: "Party Heroes", description: "Chicken Cutlet, Salami, Ham, Olive Oil, Basil Mix, Lioni Fresh Mozzarella, Sun-Dried Tomatoes, And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_128", name: "#120", pricePerFoot: 33, category: "Party Heroes", description: "Fried Eggplant, Ham Capicola, Basil Mix, And Melted White American" },
  { id: "PH_129", name: "#121", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella And Bruschetta" },
  { id: "PH_130", name: "#122", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Fresh Ricotta, Lioni Fresh Mozzarella, And Sautéed Peppers" },
  { id: "PH_131", name: "#123", pricePerFoot: 40, category: "Party Heroes", description: "Chicken Cutlet, White American, Muffaletta And Sweet Stuffed Peppers" },
  { id: "PH_132", name: "#124", pricePerFoot: 40, category: "Party Heroes", description: "Fried Eggplant, Prosciutto Di Parma, Basil Mix, Lioni Fresh Mozzarella, Romano And A Drizzle Of Balsamic Vinegar" },
  { id: "PH_133", name: "#125", pricePerFoot: 45, category: "Party Heroes", description: "Prosciutto Di Parma, Cappicola, Lioni Fresh Mozzarella, Basil Mix, Balsamic Vinegar" },
  { id: "PH_134", name: "#126", pricePerFoot: 35, category: "Party Heroes", description: "Fried Eggplant, Salami, Olive Oil And Lioni Fresh Mozzarella" },
  { id: "PH_135", name: "#127", pricePerFoot: 35, category: "Party Heroes", description: "Fried Eggplant, Mortadella, Lioni Smoked Mozzarella, American White, Olive Oil, Salt, Pepper, And Oregano" },
  { id: "PH_136", name: "#128", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Balsamic Vinegar And Extra Virgin Olive Oil And Roasted Peppers" },
  { id: "PH_137", name: "#129 (Pan)", pricePerFoot: 60, category: "Party Heroes", description: "Veal, Meatball, And Eggplant Parmesan Hero (All Three) (Melted Mozzarella With Sauce)" },
  { id: "PH_138", name: "#130", pricePerFoot: 40, category: "Party Heroes", description: "Home Made Roastbeef, Onions, Prosciutto Di Parma, And White American Cheese Melted To Perfection" },
  { id: "PH_139", name: "#131", pricePerFoot: 40, category: "Party Heroes", description: "Chicken Cutlet, Fried Eggplant, 10 Cheese Garlic Mix, And Basil Mix" },
  { id: "PH_140", name: "#132", pricePerFoot: 45, category: "Party Heroes", description: "Prosciutto Di Parma, Sopressata, Banana Peppers, Drizzle Of Balsamic Vinegar, Lioni Fresh Mozzarella And Basil Mix" },
  { id: "PH_141", name: "#133", pricePerFoot: 35, category: "Party Heroes", description: "Cappy Ham, Capicola, Salami, Lioni Fresh Mozzarella, Lettuce, Tomato, Mayo, Olive Oil, Salt, Pepper & Onion And Stuffed Peppers" },
  { id: "PH_142", name: "#134", pricePerFoot: 35, category: "Party Heroes", description: "Chicken Cutlet, Lioni Fresh Mozzarella, Tomatoes, Red Onions, Garlic, Oregano, Salt & Pepper" },
  { id: "PH_143", name: "#135", pricePerFoot: 50, category: "Party Heroes", description: "Veal Cutlet, Hot Or Sweet Stuffed Peppers, Lioni Fresh Mozzarella" },
  { id: "PH_144", name: "#136", pricePerFoot: 40, category: "Party Heroes", description: "Ham, Grilled Chicken, Ceasar Dressing, Lioni Fresh Mozzarella, Melted American Cheese" },
  { id: "PH_145", name: "#137", pricePerFoot: 45, category: "Party Heroes", description: "Prosciutto Di Parma, Roast Beef, Lioni Fresh Mozzarella, Sun-Dried Tomatoes And Balsamic Vinegar" },
  { id: "PH_146", name: "#138", pricePerFoot: 50, category: "Party Heroes", description: "Veal Cutlet, Prosciutto Di Parma, Lioni Fresh Mozzarella, Basil Mix, Sweet Or Hot Peppers, Oil" },
  { id: "PH_147", name: "#139", pricePerFoot: 45, category: "Party Heroes", description: "Prosciutto Di Parma, Capicola, Sopressata, Lioni Fresh Mozzarella, Provlone, Brushcetta, And Balsamic Vinegar" },
  { id: "PH_148", name: "#1A", pricePerFoot: 30, category: "Party Heroes", description: "Mortadella, Lioni Smoked Mozzarella And Basil Mix" },
  { id: "PH_149", name: "#2A", pricePerFoot: 30, category: "Party Heroes", description: "Hot Capitol, Lioni Smoked Mozzarella, Basil Mix, And Olive Oil" },
  { id: "PH_150", name: "#3A", pricePerFoot: 40, category: "Party Heroes", description: "Prosciutto Di Parma, Lioni Smoked Mozzarella, Roasted Pepper And Oregano" },
  { id: "PH_151", name: "#4A", pricePerFoot: 29, category: "Party Heroes", description: "Roasted Turkey, Lioni Smoked Mozzarella, Olive Oil, Salt, Pepper And Oregano" },
  { id: "PH_152", name: "#5A", pricePerFoot: 30, category: "Party Heroes", description: "Ham, Salami, Lioni Smoked Mozzarella, Olive Oil, Oregano, And Pepper" },
  { id: "PH_153", name: "#6A", pricePerFoot: 29, category: "Party Heroes", description: "Pepper Turkey, Lioni Smoked Mozzarella, Bruschetta, And Olive Oil" },
  { id: "PH_154", name: "#7A", pricePerFoot: 35, category: "Party Heroes", description: "Chicken Cutlet, Lioni Smoked Mozzarella, Pesto Sauce, Oregano, Salt And Pepper" },
  { id: "PH_155", name: "#8A", pricePerFoot: 35, category: "Party Heroes", description: "Grilled Chicken, Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, With American Cheese" },
  { id: "PH_156", name: "#9A", pricePerFoot: 30, category: "Party Heroes", description: "Cappy Ham, Sweet Sopressata, Lioni Smoked Mozzarella, Lettuce, Tomato, Olive Oil, Salt, Pepper And Oregano" },
  { id: "PH_157", name: "#10A", pricePerFoot: 26, category: "Party Heroes", description: "Lioni Smoked Mozzarella, Lioni Fresh Mozzarella, Arugula, Olive Oil, Lettuce, Salt Pepper And Oregano" },
  { id: "PH_158", name: "#11A", pricePerFoot: 30, category: "Party Heroes", description: "Lioni Smoked Mozaarella, Fried Eggplant, Roasted Peppers, Olive Oil, Balsamic Vinegar, Oregano, Salt And Pepper" },
  
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

const categories = ['All', 'Regular Heroes', 'Smoked Mozzarella Heroes', '"P" Heroes', 'Chips', 'Bread Items', 'Appetizers', "Kid's Menu", 'Beverages', 'Desserts', 'Grocery Items', 'Milk', 'Party Heroes'];

function App() {
  const [cart, setCart] = useState([]);
  const [partyHeroFeet, setPartyHeroFeet] = useState(2);
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
    if (item.category === "Party Heroes") {
      setSelectedItem(item);
      setEditIndex(index);
      setPartyHeroFeet(item.feet || 2);
      return;
    }
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
    if (selectedItem.category === "Party Heroes") {
      const feet = partyHeroFeet;
      const price = selectedItem.pricePerFoot * feet + 3;
      const partyItem = { ...selectedItem, feet, price, total: price, addons: [], name: `${selectedItem.name} (${feet} ft)` };
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
      addons,
      total: selectedItem.price + addons.reduce((sum, a) => sum + a.price * a.qty, 0),
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
  const subtotalWithTipAndDelivery = subtotal + tip + delivery;
  const tax = taxExempt ? 0 : subtotalWithTipAndDelivery * 0.08875;
  const subtotalWithTax = subtotalWithTipAndDelivery + tax;
  const serviceFee = subtotalWithTax * 0.0395;
  
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
          <img src={`${process.env.PUBLIC_URL}/lioni-logo.png`} alt="Lioni POS — Home" style={{ display: 'block', width: 'clamp(135px, 38vw, 205px)', height: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 100px), 1fr))', gap: 12 }}>
        {filteredItems.map(item => (
          <div
            key={item.id}
            style={{ padding: 10, borderRadius: 8, background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer' }}
            onClick={() => openCustomization(item)}
          >
            <strong>{item.name}</strong>
            <div>{item.category === "Party Heroes" ? `$${item.pricePerFoot.toFixed(2)}/ft` : `$${item.price.toFixed(2)}`}</div>
          </div>
        ))}
      </div>

      {selectedItem?.category === 'Party Heroes' && (
        <div className="lioni-overlay" onClick={(e) => { if (e.target === e.currentTarget) setSelectedItem(null); }} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div className="lioni-dialog" style={{ background: '#ffffff', borderRadius: 16, padding: 20, width: '90%', maxWidth: 390, boxShadow: '0 4px 16px rgba(0,0,0,.2)' }}>
            <h2 style={{ marginTop: 0 }}>Customize {selectedItem.name}</h2>
            {selectedItem.description && (
              <p style={{ fontSize: 12, color: '#666', lineHeight: 1.5, margin: '4px 0 16px' }}>{selectedItem.description}</p>
            )}
            <div role="radiogroup" aria-label="Select hero size" style={{ marginTop: 14 }}>
              <strong style={{ display: 'block', marginBottom: 8 }}>Select Hero Size</strong>
              {[2, 3].map(feet => (
                <label key={feet} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px', marginBottom: 8, border: `2px solid ${partyHeroFeet === feet ? '#008C45' : '#ddd'}`, borderRadius: 10, cursor: 'pointer', background: partyHeroFeet === feet ? '#f0faf4' : '#fff' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <input type="radio" name="partyHeroFeet" value={feet} checked={partyHeroFeet === feet} onChange={() => setPartyHeroFeet(feet)} style={{ accentColor: '#008C45', width: 18, height: 18 }} />
                    <strong>{feet} Foot Hero</strong>
                  </span>
                  <strong>${(selectedItem.pricePerFoot * feet + 3).toFixed(2)}</strong>
                </label>
              ))}
            </div>
            <p style={{ fontSize: 13, color: '#555' }}>Includes $3 cutting board charge per hero.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '16px 0', flexWrap: 'wrap' }}>
              <strong>Quantity</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong style={{ minWidth: 24, textAlign: 'center' }}>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
              </div>
            </div>
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
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
            </div>


            <input
              type="text"
              value={addonSearch}
              onChange={(e) => setAddonSearch(e.target.value)}
              placeholder="Search addons..." style={{ width: '96%', padding: 6, fontSize: '16px', marginBottom: 10, borderRadius: 6, border: '1px solid #ccc' }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, margin: '16px 0', flexWrap: 'wrap' }}>
              <strong>Quantity</strong>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button type="button" onClick={() => setHeroQuantity(q => Math.max(1, q - 1))} disabled={heroQuantity === 1} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>−</button>
                <strong style={{ minWidth: 24, textAlign: 'center' }}>{heroQuantity}</strong>
                <button type="button" onClick={() => setHeroQuantity(q => Math.min(99, q + 1))} style={{ minWidth: 42, minHeight: 42, borderRadius: 8, fontSize: 20 }}>+</button>
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
            <div style={{ padding: 20, overflowY: 'auto', minHeight: 0, flex: 1, overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
            {groupedCart.map((item, idx) => (
              <div key={idx} style={{ background: '#F4F5F0', padding: 12, borderRadius: 10, marginBottom: 10 }}>
                <div>
                  <strong>{item.name}</strong>{item.quantity > 1 ? ` × ${item.quantity}` : ''} - ${(item.price * item.quantity).toFixed(2)}

                {(item.category?.includes('Hero') && item.category !== 'Party Heroes') && (
                  <div style={{ marginTop: 8 }}>
                    <label style={{ fontSize: 14 }}>
                      Manual Price: $
                      <input
                        type="number"
                        value={item.manualPrice ?? ''}
                        min="0"
                        step="0.01"
                        onChange={(e) => {
                          const value = e.target.value;
                          const override = value === '' ? null : Number(value);
                          if (override !== null && (!Number.isFinite(override) || override < 0)) return;
                          setCart(prev => prev.map((entry, entryIndex) => {
                            if (!item.indexes.includes(entryIndex)) return entry;
                            const addonsTotal = (entry.addons || []).reduce(
                              (sum, addon) => sum + addon.price * addon.qty, 0
                            );
                            const { manualPrice: _oldManualPrice, ...rest } = entry;
                            return {
                              ...rest,
                              ...(override === null ? {} : { manualPrice: override }),
                              total: (override === null ? entry.price : override) + addonsTotal,
                            };
                          }));
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

                  <button onClick={() => { setShowCart(false); openCustomization(cart[item.indexes[0]], item.indexes[0]); }} style={{ marginLeft: 10 }}>Edit</button>
                  <button onClick={() => setCart(prev => prev.filter((_, i) => !item.indexes.includes(i)))} style={{ marginLeft: 10, color: '#CD212A' }}>Remove</button>
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
              <label style={{ display: 'block', marginBottom: 8 }}>
                Delivery Fee: $
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={deliveryFee}
                  onChange={(e) => setDeliveryFee(e.target.value)}
                  style={{ marginLeft: 8, width: 80, padding: 6, borderRadius: 6, border: '1px solid #ccc', fontSize: '16px' }}
                />
              </label>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tip: ${tip.toFixed(2)}</p>
              <p>Delivery Fee: ${delivery.toFixed(2)}</p>
              <p>Subtotal with Tip &amp; Delivery Fee: ${subtotalWithTipAndDelivery.toFixed(2)}</p>
              <p>Sales Tax ({taxExempt ? 'Exempt' : '8.875%'}): ${tax.toFixed(2)}</p>
              <p>Subtotal with Tax: ${subtotalWithTax.toFixed(2)}</p>
              <p>Service Fee (3.95%): ${serviceFee.toFixed(2)}</p>
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