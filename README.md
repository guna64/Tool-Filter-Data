# CRM Tool

Sistem sederhana berbasis antarmuka web statis untuk memfilter data tenor pelanggan.

## Tentang
Aplikasi ini memungkinkan pengguna untuk memfilter data pelanggan yang memiliki **Sisa Tenor antara 1 hingga 3 bulan** dan berstatus **CREDIT**. Proses filtering dilakukan secara instan di peramban (browser) menggunakan `xlsx.js` tanpa perlu mengirim data sensitif ke server.

**Fitur Utama**:
- **Filter Data Tenor**: Membaca file `.xlsx`/`.csv` dan otomatis memfilter pelanggan berdasarkan tanggal permohonan dan sisa tenor.
- **Unduh Hasil**: Hasil filtering bisa langsung diunduh dalam format `.xlsx`.
- **Privasi Terjamin**: Semua proses pengolahan data murni dilakukan di dalam browser, jadi file Excel pelanggan tidak pernah diunggah/tersimpan di server mana pun.

## Struktur Project
- `index.html`: Tampilan antarmuka utama.
- `coming-soon.html`: Tampilan antarmuka untuk fitur yang masih dalam tahap pengembangan.
- `server.js`: Script backend sederhana berbasis Express.js (jika ingin dijalankan dengan Node.js).
- `package.json`: Konfigurasi dependensi Node.js.

## Cara Menjalankan Aplikasi di Development
Jika Anda hanya ingin mencoba aplikasinya di komputer lokal, Anda bisa secara langsung mengklik 2x (double click) file `index.html` dan browser akan menyajikannya untuk Anda.

## Cara Menjalankan di Production (VPS dengan PM2)

Ada dua metode mudah untuk mem-hosting aplikasi ini di VPS menggunakan PM2:

### Metode 1: Fitur Bawaan PM2 (Tanpa Node.js / Tanpa script server.js)
Gunakan pendekatan pertama ini karena sangat mudah dan cocok untuk aplikasi *Single Page Application* yang tidak memiliki API kustom sama sekali.

Masuk ke dalam direktori aplikasi di VPS Anda kemudian jalankan:
```bash
pm2 serve . 5000 --name "crm-tool" --spa
```
Aplikasi akan dijalankan menggunakan port `5000`.

### Metode 2: Menggunakan Express.js (Lebih fleksibel bila ditambah backend API)
Jika Anda berencana memperluas fitur CRM Tool ini dengan integrasi API, Webhook, atau database lain ke depannya, gunakan metode Express.js ini.

Pertama, di dalam direktori VPS tempat file-file ini berada, unduh Node modules yang diperlukan:
```bash
npm install
```

Kemudian, jalankan service Express dengan PM2:
```bash
pm2 start server.js --name "crm-tool"
```

## Memperbarui Port Server
Secara default, aplikasi (via Express) akan melayani permintaan di *Port 5000*. Anda bisa menyesuaikan port dengan mengatur file environment (misal via PM2 ecosystem) atau dengan mengubah baris `const PORT = process.env.PORT || 5000;` langsung pada file `server.js`.
