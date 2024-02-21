const flavors = [
  {
    name: "Classic Flavors",
    id: "classic-flavors",
    sessions: [
      {
        name: "Vanilla Bliss",
        id: "vanilla-bliss",
        desc: "Experience the pure, smooth, and creamy taste of Vanilla Bliss, sweetened with natural ingredients for a guilt-free indulgence.",
        speaker: {
          name: "Chef Marco Bianchi",
          title: "Culinary Expert",
          org: "PureJoyIceCream",
          bio: "Chef Marco Bianchi brings a touch of gourmet to sugar-free desserts, focusing on natural ingredients to create unforgettable flavors.",
        },
      },
      {
        name: "Rich Chocolate",
        id: "rich-chocolate",
        desc: "Dive into the deep, luxurious layers of Rich Chocolate, made from the finest cocoa and natural sweeteners. A true chocolate lover's dream without the sugar rush.",
        speaker: {
          name: "Julia Fernández",
          title: "Chocolatier",
          org: "PureJoyIceCream",
          bio: "With a passion for chocolate and health, Julia Fernández crafts sugar-free chocolate ice cream that satisfies the sweet tooth and the soul.",
        },
      },
    ],
  },
  {
    name: "Fruit Fantasies",
    id: "fruit-fantasies",
    sessions: [
      {
        name: "Strawberry Fields",
        id: "strawberry-fields",
        desc: "Enjoy the fresh, tangy sweetness of Strawberry Fields, bursting with real strawberries and a hint of natural sweetness.",
        speaker: {
          name: "Anna Green",
          title: "Nutritionist",
          org: "PureJoyIceCream",
          bio: "Anna Green specializes in creating delicious, health-conscious treats that celebrate the natural flavors of fruit.",
        },
      },
      {
        name: "Mango Tango",
        id: "mango-tango",
        desc: "Let the vibrant flavor of Mango Tango whisk you away to tropical bliss. Made with real mangoes and a touch of natural sweetness.",
        speaker: {
          name: "Luis Ortega",
          title: "Flavor Artist",
          org: "PureJoyIceCream",
          bio: "Luis Ortega combines his artistic talent and love for tropical fruits to create ice cream flavors that dance on the palate.",
        },
      },
    ],
  },
  {
    name: "Exotic Escapes",
    id: "exotic-escapes",
    sessions: [
      {
        name: "Coconut Cream Dream",
        id: "coconut-cream-dream",
        desc: "Escape to paradise with Coconut Cream Dream, a creamy, coconut-flavored delight that's as smooth as it is satisfying.",
        speaker: {
          name: "Emily Tran",
          title: "Exotic Flavor Specialist",
          org: "PureJoyIceCream",
          bio: "Emily Tran explores exotic ingredients to create ice cream flavors that offer a taste of adventure and escape.",
        },
      },
      {
        name: "Pistachio Almond Fusion",
        id: "pistachio-almond-fusion",
        desc: "Indulge in the nutty, rich flavors of Pistachio Almond Fusion, a perfect blend of roasted pistachios and almonds in a creamy, sugar-free base.",
        speaker: {
          name: "Raj Patel",
          title: "Nut Expert",
          org: "PureJoyIceCream",
          bio: "Raj Patel's expertise in nuts brings a unique depth and richness to ice cream, creating unforgettable, sugar-free nutty delights.",
        },
      },
    ],
  },
];

export function getSession({ sessionId, catId }) {
  return flavors
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return flavors.find(({ id }) => id === catId);
}

export function getFlavors() {
  return flavors.map(({ name, id }) => ({ name, id }));
}
