import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "./firebase";


export type Contact = {
  fname: string, 
  lname: string,
  email: string,
  phone: string,
  doNotContact: boolean
}

export async function addContact(contact: Contact){
  const ref = await addDoc(collection(db, 'contacts'), normalizeContact(contact));

  return ref;
}

export async function getAllContacts(){
  const contacts: Array<Contact> = [];
  const qRes = await getDocs(collection(db, 'contacts'));

  qRes.forEach((doc) => {
    contacts.push(doc.data() as Contact);
  })

  return contacts;
}

export async function markAsDoNotContact(contact: Contact){
  const contactsCollectionRef = collection(db, 'contacts');
  const q = query(contactsCollectionRef, where('email', "==", contact.email.toLowerCase()));
  const qRes = await getDocs(q);

  if (qRes.empty)
    return 'No contact found with specified email.';

  qRes.forEach(async (doc) => {
    await updateDoc(doc.ref, {
      doNotContact: true
    });
  })

}

function normalizeContact(contact: Contact){
  const c = {...contact};
  c.fname = capitalize(c.fname);
  c.lname = capitalize(c.lname);
  c.email = c.email.toLowerCase();

  return c;
}

function capitalize(s: string){
  return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1);
}