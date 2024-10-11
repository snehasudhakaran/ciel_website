// Sample data for content sections
const contentData = {
    'Insight-Driven': {
        icon: '<ion-icon name="cloud-upload-outline"></ion-icon>',
        title: 'Everything is Data-Driven',
        description: "We rely on data-driven social media strategies to inform every decision.<br> We leave testing and experimentation to our research teams, ensuring that every move is calculated and sound",
       
    },
    'Client-Centric': {
        icon: '<ion-icon name="people-outline"></ion-icon>',
        title: 'We Work With You and For You',
        description: 'At Sociallyin, we put client goals first and foremost. We partner with you to develop content that reflects your brand identity, message and values. <br> Our team of writers, editors, strategists and producers work together to create powerful and engaging content.',
       
    },
    'Transparent Insights': {
        icon: '<ion-icon name="git-branch-outline"></ion-icon>',
        title: 'Clear and Concise Reporting',
        description: 'We believe in full transparency and understand the importance of keeping you informed on the progress of your campaign, that’s<br> why we provide you with easy access to reporting dashboards and sheets so you can track it in real-time, this way you’ll never have to wonder how your campaign is doing.',
        
    },
};

let selectedContent = 'Insight-Driven'; // Default content

// Function to render navigation
const renderNavigation = () => {
    const navContainer = document.getElementById('content-navigation');
    navContainer.innerHTML = ''; // Clear existing items

    Object.keys(contentData).forEach(item => {
        const navItem = document.createElement('div');
        navItem.className = `pb-1 cursor-pointer ${selectedContent === item ? 'active' : ''}`;
        navItem.innerHTML = `<h1 class="text-[16px] md:text-[20px]">${item}</h1>`;
        navItem.onclick = () => handleItemClick(item);
        navContainer.appendChild(navItem);
    });
};

// Function to handle item click
const handleItemClick = (item) => {
    selectedContent = item;
    renderContent();
    renderNavigation();
};

// Function to render content
const renderContent = () => {
    const contentDisplay = document.getElementById('content-display');
    const currentContent = contentData[selectedContent];

    // Fade out the content before updating
    contentDisplay.classList.remove('content-show');
    
    setTimeout(() => {
        contentDisplay.innerHTML = `
            <div class="flex items-start mb-5">
                <div class="mr-4 text-[30px]">${currentContent.icon}</div>
                <h1 class="text-[20px] md:text-[20px] font-bold " style="line-height: 1.5;">${currentContent.title}</h1>
            </div>
            <p class="text-[16px] md:text-[18px]" style="line-height: 1.5;">${currentContent.description}</p>
        `;
        // Fade in the new content
        contentDisplay.classList.add('content-show');
    }, 500); // Adjust the timeout duration to match the CSS transition
};

// Initial rendering
renderNavigation();
renderContent();
