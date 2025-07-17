export type Tuser = {
    id:string;
    password:string;
    needspasswordChange:string;
    role:'adming'|'student'|'faculty';
    status:'in-progress'|"blocked";
    isDeleted:boolean
}