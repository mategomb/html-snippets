export default async function insertSnippets() {
	const slotEls = document.querySelectorAll(".js-snippet-slot");

	if (slotEls.length > 0) {
		for (const slotEl of slotEls) {
			const snippetName = slotEl.dataset.snippetName;
			const snippetRes = await fetch(`./snippets/${snippetName}.html`); // Path is relative here only for demo purposes.
			const snippetText = await snippetRes.text();

			slotEl.insertAdjacentHTML("afterend", snippetText);
			slotEl.remove();
		}
	}
}
