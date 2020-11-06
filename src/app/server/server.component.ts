import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent  {

ServerId = 10;
ServerStatus = '';

constructor() {
  this.ServerStatus = Math.random() > 0.5 ? 'online ' : 'offline';
  
}
getServerStatus(){
  return this.ServerStatus ;
}
getColor(){
  return this.ServerStatus === 'online' ? 'green' : 'red';
}

}
