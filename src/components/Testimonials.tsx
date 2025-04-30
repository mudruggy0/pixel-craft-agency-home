
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "김지영",
    position: "패션 스타트업 대표",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "여러 웹 에이전시를 검토한 끝에 픽셀크래프트를 선택했고, 이는 최고의 결정이었습니다. 우리 브랜드의 정체성을 완벽하게 이해하고 그것을 웹사이트에 녹여내는 능력이 탁월했습니다. 덕분에 온라인 판매율이 40% 증가했습니다.",
    rating: 5
  },
  {
    id: 2,
    name: "이승호",
    position: "IT 솔루션 기업 마케팅 책임자",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    quote: "기술적 전문성과 창의적인 디자인 감각이 완벽하게 조화를 이룬 팀입니다. 특히 복잡한 기술 내용을 시각적으로 명확하게 전달하는 방식이 인상적이었습니다. 새로운 웹사이트 런칭 이후 리드 생성이 60% 증가했습니다.",
    rating: 5
  },
  {
    id: 3,
    name: "박현주",
    position: "식품 브랜드 창업자",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "한정된 예산에도 불구하고 최고 품질의 웹사이트를 제공해주셨습니다. 디자인뿐만 아니라 사용자 경험에 대한 깊은 이해가 돋보였습니다. 픽셀크래프트 팀은 단순히 서비스 제공자가 아닌 진정한 비즈니스 파트너였습니다.",
    rating: 4
  },
  {
    id: 4,
    name: "최태준",
    position: "교육 서비스 프리랜서",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "개인 브랜딩이 중요한 프리랜서로서, 저를 잘 표현할 수 있는 포트폴리오 사이트가 필요했습니다. 픽셀크래프트는 제 가치와 강점을 효과적으로 전달하는 웹사이트를 만들어주었고, 덕분에 더 많은 고객을 유치할 수 있었습니다.",
    rating: 5
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            고객이 말하는 <span className="text-primary">저희 서비스</span>
          </h2>
          <p className="text-lg text-gray-600">
            성공적인 프로젝트를 통해 저희와 함께한 고객들의 솔직한 후기를 확인하세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonials[currentIndex].rating ? "#FF3131" : "none"}
                        stroke={i < testimonials[currentIndex].rating ? "#FF3131" : "#CBD5E0"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12 relative flex flex-col">
                <blockquote className="text-lg italic text-gray-600 flex-grow">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex justify-between items-center mt-8">
                  <span className="text-sm text-gray-500">
                    {currentIndex + 1}/{testimonials.length}
                  </span>
                  <div className="flex space-x-3">
                    <button 
                      onClick={handlePrev}
                      className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
