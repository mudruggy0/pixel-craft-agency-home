
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기서 실제 폼 제출 로직이 구현될 수 있습니다
    console.log('Form data submitted:', formData);
    
    toast({
      title: "문의가 접수되었습니다",
      description: "빠른 시일 내에 답변 드리겠습니다.",
    });
    
    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">프로젝트</span>에 대해 이야기해 보세요
          </h2>
          <p className="text-lg text-gray-600">
            아이디어가 있으시다면 언제든지 문의해주세요. 
            귀사의 비즈니스 성장을 위한 최적의 솔루션을 제안해 드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">연락처</h3>
              <p className="text-gray-600 mb-6">
                궁금한 점이나 문의사항이 있으시면 아래 연락처로 연락주세요.
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-medium">이메일</h4>
                <a href="mailto:info@pixelcraft.kr" className="text-gray-600 hover:text-primary">
                  info@pixelcraft.kr
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-medium">전화</h4>
                <a href="tel:+8210-1234-5678" className="text-gray-600 hover:text-primary">
                  010-1234-5678
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MessageSquare size={24} className="text-primary mt-1" />
              <div>
                <h4 className="font-medium">상담 시간</h4>
                <p className="text-gray-600">
                  평일 오전 10시 - 오후 6시
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    이름 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="이메일을 입력하세요"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    문의 유형 <span className="text-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">문의 유형을 선택하세요</option>
                    <option value="웹사이트 제작">웹사이트 제작</option>
                    <option value="UI/UX 디자인">UI/UX 디자인</option>
                    <option value="브랜드 전략">브랜드 전략</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  메시지 <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="문의사항을 입력하세요"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90 transition-all"
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
