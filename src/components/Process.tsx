
import React from 'react';

const processSteps = [
  {
    number: "01",
    title: "조사 및 발견",
    description: "비즈니스 목표와 사용자 요구를 깊이 이해하기 위한 철저한 리서치를 진행합니다."
  },
  {
    number: "02",
    title: "전략 수립",
    description: "수집한 인사이트를 바탕으로 프로젝트의 목표 달성을 위한 명확한 방향성과 전략을 수립합니다."
  },
  {
    number: "03",
    title: "디자인 개발",
    description: "사용자 경험을 중심으로 브랜드 아이덴티티에 부합하는 시각적으로 매력적인 디자인을 제작합니다."
  },
  {
    number: "04",
    title: "구현 및 개발",
    description: "최신 기술과 업계 표준을 활용하여 고품질의 웹사이트 또는 애플리케이션을 구축합니다."
  },
  {
    number: "05",
    title: "테스트 및 최적화",
    description: "모든 기기에서 원활하게 작동하고 최상의 성능을 발휘하도록 철저한 테스트와 최적화를 진행합니다."
  },
  {
    number: "06",
    title: "출시 및 지원",
    description: "성공적인 출시 이후에도 지속적인 유지보수와 기술 지원을 제공하여 장기적인 성과를 보장합니다."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">효율적인 작업</span> 프로세스
          </h2>
          <p className="text-lg text-gray-600">
            프로젝트의 성공적인 완료를 위한 체계적이고 투명한 작업 과정을 
            통해 최상의 결과물을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <span className="absolute -top-6 text-6xl font-bold text-gray-100 select-none">
                {step.number}
              </span>
              <h3 className="text-xl font-bold mb-4 pt-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
