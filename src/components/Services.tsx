
import React from 'react';
import { Code, Palette, Layout, Globe } from 'lucide-react';

const servicesData = [
  {
    icon: <Layout className="w-10 h-10 text-primary" />,
    title: '웹사이트 제작',
    description: '반응형 웹사이트 디자인부터 커스텀 개발까지 비즈니스 목표에 맞춘 최적의 웹 경험을 제공합니다.'
  },
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: 'UI/UX 디자인',
    description: '사용자 경험을 중심으로 한 직관적이고 매력적인 인터페이스 디자인으로 방문자의 참여도를 높입니다.'
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: '브랜드 전략',
    description: '독특한 브랜드 아이덴티티 구축과 일관된 시각적 언어로 시장에서의 인지도와 신뢰도를 향상시킵니다.'
  },
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: '커스텀 개발',
    description: '귀사의 특별한 요구사항에 맞춰 맞춤형 기능과 솔루션을 개발하여 웹사이트의 효율성을 극대화합니다.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            비즈니스 성장을 위한 
            <span className="text-primary"> 디지털 솔루션</span>
          </h2>
          <p className="text-lg text-gray-600">
            스타트업부터 중소기업까지, 귀사의 목표와 비전에 맞춘 맞춤형 서비스를 제공합니다.
            클라이언트의 성공이 곧 저희의 성공입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
