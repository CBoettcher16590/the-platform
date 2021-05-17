import DatabaseCONNECTION from '../classes/index'
import { PasswordModel } from "./password";


export interface IUser {
    user_id: number,
    user_type_type_id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    date_created: string,
    disable_login: number,
    phoneNumber: Date,
    userDB: Date,
    user_image_link: string,
    bio: string,
    subscription: number,
    sub_end_date: string,
    org_name: string,
    user_status: number


}

interface IUserSignup {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    org_name: string,


}

export interface IUserUpdate {
    imageLink: string,
    email: string,
    phone: string,
    birthdate: string,
    bio: string,
    userID: string,
    password: string,
    userType: string,
    org_name: string,
}

// interface IUserType{
//     user_type: number
// }

export const UserModel = {

    getAll: async (): Promise<IUser[]> => {

        return new Promise((resolve, reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err; // not connected

                const sql = `SELECT * FROM theplatformV2.user`;
                connection.query(sql, function (error: any, results: IUser[]) {
                    connection.release();

                    if (error) {
                        reject(error);
                    } else {
                        resolve(results)
                    }
                });
            });
        });

    },


    getByEmail: async (userEmail: string): Promise<IUser[]> => {

        return new Promise((resolve, reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            var sql = `SELECT * FROM theplatformV2.user WHERE email = ?`;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err; // not connected

                connection.query(sql, [userEmail], function (error: any, results: IUser[]) {
                    connection.release();

                    if (error) {
                        reject(error);
                    } else {
                        resolve(results)
                    }
                });
            });
        });
    },




    getByID: async (userID: string | number): Promise<IUser[]> => {

        return new Promise((resolve, reject) => {

            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;
            var sql = `SELECT * FROM theplatformV2.user WHERE user_id = ?`;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err; // not connected

                connection.query(sql, [userID], function (error: any, results: IUser[]) {
                    connection.release();

                    if (error) {
                        reject(error);
                    } else {
                        resolve(results)
                    }
                });
            });
        });
    },


    createUser: async (user: IUserSignup): Promise<IUserSignup> => {


        return new Promise((resolve, reject) => {
            const hashedPassword: string = PasswordModel.hash(user.password);
            const defaultImg = "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?w=415";
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            var sql = `INSERT INTO user (user_type_type_id, first_name, last_name, email, password, date_created, user_image_link, subscription)
                        VALUES (4, ?, ?, ?, ?, curdate(), ?, 0);`;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err;
                connection.query(sql, [user.first_name!, user.last_name!, user.email!, hashedPassword!, defaultImg], function (error: any, results: IUser[]) {
                    connection.release();
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results[0])
                    }
                });
            });
        });
    },


    createOrg: async (Org: IUserSignup): Promise<IUserSignup> => {


        return new Promise((resolve, reject) => {
            const hashedPassword: string = PasswordModel.hash(Org.password);
            const defaultImg = "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?w=415";
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            var sql = `INSERT INTO user (user_type_type_id, first_name, last_name,  org_name, email, password, date_created, user_image_link)
                        VALUES (${7}, "${Org.first_name!}", "${Org.last_name!}", "${Org.org_name!}", "${Org.email!}", "${hashedPassword!}", curdate(), "${defaultImg}");`;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err; // not connected
                connection.query(sql, function (error: any, results: IUser[]) {
                    connection.release();
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results[0])
                    }
                });
            });
        });
    },




    // login 

    disableLogin: async (user: IUser) => {


        return new Promise((resolve, reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            var sql = `UPDATE user SET disable_login = 1 WHERE user_id= ? ;`;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err; // not connected
                connection.query(sql, [user.user_id], function (error: any, results: IUser[]) {
                    connection.release();

                    if (error) {
                        reject(error);
                    } else {
                        resolve(results[0])
                    }
                });
            });
        });
    },


    enableLogin: async (user: IUser) => {


        return new Promise((resolve, reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            var sql = `UPDATE user SET disable_login = 0 WHERE user_id= ? ;`;

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err; // not connected

                connection.query(sql, [user.user_id], function (error: any, results: IUser[]) {
                    connection.release();

                    if (error) {
                        reject(error);
                    } else {
                        resolve(results[0])
                    }
                });
            });
        });
    },

    editUserProfile: async (userInfo: IUserUpdate) => {

        return new Promise((resolve, reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            //build parameters for sql query.
            var sqlParameters: string = "";
            var sqlData: any = [];
            //IMAGE
            if (userInfo.imageLink) {
                sqlParameters += `user_image_link= ?,`;
                sqlData.push(userInfo.imageLink);
            }
            //EMAIL
            if (userInfo.email) {
                sqlParameters += `email= ?,`;
                sqlData.push(userInfo.email);
            }
            //PHONE
            if (userInfo.phone) {
                sqlParameters += `phone_number=?,`;
                sqlData.push(userInfo.phone);

            }
            //BIRTHDATE
            if (userInfo.birthdate) {
                sqlParameters += `user_BD = ?,`;
                sqlData.push(userInfo.birthdate);

            }
            //BIO
            if (userInfo.bio) {
                sqlParameters += `bio=?,`;
                sqlData.push(userInfo.bio);

            }
            //Password
            if (userInfo.password) {
                const hashedPass: string = PasswordModel.hash(userInfo.password);
                sqlParameters += `password= ?,`;
                sqlData.push(hashedPass);

            }
            //UserType
            if (userInfo.userType) {
                sqlParameters += `user_type_type_id= ?,`;
                sqlData.push(userInfo.userType);

            }

            sqlParameters = sqlParameters.slice(0, -1);
            var sql = `UPDATE user SET ${sqlParameters} WHERE user_id=?;`

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err; // not connected
                connection.query(sql, [...sqlData, userInfo.userID], function (error: any, results: any) {
                    connection.release();
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results)
                    }
                });
            });
        });
    },


    // Org edit profile
    editOrgProfile: async (userInfo: IUserUpdate) => {

        return new Promise((resolve, reject) => {
            const dbConnection = new DatabaseCONNECTION();
            const pool = dbConnection.connection;

            //build parameters for sql query.
            var sqlParameters: string = "";
            //IMAGE
            if (userInfo.imageLink) {
                sqlParameters += `user_image_link='${userInfo.imageLink}',`;
            }
            //EMAIL
            if (userInfo.email) {
                sqlParameters += `email='${userInfo.email}',`;
            }
            //PHONE
            if (userInfo.phone) {
                sqlParameters += `phone_number='${userInfo.phone}',`;
            }
            //BIRTHDATE
            if (userInfo.org_name) {
                sqlParameters += `org_name ='${userInfo.org_name}',`;
            }
            //BIO
            if (userInfo.bio) {
                sqlParameters += `bio='${userInfo.bio}',`;
            }
            //Password
            if (userInfo.password) {
                const hashedPass: string = PasswordModel.hash(userInfo.password);
                sqlParameters += `password='${hashedPass}',`;
            }
            //UserType
            if (userInfo.userType) {
                sqlParameters += `user_type_type_id='${userInfo.userType}',`;
            }

            var sql = `UPDATE user SET ${sqlParameters.slice(0, -1)} WHERE user_id=${userInfo.userID};`

            pool.getConnection(function (err: any, connection: any) {
                if (err) throw err; // not connected
                connection.query(sql, function (error: any, results: any) {
                    connection.release();
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results)
                    }
                });
            });
        });
    },


}
