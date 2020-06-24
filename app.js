//////Construction/////////
class ContactBook{
    constructor(listeOfContacts){
        this.listeOfContacts = listeOfContacts,
        this.numberOfContacts = listeOfContacts.lenght ,
        this.lastId = 1215
    }
    delete(ligne,colone){
        this.listeOfContacts[ligne].splice(colone,1)

    }
    getFirstLetter(contact){
        return contact.lastName[0].toUpperCase ();
 
     }
    getPositionTabLettre(contact){
        //corespend a la ligne du contact
        let lettre = this.getFirstLetter(contact);
        return tabAlphabet.indexOf(lettre);
    }
    getPosition(contact){
        // corespend a la colone du contact
        let lettre = this.getFirstLetter(contact);
        let positionTabLettre = tabAlphabet.indexOf(lettre);
      
        return  this.listeOfContacts[ positionTabLettre].indexOf(contact);
    }
   
    add(contact){
        let lettre = this.getFirstLetter(contact);
        //trouver la position de la lettre dans le tableau ce qui corespondera a l'indice du tablableau dans la liste des contacts:
        let position = tabAlphabet.indexOf(lettre);
        console.log(position)
        // on rajoute le contact au tableau crespondant a la lettre:
        this.listeOfContacts[position].push(contact);
        let tabLettre = this.listeOfContacts[position]
   
            // on crree un tableau vide pour trier les noms des objets:
            let tabSort = [];
            //on rajoute les noms dans le tableau tabSort
           
            for(let i=0;i<tabLettre.length;i++){
                 
                    tabSort.push( tabLettre[i].lastName); 
                  
            }
            // trier le tableu en ordre alphabitique 
            tabSort.sort();
           // console.log(tabSort)
            // on cree un tableau avec des cases vides. la taille du tebleu corespont a la taille du tableau sort
            let tabRemplacement = new Array(tabSort.length)
            //on parcour le tableau tabSort:
            for(let j=0;j<tabSort.length;j++){
                //on parcour le tableau de lettre corepondante a la premiaire lettre du nom:
                for(let k =0 ;k<tabLettre.length;k++){
                    // si le nom dans tabSort corespont au nom du lableau lettre on reprend l'objet et on le positionne dans son emplacemnt triee:
                    if(tabSort[j] == tabLettre[k].lastName){
                        //l'objet du noms est positionne dans tabRemplecement dans la postion triee
                        tabRemplacement[j]= tabLettre[k]
                      
                    }
                }
               
            }
            //on remplace le tableau de lettre par le tableau triee:
            this.listeOfContacts[position]= tabRemplacement;
           
    
        
        //on parcour le tableau de la lettre 
    //    for (let i =0 ; i<tabLettre.length;i++){
    //        //on vérifier si le méme nom existe déja donc on trie avec le prénom
    //        if(contact.lastName == tabLettre.lastName){
    //            trier("firstName",tabLettre)
    //        }
    //        //si non on trie avec le nom:
    //        else{trier("lastName",tabLettre)}
    //    }
       console.log(tabLettre)
       listeOfContacts = this.listeOfContacts;
       tabIdClient.push(contact.id)
    }
    count(){
        return this.numberOfContacts
    }
}
class Contact{
    constructor(lastName,firstName,nickName,phoneNumber,email,address){
        this.id = referencesClients[tabIdClient.length];
        this.lastName = lastName,
        this.firstName = firstName,
        this.nickName = nickName,
        this.phoneNumber = phoneNumber,
        this.email = email,
        this.address = address
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id ;
    }
    getlastName(){
        return this.lastName;
    }
    setlastName(lastName){
        this.lastName = lastName;
    }
    getFirstName(){
        return this.firstName
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    setNickName(nickName){
        this.nickName = nickName
    }
    gethPoneNumber(){
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    gethEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    getAddress(){
        return this.address;
    }
    setAddress(address){
        this.address = address;
    }

}
class  ContactBookGUI{
    static creatBook(){
        ///// Susttème d'onglets ////////
                    /* Génerer les onglet alfabet */
            for(let i=0;i<tabAlphabet.length;i++){
                let span = document.createElement('span')
                onglets.appendChild(span)
                span.id = i;
                span.style.display = "inline-block"
                span.style.width = tailleOnglet+"px";
                span.style.height =(tailleOnglet)/2+"px";
                span.style.cursor ="pointer"
                span.innerText = tabAlphabet[i];
                span.style.textAlign = "center"
               
            }

            /* Génerer le contenu  */

            for(let i = 0; i<tabAlphabet.length;i++){
                let div = document.createElement('div');
                contenu.appendChild(div);
                div.id = tabAlphabet[i];
                //div.innerText = tabAlphabet[i];
                div.hidden = true
             
               
            }
            /* Apparence du contenu*/
            //console.log(onglets.children.length)
            for (let i = 0 ; i<onglets.children.length;i++){
                onglets.children[i].addEventListener('click',event =>{
                   // console.log(  onglets.children[i].innerHTML)
                    for(let j = 0; j<contenu.children.length;j++){
                        if (contenu.children[j].id != onglets.children[i].innerHTML){
                            contenu.children[j].hidden = true
                            onglets.children[j].style.backgroundColor = " rgb(255,255,255)" 
                            contenu.children[j].style.display ="none"  
                        }
                        else{
                                 contenu.children[j].hidden = false
                                 onglets.children[i].style.backgroundColor = " aliceblue"
                                 contenu.children[j].style.display ="flex"
                                 contenu.children[j].style.margin = "20px";
                                 contenu.children[j].style.justifyContent = "space-around"
                            }
                    }
                })
            }

    }
    static createContact(position,idDeLadive){
        // on cree une dive contact 
        let monContact = document.createElement('div');
        let tabProprietes = ["lastName","firstName","nickName","phoneNumber","email","address"]
        // on selectionne la div de la lettre
        let divDuConact = document.querySelector('#'+idDeLadive) ;
        // on crre  les button 
        let modifier = document.createElement('button');
        let suprimer = document.createElement('button');
        //on recuper le contact 
        let contact = listeOfContacts[tabAlphabet.indexOf(idDeLadive)][position]
        //on ajoute le contact a la div de la lettre 
        divDuConact.appendChild(monContact);
        monContact.style.order = position;
        // on insére le div au bon endroit
    //     if(position == 0 ){
    //         //traiter le cas particulier du zero
    //         divDuConact.insertBefore(monContact,divDuConact.children[position]);
    //     }
    //     else{ divDuConact.insertBefore(monContact,divDuConact.children[(position)-1]);
    //     console.log(divDuConact.children[(position)-1])
    // }
        //on parcour tab contact 
        for (let i =0;i<tabContact.length;i++){
            //on crre l'élément p 
            let p = document.createElement('p');
            // on l'assodie au parent moncontact
            monContact.appendChild(p);
            // on affiche les information du nouveau contact 
            p.innerText = tabContact[i]+contact[tabProprietes[i]];
        }
       
        monContact.appendChild(modifier);
        monContact.appendChild(suprimer);
        modifier.innerText = "Modifier"
        suprimer.innerText = "Suprimer"
        modifier.classList.add('modifier')
        modifier.addEventListener('click',function(){
            generePage(contact);
            console.log(contact)
    
        let myBtnAjouter = document.querySelector("#ajouter"+"-"+contact.id)
        for(let i=0 ;i<allBtnMod.length;i++){
             allBtnMod[i].disabled = true
        }
        myBtnAjouter.addEventListener('click',function(){
                // variable pour suprimer le contact par la suite 
                let ligne = myContactBook.getPositionTabLettre(contact);
                let colone = myContactBook.getPosition(contact);
                //on parcour les inputs 
                for(let j =0 ; j<6;j++){    
                    let myInput = document.querySelector('#'+tabId[j]+"-"+contact.id);
                    // si la case n'est pas vide on appele la méthode pour remplacer 
                    if(myInput.value != ""){
                        if(myInput.id =="nom"+"-"+contact.id ){
                        contact.setlastName(myInput.value);
                            console.log(contact.lastName)
                        }
                        else if (myInput.id =="prenom"+"-"+contact.id){
                            contact.setFirstName(myInput.value);
                        }
                        else if (myInput.id =="pseudo"+"-"+contact.id){
                            contact.setNickName(myInput.value);
                        }
                        else if (myInput.id =="telephone"+"-"+contact.id){
                            contact.setPhoneNumber(myInput.value);
                        }
                        else if (myInput.id =="mail"+"-"+contact.id){
                            contact.setEmail(myInput.value);
                        }
                        else if (myInput.id =="adress"+"-"+contact.id){
                            contact.setAddress(myInput.value);
                        }
                    }
                }
                // on ajoute le nouveau contact dans le tabeau des contactes 
                myContactBook.add(contact);
                // on suprime l'encien contact 
                myContactBook.delete(ligne,colone);
                // on suprime la div du contact 
                monContact.remove();
                //on recupére le postion du contact 
                let position = myContactBook.getPosition(contact)
                // on recupére la premiére lettre du contact qui corespend a l'id de la div dans les ongles.
                let idDeLadive = myContactBook.getFirstLetter(contact)
                ContactBookGUI.createContact(position,idDeLadive)
                let monModal = document.querySelector('.modal')
                monModal.remove();
            //    ContactBookGUI.createContact()
            }) 
           
        },)
        console.log(suprimer)
        suprimer.addEventListener('click',()=>{
            console.log("ghqfs")
            let position = myContactBook.getPosition(contact)
            let idDeLadive = myContactBook.getFirstLetter(contact)
            monContact.remove();
            myContactBook.delete(position,idDeLadive)
        })
    }
    static deleteContact(position,idDeLadive){
        let contact = listeOfContacts[tabAlphabet.indexOf(idDeLadive)][position];

    }
}
///functions//
function chiffreArbitraire(n){
    let  chifreArbtraire =0
    for(let i = 0; i< n; i++){
        chifreArbtraire= String(chifreArbtraire)+ Math.floor(Math.random() * Math.floor(9));
    }
    return chifreArbtraire
}
function genereIdentifient(){
    function puchId (){
        let monId = chiffreArbitraire(10)
        if (referencesClients.indexOf(monId)==-1){
            referencesClients.push(monId)
        }
        else{
             puchId()
        }
    }   
    for(let i =0;i<100;i++){
        puchId()
        }
        
    
}
function generePage(contact){
    let modal = document.createElement('div')
    let ajouter = document.createElement('button');
   // let conteneur = document.querySelector('#cont
    let modalgris = document.createElement('div')
    document.body.appendChild(modalgris)
    modalgris.classList.add('gris')
    modalgris.addEventListener('click',()=>{
       modal.remove()
       modalgris.remove()
       allBtnMod.disabled = false
    })
    
    document.body.appendChild(modal);
    modal.classList.add('modal')
    for (let i =0;i<tabContact.length;i++){
        let label = document.createElement('label')
        let input = document.createElement('input');
        modal.appendChild(label);
        modal.appendChild(input);
        label.innerText = tabContact[i];
        input.id = tabId[i]+"-"+contact.id;
        
    }
    modal.appendChild(ajouter)
    ajouter.innerText ="Ajouter"
    ajouter.id ="ajouter"+"-"+contact.id;
    console.log(ajouter.id)
    modal.style.width = window.innerWidth/3;
    modal.style.height = window.innerHeight/2;
}
function generePageAjouter(){
    let modal = document.createElement('div')
    let ajouter = document.createElement('button');
    let modalgris = document.createElement('div')
    // gestion du clic modal
    document.body.appendChild(modalgris)
    modalgris.classList.add('gris')
    modalgris.addEventListener('click',()=>{
       modal.remove()
       modalgris.remove()
       ajouterContact.disabled = false
    })
    document.body.appendChild(modal);
    modal.classList.add('modal');
    for (let i =0;i<tabContact.length;i++){
        let label = document.createElement('label')
        let input = document.createElement('input');
        modal.appendChild(label);
        modal.appendChild(input);
        label.innerText = tabContact[i];
        input.id = tabId[i]
    }
    modal.appendChild(ajouter)
    ajouter.innerText ="Ajouter Contact"
    ajouter.id ="myajouter"
    modal.style.width = window.innerWidth/3;
    modal.style.height = window.innerHeight/2;

}
const onglets = document.querySelector('#onglets');
const contenu =  document.querySelector('#contenu');
let tabAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let tabContact = ["Nom: ","Prénom: ","Pseudo: ","Téléphone: ","Mail: ","Adress: "]
let tabId = ["nom","prenom","pseudo","telephone","mail","adress"]
let tailleOnglet =  ((( window.innerWidth)/10)*9)/26 // formule pour calculer la taille du span qui fait 90vw/le nombre de span
let listeOfContacts = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
let ajouterContact = document.querySelector('#ajouter-contact');
let allBtnMod =   document.querySelectorAll('.modifier')
let referencesClients = [];
let tabIdClient = [];

genereIdentifient()
ajouterContact.addEventListener('click',function(){
    generePageAjouter();
    this.disabled = true;
    let monModal = document.querySelector('.modal')
    let myInput = monModal.querySelectorAll('input');
        console.log(myInput)
    let myajouter = document.querySelector('#myajouter')
    myajouter.addEventListener('click',()=>{
        if(myInput[0].value == ""||myInput[1].value == ""||myInput[2].value == ""||myInput[3].value == ""||myInput[4].value == ""||myInput[5].value == ""){
             window.alert("veiller remplier tout les éléments  du formulaire ")
             monModal.remove()
             this.disabled = false
            // ecouter si la fenétre alerte est fermmé pour regénérer la page ajouter
        }
        else{
            myNewContact = new Contact(myInput[0].value,myInput[1].value,myInput[2].value,myInput[3].value,myInput[4].value,myInput[5].value);
            myContactBook.add(myNewContact)
            let position = myContactBook.getPosition(myNewContact)
            // on recupére la premiére lettre du contact qui corespend a l'id de la div dans les ongles.
            let idDeLadive = myContactBook.getFirstLetter(myNewContact)
            ContactBookGUI.createContact(position,idDeLadive);
            monModal.remove()
            this.disabled = false
            console.log(myNewContact.id)
        }
    })
       
    

})
ContactBookGUI.creatBook();
myContactBook = new ContactBook(listeOfContacts);
myContact = new Contact("benGamra","feres","ben Gamra feres","25645842","fggfd@jhgjsqgj","15 fhgfs jhgdqsf 25624")
newContact = new Contact("banGamra","feres","ben Gamra feres","25645842","fggfd@jhgjsqgj","15 fhgfs jhgdqsf 25624")
newContact1 = new Contact("fruchart","alexiane","alex","25645842","fggfd@jhgjsqgj","15 fhgfs jhgdqsf 25624")
newContact2 = new Contact("firuchart","alexiane","alex","25645842","fggfd@jhgjsqgj","15 fhgfs jhgdqsf 25624")
newContact3 = new Contact("faruchart","alexiane","alex","25645842","fggfd@jhgjsqgj","15 fhgfs jhgdqsf 25624")
myContactBook.add(myContact)
myContactBook.add(newContact)
myContactBook.add(newContact1)
myContactBook.add(newContact2)
myContactBook.add(newContact3)
console.log("dzfz"+myContactBook.getPosition(myContact)) 
// console.log(myContactBook.listeOfContacts[1])
 console.log(listeOfContacts)
 console.log(referencesClients)
 console.log(myContact.id)
ContactBookGUI.createContact(1,"B")
ContactBookGUI.createContact(0,"B")
ContactBookGUI.createContact(0,"F")
ContactBookGUI.createContact(2,"F")
ContactBookGUI.createContact(1,"F")

