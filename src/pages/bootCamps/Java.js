import React from 'react'
import{motion} from 'framer-motion'
function Java() {
  return (
    <motion.div
    intial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
        <h2>JAVAزبان برنامه نویسی</h2>
        <p>(java) یک زبان برنامه نویسی شی‌ءگرای محبوب است که در سال 1995 توسط جیمز آرتور گاسلینگ منتشر شده است. این زبان در ابتدا برای دستگاه‌های ستاپ باکس طراحی شده بود اما امروزه برای ایجاد برنامه‌های وب و موبایل استفاده می‌شود. در حال حاضر جاوا متعلق به شرکت اوراکل است و بیش از 3 میلیارد دستگاه بر پایه این زبان اجرا می‌شود. همچنین این زبان مستقل از پلتفرم است یعنی بر هر نوع سیستم‌عامل و سخت‌افزار قابل‌اجرا است</p>
      
    </motion.div>
  )
}

export default Java
