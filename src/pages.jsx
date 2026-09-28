import { Section } from './sections.jsx'

// This template's pages, in code. Each <Section> is an ordinary component
// call: change its props, replace it with your own JSX, add anything you
// like, delete what you do not want. Nothing reads a document to undo you.
// The look — fonts, colours, spacing, the header — is src/theme.css.

// The Google Fonts these pages and theme.css name. Add a key when you use a new one.
export const fonts = ["fraunces", "lora"]

export function Home() {
  return <main>
    <Section section={{
        id: "hero",
        type: "hero",
        props: {
          title: "Hecho a mano, hecho para ti",
          subtitle: "Cosas sencillas y bien hechas, preparadas con calma en nuestro taller.",
          button_label: "Explorar la tienda",
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "story",
        type: "rich_text",
        props: {
          eyebrow: "Nuestra historia",
          title: "Hecho a mano, en pequeños lotes",
          body: "Cada pieza pasa por nuestras manos antes de llegar a las tuyas. Preferimos hacer pocas cosas y hacerlas bien, sin prisa y con atención al detalle.",
          button_label: "Conocer los productos",
          image_side: "left"
        }
      }} />
    <Section section={{
        id: "collection",
        type: "product_grid",
        props: {
          title: "Del taller",
          chips: true,
          limit: 6,
          design: {
            columns: 3
          }
        }
      }} />
    <Section section={{
        id: "statement",
        type: "rich_text",
        props: {
          eyebrow: "Sin prisa",
          title: "Lo que se hace con las manos se nota, y se queda."
        }
      }} />
    <Section section={{
        id: "faq",
        type: "faq",
        props: {
          title: "Preguntas frecuentes",
          items: [
            {
              question: "¿Cuánto tarda el envío?",
              answer: "Depende de tu ciudad: te damos la fecha estimada al confirmar el pedido."
            },
            {
              question: "¿Puedo devolver un producto?",
              answer: "Sí, según nuestra política de cambios y devoluciones."
            },
            {
              question: "¿Cómo puedo pagar?",
              answer: "Eliges el medio de pago al finalizar la compra."
            },
            {
              question: "¿Cada pieza es igual a la de la foto?",
              answer: "Al ser hechas a mano, cada una puede variar un poco en color, forma o textura."
            }
          ]
        }
      }} />
    <Section section={{
        id: "benefits",
        type: "benefits",
        props: {}
      }} />
  </main>
}

export function Product() {
  return <main>
    <Section section={{
        id: "detail",
        type: "product_detail",
        props: {
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "suggested",
        type: "product_suggested",
        props: {
          title: "Más del taller",
          limit: 4,
          design: {
            columns: 4
          }
        }
      }} />
  </main>
}
