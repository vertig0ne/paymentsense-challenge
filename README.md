# CodingChallenge
Paymentsense coding challenge

## Setup
* Please download latest dotnet core (3+) -> https://dotnet.microsoft.com/download/dotnet-core

## Issues

Initial challenges were due to build envirionment (Dockerised Code-Server, does not support e2e testing in it's current configuration).
This also made using 127.0.0.1 a challenge due to port forwarding.

Task 1) Fixed up some bad naming and using the connections. This allowed the green thumbs up. Kept it during the development process as it allowed a "basic" check to ensure the API was running on the back end.

Task 2) No issues, got this setup relatively quickly.

Task 3) Adding caching on API, this took longer than expected and refactored the code several times to ensure unit testing.

Task 4) Refactored the website slightly to allow for material design layouts across the website, this made life a little easier as I did not have to design the table or pagination components, which saved reinventing the wheel, although in the future I would have probably used bootstrap as this is what I am more familiar with.

Task 5) No real challenges, had to make a few internal functions that would format the data correctly for some of the outputs as they were embedded within objects within the country object itself.

Due to time constraints, I was not able to complete the code with testing capabilities. However confirmed all parts of the code did indeed "work". Had I had another 2-4 hours to complete the testing, it would be complete. I was also looking into adding sessionStorage into the website portion of the code to reduce calls to the API until the browser tab was closed (which in hindseight should have been done instead of at the API level).