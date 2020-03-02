const Service = require('egg').Service;
class AdminController extends Service {

    async login(username) {
        const { app } = this;
        let result = await app.mysql.get('admin', { username });
        return result;
    }

    async regist(forms) {
        const { app } = this;
        let result = await app.mysql.insert('admin', { username: forms.username, password: forms.password });
        return result;
    }

    async query(formData) {
        const { app } = this;
        const TABLE_NAME = 'employee';
            let sql = `select * from ${TABLE_NAME} where 1 and deptid=${formData.deptid} and name like "%${formData.keyword}%"`;
            const result = await this.app.mysql.query(sql);
            return result;
    }

    async updata(formData) {
        const { app } = this;
        let result = await app.mysql.update('admin', { username: formData.username, password: formData.password }, {
            where: {
                uid: formData.uid
            }
        })
        return result;
    }
    async del(formData) {
        const { app } = this;
        let result = await app.mysql.delete('admin', { uid: formData.uid })
        return result;
    }

    async add(formData) {
        const { app } = this;
        let result = await app.mysql.insert('admin', { username: formData.username, password: formData.password })
        return result;
    }

}

module.exports = AdminController;