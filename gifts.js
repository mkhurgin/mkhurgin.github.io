// This code runs when the page loads
$(function() {

  $(".giftrec").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    elementThatWasClicked.parent().remove()

    // remove the element
  })

})




// THIS ADDS ARRAYS
function sumArray(a,b){
  var c = [];
  for (var i = 0; i < Math.max(a.length, b.length); i++) {
    c.push((a[i] || 0) + (b[i] || 0));
  }
  return c;
}
//End Add Array



// THIS SORTS ARRAYS and returns an array containing the original ARRAY's elements in numerical order
// This skips the first element [0]
// Using Array [0,100,10,33]; this would return [0,2,3,1]; then you know the second element has the lowest number
function insertionSort (array) {
  var sortedElements=[]
  //populate the sorted elements, with each element value equal to the element location
  for(var i = 0 ; i < array.length ;){
    sortedElements[i]=i
    i++
  }
  console.log(sortedElements)
  for(var i = 1 ; i < array.length ;){
      if(array[i] < array[i-1]){
          //array sort
          var temp = array[i]
          array[i] = array[i -1]
          array[i -1] = temp
          //sortedElements sort
          var temp2 = sortedElements[i]
          sortedElements[i]=sortedElements[i-1]
          sortedElements[i-1]=temp2

          i--
      } else{i++}
  }
  return sortedElements
}
//END ARRAY SORT




//MAIN FUNCTION CALLED ON CLICK
var apple=0
$(function() {

  $("#getRecommendations").on("click", function(event) {
    event.preventDefault()
    // List of gifts
    var giftList = {gifts:[{giftnum:0,description:"Nothing"},
      {giftnum:1,description:"Headphones"},
      {giftnum:2,description:"Portable Charger"},
      {giftnum:3,description:"Audible Subscription"},
      {giftnum:4,description:"Flask"},
      {giftnum:5,description:"Cufflinks"},
      {giftnum:6,description:"Multi-tool"},
      {giftnum:7,description:"Musical Wine Glasses"},
      {giftnum:8,description:"Birch Box"},
      {giftnum:9,description:"Fancy Hat"},
      {giftnum:10,description:"Tea Infuser"},
      {giftnum:11,description:"Framed Lyrics"},
      {giftnum:12,description:"Cowboy Hat"}
    ]};
    // End list of gifts


    // Start Need to figure out how to add arrays
    //var giftRatings=[];
    //var giftRatings3=[];
    var giftRatings=[0,0,0,0,0,0,0,0,0,0,0,0,0];
    var OutputGifts=[0,0,0,0,0,0,0,0,0,0,0,0,0]
    // console.log(giftList.gifts[1])
    var cb1 = document.getElementById("inlineCheckbox1").checked;
    var cb2 = document.getElementById("inlineCheckbox2").checked;
    var cb3 = document.getElementById("inlineCheckbox3").checked;
    var cb4 = document.getElementById("inlineCheckbox4").checked;
    var cb5 = document.getElementById("inlineCheckbox5").checked;

    var male = [0,1,1,1,1,1,1,0,0,0,0,0,0];
    var female = [0,1,0,0,0,0,0,1,1,1,1,1,1];
    var fashion = [0,0,0,0,0,1,0,0,0,1,0,0,1];
    var outdoors = [0,0,1,0,1,0,1,0,0,0,0,0,1];
    var subscription =[0,0,0,1,0,0,0,0,1,0,0,0,0];
    console.log(cb1);
    console.log(cb5);

    if (cb1 ===true){
        var giftRatings=sumArray(male,giftRatings);
      //console.log(giftRatings[1]);
    }
    if (cb2 ===true){
        var giftRatings=sumArray(female,giftRatings);
      //console.log(giftRatings[1]);
    }
    if (cb3 ===true){
        var giftRatings=sumArray(fashion,giftRatings);
      //console.log(giftRatings[1]);
    }
    if (cb4 ===true){
        var giftRatings=sumArray(outdoors,giftRatings);
      //console.log(giftRatings[1]);
    }
    if (cb5 ===true){
        var giftRatings=sumArray(subscription,giftRatings);
      //console.log(giftRatings);
    }
    //NEED TO FIND OUT WHY THIS IS SORTING giftRatings AS WELL
    console.log(giftRatings)
    var sortedElements = insertionSort(giftRatings)
    console.log(sortedElements)
    console.log(giftRatings)


    //DISPLAYS THE TOP RECOMMENDED gifts
    var numberPics =6 //how many pics to display
    var picCounter =1
    for(var i = sortedElements.length-1 ; i >= sortedElements.length-numberPics ;){
     $("#mg"+picCounter).attr("src","./allgifts/"+sortedElements[i]+".jpg" )
     console.log(i)
     i--
     picCounter++
    }

    console.log(giftArray())
    //END DISPLAYS RECOMMENDED gifts
    /*var csvv = new XMLHttpRequest();
    var url = "c:/code/mkhurgin.github.io/test.csv"
    csvv.open("GET", url, false);
    //csvv.send(null)
    //var csv = "test.csv"
    var result = $.csv.toArrays(csvv)
    console.log(result)
    */
    /*var url = "C:\code\mkhurgin.github.io\test.csv"
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    //request.send(null);

    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(','));
    }
    console.log(csvData) */
    // $("#mg2").attr("src","http://golearntocode.com/images/cards/" + shuffledeck[1] + ".png" )
    // $("#mg3").attr("src","http://golearntocode.com/images/cards/" + shuffledeck[2] + ".png" )
    // $("#mg4").attr("src","http://golearntocode.com/images/cards/" + shuffledeck[3] + ".png" )
    // $("#mg5").attr("src","http://golearntocode.com/images/cards/" + shuffledeck[4] + ".png" )
  })
})

function giftArray (){
  var header = "I, like, to, win"
  var headerArray = header.split(/,/)
  return headerArray;
}

function LoadFile() {
    var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var arrLines = strRawContents.split("\n");
    alert("File " + oFrame.src + " has " + arrLines.length + " lines");
    for (var i = 0; i < arrLines.length; i++) {
        var curLine = arrLines[i];
        alert("Line #" + (i + 1) + " is: '" + curLine + "'");
    }
}
