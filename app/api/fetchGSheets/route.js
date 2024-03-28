import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const GET = async (req, res) => {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GSHEET_CLIENT_EMAIL,
      key: process.env.GSHEET_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const doc = new GoogleSpreadsheet(
      process.env.GSHEET_PUBLIC_DOCUMENT,
      serviceAccountAuth
    );

    await doc.loadInfo();
    let data = [];

    for (let i = 0; i < doc.sheetCount; i++) {
      const sheet = doc.sheetsByIndex[i];
      const rows = await sheet.getRows();

      data = [
        ...data,
        ...rows.map((row) => {
          return {
            id: parseInt(row._rawData[0]),
            category: row._rawData[1],
            type: row._rawData[2],
            name: row._rawData[3],
            theme: row._rawData[4],
            link: row._rawData[5],
            image: row._rawData[6],
          };
        }),
      ];
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

export { GET };
