const express = require('express');
const path = require('path');

const app = express();
// Gunakan port 5000 sesuai permintaan, atau port dari environment
const PORT = process.env.PORT || 5000;

// Menyajikan file statis dari folder saat ini (seperti index.html, coming-soon.html)
app.use(express.static(__dirname));

// Jika user mengakses rute yang tidak ada (fallback agar kembali ke index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Aplikasi berjalan di http://localhost:${PORT}`);
    console.log(`📁 Melayani file statis dari direktori: ${__dirname}`);
});
