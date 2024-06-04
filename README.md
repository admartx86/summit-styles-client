# Welcome to summit-styles-client!

![Summit Styles banner](https://summit-styles.s3.us-east-2.amazonaws.com/summit-styles-logo-533-100-px.png)

## About this Project

To a visitor, the Summit Styles website may appear to be an e-commerce store for an outdoor clothing retailer but it is simply a web development portfolio project. 

This project is divided into a front end (this repository), and a back end at [summit-styles-server](https://github.com/admartx86/summit-styles-server).

## Pages

### Home 

`/`

&nbsp;&nbsp;&nbsp;&nbsp;`<HomeSection1 />`

&nbsp;&nbsp;&nbsp;&nbsp;A banner which links to the New & Featured shop category.

&nbsp;&nbsp;&nbsp;&nbsp;`<CategoryCarousel />`

&nbsp;&nbsp;&nbsp;&nbsp;A carousel with links to each of the six shop categories. It uses a third-party library called [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel).

&nbsp;&nbsp;&nbsp;&nbsp;`<HomeSection3 />`

&nbsp;&nbsp;&nbsp;&nbsp;A banner which links to the Sale shop category.

### Shop 

`/shop` always redirects to `/shop/sale`.

`/shop/sale` `/shop/new-featured` `/shop/womens` `/shop/mens` `/shop/kids` `/shop/bags-gear`

&nbsp;&nbsp;&nbsp;&nbsp;`<ProductList />`

&nbsp;&nbsp;&nbsp;&nbsp;A responsive list of product previews by category.

`/shop/product/:productId`

&nbsp;&nbsp;&nbsp;&nbsp; `<ProductPage />`

&nbsp;&nbsp;&nbsp;&nbsp;An individual product page.


### Favorites 

`/favorites`

&nbsp;&nbsp;&nbsp;&nbsp;`<Favorites />`

&nbsp;&nbsp;&nbsp;&nbsp;Items which the user has added to their "Favorites" are displayed here.

### Cart 

`/cart`

&nbsp;&nbsp;&nbsp;&nbsp;`<ShoppingCart />`

&nbsp;&nbsp;&nbsp;&nbsp;Items which the user has added to their shopping cart are displayed here.

### Sign In / Register 

`/account`

&nbsp;&nbsp;&nbsp;&nbsp;`<MyAccount />`

&nbsp;&nbsp;&nbsp;&nbsp;Users can sign in to an existing account or register a new account here.

&nbsp;&nbsp;&nbsp;&nbsp;If they are already signed in, they can sign out or sign in to a different account ("switch accounts").

## Contexts

Summit Styles uses React Context API to manage state.

### CartContext

`<CartContext/>`

Allows the user to add and remove items to and from their shopping cart.

Allows the number of items in the cart to be displayed over the cart icon in the main navigation menu.

### FavoritesContext

`<FavoritesContext/>`

Allows the user to add and remove items to and from their "Favorites".

Allow the number of items in a user's favorites to be displayed over the favorites icon in the main navigation menu.

Allows a red outline to be displayed around items in the Shop page which are in the user's favorites.

### UserContext

`<UserContext/>`

Along with `<usePresistedUser/>`, allows the user to stay logged in with their name displayed at the top of the screen in main navigation.

## Additional Components

`<MainNavigation/>`

Displayed on every page in the header. Becomes `</HamburgerMenu>` at smaller screen sizes.

`<FooterLinks/>` `<SocialMediaLinks/>` `<Newsletter/>`

Displayed on every page in the footer. For this project, they just help to give the apperance of a real e-commerce storefront.