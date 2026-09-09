import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const FloatingKakao: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-8 z-50 flex flex-col items-end gap-3">
      {/* 맨 위로 가기 버튼 */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-105"
          aria-label="맨 위로 가기"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* 전화 바로 걸기 (모바일 친화적) */}
      <a
        href={`tel:${COMPANY_INFO.tel}`}
        className="flex items-center gap-2.5 px-4 py-3 bg-white text-yaho-navy-900 rounded-full shadow-xl border border-slate-100 hover:bg-slate-50 transition-all hover:scale-105 group"
      >
        <div className="w-8 h-8 rounded-full bg-yaho-navy-900 text-white flex items-center justify-center">
          <Phone className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left pr-1">
          <span className="text-[11px] font-semibold text-slate-500 leading-none">빠른 전화 상담</span>
          <span className="text-sm font-bold text-yaho-navy-950 leading-tight">{COMPANY_INFO.tel}</span>
        </div>
      </a>

      {/* 카카오톡 1:1 상담 플로팅 버튼 (RFP 필수 구현) */}
      <a
        href={COMPANY_INFO.kakaoChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-5 py-3.5 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] rounded-full shadow-2xl transition-all hover:scale-105 group relative overflow-hidden"
      >
        <div className="w-9 h-9 rounded-full bg-[#3C1E1E] text-[#FEE500] flex items-center justify-center shadow-sm">
          <MessageCircle className="w-5 h-5 fill-current" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-semibold text-[#3C1E1E]/80 leading-none">실시간 1:1 문의</span>
          <span className="text-base font-extrabold text-[#191919] leading-tight">카카오톡 상담하기</span>
        </div>
      </a>
    </div>
  );
};
