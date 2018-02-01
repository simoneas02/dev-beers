import {
	ITEMS_HAS_ERRORED,
	ITEMS_IS_LOADING,
	ITEMS_FETCH_DATA_SUCCESS,
	ITEM_SELECTED
} from '../js/constants/action-types';

export function itemsHasErrored(bool) {
  return {
      type: ITEMS_HAS_ERRORED,
      hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
      type: ITEMS_IS_LOADING,
      isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
      type: ITEMS_FETCH_DATA_SUCCESS,
      items
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
			.then((response) => {
				if (!response.ok) {
						throw Error(response.statusText);
				}

				dispatch(itemsIsLoading(false));

				return response;
			})
			.then((response) => response.json())
			.then((items) => dispatch(itemsFetchDataSuccess(items)))
			.catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function itemSelected(item) {
    return {
      type: ITEM_SELECTED,
      item
    }
  }