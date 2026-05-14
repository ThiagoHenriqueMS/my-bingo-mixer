---
name: dogfooding
user-invocable: true
description: 'Use when: dogfooding the bingo mixer project, running automated tests, validating app functionality, checking for regressions, ensuring the app works correctly.'
---

# Dogfooding Skill

This skill performs comprehensive dogfooding on the bingo mixer React application by executing the full test and validation pipeline.

## Workflow Steps

1. **Run Unit Tests**: Execute `npm test` to run all unit tests and ensure core logic is functioning correctly.

2. **Run Linting**: Execute `npm run lint` to check code quality and style consistency.

3. **Build Project**: Execute `npm run build` to validate that the application builds successfully without errors.

4. **Validate Build Output**: Check that the build completes and produces expected output files.

5. **Report Results**: Summarize the results of all checks, highlighting any failures or issues found.

## Expected Outcomes

- All tests pass
- No linting errors
- Successful build
- Clean report indicating the app is ready for use

## Error Handling

If any step fails:
- Capture the error output
- Provide detailed error messages
- Suggest potential fixes based on common issues
- Do not proceed to next steps if critical failures occur

## Usage Notes

This skill is designed for the bingo mixer project and assumes standard npm scripts are configured. It should be run after code changes to validate functionality.