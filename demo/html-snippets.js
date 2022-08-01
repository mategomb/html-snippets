// Import and call it in order to find and add snippets after the page has been loaded.

export default async function insertSnippets() {
	const slotEls = document.querySelectorAll(".js-snippet-slot");

	if (slotEls.length > 0) {
		for (const slotEl of slotEls) {
			const snippetName = slotEl.dataset.snippetName;
			const snippetRes = await fetch(`./snippets/${snippetName}.html`);
			const snippetText = await snippetRes.text();

			slotEl.insertAdjacentHTML("afterend", snippetText);
			slotEl.remove();
		}
	}
}
