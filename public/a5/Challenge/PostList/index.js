import PostItem from "./PostItem.js";
import post from "./post.js";

const PostList = () => {
    return (`
        <ul class="list-group">
        ${post.map(p =>
        `<li class="list-group-item">${PostItem(p)}</li>`
         ).join('')}
        </ul>
    `);

}

export default PostList;