import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${post.map(p =>
            `<li class="list-group-item">${PostSummaryItem(p)}</li>`
            ).join('')}
        </ul>
        
    `);
}

export default PostSummaryList;