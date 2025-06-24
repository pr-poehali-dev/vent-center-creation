import Icon from "@/components/ui/icon";

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-foreground mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 10 лет успешной работы в сфере вентиляционных систем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-montserrat mb-2">
              Гарантия качества
            </h3>
            <p className="text-muted-foreground">
              До 5 лет гарантии на оборудование и монтажные работы
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-montserrat mb-2">
              Быстрая установка
            </h3>
            <p className="text-muted-foreground">
              Монтаж в кратчайшие сроки с соблюдением всех норм
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-montserrat mb-2">
              Сертификация
            </h3>
            <p className="text-muted-foreground">
              Все специалисты имеют соответствующие сертификаты
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Headphones" className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold font-montserrat mb-2">
              Поддержка 24/7
            </h3>
            <p className="text-muted-foreground">
              Круглосуточная техническая поддержка и сервис
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
