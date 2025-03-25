const reviewRepository = require("../../infrastructure/repositories/ReviewsRepository");
const shopRepository = require("../../../shop/infrastructure/repositories/ShopRepository");
const userRepository = require("../../../user/infrastructure/repositories/UserRepository");
// const StaffEntitie = require("../../entities/Staff");

module.exports = class CreateReviewUseCase {
    static async createReview(reviewData) {
        const shopId = await shopRepository.findById(reviewData.shop_id);
    if (!shopId) {
      throw new Error("this shop id does exist");
    }
    const userId = await userRepository.findById(reviewData.user_id);
    if (!userId) {
      throw new Error("this user id does exist");
    }
    // const staffFormated = new StaffEntitie(staffData);
     const a =  await reviewRepository.create(reviewData);
     console.log(a);
    return a;
    }

}
