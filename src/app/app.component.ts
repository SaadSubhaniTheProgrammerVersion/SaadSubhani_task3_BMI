import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMI Calculator';
  
  weight!: number;
  height!: number;
  result!: number;
  answer!: string;


  calcBMI(){
    if(this.weight!=null && this.height!=null){
        this.calculation();
  }
  else{
    alert("Please enter a valid weight and height");
  }
}
  calculation(){
    const kg = this.weight*0.453592;
    const meters= this.height*0.0254;
    this.result=kg / (meters * meters)
    this.generate_answer();
  }
  generate_answer(){
    if(this.result<0){
      alert("Please enter a valid weight and height");
      this.result=0;
      this.answer="";
    }
    else if(this.result<18.5){
      this.answer="You are Underweight";
      
    }
    else if(this.result>=18.5 && this.result<=24.9){
      this.answer="Congrats! You have a Normal BMI";
    }
    else if(this.result>=25 && this.result<=29.9){
      this.answer="You are Overweight";
    }
    else if(this.result>=30){
      this.answer="Warning! You are Obese";
    }
  }
  

}
