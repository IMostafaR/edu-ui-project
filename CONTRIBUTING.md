## Team Members and Contributors

This project is a collaborative effort by the following contributors:

1. Ahmed Mostafa Saleh
2. Ahmed Mohamed Kassem
3. Omar Elsayed Elfar
4. Mostafa Ragab Fathi
5. Rahem Salah
6. Yasmine Ahmed Moussa

---

## Project Organization and Workflow

- Each level will be developed in its dedicated branch:

  - **`level-1-html-css-js`**: Native HTML, CSS, and JS.
  - **`level-2-react`**: React.js implementation.
  - **`level-3-nextjs`**: Next.js implementation.

- **Master Branch**: The `master` branch will serve as the production-ready branch.
- **Pull Requests (PRs)**:
  - Each contributor works on their assigned feature/issue in a separate branch.
  - Submit PRs to the relevant level branch for review before merging.

---

## Contribution Guidelines

1. Clone the repository.
2. Work on your assigned task in a feature branch.
3. Ensure your code follows proper formatting and standards.
4. Create a detailed pull request with a summary of your changes.

---

## Setting Up the Project

This guide outlines the steps for team members to collaborate effectively on the project.

### **1. Cloning the Repository**

```bash
git clone https://github.com/<your-username>/edu-ui-project.git
```

Replace `<your-username>` with your actual GitHib username.

### **2. Navigate to the project directory:**

```bash
cd edu-ui-project
```

### **3. Fetching or Pulling the Latest Changes**

```bash
git fetch --all
```

- **Purpose**: Fetches updates from a remote repository but does not merge them into your current branch.

```bash
git pull
```

- **Purpose**: Fetches updates from a remote repository and merges them into your current branch.

### **4. Switch to the desired branch to start development:**

```bash
git checkout level-1-html-css-js
```

### **5. Creating a Personal Branch**

Each team member must create their own branch from working branch such as `level-1-html-css-js`.

#### Branch Naming Convention

Use the format:
`<level-number>/<name>/<feature-or-task>`

Examples:

- `level-1/ahmed-mostafa/course-page`
- `level-1/yasmine-moussa/navbar`
- `level-1/omar-elsayed/footer`

#### Creating and Switching to Your Branch

```bash
git checkout -b <level-number>/<name>/<feature-or-task>
```

Example:

```bash
git checkout -b level-1/ahmed-mostafa/course-page
```

### **6. Working on Your Branch**

- Work only within your personal branch.

### **7. Submitting Changes to the branch**

Once your task is complete:

1. Push your branch to GitHub:

```bash
git push origin <level-number>/<name>/<feature-or-task>
```

2. On GitHub, create a Pull Request (PR) to merge your branch into the working branch such as `level-1-html-css-js`.

   - Provide a clear description of the changes in the PR.
   - Assign the PR to the team leader or reviewers for approval.

### **8. Keeping Your Branch Updated**

Regularly update your branch with the latest changes from level-1-html-css-js to avoid merge conflicts:

1. Fetch the latest changes:

```bash
git fetch origin
```

2. Merge updates into your branch:

```bash
git merge level-1-html-css-js
```

3. Resolve any merge conflicts if necessary.
