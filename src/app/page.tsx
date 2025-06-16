"use client";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// Yılan oyunu bileşeni
function SnakeGame() {
  const GRID_SIZE = 20;
  const GAME_SIZE = 400;
  const GRID_COUNT = GAME_SIZE / GRID_SIZE;

  const [gameState, setGameState] = useState("idle"); // 'idle', 'playing', 'gameOver'
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: 1 });
  const [score, setScore] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [currentGridSize, setCurrentGridSize] = useState(GRID_SIZE);

  // 4K ekranlar için responsive grid boyutu
  const getResponsiveGridSize = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1536) {
      // 2xl breakpoint
      return GRID_SIZE * 2; // 4K'da grid boyutunu 2 katına çıkar
    }
    return GRID_SIZE;
  };

  // Ekran boyutu değişikliklerini dinle
  useEffect(() => {
    const updateGridSize = () => {
      setCurrentGridSize(getResponsiveGridSize());
    };

    updateGridSize(); // İlk yükleme
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  // Rastgele yemek pozisyonu
  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_COUNT),
      y: Math.floor(Math.random() * GRID_COUNT),
    };
  }, [GRID_COUNT]);

  // Oyunu başlat
  const startGame = () => {
    setGameState("playing");
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 0, y: 1 });
    setScore(0);
  };

  // Oyunu sıfırla
  const resetGame = () => {
    setGameState("idle");
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 0, y: 1 });
    setScore(0);
  };

  // Klavye kontrolü
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState !== "playing") return;

      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, gameState]);

  // Oyun döngüsü
  useEffect(() => {
    if (gameState !== "playing") return;

    const gameLoop = setInterval(() => {
      setSnake((currentSnake) => {
        const newSnake = [...currentSnake];
        const head = { ...newSnake[0] };

        head.x += direction.x;
        head.y += direction.y;

        // Duvardan geçiş (wrap around)
        if (head.x < 0) head.x = GRID_COUNT - 1;
        if (head.x >= GRID_COUNT) head.x = 0;
        if (head.y < 0) head.y = GRID_COUNT - 1;
        if (head.y >= GRID_COUNT) head.y = 0;

        // Kendine çarpışma kontrolü
        if (
          newSnake.some(
            (segment) => segment.x === head.x && segment.y === head.y
          )
        ) {
          setGameState("gameOver");
          return currentSnake;
        }

        newSnake.unshift(head);

        // Yemek yeme kontrolü
        if (head.x === food.x && head.y === food.y) {
          setScore((prev) => prev + 10);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoop);
  }, [direction, food, gameState, generateFood]);

  return (
    <div
      className="fixed bottom-4 right-4 w-[400px] h-[400px] 2xl:w-[800px] 2xl:h-[800px] bg-black/80 backdrop-blur-sm rounded-lg border border-indigo-500/30 hidden xl:block z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dikkat çekici animasyon */}
      {gameState === "idle" && !isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl 2xl:text-8xl animate-bounce mb-4">🐍</div>
            <div className="text-indigo-300 text-sm 2xl:text-lg animate-pulse">
              Yılan Oyunu
            </div>
          </div>
        </div>
      )}

      {/* Hover durumunda başla butonu */}
      {gameState === "idle" && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={startGame}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 2xl:px-12 2xl:py-6 rounded-lg font-bold text-lg 2xl:text-2xl transition-colors duration-300 animate-pulse"
          >
            🐍 Başla
          </button>
        </div>
      )}

      {/* Oyun alanı */}
      {gameState === "playing" && (
        <div className="relative w-full h-full">
          {/* Skor */}
          <div className="absolute top-2 left-2 text-white text-sm 2xl:text-xl font-bold z-10">
            Skor: {score}
          </div>

          {/* Oyun grid'i */}
          <div className="relative w-full h-full">
            {/* Grid çizgileri */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Dikey çizgiler */}
              {Array.from({ length: GRID_COUNT + 1 }).map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute bg-white/5"
                  style={{
                    left: i * currentGridSize,
                    top: 0,
                    width: 1,
                    height: "100%",
                  }}
                />
              ))}
              {/* Yatay çizgiler */}
              {Array.from({ length: GRID_COUNT + 1 }).map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute bg-white/5"
                  style={{
                    left: 0,
                    top: i * currentGridSize,
                    width: "100%",
                    height: 1,
                  }}
                />
              ))}
            </div>

            {/* Yılan */}
            {snake.map((segment, index) => (
              <div
                key={index}
                className={`absolute ${
                  index === 0 ? "bg-green-400" : "bg-green-600"
                } rounded-sm`}
                style={{
                  left: segment.x * currentGridSize,
                  top: segment.y * currentGridSize,
                  width: currentGridSize - 1,
                  height: currentGridSize - 1,
                }}
              />
            ))}

            {/* Yemek */}
            <div
              className="absolute bg-red-500 rounded-full animate-pulse"
              style={{
                left: food.x * currentGridSize + 2,
                top: food.y * currentGridSize + 2,
                width: currentGridSize - 4,
                height: currentGridSize - 4,
              }}
            />
          </div>
        </div>
      )}

      {/* Game Over ekranı */}
      {gameState === "gameOver" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90">
          <div className="text-center">
            <div className="text-red-500 text-4xl 2xl:text-6xl mb-4">💀</div>
            <div className="text-white text-xl 2xl:text-3xl mb-2">
              Oyun Bitti!
            </div>
            <div className="text-indigo-300 2xl:text-xl mb-4">
              Skor: {score}
            </div>
            <button
              onClick={resetGame}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 2xl:px-8 2xl:py-3 rounded-lg font-bold 2xl:text-lg transition-colors duration-300"
            >
              Tekrar Oyna
            </button>
          </div>
        </div>
      )}

      {/* Kontrol ipuçları */}
      {gameState === "playing" && (
        <div className="absolute bottom-2 right-2 text-xs 2xl:text-base text-gray-400">
          ↑↓←→ ile kontrol et
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900">
      <div className="px-8 xl:px-16 2xl:px-24 py-16 xl:py-24 2xl:py-32 max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        {/* Hero Section */}
        <section className="mb-16 xl:mb-24 2xl:mb-32">
          <h1 className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-2 xl:mb-4 2xl:mb-6 font-serif">
            Erdem Uslu
          </h1>
          <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-indigo-300 mb-8 xl:mb-12 2xl:mb-16 font-sans">
            Frontend Developer
          </h2>
        </section>

        {/* About Section */}
        <section className="mb-16 xl:mb-24 2xl:mb-32">
          <div className="text-md xl:text-lg 2xl:text-3xl text-slate-300 leading-relaxed xl:leading-relaxed 2xl:leading-relaxed space-y-6 xl:space-y-8 2xl:space-y-10 font-inter">
            <p>
              Yaklaşık olarak 10 senedir{" "}
              <em>&quot;frontend development&quot;</em> alanında uzmanlaşmış bir
              yazılım geliştiricisiyim. <em>&quot;JavaScript&quot;</em> ve{" "}
              <em>&quot;TypeScript&quot;</em> teknolojilerini temel alarak,
              modern web ve mobil uygulamaları geliştiriyorum. Şu anda{" "}
              <a
                href="https://ikas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-300 inline-flex items-center"
                style={{ gap: "2px" }}
              >
                <Image
                  src="/ikas-logo.webp"
                  alt="ikas"
                  width={32}
                  height={32}
                  className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-sm"
                />
                <span
                  style={{ color: "#dfff37" }}
                  className="text-lg xl:text-xl 2xl:text-2xl font-medium"
                >
                  ikas
                </span>
              </a>{" "}
              bünyesinde çalışarak, e-ticaret ekosisteminin geliştirilmesine
              katkıda bulunuyorum.
            </p>
            <p>
              <em>&quot;CSS&quot;</em>&apos;in tüm gelişimine tanıklık etmekle
              birlikte çeşitli <em>&quot;pre-processor&quot;</em> ya da{" "}
              <em>&quot;framework&quot;</em>&apos;ler ile de deneyim kazandım.{" "}
              <em>&quot;Styled Components&quot;</em>,{" "}
              <em>&quot;Tailwind CSS&quot;</em>, <em>&quot;SCSS&quot;</em> ve{" "}
              <em>&quot;Less&quot;</em> gibi araçlarla çalışma fırsatı
              yakaladım. Bu çeşitli <em>&quot;styling&quot;</em> yaklaşımları,
              projelerime en uygun tasarım çözümlerini seçebilme yetkinliği
              kazandırdı.
            </p>
            <p>
              Kariyerim boyunca <em>&quot;React&quot;</em> ve{" "}
              <em>&quot;React Native&quot;</em> ile çok sayıda proje
              geliştirdim, <em>&quot;Node.js&quot;</em> (
              <em>&quot;Express&quot;</em>, <em>&quot;Koa&quot;</em>) ile
              backend çözümleri ürettim. Ayrıca <em>&quot;Next.js&quot;</em>,{" "}
              <em>&quot;Vue&quot;</em> ve <em>&quot;Nuxt&quot;</em> gibi modern{" "}
              <em>&quot;framework&quot;</em>&apos;lerle de kapsamlı deneyim
              sahibiyim. Bu geniş teknoloji yelpazesi,{" "}
              <em>&quot;end-to-end&quot;</em> çözümler geliştirebilmemi
              sağlıyor.
            </p>
          </div>
        </section>

        {/* Links Section */}
        <section>
          <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-4 xl:mb-6 2xl:mb-8 font-serif">
            Bağlantılar
          </h2>
          <div className="space-y-3 xl:space-y-4 2xl:space-y-6">
            <div>
              <a
                href="mailto:erdem@erdemuslu.com"
                className="text-indigo-300 hover:text-indigo-200 font-medium transition-colors duration-300 underline underline-offset-4 hover:underline-offset-2 flex items-center gap-2 xl:gap-3 2xl:gap-4 text-lg xl:text-xl 2xl:text-2xl"
              >
                <HiOutlineMail className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                erdem [at] erdemuslu [dot] com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 xl:gap-8 2xl:gap-10">
              <a
                href="https://github.com/erdemuslu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white font-medium transition-colors duration-300 underline underline-offset-4 hover:underline-offset-2 flex items-center gap-2 xl:gap-3 2xl:gap-4 text-lg xl:text-xl 2xl:text-2xl"
              >
                <FaGithub className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/erdem-uslu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white font-medium transition-colors duration-300 underline underline-offset-4 hover:underline-offset-2 flex items-center gap-2 xl:gap-3 2xl:gap-4 text-lg xl:text-xl 2xl:text-2xl"
              >
                <FaLinkedin className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                LinkedIn
              </a>
              <a
                href="https://medium.com/@erdemuslu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white font-medium transition-colors duration-300 underline underline-offset-4 hover:underline-offset-2 flex items-center gap-2 xl:gap-3 2xl:gap-4 text-lg xl:text-xl 2xl:text-2xl"
              >
                <FaMedium className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                Medium
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Yılan Oyunu */}
      <SnakeGame />
    </main>
  );
}
