const stuff = [
  { name: 'burger', price: '$9' },
  { name: 'drink', price: '$5' },
  { name: 'dessert', price: '$7' },
];

exports.getAllProducts = (req, res) => {
  res.render('products', { products: stuff });
};
