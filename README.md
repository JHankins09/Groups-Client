# Groups

This repo is built in tandem with https://github.com/JHankins09/Groups-API-Rebuild

## Getting Started

### Planning

#### Initial User Stories
* As a user, I want to be able to create, join, or leave a group.

* As a user, I want to be able to post messages to my group.

* As a group member, I want to be able to see other members of my group.

* As a user, I want to be able to see when there is new content in a group I've joined.

#### Initial Wire framing

Client - https://app.moqups.com/4UD0R7wRns/view/page/ad64222d5
ERD - https://media.git.generalassemb.ly/user/21061/files/f0035200-ac63-11e9-81a6-46ff58fe4864


#### This project was planned to be built in 3 primary parts:
  1. Build out API
  * Build out API to allow for user, membership, group relationships
  * Apply relationships that allow for creation and deletion of groups and to tie them to user accounts
  * Update for protected and open read functionality
  2. Development of Client
    * Build out user authentication functionality including sign-up, sign-in, change-password, etc.
    * Build groups content for creating and viewing groups - as well as ability to delete groups
    * Build out membership functionality to join groups and delete if you are a member of said group. Also allows to leave groups and see roster of members.
  3. Adpot API feedback for additional Client functionality
    * As funtionality grew, updated API feedback to allow for additional data to be transfered to Client
  4. Include additional bonus feature
    * Group validation for 1 group by said name.
    * Group type drop-down list for more precise badges
    * Membership validtation to only allow 1 membership per group/member pair.

### Development Process

Majority of time was spent developing API back end. This was a difficult process.

Additional experience with Rails will ideally allow for uniqui groups and user/group pairs, etc and a much speedier API build.

Front end became a bit unruley as it grew. Many views and some API calls are slower than an average user may navigate the app, but overall a decent flow. Some jarring relocations to the home nav can be slightly disorienting, but this can be updated as additional functionality becomes available.
ment.


## Unresolved issues / features for future release

- Responsive Design
  * Mobile UI
  * Tablet UI

- Interactive UI
  * Stronger form usage
  * Higher sign-up rate upon visit

- Automatic Sign In

- calendar for group event scheduling

- group chat/post function for member communication

- group roster email macro.

- SEO enabled

- Smoother navigation and landing pages

## Built With (technologies used)

### The technologies include in the build of this game are:
- JavaScript
- JSON
- AJAX
- CSS
- HTML
- Ruby
- Ruby on Rails
- Handlebars.js

## Versioning

### Scripts - Client

#### User
  This houses all AJAX and JS functionality that impacts user account creation, login, or changes.

#### Groups
  This hosues all AJAX and JS functionality that impacts the creation, editing, and deletion of unique groups.

#### Memberships
  This houses all AJAX and JS functionality that impacts the creation and deletion of memberships.

#### General
  This houses all JS functionality that does not explicetly fall in the above. -Does not communicate to API-

### Scripts - API

#### Controllers
  ##### Groups
    - Contains all ruby based code base for handling of Group specific resources in API
  ##### Memberships
    - Contains all ruby based code base for handling of Membership specific resources in API
  ##### Users
    - Contains all ruby based code base for handling of User specific resources in API

#### Models
  ##### Groups
    - Contains all model and class type orientations for Groups resources
  ##### Memberships
    - Contains all model and class type orientations for Memberships resources
  ##### Users
    - Contains all model and class type orientations for Users resources

#### Serializers
  ##### Groups
    - Determines returned data from Groups resource (primary table)
  ##### Memberships
    - Determines returned data from Memberships resource (Join table)
  ##### Users
    - Determines returned data from Users resource (primary table)

## Author
### James B. Hankins

LinkedIn:   https://www.linkedin.com/in/james-hankins/
GitHub:     https://github.com/JHankins09

## Acknowledgments
This project is built as the result of participating in General Assembly Boston's Software Engineering Immersive course.
