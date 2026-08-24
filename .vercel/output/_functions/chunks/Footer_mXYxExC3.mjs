import { S as createAstro, d as maybeRenderHead, f as renderHead, h as createRenderInstruction, i as renderComponent, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_DTTxIANh.mjs";
import { t as createComponent } from "./compiler_D0-zh8PX.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "Nathan Jarvis, ACABE - Building Services Consultant & Engineering Researcher", description = "Building Services Consultant & Engineering Researcher specialising in M&E condition surveys, plant lifecycle asset management, and statutory energy compliance.", image = "/favicon.svg", author = "Nathan Jarvis, ACABE" } = Astro.props;
	const canonicalURL = new URL(Astro.url.pathname, Astro.site || Astro.url.origin);
	const imageUrl = new URL(image, Astro.site || Astro.url.origin).href;
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(imageUrl, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(imageUrl, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/x-icon" href="/favicon.ico">${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/natha/Documents/engineering-portfolio-v2/src/layouts/Layout.astro", void 0);
//#endregion
//#region node_modules/@vercel/analytics/dist/astro/index.astro
createAstro("https://astro.build");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const propsStr = JSON.stringify(Astro.props);
	const paramsStr = JSON.stringify(Astro.params);
	return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", {
		"data-props": propsStr,
		"data-params": paramsStr,
		"data-pathname": Astro.url.pathname
	})}${renderScript($$result, "C:/Users/natha/Documents/engineering-portfolio-v2/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/natha/Documents/engineering-portfolio-v2/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="terminal-footer" data-astro-cid-jo6i4kqk><div class="footer-container" data-astro-cid-jo6i4kqk><div class="footer-left" data-astro-cid-jo6i4kqk><span class="status-pulse" data-astro-cid-jo6i4kqk></span><span class="copyright" data-astro-cid-jo6i4kqk>&copy; ${currentYear} Nathan Jarvis &bull; Building Services &amp; Research</span></div><div class="footer-right" data-astro-cid-jo6i4kqk><span class="system-status" data-astro-cid-jo6i4kqk>SYS_STATUS: NOMINAL</span><div class="footer-links" data-astro-cid-jo6i4kqk><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-astro-cid-jo6i4kqk>LINKEDIN ↗</a><a href="https://github.com" target="_blank" rel="noopener noreferrer" data-astro-cid-jo6i4kqk>GITHUB ↗</a></div></div></div></footer>${renderComponent($$result, "Analytics", $$Index, { "data-astro-cid-jo6i4kqk": true })}`;
}, "C:/Users/natha/Documents/engineering-portfolio-v2/src/components/Footer.astro", void 0);
//#endregion
export { $$Layout as n, renderScript as r, $$Footer as t };
