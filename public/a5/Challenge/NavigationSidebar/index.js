import nav from "./nav.js";
import NavItem from "./NavItem.js";

const NavigationSidebar = (active) => {
    return(`
        <ul class="list-group">
        ${nav.map(n =>
        `<li class="list-group-item ${n.title===active?"active":""}">${NavItem(n)}</li>`
            ).join('')}
        </ul>
        <div class="d-grid mt-2">
            <a href="tweet.html"
               class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;
