
import React, { useState } from 'react';

const portfolioData = [
  {
    title: "브랜드 리뉴얼 - 카페 체인",
    category: "브랜딩",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&q=80",
    description: "유명 카페 체인의 브랜드 아이덴티티 리뉴얼 및 웹사이트 리디자인"
  },
  {
    title: "이커머스 플랫폼",
    category: "웹 개발",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "패션 스타트업을 위한 맞춤형 이커머스 플랫폼 구축 및 디자인"
  },
  {
    title: "모바일 앱 디자인",
    category: "UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: "건강관리 서비스를 위한 직관적인 모바일 앱 인터페이스 디자인"
  },
  {
    title: "기업 브랜딩",
    category: "브랜딩",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "IT 컨설팅 회사의 전체 브랜드 아이덴티티 개발 및 웹사이트 구축"
  },
  {
    title: "마케팅 사이트",
    category: "웹 개발",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800&q=80",
    description: "신제품 출시를 위한 맞춤형 랜딩 페이지 및 마케팅 사이트 개발"
  },
  {
    title: "UX 리서치 & 디자인",
    category: "UI/UX",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    description: "금융 서비스 앱을 위한 사용자 경험 연구 및 인터페이스 개선"
  },
];

const categories = ["전체", "웹 개발", "UI/UX", "브랜딩"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("전체");
  
  const filteredProjects = activeCategory === "전체" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            주목할 만한 <span className="text-primary">프로젝트</span>
          </h2>
          <p className="text-lg text-gray-600">
            다양한 산업 분야의 클라이언트와 협업하며 탁월한 결과물을 제공한 
            대표적인 프로젝트를 소개합니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-200 text-sm mt-1">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-flex items-center space-x-2 text-primary font-medium hover:underline"
          >
            <span>나만의 프로젝트에 대해 상담하기</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
