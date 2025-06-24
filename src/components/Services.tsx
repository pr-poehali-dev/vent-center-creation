import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения для вентиляции любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ShoppingCart" className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-montserrat">
                Продажа систем
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Широкий ассортимент промышленных и бытовых вентиляционных систем
                от ведущих производителей
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Промышленные установки</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Бытовые системы</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Комплектующие</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Посмотреть каталог
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-montserrat">
                Проектирование и установка
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Полный цикл работ от создания проекта до запуска системы в
                эксплуатацию под ключ
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Проектирование</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Монтаж систем</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Пусконаладка</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Заказать проект
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl font-montserrat">
                Консультации
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Экспертная помощь в выборе оптимального решения для ваших
                потребностей и бюджета
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Подбор оборудования</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Расчет мощности</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Техническая поддержка</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Получить консультацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
