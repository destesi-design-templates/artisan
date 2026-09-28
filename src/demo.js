// The sample shop this template shows where no shop is behind the page (its
// live demo, or your project before the workspace sets up a shop). It never
// reaches a live shop: there the page draws the shop's own catalog, banner and
// settings. Replace it with your own sample shop, or leave it: a live shop
// never loads these photos.
import hero from './demo/hero.webp'
import story from './demo/story.webp'
import p1 from './demo/p1.webp'
import p2 from './demo/p2.webp'
import p3 from './demo/p3.webp'
import p4 from './demo/p4.webp'
import p5 from './demo/p5.webp'
import p6 from './demo/p6.webp'

export const demo = {
  name: 'TIERRA VIVA',
  tagline: 'Taller de oficios y sabores',
  about: 'Jabones, velas, cerámica y despensa hechos a mano en pequeños lotes. Una tienda de demostración de la plantilla Artisan.',
  announcement: 'Hecho a mano, en pequeños lotes',
  hero,
  story,
  detail: 'Hecho a mano en pequeños lotes, con ingredientes y materiales sencillos. Cada pieza es un poco distinta a la anterior, y eso es parte de su encanto.',
  benefits: ['Hecho a mano', 'Pequeños lotes', 'Atención cercana'],
  categories: [
    { id: 'cuidado', name: 'Cuidado personal' },
    { id: 'hogar', name: 'Hogar' },
    { id: 'despensa', name: 'Despensa' },
  ],
  products: [
    { id: '1', name: 'Jabones de avena y lavanda x3', price_cents: 3600000, category_id: 'cuidado', badge: 'Nuevo', image: p1 },
    { id: '2', name: 'Vela de soya ámbar', price_cents: 5800000, category_id: 'hogar', image: p2 },
    { id: '3', name: 'Cuenco de cerámica', price_cents: 7200000, category_id: 'hogar', image: p3 },
    { id: '4', name: 'Mermelada de frutos rojos', price_cents: 2200000, category_id: 'despensa', badge: 'Nuevo', image: p4 },
    { id: '5', name: 'Canasto tejido con tapa', price_cents: 9500000, category_id: 'hogar', image: p5 },
    { id: '6', name: 'Aceite corporal de caléndula', price_cents: 4800000, category_id: 'cuidado', image: p6 },
  ],
}
