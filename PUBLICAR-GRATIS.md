# Publicar JYM Tecnología sin pagar hosting ni dominio

La web es estática y puede alojarse gratis con GitHub Pages. La dirección será una dirección gratuita de GitHub, por ejemplo `https://TU-USUARIO.github.io/jymtecnologia-web/`; no necesitas comprar dominio.

## Pasos

1. Crea o inicia sesión en una cuenta gratuita de GitHub.
2. Crea un repositorio nuevo llamado `jymtecnologia-web` y configúralo como **Público**.
3. En el repositorio, usa **Add file → Upload files** y sube el contenido de esta carpeta: `index.html`, `styles.css`, `script.js`, `assets/`, y `.nojekyll`.
4. Confirma la carga con **Commit changes**.
5. Abre **Settings → Pages**.
6. En **Build and deployment**, selecciona **Deploy from a branch**.
7. Elige la rama `main` y la carpeta `/(root)`, y pulsa **Save**.
8. Espera a que GitHub termine la publicación. La dirección aparecerá en **Settings → Pages**.

## Importante

- En GitHub Free, GitHub Pages está disponible para repositorios públicos. El código y los archivos del repositorio serán visibles públicamente; no subas contraseñas, claves ni información privada.
- El dominio será el subdominio gratuito de GitHub. No incluye un dominio propio `.com`.
- El formulario actual abre WhatsApp con los datos ingresados y no los almacena en el sitio.
- Mantén juntos `index.html`, `styles.css`, `script.js` y la carpeta `assets` para que carguen los estilos y las imágenes.

Documentación oficial: https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
