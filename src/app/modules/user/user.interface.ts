export type Tuser = {
    id:string;
    password:string;
    needspasswordChange:boolean;
    role:'adming'|'student'|'faculty';
    status:'in-progress'|"blocked";
    isDeleted:boolean
}