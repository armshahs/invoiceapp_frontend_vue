# invoiceapp_frontend_vue




# InvoiceApp Frontend using Vue.js
![image](https://github.com/armshahs/invoiceapp_frontend_vue/assets/57282258/1b6a9fa3-12d6-4c17-be81-d63c4e5fd301)

## Overview

This project is the frontend application for InvoiceApp, built using Vue.js. It provides a user interface for creating, managing, and viewing invoices. This frontend application communicates with the backend API to perform CRUD operations on invoices and interact with other features of the InvoiceApp.

**Links:**

Backend code - https://github.com/armshahs/invoicing_app_django

Product demo - https://www.youtube.com/watch?v=XpkBB3E0O5I

## Features

- **Invoice Creation:** Create new invoices with customizable details.
- **Invoice Management:** View, edit, and delete existing invoices.
- **Dashboard:** Visualize invoice statistics and summaries.
- **Responsive Design:** User-friendly interface optimized for various devices.
- **Integration:** Communicate with the backend API for data synchronization.

## Installation

### Prerequisites

- Node.js
- Vue CLI

### Steps

1. Clone the repository:

```bash
git clone https://github.com/armshahs/invoiceapp_frontend_vue.git
```

2. Navigate to the project directory:

```bash
cd invoiceapp_frontend_vue
```

3. Install dependencies:

```bash
npm install
```

4. Configure API endpoint:
   - Open `src/services/api.js` file.
   - Update the `baseURL` variable with the URL of your backend API.

5. Start the development server:

```bash
npm run serve
```


## Usage

1. Login to the InvoiceApp using your credentials.
2. Navigate through the dashboard to view invoice statistics.
3. Create new invoices by providing necessary details.
4. View, edit, or delete existing invoices from the invoice list.
5. Ensure proper synchronization with the backend API for real-time updates.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/my-feature` or `git checkout -b bugfix/fix-issue`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to your branch: `git push origin feature/my-feature`.
5. Submit a pull request detailing your changes.
