import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent{// implements OnInit,OnChanges, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  
  constructor(){
    console.log('Constructor')
  }

  
/*

  ngOnInit() : void {
    console.log('OnInit')
  }

  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }


  ngAfterContentChecked() :void{
    console.log('AfterContentChecked')

  }

  ngAfterViewInit():void{
    console.log('AfterViewInit')
  }

  ngAfterViewChecked():void{
    console.log('AfterViewChecked')
  }
  ngOnDestroy():void {
    console.log('OnDestroy')
  }
*/
  nameInput(){
    console.log('nameInput')
  }

}
