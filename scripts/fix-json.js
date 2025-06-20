// Generated by An Kun

const fs = require('fs');
const path = require('path');

function fixPackageJSON(file_path) {
  try {
    console.log(`🔧 Fixing ${file_path}...`);
    
    let content = fs.readFileSync(file_path, 'utf8');
    
    // Remove any content after the last closing brace
    const last_brace_index = content.lastIndexOf('}');
    if (last_brace_index !== -1) {
      content = content.substring(0, last_brace_index + 1);
    }
    
    // Parse and re-stringify to ensure valid JSON
    const parsed = JSON.parse(content);
    const formatted = JSON.stringify(parsed, null, 2);
    
    fs.writeFileSync(file_path, formatted);
    console.log(`✅ Fixed ${file_path}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to fix ${file_path}:`, error.message);
    return false;
  }
}

const files_to_fix = [
  'package.json',
  'packages/webapp/package.json',
  'packages/server/package.json',
  'packages/utils/package.json',
  'packages/shared-types-enums/package.json',
  'packages/answer-utils/package.json'
];

let all_fixed = true;

files_to_fix.forEach(file => {
  if (fs.existsSync(file)) {
    if (!fixPackageJSON(file)) {
      all_fixed = false;
    }
  } else {
    console.log(`⚠️  ${file} not found, skipping...`);
  }
});

if (all_fixed) {
  console.log('✅ All package.json files have been fixed!');
} else {
  console.error('❌ Some files could not be fixed');
  process.exit(1);
}
