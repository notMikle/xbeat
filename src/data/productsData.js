const productsData = [
    {
        id: 98,
        images: [
            "/images/products/hairConditioner3.png",
            // "/images/products/hairConditioner3.png",
            // "/images/products/hairConditioner3.png",
        ],
        brand: "TWO PHASE HAIR CONDITIONER HERBAL",
        title: "TWO PHASE HAIR CONDITIONER HERBAL",
        info: "Двухфазный травяной кондиционер Bandido помогает вашим волосам восстановить влагу, которую они потеряли в результате термической обработки. Придает волосам блеск и делает их сильными, содержит масло семян конопли.",
        fullInfo:'',
        category: "Кондиционер для волос",
        type: "Кондиционер для волос",
        size: "350ml",
        finalPrice: 600,
        originalPrice: 1500,
        optPrice:500,
        quantity: 12,
        path: "/product-details/",
    },
    {
        id: 99,
        images: [
            "/images/products/hairConditioner2.png",
            "/images/products/hairConditioner2.png",
            "/images/products/hairConditioner2.png",
        ],
        brand: "TWO PHASE HAIR CONDITIONER KERATIN",
        title: "TWO PHASE HAIR CONDITIONER KERATIN",
        info: "Двухфазный кондиционер Bandido Keratin специально изготовлен для тонких и поврежденных волос. Экстракт кератина в его содержании помогает восстановлению. Идеально подойдет для окрашенных волос.",
        category: "Кондиционер для волос",
        type: "Кондиционер для волос",
        size: "350 мл",
        finalPrice: 600,
        originalPrice: 1500,
        optPrice: 500,
        quantity: 12,
        path: "/product-details/",
    },
    {
        id: 100,
        images: [
            "/images/products/hairConditionerArgan.png",
            "/images/products/hairConditionerArgan.png",
            "/images/products/hairConditionerArgan.png",
        ],
        brand: "TWO PHASE HAIR CONDITIONER ARGAN",
        title: "TWO PHASE HAIR CONDITIONER ARGAN",
        info: "Двухфазный аргановый кондиционер Bandido специально изготовлен для тусклых и безжизненных волос. Питательные свойства арганового масла в его содержании помогут защитить ваши волосы и сделать их более яркими.",
        category: "Кондиционер для волос",
        type: "Кондиционер для волос",
        size: "350ml",
        finalPrice: 600,
        originalPrice: 1500,
        optPrice: 550,
        quantity: 12,
        path: "/product-details/",
    },
    {
        id: 101,
        images: [
            "/images/products/MatteWax.png",
            "/images/products/MatteWax2.png",
            "/images/products/MatteWax2.png",
        ],
        brand: "MATTE WAX",
        title: "MATTE WAX",
        info: "Благодаря своей специальной кремовой формуле, матовый воск обеспечивает легкую укладку и естественный вид. Кроме того, он питает ваши волосы, так как содержит необходимые натуральные масла.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "125ml или 150ml",
        finalPrice: 420,
        originalPrice: 1050,
        optPrice: 410,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 102,
        images: [
            "/images/products/FiberWax.png",
            "/images/products/FiberWax.png",
            "/images/products/FiberWax.png",
        ],
        brand: "FIBER HAIR WAX",
        title: "FIBER HAIR WAX",
        info: "Воск для волос на водной основе паутинка. Рады представить с такой уникальной формулой, которая заставляет его растягиваться до бесконечности. Воск обладает средней фиксацией.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "125 мл",
        finalPrice: 420,
        originalPrice: 1050,
        optPrice: 410,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    }, {
        id: 103,
        images: [
            "/images/products/CreamPomade.png",
            "/images/products/CreamPomade.png",
            "/images/products/CreamPomade.png",
        ],
        brand: "CREAM POMADE",
        title: "CREAM POMADE",
        info: "Помада кремовая средней фиксации - это простой в использовании стайлер для всех типов волос, чтобы ваши волосы выглядели великолепно в течение всего дня. Обеспечивает объем, не утяжеляя волосы, и придает им естественный блеск.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "125 мл",
        finalPrice: 450,
        originalPrice: 1080,
        optPrice: 410,
        quantity: 16,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },{
        id: 104,
        images: [
            "/images/products/FiberWax.png",
            "/images/products/FiberWax.png",
            "/images/products/FiberWax.png",
        ],
        brand: "HAIR STYLING POWDER EXTRA VOLUME",
        title: "HAIR STYLING POWDER EXTRA VOLUME",
        info: "Пудра для прикорневого обьема сильной фиксации Продукт добавит объем и текстуру вашим волосам, сохраняет свою фиксацию до 24-часов без жесткости и липкости.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        connectivity: "125ml",
        finalPrice: 420,
        originalPrice: 1050,
        optPrice: 410,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },{
        id: 105,
        images: [
            "/images/products/FiberWax.png",
            "/images/products/FiberWax.png",
            "/images/products/FiberWax.png",
        ],
        brand: "GREASE HEAVY HOLD",
        title: "GREASE HEAVY HOLD",
        info: "Помада на масляной основе. Высокое содержание масла и специальная формула на основе смолы делают ваши волосы блестящими в естественном виде. Для максимально сильной фиксации, рекомендовано наносить на сухие  волосы.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "125ml",
        finalPrice: 500,
        originalPrice: 1150,
        optPrice: 410,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },{
        id: 106,
        images: [
            "/images/products/FiberWax.png",
            "/images/products/FiberWax.png",
            "/images/products/FiberWax.png",
        ],

        brand: "MATTE POMADE",
        title: "MATTE POMADE",
        info: "Матовая помада для повседневной укладки, придает естественный вид волосам. Мягкая кремовая консистенция способствует легкому нанесению. Кроме того, в состав входят масла которые  питают ваши волосы.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "125ml",
        finalPrice: 450,
        originalPrice: 1040,
        optPrice: 410,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },{
        id: 107,
        images: [
            "/images/products/ClassicPomade.png",
            "/images/products/ClassicPomade.png",
            "/images/products/ClassicPomade.png",
        ],
        brand: "CLASSIC POMADE",
        title: "CLASSIC POMADE",
        info: "Classic pomade легко распределяется и регулируется  в зависимости от количества влаги в ваших волосах, реактивируется водой, что облегчает вам изменение прически. Мы рекомендуем использовать Classic pomade на влажные волосы.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "125 мл",
        finalPrice: 420,
        originalPrice: 1050,
        optPrice: 410,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 108,
        images: [
            "/images/products/AquaWaxGreen.png",
            "/images/products/AquaWaxGreen.png",
            "/images/products/AquaWaxGreen.png",
        ],
        brand: "AquaWaxGREEN",
        title: "AQUA WAX 4 GREEN",
        info: "Воск для естественной укладки, для нормальных волос. Благодаря своей формуле помогает обеспечить плавное сцепление и легкость придания формы. В дополнение сопровождается мужским сексуальным ароматом.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "150 мл",
        finalPrice: 380,
        originalPrice: 1000,
        optPrice: 410,
        quantity: 48,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 109,
        images: [
            "/images/products/AquaWaxBlue.png",
            "/images/products/AquaWaxBlue.png",
            "/images/products/AquaWaxBlue.png",
        ],
        brand: "AquaWaxBLUE",
        title: "AQUA WAX 5 BLUE",
        info: "Воск для сложных укладок. Легко наносится и придает вашим волосам желаемый результат.  Эффект естественной укладки на длительное время. Присутствует сексуальный мужской аромат.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "150 мл",
        finalPrice: 380,
        originalPrice: 1000,
        optPrice: 410,
        quantity: 48,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 110,
        images: [
            "/images/products/waxRed.png",
            "/images/products/waxRed.png",
            "/images/products/waxRed.png",
        ],
        brand: "AquaWaxRed",
        title: "AQUA WAX 7 RED",
        info: "Обладает невероятно сильной фиксацией, можно свободно сделать сложную укладку, не смотря на это легко наносится  и легко смывается. Характеризуется более жестким сцеплением с волосами, чтобы ваша прическа сохранялась дольше.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "150 мл",
        finalPrice: 380,
        originalPrice: 1000,
        optPrice: 410,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 111,

        images: [
            "/images/products/AquaWaxBlack.png",
            "/images/products/Black.png",
            "/images/products/Black.png",
        ],
        brand: "AquaWaxBLACK",
        title: "AQUA WAX 8 BLACK",
        info: "Воск для жестких волос сильная фиксация. Aqua 8 Wax Extreme Strong позволяет легко укладывать густые волосы, а также поддерживать прическу более длительное  время. В дополнение обладает мужским сексуальным  ароматом.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "150 мл",
        finalPrice: 380,
        originalPrice: 1000,
        optPrice: 410,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 112,
        images: [
            "/images/products/AquaWaxVioletta1.png",
            "/images/products/AquaWaxVioletta.png",
            "/images/products/AquaWaxVioletta.png",
        ],
        brand: "AquaWaxVIOLETTA",
        title: "AQUA WAX 6 VIOLETTA",
        info: "Воск подходит на любой типаж волос легко наносится и придает желаемый эффект. В качестве альтернативы, его формула имеет эффект помады сильной фиксации который поможет вашей прическе сохранятся дольше.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "125 мл",
        finalPrice: 380,
        originalPrice: 1000,
        optPrice: 1000,
        quantity: 48,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 113,
        images: [
            "/images/products/ShavingGelBlue.png",
            "/images/products/ShavingGelBlue.png",
            "/images/products/ShavingGelBlue.png",
        ],
        brand: "SHAVING GEL BLUE",
        title: "SHAVING GEL BLUE",
        info: "Наш прозрачный гель для бритья, позволяет  сделать ваш ритуал более приятным и эффективным, позволяя вам бриться с уверенностью и гладкостью.",
        category: "Гель для бритья",
        type: "Гель для бритья",
        size: "1000 мл",
        finalPrice: 620,
        originalPrice: 1500,
        optPrice: 600,
        quantity: 12,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 114,
        images: [
            "/images/products/ShavingGelMetallic.png",
            "/images/products/ShavingGelMetallic.png",
            "/images/products/ShavingGelMetallic.png",
        ],
        brand: "SHAVING GEL METALLIC",
        title: "SHAVING GEL METALLIC",
        info: "Наш прозрачный гель для бритья, позволяет  сделать ваш ритуал более приятным и эффективным, позволяя вам бриться с уверенностью и гладкостью.",
        category: "Гель для бритья",
        type: "Гель для бритья",
        size: "1000 мл",
        finalPrice: 620,
        originalPrice: 1500,
        optPrice: 600,
        quantity: 12,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 115,
        images: [
            "/images/products/ShavingGelGold.png",
            "/images/products/ShavingGelGold.png",
            "/images/products/ShavingGelGold.png",
        ],
        brand: "SHAVING GEL METALLIC GOLD",
        title: "SHAVING GEL METALLIC GOLD",
        info: "Наш прозрачный гель для бритья, позволяет  сделать ваш ритуал более приятным и эффективным, позволяя вам бриться с уверенностью и гладкостью.",
        category: "Гель для бритья",
        type: "Гель для бритья",
        size: "1000 мл",
        finalPrice: 620,
        originalPrice: 1500,
        optPrice: 600,
        quantity: 12,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 116,
        images: [
            "/images/products/ShavingGelRed.png",
            "/images/products/ShavingGelRed.png",
            "/images/products/ShavingGelRed.png",
        ],
        brand: "SHAVING GEL RED",
        title: "SHAVING GEL RED",
        info: "Наш прозрачный гель для бритья, позволяет  сделать ваш ритуал более приятным и эффективным, позволяя вам бриться с уверенностью и гладкостью.",
        category: "Гель для бритья",
        type: "Гель для бритья",
        size: "1000 мл",
        finalPrice: 620,
        originalPrice: 1500,
        optPrice: 600,
        quantity: 12,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 117,
        images: [
            "/images/products/ShavingGelPearlyGreen.png",
            "/images/products/ShavingGelPearlyGreen.png",
            "/images/products/ShavingGelPearlyGreen.png",
        ],
        brand: "SHAVING GEL PEARLY GREEN",
        title: "SHAVING GEL PEARLY GREEN",
        info: "Наш прозрачный гель для бритья, позволяет  сделать ваш ритуал более приятным и эффективным, позволяя вам бриться с уверенностью и гладкостью.",
        category: "Гель для бритья",
        type: "Гель для бритья",
        size: "1000 мл",
        finalPrice: 620,
        originalPrice: 1500,
        optPrice: 600,
        quantity: 12,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 118,
        images: [
            "/images/products/AfterShaveColombia.png",
            "/images/products/AfterShaveColombia.png",
            "/images/products/AfterShaveColombia.png",
        ],
        brand: "AFTER SHAVE CREAM COLOGNE COLOMBIA",
        title: "AFTER SHAVE CREAM COLOGNE COLOMBIA",
        info: "Крем-одеколон после бритья Bandido со специальной формулой помогает свести к минимуму негативные последствия, а также оставляет ощущение свежести после бритья.",
        category: "Крем после бритья",
        type: "Крем после бритья",
        size: "350 мл",
        finalPrice: 540,
        originalPrice: 1350,
        optPrice: 600,
        quantity: 24,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 119,
        images: [
            "/images/products/AfterShaveIstanbul.png",
            "/images/products/AfterShaveIstanbul.png",
            "/images/products/AfterShaveIstanbul.png",
        ],
        brand: "AFTER SHAVE CREAM COLOGNE ISTANBUL",
        title: "AFTER SHAVE CREAM COLOGNE ISTANBUL",
        info: "Крем-одеколон после бритья Bandido со специальной формулой помогает свести к минимуму негативные последствия, а также оставляет ощущение свежести после бритья.",
        category: "Крем после бритья",
        type: "Крем после бритья",
        size: "350 мл",
        finalPrice: 540,
        originalPrice: 1350,
        optPrice: 600,
        quantity: 24,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 120,
        images: [
            "/images/products/AfterShaveNewYork.png",
            "/images/products/AfterShaveNewYork.png",
            "/images/products/AfterShaveNewYork.png",
        ],
        brand: "AFTER SHAVE CREAM COLOGNE NEW YORK",
        title: "AFTER SHAVE CREAM COLOGNE NEW YORK",
        info: "Крем-одеколон после бритья Bandido со специальной формулой помогает свести к минимуму негативные последствия, а также оставляет ощущение свежести после бритья.",
        category: "Крем после бритья",
        type: "Крем после бритья",
        size: "350 мл",
        finalPrice: 540,
        originalPrice: 1350,
        optPrice: 600,
        quantity: 24,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 121,
        images: [
            "/images/products/AfterShaveLondon.png",
            "/images/products/AfterShaveLondon.png",
            "/images/products/AfterShaveLondon.png",
        ],
        brand: "AFTER SHAVE CREAM COLOGNE LONDON",
        title: "AFTER SHAVE CREAM COLOGNE LONDON",
        info: "Крем-одеколон после бритья Bandido со специальной формулой помогает свести к минимуму негативные последствия, а также оставляет ощущение свежести после бритья.",
        category: "Крем после бритья",
        type: "Крем после бритья",
        size: "350 мл",
        finalPrice: 540,
        originalPrice: 1350,
        optPrice: 600,
        quantity: 24,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 122,
        images: [
            "/images/products/oilForBeardGreen.png",
            "/images/products/oilForBeardGreen.png",
            "/images/products/oilForBeardGreen.png",
        ],
        brand: "AFTER SHAVE COLOGNE SYDNEY",
        title: "AFTER SHAVE COLOGNE SYDNEY",
        info: "Побалуйте свою кожу с помощью нашей линейки Bandido After Shave Cologne. Он дает ощущение чистоты и свежести в течение длительного времени. Привлекательный аромат, полный мужественности.",
        category: "Лосьон после бритья",
        type: "Лосьон после бритья",
        size: "150 мл",
        finalPrice: 450,
        originalPrice: 1100,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 123,
        images: [
            "/images/products/oilForBeardRed.png",
            "/images/products/oilForBeardRed.png",
            "/images/products/oilForBeardRed.png",
        ],
        brand: "AFTER SHAVE COLOGNE SICILIA",
        title: "AFTER SHAVE COLOGNE SICILIA",
        info: "Побалуйте свою кожу с помощью нашей линейки Bandido After Shave Cologne. Он дает ощущение чистоты и свежести в течение длительного времени. Привлекательный аромат, полный мужественности.",
        category: "Лосьон после бритья",
        type: "Лосьон после бритья",
        size: "150 мл",
        finalPrice: 450,
        originalPrice: 1100,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 124,
        images: [
            "/images/products/oilForBeardYellow.png",
            "/images/products/oilForBeardYellow.png",
            "/images/products/oilForBeardYellow.png",
        ],
        brand: "AFTER SHAVE COLOGNE LAS VEGAS",
        title: "AFTER SHAVE COLOGNE LAS VEGAS",
        info: "Побалуйте свою кожу с помощью нашей линейки Bandido After Shave Cologne. Он дает ощущение чистоты и свежести в течение длительного времени. Привлекательный аромат, полный мужественности.",
        category: "Лосьон после бритья",
        type: "Лосьон после бритья",
        size: "150 мл",
        finalPrice: 450,
        originalPrice: 1100,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 125,
        tag: "hero-product",
        tagline: "Лосьон после бритья",
        heroImage: "/images/products/oilForBeardViolet.png",
        images: [
            "/images/products/oilForBeardViolet.png",
            "/images/products/oilForBeardViolet.png",
            "/images/products/oilForBeardViolet.png",
        ],
        brand: "AFTER SHAVE COLOGNE MOSCOW",
        title: "AFTER SHAVE COLOGNE MOSCOW",
        info: "Побалуйте свою кожу с помощью нашей линейки Bandido After Shave Cologne. Он дает ощущение чистоты и свежести в течение длительного времени. Привлекательный аромат, полный мужественности.",
        category: "Лосьон после бритья",
        type: "Лосьон после бритья",
        size: "150 мл",
        finalPrice: 450,
        originalPrice: 1100,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 126,
        images: [
            "/images/products/oilForBeardBlue.png",
            "/images/products/oilForBeardBlue.png",
            "/images/products/oilForBeardBlue.png",
        ],
        brand: "AFTER SHAVE COLOGNE BERLIN",
        title: "AFTER SHAVE COLOGNE BERLIN",
        info: "Побалуйте свою кожу с помощью нашей линейки Bandido After Shave Cologne. Он дает ощущение чистоты и свежести в течение длительного времени. Привлекательный аромат, полный мужественности.",
        category: "Лосьон после бритья",
        type: "Лосьон после бритья",
        size: "150 мл",
        finalPrice: 450,
        originalPrice: 1100,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 127,
        images: [
            "/images/products/oilForBeardLemon.png",
            "/images/products/oilForBeardLemon.png",
            "/images/products/oilForBeardLemon.png",
        ],
        brand: "AFTER SHAVE COLOGNE LEMON",
        title: "AFTER SHAVE COLOGNE LEMON",
        info: "Побалуйте свою кожу с помощью нашей линейки Bandido After Shave Cologne. Он дает ощущение чистоты и свежести в течение длительного времени. Привлекательный аромат, полный мужественности.",
        category: "Лосьон после бритья",
        type: "Лосьон после бритья",
        size: "150 мл",
        finalPrice: 450,
        originalPrice: 1100,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 128,
        // tag: "hero-product",
        // tagline: "Масло для бороды",
        // heroImage: "/images/products/BeardOilBlack.png",
        // images: [
        //     "/images/products/black.png",
        // ],
        brand: "BEARD OIL BLACK",
        title: "BEARD OIL BLACK",
        info: "Масло для бороды BANDIDO Обеспечивает питание и увлажнение. Наше масло для бороды помогает смягчить волосы на лице, чтобы сделать их более управляемыми. В то же время предотвращает зуд и перхоть. ",
        category: "Средства для ухода за бородой",
        type: "Средства для ухода за бородой",
        size: "40 мл",
        finalPrice: 850,
        originalPrice: 2000,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 129,
        images: [
            "/images/products/BeardOilRoseGold.png",
            "/images/products/BeardOilRoseGold.png",
            "/images/products/BeardOilRoseGold.png",
        ],
        brand: "BEARD OIL ROSE GOLD",
        title: "BEARD OIL ROSE GOLD",
        info: "Масло для бороды BANDIDO Обеспечивает питание и увлажнение. Наше масло для бороды помогает смягчить волосы на лице, чтобы сделать их более управляемыми. В то же время предотвращает зуд и перхоть. ",
        category: "Средства для ухода за бородой",
        type: "Средства для ухода за бородой",
        size: "40 мл",
        finalPrice: 850,
        originalPrice: 2000,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 130,
        images: [
            "/images/products/BeardOilGold.png",
            "/images/products/BeardOilGold.png",
            "/images/products/BeardOilGold.png",
        ],
        brand: "BEARD OIL GOLD",
        title: "BEARD OIL GOLD",
        info: "Масло для бороды BANDIDO Обеспечивает питание и увлажнение. Наше масло для бороды помогает смягчить волосы на лице, чтобы сделать их более управляемыми. В то же время предотвращает зуд и перхоть. ",
        category: "Средства для ухода за бородой",
        type: "Средства для ухода за бородой",
        size: "40 мл",
        finalPrice: 850,
        originalPrice: 2000,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 131,
        images: [
            "/images/products/BeardOilSilver.png",
            "/images/products/BeardOilSilver.png",
            "/images/products/BeardOilSilver.png",
        ],
        brand: "BEARD OIL SILVER",
        title: "BEARD OIL SILVER",
        info: "Масло для бороды BANDIDO Обеспечивает питание и увлажнение. Наше масло для бороды помогает смягчить волосы на лице, чтобы сделать их более управляемыми. В то же время предотвращает зуд и перхоть. ",
        category: "Средства для ухода за бородой",
        type: "Средства для ухода за бородой",
        size: "40 мл",
        finalPrice: 850,
        originalPrice: 2000,
        optPrice: 400,
        quantity: 192,
        ratings: 500,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 132,
        images: [
            "/images/products/cremBeard.png",
            "/images/products/cremBeard.png",
            "/images/products/cremBeard.png",
        ],
        tag: "hero-product",
        tagline: "Бальзам-стайлер Bandido Beard",
        heroImage: "/images/products/cremBeard.png",
        brand: "BEARD BALM LIMITED EDITION",
        title: "BEARD BALM LIMITED EDITION",
        info: "Бальзам-стайлер Bandido Beard, мягкий бальзам для укладки бороды. Специально разработан для всех типов бород, помогает устранить перхоть и  зуд, увлажняет  кожу под бородой не закупоривая поры.",
        category: "Средства для ухода за бородой",
        type: "Средства для ухода за бородой",
        size: "40 мл",
        finalPrice: 850,
        originalPrice: 2000,
        optPrice: 410,
        quantity: 12,
        ratings: 1144,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 133,
        tag: "featured-product",
        images: [
            "/images/products/cremBeard2.png",
            "/images/products/cremBeard2.png",
            "/images/products/cremBeard2.png",
        ],
        brand: "BEARD BALM ARGAN OIL",
        title: "BEARD BALM ARGAN OIL",
        info: "Бальзам-стайлер Bandido Beard Argan, мягкий бальзам для укладки бороды. Специально разработан для всех типов бород, помогает устранить перхоть и  зуд, увлажняет  кожу под бородой не закупоривая поры.",
        category: "Средства для ухода за бородой",
        type: "Средства для ухода за бородой",
        size: "40 мл",
        finalPrice: 850,
        originalPrice: 2000,
        optPrice: 410,
        quantity: 12,
        ratings: 1340,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 134,
        images: [
            "/images/products/beardShampoo.png",
            "/images/products/beardShampoo.png",
            "/images/products/beardShampoo.png",
        ],
        brand: "BEARD SHAMPOO",
        title: "BEARD SHAMPOO",
        info: "Этот безсульфатный шампунь  специально разработан для бороды." +
            "Нежный и увлажняет бороду, сохраняя ее свежей и чистой, мягкой, блестящей и здоровой.",
        category: "Средства для ухода за бородой",
        type: "Средства для ухода за бородой",
        size: "250 мл",
        finalPrice: 490,
        originalPrice: 1200,
        optPrice: 400,
        quantity: 24,
        path: "/product-details/",
    },
    {
        id: 135,
        tag: "hero-product",
        tagline: "Шампунь для волос",
        heroImage: "/images/products/shampooKeratin.png",
        images: [
            "/images/products/shampooKeratin.png",
            "/images/products/shampooKeratin.png",
            "/images/products/shampooKeratin.png",
        ],
        brand: "KERATIN SHAMPOO ",
        title: "KERATIN SHAMPOO ",
        info: "Интенсивно восстанавливающий уход за поврежденными волосами. Благодаря кератиновому маслу он восстанавливает, и разглаживает поврежденные волосы. Мягкое очищение кожи головы, глубоко питает, обеспечивает гламурный блеск.",
        category: "Шампунь",
        type: "Шампунь",
        size: "350 мл",
        finalPrice: 350,
        originalPrice: 900,
        optPrice: 300,
        quantity: 24,
        path: "/product-details/",
    },
    {
        id: 136,
        images: [
            "/images/products/shampooArgan.png",
            "/images/products/shampooArgan.png",
            "/images/products/shampooArgan.png",
        ],
        brand: "ARGAN SHAMPOO",
        title: "ARGAN SHAMPOO",
        info: "Cодержит марокканское аргановое масло холодного отжима, которое хорошо\n" +
            "подходит для очищения сухих, тусклых и поврежденных волос",
        category: "Шампунь",
        type: "Шампунь",
        size: "350 мл",
        finalPrice: 350,
        originalPrice: 880,
        optPrice: 300,
        quantity: 24,
        path: "/product-details/",
    },
    {
        id: 137,
        images: [
            "/images/products/shampooWhite.png",
            "/images/products/shampooWhite.png",
            "/images/products/shampooWhite.png",
        ],
        brand: "BLACK GARLIC SHAMPOO",
        title: "BLACK GARLIC SHAMPOO",
        info: "Шампунь для кудрявых волос, содержит экстракт черного чеснока, питает и защищает пряди волос от окислительного повреждения. Он эффективен против выпадения волос,не имеет запаха",
        category: "Шампунь",
        type: "Шампунь",
        size: "350 мл",
        finalPrice: 350,
        originalPrice: 880,
        optPrice: 300,
        quantity: 24,
        path: "/product-details/",

    },
    {
        id: 138,
        images: [
            "/images/products/DandruffShampoo.png",
            "/images/products/DandruffShampoo.png",
            "/images/products/DandruffShampoo.png",
        ],
        brand: "DANDRUFF CONTROL SHAMPOO",
        title: "DANDRUFF CONTROL SHAMPOO",
        info: "Шампунь для волос от перхоти, мягко очищает волосы и кожу головы, защищая окрашенные волосы.Благодаря ментолу он не только обеспечивает глубокое освежение, но и помогает коже головы дышать.",
        category: "Шампунь",
        type: "Шампунь",
        size: "350 мл",
        finalPrice: 350,
        originalPrice: 880,
        optPrice: 300,
        quantity: 24,
        path: "/product-details/",
    },
    {
        id: 139,
        images: [
            "/images/products/hairTonic.png",
            "/images/products/hairTonic.png",
            "/images/products/hairTonic.png",
        ],
        brand: "HAIR TONIC",
        title: "HAIR TONIC",
        info: "Тоник для волос освежающий с ментолом. Он делает волосы более свежими, привлекательными и здоровыми. Помогает замедлить выпадение волос и предотвратить образование перхоти. ",
        category: "Тоник для волос",
        type: "Тоник для волос",
        size: "250 мл",
        finalPrice: 390,
        originalPrice: 950,
        optPrice: 300,
        quantity: 24,
        path: "/product-details/",
    },
    {
        id: 140,
        images: [
            "/images/products/toniccGrooming.png",
            "/images/products/toniccGrooming.png",
            "/images/products/toniccGrooming.png",
        ],
        brand: "TONIC GROOMING",
        title: "TONIC GROOMING",
        info: "Тоник для волос освежающий с ментолом. Он делает волосы более свежими, привлекательными и здоровыми. Помогает замедлить выпадение волос и предотвратить образование перхоти. ",
        category: "Тоник для волос",
        type: "Тоник для волос",
        size: "250 мл",
        finalPrice: 390,
        originalPrice: 950,
        optPrice: 300,
        quantity: 24,
        path: "/product-details/",
    },
    {
        id: 141,
        images: [
            "/images/products/SeaSalt.jpg",
            "/images/products/SeaSalt.jpg",
            "/images/products/SeaSalt.jpg",
        ],
        brand: "SEA SALT",
        title: "SEA SALT",
        info: "Текстурирующий спрей с морской солью - идеальная находка для тех, кто мечтает о непринужденных объемных укладках. Специально разработан для стайлинга в пляжном стиле.",
        category: "Средства для укладки волос",
        type: "Средства для укладки волос",
        size: "250 мл",
        finalPrice: 390,
        originalPrice: 950,
        optPrice: 300,
        quantity: 24,
        path: "/product-details/",
    },
    {
        id: 142,
        images: [
            "/images/products/barberPowder.png",
            "/images/products/barberPowder.png",
            "/images/products/barberPowder.png",
        ],
        brand: "BARBERSHOP CLASSIC",
        title: "BARBERSHOP CLASSIC",
        info: "Пудра BARBERSHOP CLASSIC не только успокаивают красную, раздраженную кожу, но и помогают остановить повторение проблемы, устраняет лишнюю влагу, естественно уменьшает раздражение и воспаление кожи",
        category: "Средства для ухода за бородой",
        type: "Средства для ухода за бородой",
        size: "250 мл",
        finalPrice: 530,
        originalPrice: 950,
        optPrice: 300,
        quantity: 24,
        path: "/product-details/",
    },
];

export default productsData;