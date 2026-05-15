"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "./Projects";

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="section-padding bg-[#0a0e18]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader tag={s.tag} title={s.title} subtitle={s.subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {s.items.map((item) => (
            <div key={item.title} className="group p-6 rounded-2xl border border-[#1e2d45] bg-[#0f1623] card-hover">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
