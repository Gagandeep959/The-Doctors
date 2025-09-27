CREATE TABLE user_info (
    -- Unique identifier for each submission
    id INT AUTO_INCREMENT PRIMARY KEY, 
    
    -- Corresponds to the input name="full_name"
    full_name VARCHAR(255) NOT NULL,
    
    -- Corresponds to the input name="email_address"
    email_address VARCHAR(255) UNIQUE NOT NULL, 
    
    -- Corresponds to the textarea name="user_comments"
    user_comments TEXT,
    
    -- Automatically records the submission time
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
