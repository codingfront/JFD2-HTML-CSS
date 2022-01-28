let movies = [

    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_105664_22247-m.jpg",
        rate:"100%",
        title:"  نیسان آبی",
        season:"1",
        episode:"14",
        genre:"خانوادگی-کمدی"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_105819_21904-m.jpg",
        rate:"78%",
        title:"پوست",
        season:"",
        episode:"",
        genre:"خانوادگی-اجتماعی"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_106324_22443-m.jpg",
        rate:"72%",
        title:"وارنهایت",
        season:"",
        episode:"",
        genre:"اکشن-هیجان انگیز"
        },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_38482_22246-m.jpg",
        rate:"92%",
        title:"پایگاه مرزی",
        season:"1",
        episode:"1",
        genre:"اکشن-علمی تخیلی"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_105658_21803-m.jpg",
        rate:"97%",
        title:"جوکر",
        season:"2",
        episode:"4",
        genre:"کمدی-خانوادگی"
        },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_106359_22502-m.jpg",
        rate:"82%",
        title:"خدمتکار",
        season:"3",
        episode:"1",
        genre:"وحشتناک-هیجان انگیز"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_92943_19151-m.jpg",
        rate:"86%",
        title:"بالا را نگاه کن",
        season:"",
        episode:"",
        genre:"خانوادگی-کمدی"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_105665_22421-m.jpg",
        rate:"96%",
        title:"ممیزی",
        season:"2",
        episode:"73",
        genre:"تاک شو"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_93566_20830-m.jpg",
        rate:"100%",
        title:"شکارچیان روح-افترلایف",
        season:"1",
        episode:"5",
        genre:"خانوادگی-اجتماعی"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_104682_20287-m.jpg",
        rate:"94%",
        title:"بیستمین سالگرد هری پاتری:بازگشت به هاگوارتز",
        season:"6",
        episode:"1",
        genre:"مستند-اجتماعی"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_rel_10945_999-m.jpg",
        rate:"97%",
        title:"ترانسیلوانیا 4 : ترانسفورمانیا",
        season:"4",
        episode:"2",
        genre:"انیمیشن-ماجراجویی"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_94858_20878-m.jpg",
        rate:"99%",
        title:"آواز 2",
        season:"1",
        episode:"2",
        genre:"انیمیشن-ماجراجویی"
    },
    {
        image:"https://static.cdn.asset.filimo.com/flmt/mov_103626_19490-m.jpg",
        rate:"94%",
        title:"ماجراهای پیل",
        season:"",
        episode:"",
        genre:"انیمیشن-ماجراجویی"
    },       
]
function renderMovies(){
    let output = "<ul>";
    for(let i=0; i< movies.length; i++) {
        console.log(movies.length)
        output += "<li>" +movies[i].genre+ "</li>"
    }
    output += "</ul>";
    document.getElementById("list").innerHTML = output;
}
renderMovies()

