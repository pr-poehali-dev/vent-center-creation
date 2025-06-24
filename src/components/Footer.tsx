import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Wind" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-montserrat">
                Вент-центр
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Профессиональные решения для вентиляции любой сложности. Качество,
              надежность, инновации.
            </p>
            <div className="flex space-x-4">
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                <Icon name="Phone" className="h-5 w-5 text-primary" />
              </div>
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                <Icon name="Mail" className="h-5 w-5 text-primary" />
              </div>
              <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                <Icon name="MapPin" className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">
              Услуги
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Промышленные системы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Бытовые системы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Проектирование
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Монтаж
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Сервис
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">
              Компания
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Наши работы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Сертификаты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Новости
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">
              Контакты
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>+7 (495) 123-45-67</p>
              <p>info@vent-center.ru</p>
              <p>г. Москва, ул. Промышленная, 15</p>
              <p>Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Вент-центр. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
