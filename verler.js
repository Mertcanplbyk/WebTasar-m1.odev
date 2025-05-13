const veriler = JSON.parse(localStorage.getItem("veriler")) || [];
const tbody = document.getElementById("veriTablosu");

veriler.forEach(veri => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${veri.name}</td>
    <td>${veri.email}</td>
    <td>${veri.message}</td>
  `;
  tbody.appendChild(row);
});