export interface StarProps {
  isUser: Boolean,
  starred: Boolean,
  toggleStarred: (uid:number)=>void,
  style: StarStyle
}

export interface StarStyle {
  color: String,
  size: Number
}