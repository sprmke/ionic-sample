export const STATUS = {
    ACT : 'ACTIVE',
    ARC : 'ARCHIVED',
};

export const HTTP_STATUS_CODES = {
    BAD_REQUEST : 400,
    UNAUTHORIZED : 401,
    FORBIDDEN: 403,
    SERVER_ERROR: 500,
};

export const SINKING_REGIONAL_TERM = {
    DEFAULT: 'Sinking Fund',
    NSW : 'Capital Works' ,
    VIC: 'Maintenance Fund',
    WA: 'Reserve Fund'
};

export const STRATA_PLAN_REGIONAL_TERM = {
    DEFAULT: 'Strata Plan',
    VIC: 'Owner\'s Corporation',
    WA: 'Strata Company',
    SA: 'Strata Corporation',
    TAS: 'Strata Corporation',
    NT: 'Strata Corporation'
};

export const LEVY_FREQUENCY = {
    1: 'Annual',
    2: 'Bi-Annual',
    3: 'Tri-Annual',
    4: 'Quarterly',
    12: 'Monthly',
    DEFAULT: ''
};

export const ERROR_MESSAGES = {
    EXPIRED_SESSION: 'Session expired, Please login to continue.',
    NOT_AUTHORIZED: 'Unauthorized, Please login to continue.',
    DEFAULT: 'Something went wrong! Please try again.',
    // Cognito errors
    NEW_PASSWORD_REQUIRED: 'You must change your password to continue.',
    CANT_RESET_PASSWORD: 'Current user account state cannot reset password',
    USER_DISABLED: 'User is disabled.',
    NotAuthorizedException: 'Incorrect email or password.',
    UserNotFoundException: 'User does not exist.',
    LimitExceededException: 'Attempt limit exceeded, please try again later.',
    ExpiredCodeException: 'Expired code, please request a new one.',
    CodeMismatchException: 'Invalid code provided.'
};

export const NUMBER_LITERALS = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten'
};

export const MEETING_TYPE = {
   AGM: 'Annual General Meeting',
   EXTRAORDINARY: 'Extraordinary General Meeting',
   INAGURAL: 'Inagural Meeting',
   EXECUTIVE: 'Strata Committee Meeting',
   ADJOURNED: 'Adjourned Meeting',
   SPECIAL: 'Special General Meeting',
   STRATA: 'Strata Committee Meeting'
};

export const DOCUMENT_TYPE_ID = {
    MEETING_MINUTES: 99999907,
    MEETING_NOTICE: 99999906
};
