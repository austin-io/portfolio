export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set(["favicon1.png","favicon2.png","favicon3.png","favicon_svelte.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.582602cc.js","app":"_app/immutable/entry/app.a70e0dfe.js","imports":["_app/immutable/entry/start.582602cc.js","_app/immutable/chunks/scheduler.43af145a.js","_app/immutable/chunks/singletons.6440eb91.js","_app/immutable/entry/app.a70e0dfe.js","_app/immutable/chunks/scheduler.43af145a.js","_app/immutable/chunks/index.a0ae9388.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
