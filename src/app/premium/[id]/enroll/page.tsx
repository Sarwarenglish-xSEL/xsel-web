import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getPublishedCourseById } from "@/lib/db/courses";
import {
  getOpenBatchesForCourse,
  pickLatestBatchByCreatedAt,
} from "@/lib/db/batches";
import {
  getUserPurchaseForCourse,
  isUserEnrolledInBatch,
} from "@/lib/db/purchases";
import { createClient } from "@/lib/supabase/server";
import { ArrowIcon } from "@/components/Icons";
import { PaymentVerification } from "@/components/payment/PaymentVerification";
import type { Course, Purchase } from "@/types/course";

type EnrollPageProps = {
  params: Promise<{ id: string }>;
};

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function generateMetadata({
  params,
}: EnrollPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const row = await getPublishedCourseById(id);
    if (!row) return { title: "Enroll | Sarwar English Lab" };
    return {
      title: `Enroll · ${row.title} | Sarwar English Lab`,
      description: `Complete payment to enroll in ${row.title}.`,
    };
  } catch {
    return { title: "Enroll | Sarwar English Lab" };
  }
}

export default async function PremiumEnrollPage({ params }: EnrollPageProps) {
  const { id } = await params;

  if (!UUID_RE.test(id)) notFound();

  const row = await getPublishedCourseById(id);
  if (!row) notFound();

  const paymentCourse: Course = {
    id: row.id,
    title: row.title,
    description: row.description,
    course_type: row.course_type,
    category: row.category,
    price: row.price,
    thumbnail_url: row.thumbnail_url,
    instructor_id: row.instructor_id,
    status: row.status,
    registration_deadline: row.registration_deadline,
    course_start_date: row.course_start_date,
    fake_enrollments: row.fake_enrollments,
    learning_outcomes: row.learning_outcomes,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(
      `/login?next=${encodeURIComponent(`/premium/${id}/enroll`)}&required=1`,
    );
  }

  const batches = await getOpenBatchesForCourse(id);
  // Always enroll into the latest running batch by created_at (ignore URL batch picker).
  const selectedBatch = pickLatestBatchByCreatedAt(batches);
  const selectedBatchId = selectedBatch?.id ?? "";

  let existingPurchase: Purchase | null = null;
  let alreadyEnrolled = false;
  if (selectedBatchId) {
    try {
      existingPurchase = await getUserPurchaseForCourse(
        user.id,
        id,
        selectedBatchId
      );
    } catch {
      existingPurchase = null;
    }
    try {
      alreadyEnrolled = await isUserEnrolledInBatch(user.id, selectedBatchId);
    } catch {
      alreadyEnrolled = false;
    }
  }

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[linear-gradient(180deg,#f7f4ec_0%,#f3efe6_45%,#efe9df_100%)]">
      <div className="relative z-20 border-b border-white/10 bg-[#152F29]">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2 pt-[max(3.75rem,calc(env(safe-area-inset-top)+2.5rem))] sm:px-5 sm:py-4 sm:pt-24 md:px-8 md:pt-28">
          <Link
            href={`/premium/${id}`}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/75 transition hover:text-white sm:text-sm"
          >
            <ArrowIcon className="h-3.5 w-3.5 -scale-x-100 sm:h-4 sm:w-4" />
            Back to course
          </Link>
          <p className="hidden text-sm font-medium text-white/60 sm:block">
            Secure enrollment · Sarwar English Lab
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Enrollment parrot — ambient stage, same language as Reviews / Why / Social */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[92%] max-w-[40rem] translate-x-[10%] sm:w-[62%] sm:max-w-[46rem] sm:translate-x-[12%] lg:w-[52%] lg:max-w-[50rem] lg:translate-x-[14%]"
          aria-hidden
        >
          <div className="absolute inset-0 translate-y-[10%] sm:translate-y-[8%] lg:translate-y-[6%]">
            <div className="enroll-parrot-float absolute inset-0">
              <Image
                src="/enroll-parrot.png"
                alt=""
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 50vw, 80vw"
                className="object-contain object-right object-bottom opacity-[0.42] sm:opacity-[0.55] lg:opacity-[0.68]"
              />
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#f7f4ec] via-[#f3efe6]/70 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#f7f4ec]/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#efe9df]/90 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-3 sm:px-5 sm:py-8 md:px-8 md:py-12">
          <PaymentVerification
            course={paymentCourse}
            batches={batches}
            selectedBatchId={selectedBatchId}
            existingPurchase={existingPurchase}
            alreadyEnrolled={alreadyEnrolled}
          />
        </div>
      </div>
    </main>
  );
}
