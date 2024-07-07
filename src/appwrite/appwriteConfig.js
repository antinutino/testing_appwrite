import { Account, Client, Databases } from "appwrite";

// Initialize the Appwrite client
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("668959f5003605e8971a");

export const account = new Account(client);
export const databases = new Databases(client, "66895dfa002638cdcfed");

console.log("Appwrite client configured"); // Debugging line
