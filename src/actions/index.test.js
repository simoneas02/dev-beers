import * as actions from './index';
import * as types from '../js/constants/action-types';

describe('actions', () => {
  it('should create an action to show item has errored', () => {
    const expectedAction = {
      type: types.ITEMS_HAS_ERRORED,
      id
    }
    expect(actions.itemsHasErrored(true)).toEqual(expectedAction);
  });


  it('should create an action when items is loading', () => {
    const expectedAction = {
      type: types.ITEMS_IS_LOADING,
      id
    }
    expect(actions.itemsIsLoading(true)).toEqual(expectedAction);
  });


  it('should create an action to items Fetch Data Success', () => {
    const items =  []
    const expectedAction = {
      type: types.ITEMS_FETCH_DATA_SUCCESS,
      id
    }
    expect(actions.itemsFetchDataSuccess(items)).toEqual(expectedAction);
  });


  it('should create an action to items Fetch Data Success', () => {
    const items =  []
    const expectedAction = {
      type: types.ITEMS_FETCH_DATA_SUCCESS,
      id
    }
    expect(actions.itemsFetchDataSuccess(items)).toEqual(expectedAction);
  });

})