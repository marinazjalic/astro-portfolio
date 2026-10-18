// Briefly highlights a card after the visitor is taken to it from the
// technology popup. The animation itself lives in global.css (.target-flash).

export function flashTarget(el: HTMLElement): void {
  el.classList.remove("target-flash");
  // Force a reflow so the animation restarts if it was already running
  void el.offsetWidth;
  el.classList.add("target-flash");
  el.addEventListener("animationend", () => el.classList.remove("target-flash"), {
    once: true,
  });
}
