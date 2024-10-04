document.addEventListener("DOMContentLoaded", function () {

    // Initialize AOS (Animate On Scroll)
    AOS.init();

    // Fetch data from combined blog.json
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            // Generate blog posts
            const blogContainer = document.getElementById("blog-container");
            data.services.forEach((blog) => {
                const blogPost = document.createElement("div");
                blogPost.classList.add(
                    "bg-white",
                    "overflow-hidden",
                    "cursor-pointer",
                    "border",
                    "border-2",
                    "border-grey",
                    "hover-shadow",
                    "hover:border-none"
                );

                blogPost.innerHTML = `
            <div data-aos="fade-down">
              <img class="w-full h-48 object-cover " src="${blog.image}" alt="${blog.title}">
              <div class="p-6">
                <h2 class="text-2xl text-black font-bold mb-2">${blog.title}</h2>
                <p class="text-gray-700 ">${blog.description}</p>
              </div>
            </div>
          `;

                // Append blog post to the container
                blogContainer.appendChild(blogPost);
            });

        })
        .catch((error) => console.error("Error fetching data:", error));

    });