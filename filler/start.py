import schedule
import time
from get_help import main_help
from get_obshyagi import main_obshyagi
from get_hospital import main_hospital


def start():
    main_help()
    main_obshyagi()
    main_hospital()


schedule.every(10).seconds.do(start)
while 1:
    schedule.run_pending()
    time.sleep(1)