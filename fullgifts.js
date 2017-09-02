//THIS IS for PAGE 5 - List of ALL GIFTS

$(function() {
  //list of checkboxes obtained
  $(window).load(function() {
    event.preventDefault()

    var stringArrayed = fullGiftArray();
    console.log(stringArrayed.length)
    var element = document.getElementById("getChecks");
    //console.log(stringArrayed[0])

    //Gift Names start on 11th cell AKA index 10
    var giftNames = stringArrayed[0].split(/,/)
    var giftLinks = stringArrayed[2].split(/,/)
    var labelstart=10
    //console.log(giftNames.length)
    var newDivRow, newDivCol, newA, newH2, newText, newImg

    for(i=labelstart;i<giftNames.length;i++){


        newDivRow=document.createElement("div")
          newDivRow.setAttribute("class","row")

      for(k=1;k<=4 && i<giftNames.length;k++){
        newDivCol = document.createElement("div");
          newDivCol.setAttribute("class","col-md-3");

        newA = document.createElement("a")
          newA.setAttribute("href",giftLinks[i])
          newA.setAttribute("target","_blank")

        newH2 = document.createElement("h2")
          newH2.setAttribute("align","center")
          newH2.setAttribute("id","giftid")
        newText=document.createTextNode(i+" "+giftNames[i]);

        newImg = document.createElement("img")
          newImg.setAttribute("src","./allgiftsfinal/"+(i-labelstart+1)+".jpg");
          newImg.setAttribute("class","img-thumbnail img-responsive")
          newImg.setAttribute("style","height:300")
          newImg.setAttribute("align","middle")

        newH2.append(newText)
        newA.append(newH2);
        newA.append(newImg);
        newDivCol.append(newA);

        newDivRow.append(newDivCol)

        i++
      }
      element.appendChild(newDivRow);
    //  console.log(giftLinks[i])

    }


  })

})


function fullGiftArray (){
  var giftData = "Q#,Q Ltr,A Ltr,Type,First Order,Restricted Questions,Next Question,Second Order,Answers,Checkbox Field ,Catch Phrase,Cards Against Humanity,Concert Tickets,Vacation Gift from Group,Phone Mini-Projector,Western Bolo Tie,Bible Cover,Cigars,Whiskey Subscription,Cowboy Hat,Belt Buckle,Humidor,Cowboy Boots,Custom Flask,Rugged Solar Phone Charger,Jet Boil,Leatherman / Multi-tool,DIY Beer Kit,Concrete Encased Gift Card,GoPro,Rollout Solar Panels,Jogging Armband,Back Knobber,Boxing Gloves,Yoga Towel,Yoga Mat,Smoothie/Juice Maker,Colorful Kite,Corn Hole,Loveseat Lawn Chair,Hammock,Outdoor Speakers,Drone,Favorite Team Blanket,Snow Scooter,Sportsbrella Chair,Sports Book,Sports Jersey,Game Tickets,Wooden Bowtie,Fun Goblet,Fridge Word Magnets,Bearded Beanie,Inflatable Beer Pong Table,Electric Grill,Robe,Superhero Robe,Funny Phone Case,Sunglasses,Classy Stripper Pole,Tile Tracker,3D Printer,VR Headset,X-box Controller bra,Retro SNES System,Video Game,Gaming Headset,Anti-Fatigue Glasses,8-bit Flower Bouquet,Trump Socks,Caffeine Molecule Mug,DIY Framed Keyboard Keys Message,Blue Screen of Death T-Shirt,Subscription Box,Laser Pointer,Gardening Gloves,Framed Music Lyrics Quote,Flowers,Wind-Up Music Box,Fun Underwear,Unique Scarf,Shot Glasses,Wine Stopper,Fun Alcohol Bottle,Musical Wine Glasses,Pet Camera,Pet Outfit,Pet Toy,Best-Selling Book,Military Book,Book Cover,Audible Membership,Travel Book,Candle,Magic Mug,Sky Planter,Russian Dolls,Electric Wine Opener,Fancy Photo Frame,French Press,Wine Carafe,Reel of Film Wine Holder,Sundial,Unique Vase,Stick Butter Spray,Fancy Tea,Tea Infuser,Wine Aerator,Donald Trump Chia,Blanket with Favorite Painting,Popcorn Popper,Movie Theater Pass Membership,Customized Guitar Pick,Necklace / Headphones Hybrid,Noise Cancelling Headphones,Birchbox,Craft Soap,Beard Grooming Kit,Multi-Use Travel Cosmetics,Cologne,Perfume,Personalized Handkerchief,Motorized Tie Rack,Fancy Hat,Tailored Suit,Leather Satchel,Engraved Collar Stays,Engraved Cufflinks,MultiFunction Carry-on Bag,Toothpick Crossbow,Toilet Shaped Tape Dispenser,French Press Mug,iPhone photo lense,Film Negative Scanner,TV Streaming Device,Mini Foam Roller;,,,,,,,,,Image Name,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126;,,,,,,,,,Product Link,https://www.amazon.com/Hasbro-A7364-Electronic-Phrase-Decades/dp/B00IFWSMO6/ref=sr_1_3?s=toys-and-games&ie=UTF8&qid=1504243876&sr=1-3&keywords=catch+phrase,https://www.amazon.com/Cards-Against-Humanity-LLC-CAHUS/dp/B004S8F7QM/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1504244006&sr=1-2&keywords=cards+against+humanity,https://www.livenation.com/,https://www.priceline.com,https://www.amazon.com/DBPOWER-T20-Projector-Multimedia-Smartphone/dp/B01LZRUY6Q/ref=sr_1_4?ie=UTF8&qid=1504244370&sr=8-4&keywords=mini+phone+projector,https://www.amazon.com/Golden-Eagle-Western-Bolo-Tie/dp/B00D00OAYO/ref=sr_1_19?s=apparel&ie=UTF8&qid=1504244405&sr=1-19&nodeID=7141123011&psd=1&keywords=bolo+tie,https://www.amazon.com/Know-Plans-Two-tone-Bible-Cover/dp/B003JAH9QG/ref=sr_1_5?ie=UTF8&qid=1504244574&sr=8-5&keywords=bible+cover,https://www.jrcigars.com/item/601-cigars/601-gold-label/gordo/eglgo5,https://www.tastersclub.com/,https://www.amazon.com/Tony-Lama-Mens-Ranch-Shantung/dp/B00KOKVGCM/ref=pd_sim_193_5?_encoding=UTF8&refRID=6KQ4X7CC06FQR5WHGZE3,https://www.amazon.com/American-Gadsden-Heritage-Attitude-Buckle/dp/B01C5XV1VQ/ref=sr_1_4?s=apparel&ie=UTF8&qid=1504244999&sr=1-4&nodeID=7141123011&psd=1&keywords=belt+buckle,http://www.beau-coup.com/wedding/monogrammed-mahogany-glass-top-humidor.htm,https://www.tecovas.com/collections/mens-collection,https://www.amazon.com/Custom-Engraved-Stainless-Steel-Gift/dp/B01AHJJ9CI/ref=sr_1_2?ie=UTF8&qid=1504245166&sr=8-2-spons&keywords=custom+flask&psc=1,https://www.amazon.com/OUTXE-16000mAh-Flashlight-Waterproof-Portable/dp/B01MDR2LDK/ref=sr_1_1?s=wireless&ie=UTF8&qid=1504245258&sr=1-1-spons&keywords=solar+phone+battery+pack&psc=1,https://www.amazon.com/Jetboil-Zip-Cooking-System-Black/dp/B004UVPDUM/ref=sr_1_2?s=wireless&ie=UTF8&qid=1504245296&sr=8-2&keywords=jetboil,https://www.amazon.com/Leatherman-Multi-Tool-Stainless-Leather-Sheath/dp/B019EN86IG/ref=sr_1_cc_4?s=aps&ie=UTF8&qid=1504245334&sr=1-4-catcorr&keywords=leatherman,https://www.amazon.com/Mr-Beer-Premium-Gallon-Homebrewing/dp/B001BCFUBU/ref=sr_1_1?s=home-garden&ie=UTF8&qid=1504245385&sr=1-1&keywords=diy+beer+kit,http://www.mancrates.com/gift-cards/smash-and-grab,https://www.amazon.com/GoPro-HERO-LCD-Ecommerce-Packaging/dp/B01MSUJ6EI/ref=sr_1_6?s=photo&ie=UTF8&qid=1504245464&sr=1-6&keywords=gopro,https://www.amazon.com/Upgraded-Sunpower-Portable-Foldable-Outdoors/dp/B071YP7X4F/ref=sr_1_9?s=lawn-garden&ie=UTF8&qid=1504245556&sr=1-9&keywords=portable+solar+panels,https://www.amazon.com/JEMACHE-Fingerprint-Supported-Exercise-Extension/dp/B073PQQRRG/ref=sr_1_6?ie=UTF8&qid=1504245605&sr=8-6&keywords=jogging+armband,https://www.amazon.com/dp/B0006VJ6TO?aaxitk=stp.Huj0wxFvcu6Y9w6OHQ&th=1,https://www.amazon.com/RDX-Sparring-Leather-Boxing-Gloves/dp/B012GBJBDW/ref=sr_1_2?ie=UTF8&qid=1504245688&sr=8-2-spons&keywords=boxing+gloves&psc=1,https://www.amazon.com/Youphoria-24-Inch-Microfiber-Yoga-Stitching/dp/B00HNXBKAG/ref=sr_1_8?s=exercise-and-fitness&ie=UTF8&qid=1504245821&sr=1-8&keywords=yoga+towel,https://www.amazon.com/Gaiam-Premium-Print-Reversible-Elephant/dp/B01GORFTZ8/ref=sr_1_fkmr1_4?s=sporting-goods&ie=UTF8&qid=1504245922&sr=1-4-fkmr1&keywords=gaiam%2Bcarrying%2Byoga%2Bmat&th=1,https://www.amazon.com/Nutri-Ninja-Blender-Silver-BL456/dp/B00Y2U1QUM/ref=sr_1_7?s=kitchen&ie=UTF8&qid=1504245991&sr=1-7&keywords=smoothie+maker,https://www.amazon.com/Kufox-kite-Airplane-Battleplane-Handle-Children/dp/B00V26ISXM/ref=sr_1_11?ie=UTF8&qid=1504246075&sr=8-11&keywords=funny+kite,https://www.amazon.com/Wild-Sports-Stars-Stripes-Cornhole/dp/B074GNQGBR/ref=sr_1_7?ie=UTF8&qid=1504246115&sr=8-7&keywords=cornhole,https://www.amazon.com/Trademark-Innovations-Loveseat-Style-Double/dp/B00ZQ00G1C/ref=sr_1_1?ie=UTF8&qid=1504246178&sr=8-1&keywords=loveseat%2Blawn%2Bchair&th=1,https://www.amazon.com/dp/B00K30HMXK/ref=twister_B001DDWKOM?_encoding=UTF8&th=1,https://www.amazon.com/Portable-Wireless-Bluetooth-Waterproof-Resistant/dp/B06XR91FFD/ref=sr_1_4?ie=UTF8&qid=1504246566&sr=8-4&keywords=outdoor+portable+waterproof+speakers,https://www.amazon.com/WIFI-U818A-DBPOWER-Quadcopter-Batteries/dp/B01D9XC2LY/ref=sr_1_13?s=toys-and-games&ie=UTF8&qid=1504246601&sr=1-13&keywords=drone,https://www.amazon.com/Francisco-49ers-Raschel-Blanket-80-Inch/dp/B00KW4VPQ2/ref=sr_1_17?s=fan-shop&ie=UTF8&qid=1504246710&sr=1-17&keywords=team+blanket,https://www.amazon.com/RAILZ-Full-Size-Recreational-Scooter/dp/B00N9JV3PK/ref=sr_1_8?ie=UTF8&qid=1504246757&sr=8-8&keywords=snow+scooter,https://www.amazon.com/Sport-Brella-BRE03-270-04-Umbrella-Chair-Blue/dp/B004048VNK/ref=sr_1_7?ie=UTF8&qid=1504246837&sr=8-7&keywords=sports+brella,https://www.amazon.com/Moneyball-Art-Winning-Unfair-Game/dp/0393324818/ref=sr_1_1?s=books&ie=UTF8&qid=1504246949&sr=1-1&keywords=moneyball,https://www.fansedge.com/,https://www.stubhub.com/,https://www.amazon.com/WOOD-MEETS-COLOR-Wood-Zebra/dp/B01I821YQU/ref=sr_1_1?ie=UTF8&qid=1504247124&sr=8-1&keywords=wooden+bow+tie,https://www.amazon.com/Friday-Jason-Voorhees-Drinking-Goblet/dp/B000HAKPQW/ref=sr_1_6?ie=UTF8&qid=1504249154&sr=8-6&keywords=fun++goblet,https://www.amazon.com/Word-Magnets-Mafia-Set/dp/B0163TNMGU/ref=sr_1_10?s=toys-and-games&ie=UTF8&qid=1504249222&sr=1-10&keywords=fridge+word+magnets,https://www.amazon.com/Beard-Head-Original-Barbarian-Vagabond/dp/B00CEL3BJU/ref=sr_1_2?s=apparel&ie=UTF8&qid=1504249271&sr=1-2&nodeID=7141123011&psd=1&keywords=beard+beanie,https://www.amazon.com/GoPong-Lounge-Inflatable-Social-Floating/dp/B00HIWL37M/ref=sr_1_1?s=apparel&ie=UTF8&qid=1504249315&sr=1-1&nodeID=7141123011&psd=1&keywords=beer+pong+table,https://www.amazon.com/George-Foreman-5-Serving-Multi-Plate-GRP4800R/dp/B00NPYJWES/ref=sr_1_3?s=lawn-garden&ie=UTF8&qid=1504249388&sr=1-3&keywords=george+foreman+grill,https://www.amazon.com/Seven-Apparel-Collection-Herringbone-Textured/dp/B008I25JKI/ref=sr_1_2?ie=UTF8&qid=1504249483&sr=8-2&keywords=comfy+robe,https://www.amazon.com/Superhero-Comic-Adult-Robe-Batman/dp/B007L3I1MS/ref=sr_1_4?s=apparel&ie=UTF8&qid=1504249532&sr=1-4&nodeID=7141123011&psd=1&keywords=superhero+adult+bathrobe,https://www.amazon.com/iPhone-Viwell-Unique-Personalized-Skeletons/dp/B018CL20WO/ref=sr_1_2?ie=UTF8&qid=1504249716&sr=8-2&keywords=cool+iphone+case,https://www.amazon.com/William-Painter-Aviator-Sunglasses-Hughes/dp/B00Y9BX5HQ/ref=sr_1_1?ie=UTF8&qid=1504249831&sr=8-1&keywords=sunglasses+warby+parker,http://www.trendtimes.com/removable-exotic-stripper-dancing-pole-dance-pole-45mm.html?utm_source=googlepepla&utm_medium=adwords&id=206451793209&gclid=Cj0KCQjwiqTNBRDVARIsAGsd9Mpqb39kPROW0D8OvS_o_kWjX5Qsvu2RNZSNEELXJlw22WRu2MKmRAEaAjpGEALw_wcB,https://www.amazon.com/Tile-Mate-Finder-Anything-Finder/dp/B01L3VEC08/ref=sr_1_1?s=electronics&ie=UTF8&qid=1504249990&sr=1-1-spons&keywords=tile%2Btracker&th=1,https://www.amazon.com/Leveling-Cube-printing-260X260X350-Precision/dp/B071NZSF33/ref=sr_1_4?s=electronics&ie=UTF8&qid=1504250023&sr=1-4&keywords=3d+printer,https://www.amazon.com/Oculus-Rift-Virtual-Reality-Headset/dp/B00VF0IXEY/ref=sr_1_1?ie=UTF8&qid=1504250073&sr=8-1&keywords=oculus+headset,https://spellfoundry.com/2013/04/17/playstation-controller-in-a-bra/,https://www.amazon.com/Retro-Bit-Retro-Twin-Video-Game-System/dp/B0012NZK8G/ref=sr_1_1?ie=UTF8&qid=1504250467&sr=8-1&keywords=retro%2Bsnes&th=1,www.gamestop.com,https://www.amazon.com/Skullcandy-Surround-Wireless-Gaming-Headset-SMPLFY-207/dp/B00AR1LX9O/ref=sr_1_9?s=videogames&dd=ONCyegyZvOu-RMUNaSQozg%2C%2C&ie=UTF8&qid=1504250708&sr=1-9&keywords=gaming+headset&refinements=p_96%3A10155283011%2Cp_36%3A2422979011,https://www.amazon.com/Cyxus-Transparent-Glasses-Fatigue-Headache/dp/B01MZXPHBF/ref=sr_1_2?ie=UTF8&qid=1504250752&sr=8-2-spons&keywords=anti-fatigue+glasses&psc=1,https://www.amazon.com/847509000175-8-bit-Flower-Bouquet/dp/B004MA8HA4,https://www.amazon.com/Gumball-Poodle-Donald-Trump-Length/dp/B01DYRJ1OG/ref=sr_1_3?ie=UTF8&qid=1504250827&sr=8-3&keywords=trump+socks,https://www.amazon.com/Caffeine-Molecule-Glass-Coffee-Science/dp/B01HIS8MT2/ref=sr_1_3?s=home-garden&ie=UTF8&qid=1504250868&sr=1-3&keywords=caffeine+molecule+mug,https://www.pinterest.com/pin/493566440396205858,https://www.amazon.com/Screen-Death-Computer-Graphic-T-Shirt/dp/B01GGOBL1U/ref=sr_1_2?ie=UTF8&qid=1504250978&sr=8-2&keywords=blue+screen+of+death+tshirt,http://www.mysubscriptionaddiction.com/category/best-subscription-boxes,https://www.amazon.com/Wireless-Presenter-SinoPie-PowerPoint-Presentation/dp/B06W57KX1R/ref=sr_1_34?ie=UTF8&qid=1504251238&sr=8-34-spons&keywords=cool+laser+pointer&psc=1,https://www.amazon.com/Leather-Work-Gloves-Industrial-All-Season/dp/B01MRCZ3FH/ref=sr_1_13?ie=UTF8&qid=1504251268&sr=8-13&keywords=gardening+gloves,https://www.pinterest.com/kuiniw/framed-lyrics/,https://www.amazon.com/Benchmark-Bouquets-Flowering-Fields-Vase/dp/B00KWX64Y6/ref=sr_1_4_s_it?s=grocery&ie=UTF8&qid=1504251408&sr=1-4&keywords=flowers&th=1,https://www.amazon.com/Violin-Plated-Swarovski-Crystal-Music/dp/B002Y6UYN6/ref=pd_sbs_201_2?_encoding=UTF8&psc=1&refRID=D36Y49QGX8YJ4GW31WDH,https://www.webundies.com/mens_underwear.html,https://www.etsy.com/listing/119365251/cape-wings-scarf-colorful-shawl-festival?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=scarf&ref=sr_gallery_1,https://www.amazon.com/Funny-Glasses-College-Drinking-2-Pack/dp/B06WV7W6RR/ref=sr_1_13?ie=UTF8&qid=1504253367&sr=8-13&keywords=funny+shot+glass,https://www.amazon.com/Handmade-Giraffe-Eliza-Fair-Trade/dp/B00NP74DYY/ref=sr_1_7?ie=UTF8&qid=1504253432&sr=8-7&keywords=unique+wine+stopper,http://www.bevmo.com/catalog/product/view/id/11298,https://www.uncommongoods.com/product/major-scale-musical-wine-glasses-set-of-2,https://www.amazon.com/Petcube-Play-Camera-1080p-Vision/dp/B01JOBAQUY/ref=sr_1_1?ie=UTF8&qid=1504253884&sr=8-1-spons&keywords=petcube&th=1,https://www.amazon.com/Tzou-Dog-Jacket-Luxury-Leopard/dp/B00EPEOKRG/ref=sr_1_7?ie=UTF8&qid=1504253929&sr=8-7&keywords=dog+outfit,https://www.amazon.com/Squirrel-Interactive-Puzzle-Outward-Hound/dp/B000NV8940/ref=sr_1_5?ie=UTF8&qid=1504253984&sr=8-5&keywords=pet%2Btoy&th=1,https://www.amazon.com/charts/mostsold/fiction,https://www.amazon.com/Old-Breed-At-Peleliu-Okinawa/dp/0891419063/ref=sr_1_8?s=books&ie=UTF8&qid=1504254184&sr=1-8&keywords=military+books,https://www.amazon.com/Classic-Bible-Cover-Faith-Badge/dp/B00ENP6KIY/ref=sr_1_12?ie=UTF8&qid=1504254246&sr=8-12&keywords=leather+book+cover,http://www.audible.com/,https://www.amazon.com/Travel-Book-Journey-Through-Country/dp/178657120X/ref=sr_1_3?ie=UTF8&qid=1504254345&sr=8-3&keywords=travel+book,https://www.amazon.com/Onlywax-Lemongrass-Lavender-Strongly-Sustainable/dp/B071XLY2PN/ref=sr_1_9?ie=UTF8&qid=1504254537&sr=8-9&keywords=candle,https://www.amazon.com/Cortunex-Smiley-Sensitive-Changing-Coffee/dp/B00N3HYI9Q/ref=sr_1_8?ie=UTF8&qid=1504254581&sr=8-8&keywords=magic+mug,https://www.amazon.com/Boskke-Sky-RS-WH-01-Sky-Planter-Small/dp/B007QUC0KA/ref=sr_1_6?ie=UTF8&qid=1504254640&sr=8-6&keywords=sky+planter,https://www.amazon.com/Youbedo-Madness-Nesting-Authentic-Matryoshka/dp/B01BY3EPX4/ref=sr_1_2?ie=UTF8&qid=1504254685&sr=8-2-spons&keywords=russian+dolls&psc=1,https://www.amazon.com/Oster-Cordless-Electric-Bottle-Opener/dp/B003YFI0O6/ref=sr_1_2?s=kitchen&ie=UTF8&qid=1504254722&sr=1-2-spons&keywords=electric+wine+opener&psc=1,https://www.amazon.com/Large-Rustic-Climbing-Bears-Picture/dp/B01CTC8E2C/ref=sr_1_10?ie=UTF8&qid=1504254767&sr=8-10&keywords=funny+photo+frame,https://www.amazon.com/Coffee-Premium-Quality-Stainless-Cafetiere/dp/B01N1UWJAW/ref=sr_1_9?s=kitchen&ie=UTF8&qid=1504254797&sr=1-9&keywords=french+press,https://www.amazon.com/Decanter-Smaier-Accessories-Lead-free-1500ml/dp/B0711VZ17K/ref=sr_1_1?ie=UTF8&qid=1504254839&sr=8-1-spons&keywords=wine+carafe&psc=1,https://www.amazon.com/Country-Cottage-Countertop-Holder-Twine/dp/B00BPZSOWU/ref=sr_1_1?ie=UTF8&qid=1504254875&sr=8-1&keywords=reel+of+film+wine+holder,https://www.amazon.com/Rome-RM2308-Brass-Sundial-Grow/dp/B00079PRVQ/ref=sr_1_2?ie=UTF8&qid=1504255152&sr=8-2&keywords=sundial,https://www.amazon.com/MOONSTONE-Crafts-Decorative-Natural-Unique/dp/B071ZSLFNQ/ref=sr_1_16?ie=UTF8&qid=1504255223&sr=8-16&keywords=unique+vase,https://www.amazon.com/Misto-Stainless-Steel-Bottle-Window/dp/B00QQ7U4WA/ref=sr_1_1?ie=UTF8&qid=1504255582&sr=8-1&keywords=Misto+Stainless+Steel+Bottle+with+Window,https://www.amazon.com/Tea-Sampler-Assorted-Variety-Different/dp/B00O80NU00/ref=sr_1_1_a_it?ie=UTF8&qid=1504255597&sr=8-1&keywords=fancy%2Btea&th=1,https://www.amazon.com/HeroNeo-Infusor-Colador-Silicona-difusores/dp/B00XQP1FGO/ref=sr_1_cc_7?s=aps&ie=UTF8&qid=1504255702&sr=1-7-catcorr&keywords=funny+tea+infuser,https://www.amazon.com/Vinluxe-Aerator-Diffuser-Pourer-Decanter/dp/B00GSWGCDI/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1504255731&sr=1-3&keywords=wine+aerator,https://www.amazon.com/Chia-Donald-Freedom-Pottery-Planter/dp/B01G988ZRG/ref=sr_1_1?ie=UTF8&qid=1504255772&sr=8-1-spons&keywords=donald+trump+chia&psc=1,https://www.amazon.com/Pure-Country-Weavers-Blanket-Tapestry/dp/B0002134C8/ref=sr_1_2?s=home-garden&ie=UTF8&qid=1504255823&sr=1-2&keywords=starry+night+blanket,https://www.amazon.com/Presto-04821-Orville-Redenbachers-Popper/dp/B00006IUWB/ref=sr_1_11?s=kitchen&ie=UTF8&qid=1504255893&sr=1-11&keywords=popcorn+popper,https://www.moviepass.com/,https://www.amazon.com/Guitar-Pick-Message-Personalized-Stainless/dp/B01CRFT290/ref=sr_1_1?ie=UTF8&qid=1504256041&sr=8-1&keywords=customized+guitar+pick,https://www.amazon.com/Bluetooth-Headphones-Necklace-Wireless-Earphones/dp/B0158STSU6/ref=sr_1_6?ie=UTF8&qid=1504256086&sr=8-6&keywords=necklace+headphones,https://www.amazon.com/Sony-Wireless-Cancelling-Headphone-MDR100ABN/dp/B01CQXGM5K/ref=vsbg_hdphn_695064_sr/141-8122580-8699046?s=electronics&ie=UTF8&qid=1504308824&sr=1-1&keywords=noise+cancelling+headphones,https://www.birchbox.com/,https://www.amazon.com/Craftsman-Soap-Sampler-8-pieces-All-natural/dp/B00JLS64FW/ref=sr_1_8_a_it?ie=UTF8&qid=1504308937&sr=8-8&keywords=fancy+soap,https://www.amazon.com/Barbero-Grooming-Beard-Care-Kit/dp/B01N9T489H/ref=sr_1_14_s_it?s=beauty&ie=UTF8&qid=1504308983&sr=1-14&keywords=beard+grooming,https://www.amazon.com/ILIA-Beauty-Multi-Stick-Women-Cheek/dp/B06Y28VXXY/ref=sr_1_fkmr0_2_s_it?s=beauty&ie=UTF8&qid=1504309271&sr=1-2-fkmr0&keywords=multipurpose+ilia+cosmetic,https://www.amazon.com/Giorgio-Armani-Acqua-Toilette-Spray/dp/B000E7YK5K/ref=sr_1_1_s_it?s=beauty&ie=UTF8&qid=1504309397&sr=1-1&keywords=armani%2Bcologne&th=1,https://www.amazon.com/Women-Perfume-CHANEL-No-Parfum-Spray/dp/B016AEKYDM/ref=sr_1_1_s_it?s=beauty&ie=UTF8&qid=1504309423&sr=1-1&keywords=chanel+perfume,https://bumblebeelinens.com/mens-monogrammed-wedding-hankie-initials-font-p-658.html,https://www.amazon.com/Sterline-Automatic-Motorized-Revolving-Batteries/dp/B01H5W00CS/ref=sr_1_5?ie=UTF8&qid=1504309599&sr=8-5&keywords=motorized+tie+rack,https://www.amazon.com/Junes-Young-Women-Fashion-Beach/dp/B01DNQ1JIY/ref=sr_1_7?ie=UTF8&qid=1504309752&sr=8-7&keywords=fancy%2B%2Bhat&th=1,https://www.indochino.com/,https://www.amazon.com/Kattee-Leather-Briefcase-Messenger-Shoulder/dp/B00KHGKGZG/ref=sr_1_7?ie=UTF8&qid=1504309909&sr=8-7&keywords=leather+satchel,https://www.amazon.com/Personalized-Stainless-Steel-Collar-Engraved/dp/B00GU69TIM/ref=sr_1_1?ie=UTF8&qid=1504309982&sr=8-1&keywords=custom+collar+stay,https://www.amazon.com/ORAZIO-Engraved-Cufflinks-Alphabet-Business/dp/B06XNNXS5Z/ref=sr_1_2?s=apparel&ie=UTF8&qid=1504310018&sr=1-2&nodeID=3888131&psd=1&keywords=cufflinks,https://www.amazon.com/Bluesmart-One-International-Carry-TSA-Approved/dp/B00X5OUC1U/ref=sr_1_1?ie=UTF8&qid=1504310263&sr=8-1&keywords=Bluesmart+One+-+Smart+Luggage%3A+GPS%2C+Remote+Locking,https://www.touchofmodern.com/sales/uncommoncarry-391b09c1-c035-4f7e-b97e-d08d3523dc7b/bb-bowman,https://www.amazon.com/Station-Dispenser-Holder-Paper-Storage/dp/B001L43NBW,https://www.amazon.com/Vacuum-Insulated-French-Stainless-Portable/dp/B00ZJ9QBY6/ref=sr_1_1?ie=UTF8&qid=1504310628&sr=8-1-spons&keywords=french+press+mug&psc=1,https://www.amazon.com/AMIR-Professional-Universal-Samsung-Smartphones/dp/B01H1JY95E/ref=sr_1_2?ie=UTF8&qid=1504310667&sr=8-2&keywords=iphone+photo+lens,https://www.amazon.com/Digitnow-Negative-Scanner-Negatives-Converter/dp/B01ALUOKNQ/ref=sr_1_13?ie=UTF8&qid=1504310705&sr=8-13&keywords=film+negative+scanner,https://www.google.com/search?q=roku+apple+tv&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjO4azAmoXWAhVhrVQKHTOzDikQ_AUIDSgE&biw=2000&bih=901#imgrc=ukVavsGV4ADAbM:,https://brazynlife.com/products/the-morph-collapsible-foam-roller"
  var stringArray = giftData.split(/;/)

  return stringArray

}