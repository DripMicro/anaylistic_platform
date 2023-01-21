

scp ./gamingaffiliates_db.sql.zip muly@10.0.0.7:/home/muly/FocusOption/db/.
scp ./gamingaffiliates_db_part2.sql muly@10.0.0.7:/home/muly/FocusOption/db/.

ftp-upload -h ftp3.ftptoyoursite.com -u 445094_aff_dev --password gf638j@hfjY -d . ./gamingaffiliates_db.sql.zip

sudo apt install ftp-upload
