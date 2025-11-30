// ============================================
// QUIZ LOGIC HELPERS
// ============================================

/**
 * Determines grid layout based on number of options
 * Returns: { columns: number, itemsPerRow: number }
 */
export const getLayoutConfig = (optionsCount) => {
  if (optionsCount <= 4) {
    // Single row: 3 cols each on xs, full width divided equally
    return {
      useColumns: false,
      xs: 12,
      sm: 12 / Math.min(optionsCount, 4),
      itemsPerRow: optionsCount,
    };
  } else {
    // Two columns: 4 items per column
    return {
      useColumns: true,
      xs: 12,
      sm: 6, // 2 columns
      itemsPerRow: Math.ceil(optionsCount / 2),
    };
  }
};

/**
 * Validates input based on question type and validation rules
 */
export const validateAnswer = (question, value) => {
  if (!question) return { valid: false, error: "Invalid question" };

  // Multi-choice validation
  if (question.type === "multi-choice") {
    if (!Array.isArray(value) || value.length === 0) {
      return { valid: false, error: "Please select at least one option" };
    }
    return { valid: true };
  }

  // Single choice validation
  if (
    question.type === "single-choice" ||
    question.type === "gender-selection"
  ) {
    if (!value) {
      return { valid: false, error: "Please select an option" };
    }
    return { valid: true };
  }

  // Input validation
  if (question.type.includes("input")) {
    const inputVal = value?.value || value;

    if (!inputVal || String(inputVal).trim() === "") {
      return { valid: false, error: "This field is required" };
    }

    // Number validation
    if (question.inputType === "number") {
      const num = parseFloat(inputVal);
      if (isNaN(num)) {
        return { valid: false, error: "Please enter a valid number" };
      }

      if (question.validation) {
        const { min, max } = question.validation;
        if (min !== undefined && num < min) {
          return { valid: false, error: `Minimum value is ${min}` };
        }
        if (max !== undefined && num > max) {
          return { valid: false, error: `Maximum value is ${max}` };
        }
      }
    }

    // Text validation
    if (question.inputType === "text" && question.validation) {
      const { minLength, maxLength } = question.validation;
      const textVal = String(inputVal);

      if (minLength && textVal.length < minLength) {
        return {
          valid: false,
          error: `Minimum ${minLength} characters required`,
        };
      }
      if (maxLength && textVal.length > maxLength) {
        return {
          valid: false,
          error: `Maximum ${maxLength} characters allowed`,
        };
      }
    }

    return { valid: true };
  }

  // Date validation
  if (question.type === "date-input") {
    if (!question.allowSkip && !value) {
      return { valid: false, error: "Please select a date" };
    }
    return { valid: true };
  }

  // Info/description pages - always valid
  if (
    [
      "info-page",
      "summary-page",
      "prediction-page",
      "processing-page",
    ].includes(question.type)
  ) {
    return { valid: true };
  }

  return { valid: true };
};

/**
 * Calculate BMI from weight (kg) and height (cm)
 */
export const calculateBMI = (weightKg, heightCm) => {
  if (!weightKg || !heightCm || heightCm === 0) return null;
  const heightM = heightCm / 100;
  return (weightKg / (heightM * heightM)).toFixed(1);
};

/**
 * Get BMI category and color
 */
export const getBMICategory = (bmi) => {
  if (!bmi) return null;
  const bmiNum = parseFloat(bmi);

  if (bmiNum < 18.5) {
    return {
      category: "Underweight",
      color: "#3498db",
      description: "You are underweight for your height.",
    };
  }
  if (bmiNum < 25) {
    return {
      category: "Normal",
      color: "#2ecc71",
      description: "You have a healthy weight for your height.",
    };
  }
  if (bmiNum < 30) {
    return {
      category: "Overweight",
      color: "#f39c12",
      description:
        "You are overweight for your height. Being overweight can increase your risk of developing heart disease.",
    };
  }
  return {
    category: "Obese",
    color: "#e74c3c",
    description:
      "You are obese for your height. This significantly increases health risks.",
  };
};

/**
 * Convert units
 */
export const convertUnits = {
  kgToLbs: (kg) => (kg * 2.20462).toFixed(1),
  lbsToKg: (lbs) => (lbs / 2.20462).toFixed(1),
  cmToFt: (cm) => {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  },
  ftToCm: (feet, inches) => ((feet * 12 + inches) * 2.54).toFixed(0),
};

/**
 * Get image path based on gender and option
 * This is a placeholder - you'll need to implement actual image paths
 */
export const getImagePath = (questionId, optionValue, gender) => {
  // Gender-specific images
  if ([4, 5, 13].includes(questionId)) {
    return `/images/q${questionId}/${gender}/${optionValue}.jpg`;
  }
  // Standard option images
  return `/images/q${questionId}/${optionValue}.jpg`;
};

/**
 * Format answer for display
 */
export const formatAnswer = (question, answer) => {
  if (!answer) return "Not answered";

  if (question.type === "multi-choice") {
    return Array.isArray(answer)
      ? answer
          .map((a) => question.options.find((o) => o.value === a)?.label)
          .join(", ")
      : "None selected";
  }

  if (question.type.includes("input")) {
    const { value, unit } = answer;
    return unit ? `${value} ${unit}` : value;
  }

  if (
    question.type === "single-choice" ||
    question.type === "gender-selection"
  ) {
    return question.options?.find((o) => o.value === answer)?.label || answer;
  }

  return answer;
};

// ============================================
// COMPONENT-SPECIFIC LOGIC
// ============================================

/**
 * QuestionCard logic helpers
 */
export const QuestionCardHelpers = {
  // Check if continue button should be disabled
  isContinueDisabled: (question, selectedOption, multiSelected, inputValue) => {
    if (!question) return true;

    switch (question.type) {
      case "single-choice":
      case "gender-selection":
        return !selectedOption;

      case "multi-choice":
        return !multiSelected || multiSelected.length === 0;

      case "text-input":
      case "weight-input":
      case "height-input":
        return !inputValue || String(inputValue).trim() === "";

      case "date-input":
        return !question.allowSkip && !inputValue;

      // Info pages don't need validation
      case "info-page":
      case "summary-page":
      case "prediction-page":
      case "processing-page":
        return false;

      default:
        return false;
    }
  },

  // Handle multi-choice toggle (with "none" exclusivity)
  handleMultiToggle: (currentSelected, newValue) => {
    const isNoneOption = newValue === "none";
    const hasNone = currentSelected.includes("none");

    // If clicking "none", clear others and select only "none"
    if (isNoneOption) {
      return ["none"];
    }

    // If "none" was selected and clicking another option, remove "none"
    let updated = hasNone
      ? currentSelected.filter((v) => v !== "none")
      : [...currentSelected];

    // Toggle the clicked option
    if (updated.includes(newValue)) {
      return updated.filter((v) => v !== newValue);
    } else {
      return [...updated, newValue];
    }
  },

  // Get current answer from answers object
  getCurrentAnswer: (answers, questionId) => {
    return answers[questionId];
  },
};

// ============================================
// STORAGE HELPERS
// ============================================

export const StorageHelpers = {
  STORAGE_KEY: "quizStorage",

  save: (data) => {
    try {
      localStorage.setItem(StorageHelpers.STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
      return false;
    }
  },

  load: () => {
    try {
      const saved = localStorage.getItem(StorageHelpers.STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error("Failed to load from localStorage:", e);
      return null;
    }
  },

  clear: () => {
    try {
      localStorage.removeItem(StorageHelpers.STORAGE_KEY);
      return true;
    } catch (e) {
      console.error("Failed to clear localStorage:", e);
      return false;
    }
  },

  // Get initial state with defaults
  getInitialState: () => {
    const saved = StorageHelpers.load();
    return (
      saved || {
        currentIndex: 0,
        previousIndex: -1,
        gender: "",
        answers: {},
        language: "en",
        startedAt: new Date().toISOString(),
      }
    );
  },
};
