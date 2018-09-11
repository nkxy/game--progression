# Video Game Progression Requirements

## The Problem

Katie’s got a big problem... she buys way too many video games she knows she doesn’t have
time to play. But, you know how it is... they’re on sale… and you gotta buy things on sale.
The real travesty is that she’s so busy programming @ Rangle that she never manages to beat
most games. She has a terrible habit of playing a new game and forgetting about the old
one all too quickly as well… and sometimes so much time has passed that she’ll have to
replay games she already started from the beginning just because she forgot everything!
This is incredibly inefficient, and her backlog of games to play is growing by the month!

Katie needs your help! She’s completely hopeless! She needs a way to catalog her games,
prioritize the games she wants to play most, and keep track of her completion to get caught
up. I will warn you, this journey may be a bit scary and unfamiliar - the road is can be
quite termolterous - but the situation is really quite dire and you are the only one who
can help! Do you accept this grand quest?

## Requirements

* Use Ngrx for state management
* Use feature-based, hierarchical folder/modules
* Use lazy-loading

### Layout

* Route: `/`
* Unknown routes should go to `/`
* Should have a header, body and footer
* Header
  * The title of the application
  * A my-profile button
  * A menu containing buttons for “Dashboard” and “Catalog”
    * The menu button should be highlighted if the user is on that page
* Body contains whatever the current route show display
* Footer
  * A way to quickly set your language between English/French

### Dashboard

* Display the total number of days required for Katie to finish all her uncompleted games
* Show the % complete to finish her entire game catalog
* Show number of completed games
* Show number of uncompleted games

### Games

* Route: `/games`
* If the user goes to `/`, it should redirect to `/games`
* Table listing all game entries, showing columns for
  * A checkbox to select or deselect the entry
  * Game name, which is also a link.
    * Clicking the game name will show a modal dialog to modify:
      * the number of hours played. Required and must a number >= 0
      * The priority to finish the game, from 1 to 10 as selection list. Required.
  * Platform
  * Estimated % Complete
    * Note: Maximum 100%.
    * Calculated by hours played / hours to complete
  * Estimated Completion Date
    * Format: 09/30/2018
  * Priority value
    * Contains up/down arrows to move the entry up or down in priority
    * Only display this column if the table is sorted by priority. Max priority is 10 and
      lowest priority is 1.
* Sort by priority, completion % or date added
  * default: sorted by priority
  * Can be a drop-down list or you can sort by pressing table headers - up to you
* Filters
  * By Game name
  * By Platform (PS4, Switch, 3DS, Wii U, PC)
* Button to delete all selected entries

#### Add Game

* Route: `/games/add`
* Form Fields
  * Name of game.
    * Required.
  * Choice of Platform: PS4, Switch, 3DS, Wii U, PC
    * Can be a drop-down list or radio buttons
  * How many hours to complete game.
    * Based on the values @ https://howlongtobeat.com/.
    * Required
    * Must be a positive number
  * Priority between 1 and 10
    * Required
  * Also track when the game was added before submitting a POST request

### Your Profile

* Route `/your-profile`; `/your-profile/details`
* See Profile Details
  * First and Last name
  * Language
  * Average Number of Hours to game per day
* Edit button to edit these details

#### Edit Your Profile

* Route: `/your-profile/edit`
* Form Fields
  * First and Last name.
    * Required
    * Only alphabet characters
  * Radio buttons to select English or French as the preferred language
  * Average Number of Hours to game per day
    * Required
    * Must be a number >= 0
  * Save and Cancel buttons
    * If the user presses cancel and the form is dirty (the name, language or hours has
      been modified), show a modal dialog asking confirmation if they want to leave without
      saving changes
