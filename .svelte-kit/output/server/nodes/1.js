

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.068a406a.js","_app/immutable/chunks/scheduler.43af145a.js","_app/immutable/chunks/index.a0ae9388.js","_app/immutable/chunks/singletons.6440eb91.js"];
export const stylesheets = [];
export const fonts = [];
