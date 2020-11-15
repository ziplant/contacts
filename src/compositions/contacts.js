import { reactive } from "vue";
import useHistory from "@/compositions/history";

export default function useContacts() {
  const { pushHistory, popHistory } = useHistory();

  const contacts = reactive([]);

  // simple id generatator
  const nextId = (arr) => {
    let id = 1;
    while (arr.map((el) => el.id).includes(id)) id++;

    return id;
  };

  const getContact = (contactId) => {
    return contacts.find((el) => el.id == contactId);
  };

  const addContact = (title) => {
    if (!title) return false;

    let contact = {
      id: nextId(contacts),
      title: title,
      fields: [],
      history: [],
    };

    return contacts.push(contact);
  };

  const removeContact = (contactId) => {
    let contact = contacts.find((el) => el.id == contactId);

    return contact ? contacts.splice(contacts.indexOf(contact), 1) : false;
  };

  const editField = (contactId, fieldData, saveHistory = true) => {
    let contact = contacts.find((el) => el.id == contactId);

    if (contact) {
      let field = contact.fields.find((el) => el.id == fieldData.id);

      if (field) {
        if (saveHistory) {
          pushHistory(contact.history, field, "edit");
        }

        Object.keys(fieldData).forEach((key) => {
          field[key] = fieldData[key];
        });

        return field;
      } else {
        field = fieldData;
        field.id = nextId(contact.fields);

        if (saveHistory) {
          pushHistory(contact.history, field, "add");
        }

        return contact.fields.unshift(fieldData);
      }
    }

    return false;
  };

  const removeField = (contactId, fieldId, saveHistory = true) => {
    let contact = contacts.find((el) => el.id == contactId);

    if (contact) {
      let field = contact.fields.find((el) => el.id == fieldId);

      if (saveHistory) {
        pushHistory(contact.history, field, "remove");
      }

      return field
        ? contact.fields.splice(contact.fields.indexOf(field), 1)
        : false;
    }

    return false;
  };

  const stepBack = (contactId) => {
    let contact = contacts.find((el) => el.id == contactId);

    let historyItem = popHistory(contact.history);

    if (!historyItem) return;

    switch (historyItem.action) {
      case "add":
        removeField(contactId, historyItem.data.id, false);
        break;
      case "edit":
        editField(contactId, historyItem.data, false);
        break;
      case "remove":
        editField(contactId, historyItem.data, false);
        break;
    }
  };

  return {
    contacts,
    getContact,
    addContact,
    removeContact,
    editField,
    removeField,
    stepBack,
  };
}
