// @desc get goals 
// 2route get/api/goals
//access Private

const getGoal = (req, res) => {
    res.status(200).json({ message: 'get goals' });
}



// @desc post  goals 
// 2route get/api/goals
//access Private
 const setGoal = (req , res) =>{
    if(!req.body.text){
         res.status(400)
         throw new Error ('Please add a text field');
    }
    res.status(200).json({message : 'set goals'})
 }

// @desc update goals 
// 2route get/api/goals/id
//access Private
 const updateGoal = (req , res) =>{
    // const goalid = req.params.id;
    res.status(200).json({  message :` update goals ${req.params.id}`})
 }

// @desc delete goals 
// 2route get/api/goals/id
//access Private

const deleteGoal = (req , res) =>{
    res.status(200).json({ message : ` delete goals ${req.params.id}`})
}

module.exports = { getGoal , setGoal , updateGoal , deleteGoal };
