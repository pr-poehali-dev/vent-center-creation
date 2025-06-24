import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Wind" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-montserrat text-foreground">
              Вент-центр
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Монтаж
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Гарантии
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Звонок
            </Button>
            <Button className="md:hidden">
              <Icon name="Menu" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
