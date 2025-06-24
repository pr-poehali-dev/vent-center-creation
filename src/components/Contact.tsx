import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-foreground mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости проекта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold font-montserrat mb-6">
              Контактная информация
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (800) 555-01-23</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@vent-center.ru</p>
                  <p className="text-muted-foreground">sales@vent-center.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Промышленная, д. 15
                  </p>
                  <p className="text-muted-foreground">
                    БЦ "Технопарк", офис 205
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat">
                Оставьте заявку
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" />
                <Textarea
                  placeholder="Опишите ваш проект или задачу"
                  className="min-h-[120px]"
                />
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
