import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat text-foreground mb-6 animate-fade-in">
            Профессиональные <br />
            <span className="text-primary">вентиляционные системы</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Полный цикл работ: от проектирования до монтажа промышленных и
            бытовых систем вентиляции под ключ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-6 text-lg">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Расчет стоимости
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Консультация
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Промышленные системы
              </h3>
              <p className="text-muted-foreground">
                Сложные решения для заводов и предприятий
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Бытовые системы</h3>
              <p className="text-muted-foreground">
                Комфортный климат в доме и офисе
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Монтаж и сервис</h3>
              <p className="text-muted-foreground">
                Профессиональная установка и обслуживание
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
