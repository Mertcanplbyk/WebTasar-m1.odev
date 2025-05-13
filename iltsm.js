document.getElementById("iletisimForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formData = {
    name,
    email,
    message
  };

  // Verileri localStorage'a kaydet
  let veriler = JSON.parse(localStorage.getItem("veriler")) || [];
  veriler.push(formData);
  localStorage.setItem("veriler", JSON.stringify(veriler));

  alert("Mesajınız başarıyla gönderildi!");
  this.reset();
});