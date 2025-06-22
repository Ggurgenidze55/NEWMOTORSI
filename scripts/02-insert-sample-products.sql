-- Insert comprehensive sample products
INSERT INTO products (
  id, name_ka, name_en, name_ru, 
  description_ka, description_en, description_ru,
  price, category, subcategory, images, is_new
) VALUES 
-- Warehouse Shelving Products
(
  'warehouse-1',
  'სასაწყობე სტელაჟი',
  'Warehouse Shelving Unit',
  'Складской стеллаж',
  'თითოეული იარუსი ძლიერია და გათვლილია 300 კილოგრამამდე ტვირთზე, რაც უზრუნველყოფს მძიმე ნივთების უსაფრთხო და სტაბილურ შენახვას. 4 იარუსიანი სტრუქტურა გთავაზობთ პრაქტიკულ განლაგებას, ხოლო 100 სმ სიგანისა და 60 სმ სიღრმის თაროები იდეალურია როგორც ყუთებისთვის, ასევე სხვადასხვა ზომის ტვირთისთვის.

ეს მოდელი იდეალურია:
• სასაწყობე სივრცეებისთვის
• ქარხნებისთვის და საწარმოებისთვის
• სავაჭრო ობიექტებისთვის
• ოფისებისა და არქივებისთვის

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.',
  'Each tier is strong and supports up to 300 kg, ensuring safe and stable storage of heavy items. The 4-tier design offers a practical layout, while the 100 cm width and 60 cm depth shelves are ideal for boxes and various-sized loads.

This model is ideal for:
• Storage spaces
• Factories and production facilities
• Retail environments
• Offices and archives

The number of tiers can be customized, and shelving units can be connected. A wide range of colors is available.',
  'Каждый ярус прочный и рассчитан на нагрузку до 300 кг, что обеспечивает безопасное и устойчивое хранение тяжёлых предметов. Конструкция с 4 ярусами предлагает практичное расположение, а полки шириной 100 см и глубиной 60 см идеально подходят как для коробок, так и для грузов разных размеров.

Эта модель идеально подходит для:
• Складских помещений
• Заводов и производств
• Торговых объектов
• Офисов и архивов

Количество ярусов можно изменить, а стеллажи можно соединить между собой. Доступен широкий выбор цветов.',
  450.00,
  'warehouse-shelving',
  'warehouse-shelving',
  ARRAY['/images/blue-warehouse-shelving.png'],
  true
),
(
  'warehouse-2',
  'სასაწყობე სტელაჟი',
  'Warehouse Shelving Unit',
  'Складской стеллаж',
  'თითოეული იარუსი ძლიერია და გათვლილია 300 კილოგრამამდე ტვირთზე, რაც უზრუნველყოფს მძიმე ნივთების უსაფრთხო და სტაბილურ შენახვას. 4 იარუსიანი სტრუქტურა გთავაზობთ პრაქტიკულ განლაგებას, ხოლო 150 სმ სიგანისა და 60 სმ სიღრმის თაროები იდეალურია როგორც ყუთებისთვის, ასევე სხვადასხვა ზომის ტვირთისთვის.

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.

ეს მოდელი იდეალურია:
• სასაწყობე სივრცეებისთვის
• ქარხნებისთვის და საწარმოებისთვის
• სავაჭრო ობიექტებისთვის
• ოფისებისა და არქივებისთვის',
  'Each tier is strong and supports up to 300 kg, ensuring safe and stable storage of heavy items. The 4-tier design offers a practical layout, while the 150 cm wide and 60 cm depth shelves are ideal for boxes and various-sized loads.

The number of tiers can be customized, and shelving units can be connected. A wide range of colors is available.

This model is ideal for:
• Storage spaces
• Factories and production facilities
• Retail environments
• Offices and archives',
  'Каждый ярус прочный и рассчитан на нагрузку до 300 кг, что обеспечивает безопасное и устойчивое хранение тяжёлых предметов. Конструкция с 4 ярусами предлагает практичное расположение, а полки шириной 150 см и глубиной 60 см идеально подходят как для коробок, так и для грузов разных размеров.

Количество ярусов можно изменить, а стеллажи можно соединить между собой. Доступен широкий выбор цветов.

Эта модель идеально подходит для:
• Складских помещений
• Заводов и производств
• Торговых объектов
• Офисов и архивов',
  420.00,
  'warehouse-shelving',
  'warehouse-shelving',
  ARRAY['/images/blue-orange-warehouse-shelving.jpg', '/images/blue-warehouse-shelving.png', '/images/gray-warehouse-shelving.jpg'],
  true
),
(
  'warehouse-3',
  'სასაწყობე სტელაჟი',
  'Warehouse Shelving Unit',
  'Складской стеллаж',
  'ნაცრისფერი სასაწყობე სტელაჟი კლასიკური დიზაინით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

ტექნიკური მახასიათებლები:
• სიმაღლე: 220 სმ
• სიგანე: 100 სმ  
• სიღრმე: 50 სმ
• იარუსების რაოდენობა: 5
• დატვირთვა: 280 კგ ერთ იარუსზე

კომპაქტური და ეფექტური გადაწყვეტა მცირე ფართობისთვის.',
  'Gray warehouse shelving with classic design. Made from high-quality metal, ideal for warehouses and industrial facilities.

Technical Specifications:
• Height: 220 cm
• Width: 100 cm
• Depth: 50 cm
• Number of tiers: 5
• Load capacity: 280 kg per tier

Compact and efficient solution for smaller spaces.',
  'Серый складской стеллаж с классическим дизайном. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

Технические характеристики:
• Высота: 220 см
• Ширина: 100 см
• Глубина: 50 см
• Количество ярусов: 5
• Нагрузка: 280 кг на ярус

Компактное и эффективное решение для небольших помещений.',
  480.00,
  'warehouse-shelving',
  'warehouse-shelving',
  ARRAY['/images/gray-warehouse-shelving.jpg', '/images/blue-warehouse-shelving.png', '/images/warehouse-shelving.jpg'],
  true
),
-- Tire Shelving
(
  'tire-shelving-1',
  'საბურავების სტელაჟი',
  'Tire Shelving Unit',
  'Стеллаж для шин',
  'სპეციალური სტელაჟი საბურავების შენახვისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ავტოსერვისებისა და საბურავების მაღაზიებისთვის.

ტექნიკური მახასიათებლები:
• სიმაღლე: 200 სმ
• სიგანე: 150 სმ  
• სიღრმე: 40 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 200 კგ ერთ იარუსზე

სპეციალურად შექმნილია საბურავების ეფექტური შენახვისთვის.',
  'Special shelving for tire storage. Made from high-quality metal, ideal for auto services and tire shops.

Technical Specifications:
• Height: 200 cm
• Width: 150 cm
• Depth: 40 cm
• Number of tiers: 4
• Load capacity: 200 kg per tier

Specially designed for efficient tire storage.',
  'Специальный стеллаж для хранения шин. Изготовлен из высококачественного металла, идеален для автосервисов и шинных магазинов.

Технические характеристики:
• Высота: 200 см
• Ширина: 150 см
• Глубина: 40 см
• Количество ярусов: 4
• Нагрузка: 200 кг на ярус

Специально разработан для эффективного хранения шин.',
  680.00,
  'tire-shelving',
  'tire-shelving',
  ARRAY['/images/tire-shelving-1.png', '/images/tire-shelving-2.png'],
  true
),
-- Clothing Shelving
(
  'clothing-shelving-1',
  'ტანსაცმლის სტელაჟი',
  'Clothing Shelving Unit',
  'Стеллаж для одежды',
  'ტანსაცმლის სტელაჟი მაღაზიებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ტანსაცმლის მაღაზიებისა და შოურუმებისთვის.

ტექნიკური მახასიათებლები:
• სიმაღლე: 180 სმ
• სიგანე: 120 სმ  
• სიღრმე: 50 სმ
• ჩამოსაკიდი ღერო: 2 ცალი
• დატვირთვა: 50 კგ ღეროზე

იდეალურია ტანსაცმლის ეფექტური გამოსაჩენად.',
  'Clothing rack for stores. Made from high-quality metal, ideal for clothing stores and showrooms.

Technical Specifications:
• Height: 180 cm
• Width: 120 cm
• Depth: 50 cm
• Hanging rods: 2 pieces
• Load capacity: 50 kg per rod

Perfect for effective clothing display.',
  'Стеллаж для одежды для магазинов. Изготовлен из высококачественного металла, идеален для магазинов одежды и шоурумов.

Технические характеристики:
• Высота: 180 см
• Ширина: 120 см
• Глубина: 50 см
• Штанги для вешалок: 2 штуки
• Нагрузка: 50 кг на штангу

Идеален для эффективной демонстрации одежды.',
  380.00,
  'clothing-shelving',
  'clothing-shelving',
  ARRAY['/images/clothing-rack-1.jpg', '/images/clothing-rack-2.png'],
  true
);
