# Akshit Demo Web Shop Playwright Capstone

This project is a Playwright JavaScript automation capstone for the Demo Web Shop e-commerce application.

Website under test: https://demowebshop.tricentis.com/

## Objective

The suite validates customer-facing e-commerce areas with Page Object Model classes, Playwright fixtures, Allure reporting, and GitHub Actions support.

## Coverage

| Service | Test Cases |
|---|---:|
| Authentication | 15 |
| Product and Search | 15 |
| Cart | 15 |
| Wishlist and Compare | 15 |
| User Profile and Account | 15 |
| Address and Shipping | 15 |
| Checkout and Payment | 15 |
| Customer Support and Information | 15 |

Total automated test cases: **120**

Configured browser projects:

| Browser | Executions |
|---|---:|
| Chromium | 120 |
| Firefox | 120 |
| WebKit | 120 |

Total cross-browser executions: **360**

## Tech Stack

- Playwright Test
- JavaScript
- Node.js
- Allure Report
- GitHub Actions
- GitHub Pages

## Project Structure

```text
Akshit_Capstone
|-- .github
|   `-- workflows
|       `-- allure-report.yml
|-- api
|   `-- apiClient.js
|-- data
|   `-- demoWebShopData.js
|-- docs
|   |-- Capstone_Day_Wise_Schedule.docx
|   |-- Demo_Web_Shop_Capstone_Testing_Plan.docx
|   |-- Demo_Web_Shop_Capstone_Testing_Plan.pdf
|   `-- Playwright_Notes.pdf
|-- fixtures
|   `-- baseFixture.js
|-- pages
|   |-- addressShipping.page.js
|   |-- authentication.page.js
|   |-- base.page.js
|   |-- cart.page.js
|   |-- checkoutPayment.page.js
|   |-- customerSupport.page.js
|   |-- product.page.js
|   |-- userProfile.page.js
|   `-- wishlistCompare.page.js
|-- screenshots
|-- tests
|   |-- address-shipping
|   |-- authentication
|   |-- cart
|   |-- checkout-payment
|   |-- customer-support
|   |-- product
|   |-- user-profile
|   `-- wishlist-compare
|-- playwright.config.js
|-- package.json
|-- package-lock.json
`-- README.md
```

## Commands

```bash
npm install
npm run test:list
npm test
npm run report
npm run test:allure
```

The suite uses one worker to keep remote demo-site traffic stable and runs across Chromium, Firefox, and WebKit.
