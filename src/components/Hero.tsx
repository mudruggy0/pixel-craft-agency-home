
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        });
      }, 
      appearOptions
    );
    
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
    
    return () => {
      faders.forEach(fader => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="fade-in text-lg md:text-xl font-medium text-primary">
              디지털 도약을 위한 전략적 파트너
            </h2>
            <h1 className="fade-in delay-200 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">아이디어를</span> 
              <span className="block">완벽한 웹 경험으로</span>
              <span className="block">구현합니다</span>
            </h1>
            <p className="fade-in delay-400 text-lg md:text-xl text-gray-600 max-w-lg">
              스타트업, 중소기업, 프리랜서를 위한 맞춤형 웹 솔루션과 브랜딩 전략으로 
              귀사의 디지털 성공을 이끕니다.
            </p>
            <div className="fade-in delay-600 flex space-x-4 pt-4">
              <a 
                href="#contact" 
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all flex items-center space-x-2"
              >
                <span>무료 상담 문의</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="#services" 
                className="border border-gray-300 px-8 py-3 rounded-md hover:bg-gray-50 transition-all"
              >
                서비스 살펴보기
              </a>
            </div>
          </div>
          <div className="fade-in delay-400 relative hidden md:block">
            <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80" 
                alt="웹사이트 디자인 예시" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary opacity-10 rounded-full -z-10"></div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gray-200 opacity-70 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
