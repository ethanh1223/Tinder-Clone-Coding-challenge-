#Tinder Clone#

This is the Tinder Clone I built for the Famous.co coding challenge. Including environment setup, this challenge took me 6-7 hours to complete.

##App Assumptions / Limitations##

1. I obviously didn't have real users here, so I created my own users in the 'allUsersReducer'. They each have some personal information, as well as a boolean indicating whether or not they have "liked" me.

2. It wasn't clear to me whether we needed to build the chat component in addition to the matching component, so I went ahead and built both but didn't fully flesh out the chat component. I left a placeholder for where the chat content would go.

3. Because this was a Component-based challenge with only one user, I did not use any persistent database. I easily could have made this a full-stack app if needed. If I actually had multiple users with multiple associations, I would have used a SQL DB (maybe even a graph-based DB) to persist the data.

##Technologies Used##

1. React to render views
2. Redux to manage application-level state
3. Material-UI for React component library
4. Started out using React Router to handle navigation, but, because the navigation was so simple, I decided to just use the tab navigation afforded by Material-UI. Could easily have used React Router here.

##Main Features##

1. Application tracks all users, users you have seen, and users you have matched with

2. Application randomly selects an unseen user to surface in "Swipe" mode.

3. If you and your match both "Like" each other, app notifies you and creates a "Chat Window" for your conversation. You can navigate between the matching and chatting tabs through the notifications as well as the tabs at the top of the app.




The application is also deployed at: 

Please contact me for next steps at ethan.m.harry@gmail.com or 713-582-7011. Thanks so much!

-Ethan Harry.