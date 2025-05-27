# Advanced Playwright Techniques: Optimizing Speed, Stability, and Cloud Testing
This is the repository for the LinkedIn Learning course `Advanced Playwright Techniques: Optimizing Speed, Stability, and Cloud Testing`. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

## Course Description

This course dives deep into advanced Playwright testing strategies, and is designed to help experienced testers and developers optimize their test suites for speed, stability, and scalability. Learn how to streamline your tests, diagnose and fix bottlenecks, and apply resilient practices that make your testing robust against flakiness. Additionally, explore the power of visual testing using screenshots and snapshots, ensuring UI consistency with minimal resource usage. Finally, instructor Qambar Raza guides you through configuring and running tests on Microsoft Playwright Testing service, enabling you to scale tests effortlessly in the cloud. By the end, you’ll have a high-performing Playwright testing suite ready for modern application needs.

_See the readme file in the main branch for updated instructions and information._
## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing

1. Ensure the following are installed:
   - [Node.js](https://nodejs.org/) (v18 or higher)
   - [npm](https://www.npmjs.com/)
   - [Git](https://git-scm.com/)

2. Clone the repository:

   ```bash
   git clone https://github.com/LinkedInLearning/advanced-playwright-techniques-5210160.git
   cd advanced-playwright-techniques-5210160
   ```

3. Install dependencies and Playwright:

   ```bash
   npm install
   npx playwright install
   ```

4. Run tests:

   ```bash
   npx playwright test
   ```

## Instructor

**Qambar Raza**  
Test Automation Expert and Playwright Enthusiast with 20+ years of experience optimising developer workflows and test execution strategies.

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/qambar-raza).


[0]: # (Replace these placeholder URLs with actual course URLs)

[lil-course-url]: https://www.linkedin.com/learning/advanced-playwright-techniques-optimizing-speed-stability-and-cloud-testing
[lil-thumbnail-url]: https://media.licdn.com/dms/image/v2/D4D0DAQGHxE52KnuJdQ/learning-public-crop_675_1200/B4DZZkgSNWG8AY-/0/1745442907701?e=2147483647&v=beta&t=ms2XvyG0D7-kDyb_SrHN9vj3sYqlE5CRYUbtZ38PXN8

