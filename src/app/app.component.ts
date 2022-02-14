import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'job-app-1';

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs
      .collection('test')
      .snapshotChanges()
      .subscribe((items: any) => {
        console.log(items.map((x: any) => x.payload.doc.data()));
      });
  }
}
