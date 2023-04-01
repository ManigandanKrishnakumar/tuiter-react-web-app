const Layout = (firstColumn, secondColumn, thirdColumn) => {
    return `
        <div class="row align-items-start">
            
            <!-- START: PAGES -->
            <div class="col-2 pages-container">
            ${firstColumn}
            </div>
            <!-- END: PAGES -->

            <!-- START: EXPLORE CONTAINER -->
            <div class="col-6 explore-content-container">
            ${secondColumn}
            </div>
            <!-- END: EXPLORE CONTAINER -->

            <!-- START: WHO-TO-FOLLOW -->
            <div class="col who-to-follow-container">
        	${thirdColumn}
            </div>
            <!-- END: WHO-TO-FOLLOW -->
        </div>
        `;
};

export default Layout;
