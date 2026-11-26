export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (!['/404', '/404/', '/404.html'].includes(url.pathname)) return context.next();
  url.pathname = '/404';
  const head = context.request.method === 'HEAD';
  const asset = await context.env.ASSETS.fetch(new Request(url, { method: head ? 'HEAD' : 'GET' }));
  if (asset.status !== 200) {
    return new Response(head ? null : 'Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
    });
  }
  const headers = new Headers(asset.headers);
  headers.delete('Location');
  headers.set('X-Robots-Tag', 'noindex');
  return new Response(head ? null : asset.body, { status: 404, headers });
}
