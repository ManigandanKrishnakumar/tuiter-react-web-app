const PostSummaryListItem = (post) => {
    return `
        <div class="wd-post wd-attachment">
            <div class="wd-post-details">
                <div class="wd-post-header">
                    <div class="wd-topic-heading">
                        <span>${post.topic}</span>
                    </div>
                    <div class="wd-user">
                        <span class="wd-username">${post.userName}</span>
                        ${
                            post.userName.length
                                ? ' <i class="fas fa-check-circle wd-verified-user"></i> - '
                                : ''
                        }
                       
                        <span> ${post.time}</span>
                    </div>
                </div>
                <p class="wd-topic">${post.title}</p>
            </div>

            <div class="wd-attachment-image">
                <img src="${post.image}" alt="cuomo" />
            </div>
        </div>
        `;
};

export default PostSummaryListItem;
