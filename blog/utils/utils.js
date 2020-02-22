/**
 * @Author: brand
 * @Date: 2019-07-13 21:25
 * @Email: brandhuang@qq.com
 */
let hljs = require('highlight.js')
let toc = require('markdown-it-toc')
// 表情
let emoji = require('markdown-it-emoji');
// 下标
let sub = require('markdown-it-sub')
// 上标
let sup = require('markdown-it-sup')
// <dl/>
let deflist = require('markdown-it-deflist')
// <abbr/>
let abbr = require('markdown-it-abbr')
// footnote
let footnote = require('markdown-it-footnote')
// insert 带有下划线 样式 ++ ++
let insert = require('markdown-it-ins')
// mark
let mark = require('markdown-it-mark')
// taskLists
let taskLists = require('markdown-it-task-lists')
let miip = require('markdown-it-images-preview');
let markdown_config = {
  html: true,        // Enable HTML tags in source
  xhtmlOut: true,        // Use '/' to close single tags (<br />).
  breaks: true,        // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
  linkify: false,        // 自动识别url
  typographer: true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {
      }
    }

    return '';
  }
}

let md = require('markdown-it')(markdown_config)
  .use(emoji)
  .use(taskLists)
  .use(sup)
  .use(sub)
  .use(deflist)
  .use(abbr)
  .use(footnote)
  .use(insert)
  .use(mark)
  .use(miip)
  .use(toc)
export function mdRender(val){
  return md.render(val)
}

export function timestampToTime (timestamp) {
  let date = new Date(parseInt(timestamp))// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D + h + m + s
}
