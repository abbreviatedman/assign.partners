# assign.partners-model

### A partner-pairing app. (The model portion, anyway.)

`assign.partners` pairs work partners together. It has the following features:

* It manages multiple rosters.
* It tracks for each member of a roster how many times they've been paired with each other member.
* It randomly assigns partners from among a roster.
* It allows manual reassignment.


### Usage

assign.partners has an [API](https://www.howtogeek.com/343877/what-is-an-api/) for managing your roster(s).

**Endpoints**

GET /users/{id}

Returns the given user.

Accessible to: the given logged-in user.

---

POST /users

Creates a new user.

Accessible to: any non-logged-in user.

---

GET /users/{id}/rosters

Returns the rosters for the given user.


Accessible to: any non-logged-in user.

---

GET /users/{id}/roster/{id}

Returns the given roster for the given user.

---

GET 

---

More to come! (Definite WIP, here.)
