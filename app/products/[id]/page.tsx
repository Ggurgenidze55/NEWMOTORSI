"use client"
import { useLanguage } from "@/contexts/language-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()

  // Get product data based on ID
  const getProductData = (productId: string) => {
    const products = {
      "warehouse-1": {
        id: "warehouse-1",
        name: t("warehouseShelvingUnit"),
        price: 450.0,
        description: {
          ka: `პროფესიონალური სასაწყობე სტელაჟი მძიმე ტვირთებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 ან 250 სმ
• სიგანე: 100 სმ  
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 300 კგ ერთ იარუსზე

შესაძლებელია იარუსების რაოდენობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.`,
          en: `Professional warehouse shelving for heavy loads. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 200 or 250 cm
• Width: 100 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 300 kg per tier

Adjustable tier quantity and expandable system possible. Wide color selection available.`,
          ru: `Профессиональный складской стеллаж для тяжелых грузов. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 200 или 250 см
• Ширина: 100 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 300 кг на ярус

Возможно изменение количества ярусов и расширение системы. Широкий выбор цветов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 ან 250 სმ",
            "სიგანე: 100 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 300 კგ ერთ იარუსზე",
            "მაღალი ხარისხის ლითონი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 or 250 cm",
            "Width: 100 cm",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 300 kg per tier",
            "High-quality metal",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 или 250 см",
            "Ширина: 100 см",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 300 кг на ярус",
            "Высококачественный металл",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/blue-warehouse-shelving.png",
          "/images/blue-orange-warehouse-shelving.jpg",
          "/images/gray-warehouse-shelving.jpg",
          "/images/tall-warehouse-shelving.jpg",
        ],
        colors: [t("blue")],
        sizes: ["200x100x60", "250x100x60"],
        category: t("warehouseShelving"),
        rating: 4.8,
        reviewCount: 24,
      },
      "warehouse-2": {
        id: "warehouse-2",
        name: t("warehouseShelvingUnit"),
        price: 420.0,
        description: {
          ka: `პროფესიონალური სასაწყობე სტელაჟი ლურჯი და ნარინჯისფერი ფერებით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 120 სმ  
• სიღრმე: 60 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 350 კგ ერთ იარუსზე

ეს მოდელი გამოირჩევა გაძლიერებული კონსტრუქციით და მაღალი ტვირთამწეობით.`,
          en: `Professional warehouse shelving in blue and orange colors. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 200 cm
• Width: 120 cm
• Depth: 60 cm
• Number of tiers: 4
• Load capacity: 350 kg per tier

This model features reinforced construction and high load capacity.`,
          ru: `Профессиональный складской стеллаж в синем и оранжевом цветах. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 120 см
• Глубина: 60 см
• Количество ярусов: 4
• Нагрузка: 350 кг на ярус

Эта модель отличается усиленной конструкцией и высокой грузоподъемностью.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 120 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 350 კგ ერთ იარუსზე",
            "გაძლიერებული კონსტრუქცია",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 cm",
            "Width: 120 cm",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 350 kg per tier",
            "Reinforced construction",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 120 см",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 350 кг на ярус",
            "Усиленная конструкция",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/blue-orange-warehouse-shelving.jpg",
          "/images/blue-warehouse-shelving.png",
          "/images/gray-warehouse-shelving.jpg",
        ],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["200x120x60"],
        category: t("warehouseShelving"),
        rating: 4.7,
        reviewCount: 18,
      },
      "warehouse-3": {
        id: "warehouse-3",
        name: t("warehouseShelvingUnit"),
        price: 480.0,
        description: {
          ka: `ნაცრისფერი სასაწყობე სტელაჟი კლასიკური დიზაინით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 220 სმ
• სიგანე: 100 სმ  
• სიღრმე: 50 სმ
• იარუსების რაოდენობა: 5
• დატვირთვა: 280 კგ ერთ იარუსზე

კომპაქტური და ეფექტური გადაწყვეტა მცირე ფართობისთვის.`,
          en: `Gray warehouse shelving with classic design. Made from high-quality metal, ideal for warehouses and industrial facilities.

**Technical Specifications:**
• Height: 220 cm
• Width: 100 cm
• Depth: 50 cm
• Number of tiers: 5
• Load capacity: 280 kg per tier

Compact and efficient solution for smaller spaces.`,
          ru: `Серый складской стеллаж с классическим дизайном. Изготовлен из высококачественного металла, идеален для складов и промышленных объектов.

**Технические характеристики:**
• Высота: 220 см
• Ширина: 100 см
• Глубина: 50 см
• Количество ярусов: 5
• Нагрузка: 280 кг на ярус

Компактное и эффективное решение для небольших помещений.`,
        },
        features: {
          ka: [
            "სიმაღლე: 220 სმ",
            "სიგანე: 100 სმ",
            "სიღრმე: 50 სმ",
            "იარუსების რაოდენობა: 5",
            "დატვირთვა: 280 კგ ერთ იარუსზე",
            "კომპაქტური დიზაინი",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 220 cm",
            "Width: 100 cm",
            "Depth: 50 cm",
            "Number of tiers: 5",
            "Load capacity: 280 kg per tier",
            "Compact design",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 220 см",
            "Ширина: 100 см",
            "Глубина: 50 см",
            "Количество ярусов: 5",
            "Нагрузка: 280 кг на ярус",
            "Компактный дизайн",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/gray-warehouse-shelving.jpg",
          "/images/blue-warehouse-shelving.png",
          "/images/warehouse-shelving.jpg",
        ],
        colors: ["ნაცარი"],
        sizes: ["220x100x50"],
        category: t("warehouseShelving"),
        rating: 4.6,
        reviewCount: 15,
      },
      "warehouse-4": {
        id: "warehouse-4",
        name: t("warehouseShelvingUnit"),
        price: 520.0,
        description: {
          ka: `მაღალი სასაწყობე სტელაჟი დიდი ტვირთამწეობით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია დიდი საწყობებისა და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 300 სმ
• სიგანე: 120 სმ  
• სიღრმე: 80 სმ
• იარუსების რაოდენობა: 6
• დატვირთვა: 400 კგ ერთ იარუსზე

იდეალურია მაღალი ჭერის მქონე საწყობებისთვის.`,
          en: `Tall warehouse shelving with high load capacity. Made from high-quality metal, ideal for large warehouses and industrial facilities.

**Technical Specifications:**
• Height: 300 cm
• Width: 120 cm
• Depth: 80 cm
• Number of tiers: 6
• Load capacity: 400 kg per tier

Perfect for warehouses with high ceilings.`,
          ru: `Высокий складской стеллаж с большой грузоподъемностью. Изготовлен из высококачественного металла, идеален для больших складов и промышленных объектов.

**Технические характеристики:**
• Высота: 300 см
• Ширина: 120 см
• Глубина: 80 см
• Количество ярусов: 6
• Нагрузка: 400 кг на ярус

Идеален для складов с высокими потолками.`,
        },
        features: {
          ka: [
            "სიმაღლე: 300 სმ",
            "სიგანე: 120 სმ",
            "სიღრმე: 80 სმ",
            "იარუსების რაოდენობა: 6",
            "დატვირთვა: 400 კგ ერთ იარუსზე",
            "მაღალი ტვირთამწეობა",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 300 cm",
            "Width: 120 cm",
            "Depth: 80 cm",
            "Number of tiers: 6",
            "Load capacity: 400 kg per tier",
            "High load capacity",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 300 см",
            "Ширина: 120 см",
            "Глубина: 80 см",
            "Количество ярусов: 6",
            "Нагрузка: 400 кг на ярус",
            "Высокая грузоподъемность",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/tall-warehouse-shelving.jpg",
          "/images/blue-warehouse-shelving.png",
          "/images/warehouse-shelving.jpg",
        ],
        colors: [t("blue"), "ნაცარი"],
        sizes: ["300x120x80"],
        category: t("warehouseShelving"),
        rating: 4.9,
        reviewCount: 12,
      },
      "tire-shelving-1": {
        id: "tire-shelving-1",
        name: t("tireShelvingUnit"),
        price: 680.0,
        description: {
          ka: `სპეციალური სტელაჟი საბურავების შენახვისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ავტოსერვისებისა და საბურავების მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 150 სმ  
• სიღრმე: 40 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 200 კგ ერთ იარუსზე

სპეციალურად შექმნილია საბურავების ეფექტური შენახვისთვის.`,
          en: `Special shelving for tire storage. Made from high-quality metal, ideal for auto services and tire shops.

**Technical Specifications:**
• Height: 200 cm
• Width: 150 cm
• Depth: 40 cm
• Number of tiers: 4
• Load capacity: 200 kg per tier

Specially designed for efficient tire storage.`,
          ru: `Специальный стеллаж для хранения шин. Изготовлен из высококачественного металла, идеален для автосервисов и шинных магазинов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 150 см
• Глубина: 40 см
• Количество ярусов: 4
• Нагрузка: 200 кг на ярус

Специально разработан для эффективного хранения шин.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 150 სმ",
            "სიღრმე: 40 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 200 კგ ერთ იარუსზე",
            "საბურავებისთვის ოპტიმიზებული",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 cm",
            "Width: 150 cm",
            "Depth: 40 cm",
            "Number of tiers: 4",
            "Load capacity: 200 kg per tier",
            "Optimized for tires",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 150 см",
            "Глубина: 40 см",
            "Количество ярусов: 4",
            "Нагрузка: 200 кг на ярус",
            "Оптимизирован для шин",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/tire-shelving-1.png", "/images/tire-shelving-2.png"],
        colors: [t("blue"), "ნაცარი"],
        sizes: ["200x150x40"],
        category: t("tireShelving"),
        rating: 4.7,
        reviewCount: 9,
      },
      "clothing-shelving-1": {
        id: "clothing-shelving-1",
        name: t("clothingShelvingUnit"),
        price: 380.0,
        description: {
          ka: `ტანსაცმლის სტელაჟი მაღაზიებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ტანსაცმლის მაღაზიებისა და შოურუმებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 180 სმ
• სიგანე: 120 სმ  
• სიღრმე: 50 სმ
• ჩამოსაკიდი ღერო: 2 ცალი
• დატვირთვა: 50 კგ ღეროზე

იდეალურია ტანსაცმლის ეფექტური გამოსაჩენად.`,
          en: `Clothing rack for stores. Made from high-quality metal, ideal for clothing stores and showrooms.

**Technical Specifications:**
• Height: 180 cm
• Width: 120 cm
• Depth: 50 cm
• Hanging rods: 2 pieces
• Load capacity: 50 kg per rod

Perfect for effective clothing display.`,
          ru: `Стеллаж для одежды для магазинов. Изготовлен из высококачественного металла, идеален для магазинов одежды и шоурумов.

**Технические характеристики:**
• Высота: 180 см
• Ширина: 120 см
• Глубина: 50 см
• Штанги для вешалок: 2 штуки
• Нагрузка: 50 кг на штангу

Идеален для эффективной демонстрации одежды.`,
        },
        features: {
          ka: [
            "სიმაღლე: 180 სმ",
            "სიგანე: 120 სმ",
            "სიღრმე: 50 სმ",
            "ჩამოსაკიდი ღერო: 2 ცალი",
            "დატვირთვა: 50 კგ ღეროზე",
            "ტანსაცმლისთვის ოპტიმიზებული",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 180 cm",
            "Width: 120 cm",
            "Depth: 50 cm",
            "Hanging rods: 2 pieces",
            "Load capacity: 50 kg per rod",
            "Optimized for clothing",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 180 см",
            "Ширина: 120 см",
            "Глубина: 50 см",
            "Штанги для вешалок: 2 штуки",
            "Нагрузка: 50 кг на штангу",
            "Оптимизирован для одежды",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/clothing-rack-1.jpg", "/images/clothing-rack-2.png"],
        colors: ["ნაცარი", t("black")],
        sizes: ["180x120x50"],
        category: t("clothingShelving"),
        rating: 4.5,
        reviewCount: 14,
      },
      "aluminum-rail-1": {
        id: "aluminum-rail-1",
        name: t("aluminumRailUnit"),
        price: 45.0,
        description: {
          ka: `ალუმინის რელსი მარკეტის აქსესუარებისთვის. მაღალი ხარისხის ალუმინისგან დამზადებული, იდეალურია მარკეტის თაროებისა და გამოფენისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 100 სმ
• სიგანე: 3 სმ  
• სისქე: 2 სმ
• მასალა: ალუმინი
• დატვირთვა: 15 კგ

მარტივი დამონტაჟება და გამოყენება.`,
          en: `Aluminum rail for market accessories. Made from high-quality aluminum, ideal for market shelves and displays.

**Technical Specifications:**
• Length: 100 cm
• Width: 3 cm
• Thickness: 2 cm
• Material: Aluminum
• Load capacity: 15 kg

Easy installation and use.`,
          ru: `Алюминиевый рельс для торговых аксессуаров. Изготовлен из высококачественного алюминия, идеален для торговых полок и витрин.

**Технические характеристики:**
• Длина: 100 см
• Ширина: 3 см
• Толщина: 2 см
• Материал: Алюминий
• Нагрузка: 15 кг

Простая установка и использование.`,
        },
        features: {
          ka: [
            "სიგრძე: 100 სმ",
            "სიგანე: 3 სმ",
            "სისქე: 2 სმ",
            "მასალა: ალუმინი",
            "დატვირთვა: 15 კგ",
            "მსუბუქი და მტკიცე",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Length: 100 cm",
            "Width: 3 cm",
            "Thickness: 2 cm",
            "Material: Aluminum",
            "Load capacity: 15 kg",
            "Lightweight and durable",
            "Corrosion resistant",
            "Easy installation",
          ],
          ru: [
            "Длина: 100 см",
            "Ширина: 3 см",
            "Толщина: 2 см",
            "Материал: Алюминий",
            "Нагрузка: 15 кг",
            "Легкий и прочный",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: [
          "/images/aluminum-rail-1.jpg",
          "/images/aluminum-rail-2.jpg",
          "/images/aluminum-rail-3.jpg",
          "/images/aluminum-rail-4.jpg",
          "/images/aluminum-rail-5.jpg",
        ],
        colors: [t("aluminum")],
        sizes: ["100x3x2"],
        category: t("aluminumRail"),
        rating: 4.6,
        reviewCount: 22,
      },
      "perforated-profile-1": {
        id: "perforated-profile-1",
        name: t("perforatedProfileUnit"),
        price: 85.0,
        description: {
          ka: `პერფორირებული პროფილი თაროს დამჭერით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მარკეტის თაროებისა და აქსესუარებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 5 სმ  
• სისქე: 3 სმ
• პერფორაციის ზომა: 5x5 მმ
• დატვირთვა: 25 კგ

რეგულირებადი სიმაღლე და მარტივი მონტაჟი.`,
          en: `Perforated profile with shelf bracket. Made from high-quality metal, ideal for market shelves and accessories.

**Technical Specifications:**
• Height: 200 cm
• Width: 5 cm
• Thickness: 3 cm
• Perforation size: 5x5 mm
• Load capacity: 25 kg

Adjustable height and easy installation.`,
          ru: `Перфорированный профиль с кронштейном полки. Изготовлен из высококачественного металла, идеален для торговых полок и аксессуаров.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 5 см
• Толщина: 3 см
• Размер перфорации: 5x5 мм
• Нагрузка: 25 кг

Регулируемая высота и простая установка.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 5 სმ",
            "სისქე: 3 სმ",
            "პერფორაციის ზომა: 5x5 მმ",
            "დატვირთვა: 25 კგ",
            "რეგულირებადი სიმაღლე",
            "კედლის მონტაჟი",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 cm",
            "Width: 5 cm",
            "Thickness: 3 cm",
            "Perforation size: 5x5 mm",
            "Load capacity: 25 kg",
            "Adjustable height",
            "Wall mounting",
            "Easy installation",
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 5 см",
            "Толщина: 3 см",
            "Размер перфорации: 5x5 мм",
            "Нагрузка: 25 кг",
            "Регулируемая высота",
            "Настенный монтаж",
            "Простая установка",
          ],
        },
        images: [
          "/images/perforated-profile-1.jpg",
          "/images/perforated-profile-2.jpg",
          "/images/perforated-profile-3.jpg",
          "/images/perforated-profile-4.jpg",
        ],
        colors: [t("white"), t("black")],
        sizes: ["200x5x3"],
        category: t("perforatedProfile"),
        rating: 4.4,
        reviewCount: 16,
      },
      "basket-shelving-1": {
        id: "basket-shelving-1",
        name: t("basketShelvingUnit"),
        price: 280.0,
        description: {
          ka: `კალათიანი სტელაჟი 4 კალათით და საბურავით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია სახლისა და ოფისისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 150 სმ
• სიგანე: 60 სმ  
• სიღრმე: 40 სმ
• კალათების რაოდენობა: 4
• დატვირთვა: 20 კგ კალათზე

კომპაქტური და ფუნქციური დიზაინი.`,
          en: `Basket shelving with 4 baskets and cover. Made from high-quality metal, ideal for home and office.

**Technical Specifications:**
• Height: 150 cm
• Width: 60 cm
• Depth: 40 cm
• Number of baskets: 4
• Load capacity: 20 kg per basket

Compact and functional design.`,
          ru: `Стеллаж с корзинами с 4 корзинами и крышкой. Изготовлен из высококачественного металла, идеален для дома и офиса.

**Технические характеристики:**
• Высота: 150 см
• Ширина: 60 см
• Глубина: 40 см
• Количество корзин: 4
• Нагрузка: 20 кг на корзину

Компактный и функциональный дизайн.`,
        },
        features: {
          ka: [
            "სიმაღლე: 150 სმ",
            "სიგანე: 60 სმ",
            "სიღრმე: 40 სმ",
            "კალათების რაოდენობა: 4",
            "დატვირთვა: 20 კგ კალათზე",
            "კომპაქტური დიზაინი",
            "საბურავით",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 150 cm",
            "Width: 60 cm",
            "Depth: 40 cm",
            "Number of baskets: 4",
            "Load capacity: 20 kg per basket",
            "Compact design",
            "With cover",
            "Easy assembly",
          ],
          ru: [
            "Высота: 150 см",
            "Ширина: 60 см",
            "Глубина: 40 см",
            "Количество корзин: 4",
            "Нагрузка: 20 кг на корзину",
            "Компактный дизайн",
            "С крышкой",
            "Простая сборка",
          ],
        },
        images: [
          "/images/basket-shelving-white.jpeg",
          "/images/basket-shelving-black.jpeg",
          "/images/basket-shelving-display.jpeg",
        ],
        colors: [t("white"), t("black")],
        sizes: ["150x60x40"],
        category: t("basketShelving"),
        rating: 4.5,
        reviewCount: 19,
      },
      "tier-shelving-1": {
        id: "tier-shelving-1",
        name: t("tierShelvingUnit"),
        price: 220.0,
        description: {
          ka: `4-იარუსიანი სტელაჟი. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია სახლისა და ოფისისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 160 სმ
• სიგანე: 80 სმ  
• სიღრმე: 35 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 30 კგ იარუსზე

მრავალფერი ფერების არჩევანი.`,
          en: `4-tier shelving unit. Made from high-quality metal, ideal for home and office.

**Technical Specifications:**
• Height: 160 cm
• Width: 80 cm
• Depth: 35 cm
• Number of tiers: 4
• Load capacity: 30 kg per tier

Multiple color options available.`,
          ru: `4-ярусный стеллаж. Изготовлен из высококачественного металла, идеален для дома и офиса.

**Технические характеристики:**
• Высота: 160 см
• Ширина: 80 см
• Глубина: 35 см
• Количество ярусов: 4
• Нагрузка: 30 кг на ярус

Доступны различные цветовые варианты.`,
        },
        features: {
          ka: [
            "სიმაღლე: 160 სმ",
            "სიგანე: 80 სმ",
            "სიღრმე: 35 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 30 კგ იარუსზე",
            "მრავალფერი ფერები",
            "კომპაქტური",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 160 cm",
            "Width: 80 cm",
            "Depth: 35 cm",
            "Number of tiers: 4",
            "Load capacity: 30 kg per tier",
            "Multiple color options",
            "Compact",
            "Easy assembly",
          ],
          ru: [
            "Высота: 160 см",
            "Ширина: 80 см",
            "Глубина: 35 см",
            "Количество ярусов: 4",
            "Нагрузка: 30 кг на ярус",
            "Несколько цветов",
            "Компактный",
            "Простая сборка",
          ],
        },
        images: [
          "/images/tier-shelving-colors.jpeg",
          "/images/tier-shelving-blue.jpeg",
          "/images/tier-shelving-red.jpeg",
        ],
        colors: ["ნაცარი", t("black")],
        sizes: ["160x80x35"],
        category: t("tierShelving"),
        rating: 4.3,
        reviewCount: 17,
      },
      "pallet-shelving-1": {
        id: "pallet-shelving-1",
        name: t("palletShelvingUnit"),
        price: 850.0,
        description: {
          ka: `პალეტური სტელაჟი მძიმე ტვირთებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია დიდი საწყობებისა და ლოგისტიკური ცენტრებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 400 სმ
• სიგანე: 270 სმ  
• სიღრმე: 110 სმ
• იარუსების რაოდენობა: 3
• დატვირთვა: 2000 კგ იარუსზე

სპეციალურად შექმნილია ევროპალეტების შენახვისთვის.`,
          en: `Pallet shelving for heavy loads. Made from high-quality metal, ideal for large warehouses and logistics centers.

**Technical Specifications:**
• Height: 400 cm
• Width: 270 cm
• Depth: 110 cm
• Number of tiers: 3
• Load capacity: 2000 kg per tier

Specially designed for Euro pallet storage.`,
          ru: `Паллетный стеллаж для тяжелых грузов. Изготовлен из высококачественного металла, идеален для больших складов и логистических центров.

**Технические характеристики:**
• Высота: 400 см
• Ширина: 270 см
• Глубина: 110 см
• Количество ярусов: 3
• Нагрузка: 2000 кг на ярус

Специально разработан для хранения европаллет.`,
        },
        features: {
          ka: [
            "სიმაღლე: 400 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 110 სმ",
            "იარუსების რაოდენობა: 3",
            "დატვირთვა: 2000 კგ იარუსზე",
            "ევროპალეტებისთვის",
            "მაღალი ტვირთამწეობა",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 400 cm",
            "Width: 270 cm",
            "Depth: 110 cm",
            "Number of tiers: 3",
            "Load capacity: 2000 kg per tier",
            "For Euro pallets",
            "High load capacity",
            "Easy assembly",
          ],
          ru: [
            "Высота: 400 см",
            "Ширина: 270 см",
            "Глубина: 110 см",
            "Количество ярусов: 3",
            "Нагрузка: 2000 кг на ярус",
            "Для европаллет",
            "Высокая грузоподъемность",
            "Простая сборка",
          ],
        },
        images: [
          "/images/pallet-shelving-1.jpg",
          "/images/pallet-shelving-2.jpg",
          "/images/pallet-shelving-3.jpg",
          "/images/pallet-shelving-4.png",
        ],
        colors: [t("blue"), "ნარინჯისფერი"],
        sizes: ["400x270x110"],
        category: t("palletShelving"),
        rating: 4.8,
        reviewCount: 8,
      },
      // Kitchen shelving products
      "kitchen-shelf-1": {
        id: "kitchen-shelf-1",
        name: t("kitchenShelfUnit"),
        price: 180.0,
        description: {
          ka: `სამზარეულოს სტელაჟი 4 იარუსით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია სამზარეულოსა და რესტორნებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 160 სმ
• სიგანე: 60 სმ  
• სიღრმე: 40 სმ
• იარუსების რაოდენობა: 4
• დატვირთვა: 40 კგ იარუსზე

კომპაქტური და ფუნქციური დიზაინი სამზარეულოსთვის.`,
          en: `Kitchen shelf with 4 tiers. Made from high-quality metal, ideal for kitchens and restaurants.

**Technical Specifications:**
• Height: 160 cm
• Width: 60 cm
• Depth: 40 cm
• Number of tiers: 4
• Load capacity: 40 kg per tier

Compact and functional design for kitchens.`,
          ru: `Кухонный стеллаж с 4 ярусами. Изготовлен из высококачественного металла, идеален для кухонь и ресторанов.

**Технические характеристики:**
• Высота: 160 см
• Ширина: 60 см
• Глубина: 40 см
• Количество ярусов: 4
• Нагрузка: 40 кг на ярус

Компактный и функциональный дизайн для кухонь.`,
        },
        features: {
          ka: [
            "სიმაღლე: 160 სმ",
            "სიგანე: 60 სმ",
            "სიღრმე: 40 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 40 კგ იარუსზე",
            "სამზარეულოსთვის ოპტიმიზებული",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 160 cm",
            "Width: 60 cm",
            "Depth: 40 cm",
            "Number of tiers: 4",
            "Load capacity: 40 kg per tier",
            "Optimized for kitchens",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 160 см",
            "Ширина: 60 см",
            "Глубина: 40 см",
            "Количество ярусов: 4",
            "Нагрузка: 40 кг на ярус",
            "Оптимизирован для кухонь",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/kitchen-shelving/kitchen-shelf-1.png"],
        colors: [t("white"), "ნაცარი"],
        sizes: ["160x60x40"],
        category: t("kitchenShelving"),
        rating: 4.6,
        reviewCount: 25,
      },
      "kitchen-shelf-2": {
        id: "kitchen-shelf-2",
        name: t("kitchenShelfUnit"),
        price: 220.0,
        description: {
          ka: `სამზარეულოს სტელაჟი 5 იარუსით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია სამზარეულოსა და რესტორნებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 180 სმ
• სიგანე: 80 სმ  
• სიღრმე: 45 სმ
• იარუსების რაოდენობა: 5
• დატვირთვა: 35 კგ იარუსზე

გაფართოებული ვერსია მეტი შენახვის ადგილით.`,
          en: `Kitchen shelf with 5 tiers. Made from high-quality metal, ideal for kitchens and restaurants.

**Technical Specifications:**
• Height: 180 cm
• Width: 80 cm
• Depth: 45 cm
• Number of tiers: 5
• Load capacity: 35 kg per tier

Extended version with more storage space.`,
          ru: `Кухонный стеллаж с 5 ярусами. Изготовлен из высококачественного металла, идеален для кухонь и ресторанов.

**Технические характеристики:**
• Высота: 180 см
• Ширина: 80 см
• Глубина: 45 см
• Количество ярусов: 5
• Нагрузка: 35 кг на ярус

Расширенная версия с большим местом для хранения.`,
        },
        features: {
          ka: [
            "სიმაღლე: 180 სმ",
            "სიგანე: 80 სმ",
            "სიღრმე: 45 სმ",
            "იარუსების რაოდენობა: 5",
            "დატვირთვა: 35 კგ იარუსზე",
            "გაფართოებული ვერსია",
            "კოროზიისგან დაცული",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 180 cm",
            "Width: 80 cm",
            "Depth: 45 cm",
            "Number of tiers: 5",
            "Load capacity: 35 kg per tier",
            "Extended version",
            "Corrosion resistant",
            "Easy assembly",
          ],
          ru: [
            "Высота: 180 см",
            "Ширина: 80 см",
            "Глубина: 45 см",
            "Количество ярусов: 5",
            "Нагрузка: 35 кг на ярус",
            "Расширенная версия",
            "Устойчив к коррозии",
            "Простая сборка",
          ],
        },
        images: ["/images/kitchen-shelving/kitchen-shelf-2.png"],
        colors: [t("white"), "ნაცარი"],
        sizes: ["180x80x45"],
        category: t("kitchenShelving"),
        rating: 4.7,
        reviewCount: 18,
      },
      "chrome-wire-shelf-120": {
        id: "chrome-wire-shelf-120",
        name: t("chromeWireShelf"),
        price: 95.0,
        description: {
          ka: `ქრომირებული მავთულის თარო 120 სმ სიგრძით. მაღალი ხარისხის ქრომირებული ლითონისგან დამზადებული, იდეალურია სამზარეულოსა და რესტორნებისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 120 სმ
• სიგანე: 60 სმ  
• სიმაღლე: 4 სმ
• მასალა: ქრომირებული ლითონი
• დატვირთვა: 50 კგ

ჰიგიენური და მარტივად გასაწმენდი.`,
          en: `Chrome wire shelf 120 cm length. Made from high-quality chrome-plated metal, ideal for kitchens and restaurants.

**Technical Specifications:**
• Length: 120 cm
• Width: 60 cm
• Height: 4 cm
• Material: Chrome-plated metal
• Load capacity: 50 kg

Hygienic and easy to clean.`,
          ru: `Хромированная проволочная полка длиной 120 см. Изготовлена из высококачественного хромированного металла, идеальна для кухонь и ресторанов.

**Технические характеристики:**
• Длина: 120 см
• Ширина: 60 см
• Высота: 4 см
• Материал: Хромированный металл
• Нагрузка: 50 кг

Гигиеничная и легко моется.`,
        },
        features: {
          ka: [
            "სიგრძე: 120 სმ",
            "სიგანე: 60 სმ",
            "სიმაღლე: 4 სმ",
            "მასალა: ქრომირებული ლითონი",
            "დატვირთვა: 50 კგ",
            "ჰიგიენური",
            "მარტივად გასაწმენდი",
            "კოროზიისგან დაცული",
          ],
          en: [
            "Length: 120 cm",
            "Width: 60 cm",
            "Height: 4 cm",
            "Material: Chrome-plated metal",
            "Load capacity: 50 kg",
            "Hygienic",
            "Easy to clean",
            "Corrosion resistant",
          ],
          ru: [
            "Длина: 120 см",
            "Ширина: 60 см",
            "Высота: 4 см",
            "Материал: Хромированный металл",
            "Нагрузка: 50 кг",
            "Гигиеничная",
            "Легко моется",
            "Устойчива к коррозии",
          ],
        },
        images: ["/images/kitchen-shelving/chrome-wire-shelf-200x120.jpeg"],
        colors: ["ქრომი"],
        sizes: ["120x60x4"],
        category: t("kitchenShelving"),
        rating: 4.8,
        reviewCount: 32,
      },
      "stainless-steel-shelf-120": {
        id: "stainless-steel-shelf-120",
        name: t("stainlessSteelShelf"),
        price: 150.0,
        description: {
          ka: `უჟანგავი ფოლადის თარო 120 სმ სიგრძით. მაღალი ხარისხის უჟანგავი ფოლადისგან დამზადებული, იდეალურია პროფესიონალური სამზარეულოებისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 120 სმ
• სიგანე: 60 სმ  
• სიმაღლე: 5 სმ
• მასალა: უჟანგავი ფოლადი
• დატვირთვა: 80 კგ

პროფესიონალური ხარისხის, ჰიგიენური და გამძლე.`,
          en: `Stainless steel shelf 120 cm length. Made from high-quality stainless steel, ideal for professional kitchens.

**Technical Specifications:**
• Length: 120 cm
• Width: 60 cm
• Height: 5 cm
• Material: Stainless steel
• Load capacity: 80 kg

Professional grade, hygienic and durable.`,
          ru: `Полка из нержавеющей стали длиной 120 см. Изготовлена из высококачественной нержавеющей стали, идеальна для профессиональных кухонь.

**Технические характеристики:**
• Длина: 120 см
• Ширина: 60 см
• Высота: 5 см
• Материал: Нержавеющая сталь
• Нагрузка: 80 кг

Профессиональное качество, гигиеничная и прочная.`,
        },
        features: {
          ka: [
            "სიგრძე: 120 სმ",
            "სიგანე: 60 სმ",
            "სიმაღლე: 5 სმ",
            "მასალა: უჟანგავი ფოლადი",
            "დატვირთვა: 80 კგ",
            "პროფესიონალური ხარისხი",
            "ჰიგიენური",
            "გამძლე",
          ],
          en: [
            "Length: 120 cm",
            "Width: 60 cm",
            "Height: 5 cm",
            "Material: Stainless steel",
            "Load capacity: 80 kg",
            "Professional grade",
            "Hygienic",
            "Durable",
          ],
          ru: [
            "Длина: 120 см",
            "Ширина: 60 см",
            "Высота: 5 см",
            "Материал: Нержавеющая сталь",
            "Нагрузка: 80 кг",
            "Профессиональное качество",
            "Гигиеничная",
            "Прочная",
          ],
        },
        images: ["/images/kitchen-shelving/stainless-steel-shelf-l120.jpeg"],
        colors: ["უჟანგავი ფოლადი"],
        sizes: ["120x60x5"],
        category: t("kitchenShelving"),
        rating: 4.9,
        reviewCount: 28,
      },
      "stainless-steel-shelf-180": {
        id: "stainless-steel-shelf-180",
        name: t("stainlessSteelShelf"),
        price: 210.0,
        description: {
          ka: `უჟანგავი ფოლადის თარო 180 სმ სიგრძით. მაღალი ხარისხის უჟანგავი ფოლადისგან დამზადებული, იდეალურია დიდი პროფესიონალური სამზარეულოებისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 180 სმ
• სიგანე: 60 სმ  
• სიმაღლე: 5 სმ
• მასალა: უჟანგავი ფოლადი
• დატვირთვა: 100 კგ

გაფართოებული ვერსია დიდი სამზარეულოებისთვის.`,
          en: `Stainless steel shelf 180 cm length. Made from high-quality stainless steel, ideal for large professional kitchens.

**Technical Specifications:**
• Length: 180 cm
• Width: 60 cm
• Height: 5 cm
• Material: Stainless steel
• Load capacity: 100 kg

Extended version for large kitchens.`,
          ru: `Полка из нержавеющей стали длиной 180 см. Изготовлена из высококачественной нержавеющей стали, идеальна для больших профессиональных кухонь.

**Технические характеристики:**
• Длина: 180 см
• Ширина: 60 см
• Высота: 5 см
• Материал: Нержавеющая сталь
• Нагрузка: 100 кг

Расширенная версия для больших кухонь.`,
        },
        features: {
          ka: [
            "სიგრძე: 180 სმ",
            "სიგანე: 60 სმ",
            "სიმაღლე: 5 სმ",
            "მასალა: უჟანგავი ფოლადი",
            "დატვირთვა: 100 კგ",
            "გაფართოებული ვერსია",
            "ჰიგიენური",
            "გამძლე",
          ],
          en: [
            "Length: 180 cm",
            "Width: 60 cm",
            "Height: 5 cm",
            "Material: Stainless steel",
            "Load capacity: 100 kg",
            "Extended version",
            "Hygienic",
            "Durable",
          ],
          ru: [
            "Длина: 180 см",
            "Ширина: 60 см",
            "Высота: 5 см",
            "Материал: Нержавеющая сталь",
            "Нагрузка: 100 кг",
            "Расширенная версия",
            "Гигиеничная",
            "Прочная",
          ],
        },
        images: ["/images/kitchen-shelving/stainless-steel-shelf-l180.jpeg"],
        colors: ["უჟანგავი ფოლადი"],
        sizes: ["180x60x5"],
        category: t("kitchenShelving"),
        rating: 4.9,
        reviewCount: 22,
      },
      "stainless-steel-trays": {
        id: "stainless-steel-trays",
        name: t("stainlessSteelTrays"),
        price: 85.0,
        description: {
          ka: `უჟანგავი ფოლადის ტაცები სამზარეულოსთვის. მაღალი ხარისხის უჟანგავი ფოლადისგან დამზადებული, იდეალურია პროფესიონალური სამზარეულოებისთვის.

**ტექნიკური მახასიათებლები:**
• ზომა: 60x40 სმ
• სიღრმე: 2 სმ  
• მასალა: უჟანგავი ფოლადი
• რაოდენობა: 3 ცალი კომპლექტში
• დატვირთვა: 15 კგ ტაცზე

იდეალურია საკვების მომზადებისა და შენახვისთვის.`,
          en: `Stainless steel trays for kitchen. Made from high-quality stainless steel, ideal for professional kitchens.

**Technical Specifications:**
• Size: 60x40 cm
• Depth: 2 cm
• Material: Stainless steel
• Quantity: 3 pieces per set
• Load capacity: 15 kg per tray

Perfect for food preparation and storage.`,
          ru: `Лотки из нержавеющей стали для кухни. Изготовлены из высококачественной нержавеющей стали, идеальны для профессиональных кухонь.

**Технические характеристики:**
• Размер: 60x40 см
• Глубина: 2 см
• Материал: Нержавеющая сталь
• Количество: 3 штуки в комплекте
• Нагрузка: 15 кг на лоток

Идеальны для приготовления и хранения пищи.`,
        },
        features: {
          ka: [
            "ზომა: 60x40 სმ",
            "სიღრმე: 2 სმ",
            "მასალა: უჟანგავი ფოლადი",
            "რაოდენობა: 3 ცალი კომპლექტში",
            "დატვირთვა: 15 კგ ტაცზე",
            "საკვების მომზადებისთვის",
            "ჰიგიენური",
            "გამძლე",
          ],
          en: [
            "Size: 60x40 cm",
            "Depth: 2 cm",
            "Material: Stainless steel",
            "Quantity: 3 pieces per set",
            "Load capacity: 15 kg per tray",
            "For food preparation",
            "Hygienic",
            "Durable",
          ],
          ru: [
            "Размер: 60x40 см",
            "Глубина: 2 см",
            "Материал: Нержавеющая сталь",
            "Количество: 3 штуки в комплекте",
            "Нагрузка: 15 кг на лоток",
            "Для приготовления пищи",
            "Гигиеничные",
            "Прочные",
          ],
        },
        images: ["/images/kitchen-shelving/stainless-steel-trays.png"],
        colors: ["უჟანგავი ფოლადი"],
        sizes: ["60x40x2"],
        category: t("kitchenShelving"),
        rating: 4.7,
        reviewCount: 15,
      },
    }

    return products[productId]
  }

  const product = getProductData(params.id)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center">{t("productNotFound")}</h1>
        <p className="text-center mt-4">{t("productNotFoundDescription")}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images Section */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-md shadow-sm border">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-black mb-4">{product.name}</h1>
            <p className="text-lg text-black/80">{product.category}</p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-black font-medium">{product.rating}</span>
            <span className="text-black/60">
              ({product.reviewCount} {t("reviews")})
            </span>
          </div>

          <div className="prose max-w-none">
            <div
              className="text-black leading-relaxed text-base"
              dangerouslySetInnerHTML={{
                __html: product.description[language]
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-black">$1</strong>')
                  .replace(/\n/g, "<br>"),
              }}
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">{t("features")}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features[language].map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-black">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-black mb-3">{t("colors")}</h4>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-black rounded-full text-sm border">
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-black mb-3">{t("sizes")}</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm border">
                    {size} სმ
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
