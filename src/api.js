const flavors = [
  {
    name: "Classic Flavors",
    id: "classic-flavors",
    sessions: [
      {
        name: "Vanilla Bliss",
        id: "vanilla-bliss",
        desc: "Experience the pure, smooth, and creamy taste of Vanilla Bliss, sweetened with natural ingredients for a guilt-free indulgence.",
        productDetails: {
          ingredients: "Natural vanilla extract, stevia, almond milk",
          recipeHint:
            "Our Vanilla Bliss starts with the infusion of Madagascar vanilla beans soaked in almond milk to extract the full spectrum of flavors. The mixture is then sweetened with stevia, ensuring a guilt-free indulgence. Every batch is slow-churned to creamy perfection, ensuring a smooth texture that melts delightfully in your mouth.",
          kcal: "120 kcal per serving",
          image: "vanilla-bliss.jpg",
        },
      },
      {
        name: "Rich Chocolate",
        id: "rich-chocolate",
        desc: "Dive into the deep, luxurious layers of Rich Chocolate, made from the finest cocoa and natural sweeteners. A true chocolate lover's dream without the sugar rush.",
        productDetails: {
          ingredients: "Cocoa powder, monk fruit sweetener, coconut milk",
          recipeHint:
            "For our Rich Chocolate, we start with premium cocoa powder, renowned for its deep, intense chocolatey notes. We blend this with monk fruit sweetener and creamy coconut milk, creating a rich yet health-conscious treat. The mixture is carefully churned until it achieves a velvety smoothness that defines luxury in every spoonful.",
          kcal: "150 kcal per serving",
          image: "rich-chocolate.jpg",
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
        productDetails: {
          ingredients: "Strawberries, erythritol, cashew milk",
          recipeHint:
            "Strawberry Fields is a celebration of summer's bounty. We begin with ripe, juicy strawberries, harvested at their peak sweetness. These berries are then blended with erythritol and lush cashew milk for a creamy base. Each batch is frozen slowly to preserve the vibrant flavor and nutritional integrity of the fresh fruit.",
          kcal: "130 kcal per serving",
          image: "strawberry-fields.jpg",
        },
      },
      {
        name: "Mango Tango",
        id: "mango-tango",
        desc: "Let the vibrant flavor of Mango Tango whisk you away to tropical bliss. Made with real mangoes and a touch of natural sweetness.",
        productDetails: {
          ingredients: "Mango, xylitol, oat milk",
          recipeHint:
            "Mango Tango combines the sweetness of Alphonso and the tanginess of Kesar mangoes, creating a symphony of flavors. The mango pulp is mixed with xylitol and creamy oat milk, then churned slowly to maintain the fruity essence. This process ensures a refreshing and exotic treat that dances on your palate.",
          kcal: "140 kcal per serving",
          image: "mango-tango.jpg",
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
        productDetails: {
          ingredients: "Coconut milk, agave syrup, vanilla essence",
          recipeHint:
            "Coconut Cream Dream starts with the rich milk of sustainably sourced coconuts, blended to smoothness with natural agave syrup. A hint of vanilla essence is added to elevate the creamy texture, and the mixture is frozen to perfection, creating a luxurious tropical escape in every spoonful.",
          kcal: "160 kcal per serving",
          image: "coconut-cream-dream.jpg",
        },
      },
      {
        name: "Pistachio Almond Fusion",
        id: "pistachio-almond-fusion",
        desc: "Indulge in the nutty, rich flavors of Pistachio Almond Fusion, a perfect blend of roasted pistachios and almonds in a creamy, sugar-free base.",
        productDetails: {
          ingredients: "Pistachios, almonds, stevia, hemp milk",
          recipeHint:
            "Our Pistachio Almond Fusion is crafted by roasting premium pistachios and almonds to enhance their natural flavors. The roasted nuts are then finely ground and blended with stevia-sweetened hemp milk. This nutty concoction is churned to a creamy consistency, offering a sophisticated and richly satisfying experience.",
          kcal: "170 kcal per serving",
          image: "pistachio-almond-fusion.jpg",
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

export function getFlavor(catId) {
  return flavors.find(({ id }) => id === catId);
}

export function getFlavors() {
  return flavors.map(({ name, id }) => ({ name, id }));
}
