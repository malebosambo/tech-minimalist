'use server';

import { createPage } from 'notion';

export async function subscribe(_currentState, formData) {
  
  try {
    await createPage('personalDetails', formData);
  } catch {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
        return 'Invalid credentials.'
      default:
        return 'Something went wrong.'
      }
    }
  }
}