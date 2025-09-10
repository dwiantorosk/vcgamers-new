"use client";
import Banner from "./components/Banner";
import React, { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Top Up Game");

  const games = {
    "Top Up Game": [
      { id: 1, name: "Free Fire", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
      { id: 2, name: "Mobile Legends", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
      { id: 3, name: "PUBG Mobile", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
      { id: 4, name: "Valorant", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
      { id: 5, name: "Genshin Impact", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
    ],
    "Aplikasi Live": [
      { id: 6, name: "Bigo Live", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
      { id: 7, name: "Mico", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
    ],
    "Voucher": [
      { id: 8, name: "Google Play", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
      { id: 9, name: "iTunes", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
    ],
    "Pulsa dan PLN": [
      { id: 10, name: "Pulsa Telkomsel", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
      { id: 11, name: "Token PLN", image: "https://cdn.vcgamers.com/brand/temp/65e7a877-862b-42ad-84a7-fbb62027cf59.png" },
    ],
  };

  const tabs = Object.keys(games);

  return (
    <>
      <main className="relative bg-gray-50 min-h-screen flex justify-center !top-14">
        <div className="w-full max-w-sm bg-white mx-auto relative min-h-screen pb-16">
          {/* Banner */}
          <Banner />

          {/* Section Gercep */}
          <div className="bg-white shadow-md p-4 mt-2 !mb-50">
            <div className="flex justify-between items-center !mt-3 !mb-4 !p-2">
              <h3 className="font-bold text-gray-800">
                ⚡ Gercep{" "}
                <p className="text-sm text-gray-500 !pl-6">
                  Lebih Cepat Lebih Mudah
                </p>
              </h3>
              <button className="text-purple-600 text-sm">Lihat Semua</button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 text-sm pb-2 overflow-x-auto !p-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-1 ${
                    activeTab === tab
                      ? "text-purple-600 font-bold border-b-2 border-purple-600"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Game List */}
            <div className="max-w-sm mt-4">
              <div className="grid grid-cols-4 gap-4 !mt-3 !mb-3">
                {games[activeTab].map((game) => (
                  <div key={game.id} className="text-center flex flex-col items-center">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-14 h-14 rounded-md"
                    />
                    <p className="text-xs !mt-2">{game.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer />

          {/* Bottom Navigation */}
          <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-inner flex justify-around items-center py-2 text-sm h-[60px] w-full max-w-sm">
            <div className="flex flex-col items-center">
              <span className="text-xl">🏠</span>
              <span className="text-sm">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl">🔥</span>
              <span className="text-sm">Promo</span>
            </div>
            <div className="flex flex-col items-center bg-purple-600 rounded-full !p-2 !-mt-5">
              <span className="text-xl">⚡</span>
              <span className="text-sm !text-white">Gercep</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl">📜</span>
              <span className="text-sm">Transaksi</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl">👤</span>
              <span className="text-sm">Akun</span>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
}
