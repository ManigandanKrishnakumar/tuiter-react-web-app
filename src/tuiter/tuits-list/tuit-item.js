import React from 'react';

const TuitItem = ({ tuit }) => {
    return (
        <div className="wd-tweet">
            <div className="wd-profile-pic">
                <img src={tuit.dp} alt="dp" />
            </div>

            <div className="wd-tweet-content">
                <div className="wd-tweet-header">
                    <div className="wd-author-info">
                        <span className="wd-username">{tuit.username}</span>
                        <span className="wd-handle">{tuit.userHandle}</span>
                        <i className="fa fa-circle wd-separator" aria-hidden="true"></i>
                        <span className="wd-date">{tuit.date}</span>
                    </div>
                    <i className="fa fa-ellipsis-h light-grey" aria-hidden="true"></i>
                </div>

                <p className="wd-tweet-text">{tuit.tweetText}</p>

                <div className="wd-link-preview">
                    <img src={tuit.tweetLink.image} alt="class" />
                    <div className="wd-link-preview-desciption">
                        <p className="wd-link-title">{tuit.tweetLink.title}</p>
                        <p className="wd-link-desc">{tuit.tweetLink.desc}</p>
                        <p className="wd-link">
                            <a href="#">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                {tuit.tweetLink.linkDisplay}
                            </a>
                        </p>
                    </div>
                </div>

                <div className="wd-tweet-actions">
                    <div className="wd-action">
                        <a href="#">
                            <i className="far fa-comment"></i>
                            <p>{tuit.metrics.comments}</p>
                        </a>
                    </div>

                    <div className="wd-action">
                        <a href="#">
                            <i className="fa fa-retweet" aria-hidden="true"></i>
                            <p>{tuit.metrics.retweets}</p>
                        </a>
                    </div>

                    <div className="wd-action wd-clicked">
                        <a href="#">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            <p>{tuit.metrics.likes}</p>
                        </a>
                    </div>

                    <div className="wd-action">
                        <a href="#">
                            <i className="fa fa-upload" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuitItem;
