import { MongoClient } from "mongodb";


const handler = async(req,res) => {
 if(req.method === 'POST')
 {
    const data= req.body;

    const client = await MongoClient.connect('mongodb+srv://elnino:cMUuwM513oIUOXLg@cluster0.ivvvgtb.mongodb.net/todos?retryWrites=true&w=majority');
    const db = client.db();

    const todoCollection =db.collection('todos');
    const result = await todoCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({message:'todo added'});

 }
}

export default handler
