import { MongoClient, ObjectId } from "mongodb";


const delHandler = async(req,res) => {
 if(req.method === 'DELETE')
 {
    const id= req.body;

    const client = await MongoClient.connect('mongodb+srv://elnino:cMUuwM513oIUOXLg@cluster0.ivvvgtb.mongodb.net/todos?retryWrites=true&w=majority');
    const db = client.db();

    const todoCollection =db.collection('todos');
    const result = await todoCollection.deleteOne({_id:new ObjectId(id)});
    console.log(result);

    client.close();

    res.status(201).json({message:'todo deleted'});

 }
}

export default delHandler
