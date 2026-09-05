/**
 * Volunteer Service
 * API wrapper functions for volunteer-related endpoints
 */

// import apiClient from './api';
// import { API_ENDPOINTS } from '../constants/api';

// export interface VolunteerFormData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   date_of_birth: string;
//   street_address: string;
//   city: string;
//   state: string;
//   pincode: string;
//   current_occupation?: string;
//   organization_institution?: string;
//   highest_education?: string;
//   areas_of_interest: string;
//   availability: string;
//   previous_volunteer_experience?: string;
//   special_skills_or_expertise?: string;
//   what_inspires_you: string;
//   emergency_contact_name: string;
//   emergency_contact_phone: string;
//   document?: File;
// }

// export interface VolunteerResponse {
//   id: number;
//   message: string;
// }

// /**
//  * Submit volunteer application
//  * @param formData - Volunteer form data
//  * @returns Promise with volunteer response
//  * @throws Error if submission fails
//  */
// export const submitVolunteerApplication = async (
//   formData: VolunteerFormData
// ): Promise<VolunteerResponse> => {
//   try {
//     // Create FormData for multipart/form-data request
//     const formDataToSend = new FormData();
    
//     // Add all text fields
//     formDataToSend.append('first_name', formData.first_name);
//     formDataToSend.append('last_name', formData.last_name);
//     formDataToSend.append('email', formData.email);
//     formDataToSend.append('phone', formData.phone);
//     formDataToSend.append('date_of_birth', formData.date_of_birth);
//     formDataToSend.append('street_address', formData.street_address);
//     formDataToSend.append('city', formData.city);
//     formDataToSend.append('state', formData.state);
//     formDataToSend.append('pincode', formData.pincode);
    
//     if (formData.current_occupation) {
//       formDataToSend.append('current_occupation', formData.current_occupation);
//     }
//     if (formData.organization_institution) {
//       formDataToSend.append('organization_institution', formData.organization_institution);
//     }
//     if (formData.highest_education) {
//       formDataToSend.append('highest_education', formData.highest_education);
//     }
    
//     formDataToSend.append('areas_of_interest', formData.areas_of_interest);
//     formDataToSend.append('availability', formData.availability);
    
//     if (formData.previous_volunteer_experience) {
//       formDataToSend.append('previous_volunteer_experience', formData.previous_volunteer_experience);
//     }
//     if (formData.special_skills_or_expertise) {
//       formDataToSend.append('special_skills_or_expertise', formData.special_skills_or_expertise);
//     }
    
//     formDataToSend.append('what_inspires_you', formData.what_inspires_you);
//     formDataToSend.append('emergency_contact_name', formData.emergency_contact_name);
//     formDataToSend.append('emergency_contact_phone', formData.emergency_contact_phone);
    
//     // Add document if provided
//     if (formData.document) {
//       formDataToSend.append('document', formData.document);
//     }
    
//     const response = await apiClient.post<VolunteerResponse>(
//       API_ENDPOINTS.VOLUNTEER,
//       formDataToSend,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     );
    
//     return response.data;
//   } catch (error) {
//     // Error is already handled by axios interceptor, but we can add additional handling here if needed
//     throw error;
//   }
// };


/**
 * Volunteer Service
 * API wrapper functions for volunteer-related endpoints
 */

export interface VolunteerFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  street_address: string;
  city: string;
  state: string;
  pincode: string;
  current_occupation?: string;
  organization_institution?: string;
  highest_education?: string;
  areas_of_interest: string;
  availability: string;
  previous_volunteer_experience?: string;
  special_skills_or_expertise?: string;
  what_inspires_you: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  // document?: File;
}

export interface VolunteerResponse {
  id: number;
  message: string;
}

// 👇 PASTE YOUR WEB APP URL HERE (the one ending in /exec)
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwePsHqbGy97VlR1tUxJ9Y3E34XNs96AEGxEPQ5ecg2Ps3YyJVdgkhP0m8ko_7RTr2G/exec';

/**
 * Submit volunteer application to Google Sheets
 * @param formData - Volunteer form data
 * @returns Promise with volunteer response
 * @throws Error if submission fails
 */
export const submitVolunteerApplication = async (
  formData: VolunteerFormData
): Promise<VolunteerResponse> => {
  try {
    // Map form data to Google Sheet column headers
    const sheetData = {
      Timestamp: new Date().toISOString(),
      FirstName: formData.first_name,
      LastName: formData.last_name,
      Email: formData.email,
      Phone: formData.phone,
      DateOfBirth: formData.date_of_birth,
      StreetAddress: formData.street_address,
      City: formData.city,
      State: formData.state,
      Pincode: formData.pincode,
      CurrentOccupation: formData.current_occupation || '',
      OrganizationInstitution: formData.organization_institution || '',
      HighestEducation: formData.highest_education || '',
      AreasOfInterest: formData.areas_of_interest,
      Availability: formData.availability,
      PreviousVolunteerExperience: formData.previous_volunteer_experience || '',
      SpecialSkills: formData.special_skills_or_expertise || '',
      WhatInspiresYou: formData.what_inspires_you,
      EmergencyContactName: formData.emergency_contact_name,
      EmergencyContactPhone: formData.emergency_contact_phone,
    };

    // Send data to Google Apps Script Web App
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required to avoid CORS issues
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(sheetData).toString(),
    });

    console.log('Data submitted to Google Sheets successfully');

    // Return success response (we can't read the response with no-cors)
    return {
      id: Date.now(),
      message: 'Application submitted successfully!'
    };

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw new Error('Failed to submit application. Please try again.');
  }
};