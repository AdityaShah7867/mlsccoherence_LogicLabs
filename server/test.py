import googleapiclient.discovery
import googleapiclient.errors

api_service_name = "youtube"
api_version = "v3"
DEVELOPER_KEY = "AIzaSyC8Xb_ioImfTDTacuGyl4vpxsLYTZ9afq0"

youtube = googleapiclient.discovery.build(
    api_service_name, api_version, developerKey=DEVELOPER_KEY)

request = youtube.commentThreads().list(
    part="snippet",
    videoId="Wp6JtHj4lyM",
    maxResults=100
)
response = request.execute()

for item in response['items']:
    print(item['snippet']['topLevelComment']['snippet']['textDisplay'])