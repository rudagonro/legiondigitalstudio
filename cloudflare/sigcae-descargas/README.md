# SIGCAE — Descargas privadas

Módulo independiente del sitio de Legión Digital Studio. El sitio público sigue en GitHub Pages detrás de Cloudflare; este Worker atiende exclusivamente `/admin`, `/admin/*`, `/sigcae-descarga` y `/sigcae-descarga/*`. No se modifican páginas públicas ni cambios de otra sesión. No se hace push.

## Para Rubén (sin terminal)
1. Abre https://legiondigitalstudio.com/admin e inicia sesión con **rudagonro@gmail.com** mediante Cloudflare Access.
2. En **Publicar una versión**, selecciona Servidor Windows o Cliente Windows, escribe la versión y las novedades y elige el instalador del paquete del Escritorio. Pulsa **Subir versión** y espera la confirmación. El nombre debe empezar por SIGCAE, terminar en .exe (Windows) o .apk (Android), usar caracteres latinos simples y pesar hasta 90 MiB.
3. La tarjeta muestra fecha de Colombia, tamaño, SHA-256 verificado por R2 y notas. Quedan disponibles la versión nueva y dos anteriores por plataforma. Subir otra retira la cuarta y sus enlaces.
4. Para un cliente, elige el número máximo de descargas (3 por defecto, hasta 20), pulsa **Compartir 7 días**, luego **Copiar enlace**, y envíalo al cliente por tu canal habitual. El panel no envía mensajes automáticamente.
5. Puedes **Revocar** el enlace. Cada intento autorizado consume un uso, incluso si la conexión se interrumpe. El historial registra entregas iniciadas, no instalación completada.
6. Android usa por ahora Chrome en la red del casino y el QR de Configuración → Red y tablet. No se publica un APK ficticio. Instalar una PWA desde una IP HTTP local requiere resolver primero un contexto seguro HTTPS; la versión web sí funciona sin APK.

## Recursos de esta implementación
- Cuenta: Legion Digital Studio, 46055cf842945d117960d870d09a42c3.
- Worker: sigcae-descargas. workers.dev y previews desactivados.
- R2 privado: sigcae-instaladores-privados. Nunca activar r2.dev ni dominio público del bucket.
- D1 nueva: sigcae-descargas, 01894c6c-9c77-4d13-9edb-4ad324d460ac. No es la BD de ningún casino.
- Access: e0e9016b-69da-4383-925a-5499eb8ab1ab. Política exclusiva para el correo autorizado. JWT verificado además en Worker (firma RS256, emisor, audiencia, caducidad y correo).
- Enlaces con 256 bits aleatorios; solo su hash se persiste. Token en fragmento del enlace y en cuerpo POST, no en URL de petición. Sin caché, sin recursos de terceros y política de referencia no-referrer.
- El código transmite archivos por streaming. El navegador calcula SHA-256 antes de subir y R2 verifica la integridad. Archivos de pruebas son texto ficticio; nunca se publican como instaladores reales.

## Validación del desarrollador
Herramientas fijadas en package-lock.json; no alterar dependencias del sitio ni de SIGCAE. Ejecutar scripts de package.json desde ESTA carpeta. `types` genera tipos de bindings, `check` comprueba TypeScript, `build` solo empaqueta mediante dry-run. Pruebas Miniflare/workerd: auth, CSRF, checksum, diez descargas concurrentes con tope dos, caducidad, revocación, retención y registro histórico. El adaptador convertV4MiniflareOptions corresponde a la versión instalada 5.20260921.0-alpha.

Las migraciones de este subproyecto son de D1 de descargas, independientes de las migraciones Drizzle del casino. Para despliegue del desarrollador: aplicar migración con Wrangler D1 al UUID indicado, desplegar con la configuración revisada y verificar Access y rechazo de enlaces inválidos. El dueño no necesita ejecutar comandos.

## Estado de entrega
21-sep-2026: código y siete pruebas locales aprobados, recursos R2/D1/Access creados. Desplegado en Cloudflare (versión 721193cc-a1b0-44af-9c25-f95c8e8d825e). Verificado: sitio público 200; /admin y API redirigen 302 a Access; página de enlace 200 sin caché; token inexistente 410. R2 r2.dev desactivado y sin dominios públicos. Tipos/dry-run y siete pruebas verdes. Los instaladores definitivos se publican solo después del bloque 9. Comprobar login real del dueño y descarga desde otro equipo antes de declarar validación de producción completa.

**21-sep-2026 (noche) — Validación de producción completada por el dueño, con Claude Code guiándolo paso a paso.** El dueño inició sesión real con `rudagonro@gmail.com` por Cloudflare Access sin problema. Publicó desde el panel los instaladores de prueba de Servidor Windows y Cliente Windows (los del paquete vigente en su Escritorio, no los definitivos del bloque 9), ambos con hash SHA-256 verificado. Generó un enlace de "Compartir 7 días" para el Cliente Windows y lo abrió desde su celular Android por datos móviles (red distinta a la del panel): la página de descarga cargó, el navegador del celular descargó el `.exe` de 2.90 MiB completo, y el contador del enlace pasó de 0/3 a 1/3 usos. El historial de entregas registró la fila correspondiente (`enlace autorizado`, archivo y versión) tras recargar la página del panel — **importante:** "Historial de entregas iniciadas" y "Enlaces compartidos" no se refrescan solos entre sí ni al ocurrir una descarga en otro dispositivo; solo se actualizan al recargar la página completa o justo después de la acción que los originó en ese mismo navegador. Aparte, se confirmó que cada enlace de "Compartir" queda atado a un único archivo (no a "todos los instaladores"), y que el token del enlace solo se muestra una vez al crearlo (no se persiste en claro) — si el dueño no lo copia de inmediato, debe revocar y generar uno nuevo para poder compartirlo. Con esto, **el bloque 8 (Fase 4) queda validado de punta a punta en producción.**

## Referencias técnicas
- https://developers.cloudflare.com/r2/api/workers/workers-api-reference/
- https://developers.cloudflare.com/d1/worker-api/prepared-statements/
- https://developers.cloudflare.com/workers/configuration/routing/routes/
- https://developers.cloudflare.com/changelog/post/2025-10-03-one-click-access-for-workers/
