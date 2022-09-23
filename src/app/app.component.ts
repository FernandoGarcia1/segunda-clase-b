import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,OnChanges,OnDestroy,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  
  title = 'segunda-clase-b';
  flag: boolean = true;

  ngOnInit():void{
    this.clickButton();
  }

  clickButton(){
    let buttonShadown = document.getElementById('btn-1')

    buttonShadown?.addEventListener('click',()=>{
      this.flag = !this.flag;  
    })
  }


}
