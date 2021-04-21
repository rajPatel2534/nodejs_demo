var dbQuery = require('../db/dev/dbQuery');

const getData = async function (req, res) {
    //Body from request
    const reqData = req.body;
  
    //Create your query
    // const query = `SELECT * FROM table_name ;`;

    try{
        // execute query and get result
        // const { rows } = await dbQuery.query(query);
        // return res.status(200).send(rows);

        return res.status(200).send({"msg" : "SUCCESS"})
  
    }catch(e){
      return res.status(500).send({"msg" : "SERVER_ERROR"});
  
    }
}
//Use for exporting multiple function from file  
module.exports = {
    getData
}

//For single export 
// module.exports = getData