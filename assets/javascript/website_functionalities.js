document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header');
    const logo = document.getElementById('logo');
    const menuItems = document.querySelectorAll('.menu-item');
    const locationsContainer = document.getElementById('locations-container');

    // Initialize AOS (Animate On Scroll)
    AOS.init();

    // Fetch data from combined blog.json
    fetch("blog.json")
        .then((response) => response.json())
        .then((data) => {
            // Generate blog posts
            const blogContainer = document.getElementById("blog-container");
            data.slice(0, 3).forEach((blog) => {
                const blogPost = document.createElement("div");
                blogPost.classList.add(
                    "bg-white",
                    "rounded-lg",
                    "overflow-hidden",
                    "cursor-pointer",
                    "border",
                    "border-grey",
                    "hover-shadow",
                    "hover:border-none",
                    "p-2"
                );

                blogPost.innerHTML = `
            <div data-aos="fade-down">
              <img class="w-full h-48 object-cover rounded-t-lg" src="${blog.image}" alt="${blog.title}">
              <div class="p-6">
                <h2 class="text-2xl text-black font-bold mb-2">${blog.title}</h2>
                <p class="text-gray-700 mb-4">${blog.description}</p>
                <a href="${blog.link}" class="text-indigo-500 hover:text-indigo-700 font-bold">Read More &rarr;</a>
              </div>
            </div>
          `;

                // Append blog post to the container
                blogContainer.appendChild(blogPost);
            });

        })
        .catch((error) => console.error("Error fetching data:", error));

    // Fetch data from combined data.json
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            // Generate buttons
            const buttonContainer = document.getElementById("button-container");

            data.buttons.forEach((button) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.setAttribute("data-aos", button.animation);
                btn.className = "bg-white py-2 px-4 rounded shadow-lg focus:outline-none";

                // Get current time for the location
                const currentTime = getCurrentTime(getTimeZone(button.location));

                // Set button content with label, location, and current time
                btn.innerHTML = `<span>${button.label}</span> ${button.location}: ${currentTime}`;

                // Append button to the container
                buttonContainer.appendChild(btn);
            });

            data.location.forEach((location) => {
                const locationDiv = document.createElement('div');
                locationDiv.className = " min-w-[200px]  rounded-lg  relative ";
                
                locationDiv.innerHTML = `
                    <div class="rounded-lg " style="background-color: ${location.bgColor}; height: 100px; position: absolute; width: 100%; bottom: 130px;"></div>
                    <img src="${location.imgSrc}" class="rounded-lg h-[200px] absolute" data-aos="fade-down"/>
                    <p class="text-white mt-[214px] location-title">${location.country}</p>
                    <p class="text-white mt-[10px] mb-[5px]">${location.address}</p>
                    <p class="text-[#ff9213]">${location.phone}</p>
                `;
                
                // Append each location to the parent container
                locationsContainer.appendChild(locationDiv);
            });
        });

    // Function to get time zone based on location
    function getTimeZone(location) {
        switch (location) {
            case "UK":
                return "Europe/London";
            case "India":
                return "Asia/Kolkata";
            case "USA":
                return "America/New_York"; // Eastern Time
            case "UAE":
                return "Asia/Dubai";
            default:
                return "UTC"; // Default to UTC if location is not matched
        }
    }

    // Function to get current time in the given time zone
    function getCurrentTime(timeZone) {
        return new Intl.DateTimeFormat('en-US', {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).format(new Date());
    }


    window.addEventListener('scroll', function () {

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logo.src = './assets/images/logoBlack.png'; // Update logo src for scrolled state
        } else {
            header.classList.remove('scrolled');
            logo.src = './assets/images/logo.png'; // Revert logo src for default state
        }

    });

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            header.classList.add('scrolled');
            logo.src = './assets/images/logoBlack.png'; // Add scrolled class on hover
        });
        item.addEventListener('mouseout', function () {
            if (window.scrollY <= 50) {
                header.classList.remove('scrolled');
                logo.src = './assets/images/logo.png'; // Remove scrolled class if not scrolling
            }
        });
    });


});



