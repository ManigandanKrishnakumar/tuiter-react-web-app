const Tweet = (tuit) => {
    return `
        <div class="wd-tweet">
            
            <!-- START: DP -->
            <div class="wd-profile-pic">
                <img src="${tuit.dp}" alt="dp" />
            </div>
            <!-- END: DP -->

            <!-- START: TWEET CONTENT -->
            <div class="wd-tweet-content">
                <!-- START: TWEET HEADER -->
                <div class="wd-tweet-header">
                    <div class="wd-author-info">
                        <span class="wd-username">${tuit.username}</span>
                        <span class="wd-handle">${tuit.userHandle}</span>
                        <i class="fa fa-circle wd-separator" aria-hidden="true"></i>
                        <span class="wd-date">${tuit.date}</span>
                    </div>
                    <i class="fa fa-ellipsis-h light-grey" aria-hidden="true"></i>
                </div>
                <!-- END: TWEET HEADER -->

                <!-- START: TWEET TEXT -->
                <p class="wd-tweet-text">
                   ${tuit.tweetText}
                </p>
                <!-- END: TWEET TEXT  -->

                <!-- START: LINK PREVIEW -->
                <div class="wd-link-preview">
                    <img src="${tuit.tweetLink.image}" alt="class" />
                    <div class="wd-link-preview-desciption">
                        <p class="wd-link-title">
                        ${tuit.tweetLink.title}
                        </p>
                        <p class="wd-link-desc">
                        ${tuit.tweetLink.desc}
                        </p>
                        <p class="wd-link">
                            <a href="#">
                                <i class="fa fa-link" aria-hidden="true"></i>
                                ${tuit.tweetLink.linkDisplay}
                            </a>
                        </p>
                    </div>
                </div>
                <!-- START: LINK PREVIEW -->

                <!-- START: TWEET ACTIONS -->
                <div class="wd-tweet-actions">
                    <div class="wd-action">
                        <a href="#">
                        <i class="far fa-comment"></i>
                            <p>${tuit.metrics.comments}</p>
                        </a>
                    </div>

                    <div class="wd-action">
                        <a href="#">
                            <i class="fa fa-retweet" aria-hidden="true"></i>
                            <p>${tuit.metrics.retweets}</p>
                        </a>
                    </div>

                    <div class="wd-action wd-clicked">
                        <a href="#">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <p>${tuit.metrics.likes}</p>
                        </a>
                    </div>

                    <div class="wd-action">
                        <a href="#">
                            <i class="fa fa-upload" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <!-- END:  TWEET ACTIONS -->
            </div>
            <!-- END: TWEET CONTENT -->
        </div>
    `;
};

export default Tweet;
