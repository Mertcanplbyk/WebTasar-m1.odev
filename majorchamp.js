// Takımlar listesi
const takimlar = [
  "Eternal Fire", 
  "Team Liquid", 
  "Vitality", 
  "Natus Vincere (NaVi)", 
  "FaZe Clan"
];

// Fisher-Yates Shuffle algoritması ile takımları karıştırıyoruz
function karistir(takimlar) {
  for (let i = takimlar.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [takimlar[i], takimlar[j]] = [takimlar[j], takimlar[i]]; // Swap işlemi
  }
}

// Takımları listeye ekleyen fonksiyon
function takimlariGoster() {
  const takimlarListesi = document.getElementById("takimlar-listesi");
  takimlarListesi.innerHTML = ""; // Önceki listeyi temizle
  takimlar.forEach(takim => {
    const li = document.createElement("li");
    li.textContent = takim;
    takimlarListesi.appendChild(li);
  });
}

// Form gönderildiğinde oyunu başlatan fonksiyon
document.getElementById("sayiForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Sayfanın yenilenmesini engelle

  const sayi = parseInt(document.getElementById("sayi").value);
  
  // Takımları karıştır
  karistir(takimlar);

  // Şampiyon seçimi
  const majorSampiyonIndex = Math.floor(Math.random() * 5);
  const majorSampiyon = takimlar[majorSampiyonIndex];

  // Takımları güncelle
  takimlariGoster();

  // Kullanıcının tahminini kontrol et
  if (sayi >= 1 && sayi <= 5) {
    const tahminEdilenSampiyon = takimlar[sayi - 1];
    if (tahminEdilenSampiyon === majorSampiyon) {
      document.getElementById("sonuc").innerHTML = `Tebrikler! ${majorSampiyon} Major Şampiyonu oldu!`;
    } else {
      document.getElementById("sonuc").innerHTML = `Üzgünüm! ${majorSampiyon} Major Şampiyonu oldu. Bir sonraki şansınıza!`;
    }
  } else {
    document.getElementById("sonuc").innerHTML = "Lütfen 1 ile 5 arasında geçerli bir sayı girin!";
  }
});

// İlk başta takımları göstermek için
takimlariGoster();