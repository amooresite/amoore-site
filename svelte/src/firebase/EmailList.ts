import {db} from './firebase';
import { ContactList } from './collections';
import type { Contact } from './DataTypes';
import { collection, addDoc, deleteDoc, getDocs, where, query, DocumentReference, QuerySnapshot, DocumentData } from '@firebase/firestore';


export function addEmailToList(contact: Contact): Promise<DocumentReference> {
  //TODO possibly check for duplicate emails
  if (!isValidEmail(contact.email))
    return Promise.reject('Invalid email address');

  return addDoc(collection(db, ContactList), contact);
}

export function removeEmailFromList(email: string): Promise<boolean> {
  //TODO if we prevent duplicates this function can be simplified
  return new Promise((resolve, reject) => {
    getEmailQuerySnapshot(email).then((qs) => {

      qs.forEach(doc => {
        deleteDoc(doc.ref).catch(err => reject(err));
      });

      resolve(true);

    }).catch(err => reject(err));
  });
}

export function getAllEmails(): Promise<Array<string>> {
  return new Promise<Array<string>>((resolve, reject) => {
    const emails = Array<string>();

    getEmailQuerySnapshot().then((qs) => {

      qs.forEach(doc => {
        const docData = doc.data() as Contact
        emails.push(docData.email);
      });

      resolve(emails);

    }).catch(err => reject(err));
  });
}

function isValidEmail(email: string): boolean {
  const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return regexp.test(email);
}

// Get all email documents with specified email. If no email provided get all email documents 
function getEmailQuerySnapshot(email?: string): Promise<QuerySnapshot<DocumentData>> {
  let q = null;

  if (email) {
    q = query(collection(db, ContactList), where('email', '==', email));
  }

  return getDocs(q ? q : collection(db, ContactList));
}