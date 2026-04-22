// src/data/sportsInjuries.ts

import { newsList, getNewsById } from '@/data/news'

export const sportsInjuriesData = [
{
    category: 'tennis',
    title: '網球運動傷害',
    description: '網球運動常見的傷害介紹與復健治療方案。',
    image: '/images/sports-tennis.jpg', 
    injuries: [
      {
        // 🚀 這裡的 slug 必須跟 articles.ts 裡面對應文章的 slug 完全一致
        slug: 'tennis-serve-injuries', 
        title: '網球發球傷害',
        description: '專業解析網球發球對肩袖造成的壓力與預防。',
        image: '/images/ankle-sprain.jpg',
        features: ['肩袖拉傷', '物理治療'],
        canonicalUrl: '/about/news/tennis-serve-injuries', 
      }
    ]
  },

  {
    category: 'basketball',
    title: '籃球運動傷害',
    description: '籃球運動常見的急停、跳躍所導致的傷害解析。',
    image: '/images/sports-basketball.jpg',
    injuries: [
      {
        slug: 'ankle-sprain',
        title: '踝關節扭傷 (翻船)',
        description: '跳躍落地踩到別人腳或是急停變向時發生。',
        image: '/images/ankle-sprain.jpg',
        features: ['急性期處理', '高濃度血小板注射 (PRP)', '本體感覺訓練'],
        content: '俗稱的「翻船」是最常見的籃球傷害，多數為腳踝外側韌帶撕裂。若未妥善治療，極易形成習慣性扭傷...'
      },
      {
        slug: 'acl-tear',
        title: '十字韌帶撕裂',
        description: '膝蓋受到強烈扭轉力道導致的嚴重傷害。',
        image: '/images/acl-tear.jpg',
        features: ['術後復健', '肌肉力量強化'],
        content: '前十字韌帶（ACL）撕裂通常發生在膝蓋瞬間改變方向時。無論是否進行手術，完善的復健計畫都是重返球場的關鍵...'
      }
    ]
  },

    {
    category: 'baseball',
    title: '棒球運動傷害',
    description: '籃球運動常見的急停、跳躍所導致的傷害解析。',
    image: '/images/sports-basketball.jpg',
    injuries: [
      {
        slug: 'ankle-sprain',
        title: '踝關節扭傷 (翻船)',
        description: '跳躍落地踩到別人腳或是急停變向時發生。',
        image: '/images/ankle-sprain.jpg',
        features: ['急性期處理', '高濃度血小板注射 (PRP)', '本體感覺訓練'],
        content: '俗稱的「翻船」是最常見的籃球傷害，多數為腳踝外側韌帶撕裂。若未妥善治療，極易形成習慣性扭傷...'
      },
      {
        slug: 'acl-tear',
        title: '十字韌帶撕裂',
        description: '膝蓋受到強烈扭轉力道導致的嚴重傷害。',
        image: '/images/acl-tear.jpg',
        features: ['術後復健', '肌肉力量強化'],
        content: '前十字韌帶（ACL）撕裂通常發生在膝蓋瞬間改變方向時。無論是否進行手術，完善的復健計畫都是重返球場的關鍵...'
      }
    ]
  },

  
    {
    category: 'weight-training',
    title: '重訓運動傷害',
    description: '籃球運動常見的急停、跳躍所導致的傷害解析。',
    image: '/images/sports-basketball.jpg',
    injuries: [
      {
        slug: 'ankle-sprain',
        title: '踝關節扭傷 (翻船)',
        description: '跳躍落地踩到別人腳或是急停變向時發生。',
        image: '/images/ankle-sprain.jpg',
        features: ['急性期處理', '高濃度血小板注射 (PRP)', '本體感覺訓練'],
        content: '俗稱的「翻船」是最常見的籃球傷害，多數為腳踝外側韌帶撕裂。若未妥善治療，極易形成習慣性扭傷...'
      },
      {
        slug: 'acl-tear',
        title: '十字韌帶撕裂',
        description: '膝蓋受到強烈扭轉力道導致的嚴重傷害。',
        image: '/images/acl-tear.jpg',
        features: ['術後復健', '肌肉力量強化'],
        content: '前十字韌帶（ACL）撕裂通常發生在膝蓋瞬間改變方向時。無論是否進行手術，完善的復健計畫都是重返球場的關鍵...'
      }
    ]
  },

      {
    category: 'running',
    title: '跑步運動傷害',
    description: '籃球運動常見的急停、跳躍所導致的傷害解析。',
    image: '/images/sports-basketball.jpg',
    injuries: [
      {
        slug: 'ankle-sprain',
        title: '踝關節扭傷 (翻船)',
        description: '跳躍落地踩到別人腳或是急停變向時發生。',
        image: '/images/ankle-sprain.jpg',
        features: ['急性期處理', '高濃度血小板注射 (PRP)', '本體感覺訓練'],
        content: '俗稱的「翻船」是最常見的籃球傷害，多數為腳踝外側韌帶撕裂。若未妥善治療，極易形成習慣性扭傷...'
      },
      {
        slug: 'acl-tear',
        title: '十字韌帶撕裂',
        description: '膝蓋受到強烈扭轉力道導致的嚴重傷害。',
        image: '/images/acl-tear.jpg',
        features: ['術後復健', '肌肉力量強化'],
        content: '前十字韌帶（ACL）撕裂通常發生在膝蓋瞬間改變方向時。無論是否進行手術，完善的復健計畫都是重返球場的關鍵...'
      }
    ]
  },
        {
    category: 'other',
    title: '其他運動傷害',
    description: '籃球運動常見的急停、跳躍所導致的傷害解析。',
    image: '/images/sports-basketball.jpg',
    injuries: [
      {
        slug: 'ankle-sprain',
        title: '踝關節扭傷 (翻船)',
        description: '跳躍落地踩到別人腳或是急停變向時發生。',
        image: '/images/ankle-sprain.jpg',
        features: ['急性期處理', '高濃度血小板注射 (PRP)', '本體感覺訓練'],
        content: '俗稱的「翻船」是最常見的籃球傷害，多數為腳踝外側韌帶撕裂。若未妥善治療，極易形成習慣性扭傷...'
      },
      {
        slug: 'acl-tear',
        title: '十字韌帶撕裂',
        description: '膝蓋受到強烈扭轉力道導致的嚴重傷害。',
        image: '/images/acl-tear.jpg',
        features: ['術後復健', '肌肉力量強化'],
        content: '前十字韌帶（ACL）撕裂通常發生在膝蓋瞬間改變方向時。無論是否進行手術，完善的復健計畫都是重返球場的關鍵...'
      }
    ]
  },
]