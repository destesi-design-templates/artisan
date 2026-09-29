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
          title: "Hecho con cuidado, pensado para ti",
          subtitle: "Cosas sencillas, elegidas con calma para acompañar tu día.",
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
          title: "Pocas cosas, bien pensadas",
          body: "Preferimos ofrecer pocas cosas y cuidar cada una, sin prisa y con atención al detalle.",
          button_label: "Conocer los productos",
          image_side: "left"
        }
      }} />
    <Section section={{
        id: "collection",
        type: "product_grid",
        props: {
          title: "Nuestros productos",
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
          title: "Lo que se hace con cuidado se nota, y se queda."
        }
      }} />
    <Section section={{
        id: "faq",
        type: "faq",
        props: {
          title: "Preguntas frecuentes",
          items: [
            {
              question: "¿Cómo funcionan los envíos?",
              answer: "Las condiciones de envío están en nuestra Política de compras, al pie de esta página."
            },
            {
              question: "¿Cómo funcionan los cambios y devoluciones?",
              answer: "Consulta nuestra política de Devoluciones y garantía, al pie de esta página."
            },
            {
              question: "¿Cómo puedo pagar?",
              answer: "Eliges el medio de pago al finalizar la compra."
            },
            {
              question: "¿Cada pieza es igual a la de la foto?",
              answer: "En la página de cada producto encuentras sus fotos y su descripción. Si tienes una duda sobre un detalle, resuélvela antes de confirmar tu pedido."
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
          title: "También te puede gustar",
          limit: 4,
          design: {
            columns: 4
          }
        }
      }} />
  </main>
}
