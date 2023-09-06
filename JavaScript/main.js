// const axios = require("axios");

const cardsHolder = document.querySelector('section')

axios
	.get("https://tarmeezacademy.com/api/v1/posts?limit=50")
	.then(function (response) {
    let counter = response.data.data.length
    let arrFromObj = Array.from(response.data.data)
    for(let i = 0; i < counter; i++) {
      let hello = `
      <div class="container-sm pt-2 pb-2 ">
        <div class="posts col-lg-6 ms-auto me-auto">
          <div class="card shadow-sm ms-auto me-auto">
            <div class="card-header bg-primary-subtle">
              <img class="me-2 border border-3 border-light-subtle rounded-circle" src="${
								arrFromObj[i].author.profile_image
							}" alt="Profile">
              <b>${arrFromObj[i].author.username}</b>
            </div>

            <div class="card-body">
              <img class="w-100" src="${arrFromObj[i].image}" alt="">
              <p class="text-body-tertiary fs-6 mt-2">${
								arrFromObj[i].created_at
							}</p>
              <h5 class="card-title">${
								arrFromObj[i].title === null
									? "No Title For Showing"
									: arrFromObj[i].title
							}</h5>
              <p class="card-text fs-6">${arrFromObj[i].body}</p>
              <hr>
              <div class="comment d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                </svg>
                <p class="mb-0 ms-2">(${
									arrFromObj[i].comments_count
								}) comments</p>
              </div>
            </div>
          </div>
        </div>
			</div>
      `;

      cardsHolder.innerHTML += hello;
    }
	})
	.catch(function (error) {
		console.log(error);
	})