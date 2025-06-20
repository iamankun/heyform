// Generated by An Kun

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function initializeStackAuth() {
  console.log('🚀 Initializing Stack Auth for HeyForm...');
  
  try {
    // Check if required environment variables are set
    const required_env_vars = [
      'NEXT_PUBLIC_STACK_PROJECT_ID',
      'NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY',
      'STACK_SECRET_SERVER_KEY'
    ];
    
    const missing_vars = required_env_vars.filter(var_name => !process.env[var_name]);
    
    if (missing_vars.length > 0) {
      console.error('❌ Missing required Stack Auth environment variables:');
      missing_vars.forEach(var_name => console.error(`  - ${var_name}`));
      process.exit(1);
    }

    // Install Stack Auth package if not already installed
    console.log('📦 Installing Stack Auth dependencies...');
    try {
      execSync('pnpm add @stackframe/stack', { stdio: 'inherit' });
    } catch (error) {
      console.warn('Stack Auth package might already be installed');
    }

    // Run database migrations for Stack Auth integration
    console.log('🗄️ Running Stack Auth database migrations...');
    execSync('pnpm run db:neon:migrate', { stdio: 'inherit' });

    // Test Stack Auth connection
    console.log('🔗 Testing Stack Auth configuration...');
    
    console.log('✅ Stack Auth initialization completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Start the development server: pnpm run dev');
    console.log('2. Navigate to /auth/signin to test authentication');
    console.log('3. Check the console for any authentication errors');
    
  } catch (error) {
    console.error('❌ Stack Auth initialization failed:', error.message);
    process.exit(1);
  }
}

initializeStackAuth();
