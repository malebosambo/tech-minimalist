import { Client } from '@notionhq/client';

const token = "secret_NO66b3smrbPsh3SNJOstLNHvYKt9t8jrbyS6TxiwMZr";

export const notion = new Client({ auth: token });

const notiondb = "6bac60643aee4f65a1a5150155133521";


export const getDatabase = async () => {

  const response = await notion.databases.query({ database_id: notiondb });

  /*
  const databasePage = response.results.map((page) => {
    
    return {
      id: page.id,
      title: page.properties.Name.title[0]?.plain_text,
      description: page.properties.Description.plain_text,
      date: page.last_edited_time,
      tags: page.properties.Tags.select.name
  }
  });
  */

  const results = response.results;
  console.log(results);
  return results;
}

export const getPage = async (pageID) => {
  const pageId = pageID;
  const response = await notion.pages.retrieve({ page_id: pageId });
  
  return response;
}

export const createPage = async (credentials, formData) => {
  
  const fullname = formData.get.fullname;
  const email = formData.get.email;
  
  const response = await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_SUBSCRIBERS_DB_ID
    },
    properties: {
      Fullname: {
        title: [
          {
            text: {
              content: fullname
            }
          }  
        ]
      },
      Email: {
        rich_text: [
          {
            text: {
              content: email
            }
          }
        ]
      }
    }
  });
  
  return response;
}

getDatabase();
getPage();
