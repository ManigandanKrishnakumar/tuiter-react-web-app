import exploreItems from './posts.js';
import PostSummaryListItem from './PostSummaryListItem.js';

const PostSummaryList = () => {
    return `
        <!-- START: SUGGESTED POSTS -->
        <div class="wd-suggested-posts-container">
        ${exploreItems
            .map((post) => {
                return PostSummaryListItem(post);
            })
            .join(' ')}
        </div>
        <!-- END: SUGGESTED POSTS   -->
        `;
};

export default PostSummaryList;
