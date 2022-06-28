# twitter-trends

> API to get last 24 hrs top twitter trends in India.

* Node backend runs cron job each hour and scrapes top twitter trends using headless chrome(puppeteer).
* Saves into `db.json` file using node file module.
* The json file is served through `http` server on localhost.

---
## Installation
`git clone https://github.com/Abhinav4279/twitter-trends`\
`cd twitter-trends`\
`npm install`

## Running Development Server
`npm start`

## Usage
`curl http://localhost:3000/`

## Example
#### Request
`curl http://localhost:3000/`

#### Response
```json
[
  [
    "#zubairarrest",
    "#NavrajHans",
    "#zoobear",
    "#InnovateWithTHub",
    "#IndiaWithDelhiPolice",
    "Nupur Sharma",
    "CBI PBS Key 2 SSRCase Mystery",
    "HBD JASMIN BHASIN",
    "Alt News",
    "JoyEBike INDvsIRE",
    "दिल्ली पुलिस",
    "Hindu Gods",
    "Youth Upliftment Camps",
    "Spine Of The Nation",
    "Nelson Piquet",
    "cbi probe anild vaze inssrcase",
    "Kabir is God",
    "Cilic",
    "sushant our sunshine",
    "Ketaki",
    "Journalist",
    "Matteo Berrettini",
    "My Education",
    "नरसिम्हा राव",
    "respect motherhood",
    "b.ed",
    "श्री राम",
    "Arnab",
    "Teesta",
    "Vrinda Grover"
  ],
  [
    "#zubairarrest",
    "#NavrajHans",
    "#zoobear",
    "#InnovateWithTHub",
    "#IndiaWithDelhiPolice",
    "Nupur Sharma",
    "CBI PBS Key 2 SSRCase Mystery",
    "JoyEBike INDvsIRE",
    "HBD JASMIN BHASIN",
    "Alt News",
    "दिल्ली पुलिस",
    "Hindu Gods",
    "Youth Upliftment Camps",
    "Spine Of The Nation",
    "Nelson Piquet",
    "cbi probe anild vaze inssrcase",
    "Kabir is God",
    "Cilic",
    "sushant our sunshine",
    "Ketaki",
    "Journalist",
    "Matteo Berrettini",
    "My Education",
    "नरसिम्हा राव",
    "respect motherhood",
    "b.ed",
    "श्री राम",
    "Arnab",
    "Teesta",
    "Vrinda Grover"
  ],
  [
    "#zubairarrest",
    "#zoobear",
    "#NavrajHans",
    "#InnovateWithTHub",
    "#IndiaWithDelhiPolice",
    "Nupur Sharma",
    "JoyEBike INDvsIRE",
    "CBI PBS Key 2 SSRCase Mystery",
    "HBD JASMIN BHASIN",
    "Alt News",
    "दिल्ली पुलिस",
    "Hindu Gods",
    "Youth Upliftment Camps",
    "Spine Of The Nation",
    "Nelson Piquet",
    "cbi probe anild vaze inssrcase",
    "Kabir is God",
    "Cilic",
    "sushant our sunshine",
    "Ketaki",
    "Journalist",
    "My Education",
    "नरसिम्हा राव",
    "respect motherhood",
    "b.ed",
    "श्री राम",
    "Arnab",
    "Vrinda Grover",
    "teesta",
    "Berrettini"
  ],
  [
    "#zubairarrest",
    "#NavrajHans",
    "#zoobear",
    "#InnovateWithTHub",
    "#IndiaWithDelhiPolice",
    "Nupur Sharma",
    "JoyEBike INDvsIRE",
    "CBI PBS Key 2 SSRCase Mystery",
    "HBD JASMIN BHASIN",
    "Alt News",
    "दिल्ली पुलिस",
    "Hindu Gods",
    "Youth Upliftment Camps",
    "Spine Of The Nation",
    "Nelson Piquet",
    "cbi probe anild vaze inssrcase",
    "Kabir is God",
    "Cilic",
    "sushant our sunshine",
    "Ketaki",
    "Journalist",
    "My Education",
    "नरसिम्हा राव",
    "respect motherhood",
    "b.ed",
    "श्री राम",
    "Arnab",
    "Vrinda Grover",
    "teesta",
    "Berrettini"
  ]
]
```
