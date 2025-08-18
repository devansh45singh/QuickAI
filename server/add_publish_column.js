import 'dotenv/config';
import sql from './configs/db.js';

async function addPublishColumn() {
  try {
    console.log('Adding publish column to creations table...');
    console.log('Database URL exists:', !!process.env.DATABASE_URL);
    
    // Check if column already exists first
    const columnExists = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'creations' AND column_name = 'publish'
    `;
    
    if (columnExists.length > 0) {
      console.log('Publish column already exists!');
      return;
    }
    
    // Add the publish column
    await sql`ALTER TABLE creations ADD COLUMN publish BOOLEAN DEFAULT FALSE`;
    
    console.log('Successfully added publish column to creations table!');
    
  } catch (error) {
    console.error('Error adding publish column:', error.message);
  }
  
  process.exit(0);
}

addPublishColumn();
