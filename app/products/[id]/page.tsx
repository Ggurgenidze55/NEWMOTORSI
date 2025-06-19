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
          ru: `Алюминиевый рельс для торговых аксессуаров. Изготовлен из высококачественного металла, идеален для торговых полок и витрин.

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
            "Multiple colors",
            "Compact",
            "Easy assembly",
          ],
          ru: [
            "Высота: 160 см",
            "Ширина: 80 см",
            "Глубина: 35 см",
            "Количество ярусов: 4",
            "Нагрузка: 30 кг на ярус",
            "Различные цвета",
            "Компактный",
            "Простая сборка",
          ],
        },
        images: [
          "/images/tier-shelving-colors.jpeg",
          "/images/tier-shelving-blue.jpeg",
          "/images/tier-shelving-red.jpeg",
        ],
        colors: [t("blue"), t("red"), "ყვითელი", "მწვანე"],
        sizes: ["160x80x35"],
        category: t("tierShelving"),
        rating: 4.4,
        reviewCount: 25,
      },
      "pallet-shelving-1": {
        id: "pallet-shelving-1",
        name: t("palletShelvingUnit1"),
        price: 850.0,
        description: {
          ka: `საპალეტე სტელაჟი 352x270x85. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია დიდი საწყობებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 352 სმ
• სიგანე: 270 სმ  
• სიღრმე: 85 სმ
• იარუსების რაოდენობა: 3
• დატვირთვა: 1000 კგ იარუსზე

პროფესიონალური საწყობო გადაწყვეტა.`,
          en: `Pallet racking 352x270x85. Made from high-quality metal, ideal for large warehouses.

**Technical Specifications:**
• Height: 352 cm
• Width: 270 cm
• Depth: 85 cm
• Number of tiers: 3
• Load capacity: 1000 kg per tier

Professional warehouse solution.`,
          ru: `Паллетный стеллаж 352x270x85. Изготовлен из высококачественного металла, идеален для больших складов.

**Технические характеристики:**
• Высота: 352 см
• Ширина: 270 см
• Глубина: 85 см
• Количество ярусов: 3
• Нагрузка: 1000 кг на ярус

Профессиональное складское решение.`,
        },
        features: {
          ka: [
            "სიმაღლე: 352 სმ",
            "სიგანე: 270 სმ",
            "სიღრმე: 85 სმ",
            "იარუსების რაოდენობა: 3",
            "დატვირთვა: 1000 კგ იარუსზე",
            "პროფესიონალური",
            "მაღალი ტვირთამწეობა",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 352 cm",
            "Width: 270 cm",
            "Depth: 85 cm",
            "Number of tiers: 3",
            "Load capacity: 1000 kg per tier",
            "Professional",
            "High load capacity",
            "Easy assembly",
          ],
          ru: [
            "Высота: 352 см",
            "Ширина: 270 см",
            "Глубина: 85 см",
            "Количество ярусов: 3",
            "Нагрузка: 1000 кг на ярус",
            "Профессиональный",
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
        sizes: ["352x270x85"],
        category: t("palletShelving"),
        rating: 4.8,
        reviewCount: 8,
      },
      "archive-shelving-1": {
        id: "archive-shelving-1",
        name: t("archiveShelvingUnit"),
        price: 420.0,
        description: {
          ka: `საარქივო სტელაჟი დოკუმენტებისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ოფისებისა და არქივებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 100 სმ  
• სიღრმე: 35 სმ
• იარუსების რაოდენობა: 6
• დატვირთვა: 80 კგ იარუსზე

სპეციალურად შექმნილია დოკუმენტების შენახვისთვის.`,
          en: `Archive shelving for documents. Made from high-quality metal, ideal for offices and archives.

**Technical Specifications:**
• Height: 200 cm
• Width: 100 cm
• Depth: 35 cm
• Number of tiers: 6
• Load capacity: 80 kg per tier

Specially designed for document storage.`,
          ru: `Архивный стеллаж для документов. Изготовлен из высококачественного металла, идеален для офисов и архивов.

**Технические характеристики:**
• Высота: 200 см
• Ширина: 100 см
• Глубина: 35 см
• Количество ярусов: 6
• Нагрузка: 80 кг на ярус

Специально разработан для хранения документов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 100 სმ",
            "სიღრმე: 35 სმ",
            "იარუსების რაოდენობა: 6",
            "დატვირთვა: 80 კგ იარუსზე",
            "დოკუმენტებისთვის",
            "კომპაქტური",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 cm",
            "Width: 100 cm",
            "Depth: 35 cm",
            "Number of tiers: 6",
            "Load capacity: 80 kg per tier",
            "For documents",
            "Compact",
            "Easy assembly",
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 100 см",
            "Глубина: 35 см",
            "Количество ярусов: 6",
            "Нагрузка: 80 кг на ярус",
            "Для документов",
            "Компактный",
            "Простая сборка",
          ],
        },
        images: ["/images/archive-shelving-1.jpg", "/images/archive-shelving-2.jpg"],
        colors: ["ნაცარი", t("white")],
        sizes: ["200x100x35"],
        category: t("archiveShelving"),
        rating: 4.6,
        reviewCount: 13,
      },
      "shelf-price-display-1": {
        id: "shelf-price-display-1",
        name: t("shelfPriceDisplayUnit"),
        price: 25.0,
        description: {
          ka: `თაროს ფასმაჩვენებელი სისტემა. მაღალი ხარისხის პლასტმასისგან დამზადებული, იდეალურია მარკეტებისა და მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 100 სმ
• სიმაღლე: 4 სმ  
• სისქე: 2 სმ
• მასალა: გამძლე პლასტმასი
• ფერი: გამჭვირვალე

მარტივი დამონტაჟება და გამოყენება.`,
          en: `Shelf price display system. Made from high-quality plastic, ideal for markets and stores.

**Technical Specifications:**
• Length: 100 cm
• Height: 4 cm
• Thickness: 2 cm
• Material: Durable plastic
• Color: Transparent

Easy installation and use.`,
          ru: `Система ценовых полок. Изготовлена из высококачественного пластика, идеальна для рынков и магазинов.

**Технические характеристики:**
• Длина: 100 см
• Высота: 4 см
• Толщина: 2 см
• Материал: Прочный пластик
• Цвет: Прозрачный

Простая установка и использование.`,
        },
        features: {
          ka: [
            "სიგრძე: 100 სმ",
            "სიმაღლე: 4 სმ",
            "სისქე: 2 სმ",
            "მასალა: გამძლე პლასტმასი",
            "ფერი: გამჭვირვალე",
            "მარტივი დამონტაჟება",
            "ეკონომიური",
            "მრავალჯერადი გამოყენება",
          ],
          en: [
            "Length: 100 cm",
            "Height: 4 cm",
            "Thickness: 2 cm",
            "Material: Durable plastic",
            "Color: Transparent",
            "Easy installation",
            "Economical",
            "Reusable",
          ],
          ru: [
            "Длина: 100 см",
            "Высота: 4 см",
            "Толщина: 2 см",
            "Материал: Прочный пластик",
            "Цвет: Прозрачный",
            "Простая установка",
            "Экономичный",
            "\
