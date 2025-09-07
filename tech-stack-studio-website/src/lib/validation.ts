export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  project: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate contact form data
export const validateContactForm = (
  data: ContactFormData
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Required field validation
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: "name", message: "Name is required" });
  } else if (data.name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "Name must be at least 2 characters",
    });
  } else if (data.name.trim().length > 100) {
    errors.push({
      field: "name",
      message: "Name must be less than 100 characters",
    });
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!emailRegex.test(data.email.trim())) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    });
  } else if (data.email.trim().length > 255) {
    errors.push({
      field: "email",
      message: "Email must be less than 255 characters",
    });
  }

  if (!data.project || data.project.trim().length === 0) {
    errors.push({ field: "project", message: "Project type is required" });
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.push({ field: "message", message: "Project details are required" });
  } else if (data.message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Project details must be at least 10 characters",
    });
  } else if (data.message.trim().length > 5000) {
    errors.push({
      field: "message",
      message: "Project details must be less than 5000 characters",
    });
  }

  // Optional field validation
  if (data.company && data.company.trim().length > 100) {
    errors.push({
      field: "company",
      message: "Company name must be less than 100 characters",
    });
  }

  return errors;
};

// Sanitize form data
export const sanitizeFormData = (data: ContactFormData): ContactFormData => {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    company: data.company?.trim() || "",
    budget: data.budget?.trim() || "",
    message: data.message.trim(),
    project: data.project.trim(),
  };
};

// Check for common spam patterns
export const checkForSpam = (data: ContactFormData): boolean => {
  const spamPatterns = [
    /\b(?:viagra|cialis|casino|lottery|winner|congratulations)\b/i,
    /\b(?:click here|visit now|act now|limited time)\b/i,
    /\b(?:free money|easy money|make money fast)\b/i,
    /\b(?:seo services|digital marketing|increase traffic)\b/i,
    /(?:http|https):\/\/[^\s]+/g, // Multiple URLs
  ];

  const textToCheck =
    `${data.name} ${data.email} ${data.company} ${data.message}`.toLowerCase();

  return spamPatterns.some((pattern) => pattern.test(textToCheck));
};

// Rate limiting helpers
export const getRateLimitKey = (ip: string): string => {
  return `contact_form_${ip}`;
};

export const isRateLimited = (submissions: number): boolean => {
  // Allow max 5 submissions per hour
  return submissions >= 5;
};
