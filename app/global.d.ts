import type {} from "hono";
import type {} from "../node_modules/hono/dist/types/jsx/intrinsic-elements";
import type {} from "typed-htmx";

type Head = {
	title?: string;
};

declare module "hono" {
	interface ContextRenderer {
		// biome-ignore lint/style/useShorthandFunctionType: <explanation>
		(
			content: string | Promise<string>,
			head?: Head,
		): Response | Promise<Response>;
	}
}

// TODEL: https://github.com/honojs/hono/issues/2927
declare module "../node_modules/hono/dist/types/jsx/intrinsic-elements" {
	namespace Hono {
		interface HTMLAttributes extends HtmxAttributes {}
	}
}
