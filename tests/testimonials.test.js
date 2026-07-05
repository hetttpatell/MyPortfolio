import { clientFeedback } from '../about/testimonials';

describe("Client Testimonials Verification", () => {
  
  test("Khushi Films is happy with the delivery", () => {
    const feedback = "Het is an exceptional developer who delivered our website ahead of schedule with stunning cinematic scroll effects. Highly recommended!";
    expect(clientFeedback.khushiFilms).toBe(feedback);
  });

  test("House of Biryani owner is satisfied with the brand aesthetic", () => {
    const feedback = "The luxury Mughal theme Het created is beautiful. Our online menu load times are extremely fast, and our customers love the design.";
    expect(clientFeedback.houseOfBiryani).toBe(feedback);
  });

  test("LeadFlow client commends the clean dashboard and UX", () => {
    const feedback = "Het built a highly responsive shared inbox dashboard for us. The interface is intuitive, and the transition animations are very smooth.";
    expect(clientFeedback.leadflow).toBe(feedback);
  });

});
