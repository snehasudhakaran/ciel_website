document.addEventListener("DOMContentLoaded", function () {

    // Initialize AOS (Animate On Scroll)

    // Fetch data from combined blog.json
    fetch("blog.json")
        .then((response) => response.json())
        .then((data) => {
            // Generate blog posts
            const blogContainer = document.getElementById("blog-container");
            data.forEach((blog) => {
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

    })