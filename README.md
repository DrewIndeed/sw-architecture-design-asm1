<h1 align="center">Welcome to eeet2582-asm1-s3820098 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D9.1.2-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D19.1.0-blue.svg" />
  <a href="https://github.com/DrewIndeed/sw-architecture-design-asm1#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/DrewIndeed/sw-architecture-design-asm1/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/DrewIndeed/sw-architecture-design-asm1/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/DrewIndeed/eeet2582-asm1-s3820098" />
  </a>
</p>

> New generation website for The Princess of Arena Cam Ranh Home

### 🏠 [Target Sample: Cam Ranh Home at Booking.com](https://www.booking.com/hotel/vn/the-princess-of-arena-cam-ranh-home.en-gb.html)

### ✨ [Deployed Here!!!](https://eeet2582-asm1-anle-s3820098-c2022.vercel.app)


## Screenshots

### Login Page

![Login Page](https://i.imgur.com/JuhBopD.png "Login Page")

### Visitor Home Page

![Visitor Home Page](https://i.imgur.com/A8ZHyp0.jpg "Visitor Home Page")

## Best Features

- Custom Logo


- FULLY responsive


- Simple Login Logout


- Simple booking with remote UPDATE API


- Stunning photos galleries


- Simple admin dashboard to update information at USERS view


## Prerequisites

- npm >=9.1.2
- node >=19.1.0

## Install

```sh
yarn install
```

## Usage
- For starting dev version:

```sh
yarn dev
```
- For building optimized and starting build version:

```sh
yarn build && yarn preview
```

## Important Notes and Assumptions

### Data sources

- REST APIs are used to interract with a simple JSON holder called https://jsonbin.io


- Meaning initial hotel information and updating its info are done ONLINE using APIs, not only LOCALLY.


### Dummy accounts

- Login/Logout mechanism: using local storage for keeping track of current user, who can either be a visitor or an admin. When information has been filled, simple string comparisions are done with local variables to validate those info and simulate a successful login session.


- To login as a visior, try:

```sh
Username: visitor1
Password: visitor1-pwd
```

- To login as an admin, try:

```sh
Username: admin1
Password: admin1-pwd
```

### Visitors: relating to bookings

- To begin booking process, hover at More button on navigation bar and select Booking Now


- Each booking will be stored as a ticket and a visitor can only book ONE room of certain type at  a moment


- The price of a booking ticket is calculated as ROOM RATE x NUMBER OF STAYING DATES, in USD


- There is no RESERVATION feature, meaning future bookings. 


- The end of the Booking Flow is Check Out, which is paying for bookings. However, due to time limitation, it has not been implemented. By this reason, ONLY remote JSON is updated and simple message is displayed.

### Admin: relating to updating info

- Due to time limitation, admin can only update the name, address and description of the hotel.

- Info are AUTOMATICALLY REVALIDATED on UI after they are updated successfully

## Author

👤 **Le Nguyen Truong An**

* LinkedIn: [@https:\/\/www.linkedin.com\/in\/truonganln\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/truonganln\/)
* Student Email: s3820098@rmit.edu.vn
* Personal Email: truongan1730@gmail.com
* Github: [@DrewIndeed](https://github.com/DrewIndeed)

## Dependencies Overview

![Dependencies Overview](https://i.imgur.com/ra0zPzE.png "Dependencies Overview")

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Le Nguyen Truong An](https://github.com/DrewIndeed).<br />
This project is [MIT](https://github.com/DrewIndeed/sw-architecture-design-asm1/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_