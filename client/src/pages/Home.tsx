import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Academic Elegance with Modern Professionalism
 * - Color Palette: Deep Navy (#1a2744) + Warm Teal (#2a8f7f) + Soft Sage (#e8f0ed)
 * - Typography: Playfair Display (headings) + Inter (body)
 * - Layout: Asymmetric with diagonal dividers, card-based portfolio, elevated pricing
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    setFormData({ name: "", contact: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* ===== BLOCK 1: HEADER/MENU ===== */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-primary">
              Палагин М. — Научный консалтинг к.т.н.
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/your_telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a
              href="tel:+79295551925"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">+7-929-555-1925</span>
            </a>
            <Button
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* ===== BLOCK 2: HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663312234162/Fg6Jj7JDTHPoNRMhLLHi4o/hero-background-EqEeh4Cu6xKXFXKXb9GGSd.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative container py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Доведение диссертаций к.т.н. до защиты
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Перевод инженерного и ИТ опыта в научную форму. Помощь в
              структурировании исследования, подготовке публикаций и успешной
              защите диссертации.
            </p>
            <Button
              onClick={() =>
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6"
            >
              Записаться на экспресс-аудит темы
            </Button>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="relative h-24 overflow-hidden">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,30 1200,0 1200,100 0,100"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* ===== BLOCK 3: PORTFOLIO (Trust Block) ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Действующий ученый
            </h2>
            <p className="text-xl text-foreground/70">
              Более 10 публикаций ВАК за последний год
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Publication 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-border">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">BE</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">Business Excellence • Май 2026</div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  ИИ-реализм. Большой перелом и стратегия выживания
                </h3>
                <p className="text-sm text-foreground/60 mb-4">Михаил Палагин</p>
                <div className="space-y-3">
                  <a
                    href="https://ria-stk.ru/ds/adetail.php?ID=251087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                  >
                    → Читать на сайте журнала
                  </a>
                </div>
              </div>
            </Card>

            {/* Publication 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-border">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">BE</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">Business Excellence • Май 2025</div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Сценарий для цифрового рубля
                </h3>
                <p className="text-sm text-foreground/60 mb-4">Михаил Палагин</p>
                <div className="space-y-3">
                  <a
                    href="https://ria-stk.ru/ds/adetail.php?ID=241346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                  >
                    → Читать на сайте журнала
                  </a>
                </div>
              </div>
            </Card>

            {/* Publication 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-border">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">BE</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">Business Excellence • Июль 2025</div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Автомобиль: актив, пассив или инвестиционная ловушка?
                </h3>
                <p className="text-sm text-foreground/60 mb-4">Михаил Палагин</p>
                <div className="space-y-3">
                  <a
                    href="https://ria-stk.ru/ds/adetail.php?ID=243016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                  >
                    → Читать на сайте журнала
                  </a>
                </div>
              </div>
            </Card>

            {/* Publication 4 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-border">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">BE</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">Business Excellence • Март 2025</div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Автобизнес 2025 трансформируется. Китай, США и остальные
                </h3>
                <p className="text-sm text-foreground/60 mb-4">Михаил Палагин</p>
                <div className="space-y-3">
                  <a
                    href="https://ria-stk.ru/ds/adetail.php?ID=239347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                  >
                    → Читать на сайте журнала
                  </a>
                </div>
              </div>
            </Card>

            {/* Publication 5 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-border">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">BE</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">Business Excellence • Март 2026</div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Профессии будущего: когда работа — это зов сердца, а не принуждение
                </h3>
                <p className="text-sm text-foreground/60 mb-4">Михаил Палагин</p>
                <div className="space-y-3">
                  <a
                    href="https://ria-stk.ru/ds/adetail.php?ID=249516"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                  >
                    → Читать на сайте журнала
                  </a>
                </div>
              </div>
            </Card>

            {/* Publication 6 */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-border">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">BE</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-accent font-semibold mb-2">Business Excellence • Декабрь 2025</div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  Автоэволюция: от гонок во дворе до космических капсул
                </h3>
                <p className="text-sm text-foreground/60 mb-4">Михаил Палагин</p>
                <div className="space-y-3">
                  <a
                    href="https://ria-stk.ru/ds/adetail.php?ID=246819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                  >
                    → Читать на сайте журнала
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== BLOCK 4: AUDIENCE (Pain Points) ===== */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Для кого это?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Топ-менеджеры и Lead-разработчики",
                description:
                  "Профессионалы с богатым практическим опытом, готовые структурировать свои знания в научный формат и получить степень к.т.н.",
              },
              {
                title: "Действующие аспиранты",
                description:
                  "Исследователи, которые нуждаются в помощи с методологией, структурой диссертации и подготовкой к защите.",
              },
              {
                title: "Практики без опыта в науке",
                description:
                  "Специалисты, которые хотят начать научную карьеру, но не знают, с чего начать и как правильно оформить исследование.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white border-border hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-2xl font-bold text-accent">{idx + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOCK 5: PRICING ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Тарифы и услуги
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Стартовая диагностика",
                price: "5 000 ₽",
                duration: "30-40 минут",
                features: [
                  "Анализ вашей темы",
                  "Обзор текущего состояния",
                  "Рекомендации по улучшению",
                  "100% аванс",
                ],
              },
              {
                title: "Научный трекинг",
                price: "от 30 000 ₽",
                duration: "в месяц",
                features: [
                  "Регулярные консультации",
                  "Проверка материалов",
                  "Помощь с публикациями",
                  "Поддержка на всех этапах",
                ],
                featured: true,
              },
              {
                title: "Публикационное сопровождение",
                price: "от 15 000 ₽",
                duration: "за проект",
                features: [
                  "Подготовка статьи",
                  "Редактирование текста",
                  "Помощь с отправкой",
                  "Консультация по журналам",
                ],
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`p-8 border-2 transition-all ${
                  plan.featured
                    ? "border-accent bg-white shadow-lg md:scale-105"
                    : "border-border bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-accent">
                    {plan.price}
                  </div>
                  <p className="text-sm text-foreground/60">{plan.duration}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`w-full ${
                    plan.featured
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "bg-primary/10 hover:bg-primary/20 text-primary"
                  }`}
                >
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOCK 6: WORKFLOW ===== */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            Как мы работаем
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Анкета и материалы",
                description:
                  "Отправьте анкету и предварительные материалы. Мы проанализируем их в течение 24 часов.",
              },
              {
                step: "2",
                title: "Онлайн-созвон и аудит",
                description:
                  "Проведем детальное обсуждение вашей темы и дадим профессиональный аудит.",
              },
              {
                step: "3",
                title: "Утверждение графика",
                description:
                  "Согласуем график работы и спринты для достижения ваших целей.",
              },
              {
                step: "4",
                title: "Результат и защита",
                description:
                  "Подготовим вас к предзащите и защите диссертации. Достигнем результата вместе.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-white border-border">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white rounded-lg border-2 border-accent/20 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">
              Конфиденциальность и легальность
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Все материалы обрабатываются с соблюдением конфиденциальности.
              Мы работаем в рамках правового поля Российской Федерации и
              соответствуем всем требованиям законодательства в области
              образования и науки.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BLOCK 7: CONTACT FORM & FOOTER ===== */}
      <section id="contact-form" className="py-20 md:py-28 bg-background">
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
            Начните сейчас
          </h2>

          <Card className="p-8 md:p-12 bg-white border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telegram или телефон
                </label>
                <Input
                  type="text"
                  placeholder="@your_telegram или +7-929-555-1925"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сообщение (опционально)
                </label>
                <Textarea
                  placeholder="Расскажите о вашей теме диссертации и целях..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full min-h-32"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6"
              >
                <Send className="mr-2" size={20} />
                Отправить заявку на аудит
              </Button>
            </form>
          </Card>

          <div className="mt-16 text-center">
            <h3 className="text-lg font-bold text-primary mb-8">
              Или свяжитесь напрямую
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors"
              >
                <MessageCircle size={24} />
                <span>Telegram</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors"
              >
                <Mail size={24} />
                <span>Email</span>
              </a>
              <a
                href="tel:+79295551925"
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors"
              >
                <Phone size={24} />
                <span>+7-929-555-1925</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container text-center">
          <p className="text-sm opacity-80">
            © 2024 Палагин М. — Научный консалтинг. Все права защищены.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Работаем в рамках правового поля Российской Федерации
          </p>
        </div>
      </footer>
    </div>
  );
}
