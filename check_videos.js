const fs = require('fs');
const path = require('path');

// Read the file content
const content = fs.readFileSync(path.join(__dirname, 'js/lesson-content.js'), 'utf8');

// Extract the LESSON_CONTENT object
// This is a bit hacky but avoids evaluating the whole file which might depend on other things
const match = content.match(/const LESSON_CONTENT = ({[\s\S]*?});/);
if (!match) {
    console.log("Could not find LESSON_CONTENT");
    process.exit(1);
}

// We need to be careful about evaluating this because it might contain backticks/template literals
// Let's try to eval it in a safe-ish way or just use regex to find keys and video properties
const lessonContentStr = match[1];

// Regex to find lesson keys "1": { ... }
const lessonKeys = [];
const videoKeys = [];

const lines = lessonContentStr.split('\n');
let currentLesson = null;

lines.forEach(line => {
    const keyMatch = line.match(/"(\d+)":\s*{/);
    if (keyMatch) {
        currentLesson = keyMatch[1];
        lessonKeys.push(currentLesson);
    }

    if (currentLesson && line.includes('video: {')) {
        videoKeys.push(currentLesson);
    }
});

const missing = lessonKeys.filter(key => !videoKeys.includes(key));

console.log(`Total Lessons: ${lessonKeys.length}`);
console.log(`Lessons with Videos: ${videoKeys.length}`);
console.log(`Missing Videos for Lessons: ${missing.join(', ')}`);
