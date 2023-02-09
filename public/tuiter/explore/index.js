import AppLayout from './components/AppLayout.js';

function exploreComponent() {
    $('#wd-explore').append(`
       ${AppLayout()}
    `);
}

$(exploreComponent);
