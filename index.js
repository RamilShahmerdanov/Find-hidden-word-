function Game(){

    let names=["quba","şirvan","vətən"]//ilk novbede biz ivinde sozler olan arrayimizi yaziriq

    let namesIn =Math.floor(Math.random()*names.length);//bu setirde biz math metodlari ile birinci arrayimizin uzunlugu qeder random elementler secirik ve floor ile olari asagi tam reqeme beraberlesdiririk

   let searchword =names[namesIn].split("") //bu setirde biz names in namesIn-inci indekslerini ayr ayri yaziriq =>["q","u","b","a"]

   let hiddenword =Array(searchword.length).fill("_")//yeri array yaradiqir her bir indeksi "_" ile evez edirik

   let heart =2

   alert("The game is starting...")
   alert(`Your lives throughout the game : ${heart}`);

   while(heart>0 && hiddenword.includes("_") ){ //burda while dongusu yaradiriq , heart bitene kimi  ve "_" hiddenword a daxil olana kimi prosesi davam etdirmeyi deyrik
    alert(`Your hidden searched word : ${hiddenword.join(" ")} ` );
    let letter =prompt("Enter your letter ").toLowerCase()
    if(searchword.includes(letter)){ //burda bir for dongusu yaradiriq ve deyirik eyer user in daxil etdiyi letter hemin sozde varsa o zaman hemin letteri elave ele hidden vordda eyni index yerine
        for( let i=0;i<searchword.length;i++){
            if(searchword[i]==letter){//eyer daxil edilen letter axtarilan sozde varsa hemin letteri elave et gizli soze
                hiddenword[i]=letter
        } 
        }
    }
    else if(!searchword.includes(letter)){//eks halda ekrana asagdaki yazilar cixacaq ve ureylerimizden biri azalacaq
        heart--;
        alert("Your letter is wrong and lost one heart")
        alert(`Your Heart : ${heart}`);

    }

   } //burda while dongumuz sona catir.Eyer verilen soz tapilibsa ekrana tebrik mesaji gelsin onuda asagda eks etdirmisem

   if(!hiddenword.includes("_")){
    alert(`Congratulations You Win. The correct word was : ${searchword.join("")}` )
   
    
    let replay=confirm("Do you want to play again ?")//burda sorguedirik ve serte uygun funksiyani cagiririq
    if(replay){
        Game()
    }else{
        alert("Thank you for joining the game")
    }   
   } else{
    alert(`Game Over! The correct word was ${searchword.join("")}` )

    let replay=confirm("Do you wand to play again ?")

    if(replay){
    Game()
}else{
    alert("Thank you for joining the game")
}  
}
}

Game()


