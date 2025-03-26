module.exports = class UserIdFilter {
    constructor(userId) {
      this.userId = userId;
    }
  
    apply(query) {
      if (this.userId) {
        query.where((builder) => {
          builder
            .where("user1_id", this.userId)
            .orWhere("user2_id", this.userId);
        });
      }
    }
  };
  