# Práctica: Pipeline CI/CD con errores

## Contexto

Un compañero armó este repositorio para publicar un sitio web estático.
El sitio debería:

1. Construirse como imagen Docker y subirse a Docker Hub.
2. Publicarse automáticamente en GitHub Pages.

El repositorio **tiene errores**. Tu tarea es encontrarlos y corregirlos.

## Requisitos

### Sitio
- El sitio está en la carpeta `site/`.

### Docker
- La imagen usa **nginx** y sirve el sitio en el puerto **80**.
- Al correr `docker run -p 8080:80 <imagen>`, el sitio debe verse en `http://localhost:8080`.

### Pipeline (`.github/workflows/pipeline.yml`)
- Se ejecuta en cada `push` a `main`, en cada `pull_request` a `main` y de forma manual.
- Usa los secrets `DOCKERHUB_USERNAME` y `DOCKERHUB_TOKEN`.
- La imagen se llama `<usuario>/practica-errores` y se publica con **dos tags**:
  - `latest`
  - el SHA del commit
- En los pull requests la imagen se construye pero **no** se sube.
- El job `test` debe ejecutarse **solo si** el build terminó bien.
- El test verifica que exista el archivo `index.html` del sitio.

### Deploy (`.github/workflows/deploy.yml`)
- Publica el contenido de `site/` en GitHub Pages en cada `push` a `main`.
- Muestra la URL del sitio en el resumen del workflow.

## Entrega
- Un commit por corrección, con mensajes descriptivos (Conventional Commits).
- El pipeline y el deploy deben quedar en verde en la pestaña **Actions**.
