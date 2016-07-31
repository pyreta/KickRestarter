## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
    * **Discover**
      * Category Index Header
        * **Sorted By Dropdown**
      * Category Index
        * **Category Show Page**
          * Campaign Index
    * **Start a Campaign**
      * Category Form
        * Campaign Form Index
          * **Basics Form**
          * **Rewards Form**
          * **Story Form**
          * **About You Form**
          * **Account Form**
          * Campaign Preview Pane
          * Submit Button
      * **Campaign Show Page**
    * **About Us**
      * About information
    * **Logo**
    * Search
    * **Log In Form**
    * **Sign Up Form**
    * **Menu Dropdown**
      * **ProfileShowPage**
  * Promotions Slideshow
    * **Promotion Component**
  * Campaigns We Love
    * **Campaign Index Item**
    * Featured campaign category pane
    * Various project preview pages
  * Recommended for You  
    * Campaign Index  
      * **Campaign Index Item**
  * What's Popular   
    * Campaign Index   
      * **Campaign Index Item**
  * Where Campaigns come from
    * **Start a Campaign**
      * (shown above)
  * Footer
    * Various Links

## Routes

* **component:** `App` **path:** `/`
  * **component** `Discover` **path:** `/discover index `
    * **component** `CategoryShowPage` **path:** `/discover/:category`
  * **component** `NewCampaignForm` **path:** `/start`
    * **component** `BasicsForm` **path:** `/campaigns/:authorId/:campaignId/edit#the-basics`
    * **component** `RewardsForm` **path:** `/campaigns/:authorId/:campaignId/edit#rewards`
    * **component** `StoryForm` **path:** `/campaigns/:authorId/:campaignId/edit#story`
    * **component** `AboutYouForm` **path:** `/campaigns/:authorId/:campaignId/edit#about-you`
    * **component** `AccountInfoForm` **path:** `/campaigns/:authorId/:campaignId/edit#account-info`
    * **component** `CampaignShowPage` **path:** `/campaigns/:authorId/:campaignId`
  * **component** `AboutUs` **path:** `/about`
  * **component** `LogoRedirect` **path:** `/`
  * **component** `LoginForm` **path:** `/login`
  * **component** `SignupForm` **path:** `/signup`
  * **component** `ProfileShowPage` **path:** `/profile/:userId `
