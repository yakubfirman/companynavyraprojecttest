# 🚀 Navyra Studio - Company Profile (Technical Test)

## 📌 Deskripsi Proyek
Proyek ini adalah pengembangan website *Company Profile* berbasis kontrak (Technical Test). Website ini dirancang untuk menampilkan profil perusahaan yang profesional, dinamis, dan responsif. Mengambil inspirasi dari arsitektur UI/UX website Gojek, desain akan difokuskan pada tampilan yang *clean*, navigasi intuitif, tipografi yang tegas, serta performa *mobile-first*.

**Target Domain Deployment:** `http://navyrastudio.smartsense.my.id/`

---

## 🛠️ Stack Teknologi
- **Backend & Routing:** Laravel 13
- **Frontend & UI Components:** ReactJS
- **Styling:** Tailwind CSS
- **Database:** MySQL
- **State/Data Bridge:** Inertia.js (Direkomendasikan untuk menghubungkan Laravel dan React menjadi *Single Page Application* tanpa perlu konfigurasi API yang kompleks).

---

## 📂 Struktur Halaman & Konfigurasi SEO

Strategi SEO berfokus pada *crawlability*, *indexing*, dan struktur HTML semantik (Open Graph, Meta Tags, dan Schema Markup) untuk memastikan visibilitas maksimal di *search engine*.

### 1. Beranda (Home)
- **Tujuan:** *Landing page* utama yang merangkum *value proposition* perusahaan.
- **SEO Title:** `Navyra Studio - Solusi Digital Profesional & Inovatif`
- **SEO Desc:** `Navyra Studio menyediakan layanan teknologi digital terbaik. Temukan produk, layanan, dan event terbaru kami.`
- **Komponen Utama:** Hero Section (Gojek-style bold typography), *Quick links* ke servis, Testimoni.

### 2. Tentang Kami (About Us)
- **Tujuan:** Profil perusahaan, visi, misi, dan tim.
- **SEO Title:** `Tentang Kami | Navyra Studio`
- **SEO Desc:** `Pelajari lebih lanjut tentang perjalanan, visi, dan misi Navyra Studio dalam menghadirkan solusi teknologi yang berdampak nyata.`
- **Komponen Utama:** Sejarah perusahaan, *Milestone*, Nilai-nilai inti.

### 3. Produk / Servis (Products / Services)
- **Tujuan:** Katalog layanan atau produk yang ditawarkan.
- **SEO Title:** `Layanan & Produk Terbaik | Navyra Studio`
- **SEO Desc:** `Jelajahi berbagai produk dan layanan unggulan dari Navyra Studio yang dirancang untuk mendukung kebutuhan digital Anda.`
- **Komponen Utama:** *Grid layout* dengan *card design* (Tailwind) untuk setiap servis, *Call to Action* (CTA).

### 4. Kontak (Contact)
- **Tujuan:** Memudahkan klien untuk menghubungi perusahaan.
- **SEO Title:** `Hubungi Kami | Navyra Studio`
- **SEO Desc:** `Punya pertanyaan atau ingin berkolaborasi? Hubungi tim Navyra Studio sekarang juga.`
- **Komponen Utama:** Form kontak interaktif, Peta lokasi (Google Maps embed), Informasi email/telepon.

### 5. Events
- **Tujuan:** Menampilkan kegiatan, webinar, atau acara mendatang.
- **SEO Title:** `Event & Kegiatan Terbaru | Navyra Studio`
- **SEO Desc:** `Ikuti terus update event, seminar, dan kegiatan terbaru yang diselenggarakan oleh Navyra Studio.`
- **Komponen Utama:** Daftar event (*List/Grid*), Detail waktu & lokasi, Tombol registrasi.

### 6. Member Login
- **Tujuan:** Portal autentikasi bagi klien atau anggota.
- **SEO Title:** `Member Login | Navyra Studio`
- **SEO Desc:** `Masuk ke dashboard member Navyra Studio untuk mengelola layanan Anda.`
- **Komponen Utama:** Form Login aman (Email/Password), Fitur "Remember Me", link "Lupa Password". *(Halaman ini sebaiknya menggunakan tag `noindex` pada meta robot agar tidak terindeks publik).*

---

## 🎨 Panduan UI/UX (Gojek-Inspired)
1. **Warna Dominan:** Gunakan *palette* warna yang kontras. Misalnya, perpaduan hijau terang, hitam pekat, dan putih bersih untuk memberikan kesan modern dan *bold*.
2. **Tipografi:** Gunakan *font* sans-serif yang tegas (seperti *Inter* atau *Maison Neue* jika memungkinkan).
3. **Micro-interactions:** Manfaatkan Tailwind untuk efek *hover* yang mulus pada tombol dan kartu layanan.
4. **Layout:** Gunakan *grid* yang rapi dengan *padding/margin* yang proporsional (*whitespace* yang cukup).

---

## ⚙️ Ceklis Teknis Pengembangan

### Tahap 1: Setup & Konfigurasi
- [ ] Instalasi Laravel 13.
- [ ] Setup Inertia.js dengan React dan Tailwind CSS.
- [ ] Konfigurasi `.env` untuk koneksi MySQL database.

### Tahap 2: Database & Model
- [ ] Buat *migration* untuk tabel `users` (Login), `products`, dan `events`.
- [ ] Buat *seeder* untuk data *dummy* agar mudah saat *development*.

### Tahap 3: Pengembangan Frontend (React + Tailwind)
- [ ] Buat *Layout Provider* utama (Header/Navbar, Footer).
- [ ] Bangun komponen halaman sesuai struktur (Home, About, dll).
- [ ] Implementasi responsivitas (*mobile, tablet, desktop*).

### Tahap 4: Implementasi SEO
- [ ] Integrasi *Helmet* (di React) atau komponen *Head* (di Inertia) untuk injeksi Meta Tags dinamis per halaman.
- [ ] Buat `/sitemap.xml` dan `/robots.txt` dinamis dari sisi Laravel.

### Tahap 5: Deployment
- [ ] Persiapan *build* untuk *production* (`npm run build`).
- [ ] Konfigurasi web server (Nginx/Apache) di VPS/Hosting `http://navyrastudio.smartsense.my.id/`.
- [ ] Setup SSL/HTTPS (Direkomendasikan menggunakan Let's Encrypt setelah *deploy*).