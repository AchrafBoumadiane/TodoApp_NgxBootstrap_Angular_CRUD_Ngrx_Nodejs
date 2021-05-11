import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { browserReload } from 'src/app/store/actions/auth.actions';

import { User } from '../models/user';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.store.dispatch(browserReload({ user }));
    }
  }

}
