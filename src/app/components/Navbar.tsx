"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [focused, setFocused] = useState(false);

  return (
    <header className="fixed h-[60px] pl-2 left-1/2 -translate-x-1/2 w-[95%] max-w-sm bg-gradient-to-r from-purple-700 to-purple-500 flex items-center justify-between z-50 font-[Rajdhani] text-white">
      {/* Search Section */}
      <div className="flex flex-1 items-center max-w-[70%]">
        <form className="relative flex-1">
          <input
            type="text"
            placeholder=" "
            className="!ml-2 w-full !p-2 text-sm text-white outline-none bg-white"
            onFocus={() => setFocused(true)}
            onBlur={(e) => setFocused(e.target.value !== "" ? true : false)}
          />
          {/* Placeholder animasi */}
          {!focused && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2 flex items-center pointer-events-none text-sm text-white">
              <p className="mr-1">Cari&nbsp;</p>
              <div className="overflow-hidden h-5">
                <ul className="animate-slide">
                  <li>topup ff</li>
                  <li>topup mlbb</li>
                  <li>topup hok</li>
                </ul>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 ml-3 text-white text-lg">
        <Link href="https://auth.vcgamers.com?from=/chats">💬</Link>
        <Link href="https://auth.vcgamers.com?from=/cart">🛒</Link>
        <Link href="https://auth.vcgamers.com?from=/notification">🔔</Link>
      </div>
    </header>
  );
}
