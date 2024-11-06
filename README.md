# English Proficiency Tool
English Proficiency Tool is a web application designed to help students prepare for the IELTS exam. It offers features such as practice tests, score analytics, and personalized recommendations to improve language skills.

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Features](#2-features)
3. [AWS Services Used](#3-aws-services-used)
4. [Prerequisites](#4-prerequisites)
5. [Setup and Installation](#5-setup-and-installation)
6. [Usage](#6-usage)
7. [Contact](#7-contact)

## 1. Project Overview

The English Proficiency Tool, developed for the Gen-AI MOE Challenge, is a comprehensive application aimed at helping students prepare for the IELTS exam by providing realistic test simulations, immediate feedback, and performance analytics. It supports all four IELTS sections (Listening, Reading, Writing, and Speaking) enabling users to practice in an environment that mirrors the official test through personalized score analysis and study recommendations.

## 2. Features

- **Practice Tests**: Full-length mock tests for all IELTS sections.
- **Score Analytics**: In-depth score analysis and feedback.
- **Recommendations**: Personalized study tips based on performance.

## 3. AWS Services Used

- **Amazon S3**: Stores user-uploaded content, such as audio responses and images.
- **AWS Lambda**: Handles serverless computing, executing code for backend processing.
- **Amazon DynamoDB**: NoSQL database used for storing user data and test scores.
- **Amazon Cognito**: Manages user authentication and authorization.
- **Amazon API Gateway**: Exposes API endpoints for front-end interactions.

## 4. Prerequisites

- **AWS Account**: Required for accessing AWS services.
- **Node.js**: Version 14+ required for serverless deployment.
- **AWS CLI**: Installed and configured with proper permissions.

## 5. Setup and Installation

1. **Fork the Repository**  
   - Begin by forking the repository from [https://github.com/bahrain-uob/gen-ai-moe-challenge.git](https://github.com/bahrain-uob/gen-ai-moe-challenge.git) to your GitHub account.

2. **Create a New Project in CodeCatalyst**  
   - First, create a **Space** in CodeCatalyst if you haven’t done so already. Then, set up a new project within this Space and connect it to your cloned repository.

3. **Create Development and Production Environments**  
   - Set up two environments in CodeCatalyst:
     - **Development Environment**: Used for testing changes.
     - **Production Environment**: Name this "Prod" and select the "Production" option.

4. **Set Up IAM Role**  
   - Create an IAM role for the **production** environment with the necessary permissions.

5. **Obtain AWS Access Keys**  
   - Retrieve the AWS Access Key and Secret Key from your AWS account.

6. **Configure AWS Credentials in Development Environment**  
   - In the **Development Environment** in CodeCatalyst, run the following command to configure AWS CLI with the keys obtained:
     ```bash
     aws configure
     ```
   - Enter the Access Key and Secret Key obtained from AWS during configuration.

7. **Install Dependencies in Development Environment**  
   - In the **Development Environment** in CodeCatalyst, navigate to the project directory and install necessary dependencies by running:
     ```bash
     npm install
     ```

8. **Deploy to Development Stage in CodeCatalyst**  
    - In CodeCatalyst’s **Development Environment**, deploy the application to the development stage (`devops-coca`) with:
      ```bash
      npx sst deploy --stage devops-coca
      ```

9. **Update Workflow Configuration**  
    - Modify the workflow configuration to point to the newly created ECR repository.

10. **Commit and Deploy**  
    - Commit any remaining changes to your repository, and monitor the deployment process for completion.

## 6. Usage

1. **Accessing the Tool**  
   - Once the deployment is successfully completed, a link will be provided in the terminal output. This link allows users to directly access the English Proficiency Tool. Simply copy and paste the link into a web browser to begin.

2. **Starting a Practice Test**  
   - Users can choose to take a full-length IELTS practice test or focus on specific sections: Listening, Reading, Writing, or Speaking. This flexibility allows students to customize their practice according to their needs.

3. **Viewing Results**  
   - After completing the test, users will immediately see their results displayed on-screen. The results provide a score and feedback for each section attempted, helping students understand their performance.

4. **Progress Tracking**  
   - Currently, the tool does not support ongoing progress tracking. Each session’s results are displayed immediately after the test but are not saved for future reference.
for details.

## 7. Contact

For questions, feedback, or support regarding the English Proficiency Tool, please reach out to the project maintainers:

- **Email**: [example@example.com](mailto:example@example.com)
- **GitHub Issues**: Feel free to open an issue on the [GitHub repository](https://github.com/yourusername/IELTS-Tool/issues) for bug reports or feature requests.

We welcome contributions and suggestions to help improve this tool for everyone!

