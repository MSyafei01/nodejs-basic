    /**
     * Membaca teks dari input.txt (chunk 15 karakter)
     * lalu menuliskannya ke output.txt dengan setiap chunk dipisah baris baru.
     */

    const fs   = require('fs');
    const path = require('path');

    // Path absolut menggunakan path.resolve
    const inputPath  = path.resolve(__dirname, 'input.txt');
    const outputPath = path.resolve(__dirname, 'output.txt');

    /* ---------- Readable Stream (15 karakter per chunk) ----------- */
    const readable = fs.createReadStream(inputPath, {
    encoding:    'utf8',      // string, bukan Buffer
    highWaterMark: 15        // 15 karakter per chunk
    });

    /* ---------- Writable Stream --------------------------------- */
    const writable = fs.createWriteStream(outputPath);

    /* ---------- Data handling: tambah newline lalu tulis -------- */
    readable.on('data', (chunk) => {
    const toWrite = chunk + '\n';   // pisahkan tiap bagian dengan baris baru
    writable.write(toWrite);
    });

    /* ---------- Ketika selesai membaca -------------------------- */
    readable.on('end', () => {
    writable.end();                 // tutup writable setelah semua data ditulis
    });

    /* ---------- Error handling --------------------------------- */
    readable.on('error', (err) => {
    console.error(`Error saat membaca ${inputPath}:`, err.message);
    });

    writable.on('error', (err) => {
    console.error(`Error saat menulis ke ${outputPath}:`, err.message);
    });

    /* ---------- Finish notification ----------------------------- */
    writable.on('finish', () => {
    console.log(
        `✅ Berhasil menyalin data dari ${inputPath} ke ${outputPath}\n` +
        `Setiap 15 karakter dipisah baris baru.`
    );
    });