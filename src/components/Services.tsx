import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="Star" className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Наши услуги
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6">
            Комплексные решения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            для вентиляции любой сложности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-8">
              <div className="bg-gradient-to-br from-primary to-primary/80 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 duration-300">
                <Icon name="ShoppingCart" className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold font-montserrat">
                Продажа систем
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 pb-8">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Широкий ассортимент промышленных и бытовых вентиляционных систем
                от ведущих производителей
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    Промышленные установки
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Бытовые системы</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Комплектующие</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full py-3 border-2 hover:bg-primary hover:text-white transition-all hover-scale"
              >
                Посмотреть каталог
              </Button>
            </CardContent>
          </Card>

          <Card className="group border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-8">
              <div className="bg-gradient-to-br from-primary to-primary/80 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 duration-300">
                <Icon name="Wrench" className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold font-montserrat">
                Проектирование и установка
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 pb-8">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Полный цикл работ от создания проекта до запуска системы в
                эксплуатацию под ключ
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Проектирование</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Монтаж систем</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Пусконаладка</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full py-3 border-2 hover:bg-primary hover:text-white transition-all hover-scale"
              >
                Заказать проект
              </Button>
            </CardContent>
          </Card>

          <Card className="group border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-8">
              <div className="bg-gradient-to-br from-primary to-primary/80 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 duration-300">
                <Icon name="MessageCircle" className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold font-montserrat">
                Консультации
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center px-6 pb-8">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Экспертная помощь в выборе оптимального решения для ваших
                потребностей и бюджета
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    Подбор оборудования
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Расчет мощности</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                    <Icon name="Check" className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    Техническая поддержка
                  </span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full py-3 border-2 hover:bg-primary hover:text-white transition-all hover-scale"
              >
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
