-- Table: Activity

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | user_id       | int     |
-- | session_id    | int     |
-- | activity_date | date    |
-- | activity_type | enum    |
-- +---------------+---------+
-- There is no primary key for this table, it may have duplicate rows.
-- The activity_type column is an ENUM of type ('open_session', 'end_session', 'scroll_down', 'send_message').
-- The table shows the user activities for a social media website. 
-- Note that each session belongs to exactly one user.
 

-- Write an SQL query to find the daily active user count for a
--  period of 30 days ending 2019-07-27 inclusively. 
--  A user was active on someday if they made at least one activity on 
--  that day.

SELECT activity_date AS day, count(distinct user_id) AS active_users 
FROM Activity
WHERE activity_date BETWEEN date_add('2019-07-27', interval -29 day) AND '2019-07-27'
GROUP BY activity_date