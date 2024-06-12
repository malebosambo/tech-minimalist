import { Client } from '@notionhq/client';

export const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getDatabase = async () => {
  const response = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID });
  
  const databasePage = response.results.map((page) => {
    
    return {
      id: page.id,
      title: page.properties.Name.title[0]?.plain_text,
      description: page.properties.Description.plain_text,
      date: page.last_edited_time,
      tags: page.properties.Tags.select.name
  }
  });
  
  console.log(response);
  return databasePage;
}

getDatabase();