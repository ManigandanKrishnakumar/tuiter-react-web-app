const WhoToFollowListItem = (who) => {
    return `
    <li class="list-group-item">
        <div class="account-container">
            <div class="dp">
                <img src="${who.avatarIcon}" alt="dp" />
            </div>
            <div class="profile-info">
                <div class="wd-user">
                    <span class="wd-username">${who.userName}</span>
                    <i class="fas fa-check-circle wd-verified-user"></i>
                </div>
                <span class="user-handle">${who.handle}</span>
            </div>
            <div class="follow-button">
                <button class="action-button">Follow</button>
            </div>
        </div>
    </li>
    `;
};

export default WhoToFollowListItem;
