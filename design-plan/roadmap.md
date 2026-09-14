# Rencana Redesain Website BMB Space

Dokumen ini berisi roadmap dan arah desain baru agar website BMB Space tampil lebih modern, berkarakter, dan memiliki konversi tinggi (tidak polos/kaku).

---

## 1. Visi Desain Baru
* **Style:** Modern Professional Tech-Forward (perpaduan startup modern + kredibilitas legal/korporat).
* **Konsep Utama:** Bento Grid layout, visual depth (ambient glow, glassmorphism halus), dan tipografi yang kuat.

---

## 2. Fase Pembaruan (Roadmap)

### Fase 1: Fondasi Visual & Tipografi
- [ ] Ganti tipografi headline ke font yang lebih tegas & berkarakter (`Plus Jakarta Sans` / `Cabinet Grotesk`).
- [ ] Atur ulang palet warna dan efek aksen di `tailwind.config.js`:
  - Tambahkan warna aksen glow (`primary/10`, subtle teal gradient).
  - Tambahkan border glow dan glassmorphism utilities.

### Fase 2: Hero Section & Trust Element
- [ ] Ubah hero menjadi 2-kolom dinamis atau layout bento:
  - Sisi kiri: Headline punchy + CTA ganda (Konsultasi & Simulasi) + Social proof badge mengambang.
  - Sisi kanan: Interactive visual card (preview fasilitas kantor dengan live status / floating testimonial).
- [ ] Client logo marquee / partner strip (infinite ticker) di bawah hero agar langsung membangun kepercayaan.

### Fase 3: Layout Bento Grid (Keunggulan & Layanan)
- [ ] Rombak section "Mengapa Memilih Kami" dari 4 kotak seragam menjadi **Bento Grid**:
  - Box 1 (Besar): Lokasi strategis dengan visual map mini.
  - Box 2 (Sedang): Live counter 500+ klien aktif & legalitas resmi.
  - Box 3 (Sedang): Fasilitas lengkap (meeting room, internet kencang, resepsionis).
  - Box 4 (Kecil/Highlight): Fitur RDTR & Zonasi Bisnis Bogor.
- [ ] Card services interaktif dengan hover micro-interaction (glow border & subtle zoom).

### Fase 4: Fitur Interaktif & Konversi
- [ ] **Interactive Cost Calculator**: Slider / toggle kebutuhan (Virtual Office + Pembuatan PT + Ruang Meeting) dengan kalkulasi estimasi harga instan.
- [ ] **Interactive Pricing Switch**: Toggle paket Bulanan vs Tahunan dengan badge diskon hemat.
- [ ] **Quick WhatsApp Selector**: Pop-up / drawer tombol WA yang langsung mengarahkan pesan sesuai kebutuhan (Legalitas / VO / Sewa Ruangan).

### Fase 5: Halaman Detail & Dark Mode Refinement
- [ ] Pembersihan copy Lorem Ipsum pada halaman-halaman layanan (`workspace`, `legal-setup`, `accounting-tax`).
- [ ] Polishing dark mode kontras tinggi agar transisi terang-gelap terlihat konsisten di semua komponen.
