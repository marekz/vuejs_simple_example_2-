export default {
    update(el, binding) {
        const bgClass = binding.arg || "bg-danger";
        if (binding.value) {
            el.classList.add(bgClass, "text-white");
        } else {
            el.classList.remove(bgClass, "text-white");
        }
    }
}