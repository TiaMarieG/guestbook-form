CREATE DATABASE guestbook;

CREATE TABLE guests(
	id INT AUTO_INCREMENT,
	firstName VARCHAR(255),
    lastName VARCHAR(255),
    jobTitle VARCHAR(255),
    company VARCHAR(255),
    linkedInUrl VARCHAR(255),
    email VARCHAR(255),
    howDidMeet VARCHAR(255),
    otherMeet VARCHAR(255),
    message VARCHAR(255),
    mailingList VARCHAR(25),
    mailingType VARCHAR(25),
    timestamp DATETIME DEFAULT NOW(),
    
    PRIMARY KEY (id)
);

SELECT * FROM guests;

-- Testing to make sure it works
INSERT INTO guests (firstName, lastName, jobTitle, company, linkedInUrl, email, howDidMeet, message, mailingList, mailingType)
VALUES ('Dovrin', 'Solunaar', 'Bounty Hunter', 'Acron', 'www.hunter.com', 'hunter@gmail.com', 'Bounty', 'Hello', 'yes', 'Text');

SELECT * FROM guests;