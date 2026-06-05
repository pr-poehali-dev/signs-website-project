import React from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/4e5a43c6-33b7-4d3e-a11b-04857b426888/files/6f01bffb-a456-4f8e-9ebe-3ffe96096e11.jpg';

const advantages = [
  { icon: 'PenLine', text: 'Дизайн + изготовление + монтаж' },
  { icon: 'FileCheck', text: 'Помощь с согласованием' },
  { icon: 'Gift', text: 'Режим работы в подарок' },
  { icon: 'BadgeRussianRuble', text: 'Решения от 20 000 ₽' },
];

const services = [
  { title: 'Световые буквы', desc: 'Объёмные буквы с различными видами подсветки', icon: 'Lightbulb' },
  { title: 'Световые короба', desc: 'Яркие и долговечные лайтбоксы любого размера', icon: 'Square' },
  { title: 'Несветовые вывески', desc: 'Таблички, плоские буквы, оформление фасада', icon: 'LayoutDashboard' },
  { title: 'Согласование', desc: 'Поможем оформить документы и получить разрешение', icon: 'ClipboardCheck' },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-golos">

      {/* Шапка */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-oswald font-bold text-xl tracking-wider uppercase text-foreground">
              ВывескиАмур
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-foreground transition-colors">Портфолио</a>
            <a href="#prices" className="hover:text-foreground transition-colors">Цены</a>
            <a href="#contacts" className="hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <a
            href="tel:+74162000000"
            className="flex items-center gap-2 font-oswald font-medium text-foreground hover:text-red-700 transition-colors"
          >
            <Icon name="Phone" size={16} />
            <span className="hidden sm:inline">+7 (4162) 00-00-00</span>
          </a>
        </div>
      </header>

      {/* Герой */}
      <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Вывески под ключ в Благовещенске"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/72" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/80 text-sm px-4 py-1.5 rounded-full mb-8 animate-fade-up">
              <Icon name="MapPin" size={14} />
              Благовещенск и Амурская область
            </div>

            <h1 className="font-oswald font-bold text-5xl md:text-7xl text-white leading-tight uppercase tracking-tight mb-6 animate-fade-up delay-100">
              Вывески<br />
              <span style={{ color: 'hsl(32, 95%, 50%)' }}>под ключ</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 animate-fade-up delay-200">
              Световые буквы, короба и фасадные вывески для бизнеса.
              <br />От консультации до готовой вывески на вашем фасаде.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10 animate-fade-up delay-300">
              {advantages.map((adv) => (
                <div key={adv.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsla(0,82%,40%,0.25)', border: '1px solid hsla(0,82%,40%,0.5)' }}>
                    <Icon name={adv.icon} size={14} style={{ color: 'hsl(0,82%,40%)' }} />
                  </div>
                  <span className="text-white/90 text-sm font-medium">{adv.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-400">
              <button className="flex items-center justify-center gap-2 text-white font-oswald font-medium text-base uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:scale-[1.02]" style={{ background: 'hsl(0,82%,40%)' }}>
                <Icon name="Calculator" size={18} />
                Рассчитать стоимость
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-oswald font-medium text-base uppercase tracking-wider px-8 py-4 rounded transition-all duration-200">
                <Icon name="Camera" size={18} />
                Фото фасада
              </button>
              <a
                href="https://wa.me/74162000000"
                className="flex items-center justify-center gap-2 text-white font-oswald font-medium text-base uppercase tracking-wider px-8 py-4 rounded transition-all duration-200"
                style={{ background: 'rgba(37,211,102,0.9)' }}
              >
                <Icon name="MessageCircle" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/50" />
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-oswald uppercase tracking-widest text-sm mb-3" style={{ color: 'hsl(0,82%,40%)' }}>Что мы делаем</p>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground uppercase">Наши услуги</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{ '--hover-border': 'hsl(0,82%,40%)' } as React.CSSProperties}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'hsl(0,82%,40%)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-red-50">
                  <Icon name={s.icon} size={22} className="text-muted-foreground group-hover:text-red-700 transition-colors" />
                </div>
                <h3 className="font-oswald font-semibold text-xl text-foreground uppercase mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-red-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-oswald uppercase tracking-widest text-sm mb-3" style={{ color: 'hsl(0,82%,40%)' }}>Как мы работаем</p>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground uppercase">Вывеска под ключ<br />за 5 шагов</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { n: '01', title: 'Консультация', desc: 'Обсуждаем задачу, выезжаем на замер' },
              { n: '02', title: 'Дизайн', desc: 'Разрабатываем макет, согласуем с вами' },
              { n: '03', title: 'Изготовление', desc: 'Производим вывеску в нашем цеху' },
              { n: '04', title: 'Монтаж', desc: 'Устанавливаем на вашем фасаде' },
              { n: '05', title: 'Согласование', desc: 'Помогаем оформить документы' },
            ].map((step) => (
              <div key={step.n} className="relative">
                <div className="font-oswald text-5xl font-bold text-border mb-4">{step.n}</div>
                <h3 className="font-oswald font-semibold text-lg uppercase text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA полоса */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-oswald font-bold text-3xl md:text-4xl uppercase mb-3">
              Получите расчёт<br />
              <span style={{ color: 'hsl(0,82%,65%)' }}>за 30 минут</span>
            </h2>
            <p className="text-white/60 text-base">Пришлите фото фасада — сделаем визуализацию вывески бесплатно</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 text-white font-oswald font-medium text-base uppercase tracking-wider px-8 py-4 rounded transition-colors" style={{ background: 'hsl(0,82%,40%)' }}>
              <Icon name="Send" size={18} />
              Отправить фото
            </button>
            <a
              href="tel:+74162000000"
              className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-oswald font-medium text-base uppercase tracking-wider px-8 py-4 rounded transition-colors"
            >
              <Icon name="Phone" size={18} />
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-oswald uppercase tracking-widest text-sm mb-3" style={{ color: 'hsl(0,82%,40%)' }}>Наши работы</p>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground uppercase">Портфолио</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden relative group cursor-pointer">
                <img
                  src={HERO_IMAGE}
                  alt=""
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-oswald text-white font-semibold uppercase text-sm bg-black/60 px-4 py-2 rounded">
                    Смотреть
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="font-oswald uppercase tracking-wider text-sm border border-border hover:border-foreground text-foreground px-10 py-3.5 rounded transition-colors">
              Смотреть все работы
            </button>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-oswald uppercase tracking-widest text-sm mb-3" style={{ color: 'hsl(0,82%,40%)' }}>Связаться с нами</p>
              <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground uppercase mb-8">Контакты</h2>
              <div className="space-y-6">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (4162) 00-00-00', href: 'tel:+74162000000' },
                  { icon: 'MessageCircle', label: 'WhatsApp', value: 'Написать в WhatsApp', href: 'https://wa.me/74162000000' },
                  { icon: 'MapPin', label: 'Адрес', value: 'Благовещенск, ул. Примерная, 1', href: '#' },
                  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Пт 9:00–18:00, Сб 10:00–15:00', href: null },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={c.icon} size={18} style={{ color: 'hsl(0,82%,40%)' }} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-foreground font-medium hover:text-red-700 transition-colors">{c.value}</a>
                      ) : (
                        <span className="text-foreground font-medium">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-8">
              <h3 className="font-oswald font-semibold text-2xl uppercase mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none transition-colors"
                    onFocus={e => (e.target.style.borderColor = 'hsl(0,82%,40%)')}
                    onBlur={e => (e.target.style.borderColor = '')}
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none transition-colors"
                    onFocus={e => (e.target.style.borderColor = 'hsl(0,82%,40%)')}
                    onBlur={e => (e.target.style.borderColor = '')}
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1.5">Что нужно сделать?</label>
                  <textarea
                    rows={3}
                    placeholder="Опишите вашу задачу или прикрепите фото фасада"
                    className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                    onFocus={e => (e.target.style.borderColor = 'hsl(0,82%,40%)')}
                    onBlur={e => (e.target.style.borderColor = '')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-oswald uppercase tracking-wider text-sm py-4 rounded transition-colors hover:opacity-90"
                  style={{ background: 'hsl(0,82%,40%)' }}
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с&nbsp;
                  <a href="#" className="underline hover:text-foreground">политикой конфиденциальности</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-foreground text-white/60 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-oswald font-bold text-white text-lg tracking-wider uppercase">ВывескиАмур</span>
          <span>© 2024 Все права защищены</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Согласие на обработку ПД</a>
          </div>
        </div>
      </footer>

    </div>
  );
}