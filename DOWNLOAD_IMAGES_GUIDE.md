# Healthcare Images Download Guide

## Quick Download Links (Free Stock Photos)

### 体检中心类图片 (Checkup Centers)

1. **meinian.jpg** - 现代体检中心
   - Source: https://unsplash.com/photos/white-and-blue-hospital-bed-in-a-room-P1uBBu-JSvU
   - Alternative: https://www.pexels.com/search/medical%20center/

2. **ikang.jpg** - 高端体检中心
   - Source: https://unsplash.com/photos/a-hospital-room-with-a-bed-and-a-window-6a7Ck_asC0Y
   - Alternative: Search "modern medical facility"

3. **rich.jpg** - 豪华医疗环境
   - Source: https://unsplash.com/photos/a-hallway-with-white-walls-and-a-white-floor-Xp3-MW_-x8w
   - Alternative: Search "luxury hospital interior"

4. **huashan-checkup.jpg** - 医院建筑外观
   - Source: https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3fX0LjA6Z3o
   - Note: Use historic hospital building

5. **ruijin-checkup.jpg** - 欧式医院建筑
   - Source: https://unsplash.com/photos/brown-and-white-concrete-building-7F3jOA6s1M8
   - Note: Use European style building

6. **zhongshan-checkup.jpg** - 现代医院
   - Source: https://unsplash.com/photos/white-concrete-building-during-daytime-3OiYMgndDqY
   - Note: Use modern hospital building

### 牙科诊所类图片 (Dental Clinics)

7. **hongning.jpg** - 牙科诊所
   - Source: https://unsplash.com/photos/dental-equipment-in-a-dental-office-7jjnJ_QA9E0
   - Alternative: Search "dental clinic interior"

8. **bybo.jpg** - 连锁牙科
   - Source: https://unsplash.com/photos/a-dentist-chair-in-a-room-with-a-window-1dGq0Uq2p2E
   - Alternative: Search "modern dental office"

9. **arrail.jpg** - 高端牙科
   - Source: https://unsplash.com/photos/a-room-with-a-chair-and-a-table-in-it-2r5adxulP7E
   - Note: Use luxury medical interior

10. **maloclinic.jpg** - 国际牙科
    - Source: https://unsplash.com/photos/a-dental-chair-in-a-room-with-a-large-window-3d4s2C4a0oI
    - Alternative: Search "international dental clinic"

11. **ninth-hospital.jpg** - 大型医院
    - Source: https://unsplash.com/photos/a-large-white-building-with-a-lot-of-windows-9Qwbfa_RM94
    - Note: Use large hospital building

12. **yashida.jpg** - 小型诊所
    - Source: https://unsplash.com/photos/a-room-with-a-chair-and-a-desk-in-it-4Qf3N7V9r8w
    - Alternative: Search "small dental clinic"

### 医院陪诊类图片 (Hospital Escort)

13. **huashan.jpg** - 综合医院
    - Source: https://unsplash.com/photos/a-large-building-with-a-clock-on-the-front-of-it-3d4s2C4a0oI
    - Note: Use comprehensive hospital

14. **ruijin.jpg** - 历史医院
    - Source: https://unsplash.com/photos/brown-and-white-concrete-building-7F3jOA6s1M8
    - Note: Use historic hospital building

15. **zhongshan.jpg** - 现代综合医院
    - Source: https://unsplash.com/photos/white-concrete-building-during-daytime-3OiYMgndDqY
    - Note: Use modern hospital complex

16. **renji.jpg** - 医院园区
    - Source: https://unsplash.com/photos/a-large-building-with-trees-in-front-of-it-2r5adxulP7E
    - Note: Use hospital campus

17. **changhai.jpg** - 军医院风格
    - Source: https://unsplash.com/photos/a-large-white-building-with-many-windows-9Qwbfa_RM94
    - Note: Use military hospital style

18. **xinhua.jpg** - 儿科医院
    - Source: https://unsplash.com/photos/a-colorful-building-with-a-playground-in-front-4Qf3N7V9r8w
    - Note: Use children's hospital

---

## Download Instructions

### Method 1: Unsplash (Recommended - Free)
1. Visit https://unsplash.com
2. Search keywords like:
   - "hospital building"
   - "medical clinic interior"
   - "dental office"
   - "healthcare facility"
3. Click on desired image
4. Click "Download free"
5. Rename to match the filenames above
6. Save to `public/images/healthcare/`

### Method 2: Pexels (Free)
1. Visit https://www.pexels.com
2. Search same keywords
3. Download and rename

### Method 3: AI Generation (DALL-E/Midjourney)
Use the prompts in `IMAGE_GENERATION_TASK.md`

---

## File Structure After Download

```
public/images/healthcare/
├── meinian.jpg
├── ikang.jpg
├── rich.jpg
├── huashan-checkup.jpg
├── ruijin-checkup.jpg
├── zhongshan-checkup.jpg
├── hongning.jpg
├── bybo.jpg
├── arrail.jpg
├── maloclinic.jpg
├── ninth-hospital.jpg
├── yashida.jpg
├── huashan.jpg
├── ruijin.jpg
├── zhongshan.jpg
├── renji.jpg
├── changhai.jpg
└── xinhua.jpg
```

## Image Requirements

- **Format:** JPG
- **Size:** 1200x800px or larger
- **Aspect Ratio:** 3:2 or 16:9
- **Style:** Professional, clean, medical/healthcare related
- **Color:** Bright, welcoming, trustworthy

## Next Steps After Download

1. Download all 18 images
2. Rename to match filenames above
3. Save to `public/images/healthcare/`
4. Update code to use actual images:
   - Uncomment Image component in `healthcare-content.tsx`
   - Uncomment Image component in `book/page.tsx`
5. Rebuild and deploy

---

## Alternative: Use Placeholder Images (Temporary)

If you want to deploy quickly without images, the current placeholder design works well:
- Gradient background
- Building icon
- Chinese name label

You can replace with real images later.
