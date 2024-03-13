function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const ageCategory = document.getElementById('old').value;
    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);
    document.getElementById('bmi').textContent = `KẾT QUẢ : ${bmi.toFixed(2)}`;
    document.getElementById('bmiCategory').textContent = ` ${bmiCategory}`;
    const recommendation = getRecommendation(ageCategory, bmiCategory);
    document.getElementById('bmiCategory').textContent += ` ${recommendation}`;

}

  
  function getBMICategory(bmi) {
    
    if (bmi < 18.5) {
      return 'Dưới chuẩn';
    } else if (18.5 < bmi < 24.9) {
      return 'Bình thường';
    } else if (25.0 < bmi < 29.9) {
      return 'Thừa cân';
    } else if(30.0 < bmi < 34.9) {
      return 'Béo phì cấp 1';
    }
    else if(35.0 < bmi < 39.9) {
        return 'Béo phì cấp 2';
      }
      else {
        return 'Béo phì cấp 3';
      }
  }

  function getRecommendation(ageCategory, bmiCategory) {
    if (ageCategory === 'tn' && bmiCategory === 'Béo phì cấp 1') {
      return 'Khám định kỳ thường xuyên.';
    } else if (ageCategory === 'tn_g' &&  bmiCategory === 'Béo phì cấp 2') {
        return 'Tập thể dục thường xuyên.';
      } else if (ageCategory === 'g' &&  bmiCategory === 'Béo phì cấp 3') {
        return 'Hạn ché ăn mỡ động vật.';
    
      } else {return ''; 
  }
    }