
import { AppConfig } from "../../types";

export const appConfig: any = {
  "app": {
    "id": "tpl-emp",
    "name": "Employee Directory",
    "version": "1.0.0",
    "description": ""
  },
  "pages": [
    {
      "id": "e1",
      "slug": "e1",
      "name": "Directory",
      "title": "Directory",
      "type": "table",
      "entity": "employees",
      "actions": [
        {
          "label": "Add Employee",
          "type": "create"
        }
      ]
    },
    {
      "id": "e2",
      "slug": "e2",
      "name": "Add Employee",
      "title": "Add Employee",
      "type": "form",
      "entity": "employees"
    }
  ],
  "entities": [
    {
      "name": "employees",
      "label": "Employees",
      "timestamps": true,
      "fields": [
        {
          "name": "name",
          "label": "Full Name",
          "type": "text",
          "required": true,
          "options": [],
          "unique": false,
          "hidden": false
        },
        {
          "name": "department",
          "label": "Department",
          "type": "select",
          "required": false,
          "options": [
            "Engineering",
            "Sales",
            "Marketing",
            "HR",
            "Finance"
          ],
          "unique": false,
          "hidden": false
        },
        {
          "name": "title",
          "label": "Job Title",
          "type": "text",
          "required": false,
          "options": [],
          "unique": false,
          "hidden": false
        },
        {
          "name": "join_date",
          "label": "Join Date",
          "type": "date",
          "required": false,
          "options": [],
          "unique": false,
          "hidden": false
        },
        {
          "name": "active",
          "label": "Active",
          "type": "boolean",
          "required": false,
          "options": [],
          "unique": false,
          "hidden": false
        }
      ]
    }
  ],
  "views": [
    {
      "id": "e1",
      "title": "Directory",
      "type": "table",
      "entity": "employees",
      "actions": [
        {
          "label": "Add Employee",
          "type": "create"
        }
      ]
    },
    {
      "id": "e2",
      "title": "Add Employee",
      "type": "form",
      "entity": "employees"
    }
  ],
  "name": "Employee Directory",
  "auth": {
    "enabled": true,
    "provider": "email",
    "protect": []
  },
  "i18n": {
    "defaultLocale": "en",
    "supportedLocales": [
      "en"
    ],
    "translations": {}
  }
};
