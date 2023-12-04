import { MongoClient } from "mongodb";



const editHandler = async(req,res) => {
 
 if(req.method === 'PUT')
 {  
    const id = req.nextUrl.searchParams.get('id');
    const data= req.body;

    const client = await MongoClient.connect('mongodb+srv://elnino:cMUuwM513oIUOXLg@cluster0.ivvvgtb.mongodb.net/todos?retryWrites=true&w=majority');
    const db = client.db();

    const todoCollection =db.collection('todos');
    const result = await todoCollection.updateOne({_id:id},{$set:data});
    console.log(result);

    client.close();

    res.status(201).json({message:'todo edited'});

 }
}

export default editHandler