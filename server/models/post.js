import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// schema是mongoose里会用到的一种数据模式，可以理解为表结构的定义；每个schema会映射到mongodb中的一个collection，它不具备操作数据库的能力
// Schema、Model、Entity的关系请是：
// Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

//定义好了Schema，接下就是生成Model。
//model是由schema生成的模型，可以对数据库的操作
export default mongoose.model('Post', postSchema);
