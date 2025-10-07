// Data Siswa
const nama = ["Asep", "Iwan", "Cepi", "Agus", "Dadang"];
const tugas = [80, 75, 70, 65, 60];
const uts = [95, 75, 80, 40, 70];
const uas = [85, 90, 90, 55, 60];

// menghitung Nilai Akhir (NA)
// Rumus: NA = 40% Tugas + 30% UTS + 30% UAS
function hitungNA(nilaiTugas, nilaiUTS, nilaiUAS) {
    return (0.4 * nilaiTugas) + (0.3 * nilaiUTS) + (0.3 * nilaiUAS);
}

//  menampilkan tabel
function tampilkanTabel() {
    const tbody = document.getElementById('tabelBody');
    let html = '';
    
    for (let i = 0; i < nama.length; i++) {
        const na = hitungNA(tugas[i], uts[i], uas[i]);
        
        html += `
            <tr>
                <td align="center">${i + 1}</td>
                <td>${nama[i]}</td>
                <td align="center">${tugas[i]}</td>
                <td align="center">${uts[i]}</td>
                <td align="center">${uas[i]}</td>
                <td align="center">${na.toFixed(1)}</td>
            </tr>
        `;
    }
    
    tbody.innerHTML = html;
}

tampilkanTabel();
