export function VolunteerForm() {
  return `
    <div class="vol-form-wrap reveal">
      <form id="volunteerForm">
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="firstName">First Name *</label>
            <input class="form-input" type="text" id="firstName" name="firstName" placeholder="Arjun" required/>
          </div>
          <div class="form-group">
            <label class="form-label" for="lastName">Last Name *</label>
            <input class="form-input" type="text" id="lastName" name="lastName" placeholder="Sharma" required/>
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Email Address *</label>
            <input class="form-input" type="email" id="email" name="email" placeholder="arjun@email.com" required/>
          </div>
          <div class="form-group">
            <label class="form-label" for="phone">Phone Number</label>
            <input class="form-input" type="tel" id="phone" name="phone" placeholder="+91 98765 43210"/>
          </div>
          <div class="form-group full">
            <label class="form-label" for="city">City / State *</label>
            <input class="form-input" type="text" id="city" name="city" placeholder="e.g. Bilaspur, Chhattisgarh" required/>
          </div>
          <div class="form-group full">
            <label class="form-label" for="role">Area of Interest *</label>
            <select class="form-select" id="role" name="role" required>
              <option value="">Select a role...</option>
              <option value="content">Content Writing</option>
              <option value="data">Data & Research</option>
              <option value="marketing">Digital Marketing</option>
              <option value="education">Field Education</option>
              <option value="environment">Environment Volunteer</option>
              <option value="finance">Finance & Operations</option>
              <option value="social-work">Social Work</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group full">
            <label class="form-label" for="motivation">Why do you want to volunteer? *</label>
            <textarea class="form-textarea" id="motivation" name="motivation" placeholder="Tell us about your passion for social impact..." required></textarea>
          </div>
        </div>
        <button type="submit" class="form-submit">Submit Application ✦</button>
      </form>
      <div class="form-success" id="formSuccess">
        <div class="form-success-icon">🎉</div>
        <h3>Welcome to the Family!</h3>
        <p>Thank you for applying! Our team will reach out within 48 hours. Together, we will make India a little more compassionate. 💛</p>
      </div>
    </div>
  `;
}
