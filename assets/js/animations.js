// 選單固定在上的效果
export function initStickyHeader(selector) {
    const navBox = document.querySelector(".nav-box");
    const nav = document.getElementById("nav");

    if (!navBox || !nav) {
        console.error(`找不到元素：${selector} 或 #nav`);
        return;
    }

    const originalNavClasses = nav.className;

    function handleScroll() {
        if (window.scrollY > 0) {
            navBox.classList.add("shadow", "fixed-top", "bg-white");
            nav.classList.add("rounded-0");
            nav.classList.remove("mt-lg-8", "nav-shadow");
        } else {
            navBox.classList.remove("fixed-top", "bg-white","shadow");
            nav.className = originalNavClasses;
        }
    }

    window.addEventListener("scroll", handleScroll);
    // 初始化一次
    handleScroll();
}
