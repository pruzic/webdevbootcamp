{"filter":false,"title":"user.js","tooltip":"/Associations/models/user.js","undoManager":{"mark":19,"position":19,"stack":[[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":1}],[{"start":{"row":1,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["//USER","var userSchema = new mongoose.Schema({","    email: String,","    name: String,","    posts: [","            {","                type: mongoose.Schema.Types.ObjectId,","                ref: \"Post\"","            }","        ]","});","","var User = mongoose.model(\"User\", userSchema);",""],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":34},"action":"insert","lines":["var mongoose = require(\"mongoose\");","mongoose.Promise = global.Promise;"],"id":3}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"remove","lines":["var User"],"id":4},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["o"],"id":5}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["d"],"id":6}],[{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["u"],"id":7}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["l"],"id":8}],[{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":["e"],"id":9}],[{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["."],"id":10}],[{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["e"],"id":11}],[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":["x"],"id":12}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["p"],"id":13}],[{"start":{"row":14,"column":7},"end":{"row":14,"column":10},"action":"remove","lines":["exp"],"id":14},{"start":{"row":14,"column":7},"end":{"row":14,"column":10},"action":"insert","lines":["exp"]}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":12},"action":"insert","lines":["  "],"id":15}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"remove","lines":[" "],"id":16}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"remove","lines":[" "],"id":17}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["o"],"id":18}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["r"],"id":19}],[{"start":{"row":14,"column":7},"end":{"row":14,"column":12},"action":"remove","lines":["expor"],"id":20},{"start":{"row":14,"column":7},"end":{"row":14,"column":14},"action":"insert","lines":["exports"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":14},"end":{"row":14,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1489426077701,"hash":"000273f802af06def5c489d75d7a645cd429aeb7"}