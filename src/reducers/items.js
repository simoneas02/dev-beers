import {
	ITEMS_HAS_ERRORED,
	ITEMS_IS_LOADING,
	ITEMS_FETCH_DATA_SUCCESS,
	ITEM_SELECTED
} from '../js/constants/action-types';

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
      case ITEMS_HAS_ERRORED:
          return action.hasErrored;

      default:
          return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
      case ITEMS_IS_LOADING:
          return action.isLoading;

      default:
          return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
      case ITEMS_FETCH_DATA_SUCCESS:
          return action.items;

      default:
          return state;
  }
}

export function itemSelected(state = null, action) {
    switch(action.type) {
      case ITEM_SELECTED:
        return action.item;
    }
    return state;
  }