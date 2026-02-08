fetch("http://localhost:5000/api/courses")
.then(res => res.json())
.then(data => {
  courses.innerHTML = data.map(c => `
    <div class="course-card">
      <h3>${c.title}</h3>
      <iframe src="${c.video}" allowfullscreen></iframe>
    </div>
  `).join("");
});
