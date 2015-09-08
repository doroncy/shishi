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
        description: "טרטר טונה אדומה מתובלת היטב עם כרוב אדום, מלפפון, ג'ינג'ר כבוש ועשבי תיבול (כולל כוסברה), צ'יפס בטטה, שומשום שחור. רוטב איולי וואסבי"
      },
      {
        title: "Spicy Queen Salmon",
        type: MenuItemsTypes.FISH,
        description: "קונפי של סלמון בוויניגרט מתובל עם גזר, סלק, צ'ילי אדום, עשבי תיבול (כולל כוסברה), מלפפון פיקנטי, מנגו, חסה ובוטנים. רוטב מיסו-מנגו-ג'ינג'ר"
      },
      {
        title: "King Salmon",
        type: MenuItemsTypes.FISH,
        description: "טרטר סלמון עם תפוחי עץ, מלפפון, סלק, שאלוט פריכים, חסה ושקדים קלויים רוטב צ'ימיצ'ורי אסייתי + רוטב shi-shi"
      },
      {
        title: "Shrimp Shovav",
        type: MenuItemsTypes.SHRIMP,
        description: "שרימפס בציפוי פנקו עם מלפפון פיקנטי ומנגו, גזר, תפוח עץ, בצל ירוק, חסה ושקדים קלויים רוטב צ'ימיצ'ורי אסיאתי + איולי מתובל + רוטב shi-shi"
      },
      {
        title: "Lobster Party",
        type: MenuItemsTypes.SHRIMP,
        description: "נתחי לובסטר עם תפוח עץ, בצל ירוק, מנגו, מלפפון, צנוניות, ארוגולה וחסה רוטב איולי מתובל"
      },
      {
        title: "Open Cod",
        type: MenuItemsTypes.FISH,
        description: "דג קוד לבן בציפוי פאנקו עם מלפפון, צנוניות, גזר, בצל ירוק, עשבי תיבול (כולל כוסברה), כרוב אדום, פקאן מסוכר רוטב איולי וואסבי + רוטב shi-shi"
      },
      {
        title: "Crispy Tofu",
        type: MenuItemsTypes.VEGGIE,
        description: "טופו פריך מושרה בוויניגרט צ'יפוֹ ְטלה עם בטטה טמפורה, מלפפון פיקנטי עם מנגו, חסה, פטריות שיטא ֵקה, שאלוט פריכים ובוטנים. רוטב איולי קארי"
      },
      {
        title: "Crispy Chick",
        type: MenuItemsTypes.CHICKEN,
        description: "חזה עוף פריך בציפוי פאנקו עם קולרבי מוחמץ, כרוב סגול, חסה, בצל ירוק וצ'יפס בטטה רוטב איולי קארי"
      },
      {
        title: "Spicy Chick Katzuz",
        type: MenuItemsTypes.CHICKEN,
        description: "עוף קצוץ ומתובל עם מלפפון, אבוקדו, סלק, חסה, בזיליקום, עירית, שאלוט פריכים איולי וואסבי + רוטב shi-shi"
      },
      {
        title: "Joe Okada Chicken",
        type: MenuItemsTypes.CHICKEN,
        description: "צ'אפטי קלוי עם פרוסות עוף מאודות בציר אסיאתי עם גבינת פרמזן, כרוב סגול בצל ירוק ושאלוט פריכים רוטב איולי וואסבי + רוטב צ'ימיצ'ורי אסיאתי"
      },
      {
        title: "Joe Okada Salmon",
        type: MenuItemsTypes.FISH,
        description: "צ'אפטי קלוי עם סשימי סלמון משוח בוויניגרט מתובל עם כרוב סגול, עירית, שומשום שחור רוטב איולי וואסבי + רוטב צ'ימיצ'וּרי אסיאתי"
      },
      {
        title: "Salad Bowl",
        type: MenuItemsTypes.BOWL,
        description: "סלט איטריות זכוכית משעועית עם חסה ועשבי תיבול, אדממה, מלפפון, מנגו ובוטנים (תוספת סשימי של סלמון / פרוסות חזה עוף בציר אסייתי / קוביות טופו פריכות)"
      }
    ];

    service.dessertsItems = [
      {
        title: "Chocolate",
        description: "מוס שוקולד חלב עם נוגט ושוקולד קראנצ'י"
      },
      {
        title: "Tropic",
        description: "שוקולד לבן במיסו קרם פסיפלורה ומנגו טרי"
      }
    ];

    return service;
  }

})();
