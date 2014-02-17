/*
 * Copyright (c) 2013, 2014, B3log
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

/**
 * @file Noty 相关配置。
 * @author Liang Ding <DL88250@gmail.com>
 * @version 1.0.0.0, Feb 14, 2014
 */

// TODO: 初始化向导生成
exports.conf = {
    version: '1.0.0',
    notyTitle: 'B3log Noty',
    notySubTitle: '专注于知识整理与分享',
    mongo : {
        hostname: 'localhost',
        port: '27017',
        username: '',
        password: '',
        database: 'b3log-noty'
    }
};
