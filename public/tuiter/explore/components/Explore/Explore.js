import PostSummaryList from './PostSummaryList.js';

const Explore = () => {
    return `
    <!-- START: HEADER -->
    <div id="header-container">
        <!-- START: SEARCH CONTAINER -->
        <div class="wd-search-container">
            <div class="wd-search-bar">
                <label class="wd-search-icon" for="search">
                    <i class="fas fa-search"></i>
                </label>
                <input
                    type="text"
                    name="search"
                    id="search-input"
                    placeholder="Search Twitter"
                />
            </div>
        </div>

        <!-- END: SEARCH CONTAINER -->

        <!-- START: SETTINGS CONTAINER -->
        <div class="wd-settings-container">
            <a href="../explore-settings/index.html">
                <i class="fas fa-cog" id="settings-icon"></i>
            </a>
        </div>
        <!-- END: SETTINGS CONTAINER -->
    </div>
    <!-- END: HEADER -->

    <!-- START: TABS -->
    <div class="wd-tabs-container">
        <ul>
            <li>
                <a href="">
                    <input type="radio" name="tab" id="for-you-checkbox" checked />
                    <label for="for-you-checkbox">For You</label>
                </a>
            </li>
            <li>
                <a href="">
                    <input type="radio" name="tab" id="trending-checkbox" />
                    <label for="trending-checkbox">Trending</label>
                </a>
            </li>

            <li>
                <a href="">
                    <input type="radio" name="tab" id="news-checkbox" />
                    <label for="news-checkbox">News</label>
                </a>
            </li>
            <li>
                <a href="">
                    <input type="radio" name="tab" id="sports-checkbox" />
                    <label for="sports-checkbox">Sports</label>
                </a>
            </li>
            <li>
                <a href="">
                    <input type="radio" name="tab" id="entertainment-checkbox" />
                    <label for="entertainment-checkbox">Entertainment</label>
                </a>
            </li>
        </ul>
    </div>
    <!-- END: TABS -->

    <!-- START: BANNER -->
    <div class="banner-container">
        <img src="./assets/startship.jpg" alt="starship" class="banner-img" />
        <span class="banner-text">SpaceX's Starship</span>
    </div>
    <!-- END: BANNER -->

    ${PostSummaryList()}
    `;
};

export default Explore;
