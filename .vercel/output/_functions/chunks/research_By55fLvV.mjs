import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { b as unescapeHTML, d as maybeRenderHead, i as renderComponent, p as addAttribute, u as renderTemplate } from "./server_DTTxIANh.mjs";
import { t as createComponent } from "./compiler_D0-zh8PX.mjs";
import { n as $$Layout, t as $$Footer } from "./Footer_mXYxExC3.mjs";
//#region src/papers/ice-break-in.md
var ice_break_in_exports = /* @__PURE__ */ __exportAll({
	Content: () => Content,
	compiledContent: () => compiledContent,
	default: () => Content,
	file: () => file,
	frontmatter: () => frontmatter,
	getHeadings: () => getHeadings,
	rawContent: () => rawContent,
	url: () => void 0
});
var html = () => "";
var frontmatter = {
	"title": "The ICE Break-in Conundrum: Surface Roughness, Tribochemistry, and Synthetic Lubricants",
	"description": "A tribological evaluation of cylinder liner topography, asperity deformation, and ZDDP reaction film kinetics during initial engine run-in.",
	"publishDate": "2026-08",
	"category": "TRIBOLOGY",
	"tag": "PEER REVIEW PREPRINT",
	"pdfUrl": "/papers/ICE-Break-in-Conundrum.pdf",
	"externalUrl": "https://www.linkedin.com/posts/nathan-jarvis-engineering_the-ice-break-in-conundrum-activity-7496281521880809472-e9WT"
};
var file = "C:/Users/natha/Documents/engineering-portfolio-v2/src/papers/ice-break-in.md";
function rawContent() {
	return "   \r\n                                                                                                \r\n                                                                                                                                                          \r\n                      \r\n                     \r\n                           \r\n                                            \r\n                                                                                                                                    \r\n   ";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [];
}
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = void 0;
	return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
});
//#endregion
//#region src/pages/research.astro
var research_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Research,
	file: () => $$file,
	url: () => $$url
});
var $$Research = createComponent(($$result, $$props, $$slots) => {
	const sortedPapers = Object.values(/* @__PURE__ */ Object.assign({ "../papers/ice-break-in.md": ice_break_in_exports })).map((file) => file.frontmatter).sort((a, b) => new Date(b.publishDate || "2026").valueOf() - new Date(a.publishDate || "2026").valueOf());
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Station 03 // Engineering Research & Papers - Nathan Jarvis, ACABE",
		"description": "Station 03 Research & Publications - Applied engineering research, boundary lubrication tribology, and empirical thermodynamic modelling by Nathan Jarvis, ACABE.",
		"data-astro-cid-omha2cvd": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="responsive-shell" data-astro-cid-omha2cvd><a href="/" class="back-btn" aria-label="Return to Homepage" data-astro-cid-omha2cvd>← RETURN TO PORTFOLIO HOME</a><div class="station-grid" data-astro-cid-omha2cvd><!-- Research Sidebar --><aside class="hud-sidebar" aria-label="Academic Research Overview" data-astro-cid-omha2cvd><div class="sidebar-header" data-astro-cid-omha2cvd>RESEARCH OVERVIEW</div><div class="meta-row" data-astro-cid-omha2cvd><div class="meta-label" data-astro-cid-omha2cvd>RESEARCH AREAS</div><div class="meta-val" style="color: var(--neon-cyan);" data-astro-cid-omha2cvd>Tribology, Contact Mechanics & Applied Thermodynamics</div></div><div class="meta-row" data-astro-cid-omha2cvd><div class="meta-label" data-astro-cid-omha2cvd>METHODOLOGY</div><div class="meta-val" data-astro-cid-omha2cvd>Empirical Surface Metrology & Boundary Friction Analysis</div></div><div class="meta-row" data-astro-cid-omha2cvd><div class="meta-label" data-astro-cid-omha2cvd>PAPERS & PREPRINTS</div><div class="meta-val" data-astro-cid-omha2cvd>${sortedPapers.length} Manuscripts Available</div></div><div class="meta-row" data-astro-cid-omha2cvd><div class="meta-label" data-astro-cid-omha2cvd>PUBLICATION STATUS</div><div class="meta-val" data-astro-cid-omha2cvd><span class="status-pill" data-astro-cid-omha2cvd>OPEN ACCESS ARCHIVES</span></div></div></aside><!-- Main Content Stream --><section class="main-stream" data-astro-cid-omha2cvd><div class="page-tag" data-astro-cid-omha2cvd>STATION // 03</div><h1 class="page-title" data-astro-cid-omha2cvd>Engineering Research & Publications</h1><p class="page-lead" data-astro-cid-omha2cvd>Independent engineering preprints and technical papers focusing on surface topography, boundary lubrication dynamics, contact mechanics, and empirical thermodynamic modelling.</p><div class="research-stack" data-astro-cid-omha2cvd>${sortedPapers.map((paper) => {
		const downloadUrl = paper.pdfUrl || paper.typstPdfUrl;
		return renderTemplate`<article class="paper-card" data-astro-cid-omha2cvd><div data-astro-cid-omha2cvd><div class="paper-meta-line" data-astro-cid-omha2cvd><span class="paper-badge" data-astro-cid-omha2cvd>${paper.tag || paper.category || "ENGINEERING RESEARCH"}</span><time${addAttribute(new Date(paper.publishDate || "2026").toISOString(), "datetime")} data-astro-cid-omha2cvd>${new Date(paper.publishDate || "2026").toLocaleDateString("en-GB", {
			year: "numeric",
			month: "short",
			day: "numeric"
		})}</time></div><h2 class="paper-heading" data-astro-cid-omha2cvd>${paper.title}</h2><p class="paper-abstract" data-astro-cid-omha2cvd>${paper.description}</p></div><div class="paper-actions" data-astro-cid-omha2cvd><span style="color: #94a3b8;" data-astro-cid-omha2cvd>FORMAT: PDF / OPEN ACCESS</span><div class="action-btn-group" data-astro-cid-omha2cvd>${downloadUrl && renderTemplate`<a${addAttribute(downloadUrl, "href")} class="paper-btn primary" target="_blank" rel="noopener noreferrer"${addAttribute(`Download PDF manuscript for ${paper.title}`, "aria-label")} data-astro-cid-omha2cvd>DOWNLOAD PDF ↓</a>`}${paper.externalUrl && renderTemplate`<a${addAttribute(paper.externalUrl, "href")} class="paper-btn" target="_blank" rel="noopener noreferrer"${addAttribute(`View discussion and summary for ${paper.title}`, "aria-label")} data-astro-cid-omha2cvd>VIEW ARTICLE / LINKEDIN ↗</a>`}</div></div></article>`;
	})}</div></section></div></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-omha2cvd": true })}` })}`;
}, "C:/Users/natha/Documents/engineering-portfolio-v2/src/pages/research.astro", void 0);
var $$file = "C:/Users/natha/Documents/engineering-portfolio-v2/src/pages/research.astro";
var $$url = "/research";
//#endregion
//#region \0virtual:astro:page:src/pages/research@_@astro
var page = () => research_exports;
//#endregion
export { page };
