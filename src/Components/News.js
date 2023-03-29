import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Amir Tal, Richard Greene",
        "title": "Netanyahu fires minister who'd called for halt to controversial Israeli judicial overhaul - CNN",
        "description": "Israeli Prime Minister Benjamin Netanyahu fired Defense Minister Yoav Gallant after he dramatically broke ranks and called for a pause in the government's controversial drive to overhaul Israel's court system.",
        "url": "https://www.cnn.com/2023/03/26/middleeast/israel-judicial-overhaul-legislation-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230326041447-yoav-gallant-032623.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-03-26T20:19:00Z",
        "content": "Israeli Prime Minister Benjamin Netanyahu fired Defense Minister Yoav Gallant after he dramatically broke ranks and called for a pause in the governments controversial drive to overhaul Israels court… [+4728 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Cindy Boren, Des Bieler, Sally Jenkins, Emily Giambalvo",
        "title": "March Madness live updates: Creighton leads San Diego State as Elite Eight continue - The Washington Post",
        "description": "March Madness continues Sunday with region finals in the NCAA men’s and women’s tournaments. Follow along for live updates and highlights.",
        "url": "https://www.washingtonpost.com/sports/2023/03/26/march-madness-games-scores-live-updates/",
        "urlToImage": "://httpswww.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HOX2B7B3NCCQJBCHFP6Z5HOOLE_size-normalized.jpg&w=1440",
        "publishedAt": "2023-03-26T19:07:30Z",
        "content": "March Madness continues Sunday, when Final Four berths are at stake in both the mens and womens NCAA tournaments. In the first mens game of the day, No. 5 seed San Diego State beat Creighton in the S… [+287 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "More storms feared after Mississippi tornado - BBC",
        "description": "Friday night's tornado in the southern US killed 26 people and has displaced hundreds more.",
        "url": "https://www.bbc.com/news/world-us-canada-65082746",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11AC1/production/_129158327_rollingfork1.png",
        "publishedAt": "2023-03-26T19:04:50Z",
        "content": "Media caption, Watch: Rolling Fork resident Jack Burkhalter says the whole of his local high street is \"all gone\"\r\nMore severe weather could be on its way to the US state of Mississippi following the… [+3762 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Post"
        },
        "author": "Christopher Scarglato",
        "title": "Kamala Harris greeted by kids in Ghana as she arrives for weeklong Africa trip - New York Post ",
        "description": "Vice President Kamala Harris was greeted by schoolchildren, dancers and drummers as she arrived in Ghana for the start of a weeklong visit to Africa.",
        "url": "https://nypost.com/2023/03/26/kamala-harris-arrives-for-weeklong-trip-in-africa/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/newspress-collage-26301872-1679857011923.jpg?quality=75&strip=all&1679842699&w=1024",
        "publishedAt": "2023-03-26T18:52:00Z",
        "content": "Vice President Kamala Harris was greeted by schoolchildren, dancers and drummers as she arrived Sunday in Ghana for the start of a weeklong visit to Africa intended to deepen U.S. relationships amid … [+4864 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WFMZ Allentown"
        },
        "author": "WFMZ-TV",
        "title": "R.M. Palmer employees to meet at local diner and release balloons for victims of explosion - 69News WFMZ-TV",
        "description": "American Diner is also donating all of its profits today to the West Reading Fire Department.",
        "url": "https://www.wfmz.com/news/area/berks/r-m-palmer-employees-to-meet-at-local-diner-and-release-balloons-for-victims-of/article_e1004f82-cc04-11ed-b633-fb01f1424176.html",
        "urlToImage": "https://bloximages.newyork1.vip.townnews.com/wfmz.com/content/tncms/assets/v3/editorial/f/bb/fbb58f40-cb78-11ed-a86a-978b737bca85/641fa5d6c9f92.image.jpg?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize",
        "publishedAt": "2023-03-26T18:34:00Z",
        "content": "WEST READING, Pa. - A group of R.M. Palmer employees will meet at 4 p.m. at the American Diner on Penn Ave, West Reading, and then walk to the site of the explosion. They plan to set off balloons for… [+598 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deadline"
        },
        "author": "Anthony D'Alessandro",
        "title": "Lionsgate’s Joe Drake Wants To See Keanu Reeves In More ‘John Wick’ Pics After ‘Chapter 4’ Franchise Record B.O. Debut: “We’re Not Ready To Say Goodbye” - Deadline",
        "description": "Lionsgate Motion Picture Group Chair Joe Drake had much to celebrate this morning. The studio reaped a record global and domestic box office debut for the John Wick franchise, with John Wick: Chapt…",
        "url": "https://deadline.com/2023/03/keanu-reeves-john-wick-sequels-joe-drake-lionsgate-1235310320/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2023/03/GettyImages-1474994871-e1679850105970.jpg?w=1024",
        "publishedAt": "2023-03-26T18:17:00Z",
        "content": "Lionsgate Motion Picture Group Chair Joe Drake had much to celebrate this morning. The studio reaped a record global and domestic box office debut for the John Wick franchise, with John Wick: Chapter… [+3909 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Pilar Arias",
        "title": "Second-floor collapse at Pennsylvania off-campus party injures 12: police - Fox News",
        "description": "A total of 12 people were hurt Saturday night during an off-campus Indiana University of Pennsylvania party when a second floor collapsed, police said.",
        "url": "https://www.foxnews.com/us/second-floor-collapse-pennsylvania-off-campus-party-injures-12-police",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/Indiana-University-Pennsylvania-1.jpg",
        "publishedAt": "2023-03-26T17:34:00Z",
        "content": "Twelve people were hurt Saturday night after the second floor of a three-story apartment building collapsed during an off-campus Indiana University of Pennsylvania party, officials say.\r\nMembers of P… [+2037 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Daily Mail"
        },
        "author": "Caitlin Tilley",
        "title": "I'm a cardiologist. These are the seven foods I'll never eat - and why - Daily Mail",
        "description": "Dr Bhatt, a cardiologist at Mount Sinai in New York, said 'the best advice  in terms of a heart healthy diet, is a diet that is relatively low in calories'.",
        "url": "https://www.dailymail.co.uk/health/article-11887301/Im-cardiologist-seven-foods-Ill-never-eat-why.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/03/23/13/69031333-0-image-a-4_1679578521988.jpg",
        "publishedAt": "2023-03-26T17:06:57Z",
        "content": "Dr Deepak Bhatt, a top cardiologist at Mount Sinai, told DailyMail.com eating too much in general is bad for your cardiovascular system\r\nA top heart doctor has revealed the seven foods he never eats … [+9168 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hollywood Reporter"
        },
        "author": "Abbey White",
        "title": "Jonathan Majors’ ‘Be All You Can Be’ U.S. Army Ad Campaign Pulled Following Arrest - Hollywood Reporter",
        "description": "“Jonathan Majors is completely innocent and is provably the victim of an altercation with a woman he knows,” Major lawyer, Priya Chaudhry, said in a statement on Sunday.",
        "url": "https://www.hollywoodreporter.com/news/general-news/jonathan-majors-be-all-you-can-be-army-ads-pulled-arrest-1235360957/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/GettyImages-1469633667.jpg?w=1024",
        "publishedAt": "2023-03-26T17:04:36Z",
        "content": "The U.S. Army has pulled a Be All You Can Be ad campaign featuring Jonathan Majors following the actor’s arrest on Saturday. \r\n“The U.S. Army is aware of the arrest of Jonathan Majors and we are deep… [+2450 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sports Illustrated"
        },
        "author": "Joseph Salvador",
        "title": "South Carolina’s Dawn Staley Praised for Classy Move During Win Over UCLA - Sports Illustrated",
        "description": "It was a great sign of sportsmanship, and the opposition appreciated it.",
        "url": "https://www.si.com/college/2023/03/26/south-carolina-dawn-staley-praised-classy-move-during-win-over-ucla",
        "urlToImage": "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MTk2ODA2NjcwMTU0NzM2NzAy/dawn-staley.jpg",
        "publishedAt": "2023-03-26T16:40:10Z",
        "content": "South Carolina’s Dawn Staley is revered as one of the best coaches in college basketball, but Saturday she exemplified she’s one of the most honorable as well. \r\nStaley’s squad was blowing out UCLA, … [+1025 chars]"
    },
    {
        "source": {
            "id": "the-hill",
            "name": "The Hill"
        },
        "author": "Julia Mueller",
        "title": "Utah governor: New social media legislation not expected to be ‘foolproof’ - The Hill",
        "description": "Utah Gov. Spencer Cox (R) on Sunday said his state’s new restrictions on how minors can interact with social media aren’t expected to be “foolproof.” Cox signed two bills into law last week requiring social media companies to verify the age of users in the st…",
        "url": "https://thehill.com/homenews/sunday-talk-shows/3918848-utah-governor-new-social-media-legislation-not-expected-to-be-foolproof/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/03/641d205f2344f2.05943502.jpeg?w=1280",
        "publishedAt": "2023-03-26T16:29:00Z",
        "content": "Skip to content\r\nUtah Gov. Spencer Cox (R) on Sunday said his state’s new restrictions on how minors can interact with social media aren’t expected to be “foolproof.” \r\nCox signed two bills into law … [+2622 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Giantfreakinrobot.com"
        },
        "author": "Britta DeVore",
        "title": "Microsoft Wants To Restrict Artificial Intelligence, But Not To Protect You - Giant Freakin Robot",
        "description": "Artificial intelligence has all sorts of benefits and downsides, but it does not sound like Microsoft is interested in either.",
        "url": "https://www.giantfreakinrobot.com/tech/microsoft-restrict-artificial-intelligence.html",
        "urlToImage": "https://www.giantfreakinrobot.com/wp-content/uploads/2022/09/i-robot-.jpg",
        "publishedAt": "2023-03-26T16:11:36Z",
        "content": "Microsoft is reportedly taking measures to ensure AI Chatbots do not use Bing to source data.Microsoft Bing\r\nWith examples of artificial intelligence pulling off unthinkable tasks like not only passi… [+3089 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Slipper Still Fits"
        },
        "author": "Tuck_Clarry",
        "title": "10 Observations from Gonzaga’s loss to UConn - The Slipper Still Fits",
        "description": "The road stops here for the Zags",
        "url": "https://www.slipperstillfits.com/2023/3/26/23657202/10-observations-from-gonzagas-loss-to-uconn",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/h9ekgYrxWBYjZc8T-pXzP-1sMEs=/0x470:6564x3907/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24537343/usa_today_20321663.jpg",
        "publishedAt": "2023-03-26T16:00:00Z",
        "content": "Well, thats not what you wanted. In a game that could have used the console getting unplugged and reset, Gonzaga was absolutely dominated and trounced in the Elite Eight by the UConn Huskies, losing … [+4567 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Eonline.com"
        },
        "author": "Corinne Heller",
        "title": "Harry Styles and Emily Ratajkowski Seen Kissing in Tokyo - E! NEWS",
        "description": "Harry Styles and Emily Ratajkowski sparked romance rumors after they were spotted making out on a street in Tokyo. Find out more about their surprise PDA.",
        "url": "https://www.eonline.com/news/1369356/harry-styles-and-emily-ratajkowski-seen-kissing-in-tokyo",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2023226/rs_1200x1200-230326080559-1200-Emily-Ratajkowski-Harry-Styles.cm.32623.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2023-03-26T15:42:00Z",
        "content": "Love On Tour indeed.\r\nHarry Styles and Emily Ratajkowski sparked romance rumors after they seen making out in Tokyo, as seen in a video posted by the Daily Mail on March 25. That day, the pop star pe… [+689 chars]"
    },
    {
        "source": {
            "id": "the-hill",
            "name": "The Hill"
        },
        "author": "Julia Mueller",
        "title": "Trump lawyer: Former president’s attack on Bragg was ‘ill-advised’ - The Hill",
        "description": "Attorney Joe Tacopina, who represents former President Trump, on Sunday said Trump’s recent post attacking Manhattan District Attorney Alvin Bragg, who is investigating Trump’s alleged role in a hush money payment, was “ill-advised.” “Would you advise a clien…",
        "url": "https://thehill.com/homenews/sunday-talk-shows/3918776-trump-lawyer-former-presidents-attack-on-bragg-was-ill-advised/",
        "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/03/trumpdonalddaniels_AP_032223.jpg?w=1280",
        "publishedAt": "2023-03-26T15:27:00Z",
        "content": "Skip to content\r\nAttorney Joe Tacopina, who represents former President Trump, on Sunday said Trump’s recent post attacking Manhattan District Attorney Alvin Bragg, who is investigating Trump’s alleg… [+1291 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "MacRumors"
        },
        "author": "Hartley Charlton",
        "title": "Some Apple Employees Seriously Concerned About Mixed-Reality Headset as Announcement Draws Closer - MacRumors",
        "description": "Some Apple employees are concerned about the usefulness and price point of the company's upcoming mixed-reality headset, The New York Times...",
        "url": "https://www.macrumors.com/2023/03/26/apple-employees-concerned-about-headset/",
        "urlToImage": "https://images.macrumors.com/t/4lBUzjtFFejGLqIlSoA83H0LUw4=/1600x/article-new/2023/02/apple-mixed-reality-headset-concept-by-david-lewis-and-marcus-kane.jpg",
        "publishedAt": "2023-03-26T15:25:37Z",
        "content": "Some Apple employees are concerned about the usefulness and price point of the company's upcoming mixed-reality headset, The New York Times reports.\r\nInitial enthusiasm around the device at the compa… [+2624 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "WATCH: Kansas State coach Jerome Tang addresses FAU team after Wildcats' loss to Owls in Elite Eight - CBS Sports",
        "description": "Tang stopped by the FAU locker room to personally offer his congratulations and encouragement ahead of the Final Four",
        "url": "https://www.cbssports.com/college-basketball/news/watch-kansas-state-coach-jerome-tang-addresses-fau-team-after-wildcats-loss-to-owls-in-elite-eight/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/26/18168b35-2e91-4eb3-bc50-c2e0bf610d5d/thumbnail/1200x675/132eb4a024fa4d8ffacf7576566f77cb/gettyimages-1476357028-1.jpg",
        "publishedAt": "2023-03-26T15:23:24Z",
        "content": "After No. 9 seed Florida Atlantic's 79-76 win over No. 3 seed Kansas State in the Elite Eight on Saturday, the Owls received an unlikely visitor in their locker room. Amid the sting of defeat, K-Stat… [+1587 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "POLITICO.eu"
        },
        "author": "Bartosz Brzezinski",
        "title": "'Dangerous and irresponsible': NATO condemns Putin's nuclear-arms plan - POLITICO Europe",
        "description": "Defense alliance ‘closely monitoring’ Russian move to deploy tactical nuclear weapons in Belarus.",
        "url": "https://www.politico.eu/article/dangerous-and-irresponsible-nato-condemns-vladimir-putin-nuclear-arms-plan-ukraine-belarus-war/",
        "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/02/24/GettyImages-1242052307-scaled.jpg",
        "publishedAt": "2023-03-26T15:18:00Z",
        "content": "NATO criticized Moscow on Sunday for its dangerous and irresponsible nuclear rhetoric after Russian President Vladimir Putin announced he would deploy tactical nuclear weapons to Belarus.\r\nNATO is vi… [+3684 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Sam Ro",
        "title": "What's next for the U.S. economy? 'The extent of these effects is uncertain.' - Yahoo Finance",
        "description": "Turmoil in the banking system has made for a murkier outlook for the economy.",
        "url": "https://finance.yahoo.com/news/whats-next-for-the-us-economy-the-extent-of-these-effects-is-uncertain-150013911.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/7AYTgc.hrpUV2sH7YW5a6Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MTE-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/202d08a0-c8ed-11ed-bff6-f03dbce6aaf3",
        "publishedAt": "2023-03-26T15:00:13Z",
        "content": "A version of post was originally published on TKer.co\r\nAfter a volatile couple of days, stocks ended higher last week, with the S&amp;P 500 climbing 1.4%. The index is now up 3.4% year to date, up 11… [+14818 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "SheKnows"
        },
        "author": "Delilah Gray",
        "title": "Reese Witherspoon & Jim Toth’s Financial Actions Show They’ve Been Prepping for a Split Longer Than Anyone Realized - Yahoo Life",
        "description": "While Reese Witherspoon and Jim Toth’s divorce took the world by surprise, it wasn’t a big shocker for those closest to them. Many insiders claim that not...",
        "url": "https://www.sheknows.com/entertainment/articles/2742244/reese-witherspoon-jim-toth-money-divorce/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/j3ENa3FcHY9ww2ITuNCjcQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/sheknows_79/cacf405c77ced662ab2001ac43fb9053",
        "publishedAt": "2023-03-26T14:57:22Z",
        "content": "If you purchase an independently reviewed product or service through a link on our website, SheKnows may receive an affiliate commission. \r\nWhile Reese Witherspoon and Jim Toths divorce took the worl… [+2521 chars]"
    }
]
  constructor() {
    super();
    this.setState={
      articles: this.articles,
      loading: false
    }
    console.log("Hello I am a constructor from News Component");
  }
  render() {
    if (!this.props.data.articles) {
      return <div>Loading...</div>;
    }
    return (
      < div className="container my-3">
      <h2>Daily Top Headlines</h2>
      <div className="row">
      {this.state.articles.map((element)=>{
        return  <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title} description={element.description} imagUrl={element.urlToImage} newsUrl={element.newsUrl}/>
        </div>
      }
      )}
      </div>
      </div>
    )
  }
}

export default News