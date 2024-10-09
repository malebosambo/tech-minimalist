import { Client } from '@notionhq/client';

const token = "secret_NO66b3smrbPsh3SNJOstLNHvYKt9t8jrbyS6TxiwMZr";

export const notion = new Client({ auth: token });

const blogdb = "6bac60643aee4f65a1a5150155133521";
const newsletterdb = "2a79d6e4fbe144d6bb6b3f0374df1e12";

export const getDatabase = async () => {

  const response = await notion.databases.query({ database_id: blogdb });

  const results = response.results;
  console.log(results);
  return results;
}

export const getPage = async (pageID) => {
  const pageId = pageID;
  const response = await notion.pages.retrieve({ page_id: pageId });
  
  return response;
}

export const createPage = async (formData) => {
  
  const fullname = formData.get.fullname;
  const email = formData.get.email;
  
  const response = await notion.pages.create({
    parent: {
      database_id: newsletterdb
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
