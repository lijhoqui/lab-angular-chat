import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages$;

  constructor (private db: AngularFirestore){
    this.messages$ = db.collection('messages').valueChanges();    
  }

  addMessage(input:HTMLInputElement){
    const message = input.value;
    this.db.collection('messages').add({mensaje : message, date: new Date});
    input.value='';
    console.log('test')
  }
}
