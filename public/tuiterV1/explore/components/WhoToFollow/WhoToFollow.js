import who from './who.js';
import WhoToFollowListItem from './WhoToFollowListItem.js';

const WhotoFollow = () => {
    return `
    <ul class="list-group follow">
        <li class="list-group-item follow-heading">Who To Follow</li>
        ${who
            .map((item) => {
                return WhoToFollowListItem(item);
            })
            .join('')}
        <li class="list-group-item">
            <span class="show-more">Show More</span>
        </li>
    </ul>
    `;
};

export default WhotoFollow;
