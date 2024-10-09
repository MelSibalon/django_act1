document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');
    function resetTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        contents.forEach(content => {
            content.classList.add('hidden');
        });
    }

 
    function showContent(tabId, contentId) {
        resetTabs();
        document.getElementById(tabId).classList.add('active');
        document.getElementById(contentId).classList.remove('hidden');
    }

 
    document.getElementById('profile-tab').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('profile-tab', 'profile-content');
    });

    document.getElementById('logo-tab').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('logo-tab', 'logo-content');
    });

    document.getElementById('about-me-tab').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('about-me-tab', 'about-me-content');
    });
});
// Get all tab links
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// Function to deactivate all tabs and hide content
function deactivateTabs() {
  tabLinks.forEach(link => link.classList.remove('active'));
  tabContents.forEach(content => content.classList.add('hidden'));
}

// Loop through each tab link
tabLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Deactivate all tabs
    deactivateTabs();
    
    // Activate the clicked tab
    this.classList.add('active');
    
    // Show the related content
    const tabId = this.id.replace('-tab', '-content');
    document.getElementById(tabId).classList.remove('hidden');
  });
});
