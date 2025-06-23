"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"
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
          ka: `თითოეული იარუსი ძლიერია და გათვლილია 300 კილოგრამამდე ტვირთზე, რაც უზრუნველყოფს მძიმე ნივთების უსაფრთხო და სტაბილურ შენახვას. 4 იარუსიანი სტრუქტურა გთავაზობთ პრაქტიკულ განლაგებას, ხოლო 100 სმ სიგანისა და 60 სმ სიღრმის თაროები იდეალურია როგორც ყუთებისთვის, ასევე სხვადასხვა ზომის ტვირთისთვის.


        ეს მოდელი იდეალურია:
        •	სასაწყობე სივრცეებისთვის
        •	ქარხნებისთვის და საწარმოებისთვის
        •	სავაჭრო ობიექტებისთვის
        •	ოფისებისა და არქივებისთვის

        შესაძლებელია იარუსების რაოდნობის შეცვლა და სტელაჟების გადაბმა. ფერების ფართო არჩევანი.`,
          en: `Each tier is strong and supports up to 300 kg, ensuring safe and stable storage of heavy items. The 4-tier design offers a practical layout, while the 100 cm width and 60 cm depth shelves are ideal for boxes and various-sized loads.

        This model is ideal for:
        •	Storage spaces
        •	Factories and production facilities
        •	Retail environments
        •	Offices and archives
        
        The number of tiers can be customized, and shelving units can be connected. A wide range of colors is available.`,
          ru: `Каждый ярус прочный и рассчитан на нагрузку до 300 кг, что обеспечивает безопасное и устойчивое хранение тяжёлых предметов. Конструкция с 4 ярусами предлагает практичное расположение, а полки шириной 100 см и глубиной 60 см идеально подходят как для коробок, так и для грузов разных размеров.

        Эта модель идеально подходит для:
        •	Складских помещений
        •	Заводов и производств
        •	Торговых объектов
        •	Офисов и архивов
        
        Количество ярусов можно изменить, а стеллажи можно соединить между собой. Доступен широкий выбор цветов.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 ან 250 სმ",
            "სიგანე: 100 სმ",
            "სიღრმე: 60 სმ",
            "იარუსების რაოდენობა: 4",
            "დატვირთვა: 300 კგ ერთ იარუსზე",
            
          ],
          en: [
            "Height: 200 or 250 cm",
            "Width: 100 cm",
            "Depth: 60 cm",
            "Number of tiers: 4",
            "Load capacity: 300 kg per tier",
            
          ],
          ru: [
            "Высота: 200 или 250 см",
            "Ширина: 100 см",
            "Глубина: 60 см",
            "Количество ярусов: 4",
            "Нагрузка: 300 кг на ярус",
            
          ],
        },
        images: [
          "/images/blue-warehouse-shelving.png",
          
        ],
        
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
        colors: [t("blue"), "ნაცარ���"],
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
      "perforated-wall-1": {
        id: "perforated-wall-1",
        name: t("perforatedWallUnit"),
        price: 320.0,
        description: {
          ka: `პერფორირებული კედელი აქსესუარების საკიდისთვის. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია მარკეტებისა და მაღაზიებისთვის.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიღრმე: 100 სმ  
• სისქე: 2 სმ
• პერფორაციის ზომა: 5x5 მმ
• დატვირთვა: 50 კგ

მრავალფუნქციური და ეფექტური გადაწყვეტა.`,
          en: `Perforated wall for accessory hanging. Made from high-quality metal, ideal for markets and stores.

**Technical Specifications:**
• Height: 200 cm
• Depth: 100 cm
• Thickness: 2 cm
• Perforation size: 5x5 mm
• Load capacity: 50 kg

Multifunctional and efficient solution.`,
          ru: `Перфорированная стена для подвешивания аксессуаров. Изготовлена из высококачественного металла, идеальна для рынков и магазинов.

**Технические характеристики:**
• Высота: 200 см
• Глубина: 100 см
• Толщина: 2 см
• Размер перфорации: 5x5 мм
• Нагрузка: 50 кг

Многофункциональное и эффективное решение.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიღრმე: 100 სმ",
            "სისქე: 2 სმ",
            "პერფორაციის ზომა: 5x5 მმ",
            "დატვირთვა: 50 კგ",
            "მრავალფუნქციური",
            "კედლის მონტაჟი",
            "მარტივი მონტაჟი",
          ],
          en: [
            "Height: 200 cm",
            "Depth: 100 cm",
            "Thickness: 2 cm",
            "Perforation size: 5x5 mm",
            "Load capacity: 50 kg",
            "Multifunctional",
            "Wall mounting",
            "Easy installation",
          ],
          ru: [
            "Высота: 200 см",
            "Глубина: 100 см",
            "Толщина: 2 см",
            "Размер перфорации: 5x5 мм",
            "Нагрузка: 50 кг",
            "Многофункциональная",
            "Настенный монтаж",
            "Простая установка",
          ],
        },
        images: [
          "/images/perforated-wall-cover-1.jpg",
          "/images/perforated-wall-cover-2.jpg",
          "/images/perforated-wall-cover-3.jpg",
        ],
        colors: [t("white"), t("black")],
        sizes: ["200x100x2"],
        category: t("perforatedWall"),
        rating: 4.3,
        reviewCount: 11,
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
            "Многоразовое использование",
          ],
        },
        images: ["/images/shelf-price-display-1.jpg"],
        colors: ["გამჭვირვალე"],
        sizes: ["100x4x2"],
        category: t("shelfPriceDisplay"),
        rating: 4.2,
        reviewCount: 31,
      },
      "plastic-frames-1": {
        id: "plastic-frames-1",
        name: t("plasticFramesUnit"),
        price: 15.0,
        description: {
          ka: `ფერადი პლასტმასის ჩარჩოები. მაღალი ხარისხის პლასტმასისგან დამზადებული, იდეალურია ფასების და ინფორმაციის გამოსაჩენად.

**ტექნიკური მახასიათებლები:**
• ზომა: A4 (21x30 სმ)
• მასალა: გამძლე პლასტმასი
• სისქე: 3 მმ
• ფერები: წითელი, ლურჯი, ყვითელი, მწვანე

მრავალფერი ფერების არჩევანი.`,
          en: `Colored plastic frames. Made from high-quality plastic, ideal for displaying prices and information.

**Technical Specifications:**
• Size: A4 (21x30 cm)
• Material: Durable plastic
• Thickness: 3 mm
• Colors: Red, blue, yellow, green

Multiple color options available.`,
          ru: `Цветные пластиковые рамки. Изготовлены из высококачественного пластика, идеальны для отображения цен и информации.

**Технические характеристики:**
• Размер: A4 (21x30 см)
• Материал: Прочный пластик
• Толщина: 3 мм
• Цвета: Красный, синий, желтый, зеленый

Доступны различные цветовые варианты.`,
        },
        features: {
          ka: [
            "ზომა: A4 (21x30 სმ)",
            "მასალა: გამძლე პლასტმასი",
            "სისქე: 3 მმ",
            "ფერები: წითელი, ლურჯი, ყვითელი, მწვანე",
            "მსუბუქი",
            "ეკონომიური",
            "მრავალჯერადი გამოყენება",
            "მარტივი გამოყენება",
          ],
          en: [
            "Size: A4 (21x30 cm)",
            "Material: Durable plastic",
            "Thickness: 3 mm",
            "Colors: Red, blue, yellow, green",
            "Lightweight",
            "Economical",
            "Reusable",
            "Easy to use",
          ],
          ru: [
            "Размер: A4 (21x30 см)",
            "Материал: Прочный пластик",
            "Толщина: 3 мм",
            "Цвета: Красный, синий, желтый, зеленый",
            "Легкие",
            "Экономичные",
            "Многоразовое использование",
            "Простота использования",
          ],
        },
        images: ["/images/plastic-frames-1.jpg"],
        colors: [t("red"), t("blue"), "ყვითელი", "მწვანე"],
        sizes: ["A4"],
        category: t("plasticFrames"),
        rating: 4.1,
        reviewCount: 42,
      },
      "frame-stands-1": {
        id: "frame-stands-1",
        name: t("frameStandsUnit"),
        price: 35.0,
        description: {
          ka: `ჩარჩოს სადგამი რეგულირებადი. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია ფასების და ინფორმაციის გამოსაჩენად.

**ტექნიკური მახასიათებლები:**
• სიმაღლე: 15-25 სმ (რეგულირებადი)
• ბაზის ზომა: 10x10 სმ
• მასალა: ლითონი
• ფერი: ქრომირებული

რეგულირებადი სიმაღლე და მტკიცე კონსტრუქცია.`,
          en: `Adjustable frame stand. Made from high-quality metal, ideal for displaying prices and information.

**Technical Specifications:**
• Height: 15-25 cm (adjustable)
• Base size: 10x10 cm
• Material: Metal
• Color: Chrome

Adjustable height and sturdy construction.`,
          ru: `Регулируемая подставка для рамок. Изготовлена из высококачественного металла, идеальна для отображения цен и информации.

**Технические характеристики:**
• Высота: 15-25 см (регулируемая)
• Размер основания: 10x10 см
• Материал: Металл
• Цвет: Хром

Регулируемая высота и прочная конструкция.`,
        },
        features: {
          ka: [
            "სიმაღლე: 15-25 სმ (რეგულირებადი)",
            "ბაზის ზომა: 10x10 სმ",
            "მასალა: ლითონი",
            "ფერი: ქრომირებული",
            "რეგულირებადი სიმაღლე",
            "მტკიცე კონსტრუქცია",
            "მარტივი გამოყენება",
            "პროფესიონალური",
          ],
          en: [
            "Height: 15-25 cm (adjustable)",
            "Base size: 10x10 cm",
            "Material: Metal",
            "Color: Chrome",
            "Adjustable height",
            "Sturdy construction",
            "Easy to use",
            "Professional",
          ],
          ru: [
            "Высота: 15-25 см (регулируемая)",
            "Размер основания: 10x10 см",
            "Материал: Металл",
            "Цвет: Хром",
            "Регулируемая высота",
            "Прочная конструкция",
            "Простота использования",
            "Профессиональная",
          ],
        },
        images: ["/images/frame-stands-1.jpg"],
        colors: ["ქრომირებული"],
        sizes: ["15-25x10x10"],
        category: t("frameStands"),
        rating: 4.3,
        reviewCount: 18,
      },
      "pallet-trolley-1": {
        id: "pallet-trolley-1",
        name: t("palletTrolleyUnit"),
        price: 180.0,
        description: {
          ka: `პალეტის ურიკა როხლი. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ლოჯისტიკისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 120 სმ
• სიგანე: 80 სმ  
• სიმაღლე: 15 სმ
• დატვირთვა: 1000 კგ
• თვლების რაოდენობა: 4

მძიმე ტვირთების გადასატანად.`,
          en: `Pallet trolley with wheels. Made from high-quality metal, ideal for warehouses and logistics.

**Technical Specifications:**
• Length: 120 cm
• Width: 80 cm
• Height: 15 cm
• Load capacity: 1000 kg
• Number of wheels: 4

For transporting heavy loads.`,
          ru: `Паллетная тележка с колесами. Изготовлена из высококачественного металла, идеальна для складов и логистики.

**Технические характеристики:**
• Длина: 120 см
• Ширина: 80 см
• Высота: 15 см
• Нагрузка: 1000 кг
• Количество колес: 4

Для транспортировки тяжелых грузов.`,
        },
        features: {
          ka: [
            "სიგრძე: 120 სმ",
            "სიგანე: 80 სმ",
            "სიმაღლე: 15 სმ",
            "დატვირთვა: 1000 კგ",
            "თვლების რაოდენობა: 4",
            "მძიმე ტვირთებისთვის",
            "მანევრირებადი",
            "გამძლე",
          ],
          en: [
            "Length: 120 cm",
            "Width: 80 cm",
            "Height: 15 cm",
            "Load capacity: 1000 kg",
            "Number of wheels: 4",
            "For heavy loads",
            "Maneuverable",
            "Durable",
          ],
          ru: [
            "Длина: 120 см",
            "Ширина: 80 см",
            "Высота: 15 см",
            "Нагрузка: 1000 кг",
            "Количество колес: 4",
            "Для тяжелых грузов",
            "Маневренная",
            "Прочная",
          ],
        },
        images: ["/images/pallet-trolley-red.jpeg"],
        colors: [t("red")],
        sizes: ["120x80x15"],
        category: t("palletTrolley"),
        rating: 4.7,
        reviewCount: 12,
      },
      "platform-trolley-blue": {
        id: "platform-trolley-blue",
        name: t("platformTrolleyBlue"),
        price: 150.0,
        description: {
          ka: `პლატფორმის ურიკა ლურჯი საბურავით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ლოჯისტიკისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 90 სმ
• სიგანე: 60 სმ  
• სიმაღლე: 85 სმ
• დატვირთვა: 300 კგ
• თვლების რაოდენობა: 4

საბურავით დაცული ტვირთისთვის.`,
          en: `Platform trolley with blue cover. Made from high-quality metal, ideal for warehouses and logistics.

**Technical Specifications:**
• Length: 90 cm
• Width: 60 cm
• Height: 85 cm
• Load capacity: 300 kg
• Number of wheels: 4

With cover for protected cargo.`,
          ru: `Платформенная тележка с синим покрытием. Изготовлена из высококачественного металла, идеальна для складов и логистики.

**Технические характеристики:**
• Длина: 90 см
• Ширина: 60 см
• Высота: 85 см
• Нагрузка: 300 кг
• Количество колес: 4

С покрытием для защищенного груза.`,
        },
        features: {
          ka: [
            "სიგრძე: 90 სმ",
            "სიგანე: 60 სმ",
            "სიმაღლე: 85 სმ",
            "დატვირთვა: 300 კგ",
            "თვლების რაოდენობა: 4",
            "საბურავით",
            "მანევრირებადი",
            "გამძლე",
          ],
          en: [
            "Length: 90 cm",
            "Width: 60 cm",
            "Height: 85 cm",
            "Load capacity: 300 kg",
            "Number of wheels: 4",
            "With cover",
            "Maneuverable",
            "Durable",
          ],
          ru: [
            "Длина: 90 см",
            "Ширина: 60 см",
            "Высота: 85 см",
            "Нагрузка: 300 кг",
            "Количество колес: 4",
            "С покрытием",
            "Маневренная",
            "Прочная",
          ],
        },
        images: ["/images/platform-trolley-blue.jpeg"],
        colors: [t("blue")],
        sizes: ["90x60x85"],
        category: t("platformTrolley"),
        rating: 4.5,
        reviewCount: 8,
      },
      "platform-trolley-yellow": {
        id: "platform-trolley-yellow",
        name: t("platformTrolleyYellow"),
        price: 150.0,
        description: {
          ka: `პლატფორმის ურიკა ყვითელი საბურავით. მაღალი ხარისხის ლითონისგან დამზადებული, იდეალურია საწყობებისა და ლოჯისტიკისთვის.

**ტექნიკური მახასიათებლები:**
• სიგრძე: 90 სმ
• სიგანე: 60 სმ  
• სიმაღლე: 85 სმ
• დატვირთვა: 300 კგ
• თვლების რაოდენობა: 4

საბურავით დაცული ტვირთისთვის.`,
          en: `Platform trolley with yellow cover. Made from high-quality metal, ideal for warehouses and logistics.

**Technical Specifications:**
• Length: 90 cm
• Width: 60 cm
• Height: 85 cm
• Load capacity: 300 kg
• Number of wheels: 4

With cover for protected cargo.`,
          ru: `Платформенная тележка с желтым покрытием. Изготовлена из высококачественного металла, идеальна для складов и логистики.

**Технические характеристики:**
• Длина: 90 см
• Ширина: 60 см
• Высота: 85 см
• Нагрузка: 300 кг
• Количество колес: 4

С покрытием для защищенного груза.`,
        },
        features: {
          ka: [
            "სიგრძე: 90 სმ",
            "სიგანე: 60 სმ",
            "სიმაღლე: 85 სმ",
            "დატვირთვა: 300 კგ",
            "თვლების რაოდენობა: 4",
            "საბურავით",
            "მანევრირებადი",
            "გამძლე",
          ],
          en: [
            "Length: 90 cm",
            "Width: 60 cm",
            "Height: 85 cm",
            "Load capacity: 300 kg",
            "Number of wheels: 4",
            "With cover",
            "Maneuverable",
            "Durable",
          ],
          ru: [
            "Длина: 90 см",
            "Ширина: 60 см",
            "Высота: 85 см",
            "Нагрузка: 300 кг",
            "Количество колес: 4",
            "С покрытием",
            "Маневренная",
            "Прочная",
          ],
        },
        images: ["/images/platform-trolley-yellow.jpeg"],
        colors: ["ყვითელი"],
        sizes: ["90x60x85"],
        category: t("platformTrolley"),
        rating: 4.5,
        reviewCount: 6,
      },
      "trash-bin-120": {
        id: "trash-bin-120",
        name: t("trashBin120Unit"),
        price: 85.0,
        description: {
          ka: `ნაგვის ურნა 120 ლიტრი HDPE მასალისგან. მაღალი ხარისხის პლასტმასისგან დამზადებული, იდეალურია საცხოვრებელი და კომერციული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• მოცულობა: 120 ლ
• სიგანე: 450 მმ
• სიღრმე: 570 მმ
• სიმაღლე: 970 მმ
• თვლების დიამეტრი: 200 მმ
• მასალა: HDPE
• ტევადობა: 120 კგ

ფერების ფართო არჩევანი: მწვანე, ლურჯი, წითელი, შავი.`,
          en: `120 liter HDPE trash bin. Made from high-quality plastic, ideal for residential and commercial properties.

**Technical Specifications:**
• Volume: 120 L
• Width: 450 mm
• Depth: 570 mm
• Height: 970 mm
• Wheel diameter: 200 mm
• Material: HDPE
• Capacity: 120 kg

Wide color selection: green, blue, red, black.`,
          ru: `Мусорный контейнер 120 литров из HDPE. Изготовлен из высококачественного пластика, идеален для жилых и коммерческих объектов.

**Технические характеристики:**
• Объем: 120 л
• Ширина: 450 мм
• Глубина: 570 мм
• Высота: 970 мм
• Диаметр колес: 200 мм
• Материал: HDPE
• Вместимость: 120 кг

Широкий выбор цветов: зеленый, синий, красный, черный.`,
        },
        features: {
          ka: [
            "მოცულობა: 120 ლ",
            "სიგანე: 450 მმ",
            "სიღრმე: 570 მმ",
            "სიმაღლე: 970 მმ",
            "თვლების დიამეტრი: 200 მმ",
            "მასალა: HDPE",
            "ტევადობა: 120 კგ",
            "ამინდისგან დაცული",
            "მარტივი გადაადგილება",
            "ეკოლოგიურად უსაფრთხო",
          ],
          en: [
            "Volume: 120 L",
            "Width: 450 mm",
            "Depth: 570 mm",
            "Height: 970 mm",
            "Wheel diameter: 200 mm",
            "Material: HDPE",
            "Capacity: 120 kg",
            "Weather resistant",
            "Easy mobility",
            "Environmentally safe",
          ],
          ru: [
            "Объем: 120 л",
            "Ширина: 450 мм",
            "Глубина: 570 мм",
            "Высота: 970 мм",
            "Диаметр колес: 200 мм",
            "Материал: HDPE",
            "Вместимость: 120 кг",
            "Устойчив к погоде",
            "Легкая мобильность",
            "Экологически безопасный",
          ],
        },
        images: ["/images/trash-bin-120l.jpg"],
        colors: ["მწვანე", t("blue"), t("red"), t("black")],
        sizes: ["120L"],
        category: t("trashBins"),
        rating: 4.6,
        reviewCount: 28,
      },
      "trash-bin-240": {
        id: "trash-bin-240",
        name: t("trashBin240Unit"),
        price: 120.0,
        description: {
          ka: `ნაგვის ურნა 240 ლიტრი HDPE მასალისგან. მაღალი ხარისხის პლასტმასისგან დამზადებული, იდეალურია კომერციული და ინდუსტრიული ობიექტებისთვის.

**ტექნიკური მახასიათებლები:**
• მოცულობა: 240 ლ
• სიგანე: 570 მმ
• სიღრმე: 720 მმ
• სიმაღლე: 1068 მმ
• თვლების დიამეტრი: 200 მმ
• მასალა: HDPE
• ტევადობა: 240 კგ

დიდი მოცულობა მეტი ნაგვისთვის.`,
          en: `240 liter HDPE trash bin. Made from high-quality plastic, ideal for commercial and industrial properties.

**Technical Specifications:**
• Volume: 240 L
• Width: 570 mm
• Depth: 720 mm
• Height: 1068 mm
• Wheel diameter: 200 mm
• Material: HDPE
• Capacity: 240 kg

Large volume for more waste.`,
          ru: `Мусорный контейнер 240 литров из HDPE. Изготовлен из высококачественного пластика, идеален для коммерческих и промышленных объектов.

**Технические характеристики:**
• Объем: 240 л
• Ширина: 570 мм
• Глубина: 720 мм
• Высота: 1068 мм
• Диаметр колес: 200 мм
• Материал: HDPE
• Вместимость: 240 кг

Большой объем для большего количества отходов.`,
        },
        features: {
          ka: [
            "მოცულობა: 240 ლ",
            "სიგანე: 570 მმ",
            "სიღრმე: 720 მმ",
            "სიმაღლე: 1068 მმ",
            "თვლების დიამეტრი: 200 მმ",
            "მასალა: HDPE",
            "ტევადობა: 240 კგ",
            "ამინდისგან დაცული",
            "მარტივი გადაადგილება",
            "ეკოლოგიურად უსაფრთხო",
          ],
          en: [
            "Volume: 240 L",
            "Width: 570 mm",
            "Depth: 720 mm",
            "Height: 1068 mm",
            "Wheel diameter: 200 mm",
            "Material: HDPE",
            "Capacity: 240 kg",
            "Weather resistant",
            "Easy mobility",
            "Environmentally safe",
          ],
          ru: [
            "Объем: 240 л",
            "Ширина: 570 мм",
            "Глубина: 720 мм",
            "Высота: 1068 мм",
            "Диаметр колес: 200 мм",
            "Материал: HDPE",
            "Вместимость: 240 кг",
            "Устойчив к погоде",
            "Легкая мобильность",
            "Экологически безопасный",
          ],
        },
        images: ["/images/trash-bin-240l.jpg"],
        colors: [t("blue")],
        sizes: ["240L"],
        category: t("trashBins"),
        rating: 4.7,
        reviewCount: 15,
      },
      "shopping-basket-20l": {
        id: "shopping-basket-20l",
        name: t("shoppingBasket20lUnit"),
        price: 25.0, // Placeholder price
        description: {
          ka: `20 ლიტრიანი საყიდლების კალათა მეტალის სახელურით. ფერი: წითელი. იდეალურია მცირე ზომის მაღაზიებისთვის და სუპერმარკეტებისთვის.`,
          en: `20-liter shopping basket with metal handle. Color: Red. Ideal for small shops and supermarkets.`,
          ru: `20-литровая корзина для покупок с металлической ручкой. Цвет: Красный. Идеально подходит для небольших магазинов и супермаркетов.`,
        },
        features: {
          ka: ["მოცულობა: 20 ლიტრი", "ფერი: წითელი", "სახელური: მეტალის", "გამძლე პლასტმასი"],
          en: ["Volume: 20 Liters", "Color: Red", "Handle: Metal", "Durable plastic"],
          ru: ["Объем: 20 литров", "Цвет: Красный", "Ручка: Металлическая", "Прочный пластик"],
        },
        images: ["/images/shopping-basket-20l-red.jpg"],
        colors: [t("red")],
        sizes: ["20L"],
        category: t("marketAccessories"),
        rating: 4.5, // Placeholder rating
        reviewCount: 10, // Placeholder review count
      },
      "perforated-hooks": {
        id: "perforated-hooks",
        name: t("perforatedHooksUnit"),
        price: 5.0, // Placeholder price (per hook or set)
        description: {
          ka: `მოთუთიებული კაუჭები პროდუქციის ჩამოსაკიდად. მაგრდება პერფორირებულ პანელზე. ხელმისაწვდომი ზომები: 10მმ, 15მმ, 20მმ, 25მმ, 30მმ.`,
          en: `Galvanized hooks for hanging products. Mounts on a perforated panel. Available sizes: 10mm, 15mm, 20mm, 25mm, 30mm.`,
          ru: `Оцинкованные крючки для подвешивания товаров. Крепятся на перфорированную панель. Доступные размеры: 10мм, 15мм, 20мм, 25мм, 30мм.`,
        },
        features: {
          ka: [
            "ზომები: 10მმ, 15მმ, 20მმ, 25მმ, 30მმ",
            "მოთუთიებული ზედაპირი",
            "მაგრდება პერფორირებულ პანელზე",
            "გამძლე და საიმედო",
          ],
          en: [
            "Sizes: 10mm, 15mm, 20mm, 25mm, 30mm",
            "Galvanized surface",
            "Mounts on perforated panel",
            "Durable and reliable",
          ],
          ru: [
            "Размеры: 10мм, 15мм, 20мм, 25мм, 30мм",
            "Оцинкованная поверхность",
            "Крепится на перфорированную панель",
            "Прочные и надежные",
          ],
        },
        images: ["/images/perforated-panel-hooks.jpg"],
        colors: [t("silver")],
        sizes: ["10mm", "15mm", "20mm", "25mm", "30mm"],
        category: t("marketAccessories"),
        rating: 4.3,
        reviewCount: 15,
      },
      "shelf-front-barrier": {
        id: "shelf-front-barrier",
        name: t("shelfFrontBarrierUnit"),
        price: 15.0, // Placeholder price
        description: {
          ka: `თაროს წინა ბარიერი იცავს პროდუქციას თაროდან გადმოვარდნისგან. ხელმისაწვდომია თეთრ და შავ მატ ფერებში.`,
          en: `Shelf front barrier protects products from falling off the shelf. Available in white and matte black colors.`,
          ru: `Передний барьер для полки защищает товары от падения с полки. Доступен в белом и матовом черном цветах.`,
        },
        features: {
          ka: [
            "იცავს პროდუქციას გადმოვარდნისგან",
            "ფერები: თეთრი, შავი მატი",
            "მარტივი დასამაგრებელი",
            "ზრდის თაროს უსაფრთხოებას",
          ],
          en: [
            "Prevents products from falling",
            "Colors: White, Matte Black",
            "Easy to attach",
            "Increases shelf safety",
          ],
          ru: [
            "Предотвращает падение товаров",
            "Цвета: Белый, Матовый Черный",
            "Легко крепится",
            "Повышает безопасность полки",
          ],
        },
        images: ["/images/shelf-front-barrier.jpg"],
        colors: [t("white"), t("mattBlack")],
        sizes: [], // No specific sizes mentioned, can be length based
        category: t("marketAccessories"),
        rating: 4.2,
        reviewCount: 8,
      },
      "checkout-counter-1500": {
        id: "checkout-counter-1500",
        name: t("checkoutCounter1500Unit"),
        price: 750.0, // Placeholder price
        description: {
          ka: `სალაროს მაგიდა მაღაზიისთვის, ზომით L1500*(500+500)*H800. გამძლე და ფუნქციონალური დიზაინი.`,
          en: `Checkout counter for stores, size L1500*(500+500)*H800. Durable and functional design.`,
          ru: `Кассовый стол для магазинов, размер L1500*(500+500)*H800. Прочная и функциональная конструкция.`,
        },
        features: {
          ka: ["ზომა: L1500*(500+500)*H800", "გამძლე კონსტრუქცია", "ერგონომიული დიზაინი", "ინტეგრირებული სათავსოები"],
          en: ["Size: L1500*(500+500)*H800", "Durable construction", "Ergonomic design", "Integrated storage spaces"],
          ru: [
            "Размер: L1500*(500+500)*H800",
            "Прочная конструкция",
            "Эргономичный дизайн",
            "Встроенные места для хранения",
          ],
        },
        images: ["/images/checkout-counter-1500.jpg"],
        colors: [t("black"), t("silver")], // Example colors
        sizes: ["L1500*(500+500)*H800"],
        category: t("marketAccessories"),
        rating: 4.6,
        reviewCount: 5,
      },
      "shelf-divider-h250": {
        id: "shelf-divider-h250",
        name: t("shelfDividerH250Unit"),
        price: 10.0, // Placeholder price
        description: {
          ka: `თაროს გამყოფი H250 გამოიყენება სხვადასხვა პროდუქციის გამოსაყოფად თაროზე. მაგრდება მაგნიტით. მასალა: პლასტმასი, ფერი: გამჭვირვალე, სახელური: მეტალის.`,
          en: `Shelf divider H250 is used to separate different products on a shelf. Attaches with a magnet. Material: Plastic, Color: Transparent, Handle: Metal.`,
          ru: `Разделитель полки H250 используется для разделения различных товаров на полке. Крепится на магните. Материал: Пластик, Цвет: Прозрачный, Ручка: Металлическая.`,
        },
        features: {
          ka: ["სიმაღლე: 250მმ", "მაგრდება მაგნიტით", "მასალა: პლასტმასი", "ფერი: გამჭვირვალე", "სახელური: მეტალის"],
          en: ["Height: 250mm", "Attaches with magnet", "Material: Plastic", "Color: Transparent", "Handle: Metal"],
          ru: ["Высота: 250мм", "Крепится на магните", "Материал: Пластик", "Цвет: Прозрачный", "Ручка: Металлическая"],
        },
        images: ["/images/shelf-divider-h250.jpg"],
        colors: ["გამჭვირვალე"],
        sizes: ["H250mm"],
        category: t("marketAccessories"),
        rating: 4.0,
        reviewCount: 12,
      },
      "promotion-basket-90x60": {
        id: "promotion-basket-90x60",
        name: t("promotionBasket90x60Unit"),
        price: 120.0, // Placeholder price
        description: {
          ka: `სააქციო კალათა პროდუქციის გამოსაფენად. ზომა: L90*W60*H80. ფერი: თეთრი და ქრომირებული. იდეალურია სეზონური და სააქციო პროდუქტებისთვის.`,
          en: `Promotion basket for product display. Size: L90*W60*H80. Color: White and Chrome. Ideal for seasonal and promotional products.`,
          ru: `Акционная корзина для выкладки товаров. Размер: L90*W60*H80. Цвет: Белый и Хром. Идеально для сезонных и акционных товаров.`,
        },
        features: {
          ka: [
            "ზომა: L90*W60*H80",
            "ფერი: თეთრი და ქრომირებული",
            "იდეალურია აქციებისთვის",
            "გამძლე ლითონის კონსტრუქცია",
            "თვლებით გადასაადგილებლად (სურვილისამებრ)",
          ],
          en: [
            "Size: L90*W60*H80",
            "Color: White and Chrome",
            "Ideal for promotions",
            "Durable metal construction",
            "Wheels for mobility (optional)",
          ],
          ru: [
            "Размер: L90*W60*H80",
            "Размер: L90*W60*H80",
            "Цвет: Белый и Хром",
            "Идеально для акций",
            "Прочная металлическая конструкция",
            "Колеса для мобильности (опционально)",
          ],
        },
        images: ["/images/promotion-basket-90x60.jpg"],
        colors: [t("white"), "ქრომირებული"],
        sizes: ["L90*W60*H80"],
        category: t("marketAccessories"),
        rating: 4.4,
        reviewCount: 7,
      },
      "lightbox-890x330": {
        id: "lightbox-890x330",
        name: t("lightbox890x330Unit"),
        price: 180.0, // Placeholder price
        description: {
          ka: `ლაით ბოქსი რეკლამისთვის, ზომით L890*H330. ეფექტურად წარმოაჩენს თქვენს რეკლამას ან ინფორმაციას.`,
          en: `Lightbox for advertising, size L890*H330. Effectively showcases your advertisement or information.`,
          ru: `Лайтбокс для рекламы, размер L890*H330. Эффективно демонстрирует вашу рекламу или информацию.`,
        },
        features: {
          ka: ["ზომა: L890*H330", "LED განათებით", "ენერგოეფექტური", "მარტივი პოსტერის შეცვლა"],
          en: ["Size: L890*H330", "LED illuminated", "Energy efficient", "Easy poster change"],
          ru: ["Размер: L890*H330", "LED подсветка", "Энергоэффективный", "Легкая смена постера"],
        },
        images: ["/images/lightbox-890x330.jpg"],
        colors: [t("white"), t("silver")], // Frame color
        sizes: ["L890*H330"],
        category: t("marketAccessories"), // Or POS Materials
        rating: 4.5,
        reviewCount: 9,
      },
      "cash-drawer-368": {
        id: "cash-drawer-368",
        name: t("cashDrawer368Unit"),
        price: 90.0, // Placeholder price
        description: {
          ka: `მექანიკური/ავტომატური ფულის უჯრა სალაროსთვის. ზომა: L368*W335*H80. უზრუნველყოფს ნაღდი ფულის უსაფრთხო შენახვას.`,
          en: `Manual/Automatic cash drawer for checkout. Size: L368*W335*H80. Ensures secure storage of cash.`,
          ru: `Механический/автоматический денежный ящик для кассы. Размер: L368*W335*H80. Обеспечивает безопасное хранение наличных.`,
        },
        features: {
          ka: [
            "ზომა: L368*W335*H80",
            "მექანიკური ან ავტომატური გახსნა",
            "გასაღებით ჩაკეტვის შესაძლებლობა",
            "რამდენიმე განყოფილება კუპიურებისა და მონეტებისთვის",
          ],
          en: [
            "Size: L368*W335*H80",
            "Manual or automatic opening",
            "Key lockable",
            "Multiple compartments for bills and coins",
          ],
          ru: [
            "Размер: L368*W335*H80",
            "Механическое или автоматическое открытие",
            "Возможность запирания на ключ",
            "Несколько отделений для купюр и монет",
          ],
        },
        images: ["/images/cash-drawer-368.jpg"],
        colors: [t("white"), t("black")],
        sizes: ["L368*W335*H80"],
        category: t("marketAccessories"),
        rating: 4.3,
        reviewCount: 11,
      },
      "hook-locker": {
        id: "hook-locker",
        name: t("hookLockerUnit"),
        price: 2.0, // Placeholder price
        description: {
          ka: `კაუჭის ლოქერი (შემზღუდველი) პროდუქციის უსაფრთხოებისთვის. იცავს პროდუქტს კაუჭიდან უნებართვო მოხსნისგან.`,
          en: `Hook locker (security stopper) for product security. Protects products from unauthorized removal from hooks.`,
          ru: `Замок для крючка (ограничитель) для безопасности товаров. Защищает товары от несанкционированного снятия с крючков.`,
        },
        features: {
          ka: [
            "იცავს ქურდობისგან",
            "მარტივი გამოსაყენებელი მაგნიტურ გასაღებთან ერთად",
            "გამძლე პლასტმასი",
            "წითელი ფერის",
          ],
          en: ["Prevents theft", "Easy to use with magnetic key", "Durable plastic", "Red color"],
          ru: ["Предотвращает кражу", "Легко использовать с магнитным ключом", "Прочный пластик", "Красный цвет"],
        },
        images: ["/images/hook-locker.jpg"],
        colors: [t("red")],
        sizes: [], // One size
        category: t("marketAccessories"),
        rating: 4.0,
        reviewCount: 20,
      },
      "hook-locker-key": {
        id: "hook-locker-key",
        name: t("hookLockerKeyUnit"),
        price: 15.0, // Placeholder price
        description: {
          ka: `მაგნიტური გასაღები კაუჭის ლოქერების მოსახსნელად. კომპაქტური და მოსახერხებელი.`,
          en: `Magnetic key for removing hook lockers. Compact and convenient.`,
          ru: `Магнитный ключ для снятия замков с крючков. Компактный и удобный.`,
        },
        features: {
          ka: ["გამოიყენება კაუჭის ლოქერებთან", "კომპაქტური დიზაინი", "ძლიერი მაგნიტი", "მეტალის კორპუსი"],
          en: ["Used with hook lockers", "Compact design", "Strong magnet", "Metal body"],
          ru: ["Используется с замками для крючков", "Компактный дизайн", "Сильный магнит", "Металлический корпус"],
        },
        images: ["/images/hook-locker-key.jpg"],
        colors: [t("silver"), t("red")], // Key color
        sizes: [], // One size
        category: t("marketAccessories"),
        rating: 4.5,
        reviewCount: 5,
      },
      // New Market Shelves
      "market-shelf-single-165": {
        id: "market-shelf-single-165",
        name: t("marketShelfSingle165"),
        price: 0, // Price hidden
        description: {
          ka: `ცალმხრივი თარო მარკეტისთვის. იდეალურია პროდუქციის ეფექტურად წარმოსაჩენად.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 165 სმ
• სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 45 სმ
• დანარჩენი თაროები: 40 სმ
• თაროების რაოდენობა: 5
• დატვირთვა: 250 კგ ერთ თაროზე
• ფერი: თეთრი პრიალა ან/და შავი მატი
• განლაგება: ცალკე მდგომი
კომპლექტაციაში შედის ფასმაჩვენებლები. თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით. თაროების გადაბმის შემთხვევაში არ გჭირდებათ ბოლო პროფილი.`,
          en: `One-sided market shelf. Ideal for effective product display.
**Technical Specifications:**
• Height: 165 cm
• Width: 90 cm
• Base shelf depth: 45 cm
• Other shelves depth: 40 cm
• Number of shelves: 5
• Load capacity: 250 kg per shelf
• Color: Glossy White and/or Matte Black
• Layout: Standalone
Includes price holders. Easy to assemble/disassemble. Shelves can be repositioned. No end profile needed for joining shelves.`,
          ru: `Односторонний стеллаж для магазина. Идеален для эффективной выкладки товаров.
**Технические характеристики:**
• Высота: 165 см
• Ширина: 90 см
• Глубина базовой полки: 45 см
• Глубина остальных полок: 40 см
• Количество полок: 5
• Нагрузка: 250 кг на полку
• Цвет: Белый глянцевый и/или Черный матовый
• Расположение: Отдельностоящий
В комплекте ценникодержатели. Легко собираемая/разбираемая конструкция. Полки можно перемещать. При соединении стеллажей торцевой профиль не нужен.`,
        },
        features: {
          ka: [
            "სიმაღლე: 165 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 45 სმ",
            "დანარჩენი თაროები: 40 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 250 კგ ერთ თაროზე",
            "ფერი: თეთრი პრიალა / შავი მატი",
            t("includesPriceHolders"),
            t("easyAssembly"),
            t("adjustableShelves"),
            t("noEndProfileNeeded"),
          ],
          en: [
            "Height: 165 cm",
            "Width: 90 cm",
            "Base shelf depth: 45 cm",
            "Other shelves depth: 40 cm",
            "Number of shelves: 5",
            "Load capacity: 250 kg per shelf",
            "Color: Glossy White / Matte Black",
            t("includesPriceHolders"),
            t("easyAssembly"),
            t("adjustableShelves"),
            t("noEndProfileNeeded"),
          ],
          ru: [
            "Высота: 165 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 45 см",
            "Глубина остальных полок: 40 см",
            "Количество полок: 5",
            "Нагрузка: 250 кг на полку",
            "Цвет: Белый глянцевый / Черный матовый",
            t("includesPriceHolders"),
            t("easyAssembly"),
            t("adjustableShelves"),
            t("noEndProfileNeeded"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-single-165.jpg"],
        colors: [t("colorGlossyWhite"), t("colorMatteBlack")],
        sizes: ["165x90x45/40"],
        category: t("marketShelves"),
        rating: 4.7,
        reviewCount: 10,
      },
      "market-shelf-single-195": {
        id: "market-shelf-single-195",
        name: t("marketShelfSingle195"),
        price: 0,
        description: {
          ka: `ცალმხრივი თარო მარკეტისთვის. იდეალურია პროდუქციის ეფექტურად წარმოსაჩენად.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 195 სმ
��� სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 45 სმ
• დანარჩენი თაროები: 40 სმ
• თაროების რაოდენობა: 5
• დატვირთვა: 250 კგ ერთ თაროზე
• ფერი: თეთრი პრიალა ან/და შავი მატი
• განლაგება: ცალკე მდგომი
კომპლექტაციაში შედის ფასმაჩვენებლები. თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით. თაროების გადაბმის შემთხვევაში არ გჭირდებათ ბოლო პროფილი.`,
          en: `One-sided market shelf. Ideal for effective product display.
**Technical Specifications:**
• Height: 195 cm
• Width: 90 cm
• Base shelf depth: 45 cm
• Other shelves depth: 40 cm
• Number of shelves: 5
• Load capacity: 250 kg per shelf
• Color: Glossy White and/or Matte Black
• Layout: Standalone
Includes price holders. Easy to assemble/disassemble. Shelves can be repositioned. No end profile needed for joining shelves.`,
          ru: `Односторонний стеллаж для магазина. Идеален для эффективной выкладки товаров.
**Технические характеристики:**
• Высота: 195 см
• Ширина: 90 см
• Глубина базовой полки: 45 см
• Глубина остальных полок: 40 см
• Количество полок: 5
• Нагрузка: 250 кг на полку
• Цвет: Белый глянцевый и/или Черный матовый
• Расположение: Отдельностоящий
В комплекте ценникодержатели. Легко собираемая/разбираемая конструкция. Полки можно перемещать. При соединении стеллажей торцевой профиль не нужен.`,
        },
        features: {
          ka: [
            "სიმაღლე: 195 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 45 სმ",
            "დანარჩენი თაროები: 40 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 250 კგ ერთ თაროზე",
            "ფერი: თეთრი პრიალა / შავი მატი",
            t("includesPriceHolders"),
            t("easyAssembly"),
            t("adjustableShelves"),
            t("noEndProfileNeeded"),
          ],
          en: [
            "Height: 195 cm",
            "Width: 90 cm",
            "Base shelf depth: 45 cm",
            "Other shelves depth: 40 cm",
            "Number of shelves: 5",
            "Load capacity: 250 kg per shelf",
            "Color: Glossy White / Matte Black",
            t("includesPriceHolders"),
            t("easyAssembly"),
            t("adjustableShelves"),
            t("noEndProfileNeeded"),
          ],
          ru: [
            "Высота: 195 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 45 см",
            "Глубина остальных полок: 40 см",
            "Количество полок: 5",
            "Нагрузка: 250 кг на полку",
            "Цвет: Белый глянцевый / Черный матовый",
            t("includesPriceHolders"),
            t("easyAssembly"),
            t("adjustableShelves"),
            t("noEndProfileNeeded"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-single-195.jpg"],
        colors: [t("colorGlossyWhite"), t("colorMatteBlack")],
        sizes: ["195x90x45/40"],
        category: t("marketShelves"),
        rating: 4.8,
        reviewCount: 12,
      },
      "market-shelf-single-220": {
        id: "market-shelf-single-220",
        name: t("marketShelfSingle220"),
        price: 0,
        description: {
          ka: `ცალმხრივი თარო მარკეტისთვის. იდეალურია პროდუქციის ეფექტურად წარმოსაჩენად.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 220 სმ
• სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 45 სმ
• დანარჩენი თაროები: 40 სმ
• თაროების რაოდენობა: 5
• დატვირთვა: 250 კგ ერთ თაროზე
• ფერი: თეთრი პრიალა
• განლაგება: ცალკე მდგომი
კომპლექტაციაში შედის ფასმაჩვენებლები და წინა ბარიერი. თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით.`,
          en: `One-sided market shelf. Ideal for effective product display.
**Technical Specifications:**
• Height: 220 cm
• Width: 90 cm
• Base shelf depth: 45 cm
• Other shelves depth: 40 cm
• Number of shelves: 5
• Load capacity: 250 kg per shelf
• Color: Glossy White
• Layout: Standalone
Includes price holders and front barrier. Easy to assemble/disassemble. Shelves can be repositioned.`,
          ru: `Односторонний стеллаж для магазина. Идеален для эффективной выкладки товаров.
**Технические характеристики:**
• Высота: 220 см
• Ширина: 90 см
• Глубина базовой полки: 45 см
• Глубина остальных полок: 40 см
• Количество полок: 5
• Нагрузка: 250 кг на полку
• Цвет: Белый глянцевый
• Расположение: Отдельностоящий
В комплекте ценникодержатели и передний барьер. Легко собираемая/разбираемая конструкция. Полки можно перемещать.`,
        },
        features: {
          ka: [
            "სიმაღლე: 220 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 45 სმ",
            "დანარჩენი თაროები: 40 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 250 კგ ერთ თაროზე",
            "ფერი: თეთრი პრიალა",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 220 cm",
            "Width: 90 cm",
            "Base shelf depth: 45 cm",
            "Other shelves depth: 40 cm",
            "Number of shelves: 5",
            "Load capacity: 250 kg per shelf",
            "Color: Glossy White",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 220 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 45 см",
            "Глубина остальных полок: 40 см",
            "Количество полок: 5",
            "Нагрузка: 250 кг на полку",
            "Цвет: Белый глянцевый",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-single-220.jpg"],
        colors: [t("colorGlossyWhite")],
        sizes: ["220x90x45/40"],
        category: t("marketShelves"),
        rating: 4.9,
        reviewCount: 15,
      },
      "market-shelf-basket-165": {
        id: "market-shelf-basket-165",
        name: t("marketShelfBasket165"),
        price: 0,
        description: {
          ka: `ცალმხრივი თარო კალათებით.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 165 სმ
• სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 35 სმ
• თაროების რაოდენობა ძირის ჩათვლით: 5 (1 თარო + 4 კალათი)
• ფერი: თეთრი პრიალა ან/და შავი მატი
კომპლექტაციაში შედის 4 კალათი. თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების/კალათების გადაადგილება სურვილის მიხედვით.`,
          en: `One-sided shelf with baskets.
**Technical Specifications:**
• Height: 165 cm
• Width: 90 cm
• Base shelf depth: 35 cm
• Total levels (including base): 5 (1 shelf + 4 baskets)
• Color: Glossy White and/or Matte Black
Includes 4 baskets. Easy to assemble/disassemble. Shelves/baskets can be repositioned.`,
          ru: `Односторонний стеллаж с корзинами.
**Технические характеристики:**
• Высота: 165 см
• Ширина: 90 см
• Глубина базовой полки: 35 см
• Общее количество уровней (включая базу): 5 (1 полка + 4 корзины)
• Цвет: Белый глянцевый и/или Черный матовый
В комплекте 4 корзины. Легко собираемая/разбираемая конструкция. Полки/корзины можно перемещать.`,
        },
        features: {
          ka: [
            "სიმაღლე: 165 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 35 სმ",
            "სულ დონე: 5 (1 თარო + 4 კალათი)",
            "ფერი: თეთრი პრიალა / შავი მატი",
            t("includes4Baskets"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 165 cm",
            "Width: 90 cm",
            "Base shelf depth: 35 cm",
            "Total levels: 5 (1 shelf + 4 baskets)",
            "Color: Glossy White / Matte Black",
            t("includes4Baskets"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 165 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 35 см",
            "Общее количество уровней: 5 (1 полка + 4 корзины)",
            "Цвет: Белый глянцевый / Черный матовый",
            t("includes4Baskets"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-basket.jpg"],
        colors: [t("colorGlossyWhite"), t("colorMatteBlack")],
        sizes: ["165x90x35"],
        category: t("marketShelves"),
        rating: 4.6,
        reviewCount: 9,
      },
      "market-shelf-basket-195": {
        id: "market-shelf-basket-195",
        name: t("marketShelfBasket195"),
        price: 0,
        description: {
          ka: `ცალმხრივი თარო კალათებით.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 195 სმ
• სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 35 სმ
• თაროების რაოდენობა ძირის ჩათვლით: 5 (1 თარო + 4 კალათი)
• ფერი: თეთრი პრიალა ან/და შავი მატი
კომპლექტაციაში შედის 4 კალათი. თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების/კალათების გადაადგილება სურვილის მიხედვით.`,
          en: `One-sided shelf with baskets.
**Technical Specifications:**
• Height: 195 cm
• Width: 90 cm
• Base shelf depth: 35 cm
• Total levels (including base): 5 (1 shelf + 4 baskets)
• Color: Glossy White and/or Matte Black
Includes 4 baskets. Easy to assemble/disassemble. Shelves/baskets can be repositioned.`,
          ru: `Односторонний стеллаж с корзинами.
**Технические характеристики:**
• Высота: 195 см
• Ширина: 90 см
• Глубина базовой полки: 35 см
• Общее количество уровней (включая базу): 5 (1 полка + 4 корзины)
• Цвет: Белый глянцевый и/или Черный матовый
В комплекте 4 корзины. Легко собираемая/разбираемая конструкция. Полки/корзины можно перемещать.`,
        },
        features: {
          ka: [
            "სიმაღლე: 195 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 35 სმ",
            "სულ დონე: 5 (1 თარო + 4 კალათი)",
            "ფერი: თეთრი პრიალა / შავი მატი",
            t("includes4Baskets"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 195 cm",
            "Width: 90 cm",
            "Base shelf depth: 35 cm",
            "Total levels: 5 (1 shelf + 4 baskets)",
            "Color: Glossy White / Matte Black",
            t("includes4Baskets"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 195 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 35 см",
            "Общее количество уровней: 5 (1 полка + 4 корзины)",
            "Цвет: Белый глянцевый / Черный матовый",
            t("includes4Baskets"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-basket.jpg"], // Same image as 165H version
        colors: [t("colorGlossyWhite"), t("colorMatteBlack")],
        sizes: ["195x90x35"],
        category: t("marketShelves"),
        rating: 4.6,
        reviewCount: 7,
      },
      "market-shelf-gondola-135": {
        id: "market-shelf-gondola-135",
        name: t("marketShelfGondola135"),
        price: 0,
        description: {
          ka: `ორმხრივი თარო-გონდოლა.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 135 სმ
• სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 35 სმ (თითო მხარეს)
• დანარჩენი თაროები: 30 სმ (თითო მხარეს)
• თაროების რაოდენობა ძირის ჩათვლით: 10 (5 თითო მხარეს)
• დატვირთვა: 150 კგ ერთ თაროზე
• ფერი: თეთრი პრიალა
კომპლექტაციაში შედის ფასმაჩვენებლები და წინა ბარიერი. თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით.`,
          en: `Double-sided gondola shelf.
**Technical Specifications:**
• Height: 135 cm
• Width: 90 cm
• Base shelf depth: 35 cm (per side)
• Other shelves depth: 30 cm (per side)
• Total shelves (including base): 10 (5 per side)
• Load capacity: 150 kg per shelf
• Color: Glossy White
Includes price holders and front barrier. Easy to assemble/disassemble. Shelves can be repositioned.`,
          ru: `Двусторонний стеллаж-гондола.
**Технические характеристики:**
• Высота: 135 см
• Ширина: 90 см
• Глубина базовой полки: 35 см (с каждой стороны)
• Глубина остальных полок: 30 см (с каждой стороны)
• Общее количество полок (включая базовые): 10 (5 с каждой стороны)
• Нагрузка: 150 кг на полку
• Цвет: Белый глянцевый
В комплекте ценникодержатели и передний барьер. Легко собираемая/разбираемая конструкция. Полки можно перемещать.`,
        },
        features: {
          ka: [
            "სიმაღლე: 135 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 35 სმ (თითო მხარეს)",
            "დანარჩენი თაროები: 30 სმ (თითო მხარეს)",
            "სულ თარო: 10 (5 თითო მხარეს)",
            "დატვირთვა: 150 კგ ერთ თაროზე",
            "ფერი: თეთრი პრიალა",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 135 cm",
            "Width: 90 cm",
            "Base shelf depth: 35 cm (per side)",
            "Other shelves depth: 30 cm (per side)",
            "Total shelves: 10 (5 per side)",
            "Load capacity: 150 kg per shelf",
            "Color: Glossy White",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 135 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 35 см (с каждой стороны)",
            "Глубина остальных полок: 30 см (с каждой стороны)",
            "Общее количество полок: 10 (5 с каждой стороны)",
            "Нагрузка: 150 кг на полку",
            "Цвет: Белый глянцевый",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-gondola-135.jpg"],
        colors: [t("colorGlossyWhite")],
        sizes: ["135x90x35/30"],
        category: t("marketShelves"),
        rating: 4.7,
        reviewCount: 11,
      },
      "market-shelf-gondola-165": {
        id: "market-shelf-gondola-165",
        name: t("marketShelfGondola165"),
        price: 0,
        description: {
          ka: `ორმხრივი თარო-გონდოლა.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 165 სმ
• სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 35 სმ (თითო მხარეს)
• დანარჩენი თაროები: 30 სმ (თითო მხარეს)
• თაროების რაოდენობა ძირის ჩათვლით: 10 (5 თითო მხარეს)
• დატვირთვა: 150 კგ ერთ თაროზე
• ფერი: თეთრი პრიალა
კომპლექტაციაში შედის ფასმაჩვენებლები და წინა ბარიერი. თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით.`,
          en: `Double-sided gondola shelf.
**Technical Specifications:**
• Height: 165 cm
• Width: 90 cm
• Base shelf depth: 35 cm (per side)
• Other shelves depth: 30 cm (per side)
• Total shelves (including base): 10 (5 per side)
• Load capacity: 150 kg per shelf
• Color: Glossy White
Includes price holders and front barrier. Easy to assemble/disassemble. Shelves can be repositioned.`,
          ru: `Двусторонний стеллаж-гондола.
**Технические характеристики:**
• Высота: 165 см
• Ширина: 90 см
• Глубина базовой полки: 35 см (с каждой стороны)
• Глубина остальных полок: 30 см (с каждой стороны)
• Общее количество полок (включая базовые): 10 (5 с каждой стороны)
• Нагрузка: 150 кг на полку
• Цвет: Белый глянцевый
В комплекте ценникодержатели и передний барьер. Легко собираемая/разбираемая конструкция. Полки можно перемещать.`,
        },
        features: {
          ka: [
            "სიმაღლე: 165 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 35 სმ (თითო მხარეს)",
            "დანარჩენი თაროები: 30 სმ (თითო მხარეს)",
            "სულ თარო: 10 (5 თითო მხარეს)",
            "დატვირთვა: 150 კგ ერთ თაროზე",
            "ფერი: თეთრი პრიალა",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 165 cm",
            "Width: 90 cm",
            "Base shelf depth: 35 cm (per side)",
            "Other shelves depth: 30 cm (per side)",
            "Total shelves: 10 (5 per side)",
            "Load capacity: 150 kg per shelf",
            "Color: Glossy White",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 165 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 35 см (с каждой стороны)",
            "Глубина остальных полок: 30 см (с каждой стороны)",
            "Общее количество полок: 10 (5 с каждой стороны)",
            "Нагрузка: 150 кг на полку",
            "Цвет: Белый глянцевый",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-gondola-165.png"],
        colors: [t("colorGlossyWhite")],
        sizes: ["165x90x35/30"],
        category: t("marketShelves"),
        rating: 4.8,
        reviewCount: 14,
      },
      "market-shelf-perf-165": {
        id: "market-shelf-perf-165",
        name: t("marketShelfPerf165"),
        price: 0,
        description: {
          ka: `ცალმხრივი პერფორირებული თარო.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 165 სმ
• სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 45 სმ
• ფერი: თეთრი პრიალა ან/და შავი მატი
• განლაგება: ცალკე მდგომი
კომპლექტაციაში არ შედის კაუჭები. თაროს უკანა პანელი დახვრეტილია, რაც საშუალებას გაძლევთ დაამაგროთ კაუჭები პროდუქციის ჩამოსაკიდად.`,
          en: `One-sided perforated shelf.
**Technical Specifications:**
• Height: 165 cm
• Width: 90 cm
• Base shelf depth: 45 cm
• Color: Glossy White and/or Matte Black
• Layout: Standalone
Hooks not included. The back panel is perforated, allowing you to attach hooks for hanging products.`,
          ru: `Односторонний перфорированный стеллаж.
**Технические характеристики:**
• Высота: 165 см
• Ширина: 90 см
• Глубина базовой полки: 45 см
• Цвет: Белый глянцевый и/или Черный матовый
• Расположение: Отдельностоящий
Крючки не включены. Задняя панель перфорирована, что позволяет крепить крючки для подвешивания товаров.`,
        },
        features: {
          ka: [
            "სიმაღლე: 165 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 45 სმ",
            "ფერი: თეთრი პრიალა / შავი მატი",
            t("layoutStandalone"),
            t("hooksNotIncluded"),
            t("perforatedBackPanel"),
          ],
          en: [
            "Height: 165 cm",
            "Width: 90 cm",
            "Base shelf depth: 45 cm",
            "Color: Glossy White / Matte Black",
            t("layoutStandalone"),
            t("hooksNotIncluded"),
            t("perforatedBackPanel"),
          ],
          ru: [
            "Высота: 165 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 45 см",
            "Цвет: Белый глянцевый / Черный матовый",
            t("layoutStandalone"),
            t("hooksNotIncluded"),
            t("perforatedBackPanel"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-perf-165.png"],
        colors: [t("colorGlossyWhite"), t("colorMatteBlack")],
        sizes: ["165x90x45"],
        category: t("marketShelves"),
        rating: 4.5,
        reviewCount: 8,
      },
      "market-shelf-perf-195": {
        id: "market-shelf-perf-195",
        name: t("marketShelfPerf195"),
        price: 0,
        description: {
          ka: `ცალმხრივი პერფორირებული თარო.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 195 სმ
• სიგანე: 90 სმ
• ძირი თაროს სიღრმე: 45 სმ
• ფერი: თეთრი პრიალა ან/და შავი მატი
• განლაგება: ცალკე მდგომი
კომპლექტაციაში არ შედის კაუჭები. თაროს უკანა პანელი დახვრეტილია, რაც საშუალებას გაძლევთ დაამაგროთ კაუჭები პროდუქციის ჩამოსაკიდად.`,
          en: `One-sided perforated shelf.
**Technical Specifications:**
• Height: 195 cm
• Width: 90 cm
• Base shelf depth: 45 cm
• Color: Glossy White and/or Matte Black
• Layout: Standalone
Hooks not included. The back panel is perforated, allowing you to attach hooks for hanging products.`,
          ru: `Односторонний перфорированный стеллаж.
**Технические характеристики:**
• Высота: 195 см
• Ширина: 90 см
• Глубина базовой полки: 45 см
• Цвет: Белый глянцевый и/или Черный матовый
• Расположение: Отдельностоящий
Крючки не включены. Задняя панель перфорирована, что позволяет крепить крючки для подвешивания товаров.`,
        },
        features: {
          ka: [
            "სიმაღლე: 195 სმ",
            "სიგანე: 90 სმ",
            "ძირი თაროს სიღრმე: 45 სმ",
            "ფერი: თეთრი პრიალა / შავი მატი",
            t("layoutStandalone"),
            t("hooksNotIncluded"),
            t("perforatedBackPanel"),
          ],
          en: [
            "Height: 195 cm",
            "Width: 90 cm",
            "Base shelf depth: 45 cm",
            "Color: Glossy White / Matte Black",
            t("layoutStandalone"),
            t("hooksNotIncluded"),
            t("perforatedBackPanel"),
          ],
          ru: [
            "Высота: 195 см",
            "Ширина: 90 см",
            "Глубина базовой полки: 45 см",
            "Цвет: Белый глянцевый / Черный матовый",
            t("layoutStandalone"),
            t("hooksNotIncluded"),
            t("perforatedBackPanel"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-perf-195.png"],
        colors: [t("colorGlossyWhite"), t("colorMatteBlack")],
        sizes: ["195x90x45"],
        category: t("marketShelves"),
        rating: 4.6,
        reviewCount: 10,
      },
      "market-shelf-checkout-front": {
        id: "market-shelf-checkout-front",
        name: t("marketShelfCheckoutFront"),
        price: 0,
        description: {
          ka: `სალაროს მაგიდის წინა თარო.
**ტექნიკური მახასიათებლები:**
• ზომა: L700+L730*W350*H750
• ფერი: თეთრი და შავი მატი`,
          en: `Checkout counter front shelf.
**Technical Specifications:**
• Size: L700+L730*W350*H750
• Color: White and Matte Black`,
          ru: `Прикассовый стеллаж.
**Технические характеристики:**
• Размер: L700+L730*W350*H750
• Цвет: Белый и Черный матовый`,
        },
        features: {
          ka: ["ზომა: L700+L730*W350*H750", "ფერი: თეთრი / შავი მატი"],
          en: ["Size: L700+L730*W350*H750", "Color: White / Matte Black"],
          ru: ["Размер: L700+L730*W350*H750", "Цвет: Белый / Черный матовый"],
        },
        images: ["/images/market-shelves/market-shelf-checkout-front.jpg"],
        colors: [t("white"), t("mattBlack")],
        sizes: ["L700+L730*W350*H750"],
        category: t("marketShelves"),
        rating: 4.4,
        reviewCount: 6,
      },
      "market-shelf-single-135-w73": {
        id: "market-shelf-single-135-w73",
        name: t("marketShelfSingle135W73"),
        price: 0,
        description: {
          ka: `ცალმხრივი თარო.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 135 სმ
• სიგანე: 73 სმ
• ძირი თაროს სიღრმე: 35 სმ
• დანარჩენი თაროები: 30 სმ
• თაროების რაოდენობა ძირის ჩათვლით: 5
• დატვირთვა: 50 კგ ერთ თაროზე
• ფერი: თეთრი პრიალა`,
          en: `One-sided shelf.
**Technical Specifications:**
• Height: 135 cm
• Width: 73 cm
• Base shelf depth: 35 cm
• Other shelves depth: 30 cm
• Number of shelves (including base): 5
• Load capacity: 50 kg per shelf
• Color: Glossy White`,
          ru: `Односторонний стеллаж.
**Технические характеристики:**
• Высота: 135 см
• Ширина: 73 см
• Глубина базовой полки: 35 см
• Глубина остальных полок: 30 см
• Количество полок (включая базовую): 5
• Нагрузка: 50 кг на полку
• Цвет: Белый глянцевый`,
        },
        features: {
          ka: [
            "სიმაღლე: 135 სმ",
            "სიგანე: 73 სმ",
            "ძირი თაროს სიღრმე: 35 სმ",
            "დანარჩენი თაროები: 30 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 50 კგ ერთ თაროზე",
            "ფერი: თეთრი პრიალა",
          ],
          en: [
            "Height: 135 cm",
            "Width: 73 cm",
            "Base shelf depth: 35 cm",
            "Other shelves depth: 30 cm",
            "Number of shelves: 5",
            "Load capacity: 50 kg per shelf",
            "Color: Glossy White",
          ],
          ru: [
            "Высота: 135 см",
            "Ширина: 73 см",
            "Глубина базовой полки: 35 см",
            "Глубина остальных полок: 30 см",
            "Количество полок: 5",
            "Нагрузка: 50 кг на полку",
            "Цвет: Белый глянцевый",
          ],
        },
        images: ["/images/market-shelves/market-shelf-single-135w73.jpg"],
        colors: [t("colorGlossyWhite")],
        sizes: ["135x73x35/30"],
        category: t("marketShelves"),
        rating: 4.5,
        reviewCount: 7,
      },
      "market-shelf-single-165-w73": {
        id: "market-shelf-single-165-w73",
        name: t("marketShelfSingle165W73"),
        price: 0, // Price hidden
        description: {
          ka: `ცალმხრივი თარო მარკეტისთვის.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 165 სმ
• სიგანე: 73 სმ
• ძირი თაროს სიღრმე: 35 სმ
• დანარჩენი თაროები: 30 სმ
• თაროების რაოდენობა ძირის ჩათვლით: 5
• დატვირთვა: 50 კგ ერთ თაროზე
• ფერი: თეთრი პრიალა
კომპლექტაციაში შედის ფასმაჩვენებლები და წინა ბარიერი. თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით.`,
          en: `One-sided market shelf.
**Technical Specifications:**
• Height: 165 cm
• Width: 73 cm
• Base shelf depth: 35 cm
• Other shelves depth: 30 cm
• Number of shelves (including base): 5
• Load capacity: 50 kg per shelf
• Color: Glossy White
Includes price holders and front barrier. Easy to assemble/disassemble. Shelves can be repositioned.`,
          ru: `Односторонний стеллаж для магазина.
**Технические характеристики:**
• Высота: 165 см
• Ширина: 73 см
• Глубина базовой полки: 35 см
• Глубина остальных полок: 30 см
• Количество полок (включая базовую): 5
• Нагрузка: 50 кг на полку
• Цвет: Белый глянцевый
В комплекте ценникодержатели и передний барьер. Легко собираемая/разбираемая конструкция. Полки можно перемещать.`,
        },
        features: {
          ka: [
            "სიმაღლე: 165 სმ",
            "სიგანე: 73 სმ",
            "ძირი თაროს სიღრმე: 35 სმ",
            "დანარჩენი თაროები: 30 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 50 კგ ერთ თაროზე",
            "ფერი: თეთრი პრიალა",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 165 cm",
            "Width: 73 cm",
            "Base shelf depth: 35 cm",
            "Other shelves depth: 30 cm",
            "Number of shelves: 5",
            "Load capacity: 50 kg per shelf",
            "Color: Glossy White",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 165 см",
            "Ширина: 73 см",
            "Глубина базовой полки: 35 см",
            "Глубина остальных полок: 30 см",
            "Количество полок: 5",
            "Нагрузка: 50 кг на полку",
            "Цвет: Белый глянцевый",
            t("includesPriceHolders"),
            t("includesFrontBarrier"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/market-shelves/market-shelf-single-165w73.jpg"],
        colors: [t("colorGlossyWhite")],
        sizes: ["165x73x35/30"],
        category: t("marketShelves"),
        rating: 4.6, // Placeholder
        reviewCount: 8, // Placeholder
      },
      // Kitchen Shelving Products
      "kitchen-shelf-1": {
        id: "kitchen-shelf-1",
        name: t("kitchenShelving200x60x35"),
        price: 0, // Price hidden
        description: {
          ka: `სამზარეულოს სტელაჟი, ვერცხლისფერი.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 60 სმ
• თაროების სიღრმე: 35 სმ
• თაროების რაოდენობა: 5
• დატვირთვა: 250 კგ ერთ თაროზე
• ფერი: ვერცხლისფერი
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
          en: `Kitchen shelf, silver.
**Technical Specifications:**
• Height: 200 cm
• Width: 60 cm
• Shelf depth: 35 cm
• Number of shelves: 5
• Load capacity: 250 kg per shelf
• Color: Silver
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
          ru: `Кухонный стеллаж, серебристый.
**Технические характеристики:**
• Высота: 200 см
• Ширина: 60 см
• Глубина полок: 35 см
• Количество полок: 5
• Нагрузка: 250 кг на полку
• Цвет: Серебристый
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 60 სმ",
            "თაროების სიღრმე: 35 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 250 კგ ერთ თაროზე",
            "ფერი: ვერცხლისფერი",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 200 cm",
            "Width: 60 cm",
            "Shelf depth: 35 cm",
            "Number of shelves: 5",
            "Load capacity: 250 kg per shelf",
            "Color: Silver",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 60 см",
            "Глубина полок: 35 см",
            "Количество полок: 5",
            "Нагрузка: 250 кг на полку",
            "Цвет: Серебристый",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/kitchen-shelving/kitchen-shelf-1.png"],
        colors: [t("silver")],
        sizes: ["200x60x35"],
        category: t("kitchenShelving"),
        rating: 4.5, // Placeholder
        reviewCount: 5, // Placeholder
      },
      "kitchen-shelf-2": {
        id: "kitchen-shelf-2",
        name: t("kitchenShelving200x106x35"),
        price: 0, // Price hidden
        description: {
          ka: `სამზარეულოს სტელაჟი, ვერცხლისფერი.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 106 სმ
• თაროების სიღრმე: 35 სმ
• თაროების რაოდენობა: 5
• დატვირთვა: 250 კგ ერთ თაროზე
• ფერი: ვერცხლისფერი
${t("wheelsCanBeInstalled")}.`,
          en: `Kitchen shelf, silver.
**Technical Specifications:**
• Height: 200 cm
• Width: 106 cm
• Shelf depth: 35 cm
• Number of shelves: 5
• Load capacity: 250 kg per shelf
• Color: Silver
${t("wheelsCanBeInstalled")}.`,
          ru: `Кухонный стеллаж, серебристый.
**Технические характеристики:**
• Высота: 200 см
• Ширина: 106 см
• Глубина полок: 35 см
• Количество полок: 5
• Нагрузка: 250 кг на полку
• Цвет: Серебристый
${t("wheelsCanBeInstalled")}.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 106 სმ",
            "თაროების სიღრმე: 35 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 250 კგ ერთ თაროზე",
            "ფერი: ვერცხლისფერი",
            t("wheelsCanBeInstalled"),
          ],
          en: [
            "Height: 200 cm",
            "Width: 106 cm",
            "Shelf depth: 35 cm",
            "Number of shelves: 5",
            "Load capacity: 250 kg per shelf",
            "Color: Silver",
            t("wheelsCanBeInstalled"),
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 106 см",
            "Глубина полок: 35 см",
            "Количество полок: 5",
            "Нагрузка: 250 кг на полку",
            "Цвет: Серебристый",
            t("wheelsCanBeInstalled"),
          ],
        },
        images: ["/images/kitchen-shelving/kitchen-shelf-2.png"],
        colors: [t("silver")],
        sizes: ["200x106x35"],
        category: t("kitchenShelving"),
        rating: 4.6, // Placeholder
        reviewCount: 6, // Placeholder
      },
      "kitchen-shelf-3": {
        id: "kitchen-shelf-3",
        name: t("kitchenShelving200x90x53"),
        price: 0, // Price hidden
        description: {
          ka: `სამზარეულოს სტელაჟი, ვერცხლისფერი.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 90 სმ
• თაროების სიღრმე: 53 სმ
• თაროების რაოდენობა: 5
• დატვირთვა: 250 კგ ერთ თაროზე
• ფერი: ვერცხლისფერი
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
          en: `Kitchen shelf, silver.
**Technical Specifications:**
• Height: 200 cm
• Width: 90 cm
• Shelf depth: 53 cm
• Number of shelves: 5
• Load capacity: 250 kg per shelf
• Color: Silver
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
          ru: `Кухонный стеллаж, серебристый.
**Технические характеристики:**
• Высота: 200 см
• Ширина: 90 см
• Глубина полок: 53 см
• Количество полок: 5
• Нагрузка: 250 кг на полку
• Цвет: Серебристый
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 90 სმ",
            "თაროების სიღრმე: 53 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 250 კგ ერთ თაროზე",
            "ფერი: ვერცხლისფერი",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 200 cm",
            "Width: 90 cm",
            "Shelf depth: 53 cm",
            "Number of shelves: 5",
            "Load capacity: 250 kg per shelf",
            "Color: Silver",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 90 см",
            "Глубина полок: 53 см",
            "Количество полок: 5",
            "Нагрузка: 250 кг на полку",
            "Цвет: Серебристый",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/kitchen-shelving/kitchen-shelf-3.jpg"],
        colors: [t("silver")],
        sizes: ["200x90x53"],
        category: t("kitchenShelving"),
        rating: 4.7, // Placeholder
        reviewCount: 7, // Placeholder
      },
      "kitchen-shelf-4": {
        id: "kitchen-shelf-4",
        name: t("kitchenShelving200x90x60"),
        price: 0, // Price hidden
        description: {
          ka: `სამზარეულოს სტელაჟი, ვერცხლისფერი.
**ტექნიკური მახასიათებლები:**
• სიმაღლე: 200 სმ
• სიგანე: 90 სმ
• თაროების სიღრმე: 60 სმ
• თაროების რაოდენობა: 5
• დატვირთვა: 250 კგ ერთ თაროზე
• ფერი: ვერცხლისფერი
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
          en: `Kitchen shelf, silver.
**Technical Specifications:**
• Height: 200 cm
• Width: 90 cm
• Shelf depth: 60 cm
• Number of shelves: 5
• Load capacity: 250 kg per shelf
• Color: Silver
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
          ru: `Кухонный стеллаж, серебристый.
**Технические характеристики:**
• Высота: 200 см
• Ширина: 90 см
• Глубина полок: 60 см
• Количество полок: 5
• Нагрузка: 250 кг на полку
• Цвет: Серебристый
${t("wheelsCanBeInstalled")}. ${t("easyAssembly")}. ${t("adjustableShelves")}.`,
        },
        features: {
          ka: [
            "სიმაღლე: 200 სმ",
            "სიგანე: 90 სმ",
            "თაროების სიღრმე: 60 სმ",
            "თაროების რაოდენობა: 5",
            "დატვირთვა: 250 კგ ერთ თაროზე",
            "ფერი: ვერცხლისფერი",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          en: [
            "Height: 200 cm",
            "Width: 90 cm",
            "Shelf depth: 60 cm",
            "Number of shelves: 5",
            "Load capacity: 250 kg per shelf",
            "Color: Silver",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
          ru: [
            "Высота: 200 см",
            "Ширина: 90 см",
            "Глубина полок: 60 см",
            "Количество полок: 5",
            "Нагрузка: 250 кг на полку",
            "Цвет: Серебристый",
            t("wheelsCanBeInstalled"),
            t("easyAssembly"),
            t("adjustableShelves"),
          ],
        },
        images: ["/images/kitchen-shelving/kitchen-shelf-4.jpg"],
        colors: [t("silver")],
        sizes: ["200x90x60"],
        category: t("kitchenShelving"),
        rating: 4.8, // Placeholder
        reviewCount: 8, // Placeholder
      },
      "kitchen-stainless-shelf-l120": {
  id: "kitchen-stainless-shelf-l120",
  name: "სამზარეულოს სტელაჟი უჟანგავი ცხაურით",
  price: 0, // ფასი დამალული
  description: {
    ka: `სამზარეულოს სტელაჟი უჟანგავი ცხაურით ზომები: L1200W500H1550 - 4 თაროთი

**ტექნიკური მახასიათებლები:**
• სიგრძე: 120 სმ
• სიგანე: 50 სმ
• სიმაღლე: 155 სმ
• თაროების რაოდენობა: 4
• მასალა: უჟანგავი ფოლადი
• დატვირთვა: 200 კგ ერთ თაროზე

იდეალურია სამზარეულოს და კვების ინდუსტრიისთვის. მაღალი ხარისხის უჟანგავი ფოლადისგან დამზადებული.`,
    en: `Kitchen shelf with stainless steel dimensions: L1200W500H1550 - 4 shelves

**Technical Specifications:**
• Length: 120 cm
• Width: 50 cm
• Height: 155 cm
• Number of shelves: 4
• Material: Stainless steel
• Load capacity: 200 kg per shelf

Ideal for kitchen and food industry. Made from high-quality stainless steel.`,
    ru: `Кухонный стеллаж из нержавеющей стали размеры: L1200W500H1550 - 4 полки

**Технические характеристики:**
• Длина: 120 см
• Ширина: 50 см
• Высота: 155 см
• Количество полок: 4
• Материал: Нержавеющая сталь
• Нагрузка: 200 кг на полку

Идеально для кухни и пищевой промышленности. Изготовлен из высококачественной нержавеющей стали.`,
  },
  features: {
    ka: [
      "სიგრძე: 120 სმ",
      "სიგანე: 50 სმ", 
      "სიმაღლე: 155 სმ",
      "თაროების რაოდენობა: 4",
      "მასალა: უჟანგავი ფოლადი",
      "დატვირთვა: 200 კგ ერთ თაროზე",
      "კოროზიისგან დაცული",
      "მარტივი გასუფთავება",
      "ჰიგიენური",
      "გამძლე კონსტრუქცია",
    ],
    en: [
      "Length: 120 cm",
      "Width: 50 cm",
      "Height: 155 cm", 
      "Number of shelves: 4",
      "Material: Stainless steel",
      "Load capacity: 200 kg per shelf",
      "Corrosion resistant",
      "Easy to clean",
      "Hygienic",
      "Durable construction",
    ],
    ru: [
      "Длина: 120 см",
      "Ширина: 50 см",
      "Высота: 155 см",
      "Количество полок: 4", 
      "Материал: Нержавеющая сталь",
      "Нагрузка: 200 кг на полку",
      "Устойчив к коррозии",
      "Легко чистится",
      "Гигиеничный",
      "Прочная конструкция",
    ],
  },
  images: [
    "/images/kitchen-shelving/stainless-steel-shelf-l120.jpeg",
  ],
  colors: [t("silver")],
  sizes: ["L1200*W500*H1550"],
  category: t("kitchenShelving"),
  rating: 4.7,
  reviewCount: 5,
},
        "kitchen-stainless-shelf-l180": {
      id: "kitchen-stainless-shelf-l180",
      name: "სამზარეულოს სტელაჟი უჟანგავი ცხაურით",
      price: 0, // Price hidden
      description: {
        ka: `სამზარეულოს სტელაჟი უჟანგავი ცხაურით ზომები: L1800*W500*H1550 - 4 თაროთი

**ტექნიკური მახასიათებლები:**
• სიგრძე: 180 სმ
• სიგანე: 50 სმ
• სიმაღლე: 155 სმ
• თაროების რაოდენობა: 4
• მასალა: უჟანგავი ფოლადი
• დატვირთვა: 200 კგ ერთ თაროზე

იდეალურია სამზარეულოს და კვების ინდუსტრიისთვის. მაღალი ხარისხის უჟანგავი ფოლადისგან დამზადებული.`,
        en: `Kitchen shelf with stainless steel mesh. Dimensions: L1800*W500*H1550 - 4 shelves

**Technical Specifications:**
• Length: 180 cm
• Width: 50 cm
• Height: 155 cm
• Number of shelves: 4
• Material: Stainless steel
• Load capacity: 200 kg per shelf

Ideal for kitchen and food industry. Made from high-quality stainless steel.`,
        ru: `Кухонный стеллаж из нержавеющей стали с сеткой. Размеры: L1800*W500*H1550 - 4 полки

**Технические характеристики:**
• Длина: 180 см
• Ширина: 50 см
• Высота: 155 см
• Количество полок: 4
• Материал: Нержавеющая сталь
• Нагрузка: 200 кг на полку

Идеально для кухни и пищевой промышленности. Изготовлен из высококачественной нержавеющей стали.`,
      },
      features: {
        ka: [
          "სიგრძე: 180 სმ",
          "სიგანე: 50 სმ",
          "სიმაღლე: 155 სმ",
          "თაროების რაოდენობა: 4",
          "მასალა: უჟანგავი ფოლადი",
          "დატვირთვა: 200 კგ ერთ თაროზე",
          "კოროზიისგან დაცული",
          "მარტივი გასუფთავება",
          "ჰიგიენური",
          "გამძლე კონსტრუქცია",
        ],
        en: [
          "Length: 180 cm",
          "Width: 50 cm",
          "Height: 155 cm",
          "Number of shelves: 4",
          "Material: Stainless steel",
          "Load capacity: 200 kg per shelf",
          "Corrosion resistant",
          "Easy to clean",
          "Hygienic",
          "Durable construction",
        ],
        ru: [
          "Длина: 180 см",
          "Ширина: 50 см",
          "Высота: 155 см",
          "Количество полок: 4",
          "Материал: Нержавеющая сталь",
          "Нагрузка: 200 кг на полку",
          "Устойчив к коррозии",
          "Легко чистится",
          "Гигиеничный",
          "Прочная конструкция",
        ],
      },
      images: [
        "/images/kitchen-shelving/stainless-steel-shelf-l180.jpeg",
      ],
      colors: [t("silver")],
      sizes: ["L1800*W500*H1550"],
      category: t("kitchenShelving"),
      rating: 4.7,
      reviewCount: 5,
    },
        "kitchen-stainless-trays-600x400": {
      id: "kitchen-stainless-trays-600x400",
      name: "უჟანგავი ჟარონები",
      price: 0, // Price hidden
      description: {
        ka: `უჟანგავი ჟარონები - ნახვრეტიანი და ნახვრეტების გარეშე
ზომა: H600*L400`,
        en: `Stainless steel trays - perforated and non-perforated
Size: H600*L400`,
        ru: `Противни из нержавеющей стали - перфорированные и неперфорированные
Размер: H600*L400`,
      },
      features: {
        ka: [
          "ზომა: H600*L400",
          "მასალა: უჟანგავი ფოლადი",
          "ნახვრეტიანი და ნახვრეტების გარეშე",
          "კოროზიისგან დაცული",
          "მარტივი გასუფთავება",
          "ჰიგიენური",
        ],
        en: [
          "Size: H600*L400",
          "Material: Stainless steel",
          "Perforated and non-perforated",
          "Corrosion resistant",
          "Easy to clean",
          "Hygienic",
        ],
        ru: [
          "Размер: H600*L400",
          "Материал: Нержавеющая сталь",
          "Перфорированные и неперфорированные",
          "Устойчив к коррозии",
          "Легко чистится",
          "Гигиеничный",
        ],
      },
      images: [
        "/images/kitchen-shelving/stainless-steel-trays.png",
      ],
      colors: [t("silver")],
      sizes: ["H600*L400"],
      category: t("kitchenShelving"),
      rating: 4.5,
      reviewCount: 3,
    },
        "kitchen-chrome-wire-shelf-200x120": {
      id: "kitchen-chrome-wire-shelf-200x120",
      name: "ბადიანი ქრომირებული სტელაჟები",
      price: 0, // Price hidden
      description: {
        ka: `ბადიანი ქრომირებული სტელაჟები
სიმაღლე: 200 სმ
სიგანე: 120 სმ
თაროების სიღრმე: 53 სმ
თაროების რაოდენობა: 5
დატვირთვა: 250 კგ ერთ თაროზე
შესაძლებელია საბურავების დაყენება
ფერი: ვერცხლისფერი
თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით.`,
        en: `Chrome wire shelving
Height: 200 cm
Width: 120 cm
Shelf depth: 53 cm
Number of shelves: 5
Load capacity: 250 kg per shelf
Wheels can be installed
Color: Silver
Shelves are easy to assemble/disassemble. Shelves can be repositioned.`,
        ru: `Стеллажи из хромированной сетки
Высота: 200 см
Ширина: 120 см
Глубина полок: 53 см
Количество полок: 5
Нагрузка: 250 кг на полку
Возможна установка колес
Цвет: Серебристый
Полки легко собираются/разбираются. Полки можно перемещать.`,
      },
      features: {
        ka: [
          "სიმაღლე: 200 სმ",
          "სიგანე: 120 სმ",
          "თაროების სიღრმე: 53 სმ",
          "თაროების რაოდენობა: 5",
          "დატვირთვა: 250 კგ ერთ თაროზე",
          "შესაძლებელია საბურავების დაყენება",
          "ფერი: ვერცხლისფერი",
          "მარტივი კონსტრუქცია",
          "თაროების რეგულირება",
        ],
        en: [
          "Height: 200 cm",
          "Width: 120 cm",
          "Shelf depth: 53 cm",
          "Number of shelves: 5",
          "Load capacity: 250 kg per shelf",
          "Wheels can be installed",
          "Color: Silver",
          "Easy assembly",
          "Adjustable shelves",
        ],
        ru: [
          "Высота: 200 см",
          "Ширина: 120 см",
          "Глубина полок: 53 см",
          "Количество полок: 5",
          "Нагрузка: 250 кг на полку",
          "Возможна установка колес",
          "Цвет: Серебристый",
          "Простая конструкция",
          "Регулируемые полки",
        ],
      },
      images: [
        "/images/kitchen-shelving/chrome-wire-shelf-200x120.jpeg",
      ],
      colors: [t("silver")],
      sizes: ["200x120x53"],
      category: t("kitchenShelving"),
      rating: 4.6,
      reviewCount: 4,
    },
        "kitchen-chrome-wire-shelf-200x151": {
      id: "kitchen-chrome-wire-shelf-200x151",
      name: "ბადიანი ქრომირებული სტელაჟები",
      price: 0, // Price hidden
      description: {
        ka: `ბადიანი ქრომირებული სტელაჟები
სიმაღლე: 200 სმ
სიგანე: 151 სმ
თაროების სიღრმე: 53 სმ
თაროების რაოდენობა: 5
დატვირთვა: 250 კგ ერთ თაროზე
შესაძლებელია საბურავების დაყენება
ფერი: ვერცხლისფერი
თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით.`,
        en: `Chrome wire shelving
Height: 200 cm
Width: 151 cm
Shelf depth: 53 cm
Number of shelves: 5
Load capacity: 250 kg per shelf
Wheels can be installed
Color: Silver
Shelves are easy to assemble/disassemble. Shelves can be repositioned.`,
        ru: `Стеллажи из хромированной сетки
Высота: 200 см
Ширина: 151 см
Глубина полок: 53 см
Количество полок: 5
Нагрузка: 250 кг на полку
Возможна установка колес
Цвет: Серебристый
Полки легко собираются/разбираются. Полки можно перемещать.`,
      },
      features: {
        ka: [
          "სიმაღლე: 200 სმ",
          "სიგანე: 151 სმ",
          "თაროების სიღრმე: 53 სმ",
          "თაროების რაოდენობა: 5",
          "დატვირთვა: 250 კგ ერთ თაროზე",
          "შესაძლებელია საბურავების დაყენება",
          "ფერი: ვერცხლისფერი",
          "მარტივი კონსტრუქცია",
          "თაროების რეგულირება",
        ],
        en: [
          "Height: 200 cm",
          "Width: 151 cm",
          "Shelf depth: 53 cm",
          "Number of shelves: 5",
          "Load capacity: 250 kg per shelf",
          "Wheels can be installed",
          "Color: Silver",
          "Easy assembly",
          "Adjustable shelves",
        ],
        ru: [
          "Высота: 200 см",
          "Ширина: 151 см",
          "Глубина полок: 53 см",
          "Количество полок: 5",
          "Нагрузка: 250 кг на полку",
          "Возможна установка колес",
          "Цвет: Серебристый",
          "Простая конструкция",
          "Регулируемые полки",
        ],
      },
      images: [
        "/images/kitchen-shelving/chrome-wire-shelf-200x151.jpeg",
      ],
      colors: [t("silver")],
      sizes: ["200x151x53"],
      category: t("kitchenShelving"),
      rating: 4.6,
      reviewCount: 4,
    },
        "kitchen-chrome-wire-shelf-200x180": {
      id: "kitchen-chrome-wire-shelf-200x180",
      name: "ბადიანი ქრომირებული სტელაჟები",
      price: 0, // Price hidden
      description: {
        ka: `ბადიანი ქრომირებული სტელაჟები
სიმაღლე: 200 სმ
სიგანე: 180 სმ
თაროების სიღრმე: 53 სმ
თაროების რაოდენობა: 5
დატვირთვა: 250 კგ ერთ თაროზე
შესაძლებელია საბურავების დაყენება
ფერი: ვერცხლისფერი
თაროები არის მარტივად ასაწყობ-დასაშლელი კონსტრუქციის. შესაძლებელია თაროების გადაადგილება სურვილის მიხედვით.`,
        en: `Chrome wire shelving
Height: 200 cm
Width: 180 cm
Shelf depth: 53 cm
Number of shelves: 5
Load capacity: 250 kg per shelf
Wheels can be installed
Color: Silver
Shelves are easy to assemble/disassemble. Shelves can be repositioned.`,
        ru: `Стеллажи из хромированной сетки
Высота: 200 см
Ширина: 180 см
Глубина полок: 53 см
Количество полок: 5
Нагрузка: 250 кг на полку
Возможна установка колес
Цвет: Серебристый
Полки легко собираются/разбираются. Полки можно перемещать.`,
      },
      features: {
        ka: [
          "სიმაღლე: 200 სმ",
          "სიგანე: 180 სმ",
          "თაროების სიღრმე: 53 სმ",
          "თაროების რაოდენობა: 5",
          "დატვირთვა: 250 კგ ერთ თაროზე",
          "შესაძლებელია საბურავების დაყენება",
          "ფერი: ვერცხლისფერი",
          "მარტივი კონსტრუქცია",
          "თაროების რეგულირება",
        ],
        en: [
          "Height: 200 cm",
          "Width: 180 cm",
          "Shelf depth: 53 cm",
          "Number of shelves: 5",
          "Load capacity: 250 kg per shelf",
          "Wheels can be installed",
          "Color: Silver",
          "Easy assembly",
          "Adjustable shelves",
        ],
        ru: [
          "Высота: 200 см",
          "Ширина: 180 см",
          "Глубина полок: 53 см",
          "Количество полок: 5",
          "Нагрузка: 250 кг н�� полку",
          "Возможна установка колес",
          "Цвет: Серебристый",
          "Простая конструкция",
          "Регулируемые полки",
        ],
      },
      images: [
        "/images/kitchen-shelving/chrome-wire-shelf-200x180.jpeg",
      ],
      colors: [t("silver")],
      sizes: ["200x180x53"],
      category: t("kitchenShelving"),
      rating: 4.6,
      reviewCount: 4,
    },
    }

    return products[productId as keyof typeof products] || null
  }

  const product = getProductData(params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            Back to products
          </Link>
        </div>
      </div>
    )
  }

  // Replace the existing relatedProducts array with this:
  const getAllProducts = () => {
    return [
      // Warehouse shelving
      {
        id: "warehouse-1",
        name: t("warehouseShelvingUnit"),
        price: 450.0,
        image: "/images/blue-warehouse-shelving.png",
        category: t("warehouseShelving"),
        rating: 4.8,
        reviewCount: 24,
      },
      {
        id: "warehouse-2",
        name: t("warehouseShelvingUnit"),
        price: 420.0,
        image: "/images/blue-orange-warehouse-shelving.jpg",
        category: t("warehouseShelving"),
        rating: 4.7,
        reviewCount: 18,
      },
      {
        id: "warehouse-3",
        name: t("warehouseShelvingUnit"),
        price: 480.0,
        image: "/images/gray-warehouse-shelving.jpg",
        category: t("warehouseShelving"),
        rating: 4.6,
        reviewCount: 15,
      },
      {
        id: "warehouse-4",
        name: t("warehouseShelvingUnit"),
        price: 520.0,
        image: "/images/tall-warehouse-shelving.jpg",
        category: t("warehouseShelving"),
        rating: 4.9,
        reviewCount: 12,
      },
      // Tire shelving
      {
        id: "tire-shelving-1",
        name: t("tireShelvingUnit"),
        price: 680.0,
        image: "/images/tire-shelving-1.png",
        category: t("tireShelving"),
        rating: 4.7,
        reviewCount: 9,
      },
      // Clothing shelving
      {
        id: "clothing-shelving-1",
        name: t("clothingShelvingUnit"),
        price: 380.0,
        image: "/images/clothing-rack-1.jpg",
        category: t("clothingShelving"),
        rating: 4.5,
        reviewCount: 14,
      },
      // Market accessories
      {
        id: "aluminum-rail-1",
        name: t("aluminumRailUnit"),
        price: 45.0,
        image: "/images/aluminum-rail-3.jpg",
        category: t("marketAccessories"),
        rating: 4.6,
        reviewCount: 22,
      },
      {
        id: "perforated-wall-1",
        name: t("perforatedWallUnit"),
        price: 320.0,
        image: "/images/perforated-wall-cover-1.jpg",
        category: t("marketAccessories"),
        rating: 4.3,
        reviewCount: 11,
      },
      // Market shelves
      {
        id: "perforated-profile-1",
        name: t("perforatedProfileUnit"),
        price: 85.0,
        image: "/images/perforated-profile-2.jpg",
        category: t("marketShelves"),
        rating: 4.4,
        reviewCount: 16,
      },
      {
        id: "basket-shelving-1",
        name: t("basketShelvingUnit"),
        price: 280.0,
        image: "/images/basket-shelving-white.jpeg",
        category: t("basketShelving"),
        rating: 4.5,
        reviewCount: 19,
      },
      {
        id: "tier-shelving-1",
        name: t("tierShelvingUnit"),
        price: 220.0,
        image: "/images/tier-shelving-colors.jpeg",
        category: t("tierShelving"),
        rating: 4.4,
        reviewCount: 25,
      },
      // Pallet shelving
      {
        id: "pallet-shelving-1",
        name: t("palletShelvingUnit1"),
        price: 850.0,
        image: "/images/pallet-shelving-1.jpg",
        category: t("palletShelving"),
        rating: 4.8,
        reviewCount: 8,
      },
      {
        id: "pallet-shelving-2",
        name: t("palletShelvingUnit2"),
        price: 950.0,
        image: "/images/pallet-shelving-2.jpg",
        category: t("palletShelving"),
        rating: 4.7,
        reviewCount: 6,
      },
      // Archive shelving
      {
        id: "archive-shelving-1",
        name: t("archiveShelvingUnit"),
        price: 420.0,
        image: "/images/archive-shelving-1.jpg",
        category: t("archiveShelving"),
        rating: 4.6,
        reviewCount: 13,
      },
      // POS Materials
      {
        id: "shelf-price-display-1",
        name: t("shelfPriceDisplayUnit"),
        price: 25.0,
        image: "/images/shelf-price-display-1.jpg",
        category: t("posMaterials"),
        rating: 4.2,
        reviewCount: 31,
      },
      {
        id: "plastic-frames-1",
        name: t("plasticFramesUnit"),
        price: 15.0,
        image: "/images/plastic-frames-1.jpg",
        category: t("posMaterials"),
        rating: 4.1,
        reviewCount: 42,
      },
      {
        id: "frame-stands-1",
        name: t("frameStandsUnit"),
        price: 35.0,
        image: "/images/frame-stands-1.jpg",
        category: t("posMaterials"),
        rating: 4.3,
        reviewCount: 18,
      },
      // Trolleys
      {
        id: "pallet-trolley-1",
        name: t("palletTrolleyUnit"),
        price: 180.0,
        image: "/images/pallet-trolley-red.jpeg",
        category: t("trolleys"),
        rating: 4.7,
        reviewCount: 12,
      },
      {
        id: "platform-trolley-blue",
        name: t("platformTrolleyBlue"),
        price: 150.0,
        image: "/images/platform-trolley-blue.jpeg",
        category: t("trolleys"),
        rating: 4.5,
        reviewCount: 8,
      },
      {
        id: "platform-trolley-yellow",
        name: t("platformTrolleyYellow"),
        price: 150.0,
        image: "/images/platform-trolley-yellow.jpeg",
        category: t("trolleys"),
        rating: 4.5,
        reviewCount: 6,
      },
      // Trash bins
      {
        id: "trash-bin-120",
        name: t("trashBin120Unit"),
        price: 85.0,
        image: "/images/trash-bin-120l.jpg",
        category: t("trashBins"),
        rating: 4.6,
        reviewCount: 28,
      },
      {
        id: "trash-bin-240",
        name: t("trashBin240Unit"),
        price: 120.0,
        image: "/images/trash-bin-240l.jpg",
        category: t("trashBins"),
        rating: 4.7,
        reviewCount: 15,
      },
      {
        id: "shopping-basket-20l",
        name: t("shoppingBasket20lUnit"),
        price: 25.0,
        image: "/images/shopping-basket-20l-red.jpg",
        category: t("marketAccessories"),
        rating: 4.5,
        reviewCount: 10,
      },
      {
        id: "perforated-hooks",
        name: t("perforatedHooksUnit"),
        price: 5.0,
        image: "/images/perforated-panel-hooks.jpg",
        category: t("marketAccessories"),
        rating: 4.3,
        reviewCount: 15,
      },
      {
        id: "shelf-front-barrier",
        name: t("shelfFrontBarrierUnit"),
        price: 15.0,
        image: "/images/shelf-front-barrier.jpg",
        category: t("marketAccessories"),
        rating: 4.2,
        reviewCount: 8,
      },
      {
        id: "checkout-counter-1500",
        name: t("checkoutCounter1500Unit"),
        price: 750.0,
        image: "/images/checkout-counter-1500.jpg",
        category: t("marketAccessories"),
        rating: 4.6,
        reviewCount: 5,
      },
      {
        id: "shelf-divider-h250",
        name: t("shelfDividerH250Unit"),
        price: 10.0,
        image: "/images/shelf-divider-h250.jpg",
        category: t("marketAccessories"),
        rating: 4.0,
        reviewCount: 12,
      },
      {
        id: "promotion-basket-90x60",
        name: t("promotionBasket90x60Unit"),
        price: 120.0,
        image: "/images/promotion-basket-90x60.jpg",
        category: t("marketAccessories"),
        rating: 4.4,
        reviewCount: 7,
      },
      {
        id: "lightbox-890x330",
        name: t("lightbox890x330Unit"),
        price: 180.0,
        image: "/images/lightbox-890x330.jpg",
        category: t("marketAccessories"),
        rating: 4.5,
        reviewCount: 9,
      },
      {
        id: "cash-drawer-368",
        name: t("cashDrawer368Unit"),
        price: 90.0,
        image: "/images/cash-drawer-368.jpg",
        category: t("marketAccessories"),
        rating: 4.3,
        reviewCount: 11,
      },
      {
        id: "hook-locker",
        name: t("hookLockerUnit"),
        price: 2.0,
        image: "/images/hook-locker.jpg",
        category: t("marketAccessories"),
        rating: 4.0,
        reviewCount: 20,
      },
      {
        id: "hook-locker-key",
        name: t("hookLockerKeyUnit"),
        price: 15.0,
        image: "/images/hook-locker-key.jpg",
        category: t("marketAccessories"),
        rating: 4.5,
        reviewCount: 5,
      },
      // New Market Shelves
      {
        id: "market-shelf-single-165",
        name: t("marketShelfSingle165"),
        price: 0,
        image: "/images/market-shelves/market-shelf-single-165.jpg",
        category: t("marketShelves"),
        rating: 4.7,
        reviewCount: 10,
      },
      {
        id: "market-shelf-single-195",
        name: t("marketShelfSingle195"),
        price: 0,
        image: "/images/market-shelves/market-shelf-single-195.jpg",
        category: t("marketShelves"),
        rating: 4.8,
        reviewCount: 12,
      },
      {
        id: "market-shelf-single-220",
        name: t("marketShelfSingle220"),
        price: 0,
        image: "/images/market-shelves/market-shelf-single-220.jpg",
        category: t("marketShelves"),
        rating: 4.9,
        reviewCount: 15,
      },
      {
        id: "market-shelf-basket-165",
        name: t("marketShelfBasket165"),
        price: 0,
        image: "/images/market-shelves/market-shelf-basket.jpg",
        category: t("marketShelves"),
        rating: 4.6,
        reviewCount: 9,
      },
      {
        id: "market-shelf-basket-195",
        name: t("marketShelfBasket195"),
        price: 0,
        image: "/images/market-shelves/market-shelf-basket.jpg",
        category: t("marketShelves"),
        rating: 4.6,
        reviewCount: 7,
      },
      {
        id: "market-shelf-gondola-135",
        name: t("marketShelfGondola135"),
        price: 0,
        image: "/images/market-shelves/market-shelf-gondola-135.jpg",
        category: t("marketShelves"),
        rating: 4.7,
        reviewCount: 11,
      },
      {
        id: "market-shelf-gondola-165",
        name: t("marketShelfGondola165"),
        price: 0,
        image: "/images/market-shelves/market-shelf-gondola-165.png",
        category: t("marketShelves"),
        rating: 4.8,
        reviewCount: 14,
      },
      {
        id: "market-shelf-perf-165",
        name: t("marketShelfPerf165"),
        price: 0,
        image: "/images/market-shelves/market-shelf-perf-165.png",
        category: t("marketShelves"),
        rating: 4.5,
        reviewCount: 8,
      },
      {
        id: "market-shelf-perf-195",
        name: t("marketShelfPerf195"),
        price: 0,
        image: "/images/market-shelves/market-shelf-perf-195.png",
        category: t("marketShelves"),
        rating: 4.6,
        reviewCount: 10,
      },
      {
        id: "market-shelf-checkout-front",
        name: t("marketShelfCheckoutFront"),
        price: 0,
        image: "/images/market-shelves/market-shelf-checkout-front.jpg",
        category: t("marketShelves"),
        rating: 4.4,
        reviewCount: 6,
      },
      {
        id: "market-shelf-single-135-w73",
        name: t("marketShelfSingle135W73"),
        price: 0,
        image: "/images/market-shelves/market-shelf-single-135w73.jpg",
        category: t("marketShelves"),
        rating: 4.5,
        reviewCount: 7,
      },
      {
        id: "market-shelf-single-165-w73",
        name: t("marketShelfSingle165W73"),
        price: 0,
        image: "/images/market-shelves/market-shelf-single-165w73.jpg",
        category: t("marketShelves"),
        rating: 4.6,
        reviewCount: 8,
      },
      // Kitchen Shelving Products
      {
        id: "kitchen-shelf-1",
        name: t("kitchenShelving200x60x35"),
        price: 0,
        image: "/images/kitchen-shelving/kitchen-shelf-1.png",
        category: t("kitchenShelving"),
        rating: 4.5,
        reviewCount: 5,
      },
      {
        id: "kitchen-shelf-2",
        name: t("kitchenShelving200x106x35"),
        price: 0,
        image: "/images/kitchen-shelving/kitchen-shelf-2.png",
        category: t("kitchenShelving"),
        rating: 4.6,
        reviewCount: 6,
      },
      {
        id: "kitchen-shelf-3",
        name: t("kitchenShelving200x90x53"),
        price: 0,
        image: "/images/kitchen-shelving/kitchen-shelf-3.jpg",
        category: t("kitchenShelving"),
        rating: 4.7,
        reviewCount: 7,
      },
      {
        id: "kitchen-shelf-4",
        name: t("kitchenShelving200x90x60"),
        price: 0,
        image: "/images/kitchen-shelving/kitchen-shelf-4.jpg",
        category: t("kitchenShelving"),
        rating: 4.8,
        reviewCount: 8,
      },
    ]
  }

  // Get related products from the same category
  const allProducts = getAllProducts()
  const relatedProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              {t("home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-gray-700">
              {t("products")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-indigo-500"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full aspect-square">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

            {/* Price section removed */}

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">{t("reviews")}</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`${
                        product.rating > rating ? "text-yellow-400 fill-current" : "text-gray-300"
                      } h-5 w-5 flex-shrink-0`}
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {product.reviewCount} {t("reviews")}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">{t("description")}</h3>
              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{
                  __html: product.description[language].replace(/\n/g, "<br>"),
                }}
              />
            </div>

            <section className="mt-16" aria-labelledby="features-heading">
              <h2 id="features-heading" className="text-lg font-medium text-gray-900">
                {t("features")}
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {product.features[language].map((feature, index) => (
                  <div key={index} className="flex">
                    <p className="text-sm text-gray-500">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">{t("relatedProducts")}</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`${
                            relatedProduct.rating > rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          } h-4 w-4 flex-shrink-0`}
                        />
                      ))}
                      <p className="ml-2 text-sm text-gray-500">({relatedProduct.reviewCount})</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
