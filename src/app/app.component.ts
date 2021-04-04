import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CocktailsActions from './cocktails/store/cocktails.actions';
import * as AuthActions from './auth/store/auth.actions';
import * as fromApp from './store/app.reducer';
import * as ShoppingListActions from 'src/app/shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'cocktails-app';

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new CocktailsActions.StartLoadStorage());
    this.store.dispatch(new AuthActions.AutoLogin());
  }

}
