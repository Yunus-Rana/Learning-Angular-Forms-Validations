# Forms Validations

A small Angular application demonstrating a responsive profile form with
client-side validation using reactive forms.

## Features

- Validates a name, email address, and password as the user enters details.
- Shows field-specific validation messages after a field is touched or edited.
- Disables submission while the form is invalid.
- Resets all fields with the Reset button.
- Uses a responsive layout, visible keyboard focus states, and reduced-motion
  support.

## Validation rules

| Field | Rules |
| --- | --- |
| Name | Required, 2–20 characters, letters and spaces only |
| Email | Required, valid email address |
| Password | Required, at least 8 characters, including a letter and a number |

## Getting started

Requires Node.js and npm.

```bash
npm install
npm start
```

Open the local URL printed by the Angular development server (normally
`http://localhost:4200/`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Build the application for production |
| `npm run watch` | Rebuild on changes using the development configuration |
| `npm test` | Run the unit tests |

Submitting a valid form currently writes its values to the browser console.
This demo does not send form data to a server.
