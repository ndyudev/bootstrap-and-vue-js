<template>
    <div>
        <h2>Trang Chủ</h2>
        <nav>
            <RouterLink :to="{ name: 'BlogList' }">Xem Blog</RouterLink> |

            <RouterLink :to="{ name: 'UserProfile' }">Thông tin</RouterLink> |

            <RouterLink :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped></style>