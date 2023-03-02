Este es un proyecto realizado con fines de estudio durante mi curso sobre Next.js, impartido por Fernando Herrera en la plataforma Udemy.com.

Durante este proyecto en particular aprendimos a generar de manera estática nuestra aplicación, cosa que es muy beneficioso en los casos donde sabemos de antemano la información que necesitamos generar de manera estática y que esta no va a cambiar. Tambien aprendimos a interacturar con el localStorage aunque la aplicación se generase de manera estática; además, implementamos enrutamiento dinámico utilizando para ello el id del pokemon y también con el name para mostrar la información detallada del pokemon. Implementamos una pantalla de favoritos para listar los favoritos guardados en localStorage, utilizamos una librería externa llamada Canvas-Confetti para aplicar animación de confetis cuando el pokemon está incluido en favoritos y finalizando el proyecto optimizamos la data necesaria del pokémon para mejorar nuestra aplicación y mejorar nuestro contenido estático de la aplicación.

Link del curso: (https://www.udemy.com/share/10610k3@anSJm_WmLABr0ZD2Na96WMPKvEN42e-Y3HS07ABs_JoI1d7xKIu9LrC0QOZsNv6sew==/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
