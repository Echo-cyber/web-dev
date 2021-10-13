import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group  mt-2">
            <li class="list-group-item">Who to follow</li>
            ${who.map(w =>
                 `<li class="list-group-item">${WhoToFollowListItem(w)}</li>`
            ).join('')}
            </ul>
`); }

export default WhoToFollowList;
