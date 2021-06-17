import {createSelector} from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );

export const selectCollection = categoryUrlParam => 
createSelector(
    [selectCollections],
    collections => collections[categoryUrlParam]
)
// exemplo: na url está hats, então COLLECTION_ID_MAP[hats] deve retornar o 1