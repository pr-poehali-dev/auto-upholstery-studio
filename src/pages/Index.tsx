import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Armchair',
    title: 'Перетяжка сидений',
    description: 'Полная замена обивки с использованием премиальных материалов. Восстановление формы и комфорта.',
    price: 'от 25 000 ₽'
  },
  {
    icon: 'Sparkles',
    title: 'Перетяжка руля и панелей',
    description: 'Индивидуальный дизайн руля, дверных панелей и центральной консоли.',
    price: 'от 15 000 ₽'
  },
  {
    icon: 'Car',
    title: 'Полная перетяжка салона',
    description: 'Комплексное преображение интерьера автомобиля под ключ с гарантией качества.',
    price: 'от 80 000 ₽'
  },
  {
    icon: 'Palette',
    title: 'Дизайнерские решения',
    description: 'Авторские проекты с уникальными материалами, вставками и отделкой.',
    price: 'от 120 000 ₽'
  }
];

const materials = [
  {
    name: 'Натуральная кожа',
    type: 'Nappa',
    properties: ['Износостойкость 5+', 'Премиум класс', 'Дышащая структура'],
    colors: 20
  },
  {
    name: 'Алькантара',
    type: 'Dinamica',
    properties: ['Антистатик', 'Устойчива к UV', 'Спортивный стиль'],
    colors: 15
  },
  {
    name: 'Экокожа',
    type: 'Oregon',
    properties: ['Влагостойкость', 'Легкий уход', 'Доступная цена'],
    colors: 30
  },
  {
    name: 'Комбинированная',
    type: 'Premium Mix',
    properties: ['Индивидуальный дизайн', 'Кожа + Алькантара', 'Эксклюзив'],
    colors: 50
  }
];

const portfolio = [
  {
    title: 'Mercedes-Benz G-Class',
    description: 'Полная перетяжка салона кожей Nappa с контрастной прострочкой',
    category: 'Премиум',
    image: 'https://cdn.poehali.dev/projects/4730ef1d-b623-4f26-9522-2f23e194621e/files/45090a35-ad22-41d7-a907-4410a1dba50f.jpg'
  },
  {
    title: 'BMW X5',
    description: 'Комбинированная отделка алькантарой и кожей с карбоновыми вставками',
    category: 'Спорт',
    image: 'https://cdn.poehali.dev/projects/4730ef1d-b623-4f26-9522-2f23e194621e/files/98ac35a1-171e-41d0-8584-ccb775ccb466.jpg'
  },
  {
    title: 'Toyota Land Cruiser',
    description: 'Реставрация сидений с заменой наполнителя и перетяжкой экокожей',
    category: 'Комфорт',
    image: 'https://cdn.poehali.dev/projects/4730ef1d-b623-4f26-9522-2f23e194621e/files/f98b479b-42ec-4224-acf4-42d5f052ffc5.jpg'
  }
];

const reviews = [
  {
    name: 'Александр М.',
    car: 'Audi Q7',
    text: 'Преобразили салон до неузнаваемости! Работа выполнена безупречно, каждый шов идеален. Машина получила вторую жизнь.',
    rating: 5
  },
  {
    name: 'Елена К.',
    car: 'Range Rover Sport',
    text: 'Обратилась с нестандартным запросом - хотела комбинацию бежевой кожи с белой алькантарой. Результат превзошёл ожидания!',
    rating: 5
  },
  {
    name: 'Дмитрий В.',
    car: 'Porsche Cayenne',
    text: 'Профессионалы своего дела. Сроки соблюдены, качество на высоте. Рекомендую всем, кто ценит мастерство.',
    rating: 5
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', car: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" className="text-primary" size={28} />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AutoAtelier
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition">Портфолио</a>
            <a href="#materials" className="text-sm font-medium hover:text-primary transition">Материалы</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition">Отзывы</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            Эксклюзивная перетяжка салонов автомобилей
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
            Салон вашей мечты
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Превращаем интерьер автомобиля в произведение искусства. Премиальные материалы, 
            безупречное качество, гарантия 3 года.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              <Icon name="Image" size={20} className="mr-2" />
              Смотреть работы
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-muted-foreground">лет опыта</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">автомобилей</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">довольных клиентов</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">3 года</div>
              <div className="text-sm text-muted-foreground">гарантии</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              От локального ремонта до полного преображения салона
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:scale-105 border-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждый проект — уникальный, как и его владелец
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90">{project.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="Grid" size={20} className="mr-2" />
              Показать все работы
            </Button>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Материалы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог материалов</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Только сертифицированные материалы от ведущих производителей
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="leather">Кожа</TabsTrigger>
              <TabsTrigger value="alcantara">Алькантара</TabsTrigger>
              <TabsTrigger value="eco">Экокожа</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {materials.map((material, idx) => (
                  <Card key={idx} className="border-2 hover:shadow-lg transition">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-2xl mb-1">{material.name}</CardTitle>
                          <CardDescription className="text-base">{material.type}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-primary border-primary">
                          {material.colors} цветов
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {material.properties.map((prop, i) => (
                          <Badge key={i} variant="secondary" className="text-sm">
                            <Icon name="Check" size={14} className="mr-1" />
                            {prop}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="leather">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Натуральная кожа Nappa</CardTitle>
                  <CardDescription className="text-base">Премиум класс для истинных ценителей</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Мягкая, эластичная кожа высшего качества. Идеально подходит для полной перетяжки салонов премиум-сегмента.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />Износостойкость 5+</Badge>
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />Дышащая структура</Badge>
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />20 цветов</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="alcantara">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Алькантара Dinamica</CardTitle>
                  <CardDescription className="text-base">Спортивный стиль и технологичность</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Итальянский синтетический материал премиум-класса. Популярен в спортивных автомобилях.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />Антистатик</Badge>
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />Устойчива к UV</Badge>
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />15 цветов</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="eco">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Экокожа Oregon</CardTitle>
                  <CardDescription className="text-base">Оптимальное соотношение цены и качества</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Современный материал с улучшенными характеристиками. Легкий уход, влагостойкость.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />Влагостойкость</Badge>
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />Легкий уход</Badge>
                    <Badge variant="secondary"><Icon name="Check" size={14} className="mr-1" />30 цветов</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 500 довольных владельцев автомобилей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.car}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Записаться на консультацию</h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Форма записи</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Александр"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Марка автомобиля</label>
                    <Input
                      placeholder="Mercedes-Benz G-Class"
                      value={formData.car}
                      onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea
                      placeholder="Расскажите о желаемых работах..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 15</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@autoatelier.ru</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-accent" />
                    График работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                  <p className="text-sm text-muted-foreground mt-1">Без выходных</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" className="text-primary" size={28} />
                <span className="text-xl font-bold">AutoAtelier</span>
              </div>
              <p className="text-sm opacity-80">
                Эксклюзивная перетяжка салонов автомобилей премиум-класса
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Перетяжка сидений</li>
                <li>Перетяжка руля</li>
                <li>Полная перетяжка салона</li>
                <li>Дизайнерские решения</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О компании</li>
                <li>Гарантии</li>
                <li>Доставка</li>
                <li>Оплата</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@autoatelier.ru</li>
                <li>г. Москва, ул. Автомобильная, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            <p>© 2024 AutoAtelier. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}