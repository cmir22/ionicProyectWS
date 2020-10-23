import { Component } from "@angular/core";
import { ModalController } from '@ionic/angular';



@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  
  ngOnInit(){
    var btnContinue = document.querySelector('#btnContinue') as HTMLElement;
    var btnStart = document.querySelector('#btnStart') as HTMLElement;
    var divHomeInterface = document.querySelector('#divHomeInterface') as HTMLElement;
    var divCuestions = document.querySelector('#divCuestions') as HTMLElement;
    var divInstructions = document.querySelector("#divInstructions") as HTMLElement;
    divInstructions.style.display = 'none'
    divCuestions.style.display = 'none'
    console.log(divInstructions)
    
    btnContinue.addEventListener('click',() =>{
      divHomeInterface.style.display = 'none'
      divInstructions.style.display = 'inline'
      
    })

    btnStart.addEventListener('click', () =>{
      divHomeInterface.style.display = 'none'
      divInstructions.style.display = 'none'
      divCuestions.style.display = 'inline'
    })



    
    
  }
  constructor() {
    
  

  }

  
}
