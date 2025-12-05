import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // 所有内容直接保存到你的硬盘里
  },
  
  collections: {
    posts: collection({
      label: 'My Blog',
      slugField: 'title',
      path: 'src/content/blog/*', // 生成文件的路径，请确保这个路径和你现在的博客路径一致
      format: { contentField: 'content' }, // 告诉它正文是 MDX 内容
      
      schema: {
        // 标题
        title: fields.slug({ name: { label: 'Title' } }),
        
        // 描述
        description: fields.text({ label: 'Description', multiline: true }),
        
        // 发布日期 (不用手敲 Nov 19 2025 了，直接选)
        pubDate: fields.date({ label: 'Date' }),
        
        // 标签 (数组形式)
        tags: fields.array(
          fields.text({ label: 'label' }), 
          { label: 'label', itemLabel: props => props.value }
        ),
        
        // 封面图 (直接拖拽上传)
        heroImage: fields.image({
          label: 'image',
          directory: 'src/assets/blogs', // 图片存到这个文件夹
          publicPath: '../../assets/blogs', // MDX 文件里引用的相对路径
        }),

        // 正文 (所见即所得编辑器)
        content: fields.document({
          label: '正文内容',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'src/assets/blogs',
            publicPath: '../../assets/blogs',
          },
        }),
      },
    }),
  },
});