

const personalBard = (messageGiven, ageGiven, nameGiven) => {
    messageGiven = prompt("What is the occasuion?");

    ageGiven = prompt("how old are you?");
    ageGiven = parseFloat(ageGiven);

    nameGiven = prompt("What is your name?");
    return (messageGiven, ageGiven, nameGiven)

}


const Zozimus = {
    bardName: "Zozimus the Bard",
    realName: "Zozimus was Michael Moran",
    yearOfBirth: 17,
        cost: {
            baseCost: 7.80,
            discount: .10,
        },
            poem: {
                messageGiven: personalBard(),
                ageGiven:  personalBard(),
                nameGiven: personalBard(),
            },

                    verse: function (){
                        let text = `Come ye to herald ${Zozimus.poem.nameGiven} well, as we ring the chorus bell.`
                        let verse1 =  document.querySelector (".greet");
                        verse1.innerText = text;  
                        return this[text]
                    },

                         refrain: function (){

                             let ageGiven = Zozimus.poem.ageGiven
                             if (ageGiven > 25)
                                 return (`Honourable ${Zozimus.poem.nameGiven} on your year ${Zozimus.poem.ageGiven},`);    

                             else
                                 return(`Young ${Zozimus.poem.nameGiven} on your year ${Zozimus.poem.ageGiven},`);
                                


                         }


            

}



const payTheBard = function (){
    let cal = 7.80 - 7.80 * .10 
    let text1 = `Now, pay the bard $${cal}.`
    let cost1 =  document.querySelector (".cost");
    cost1.innerText = text1;  
    return cost1

}


let pharse =  document.querySelector (".verse");
pharse.innerText = Zozimus.refrain();  

console.log(payTheBard())
console.log(personalBard())
console.log(Zozimus.verse())
console.log (Zozimus.refrain())