
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Pixel<span className="text-primary">Craft</span>
            </h3>
            <p className="text-gray-400 mb-4">
              스타트업과 중소기업을 위한 웹 디자인 및 개발 솔루션을 제공하는
              디지털 에이전시입니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">서비스</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">웹사이트 제작</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">UI/UX 디자인</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">브랜드 전략</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">커스텀 개발</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">회사 정보</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">회사 소개</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors">포트폴리오</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">고객 후기</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">문의하기</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">연락처</h4>
            <address className="not-italic text-gray-400">
              <p>서울시 강남구 테헤란로 123</p>
              <p>디지털빌딩 8층</p>
              <p className="mt-3"><a href="mailto:info@pixelcraft.kr" className="hover:text-primary transition-colors">info@pixelcraft.kr</a></p>
              <p><a href="tel:+8210-1234-5678" className="hover:text-primary transition-colors">010-1234-5678</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} PixelCraft. 모든 권리 보유.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">개인정보처리방침</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
