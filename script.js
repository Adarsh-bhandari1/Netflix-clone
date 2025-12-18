document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".faq-box");

  boxes.forEach((box) => {
    const ans = box.nextElementSibling;
    if (!ans || !ans.classList.contains("faq-ans")) return;
    ans.classList.remove("expanded");
    ans.style.maxHeight = "0px";

    const open = () => {
      box.classList.add("active");
      ans.classList.add("expanded");
      ans.style.maxHeight = ans.scrollHeight + "px";
    };

    const close = () => {
      box.classList.remove("active");
      ans.style.maxHeight = ans.scrollHeight + "px";
      ans.offsetHeight; // force reflow
      ans.style.maxHeight = "0px";
      ans.classList.remove("expanded");
    };

    const toggle = () => {
      if (box.classList.contains("active")) close();
      else open();
    };

    box.addEventListener("click", toggle);

    box.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    ans.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "max-height") return;
      if (ans.classList.contains("expanded")) {
        ans.style.maxHeight = "none";
      }
    });
  });
});
