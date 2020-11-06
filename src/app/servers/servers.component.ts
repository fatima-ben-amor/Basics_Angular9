import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector : '.app-servers',  selecter par class
  //selector : '[app-servers]', //selecter par attribute
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
ServerCreationStatus = 'no server valable ....';
serverName = '';
userName = '';
ServerCreated = false;

  constructor() {
    setTimeout(()=>{
       this.allowNewServer = true;
    },2000);
   }


  ngOnInit(): void {
  }
  onCreateServer(){
     this.ServerCreated= true;
     this.ServerCreationStatus="there is a server is added ! and his name is " + this.serverName
  };
  onUpdateServerName(event : Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value; 
 }

}
