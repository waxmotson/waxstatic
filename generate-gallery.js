const fs = require('fs');

const images = fs.readdirSync('.')
  .filter(file => /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(file))
  .sort()
  .map(file => `/${file}`);

fs.writeFileSync('gallery.json', JSON.stringify(images, null, 2));
console.log(`Generated gallery.json with ${images.length} images`);
