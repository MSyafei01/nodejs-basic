// Simpan penggunaan memori awal
const initialMemoryUsage = process.memoryUsage().heapUsed;

// Isi dengan nama kamu
const yourName = "BAQI";

// Ambil environment dari variabel NODE_ENV atau fallback ke "development"
const environment = process.env.NODE_ENV || "development";

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

// Simpan penggunaan memori setelah looping
const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
