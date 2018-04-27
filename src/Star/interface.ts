export default interface StarProps {
  isUser: Boolean,
  starred: Boolean,
  toggleStarred: (uid:number)=>void,
  style: {
    color: String,
    size: Number,
  }
}
