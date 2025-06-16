import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import Image from "next/image";

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
          <div className="text-lg xl:text-xl 2xl:text-3xl text-slate-300 leading-relaxed xl:leading-relaxed 2xl:leading-relaxed space-y-6 xl:space-y-8 2xl:space-y-10 font-inter">
            <p>
              Aydın&apos;da yaşıyor, 10 senedir{" "}
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
              <em>&quot;CSS&quot;</em>&apos;in tüm gelişimine tanıklık ettim ve
              çeşitli <em>&quot;pre-processor&quot;</em> ya da{" "}
              <em>&quot;framework&quot;</em>&apos;ler ile deneyim kazandım.{" "}
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
              <div className="text-indigo-300 font-medium flex items-center gap-2 xl:gap-3 2xl:gap-4 text-lg xl:text-xl 2xl:text-2xl">
                <HiOutlineMail className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8" />
                erdem [at] erdemuslu [dot] com
              </div>
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
    </main>
  );
}
