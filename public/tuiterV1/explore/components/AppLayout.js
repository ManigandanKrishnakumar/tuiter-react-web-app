import Explore from './Explore/Explore.js';
import NavSideBar from './NavigationSideBar/NavSideBar.js';
import WhotoFollow from './WhoToFollow/WhoToFollow.js';

const AppLayout = () => {
    return `
        <div class="row align-items-start">
            
            <!-- START: PAGES -->
            <div class="col-2 pages-container">
            ${NavSideBar()}
            </div>
            <!-- END: PAGES -->

            <!-- START: EXPLORE CONTAINER -->
            <div class="col-6 explore-content-container">
            ${Explore()}
            </div>
            <!-- END: EXPLORE CONTAINER -->

            <!-- START: WHO-TO-FOLLOW -->
            <div class="col who-to-follow-container">
        	${WhotoFollow()}
            </div>
            <!-- END: WHO-TO-FOLLOW -->
        </div>
        `;
};

export default AppLayout;
