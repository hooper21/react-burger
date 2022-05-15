import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../StoreService';
import { TIngredientsActions } from '../actions/ingredients';
import { TBurgerActions } from '../actions/burger';
import { TOrderActions } from '../actions/order';
import { TAccountActions } from '../actions/account';
import { TWebSocketActions } from '../actions/websocket';

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TIngredientsActions | TBurgerActions | TOrderActions | TAccountActions | TWebSocketActions; // | TWsFeedActions | TWsProfileFeedActions;

export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
export type TAppStore = typeof store;
