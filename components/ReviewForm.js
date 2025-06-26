const reviewForm = {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="form.name">

      <label for="review">Review:</label>
      <textarea id="review" v-model="form.review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model="form.rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label for="recommend">Would you recommend this product?</label>
      <select id="recommend" v-model="form.recommend">
        <option value="">Select...</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <input class="button" type="submit" value="Submit">
    </form>
  `,
  setup(props, { emit }) {
    const form = reactive({
      name: '',
      review: '',
      rating: null,
      recommend: ''
    })

    const onSubmit = () => {
        
        if (form.name === '' || form.review === '' || form.rating === null || form.recommend === '') {
            alert('Review is incomplete. Please fill out all fields.')
            return
        }
        const productReview = {
            name: form.name,
            review: form.review,
            rating: form.rating,
            recommend: form.recommend
        }
        console.log(productReview)
        emit('review-submitted', productReview)
        form.name = ''
        form.review = ''
        form.rating = null
        form.recommend = ''
    }
    return {
      form,
      onSubmit
    }
  }
}