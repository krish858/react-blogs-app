-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
