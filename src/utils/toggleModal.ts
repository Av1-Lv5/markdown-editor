// gets the element which have an id as 'modal-container' and toggles the 'hide' css class on it.

export default function toggleModal(): void {
    const modalContainer = document.querySelector("#modal-container");
    modalContainer?.classList.toggle("hide");
}
