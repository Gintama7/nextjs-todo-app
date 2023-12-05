import { MongoClient, ObjectId } from "mongodb";


const editHandler = async(req,res) => {
 if(req.method === 'PUT')
 {
    const {id,...data}= req.body;

    const client = await MongoClient.connect('mongodb+srv://elnino:cMUuwM513oIUOXLg@cluster0.ivvvgtb.mongodb.net/todos?retryWrites=true&w=majority');
    const db = client.db();

    const todoCollection =db.collection('todos');
    const result = await todoCollection.updateOne({_id:new ObjectId(id)},{$set:data});
    console.log(result);

    client.close();

    res.status(201).json({message:'todo completed'});

 }
}

export default editHandler
