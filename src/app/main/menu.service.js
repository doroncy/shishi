(function() {
  'use strict';

  angular
    .module('shishi')
    .factory('MenuService', MenuService);

  /** @ngInject */
  function MenuService(MenuItemsTypes) {
    var service = {};

    service.mainItems = [
      {
        title: "Spicy Red Tuna",
        type: MenuItemsTypes.FISH,
        description: "טרטר טונה אדומה מתובלת היטב עם כרוב אדום, מלפפון ועשבי תיבול (כולל כוסברה), צ'יפס בטטה, שומשום שחור. רוטב איולי וואסבי"
      },
      {
        title: "Spicy Queen Salmon",
        type: MenuItemsTypes.FISH,
        description: "קונפי של סלמון בוויניגרט מתובל עם גזר, סלק, עשבי תיבול (כולל כוסברה), מלפפון פיקנטי, אננס, חסה ובוטנים. רוטב צ'ימצ'ורי אסייתי + ספייסי מיונז"
      },
      {
        title: "King Salmon",
        type: MenuItemsTypes.FISH,
        description: "טרטר סלמון עם תפוחי עץ, אבוקדו, מלפפון, סלק, שאלוט פריכים, חסה ושקדים קלויים רוטב צ'ימיצ'ורי אסייתי + רוטב shi-shi"
      },
      {
        title: "Shrimp Shovav",
        type: MenuItemsTypes.SHRIMP,
        description: "שרימפס בציפוי פנקו עם מלפפון פיקנטי ואננס, בטטה טמפורה, גזר, תפוח עץ, בצל ירוק, חסה ושקדים קלויים רוטב צ'ימיצ'ורי אסיאתי + איולי מתובל + רוטב shi-shi"
      },
      {
        title: "Shi-Shi Delicious Cruvit",
        type: MenuItemsTypes.VEGGIE,
        description: "כרובית מטוגנת, צ'יפס בטטה, סלק, בזיליקום, בצל ירוק, חסה ושקדים קרם כתומים-קארי-קוקוס"
      },
      {
        title: "Open Cod",
        type: MenuItemsTypes.FISH,
        description: "דג קוד לבן בציפוי פאנקו עם מלפפון, גזר, בצל ירוק, עשבי תיבול (כולל כוסברה), כרוב אדום, פקאן מסוכר רוטב איולי וואסבי + רוטב shi-shi"
      },
      {
        title: "Crispy Tofu",
        type: MenuItemsTypes.VEGGIE,
        description: "טופו פריך מושרה בוויניגרט צ'יפוֹ ְטלה עם בטטה טמפורה, מלפפון פיקנטי עם אננס, חסה, פטריות שיטא ֵקה, שאלוט פריכים ובוטנים. רוטב איולי קארי/טבעוני"
      },
      {
        title: "Crispy Chick",
        type: MenuItemsTypes.CHICKEN,
        description: "חזה עוף פריך בציפוי פאנקו, כרוב סגול, חסה, בצל ירוק וצ'יפס בטטה רוטב איולי קארי וספייסי מיונז"
      },
      {
        title: "Spicy Chick Katzuz",
        type: MenuItemsTypes.CHICKEN,
        description: "עוף קצוץ ומתובל עם מלפפון, אבוקדו, סלק, חסה, בזיליקום, עירית, שאלוט פריכים איולי וואסבי + רוטב shi-shi"
      },
      {
        title: "Shi-Shi Moo",
        type: MenuItemsTypes.CHICKEN,
        description: "פרוסות בקר דקיקות מושרות בצ'אטני (ריבה הודית) עם פלפלים קלויים, בצל מטוגן, בצל סגול, גזר, חסה, ספייסי מיונז וקצת רוטב אסייתי חריף ומיוחד."
      },
      {
        title: "Shi-Shi Royal",
        type: MenuItemsTypes.SHRIMP,
        description: "שרימפס פריך בציפוי פנקו, טרטר סלמון, בטטה טמפורה, אבוקדו, פטריות שיטאקה, חסה, ספייסי מיונז, טריאקי וגרידת לימון."
      }
    ];

    service.dessertsItems = [
      {
        title: "Chocolate",
        description: "מוס שוקולד חלב עם נוגט ושוקולד קראנצ'י"
      },
      {
        title: "Tropic",
        description: "שוקולד לבן במיסו קרם פסיפלורה ותותים טריים"
      }
    ];

    service.coldBowl = [
      {
        title: "Salad Cold Bowl",
        type: MenuItemsTypes.BOWL,
        description: "סלט איטריות זכוכית משעועית עם חסה ועשבי תיבול, מלפפון, פרי העונה ובוטנים )תוספת סשימי של סלמון / פרוסות חזה עוף בציר אסייתי / קוביות טופו פריכות("
      }
    ];

    return service;
  }

})();
