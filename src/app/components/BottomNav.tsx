export default function BottomNav () {    
    return(  
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
    )
}