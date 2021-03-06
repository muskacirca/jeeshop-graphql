import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'

import {
    GraphQLRoot
} from './Model'

import {
    CreateCatalogMutation,
    ModifyCatalogMutation,
    DeleteCatalogMutation,
    CreateCatalogLocalizedContentMutation,
    ModifyCatalogLocalizedContent,
    DeleteCatalogLocalizedContent
} from './catalog/CatalogMutation'

import {
    CreateCategoryLocalizedContentMutation,
    CreateCategoryMutation,
    ModifyCategoryMutation,
    DeleteCategoryMutation,
    ModifyCategoryLocalizedContent,
    DeleteCategoryLocalizedContent
} from './categories/CategoriesMutation'

import {
    CreateProductMutation,
    ModifyProductMutation,
    DeleteProductMutation,
    CreateProductLocalizedContent,
    ModifyProductLocalizedContent,
    DeleteProductLocalizedContent
} from './product/ProductMutation'

import {
    CreateSKUMutation,
    ModifySKUMutation,
    DeleteSKUMutation,
    DeleteSKULocalizedContent,
    CreateSKULocalizedContent,
    ModifySKULocalizedContent

} from './product/SKUMutation'

import {
    CreateDiscountMutation,
    ModifyDiscountMutation,
    DeleteDiscountMutation,
    CreateDiscountLocalizedContent,
    ModifyDiscountLocalizedContent,
    DeleteDiscountLocalizedContent
} from './discount/DiscountMutation'

let Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createCatalog: CreateCatalogMutation,
    modifyCatalog: ModifyCatalogMutation,
    deleteCatalog: DeleteCatalogMutation,
    createCatalogLocalizedContent: CreateCatalogLocalizedContentMutation,
    modifyCatalogLocalizedContent: ModifyCatalogLocalizedContent,
    deleteCatalogLocalizedContent: DeleteCatalogLocalizedContent,

    createCategoryMutation: CreateCategoryMutation,
    modifyCategoryMutation: ModifyCategoryMutation,
    deleteCategoryMutation: DeleteCategoryMutation,
    createCategoryLocalizedContent: CreateCategoryLocalizedContentMutation,
    modifyCategoryLocalizedContent: ModifyCategoryLocalizedContent,
    deleteCategoryLocalizedContent: DeleteCategoryLocalizedContent,

    createProductMutation: CreateProductMutation,
    modifyProductMutation: ModifyProductMutation,
    deleteProductMutation: DeleteProductMutation,
    createProductLocalizedContent: CreateProductLocalizedContent,
    deleteProductLocalizedContent: DeleteProductLocalizedContent,
    modifyProductLocalizedContent: ModifyProductLocalizedContent,

    createSKU: CreateSKUMutation,
    modifySKU: ModifySKUMutation,
    deleteSKU: DeleteSKUMutation,
    deleteSKULocalizedContent: DeleteSKULocalizedContent,
    createSKULocalizedContent: CreateSKULocalizedContent,
    modifySKULocalizedContent: ModifySKULocalizedContent,

    createDiscount: CreateDiscountMutation,
    modifyDiscount: ModifyDiscountMutation,
    deleteDiscount: DeleteDiscountMutation,
    createDiscountLocalizedContent: CreateDiscountLocalizedContent,
    modifyDiscountLocalizedContent: ModifyDiscountLocalizedContent,
    deleteDiscountLocalizedContent: DeleteDiscountLocalizedContent
  }
});

export var Schema = new GraphQLSchema({
  query: GraphQLRoot,
  mutation: Mutation
});
