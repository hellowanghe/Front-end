-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-12-03 10:19:14
-- 服务器版本： 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `baidu`
--

CREATE TABLE `baidu` (
  `newsid` int(11) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `newstime` date NOT NULL,
  `newstype` char(100) NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `baidu`
--

INSERT INTO `baidu` (`newsid`, `newstitle`, `newsimg`, `newstime`, `newstype`, `newssrc`) VALUES
(122, '谷歌收购图片搜索公司：完善网购业务', 'img/1.jpg', '2016-12-17', '精选', '搜狐中国'),
(123, '朴槿惠迎决定命运一周 在野党启动弹劾程序', 'img/2.jpg', '2016-12-17', '百家', '搜狐中国'),
(143, '京粮启动跨境电商 盈利能力有望提升', 'img/3.jpg	', '2016-12-02', '本地', '搜狐中国'),
(144, '朴槿惠迎决定命运一周 在野党启动弹劾程序', 'img/3.jpg	', '2016-12-02', '娱乐', '搜狐中国'),
(145, '大选换来的教训：美国媒体可能并不了解真实的美国', 'img/4.jpg	', '2016-12-02', '社会', '搜狐中国'),
(146, '社交总统特朗普诞生记：超级网红是怎样炼成的？', 'img/5.jpg	', '2016-12-02', '军事', '搜狐中国'),
(147, '朴槿惠迎决定命运', 'img/1.jpg	', '2016-12-02', '女人', '搜狐中国'),
(148, '朴槿惠迎决定命运一周 在野党启动弹劾程序', 'img/1.jpg	', '2016-12-02', '搞笑', '搜狐中国'),
(149, '消费者投诉小米4手机爆炸，官方称原因不明已回收..', 'img/1.jpg	', '2016-12-02', '互联网', '搜狐中国'),
(150, '移动支付难普及 Apple Pay等只占美商店销售额0.6%', 'img/11.jpg	', '2016-12-02', '科技', '搜狐中国'),
(151, '为何全球互联网股票受压？', 'img/13.jpg	', '2016-12-02', '更多', '搜狐中国'),
(152, '迎决定野党启动弹劾程序命运一周 ', 'img/6.jpg	', '2016-12-02', '社会', '搜狐中国'),
(155, '罗一笑时间发酵', 'img/1.jpg	', '2016-12-02', '娱乐', '搜狐中国'),
(156, '朴槿惠迎决定命运一周 在野党启动弹劾程序', 'img/1.jpg', '2016-12-02', '精选', '搜狐中国'),
(158, '在野党启动弹劾程序', 'img/3.jpg', '2016-12-02', '精选', '搜狐中国'),
(160, '女人花一朵', 'img/14.jpg', '2016-12-01', '女人', 'sohu'),
(161, '乐视汽车宣布获6亿美元投资 投资方为恒兴集团等', 'img/9.jpg', '2016-12-09', '百家', '环球网');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baidu`
--
ALTER TABLE `baidu`
  ADD PRIMARY KEY (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `baidu`
--
ALTER TABLE `baidu`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
