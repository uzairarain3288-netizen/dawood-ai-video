const videos = [
  {
    title: "Main Khud Anjanam (Ost)",
    category: "Thriller",
    description: "⚡ Get ready for an intense hacking thriller filled with suspense, action, mystery, and unexpected twists!",
    thumbnail: "img/ost.jpeg",
    youtube: "https://youtu.be/eDuJW_o5s14?si=hXKMzwoilvkjtYpJ"
  },
 ];

const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("search");
const emptyMessage = document.getElementById("emptyMessage");

function renderVideos(searchTerm = "") {
  const filteredVideos = videos.filter(video =>
    `${video.title} ${video.category} ${video.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  videoGrid.innerHTML = filteredVideos.map(video => `
    <article class="video-card">
      <a
        class="thumbnail"
        href="${video.youtube}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch ${video.title} on YouTube"
      >
        <img
          src="${video.thumbnail}"
          alt="${video.title}"
          loading="lazy"
        >
        <span class="play-icon" aria-hidden="true">▶</span>
      </a>

      <div class="card-content">
        <span class="category">${video.category}</span>
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <a
          class="watch-btn"
          href="${video.youtube}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Full Video on YouTube ↗
        </a>
      </div>
    </article>
  `).join("");

  emptyMessage.hidden = filteredVideos.length !== 0;
}

searchInput.addEventListener("input", event => {
  renderVideos(event.target.value.trim());
});

renderVideos();