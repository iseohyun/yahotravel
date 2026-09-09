import React from 'react';
import { MapPin, Calendar, Check, ArrowRight, Eye } from 'lucide-react';
import { TOUR_PACKAGES } from '../../data/mockData';
import { TourPackage } from '../../types';

interface FeaturedToursProps {
  onSelectTour: (tour: TourPackage) => void;
  onInquiryWithTour: (tourTitle: string) => void;
  onViewAll: () => void;
}

export const FeaturedTours: React.FC<FeaturedToursProps> = ({ onSelectTour, onInquiryWithTour, onViewAll }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 섹션 헤더 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-yaho-navy-50 text-yaho-navy-800 text-xs sm:text-sm font-extrabold tracking-wider uppercase mb-2">
              RECOMMENDED TOURS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-yaho-navy-950 tracking-tight">
              야호트래블 대표 추천 코스
            </h2>
            <p className="text-slate-600 text-base mt-2">
              실제 고객 만족도가 가장 높았던 엄선된 일정표를 확인해보세요. (모든 일정 100% 맞춤 변경 가능)
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:text-yaho-navy-900 hover:border-yaho-navy-900 font-bold text-sm transition-all flex items-center gap-1.5"
          >
            <span>전체 상품 보기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 투어 카드 그리드 (요타비 스타일 카드 레이아웃) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group card-hover-shadow"
            >
              {/* 이미지 배너 */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.thumbnail}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* 뱃지들 */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-yaho-gold-400 text-yaho-navy-950 text-xs font-black shadow-md">
                    {tour.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium">
                    {tour.duration}
                  </span>
                </div>

                {/* 하단 지역 정보 */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-yaho-gold-300 flex items-center gap-1 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {tour.regionName}
                  </span>
                  <h3 className="text-xl font-black tracking-tight leading-snug drop-shadow-sm">
                    {tour.title}
                  </h3>
                </div>
              </div>

              {/* 본문 정보 */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {tour.subtitle}
                  </p>

                  {/* 출발지 정보 */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <Calendar className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{tour.departure}</span>
                  </div>

                  {/* 주요 하이라이트 3개 */}
                  <div className="space-y-2 pt-1">
                    {tour.highlight.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-yaho-gold-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 하단 버튼 2단 구성 */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectTour(tour)}
                    className="flex-1 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-4 h-4 text-slate-600" />
                    <span>상세 일정표</span>
                  </button>
                  <button
                    onClick={() => onInquiryWithTour(tour.title)}
                    className="flex-1 py-3 px-3 rounded-xl bg-yaho-navy-900 hover:bg-yaho-navy-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1"
                  >
                    <span>맞춤 견적 문의</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
