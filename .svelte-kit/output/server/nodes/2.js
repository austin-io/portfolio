

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.24e9cc1c.js","_app/immutable/chunks/scheduler.43af145a.js","_app/immutable/chunks/index.a0ae9388.js"];
export const stylesheets = ["_app/immutable/assets/2.2cfb4b62.css"];
export const fonts = [];
