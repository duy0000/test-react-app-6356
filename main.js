const tbody = document.getElementById("log-body");

learningLog.forEach((item) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.date}</td>
    <td>${item.topic}</td>
    <td>${item.content}</td>
    <td>${item.time}</td>
    <td>${item.status}</td>
    <td>${item.note}</td>
  `;
  tbody.appendChild(tr);
});
