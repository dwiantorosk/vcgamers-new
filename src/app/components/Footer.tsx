"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-2 bg-white !px-3 !py-5 !items-center !justify-between !pb-20">
      <div className="flex flex-col gap-7 !max-w-sm">
        <div>
          <img
            src="/media/footer-logo-vcg.webp"
            alt="logo-vcg"
            width={123}
            height={23}
            className="mb-3 object-cover"
          />
          <p className="text-xs font-medium text-shade-200 !mt-3">
            Tempat Top Up FF Termurah & Game Lainnya
          </p>
        </div>

        {/* Pembayaran */}
        <div>
          <p className="mb-2 text-sm font-bold text-shade-700">
            Pembayaran Lengkap
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {[
              "footer-logo-gopay.webp",
              "footer-logo-dana.webp",
              "footer-logo-shopee.webp",
              "footer-logo-ovo.webp",
            ].map((img, i) => (
              <img
                key={i}
                src={`/media/${img}`}
                alt={`logo-payment-${i}`}
                width={60}
                height={26}
                className="object-cover"
              />
            ))}
            <p className="text-xs font-bold text-shade-100">+20 Lainnya</p>
          </div>
        </div>

        {/* Informasi */}
        <div>
          <p className="mb-2 text-sm font-bold text-shade-700">Informasi</p>
          {[
            ["Tentang Kami", "/about"],
            ["Identitas Brand", "/about/story/brand-architecture/"],
            ["Pusat Bantuan", "/about/bantuan/"],
            ["Syarat dan Ketentuan", "/about/bantuan-docs/syarat-ketentuan/"],
            [
              "Kebijakan Privasi",
              "/about/bantuan-docs/kebijakan-privasi-produk-digital",
            ],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={`https://www.vcgamers.com${href}`}
              target="_blank"
            >
              <p className="mb-2 text-xs font-semibold text-shade-200">
                {label}
              </p>
            </Link>
          ))}
        </div>

        {/* Hubungi Kami */}
        <div>
          <p className="mb-2 text-sm font-bold text-shade-700">Hubungi Kami</p>
          <p className="mb-1 text-xs font-medium text-shade-200">
            Layanan Pengaduan konsumen
          </p>
          <Link
            href="https://wa.me/628159021021/?text=Hai%20VCGamers"
            className="mb-1 flex"
            target="_blank"
          >
            <img
              src="https://www.vcgamers.com/_next/static/media/icon-wa.a09194fc.svg"
              alt="icon-wa"
              width={16}
              height={16}
              className="object-cover"
            />
            <span className="ml-2 text-xs font-semibold text-shade-200">
              08159-021-021
            </span>
          </Link>
          <Link
            href="mailto:support@vcgamers.com"
            className="mb-1 flex"
            target="_blank"
          >
            <img
              src="https://www.vcgamers.com/_next/static/media/icon-mail.3230422e.svg"
              alt="icon-mail"
              width={16}
              height={16}
              className="object-cover"
            />
            <p className="ml-2 text-xs font-semibold text-shade-200">
              support@vcgamers.com
            </p>
          </Link>
          <p className="mt-2 text-xs font-medium text-shade-200">
            Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
            Kementerian Perdagangan RI : 0853-1111-1010
          </p>
        </div>

        {/* Aturan Pengguna */}
        <div>
          <p className="mb-2 text-sm font-bold text-shade-700">Aturan Pengguna</p>
          {[
            ["Pembeli", "/about/bantuan-docs/pengguna/"],
            ["Penjual", "/about/bantuan-docs/aturan-penjual/"],
            ["Mitra (Reseller)", "/about/bantuan-docs/syarat-ketentuan-mitra/"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={`https://www.vcgamers.com${href}`}
              target="_blank"
            >
              <p className="mb-2 text-xs font-semibold text-shade-200">
                {label}
              </p>
            </Link>
          ))}
        </div>

        {/* Lainnya */}
        <div>
          <p className="mb-2 text-sm font-bold text-shade-700">Lainnya</p>
          {[
            ["Komunitas", "https://discord.gg/xBW7Y7UjqD"],
            ["Berita Game", "https://www.vcgamers.com/news"],
            ["Menjadi Penjual", "https://www.vcgamers.com/about/menjadi-seller/"],
            ["Menjadi Mitra (Reseller)", "https://www.vcgamers.com/about/mitra/"],
            ["Karir", "https://career.vcgamers.com/"],
          ].map(([label, href]) => (
            <Link key={label} href={href} target="_blank">
              <p className="mb-2 text-xs font-semibold text-shade-200">{label}</p>
            </Link>
          ))}
        </div>

        {/* Ikuti Kami */}
        <div>
          <p className="mb-2 text-sm font-bold text-shade-700">Ikuti Kami di</p>
          <div className="flex flex-wrap items-center gap-2">
            {[
              ["https://www.instagram.com/vcgamers.id/", "Instagram"],
              ["https://www.facebook.com/vcgamersindonesia", "Facebook"],
              ["https://www.youtube.com/c/VCGamersIndonesia", "YouTube"],
              [
                "https://discord.com/invite/vcgamers-official-746336302777106534",
                "Discord",
              ],
              ["https://www.tiktok.com/@vcgamers.id?lang=id-ID", "TikTok"],
            ].map(([href, label]) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="text-medium-purple"
              >
                <span className="sr-only">{label}</span>
                <span>🔗</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Playstore + Copyright */}
        <div>
          <Link
            href="https://play.google.com/store/apps/details?id=com.vcgamers.apps&hl=id&pli=1"
            target="_blank"
          >
            <img
              src="/media/footer-logo-playstore.webp"
              alt="logo-playstore"
              width={128}
              height={42}
              className="mb-2 object-cover"
            />
          </Link>
          <p className="text-xs font-medium text-shade-200">
            Copyright ©2019 - 2025
          </p>
          <p className="text-xs font-medium text-shade-200">
            PT. Sotta Teknologi Indonesia - VCGamers All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
