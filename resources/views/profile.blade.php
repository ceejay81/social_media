<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Profile') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <!-- Profile Card -->
            <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
                <div class="flex items-center">
                    <!-- Profile Picture -->
                    <div class="relative">
                        @if($user->profile_picture)
                            <img src="{{ asset('storage/' . $user->profile_picture) }}" alt="Profile Picture" class="w-32 h-32 rounded-full object-cover">
                        @else
                            <img src="{{ asset('images/default-avatar.png') }}" alt="Default Avatar" class="w-32 h-32 rounded-full object-cover">
                        @endif
                    </div>

                    <!-- Profile Info -->
                    <div class="ml-6">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">{{ $user->name }}</h3>
                        <p class="text-lg text-gray-600 dark:text-gray-400">{{ '@' . $user->name }}</p>
                        <p class="mt-2 text-gray-700 dark:text-gray-300">{{ $user->address }}</p>
                        <p class="mt-2 text-gray-700 dark:text-gray-300">{{ $user->info }}</p>
                    </div>
                </div>

                <!-- Edit Button -->
                <div class="mt-6">
                    <a href="{{ route('profile.edit') }}" class="text-blue-500 hover:text-blue-700 font-semibold">
                        {{ __('Edit Profile') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
