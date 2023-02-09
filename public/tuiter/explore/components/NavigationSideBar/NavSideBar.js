const NavSideBar = () => {
    return `
    <div class="list-group">
    <a
        href="#"
        class="list-group-item list-group-item-action"
        aria-current="true"
    >
        <i class="fab fa-twitter twitter-icon"></i>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
        <i class="fas fa-hashtag"></i>
        <span class="link-label">Explore</span>
    </a>
    <a href="#" class="list-group-item list-group-item-action active">
        <i class="fas fa-bell"></i>
        <span class="link-label">Notifications</span>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
        <i class="fas fa-envelope"></i>
        <span class="link-label">Messages</span>
    </a>
    <a class="list-group-item list-group-item-action">
        <i class="fas fa-bookmark"></i>
        <span class="link-label">Bookmarks</span>
    </a>
    <a class="list-group-item list-group-item-action">
        <i class="fas fa-list"></i>
        <span class="link-label">Lists</span>
    </a>
    <a class="list-group-item list-group-item-action">
        <i class="fas fa-user-alt"></i>
        <span class="link-label">Profile</span>
    </a>
    <a class="list-group-item list-group-item-action">
        <i class="fas fa-minus-circle"></i>
        <span class="link-label">More</span>
    </a>
</div>

<button class="tuit-button">
    <i class="fas fa-feather tweet-icon"></i>
    <span class="tweet-text">Tweet</span>
</button>
        `;
};

export default NavSideBar;
