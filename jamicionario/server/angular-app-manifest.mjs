
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 607, hash: 'dc9361c6af072f0e0334191b6d3969a4b6363b5095332b34592673211007a7b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '203a3e2c5e9522cad3713594394c14b2be0e17e941a1f0f1d98c09e2f19164bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EBLZKKXY.css': {size: 20, hash: 'UJv31Xc6KRo', text: () => import('./assets-chunks/styles-EBLZKKXY_css.mjs').then(m => m.default)}
  },
};
