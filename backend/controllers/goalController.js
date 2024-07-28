// @desc get goals 
// 2route get/api/goals
//access Private

const getGoals = (req, res) => {
    res.status(200).json({ message: 'get goals' });
}



// @desc get goals 
// 2route get/api/goals
//access Private
 const postGoals = (req , res) =>{
    res.status(200).json({message : 'post goals'})
 }

// @desc get goals 
// 2route get/api/goals
//access Private
 const putGoals = (req , res) =>{
    res.status(200).json({  message :` put goals ${req.prams.id}`})
 }

// @desc get goals 
// 2route get/api/goals
//access Private

const deleteGoals = (req , res) =>{
    res.status(200).json({ message : ` delete goals ${req.params.id}`})
}

module.exports = { getGoals , postGoals , putGoals , deleteGoals };
