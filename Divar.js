let information = [
    {
        image:"	https://s100.divarcdn.com/static/thumbnails/1643401423/QYxrjDgj.webp",
        title: "پژو 206 تیپ 2",
        time: "لحظاتی پیش",
        location: "سعادت آباد",
        gategory:"خودرو"
    },
    {
        image:"	https://s100.divarcdn.com/static/thumbnails/1643401820/AYiGSeSG.webp",
        title: "آپارتمان 90 متری پردیس ",
        time: "2 ساعت پیش",
        location: "پردیس",
        gategory:"آپارتمان"
    },
    {
        image:"	https://s100.divarcdn.com/static/thumbnails/1643401807/QYfDResS.webp",
        title: "گوشی آیفون ایکس  ",
        time: "6 ساعت پیش",
        location: "هروی",
        gategory:"گوشی"
    },
    {
        image:"	https://s100.divarcdn.com/static/thumbnails/1643401879/QY0DSrsl.webp",
        title: " لنو لب تاپ",
        time: "دیروز",
        location: "کرج",
        gategory:"لب تاپ"
    },
    {
        image:"	https://s100.divarcdn.com/static/thumbnails/1643401423/QYxrjDgj.webp",
        title: "پژو 206 تیپ 2",
        time: "لحظاتی پیش",
        location: "سعادت آباد",
        gategory:"خودرو"
    },
    {
        image:"	https://s100.divarcdn.com/static/thumbnails/1643401820/AYiGSeSG.webp",
        title: "آپارتمان 90 متری پردیس ",
        time: "2 ساعت پیش",
        location: "پردیس",
        gategory:"آپارتمان"
    },
    {
        image:"	https://s100.divarcdn.com/static/thumbnails/1643401807/QYfDResS.webp",
        title: "گوشی آیفون ایکس  ",
        time: "6 ساعت پیش",
        location: "هروی",
        gategory:"گوشی"
    },
    {
        image:"https://s100.divarcdn.com/static/thumbnails/1643401879/QY0DSrsl.webp",
        title: " لنو لب تاپ",
        time: "دیروز",
        location: "کرج",
        gategory:"لب تاپ"
    }
]
function listOfItmes(){
    let output = "<ul>";
    for(let i = 0 ; i<information.length; i++){
        output += "<li>"+information[i].image+"</li>"
    }
    output+= "</ul>";
    document.getElementById("list").innerHTML = output
}
listOfItmes()