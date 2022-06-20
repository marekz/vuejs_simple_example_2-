export default {
    update(el, binding) {
        const bgClass = binding.arg || "bg-danger";
        const noMods = Object.keys(binding.modifiers).length == 0;
        if (binding.value) {
            if (noMods || binding.modifiers.bg) {
                el.classList.add(bgClass);
            }
            if (noMods || binding.modifiers.text) {
                el.classList.add("text-white");
            }
        } else {
            el.classList.remove(bgClass, "text-white");
        }
    }
}