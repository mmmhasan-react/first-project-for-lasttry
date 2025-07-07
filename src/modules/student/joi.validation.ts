import Joi from 'joi'


export const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required'
  }),

  name: Joi.object({
    firstName: Joi.string()
      .trim()
      .regex(/^[A-Z][a-z]*$/)
      .required()
      .messages({
        'string.empty': 'First name is required',
        'string.pattern.base': 'First name must be capitalized'
      }),
    middleName: Joi.string().required().messages({
      'string.empty': 'Middle name is required'
    }),
    lastName: Joi.string().required().messages({
      'string.empty': 'Last name is required'
    })
  }).required().messages({
    'object.base': 'Student name is required'
  }),

  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': 'Gender must be male or female'
  }),

  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of birth is required'
  }),

  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email address'
  }),

  contactNumber: Joi.string().required().messages({
    'string.empty': 'Contact number is required'
  }),

  emergencyContactNumber: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required'
  }),

  bloodGroup: Joi.string().valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-").required().messages({
    'any.only': 'Invalid blood group'
  }),

  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required'
  }),

  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required'
  }),

  guardian: Joi.object({
    fatherName: Joi.string().max(20).required().messages({
      'string.empty': 'Father name is required',
      'string.max': 'Father name must not be more than 20 characters'
    }),
    fatherContactNumber: Joi.string().required().messages({
      'string.empty': 'Father contact number is required'
    }),
    fatherOccupation: Joi.string().required().messages({
      'string.empty': 'Father occupation is required'
    }),
    motherName: Joi.string().required().messages({
      'string.empty': 'Mother name is required'
    }),
    motherContactNumber: Joi.string().required().messages({
      'string.empty': 'Mother contact number is required'
    }),
    motherOccupation: Joi.string().required().messages({
      'string.empty': 'Mother occupation is required'
    })
  }).required().messages({
    'object.base': 'Guardian information is required'
  }),

  localGurdian: Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'Local guardian name is required'
    }),
    contactNumber: Joi.string().required().messages({
      'string.empty': 'Local guardian contact number is required'
    }),
    occupation: Joi.string().required().messages({
      'string.empty': 'Local guardian occupation is required'
    }),
    address: Joi.string().required().messages({
      'string.empty': 'Local guardian address is required'
    })
  }).required().messages({
    'object.base': 'Local guardian information is required'
  }),

  profileImage: Joi.string().required().messages({
    'string.empty': 'Profile image is required'
  }),

  isActive: Joi.string().valid('active', 'blocked').default('active')
})
