var x = {
    status: "ok",
    totalResults: 5563,
    articles: [
        {
            source: { id: "der-tagesspiegel", name: "Der Tagesspiegel" },
            author: "Der Tagesspiegel",
            title:
                "Innovationsstrategie: KI und Verteidigung: Berlin-Brandenburg will stärker werden",
            description:
                "Die Hauptstadtregion mit den Ländern Berlin und Brandenburg will mehr an einem Strang ziehen, um im europaweiten Wettbewerb vorn zu sein - vor allem bei neuen Technologien.",
            url: "https://www.tagesspiegel.de/berlin/innovationsstrategie-ki-und-verteidigung-berlin-brandenburg-will-starker-werden-15838562.html",
            urlToImage:
                "https://www.tagesspiegel.de/images/15838561/alternates/BASE_16_9_W1400/1784043972000/vorstellung-der-innovationsstrategie-in-potsdam.jpeg",
            publishedAt: "2026-07-14T15:46:12Z",
            content:
                "Berlin und Brandenburg wollen bei Zukunftsfeldern wie KI, Mobilität und Verteidigung europaweit an die Spitze. Der Berliner Senat und die Brandenburger Landesregierung beschlossen die Innovationsstra… [+2340 chars]",
        },
        {
            source: { id: "die-zeit", name: "Die Zeit" },
            author: "DIE ZEIT: News -",
            title:
                "Innovationsstrategie: KI und Verteidigung: Berlin-Brandenburg will stärker werden",
            description:
                "Hier finden Sie Informationen zu dem Thema „Innovationsstrategie“. Lesen Sie jetzt „KI und Verteidigung: Berlin-Brandenburg will stärker werden“.",
            url: "https://www.zeit.de/news/2026-07/14/ki-und-verteidigung-berlin-brandenburg-will-staerker-werden",
            urlToImage:
                "https://img.zeit.de/news/2026-07/14/ki-und-verteidigung-berlin-brandenburg-will-staerker-werden-image-group/wide__1300x731",
            publishedAt: "2026-07-14T15:45:14Z",
            content:
                "Berlin und Brandenburg wollen bei Zukunftsfeldern wie KI, Mobilität und Verteidigung europaweit an die Spitze. Der Berliner Senat und die Brandenburger Landesregierung beschlossen die Innovationsstra… [+2292 chars]",
        },
        {
            source: { id: null, name: "Yahoo Entertainment" },
            author: "財訊快報",
            title: "通膨數據降溫、美股反彈，SK海力士ADR飆27.29%，台指期夜盤漲225點",
            description:
                "【財訊快報／黃俊超】美股道瓊7/14上漲0.02%、S&P500上漲0.38%、Nasdaq上漲0.9%、費城半導體大漲2.54%。個股方面，NVIDIA上漲4.06%、微軟下跌1.55%、蘋果下跌0.77%、SpaceX下跌2.2%、Amazon上漲0.07%、Google上漲1.9%、Meta上漲0.66%、Broadcom上漲1.32%、Tesla上漲0.36%、AMD上漲2.57%、ARM大跌5.96%、高通下跌3.2%、美光上漲4.92%、Intel上漲4.5%、台積電ADR下跌0.28%、聯電ADR上…",
            url: "https://tw.stock.yahoo.com/news/%E9%80%9A%E8%86%A8%E6%95%B8%E6%93%9A%E9%99%8D%E6%BA%AB-%E7%BE%8E%E8%82%A1%E5%8F%8D%E5%BD%88-sk%E6%B5%B7%E5%8A%9B%E5%A3%ABadr%E9%A3%8627-29-%E5%8F%B0%E6%8C%87%E6%9C%9F%E5%A4%9C%E7%9B%A4%E6%BC%B2225%E9%BB%9E-233618656.html",
            urlToImage: null,
            publishedAt: "2026-07-14T15:36:18Z",
            content:
                "7/140.02%S&amp;P5000.38%Nasdaq0.9%2.54%NVIDIA4.06%1.55%0.77%SpaceX2.2%Amazon0.07%Google1.9%Meta0.66%Broadcom1.32%Tesla0.36%AMD2.57%ARM5.96%3.2%4.92%Intel4.5%ADR0.28%ADR1.62%ADR0.49%225SKADR27.29%6CPI… [+212 chars]",
        },
        {
            source: { id: null, name: "Wccftech" },
            author: "Ramish Zafar",
            title:
                "Samsung Reportedly Lands Anthropic as Foundry Customer, Looking to Reverse its Chip Deficit With 2nm AI Orders",
            description:
                "With the AI race in full swing, Samsung Foundry has reportedly secured a contract to manufacture Anthropic's AI chips. Anthropic has slowly shaped up to be one of the most important players in the AI industry courtesy of its advanced AI models. As the AI semi…",
            url: "https://wccftech.com/samsung-reportedly-lands-anthropic-as-foundry-customer-looking-to-reverse-its-chip-deficit-with-2nm-ai-orders/",
            urlToImage:
                "https://cdn.wccftech.com/wp-content/uploads/2026/07/Anthropic.jpg",
            publishedAt: "2026-07-14T15:24:25Z",
            content:
                "With the AI race in full swing, Samsung Foundry has reportedly secured a contract to manufacture Anthropic's AI chips. Anthropic has slowly shaped up to be one of the most important players in the AI… [+2369 chars]",
        }

    ],
};


var temp = [];

x["articles"].forEach((elm) => {

    temp.push({
        title: elm.title,
        author: elm.author,
        description: elm.description
    })

})
console.log(temp);
