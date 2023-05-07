// calculates remaining height of the `vh` after getting the height of header and pane header.
export default function setTextareaHeight() {
	const headerHeight = (document.querySelector("header") as HTMLElement)
		?.offsetHeight;
	const paneHeadHeight = (document.querySelector(".pane-head") as HTMLElement)
		?.offsetHeight;

	const mdInput = document.querySelector(".md-input") as HTMLInputElement;
	const mdPreview = document.querySelector(".md-preview") as HTMLDivElement;

	const height = `calc(100vh - ${headerHeight + paneHeadHeight}px)`;

	mdInput.style.height = height;
	mdPreview.style.height = height;
}
